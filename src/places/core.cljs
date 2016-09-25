(ns places.core
  (:require [ajax.core :refer [GET POST]]))

(enable-console-print!)

;; "hits"."hits"."_source"."sourceId"
(defn handler [response]
;;  (.write js/document (:sourceId (:_source (:hits (:hits response))))))
  (.log js/console (:_source (aget (clj->js response)
                         "hits" "hits"))))
(defn get-natmus-dk []
  (GET "http://samlinger.natmus.dk/api/all/_search"
       {:params {:q "_type:object&collection:es"
                 :size 1
                 :from 0
                 :media "picture"}
        :handler handler
        :response-format :json}))

(get-natmus-dk)



