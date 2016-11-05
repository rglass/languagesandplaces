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

(def svg (-> d3 (.select "#landp-node") (.append "svg")
      (.attr {:width width :height height})
    (.append "g")
      (.attr {:transform (str "translate(32," (/ height 2) ")")})))


(defn reduced-lev [xs y]
  (reduce
   (fn [x y] (if (> (second x) (second y)) x y))
   (map vector xs (map (fn [x] (metrics/levenshtein x)) xs))))

(defn get-lev-text [xs y]
  (first (reduced-lev xs y)))

(defn get-lev-number [xs y]
  (second (reduced-lev xs y)))

(defn update-text [data]
  ; DATA JOIN
  ; Join new data with old elements, if any.
  (let [text (-> svg (.selectAll "text") (.data data))]
    ; UPDATE
    ; Update old elements as needed
    (-> text (.attr {:class "update"}))

    ; ENTER
    ; Create new elments as needed
    (-> text (.enter) (.append "text")
      (.attr {:class "enter"
              :x     #(* %2 32)
              :dy    ".35em"}))

    ; ENTER + UPDATE
    ; Appending to the enter selection expands the update selection to include
    ; entering elements; so, operations on the update selection after appending to
    ; the enter selection will apply to both entering and updating nodes.
    (-> text (.text identity))

    ; EXIT
    ; Remove old elements as needed.
    (-> text (.exit) (.remove))))

; The initial display - all letters


; Grab a random sample of letters from the alphabet, in alphabetical order.
;; (.setInterval js/window (fn []
;;   (-> alphabet
;;     shuffle
;;     (subvec (rand-int 26))
;;     sort
;;     vec
;;     update))
;;   ; 2 seconds between swaps
;;   2000)

(defn make-se []
  (go-loop [counter-i 0
            i 1 
            j 1]
    (let [dk-response (<! (dk-nat/query-id i))
          dk-id (dk-nat/extract-id dk-response)
          se-id (se-nat/extract-id (<! (se-nat/query-id j)))
          entity (<! (se-nat/call-base-entity se-id))]
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
      (-> svg (.append "svg:image")
          (.attr 
           {:xlink:href 
            se-wi-img
            :class "left"
            :width 400
            :height 400
            :x (+ 500 (+ i 15))
            :y (+ i 15)}))

      (let [dk-tags (dk-nat/extract-tags (<! (dk-nat/id->tags dk-id)))]
        (if (not (se-nat/tags? se-id entity))
          (do
            (let [t (se-nat/id->entity se-id (<! (se-nat/call-base-entity se-id)))
                  se-tags (se-nat/extract-tags (<! (se-nat/entity->tag t)) t)]
              
              (update-text (str (get-lev-text dk-tags se-tags) ", " se-tags))
              (.log js/console (str "lev text: " (get-lev-text dk-tags se-tags) "sv tag: " se-tags "lev number" (get-lev-number dk-tags se-tags)))
              ;; change j if lev-prev > lev-now
            ))))))
    ;;(.log js/console (str counter-i ", " i ", " j))
    (recur (if (= 10 counter-i) 0 (inc counter-i))
           (if (> counter-i 9) (inc i) i)
           (inc j))))

(enable-console-print!)
(.log js/console "start")
(make-se)
(.log js/console "end")
