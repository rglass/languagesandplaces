(ns places.core
  (:require [ajax.core :refer [GET POST]]
            [cognitect.transit :as t]))

(enable-console-print!)

(defn id-to-image [id]
  (str "http://samlinger.natmus.dk/ES/" id "/image/2000/")) ; DNT/24887/image/2000/"

(defn handler [response]
  (.log js/console
        (id-to-image (.. (nth (.. (JSON/parse response) -hits -hits) 0) -_source -sourceId))))

(defn get-natmus-dk []
  (GET "http://samlinger.natmus.dk/api/all/_search"
       {:params {:q "_type:object&collection:es"
                 :size 1
                 :from 0
                 :media "picture"}
        :handler handler
        :response-format :raw}))

(get-natmus-dk)



