// Compiled by ClojureScript 1.9.229 {}
goog.provide('clj_fuzzy.schinke');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clj_fuzzy.helpers');
clj_fuzzy.schinke.que_rules = cljs.core.PersistentVector.fromArray(["atque","quoque","neque","itaque","absque","apsque","abusque","adaeque","adusque","denique","deque","susque","oblique","peraeque","plenisque","quandoque","quisque","quaeque","cuiusque","cuique","quemque","quamque","quaque","quique","quorumque","quarumque","quibusque","quosque","quasque","quotusquisque","quousque","ubique","undique","usque","uterque","utique","utroque","utribique","torque","coque","concoque","contorque","detorque","decoque","excoque","extorque","obtorque","optorque","retorque","recoque","attorque","incoque","intorque","praetorque"], true);
clj_fuzzy.schinke.simple_suffixes = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [/ibus$/,/ius$/,/ae$/,/am$/,/as$/,/em$/,/es$/,/ia$/,/is$/,/nt$/,/os$/,/ud$/,/um$/,/us$/,/a$/,/e$/,/i$/,/o$/,/u$/], null);
clj_fuzzy.schinke.verb_suffixes = new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(/iuntur$/,"$1i"),cljs.core.list(/erunt$/,"$1i"),cljs.core.list(/untur$/,"$1i"),cljs.core.list(/iunt$/,"$1i"),cljs.core.list(/unt$/,"$1i"),cljs.core.list(/beris$/,"$1bi"),cljs.core.list(/bor$/,"$1bi"),cljs.core.list(/bo$/,"$1bi"),cljs.core.list(/ero$/,"$1eri"),cljs.core.list(/mini$/),cljs.core.list(/ntur$/),cljs.core.list(/stis$/),cljs.core.list(/mur$/),cljs.core.list(/mus$/),cljs.core.list(/ris$/),cljs.core.list(/sti$/),cljs.core.list(/tis$/),cljs.core.list(/tur$/),cljs.core.list(/ns$/),cljs.core.list(/nt$/),cljs.core.list(/ri$/),cljs.core.list(/m$/),cljs.core.list(/r$/),cljs.core.list(/s$/),cljs.core.list(/t$/)], null);
/**
 * Converts all occurrences of the letter 'j' to 'i' and 'v' to 'u' in the
 * given [stem].
 */
clj_fuzzy.schinke.convert = (function clj_fuzzy$schinke$convert(stem){
return clj_fuzzy.helpers.batch_replace.call(null,stem,cljs.core.list(/j/,"i",/v/,"u"));
});
/**
 * Checks whether the given [stem] ends in -que and check whether it applies to
 * whitelist or not.
 */
clj_fuzzy.schinke.handle_que = (function clj_fuzzy$schinke$handle_que(stem){
if(cljs.core.truth_((function (){var and__24748__auto__ = clj_fuzzy.helpers.re_test_QMARK_.call(null,/que$/,stem);
if(cljs.core.truth_(and__24748__auto__)){
return clj_fuzzy.helpers.in_QMARK_.call(null,stem,clj_fuzzy.schinke.que_rules);
} else {
return and__24748__auto__;
}
})())){
return false;
} else {
return clojure.string.replace.call(null,stem,/que$/,"");
}
});
/**
 * Drop a first array of popular suffixes in the given [stem].
 */
clj_fuzzy.schinke.drop_simple_suffixes = (function clj_fuzzy$schinke$drop_simple_suffixes(stem){
var temp__4655__auto__ = cljs.core.some.call(null,(function (p1__30876_SHARP_){
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,p1__30876_SHARP_,stem))){
return p1__30876_SHARP_;
} else {
return null;
}
}),clj_fuzzy.schinke.simple_suffixes);
if(cljs.core.truth_(temp__4655__auto__)){
var rule = temp__4655__auto__;
return clojure.string.replace.call(null,stem,rule,"");
} else {
return stem;
}
});
/**
 * Drop a second array of popular suffixes in the given [stem] and apply a
 * replacement in some cases.
 */
clj_fuzzy.schinke.drop_verb_suffixes = (function clj_fuzzy$schinke$drop_verb_suffixes(stem){
var temp__4655__auto__ = cljs.core.some.call(null,(function (p1__30877_SHARP_){
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,cljs.core.first.call(null,p1__30877_SHARP_),stem))){
return p1__30877_SHARP_;
} else {
return null;
}
}),clj_fuzzy.schinke.verb_suffixes);
if(cljs.core.truth_(temp__4655__auto__)){
var rule = temp__4655__auto__;
var match = (cljs.core.truth_(cljs.core.second.call(null,rule))?cljs.core.re_pattern.call(null,[cljs.core.str("(.{2,})"),cljs.core.str(cljs.core.first.call(null,rule))].join('')):cljs.core.first.call(null,rule));
var replacement = (function (){var or__24760__auto__ = cljs.core.second.call(null,rule);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "";
}
})();
return clojure.string.replace.call(null,stem,match,replacement);
} else {
return stem;
}
});
/**
 * Prepare a [word] before its pass through the stemming algorithm.
 */
clj_fuzzy.schinke.prep_word = (function clj_fuzzy$schinke$prep_word(word){
return clj_fuzzy.schinke.convert.call(null,clj_fuzzy.helpers.clean_non_alphabetical.call(null,clojure.string.lower_case.call(null,word)));
});
/**
 * Stem the given latin [word].
 */
clj_fuzzy.schinke.stem = (function clj_fuzzy$schinke$stem(word){
var pword = clj_fuzzy.schinke.prep_word.call(null,word);
var temp__4655__auto__ = clj_fuzzy.schinke.handle_que.call(null,pword);
if(cljs.core.truth_(temp__4655__auto__)){
var stem__$1 = temp__4655__auto__;
var simple_suffix_stem = clj_fuzzy.schinke.drop_simple_suffixes.call(null,stem__$1);
var verb_suffix_stem = clj_fuzzy.schinke.drop_verb_suffixes.call(null,stem__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"noun","noun",185846460),(((cljs.core.count.call(null,simple_suffix_stem) > (1)))?simple_suffix_stem:stem__$1),new cljs.core.Keyword(null,"verb","verb",-1492655803),(((cljs.core.count.call(null,verb_suffix_stem) > (1)))?verb_suffix_stem:stem__$1)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"noun","noun",185846460),pword,new cljs.core.Keyword(null,"verb","verb",-1492655803),pword], null);
}
});

//# sourceMappingURL=schinke.js.map?rel=1478134422165