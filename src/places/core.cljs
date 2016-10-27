(ns places.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [places.dk.natmus :as dk-nat]
            [places.se.natmus :as se-nat]
            [clj-fuzzy.metrics :as metrics]
            [clj-fuzzy.stemmers :as stemmers]))

(enable-console-print!)

;; Return the link if the stem of the Danish and Swedish word is the same
(defn reduce-tags [dk-nat-tags se-nat-tags]
  (doseq [d dk-nat-tags]
   (reduce #((if (= (stemmers/lancaster (:tag d)) 
                    (stemmers/lancaster (:tag %1)))
               (:link (:tag (nth %1 0))))) se-nat-tags)))

(defn query-images-it [dk-nat-tags-i se-nat-tags-i]
  (let [dk-nat-tags (dk-nat/tags dk-nat-tags-i)
        se-nat-tags (se-nat/tags se-nat-tags-i)]
    (if (nil? se-nat-tags)
      (query-images-it (+1 dk-nat-tags-i) 0)
      (let [r (reduce-tags dk-nat-tags
                           se-nat-tags)]
              (if (nil? r)
                (query-images-it dk-nat-tags (+1 se-nat-tags))
                (.log js/console r))))))                
  
(defn query-images []
  (query-images-it 0 0))

(.write js/document (html [:html {:lang "en"} [:body]]))

(query-images)
