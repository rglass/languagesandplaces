(ns places.dk.natmus
  (:require-macros 
   [hiccups.core :as hiccups :refer [html]]
   [cljs.core.async.macros :refer [go]])
  (:require [places.util :as util]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! chan put! >!]]))

(def base-url "http://samlinger.natmus.dk")
(def default-collection "ES")
(def search-suffix "/api/all/_search?q=")

(defn id->image [id]
  (str base-url "/" id "/image/800/"))

(defn extract-id [response]
  (:_id (nth (:hits (:hits (:body response))) 0)))

(defn query-id [i]  
  (http/get (str base-url 
                 search-suffix
                 "_type:asset&collection:es")
            {:query-params {:size 1
                            :from i
                            :media "picture"}
             :content-type "application/json"
             :with-credentials? false}))

(defn id->tags [id]
  (http/get
   (str base-url 
        search-suffix
        "(_id:" id ")")
   {:content-type "application/json"
    :with-credentials? false}))

(defn extract-tags [response]
  (:tags (:_source (nth (:hits (:hits (:body response))) 0))))

