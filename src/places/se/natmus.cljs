(ns places.se.natmus
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [places.util :as util]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t])
  (:use
   [cljs-hash.md5    :only [md5]]))

(def entity-base-url "https://www.wikidata.org/wiki/Special:EntityData")
(def base-url "https://query.wikidata.org/bigdata/namespace/wdq/sparql")
(def sparql-query
  "SELECT ?item WHERE { ?item wdt:P195 wd:Q842858 . } LIMIT 1 OFFSET ")

(defn extract-id [response]
 (let [r (t/reader :json)
       b (get (get (t/read r (:body response)) "results") "bindings")]
   (if (contains? b 0)
     (clojure.string/replace (get (get (nth b 0) "item") "value") "http://www.wikidata.org/entity/" ""))))

(defn query-id [offset]
  (http/get base-url
            {:query-params {"query"
                            (str sparql-query offset)
                            "format" "json"}
             :with-credentials? false}))

;; Finds the tags for the entity.
;;
;; API Call:
;;   GET https://www.wikidata.org/wiki/Special:EntityData/Q34038.json
;; Extraction:
;;   ['entities']['Q34038']['labels']['sv']['value']
(defn entity->tag [entity]
  (http/get (str entity-base-url "/" entity ".json")
            {:with-credentials? false}))
      
(defn extract-tags [response entity]
  (:value (:sv (:labels ((keyword entity) (:entities (:body response)))))))

(defn call-base-entity [id]
  (http/get (str entity-base-url "/" id ".json")
            {:with-credentials? false}))
;; Finds the tags with an id as input.
;; API Call:
;;   GET https://www.wikidata.org/wiki/Special:EntityData/Q7917207.json
;; Extraction:
;;   ['entities']['Q7917207']['claims']['P180'][0]['mainsnak']['datavalue']['value']['id']
(defn tags-extr [id response]
  (:claims ((keyword id) (:entities (:body response)))))
(defn tags? [id response]
  (empty? ((keyword "P180") (:claims ((keyword id) (:entities (:body response)))))))
(defn id->entity [id response]
  (:id (:value (:datavalue (:mainsnak (nth ((keyword "P180") (:claims ((keyword id) (:entities (:body response))))) 0))))))

(def wikimedia-file "https://commons.wikimedia.org/wiki/File:")

(defn call-image [id]
  (http/get (str entity-base-url "/" id ".json")
            {:with-credentials? false}))

;; https://commons.wikimedia.org/wiki/File:Marcus_Larson_-_Waterfall_in_Sm%C3%A5land_-_Google_Art_Project.jpg
;; ['entities']['Q7917207']['claims']['P18'][0]['mainsnak']['datavalue']['value']

(defn id->image [response id]
  ;;(str wikimedia-file 
  (:value (:datavalue (:mainsnak (nth ((keyword "P18") (:claims ((keyword id) (:entities (:body response))))) 0)))))

;; ;; Query to get the real image.
(defn call-wiki-image [filename]
  (http/get "https://commons.wikimedia.org/w/api.php"
            {:query-params {"action" "query"
                            "titles" (str "File:" filename)
                            "prop" "imageinfo"
                            "iiprop" "url"
                            "format" "json"
                            "origin" "*"}
             :with-credentials? false}))

;; ;;['query']['pages']['5270028']['imageinfo'][0]['url']
(defn extract-wiki-image [response]
  ;;  (:url (nth (:imageinfo (take 1 (:pages (:query (:body response))))) 0)))
  (let [buf (:pages (:query (:body response)))]
   (:url (nth (:imageinfo ((keyword (first (keys buf))) buf)) 0))))
#_(defn extract-wiki-image [s]
   (let [buf (md5 s)
         [first-char second-char] buf]
     (str "https://upload.wikimedia.org/wikipedia/commons/" 
          first-char 
          "/" 
          first-char second-char
          "/"
          s)))

#_(defn id->image [response id]
  (clojure.string/replace (str "https://upload.wikimedia.org/wikipedia/commons/" (:value (:datavalue (:mainsnak (nth ((keyword "P18") (:claims ((keyword id) (:entities (:body response))))) 0))))) " " "_"))


;; https://commons.wikimedia.org/wiki/File:The_Entry_of_King_Gustav_Vasa_of_Sweden_into_Stockholm_-_color.jpg
;; https://commons.wikimedia.org/wiki/File:The_Entry_of_King_Gustav_Vasa_of_Sweden_into_Stockholm_-_color.jpg
