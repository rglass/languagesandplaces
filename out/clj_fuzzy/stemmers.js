// Compiled by ClojureScript 1.9.229 {}
goog.provide('clj_fuzzy.stemmers');
goog.require('cljs.core');
goog.require('clj_fuzzy.lancaster');
goog.require('clj_fuzzy.lovins');
goog.require('clj_fuzzy.porter');
goog.require('clj_fuzzy.schinke');
clj_fuzzy.stemmers.lancaster = clj_fuzzy.lancaster.stem;
goog.exportSymbol('clj_fuzzy.stemmers.lancaster', clj_fuzzy.stemmers.lancaster);
clj_fuzzy.stemmers.lovins = clj_fuzzy.lovins.stem;
goog.exportSymbol('clj_fuzzy.stemmers.lovins', clj_fuzzy.stemmers.lovins);
clj_fuzzy.stemmers.porter = clj_fuzzy.porter.stem;
goog.exportSymbol('clj_fuzzy.stemmers.porter', clj_fuzzy.stemmers.porter);
clj_fuzzy.stemmers.schinke = clj_fuzzy.schinke.stem;
goog.exportSymbol('clj_fuzzy.stemmers.schinke', clj_fuzzy.stemmers.schinke);

//# sourceMappingURL=stemmers.js.map?rel=1478134422266