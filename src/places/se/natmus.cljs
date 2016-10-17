(ns places.se.natmus
  (:require [places.util :as util]))

(def entity-base-url "https://www.wikidata.org/wiki/Special:EntityData")
(def base-url "https://query.wikidata.org/bigdata/namespace/wdq/sparql")
(def sparql-query
  "SELECT ?item WHERE { ?item wdt:P195 wd:Q842858 . } LIMIT 10 OFFSET 10")

(defn tags []
  (util/tags query-id))

(defn extract-id [response]
  (clojure.string/replace 
   (:value (:item (nth (:bindings (:results (:body response))) 0)))
   "http://www.wikidata.org/entity/" ""))

(defn query-id []
  (go
    (let [response 
          (<! (http/get base-url
                        {:query-params {"query"
                                        sparql-query
                                        "format" "json"}
                         :with-credentials? false}))]
      (extract-id response))))

;; Finds the tags for the entity.
;;
;; API Call:
;;   GET https://www.wikidata.org/wiki/Special:EntityData/Q34038.json
;; Extraction:
;;   ['entities']['Q34038']['labels']['sv']['value']
(defn entity->tag [entity]
  (go
    (let [response 
          (<! (http/get (str entity-base-url "/" entity ".json")
                        {:with-credentials? false}))]
      (:value (:sv (:labels (get (:entities (:body response) entity))))))))


;; Finds the tags with an id as input.
;; API Call:
;;   GET https://www.wikidata.org/wiki/Special:EntityData/Q7917207.json
;; Extraction:
;;   ['entities']['Q7917207']['claims']['P180'][0]['mainsnak']['datavalue']['value']['id']
(defn id->tags [id]
  (go
    (let [base-entity 
          (<! (http/get (str entity-base-url "/" id ".json")
                        {:with-credentials? false}))]
      
      (entity->tag (:id (:value (:datavalue (:mainsnak (nth (get (:claims (get (:entities (:body base-entity)) id)) "P180") 0)))))))))

(def file-url-prefix "https://commons.wikimedia.org/wiki/File:")
;; https://commons.wikimedia.org/wiki/File:Marcus_Larson_-_Waterfall_in_Sm%C3%A5land_-_Google_Art_Project.jpg
;; ['entities']['Q7917207']['claims']['P18'][0]['mainsnak']['datavalue']['value']
(defn id->image [id]
  (go
    (let [response 
          (<! (http/get (str entity-base-url "/" id ".json")
                        {:with-credentials? false}))]
      (:value (:datavalue (:mainsnak (nth (get (:claims (get (:entities (:body response)) id)) "P18") 0)))))))
