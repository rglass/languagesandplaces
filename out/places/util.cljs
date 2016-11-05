(ns places.util
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :refer [go]])
  (:require [hiccups.runtime :as hiccupsrt]
            [cljs.core.async :refer [<!]]))

#_(defn tags [query-fn id->tags-fn id->image-fn i]
  (let [out (chan)]
    (let [id (<! (query-fn))
            tags (<! (id->tags-fn id))
            image (<! (id->image-fn id))]
        (do (prn tags)
    (map (fn [t] {:tag t :link image}) tags)))))

(defn image->link [image]
  (html [:img {:src image}]))
