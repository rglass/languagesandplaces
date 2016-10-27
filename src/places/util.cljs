(ns places.util
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]))

(defn tags [query-fn id->tags-fn id->image-fn i]
  (go (let [id (<! (query-fn))
            tags (<! (id->tags-fn id))
            image (<! (id->image-fn id))]
        (do (prn tags)
    (map (fn [t] {:tag t :link image}) tags)))))

(defn image->link [image]
  (html [:img {:src image}]))
