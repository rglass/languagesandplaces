// Compiled by ClojureScript 1.9.229 {}
goog.provide('clj_fuzzy.porter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clj_fuzzy.helpers');
clj_fuzzy.porter.make_suffixes = (function clj_fuzzy$porter$make_suffixes(var_args){
var args__25842__auto__ = [];
var len__25835__auto___30829 = arguments.length;
var i__25836__auto___30830 = (0);
while(true){
if((i__25836__auto___30830 < len__25835__auto___30829)){
args__25842__auto__.push((arguments[i__25836__auto___30830]));

var G__30831 = (i__25836__auto___30830 + (1));
i__25836__auto___30830 = G__30831;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return clj_fuzzy.porter.make_suffixes.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

clj_fuzzy.porter.make_suffixes.cljs$core$IFn$_invoke$arity$variadic = (function (strings){
return cljs.core.re_pattern.call(null,[cljs.core.str("("),cljs.core.str(clojure.string.join.call(null,"|",strings)),cljs.core.str(")$")].join(''));
});

clj_fuzzy.porter.make_suffixes.cljs$lang$maxFixedArity = (0);

clj_fuzzy.porter.make_suffixes.cljs$lang$applyTo = (function (seq30828){
return clj_fuzzy.porter.make_suffixes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30828));
});

clj_fuzzy.porter.step_2_suffixes = clj_fuzzy.porter.make_suffixes.call(null,"ational","tional","enci","anci","izer","bli","alli","entli","ousli","ization","ation","ator","alism","iveness","fulness","ousness","aliti","iviti","biliti","logi");
clj_fuzzy.porter.step_3_suffixes = clj_fuzzy.porter.make_suffixes.call(null,"icate","ative","alize","iciti","ical","ful","ness");
clj_fuzzy.porter.step_4_suffixes = clj_fuzzy.porter.make_suffixes.call(null,"al","ance","ence","er","ic","able","ible","ant","ement","ment","ent","ou","ism","ate","iti","ous","ive","ize");
clj_fuzzy.porter.step_2_map = cljs.core.PersistentHashMap.fromArrays(["izer","biliti","fulness","iveness","logi","alli","ousness","bli","alism","aliti","ator","ation","anci","ational","tional","iviti","ization","enci"],["ize","ble","ful","ive","log","al","ous","ble","al","al","ate","ate","ance","ate","tion","ive","ize","ence"]);
clj_fuzzy.porter.step_3_map = new cljs.core.PersistentArrayMap(null, 7, ["icate","ic","ative","","alize","al","iciti","ic","ical","ic","ful","","ness",""], null);
clj_fuzzy.porter.c = "[^aeiou]";
clj_fuzzy.porter.v = "[aeiouy]";
clj_fuzzy.porter.cc = [cljs.core.str(clj_fuzzy.porter.c),cljs.core.str(clj_fuzzy.porter.c),cljs.core.str("*")].join('');
clj_fuzzy.porter.vv = [cljs.core.str(clj_fuzzy.porter.v),cljs.core.str(clj_fuzzy.porter.v),cljs.core.str("*")].join('');
clj_fuzzy.porter.re_test_fn = (function clj_fuzzy$porter$re_test_fn(pattern_string){
return (function (string){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,cljs.core.re_pattern.call(null,pattern_string),string);
});
});
clj_fuzzy.porter.mgr0_QMARK_ = clj_fuzzy.porter.re_test_fn.call(null,[cljs.core.str("^("),cljs.core.str(clj_fuzzy.porter.cc),cljs.core.str(")?"),cljs.core.str(clj_fuzzy.porter.vv),cljs.core.str(clj_fuzzy.porter.cc)].join(''));
clj_fuzzy.porter.meq1_QMARK_ = clj_fuzzy.porter.re_test_fn.call(null,[cljs.core.str("^("),cljs.core.str(clj_fuzzy.porter.cc),cljs.core.str(")?"),cljs.core.str(clj_fuzzy.porter.vv),cljs.core.str(clj_fuzzy.porter.cc),cljs.core.str("("),cljs.core.str(clj_fuzzy.porter.vv),cljs.core.str(")?$")].join(''));
clj_fuzzy.porter.mgr1_QMARK_ = clj_fuzzy.porter.re_test_fn.call(null,[cljs.core.str("^("),cljs.core.str(clj_fuzzy.porter.cc),cljs.core.str(")?"),cljs.core.str(clj_fuzzy.porter.vv),cljs.core.str(clj_fuzzy.porter.cc),cljs.core.str(clj_fuzzy.porter.vv),cljs.core.str(clj_fuzzy.porter.cc)].join(''));
clj_fuzzy.porter.vowel_in_stem_QMARK_ = clj_fuzzy.porter.re_test_fn.call(null,[cljs.core.str("^("),cljs.core.str(clj_fuzzy.porter.cc),cljs.core.str(")?"),cljs.core.str(clj_fuzzy.porter.v)].join(''));
clj_fuzzy.porter.steps_QMARK_ = clj_fuzzy.porter.re_test_fn.call(null,[cljs.core.str("^"),cljs.core.str(clj_fuzzy.porter.cc),cljs.core.str(clj_fuzzy.porter.v),cljs.core.str("[^aeiouwxy]$")].join(''));
clj_fuzzy.porter.remove_last_of = (function clj_fuzzy$porter$remove_last_of(string,kind){
var index = string.lastIndexOf(kind);
if((index < (0))){
return string;
} else {
return [cljs.core.str(cljs.core.subs.call(null,string,(0),index)),cljs.core.str(cljs.core.subs.call(null,string,(index + cljs.core.count.call(null,kind))))].join('');
}
});
clj_fuzzy.porter.$match = (function clj_fuzzy$porter$$match(regex,word){
var vec__30835 = cljs.core.re_find.call(null,regex,word);
var matched = cljs.core.nth.call(null,vec__30835,(0),null);
var group1 = cljs.core.nth.call(null,vec__30835,(1),null);
var found = vec__30835;
if(!((found == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj_fuzzy.porter.remove_last_of.call(null,word,[cljs.core.str(matched)].join('')),group1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
});
clj_fuzzy.porter.step_0 = (function clj_fuzzy$porter$step_0(word){
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,/^y/,word))){
return clojure.string.capitalize.call(null,word);
} else {
return word;
}
});
clj_fuzzy.porter.step_1a = (function clj_fuzzy$porter$step_1a(word){
var vec__30844 = clj_fuzzy.porter.$match.call(null,/(ss|i)es$/,word);
var f1 = cljs.core.nth.call(null,vec__30844,(0),null);
var v1 = cljs.core.nth.call(null,vec__30844,(1),null);
var vec__30847 = clj_fuzzy.porter.$match.call(null,/([^s])s$/,word);
var f2 = cljs.core.nth.call(null,vec__30847,(0),null);
var v2 = cljs.core.nth.call(null,vec__30847,(1),null);
if(cljs.core.truth_(f1)){
return [cljs.core.str(f1),cljs.core.str(v1)].join('');
} else {
if(cljs.core.truth_(f2)){
return [cljs.core.str(f2),cljs.core.str(v2)].join('');
} else {
return word;

}
}
});
clj_fuzzy.porter.step_1b_1 = (function clj_fuzzy$porter$step_1b_1(word){
if(cljs.core.truth_(clj_fuzzy.porter.mgr0_QMARK_.call(null,cljs.core.subs.call(null,word,(0),(cljs.core.count.call(null,word) - (3)))))){
return clj_fuzzy.helpers.chop.call(null,word);
} else {
return word;
}
});
clj_fuzzy.porter.step_1b_2 = (function clj_fuzzy$porter$step_1b_2(word){
var vec__30853 = clj_fuzzy.porter.$match.call(null,/(ed|ing)$/,word);
var stem = cljs.core.nth.call(null,vec__30853,(0),null);
var _ = cljs.core.nth.call(null,vec__30853,(1),null);
if(cljs.core.truth_(clj_fuzzy.porter.vowel_in_stem_QMARK_.call(null,stem))){
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,/(at|bl|iz)$/,stem))){
return [cljs.core.str(stem),cljs.core.str("e")].join('');
} else {
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,/([^aeiouylsz])\1$/,stem))){
return clj_fuzzy.helpers.chop.call(null,stem);
} else {
if(cljs.core.truth_(clj_fuzzy.porter.steps_QMARK_.call(null,stem))){
return [cljs.core.str(stem),cljs.core.str("e")].join('');
} else {
return stem;

}
}
}
} else {
return word;
}
});
clj_fuzzy.porter.step_1b = (function clj_fuzzy$porter$step_1b(word){
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,/eed$/,word))){
return clj_fuzzy.porter.step_1b_1.call(null,word);
} else {
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,/(ed|ing)$/,word))){
return clj_fuzzy.porter.step_1b_2.call(null,word);
} else {
return word;

}
}
});
clj_fuzzy.porter.step_1c = (function clj_fuzzy$porter$step_1c(word){
var f = cljs.core.re_find.call(null,/y$/,word);
var stem = clj_fuzzy.helpers.chop.call(null,word);
if(cljs.core.truth_((function (){var and__24748__auto__ = f;
if(cljs.core.truth_(and__24748__auto__)){
return clj_fuzzy.porter.vowel_in_stem_QMARK_.call(null,stem);
} else {
return and__24748__auto__;
}
})())){
return [cljs.core.str(stem),cljs.core.str("i")].join('');
} else {
return word;
}
});
clj_fuzzy.porter.step_23_procedure = (function clj_fuzzy$porter$step_23_procedure(word,regex,step_map){
var vec__30859 = clj_fuzzy.porter.$match.call(null,regex,word);
var stem = cljs.core.nth.call(null,vec__30859,(0),null);
var suffix = cljs.core.nth.call(null,vec__30859,(1),null);
if(cljs.core.truth_((function (){var and__24748__auto__ = stem;
if(cljs.core.truth_(and__24748__auto__)){
return clj_fuzzy.porter.mgr0_QMARK_.call(null,stem);
} else {
return and__24748__auto__;
}
})())){
return [cljs.core.str(stem),cljs.core.str(cljs.core.get.call(null,step_map,suffix))].join('');
} else {
return word;
}
});
clj_fuzzy.porter.step_2 = (function clj_fuzzy$porter$step_2(word){
return clj_fuzzy.porter.step_23_procedure.call(null,word,clj_fuzzy.porter.step_2_suffixes,clj_fuzzy.porter.step_2_map);
});
clj_fuzzy.porter.step_3 = (function clj_fuzzy$porter$step_3(word){
return clj_fuzzy.porter.step_23_procedure.call(null,word,clj_fuzzy.porter.step_3_suffixes,clj_fuzzy.porter.step_3_map);
});
clj_fuzzy.porter.step_4a = (function clj_fuzzy$porter$step_4a(word){
var vec__30865 = clj_fuzzy.porter.$match.call(null,/(s|t)(ion)$/,word);
var stem = cljs.core.nth.call(null,vec__30865,(0),null);
var suffix = cljs.core.nth.call(null,vec__30865,(1),null);
var ss = [cljs.core.str(stem),cljs.core.str(suffix)].join('');
if(cljs.core.truth_((function (){var and__24748__auto__ = stem;
if(cljs.core.truth_(and__24748__auto__)){
return clj_fuzzy.porter.mgr1_QMARK_.call(null,ss);
} else {
return and__24748__auto__;
}
})())){
return ss;
} else {
return word;
}
});
clj_fuzzy.porter.step_4 = (function clj_fuzzy$porter$step_4(word){
var vec__30871 = clj_fuzzy.porter.$match.call(null,clj_fuzzy.porter.step_4_suffixes,word);
var stem = cljs.core.nth.call(null,vec__30871,(0),null);
var suffix = cljs.core.nth.call(null,vec__30871,(1),null);
if(cljs.core.truth_((function (){var and__24748__auto__ = stem;
if(cljs.core.truth_(and__24748__auto__)){
return clj_fuzzy.porter.mgr1_QMARK_.call(null,stem);
} else {
return and__24748__auto__;
}
})())){
return stem;
} else {
return clj_fuzzy.porter.step_4a.call(null,word);
}
});
clj_fuzzy.porter.step_5a = (function clj_fuzzy$porter$step_5a(word){
if(cljs.core.truth_(clj_fuzzy.helpers.re_test_QMARK_.call(null,/e$/,word))){
var stem = clj_fuzzy.helpers.chop.call(null,word);
if(cljs.core.truth_((function (){var or__24760__auto__ = clj_fuzzy.porter.mgr1_QMARK_.call(null,stem);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
var and__24748__auto__ = clj_fuzzy.porter.meq1_QMARK_.call(null,stem);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,clj_fuzzy.porter.steps_QMARK_.call(null,stem));
} else {
return and__24748__auto__;
}
}
})())){
return stem;
} else {
return word;
}
} else {
return word;
}
});
clj_fuzzy.porter.step_5b = (function clj_fuzzy$porter$step_5b(word){
if(cljs.core.truth_((function (){var and__24748__auto__ = clj_fuzzy.helpers.re_test_QMARK_.call(null,/ll$/,word);
if(cljs.core.truth_(and__24748__auto__)){
return clj_fuzzy.porter.mgr1_QMARK_.call(null,word);
} else {
return and__24748__auto__;
}
})())){
return clj_fuzzy.helpers.chop.call(null,word);
} else {
return word;
}
});
clj_fuzzy.porter.step_5c = (function clj_fuzzy$porter$step_5c(word){
if(cljs.core._EQ_.call(null,"Y",cljs.core.first.call(null,word))){
return [cljs.core.str("y"),cljs.core.str(cljs.core.drop.call(null,(1),word))].join('');
} else {
return word;
}
});
clj_fuzzy.porter.stem = (function clj_fuzzy$porter$stem(word){
if((cljs.core.count.call(null,word) < (3))){
return word;
} else {
return clj_fuzzy.porter.step_5c.call(null,clj_fuzzy.porter.step_5b.call(null,clj_fuzzy.porter.step_5a.call(null,clj_fuzzy.porter.step_4.call(null,clj_fuzzy.porter.step_3.call(null,clj_fuzzy.porter.step_2.call(null,clj_fuzzy.porter.step_1c.call(null,clj_fuzzy.porter.step_1b.call(null,clj_fuzzy.porter.step_1a.call(null,clj_fuzzy.porter.step_0.call(null,clojure.string.lower_case.call(null,word)))))))))));
}
});

//# sourceMappingURL=porter.js.map?rel=1478134422114