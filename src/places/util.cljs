(ns places.util)

(defn tags [query-fn tags-fn id->tags-fn id->image-fn]
  (let [id (query-fn)
        tags (id->tags-fn id)
        image (id->image-fn id)]
  (map (fn [t] {:tag t :link image}) tags)))

(defn image->link [image]
  (html [:img {:src image}]))
