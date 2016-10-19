(ns places.util
  (:require-macros [hiccups.core :as hiccups :refer [html]]))

(defn tags [query-fn id->tags-fn id->image-fn i]
  (let [id (query-fn)
        tags (id->tags-fn id)
        image (id->image-fn id)]
  (map (fn [t] {:tag t :link image}) tags)))

(defn image->link [image]
  (html [:img {:src image}]))
