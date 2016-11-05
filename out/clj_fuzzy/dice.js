// Compiled by ClojureScript 1.9.229 {}
goog.provide('clj_fuzzy.dice');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clj_fuzzy.helpers');
clj_fuzzy.dice.letter_pairs = (function clj_fuzzy$dice$letter_pairs(string){
return cljs.core.set.call(null,clj_fuzzy.helpers.bigrams.call(null,clojure.string.upper_case.call(null,clojure.string.replace.call(null,string,/\s+/,""))));
});
/**
 * Compute the Dice coefficient between two [strings].
 */
clj_fuzzy.dice.coefficient = (function clj_fuzzy$dice$coefficient(string1,string2){
if(cljs.core._EQ_.call(null,string1,string2)){
return 1.0;
} else {
if(((cljs.core.count.call(null,string1) < (2))) && ((cljs.core.count.call(null,string2) < (2)))){
return 0.0;
} else {
var p1 = clj_fuzzy.dice.letter_pairs.call(null,string1);
var p2 = clj_fuzzy.dice.letter_pairs.call(null,string2);
var sum = (cljs.core.count.call(null,p1) + cljs.core.count.call(null,p2));
return ((2.0 * cljs.core.count.call(null,clojure.set.intersection.call(null,p1,p2))) / sum);

}
}
});

//# sourceMappingURL=dice.js.map?rel=1478134422569