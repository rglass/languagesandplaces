// Compiled by ClojureScript 1.9.229 {}
goog.provide('clj_fuzzy.tversky');
goog.require('cljs.core');
goog.require('clojure.set');
clj_fuzzy.tversky.I = (function clj_fuzzy$tversky$I(X,Y){
return cljs.core.count.call(null,clojure.set.intersection.call(null,X,Y));
});
clj_fuzzy.tversky.R = (function clj_fuzzy$tversky$R(X,Y){
return cljs.core.count.call(null,clojure.set.difference.call(null,X,Y));
});
/**
 * Compute the original assymmetric Tversky index for the given [sequences] and
 * the given [alpha] and [beta].
 */
clj_fuzzy.tversky.assymmetric_index = (function clj_fuzzy$tversky$assymmetric_index(seq1,seq2,alpha,beta){
var X = cljs.core.set.call(null,seq1);
var Y = cljs.core.set.call(null,seq2);
var XIY = clj_fuzzy.tversky.I.call(null,X,Y);
return (XIY / ((XIY + (alpha * clj_fuzzy.tversky.R.call(null,X,Y))) + (beta * clj_fuzzy.tversky.R.call(null,Y,X))));
});
/**
 * Compute the symmetric variant of the Tversky undex for the given [sequences] and
 * the given [alpha] and [beta].
 */
clj_fuzzy.tversky.symmetric_index = (function clj_fuzzy$tversky$symmetric_index(seq1,seq2,alpha,beta){
var X = cljs.core.set.call(null,seq1);
var Y = cljs.core.set.call(null,seq2);
var XIY = clj_fuzzy.tversky.I.call(null,X,Y);
var X_Y = clj_fuzzy.tversky.R.call(null,X,Y);
var Y_X = clj_fuzzy.tversky.R.call(null,Y,X);
var a = (function (){var x__25098__auto__ = X_Y;
var y__25099__auto__ = Y_X;
return ((x__25098__auto__ < y__25099__auto__) ? x__25098__auto__ : y__25099__auto__);
})();
var b = (function (){var x__25091__auto__ = X_Y;
var y__25092__auto__ = Y_X;
return ((x__25091__auto__ > y__25092__auto__) ? x__25091__auto__ : y__25092__auto__);
})();
return (XIY / (XIY + (beta * ((alpha * a) + Math.pow(((1) - alpha),b)))));
});
/**
 * Compute the tversky index for the given [sequences] with given [:alpha] and [:beta]
 * and in a [:symmetric] fashion or not.
 */
clj_fuzzy.tversky.index = (function clj_fuzzy$tversky$index(var_args){
var args__25842__auto__ = [];
var len__25835__auto___30937 = arguments.length;
var i__25836__auto___30938 = (0);
while(true){
if((i__25836__auto___30938 < len__25835__auto___30937)){
args__25842__auto__.push((arguments[i__25836__auto___30938]));

var G__30939 = (i__25836__auto___30938 + (1));
i__25836__auto___30938 = G__30939;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return clj_fuzzy.tversky.index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

clj_fuzzy.tversky.index.cljs$core$IFn$_invoke$arity$variadic = (function (seq1,seq2,p__30934){
var map__30935 = p__30934;
var map__30935__$1 = ((((!((map__30935 == null)))?((((map__30935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30935):map__30935);
var alpha = cljs.core.get.call(null,map__30935__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(1));
var beta = cljs.core.get.call(null,map__30935__$1,new cljs.core.Keyword(null,"beta","beta",455605892),(1));
var symmetric = cljs.core.get.call(null,map__30935__$1,new cljs.core.Keyword(null,"symmetric","symmetric",-960442568),false);
return (cljs.core.truth_(symmetric)?clj_fuzzy.tversky.symmetric_index:clj_fuzzy.tversky.assymmetric_index).call(null,seq1,seq2,alpha,beta);
});

clj_fuzzy.tversky.index.cljs$lang$maxFixedArity = (2);

clj_fuzzy.tversky.index.cljs$lang$applyTo = (function (seq30931){
var G__30932 = cljs.core.first.call(null,seq30931);
var seq30931__$1 = cljs.core.next.call(null,seq30931);
var G__30933 = cljs.core.first.call(null,seq30931__$1);
var seq30931__$2 = cljs.core.next.call(null,seq30931__$1);
return clj_fuzzy.tversky.index.cljs$core$IFn$_invoke$arity$variadic(G__30932,G__30933,seq30931__$2);
});


//# sourceMappingURL=tversky.js.map?rel=1478134422401