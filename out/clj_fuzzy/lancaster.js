// Compiled by ClojureScript 1.9.229 {}
goog.provide('clj_fuzzy.lancaster');
goog.require('cljs.core');
goog.require('clj_fuzzy.helpers');
clj_fuzzy.lancaster.rules_per_letter = cljs.core.PersistentHashMap.fromArrays(["a","b","c","d","e","f","g","h","i","j","l","m","n","p","r","s","t","u","v","y","z"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("ia","",new cljs.core.Keyword(null,"intact","intact",-1755370897)),cljs.core.list("a","",new cljs.core.Keyword(null,"intact","intact",-1755370897))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("bb","b",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("ytic","ys",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ic","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("nc","nt",new cljs.core.Keyword(null,"continue","continue",-207346553))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("dd","d",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ied","y",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ceed","cess",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("eed","ee",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ed","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("hood","",new cljs.core.Keyword(null,"continue","continue",-207346553))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("e","",new cljs.core.Keyword(null,"continue","continue",-207346553))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("lief","liev",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("if","",new cljs.core.Keyword(null,"continue","continue",-207346553))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("ing","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("iag","y",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ag","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("gg","g",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("th","",new cljs.core.Keyword(null,"intact","intact",-1755370897)),cljs.core.list("guish","ct",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ish","",new cljs.core.Keyword(null,"continue","continue",-207346553))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("i","",new cljs.core.Keyword(null,"intact","intact",-1755370897)),cljs.core.list("i","y",new cljs.core.Keyword(null,"continue","continue",-207346553))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("ij","id",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("fuj","fus",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("uj","ud",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("oj","od",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("hej","her",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("verj","vert",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("misj","mit",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("nj","nd",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("j","s",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("ifiabl","",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("iabl","y",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("abl","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ibl","",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("bil","bl",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("cl","c",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("iful","y",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ful","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ul","",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ial","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ual","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("al","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ll","l",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("ium","",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("um","",new cljs.core.Keyword(null,"intact","intact",-1755370897)),cljs.core.list("ism","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("mm","m",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("sion","j",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("xion","ct",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ion","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ian","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("an","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("een","",new cljs.core.Keyword(null,"protect","protect",-67966332)),cljs.core.list("en","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("nn","n",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("ship","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("pp","p",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("er","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ear","",new cljs.core.Keyword(null,"protect","protect",-67966332)),cljs.core.list("ar","",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ior","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("or","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ur","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("rr","r",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("tr","t",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ier","y",new cljs.core.Keyword(null,"continue","continue",-207346553))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("ies","y",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("sis","s",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("is","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ness","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ss","",new cljs.core.Keyword(null,"protect","protect",-67966332)),cljs.core.list("ous","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("us","",new cljs.core.Keyword(null,"intact","intact",-1755370897)),cljs.core.list("s","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("s","",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("plicat","ply",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("at","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ment","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ent","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ant","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ript","rib",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("orpt","orb",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("duct","duc",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("sumpt","sum",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("cept","ceiv",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("olut","olv",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("sist","",new cljs.core.Keyword(null,"protect","protect",-67966332)),cljs.core.list("ist","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("tt","t",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("iqu","",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ogu","og",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("siv","j",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("eiv","",new cljs.core.Keyword(null,"protect","protect",-67966332)),cljs.core.list("iv","",new cljs.core.Keyword(null,"continue","continue",-207346553))], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("bly","bl",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ily","y",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ply","",new cljs.core.Keyword(null,"protect","protect",-67966332)),cljs.core.list("ly","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ogy","og",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("phy","ph",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("omy","om",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("opy","op",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ity","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ety","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("lty","l",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("istry","",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ary","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ory","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("ify","",new cljs.core.Keyword(null,"stop","stop",-2140911342)),cljs.core.list("ncy","nt",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("acy","",new cljs.core.Keyword(null,"continue","continue",-207346553))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list("iz","",new cljs.core.Keyword(null,"continue","continue",-207346553)),cljs.core.list("yz","ys",new cljs.core.Keyword(null,"stop","stop",-2140911342))], null)]);
clj_fuzzy.lancaster.vowel_QMARK_ = (function clj_fuzzy$lancaster$vowel_QMARK_(string){
return clj_fuzzy.helpers.re_test_QMARK_.call(null,/[aeiouy]/,[cljs.core.str(string)].join(''));
});
clj_fuzzy.lancaster.acceptable_QMARK_ = (function clj_fuzzy$lancaster$acceptable_QMARK_(stem){
if(cljs.core.truth_(clj_fuzzy.lancaster.vowel_QMARK_.call(null,cljs.core.first.call(null,stem)))){
return (cljs.core.count.call(null,stem) > (1));
} else {
var and__24748__auto__ = (cljs.core.count.call(null,stem) > (2));
if(and__24748__auto__){
return clj_fuzzy.lancaster.vowel_QMARK_.call(null,stem);
} else {
return and__24748__auto__;
}
}
});
clj_fuzzy.lancaster.apply_letter_rules = (function clj_fuzzy$lancaster$apply_letter_rules(stem,rules,intact){
var i = (0);
while(true){
var rule = cljs.core.get.call(null,rules,i,cljs.core.List.EMPTY);
var match = cljs.core.first.call(null,rule);
var replacement = cljs.core.second.call(null,rule);
var kind = cljs.core.last.call(null,rule);
var breakpoint = (cljs.core.count.call(null,stem) - cljs.core.count.call(null,match));
if((cljs.core.seq.call(null,rule) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,stem], null);
} else {
if((cljs.core.not.call(null,intact)) && (cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"intact","intact",-1755370897)))){
var G__30880 = (i + (1));
i = G__30880;
continue;
} else {
if(((breakpoint < (0))) || (cljs.core.not_EQ_.call(null,cljs.core.subs.call(null,stem,breakpoint),match))){
var G__30881 = (i + (1));
i = G__30881;
continue;
} else {
if(cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"protect","protect",-67966332))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,stem], null);
} else {
var new_stem = [cljs.core.str(cljs.core.subs.call(null,stem,(0),breakpoint)),cljs.core.str(replacement)].join('');
if(cljs.core.not.call(null,clj_fuzzy.lancaster.acceptable_QMARK_.call(null,new_stem))){
var G__30882 = (i + (1));
i = G__30882;
continue;
} else {
if(cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"continue","continue",-207346553))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new_stem], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new_stem], null);

}
}

}
}
}
}
break;
}
});
/**
 * Applying the above rules to a correctly prepped [string].
 */
clj_fuzzy.lancaster.apply_rules = (function clj_fuzzy$lancaster$apply_rules(string){
var stem = string;
var intact = true;
while(true){
var temp__4655__auto__ = clj_fuzzy.lancaster.rules_per_letter.call(null,cljs.core.last.call(null,stem));
if(cljs.core.truth_(temp__4655__auto__)){
var rules = temp__4655__auto__;
var vec__30886 = clj_fuzzy.lancaster.apply_letter_rules.call(null,stem,rules,intact);
var continue$ = cljs.core.nth.call(null,vec__30886,(0),null);
var new_stem = cljs.core.nth.call(null,vec__30886,(1),null);
if(cljs.core.truth_(continue$)){
var G__30889 = new_stem;
var G__30890 = false;
stem = G__30889;
intact = G__30890;
continue;
} else {
return new_stem;
}
} else {
return stem;
}
break;
}
});
/**
 * Prepare the given [string] for the stemmer by stripping it of any
 *   non-alphabetical characters and applying a lowercase transformation.
 */
clj_fuzzy.lancaster.prep_string = (function clj_fuzzy$lancaster$prep_string(string){
return clojure.string.lower_case.call(null,clj_fuzzy.helpers.clean_non_alphabetical.call(null,string));
});
/**
 * Stem the given [word] with the Lancaster stemming algorithm.
 */
clj_fuzzy.lancaster.stem = (function clj_fuzzy$lancaster$stem(word){
return clj_fuzzy.lancaster.apply_rules.call(null,clj_fuzzy.lancaster.prep_string.call(null,word));
});

//# sourceMappingURL=lancaster.js.map?rel=1478134422244