(ns places.core
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [hiccups.runtime :as hiccupsrt]
            [places.dk.natmus :as dk-nat]
            [places.se.natmus :as se-nat]
            [places.util :as util]
            [clj-fuzzy.metrics :as metrics]
            [clj-fuzzy.stemmers :as stemmers]
            [cljs.core.async :refer [<! chan put! >!]]))

(defn make-dk []
  (let [dk-tags (atom ())]
    (go-loop [i 1]
      (let [id (dk-nat/extract-id (<! (dk-nat/query-id i)))]
        (.log js/console id)
      ;;(.write js/document (html [:img {:src (dk-nat/id->image id)}]))
      ;;(.log js/console (str i ", " id))
      ;;(prn (<! (dk-nat/id->tags id))))
      (swap! dk-tags conj (dk-nat/extract-tags (<! (dk-nat/id->tags id))))
      (.log js/console (prn dk-tags)))
      (if (< i 100)
        (recur (inc i))))))
;; Now make more tags from dk and add an if to ask for sameness of tags.
(defn make-se []
  (go-loop [i 1]
    (let [id (se-nat/extract-id (<! (se-nat/query-id i)))
          entity (<! (se-nat/call-base-entity id))]
      (if (not (se-nat/tags? id entity))
        (do
          (let [t (se-nat/id->entity id (<! (se-nat/call-base-entity id)))]
            ;;(.log js/console t)
            ;;(.log js/console (prn (<! (se-nat/entity->tag t)) t))
            (let [nat-se-tags (se-nat/extract-tags (<! (se-nat/entity->tag t)) t)]
            (if (not (empty? nat-se-tags))
              (.write js/document (html [:img {:src (se-nat/id->image (<! (se-nat/call-image id)) id)}]))))))))
    (if (< i 10) 
        (recur (inc i)))))

(enable-console-print!)
(.log js/console "start")
;;(make-se)
(make-dk)
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
