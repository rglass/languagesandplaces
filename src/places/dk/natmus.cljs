(ns places.dk.natmus
  (:require [places.util :as util]
            [cljs.core.async.macros :refer [go]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))
(def base-url "http://samlinger.natmus.dk")
(def default-collection "ES")
(def search-suffix "/api/all/_search?q=")

(defn tags []
  (util/tags query-id))

(defn id->image [id]
  (str samlinger-url "/" samlinger-default-collection "/" id "/image/800/"))

(defn extract-id [response]
  (:sourceId (:_source (nth (:hits (:hits (:body response))) 0))))

(defn query-id []  
  (go 
    (let [response 
          (<! (http/get (str base-url 
                             search-suffix
                             "_type:object&collection:es")
                        {:query-params {:size 1
                                        :from 0
                                        :media "picture"}
                         :content-type "application/json"
                         :with-credentials? false}))]
      (extract-id response))))


(defn id->tags [id]
  (go
    (let [response 
          (<! (http/get
               (str samlinger-url 
                    samlinger-search
                    "_type:asset&sourceId:" id)
               {:content-type "application/json"
                :with-credentials? false}))]
          (:tags (:_source (nth (:hits (:hits (:body response))) 0))))))
