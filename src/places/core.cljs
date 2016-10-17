(ns places.core
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [hiccups.runtime :as hiccupsrt]
            [places.dk :as dk-nat]
            [places.se.natmus :as se-nat]
            [clj-fuzzy.metrics :as metrics]
            [clj-fuzzy.stemmers :as stemmers]))

(enable-console-print!)

(defn query-images []
  (let [dk-nat-tags (dk-nat/tags)
        se-nat-tags (se-nat/tags)]
    (.log js/console (reduce 
     (fn [dk se]
       (if (= (lancaster (:tag se)) (lancaster dk))
         (:link se))) dk-tags se-tags))))


(.write js/document (html [:html {:lang "en"} [:body]]))

(query-images)
