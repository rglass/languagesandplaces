// Compiled by ClojureScript 1.9.229 {}
goog.provide('strokes');
goog.require('cljs.core');
goog.require('mrhyde.core');
goog.require('mrhyde.funpatcher');
goog.require('cljs.reader');
strokes.d3 = (function (){var ct = this;
return (ct["d3"]);
})();
strokes.edn_parser_callback = (function strokes$edn_parser_callback(request){
return cljs.reader.read_string.call(null,request.responseText);
});
strokes.fetch_edn = (function strokes$fetch_edn(url,callback){
return strokes.d3.xhr(url,"application/octet-stream",callback).response(strokes.edn_parser_callback);
});
strokes.bootstrap = (function strokes$bootstrap(var_args){
var args__25842__auto__ = [];
var len__25835__auto___32534 = arguments.length;
var i__25836__auto___32535 = (0);
while(true){
if((i__25836__auto___32535 < len__25835__auto___32534)){
args__25842__auto__.push((arguments[i__25836__auto___32535]));

var G__32536 = (i__25836__auto___32535 + (1));
i__25836__auto___32535 = G__32536;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return strokes.bootstrap.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});
goog.exportSymbol('strokes.bootstrap', strokes.bootstrap);

strokes.bootstrap.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
mrhyde.core.bootstrap.call(null);

if(cljs.core.truth_(strokes.d3)){
mrhyde.funpatcher.patch_args_keyword_to_fn.call(null,strokes.d3.selection.prototype,"attr",(1));

mrhyde.funpatcher.patch_args_keyword_to_fn.call(null,strokes.d3.selection.prototype,"text",(0));

mrhyde.funpatcher.patch_args_keyword_to_fn.call(null,strokes.d3.layout.pack.prototype,"value",(0));

mrhyde.funpatcher.patch_args_keyword_to_fn.call(null,strokes.d3.layout.pack.prototype,"children",(0));

return mrhyde.funpatcher.patch_args_keyword_to_fn.call(null,strokes.d3.selection.prototype,"data",(1));
} else {
return null;
}
});

strokes.bootstrap.cljs$lang$maxFixedArity = (0);

strokes.bootstrap.cljs$lang$applyTo = (function (seq32533){
return strokes.bootstrap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32533));
});

if(cljs.core.truth_(strokes.d3)){
strokes.timer = strokes.d3.timer;

strokes.arc = strokes.d3.svg.arc;

strokes.polygon = strokes.d3.geom.polygon;

strokes.voronoi = strokes.d3.geom.voronoi;

strokes.category10 = strokes.d3.scale.category10;

strokes.category20 = strokes.d3.scale.category20;

strokes.category20b = strokes.d3.scale.category20b;

strokes.category20c = strokes.d3.scale.category20c;
} else {
}

//# sourceMappingURL=strokes.js.map?rel=1478134556887