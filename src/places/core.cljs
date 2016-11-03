(ns places.core
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [hiccups.runtime :as hiccupsrt]
            [places.dk.natmus :as dk-nat]
            [places.se.natmus :as se-nat]
            [places.util :as util]
            [clj-fuzzy.metrics :as metrics]
            [clj-fuzzy.stemmers :as stemmers]
            [cljs.core.async :refer [<! chan put! >!]]
            [strokes :refer [d3]]))

(strokes/bootstrap)

(def width 960)
(def height 500)

(def svg (-> d3 (.select "body") (.append "svg")
      (.attr {:width width :height height})))

(defn make-se []
  (go-loop [i 1 
            j 1]
    (let [dk-response (<! (dk-nat/query-id i))
          dk-id (dk-nat/extract-id dk-response)
          se-id (se-nat/extract-id (<! (se-nat/query-id j)))
          entity (<! (se-nat/call-base-entity se-id))]
      (.log js/console dk-id)
      (-> svg (.append "svg:image")
          (.attr 
           {:xlink:href 
            (dk-nat/id->image 
             (clojure.string/replace 
              (dk-nat/extract-id dk-response)
              "-" "/"))
            :class "left"
            :width 400
            :height 400
            :x (+ i 15)
            :y (+ i 15)}))
      (let [se-img (se-nat/id->image (<! (se-nat/call-image se-id)) se-id)
            se-wi-img 
            (se-nat/extract-wiki-image
             (<! (se-nat/call-wiki-image se-img)))]
        (.log js/console se-img)
        (.log js/console (prn se-wi-img))
      (-> svg (.append "svg:image")
          (.attr 
           {:xlink:href 
            se-wi-img
            :class "left"
            :width 400
            :height 400
            :x (+ 500 (+ i 15))
            :y (+ i 15)}))

      ;;(swap! dk-tags conj (dk-nat/extract-tags (<! (dk-nat/id->tags dk-id))))
      (let [dk-tags (dk-nat/extract-tags (<! (dk-nat/id->tags dk-id)))]
      (if (not (se-nat/tags? se-id entity))
        (do
          (let [t (se-nat/id->entity se-id (<! (se-nat/call-base-entity se-id)))
                se-tags (se-nat/extract-tags (<! (se-nat/entity->tag t)) t)]
              ;;(swap! se-tags conj nat-se-tags)
              ;;(.log js/console (str j ", " se-id (prn se-tags)))
            ;;(if (not (empty? nat-se-tags))
              ;;(.write js/document (html [:img {:src (se-nat/se-id->image (<! (se-nat/call-image se-id)) se-id)}]))))))))
            ;;(.log js/console (prn (map #(metrics/levenshtein %1 %2) (map vector dk-tags se-tags))))))))))
            ))))))
    (recur (inc i) (inc j))))

(enable-console-print!)
(.log js/console "start")
(make-se)
(.log js/console "end")
