(defproject places "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [cljs-http "0.1.41"]
                 [hiccups "0.3.0"]
                 [lein-figwheel "0.5.4-7"]
                 [org.clojure/core.async "0.2.391"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [clj-fuzzy "0.3.3"]
                 [net.drib/strokes "0.5.1"]
                 [net.drib/mrhyde "0.5.4-SNAPSHOT"]
                 [cljs-hash "0.0.2"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.1"]
            [lein-figwheel "0.5.7"]]
  :npm {:dependencies [[source-map-support "0.4.0"]]}
  :source-paths ["src" "target/classes"]
  :asset-path "out"
;;  :optimizations :advanced
  :clean-targets ["out" "release"]
  :target-path "target"
  :cljsbuild {
              :builds [ { :id "places" 
              :source-paths ["src/"]
              :figwheel true
              :compiler {  :main "places.core" }}]})
