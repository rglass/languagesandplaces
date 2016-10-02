(ns places.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [ajax.core :refer [GET POST]]
            [hiccups.runtime :as hiccupsrt]))

(enable-console-print!)

(defn image-to-link [image]
  (html [:img {:src image}]))

(defn id-to-image [id]
  (str "http://samlinger.natmus.dk/ES/" id "/image/800/"))

;; Takes the response data from a natmus request and extracts the id.
(defn natmus-dk-id [response]
  (.. (nth (.. (JSON/parse response) -hits -hits) 0) -_source -sourceId))

(defn handle-natmus-se-image [response]
  (.write js/document (image-to-link (.. (nth (.. (JSON/parse response) -results -bindings) 0) -P18 -value))))

(defn natmus-se-query-image [id]
  (GET "https://query.wikidata.org/sparql"
       {:params {:query 
                 (str "SELECT ?P18 WHERE { wd:" id " wdt:P18 ?P18 . } LIMIT 1")
                 :format "json"}
        :handler handle-natmus-se-image
        :response-format :raw}))

(defn natmus-se-id [response]
  (.. (nth (.. (JSON/parse response) -results -bindings) 0) -item -value))

;; Handles the request.
(defn handle-natmus-dk [response]
  (let [nat-resp (natmus-dk-id response)
        nat-tags (natmus-dk-tags response)
        nat-img (id-to-image nat-resp)
        nat-link (image-to-link  nat-img)]
    (do (js/console.log nat-tags)
        (.write js/document nat-link))))

(defn handle-natmus-se [response]
  (natmus-se-query-image 
   (clojure.string/replace 
    (str (natmus-se-id response)) 
    "http://www.wikidata.org/entity/" "")))

(defn handle-natmus-dk-tags [response]
  (for [tag (.. (nth (.. (JSON/parse response) -hits -hits) 0) -_source -tags)]
    (get-natmus-se tag)))

(defn get-natmus-dk-tags [source-id]
  (GET "http://samlinger.natmus.dk/api/all/_search"
       {:params {:q (str "_type:object&collection:es&sourceId:" source-id)}
        :handler handle-natmus-dk-tags
        :response-format :raw}))

(defn get-natmus-dk []
  (GET "http://samlinger.natmus.dk/api/all/_search"
       {:params {:q "_type:object&collection:es"
                 :size 1
                 :from 0
                 :media "picture"}
        :handler handle-natmus-dk
        :response-format :raw}))
;; sparql to get what it depicts: SELECT ?P180 WHERE { wd:Q7917207 wdt:P180 ?P180 . } LIMIT 1

(defn get-natmus-se [tag]
  (GET "https://query.wikidata.org/sparql"
       {:params {:query 
"SELECT ?item WHERE { ?item wdt:P195 wd:Q842858 . } LIMIT 10 OFFSET 10"
                 :format "json"}
        :handler handle-natmus-se
        :response-format :raw}))

(.write js/document (html [:html
                           [:body]]))
(get-natmus-dk)

