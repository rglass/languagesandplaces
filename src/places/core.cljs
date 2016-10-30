(ns places.core
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :refer [go]])
  (:require [hiccups.runtime :as hiccupsrt]
            [places.dk.natmus :as dk-nat]
            [places.se.natmus :as se-nat]
            [places.util :as util]
            [clj-fuzzy.metrics :as metrics]
            [clj-fuzzy.stemmers :as stemmers]
            [cljs.core.async :refer [<! chan put! >!]]))

(defn make-dk []
  (let [out (dk-nat/query-id)]
    (go
      (.write js/document (html [:html {:lang "en"} [:body]]))
      (let [id (dk-nat/extract-id (<! out))]
        (.write js/document (html [:img {:src (dk-nat/id->image id)}]))
        (.log js/console (prn (dk-nat/extract-tags (<! (dk-nat/id->tags id)))))))))

(defn make-se []
  (let [out (se-nat/query-id)]
    (go 
      (let [id (se-nat/extract-id (<! out))]
        (.log js/console id)
        (.log js/console (prn (se-nat/id->image (<! (se-nat/call-image id)) id)))))))

(enable-console-print!)
(.log js/console "start")
(make-se)
(.log js/console "end")
;; Return the link if the stem of the Danish and Swedish word is the same
#_(defn reduce-tags [dk-nat-tags se-nat-tags]
  (doseq [d dk-nat-tags]
   (reduce #((if (= (stemmers/lancaster (:tag d)) 
                    (stemmers/lancaster (:tag %1)))
               (:link (:tag (nth %1 0))))) se-nat-tags)))

#_(defn query-images-it [dk-nat-tags-i se-nat-tags-i]
  (let [dk-nat-tags (dk-nat/tags dk-nat-tags-i)
        se-nat-tags (se-nat/tags se-nat-tags-i)]
    (if (nil? se-nat-tags)
      (query-images-it (+1 dk-nat-tags-i) 0)
      (let [r (reduce-tags dk-nat-tags
                           se-nat-tags)]
              (if (nil? r)
                (query-images-it dk-nat-tags (+1 se-nat-tags))
                (.log js/console r))))))                
  
#_(defn query-images []
  (query-images-it 0 0))



#_(query-images)
