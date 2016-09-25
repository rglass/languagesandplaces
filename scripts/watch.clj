(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'places.core
   :output-to "out/places.js"
   :output-dir "out"})
