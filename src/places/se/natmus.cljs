(ns places.se.natmus
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [places.util :as util]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]))

(def entity-base-url "https://www.wikidata.org/wiki/Special:EntityData")
(def base-url "https://query.wikidata.org/bigdata/namespace/wdq/sparql")
(def sparql-query
  "SELECT ?item WHERE { ?item wdt:P195 wd:Q842858 . } LIMIT 10 OFFSET 10")

(defn extract-id [response]
 (let [r (t/reader :json)]
   (clojure.string/replace (get (get (nth (get (get (t/read r (:body response)) "results") "bindings") 0) "item") "value") "http://www.wikidata.org/entity/" "")))

(defn query-id []
  (http/get base-url
            {:query-params {"query"
                            sparql-query
                            "format" "json"}
             :with-credentials? false}))

;; Finds the tags for the entity.
;;
;; API Call:
;;   GET https://www.wikidata.org/wiki/Special:EntityData/Q34038.json
;; Extraction:
;;   ['entities']['Q34038']['labels']['sv']['value']
#_(defn entity->tag [entity]
  (http/get (str entity-base-url "/" entity ".json")
                        {:with-credentials? false}))
      
#_(defn extract-tags [response entity]
  (:value (:sv (:labels (get (:entities (:body response)) entity)))))

#_(defn call-base-entity []
  (http/get (str entity-base-url "/" id ".json")
            {:with-credentials? false}))
;; Finds the tags with an id as input.
;; API Call:
;;   GET https://www.wikidata.org/wiki/Special:EntityData/Q7917207.json
;; Extraction:
;;   ['entities']['Q7917207']['claims']['P180'][0]['mainsnak']['datavalue']['value']['id']

#_(defn id->tags [id base-entity]
  (entity->tag (:id (:value (:datavalue (:mainsnak (nth (get (:claims (get (:entities (:body base-entity)) id)) "P180") 0)))))))

(def wikimedia-file "https://commons.wikimedia.org/wiki/File:")

(defn call-image [id]
  (http/get (str entity-base-url "/" id ".json")
            {:with-credentials? false}))


;; https://commons.wikimedia.org/wiki/File:Marcus_Larson_-_Waterfall_in_Sm%C3%A5land_-_Google_Art_Project.jpg
;; ['entities']['Q7917207']['claims']['P18'][0]['mainsnak']['datavalue']['value']

(defn id->image [response id]
  (str wikimedia-file (:value (:datavalue (:mainsnak (nth ((keyword "P18") (:claims ((keyword id) (:entities (:body response))))) 0))))))
