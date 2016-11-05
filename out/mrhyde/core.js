// Compiled by ClojureScript 1.9.229 {}
goog.provide('mrhyde.core');
goog.require('cljs.core');
goog.require('mrhyde.typepatcher');
mrhyde.core.bootstrap = (function mrhyde$core$bootstrap(var_args){
var args__25842__auto__ = [];
var len__25835__auto___30896 = arguments.length;
var i__25836__auto___30897 = (0);
while(true){
if((i__25836__auto___30897 < len__25835__auto___30896)){
args__25842__auto__.push((arguments[i__25836__auto___30897]));

var G__30898 = (i__25836__auto___30897 + (1));
i__25836__auto___30897 = G__30898;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.core.bootstrap.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});
goog.exportSymbol('mrhyde.core.bootstrap', mrhyde.core.bootstrap);

mrhyde.core.bootstrap.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
mrhyde.typepatcher.patch_known_vector_types.call(null);

return mrhyde.typepatcher.patch_known_mappish_types.call(null);
});

mrhyde.core.bootstrap.cljs$lang$maxFixedArity = (0);

mrhyde.core.bootstrap.cljs$lang$applyTo = (function (seq30895){
return mrhyde.core.bootstrap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30895));
});


//# sourceMappingURL=core.js.map?rel=1478134422281