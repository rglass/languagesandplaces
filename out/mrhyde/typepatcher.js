// Compiled by ClojureScript 1.9.229 {}
goog.provide('mrhyde.typepatcher');
goog.require('cljs.core');
goog.require('mrhyde.mrhyde');
goog.require('mrhyde.guts');
goog.require('clojure.set');
mrhyde.typepatcher.dp = (function mrhyde$typepatcher$dp(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26210 = arguments.length;
var i__25836__auto___26211 = (0);
while(true){
if((i__25836__auto___26211 < len__25835__auto___26210)){
args__25842__auto__.push((arguments[i__25836__auto___26211]));

var G__26212 = (i__25836__auto___26211 + (1));
i__25836__auto___26211 = G__26212;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.dp.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.dp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
});

mrhyde.typepatcher.dp.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.dp.cljs$lang$applyTo = (function (seq26209){
return mrhyde.typepatcher.dp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26209));
});

mrhyde.typepatcher.install_js_get_prop = (function (){
var reusable_descriptor = {};
(reusable_descriptor["configurable"] = true);

(reusable_descriptor["enumerable"] = true);

return ((function (reusable_descriptor){
return (function mrhyde$typepatcher$internal_js_getset_prop(obj,nam,getfn){
(reusable_descriptor["get"] = getfn);

return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.install_js_hidden_get_prop = (function (){
var reusable_descriptor = {};
(reusable_descriptor["configurable"] = true);

(reusable_descriptor["enumerable"] = false);

return ((function (reusable_descriptor){
return (function mrhyde$typepatcher$internal_js_getset_prop(obj,nam,getfn){
(reusable_descriptor["get"] = getfn);

return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.hide_js_props = (function (){
var reusable_descriptor = {};
(reusable_descriptor["enumerable"] = false);

return ((function (reusable_descriptor){
return (function mrhyde$typepatcher$internal_js_getset_prop(obj,s){
var seq__26223 = cljs.core.seq.call(null,s);
var chunk__26224 = null;
var count__26225 = (0);
var i__26226 = (0);
while(true){
if((i__26226 < count__26225)){
var nam = cljs.core._nth.call(null,chunk__26224,i__26226);
Object.defineProperty(obj,nam,reusable_descriptor);

var G__26227 = seq__26223;
var G__26228 = chunk__26224;
var G__26229 = count__26225;
var G__26230 = (i__26226 + (1));
seq__26223 = G__26227;
chunk__26224 = G__26228;
count__26225 = G__26229;
i__26226 = G__26230;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26223);
if(temp__4657__auto__){
var seq__26223__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26223__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__26223__$1);
var G__26231 = cljs.core.chunk_rest.call(null,seq__26223__$1);
var G__26232 = c__25571__auto__;
var G__26233 = cljs.core.count.call(null,c__25571__auto__);
var G__26234 = (0);
seq__26223 = G__26231;
chunk__26224 = G__26232;
count__26225 = G__26233;
i__26226 = G__26234;
continue;
} else {
var nam = cljs.core.first.call(null,seq__26223__$1);
Object.defineProperty(obj,nam,reusable_descriptor);

var G__26235 = cljs.core.next.call(null,seq__26223__$1);
var G__26236 = null;
var G__26237 = (0);
var G__26238 = (0);
seq__26223 = G__26235;
chunk__26224 = G__26236;
count__26225 = G__26237;
i__26226 = G__26238;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.install_js_getset_prop = (function (){
var reusable_descriptor = {};
(reusable_descriptor["configurable"] = true);

(reusable_descriptor["enumerable"] = true);

return ((function (reusable_descriptor){
return (function mrhyde$typepatcher$internal_js_getset_prop(obj,nam,getfn,setfn){
(reusable_descriptor["get"] = getfn);

(reusable_descriptor["set"] = setfn);

return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.install_js_hidden_getset_prop = (function (){
var reusable_descriptor = {};
(reusable_descriptor["configurable"] = true);

(reusable_descriptor["enumerable"] = false);

return ((function (reusable_descriptor){
return (function mrhyde$typepatcher$internal_js_getset_prop(obj,nam,getfn,setfn){
(reusable_descriptor["get"] = getfn);

(reusable_descriptor["set"] = setfn);

return Object.defineProperty(obj,nam,reusable_descriptor);
});
;})(reusable_descriptor))
}).call(null);
mrhyde.typepatcher.aset_hidden = (function mrhyde$typepatcher$aset_hidden(o,nam,p){
(o[nam] = p);

return mrhyde.typepatcher.hide_js_props.call(null,o,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nam], null));
});
mrhyde.typepatcher.hyde_cache_key = "$cljs$mrhyde$cache";
mrhyde.typepatcher.hyde_access_key = "$cljs$mrhyde$acccess";
mrhyde.typepatcher.hyde_keylist_key = "$cljs$mrhyde$keylist";
mrhyde.typepatcher.hyde_keyset_key = "$cljs$mrhyde$keyset";
mrhyde.typepatcher.cljs_partition_key = "cljs$lang$protocol_mask$partition0$";
mrhyde.typepatcher.hyde_parition_key = [cljs.core.str("$cljs$mrhyde$"),cljs.core.str(mrhyde.typepatcher.cljs_partition_key)].join('');
mrhyde.typepatcher.hyde_array_ensure_cached = (function mrhyde$typepatcher$hyde_array_ensure_cached(h){
if(cljs.core.not.call(null,goog.object.containsKey(h,mrhyde.typepatcher.hyde_cache_key))){
return mrhyde.typepatcher.aset_hidden.call(null,h,mrhyde.typepatcher.hyde_cache_key,cljs.core.apply.call(null,cljs.core.array,h));
} else {
return null;
}
});
mrhyde.typepatcher.hyde_array_pop = (function mrhyde$typepatcher$hyde_array_pop(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26244 = arguments.length;
var i__25836__auto___26245 = (0);
while(true){
if((i__25836__auto___26245 < len__25835__auto___26244)){
args__25842__auto__.push((arguments[i__25836__auto___26245]));

var G__26246 = (i__25836__auto___26245 + (1));
i__25836__auto___26245 = G__26246;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_pop.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_pop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method pop");
});

mrhyde.typepatcher.hyde_array_pop.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_pop.cljs$lang$applyTo = (function (seq26243){
return mrhyde.typepatcher.hyde_array_pop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26243));
});

mrhyde.typepatcher.hyde_array_push = (function mrhyde$typepatcher$hyde_array_push(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26248 = arguments.length;
var i__25836__auto___26249 = (0);
while(true){
if((i__25836__auto___26249 < len__25835__auto___26248)){
args__25842__auto__.push((arguments[i__25836__auto___26249]));

var G__26250 = (i__25836__auto___26249 + (1));
i__25836__auto___26249 = G__26250;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_push.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_push.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method push");
});

mrhyde.typepatcher.hyde_array_push.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_push.cljs$lang$applyTo = (function (seq26247){
return mrhyde.typepatcher.hyde_array_push.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26247));
});

mrhyde.typepatcher.hyde_array_reverse = (function mrhyde$typepatcher$hyde_array_reverse(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26252 = arguments.length;
var i__25836__auto___26253 = (0);
while(true){
if((i__25836__auto___26253 < len__25835__auto___26252)){
args__25842__auto__.push((arguments[i__25836__auto___26253]));

var G__26254 = (i__25836__auto___26253 + (1));
i__25836__auto___26253 = G__26254;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_reverse.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_reverse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var t = this;
mrhyde.typepatcher.hyde_array_ensure_cached.call(null,t);

var c = (t[mrhyde.typepatcher.hyde_cache_key]);
c.reverse();

return t;
});

mrhyde.typepatcher.hyde_array_reverse.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_reverse.cljs$lang$applyTo = (function (seq26251){
return mrhyde.typepatcher.hyde_array_reverse.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26251));
});

mrhyde.typepatcher.hyde_array_shift = (function mrhyde$typepatcher$hyde_array_shift(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26256 = arguments.length;
var i__25836__auto___26257 = (0);
while(true){
if((i__25836__auto___26257 < len__25835__auto___26256)){
args__25842__auto__.push((arguments[i__25836__auto___26257]));

var G__26258 = (i__25836__auto___26257 + (1));
i__25836__auto___26257 = G__26258;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_shift.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_shift.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var t = this;
mrhyde.typepatcher.hyde_array_ensure_cached.call(null,t);

var c = (t[mrhyde.typepatcher.hyde_cache_key]);
return c.shift();
});

mrhyde.typepatcher.hyde_array_shift.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_shift.cljs$lang$applyTo = (function (seq26255){
return mrhyde.typepatcher.hyde_array_shift.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26255));
});

mrhyde.typepatcher.hyde_array_sort = (function mrhyde$typepatcher$hyde_array_sort(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26260 = arguments.length;
var i__25836__auto___26261 = (0);
while(true){
if((i__25836__auto___26261 < len__25835__auto___26260)){
args__25842__auto__.push((arguments[i__25836__auto___26261]));

var G__26262 = (i__25836__auto___26261 + (1));
i__25836__auto___26261 = G__26262;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_sort.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_sort.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var t = this;
mrhyde.typepatcher.hyde_array_ensure_cached.call(null,t);

var c = (t[mrhyde.typepatcher.hyde_cache_key]);
c.sort();

return t;
});

mrhyde.typepatcher.hyde_array_sort.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_sort.cljs$lang$applyTo = (function (seq26259){
return mrhyde.typepatcher.hyde_array_sort.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26259));
});

mrhyde.typepatcher.hyde_array_splice = (function mrhyde$typepatcher$hyde_array_splice(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26264 = arguments.length;
var i__25836__auto___26265 = (0);
while(true){
if((i__25836__auto___26265 < len__25835__auto___26264)){
args__25842__auto__.push((arguments[i__25836__auto___26265]));

var G__26266 = (i__25836__auto___26265 + (1));
i__25836__auto___26265 = G__26266;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_splice.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_splice.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method splice");
});

mrhyde.typepatcher.hyde_array_splice.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_splice.cljs$lang$applyTo = (function (seq26263){
return mrhyde.typepatcher.hyde_array_splice.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26263));
});

mrhyde.typepatcher.hyde_array_unshift = (function mrhyde$typepatcher$hyde_array_unshift(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26268 = arguments.length;
var i__25836__auto___26269 = (0);
while(true){
if((i__25836__auto___26269 < len__25835__auto___26268)){
args__25842__auto__.push((arguments[i__25836__auto___26269]));

var G__26270 = (i__25836__auto___26269 + (1));
i__25836__auto___26269 = G__26270;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_unshift.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_unshift.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method unshift");
});

mrhyde.typepatcher.hyde_array_unshift.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_unshift.cljs$lang$applyTo = (function (seq26267){
return mrhyde.typepatcher.hyde_array_unshift.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26267));
});

mrhyde.typepatcher.hyde_array_concat = (function mrhyde$typepatcher$hyde_array_concat(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26272 = arguments.length;
var i__25836__auto___26273 = (0);
while(true){
if((i__25836__auto___26273 < len__25835__auto___26272)){
args__25842__auto__.push((arguments[i__25836__auto___26273]));

var G__26274 = (i__25836__auto___26273 + (1));
i__25836__auto___26273 = G__26274;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method concat");
});

mrhyde.typepatcher.hyde_array_concat.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_concat.cljs$lang$applyTo = (function (seq26271){
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26271));
});

mrhyde.typepatcher.hyde_array_join = (function mrhyde$typepatcher$hyde_array_join(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26276 = arguments.length;
var i__25836__auto___26277 = (0);
while(true){
if((i__25836__auto___26277 < len__25835__auto___26276)){
args__25842__auto__.push((arguments[i__25836__auto___26277]));

var G__26278 = (i__25836__auto___26277 + (1));
i__25836__auto___26277 = G__26278;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_join.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_join.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method join");
});

mrhyde.typepatcher.hyde_array_join.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_join.cljs$lang$applyTo = (function (seq26275){
return mrhyde.typepatcher.hyde_array_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26275));
});

mrhyde.typepatcher.hyde_array_concat = (function mrhyde$typepatcher$hyde_array_concat(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26280 = arguments.length;
var i__25836__auto___26281 = (0);
while(true){
if((i__25836__auto___26281 < len__25835__auto___26280)){
args__25842__auto__.push((arguments[i__25836__auto___26281]));

var G__26282 = (i__25836__auto___26281 + (1));
i__25836__auto___26281 = G__26282;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method concat");
});

mrhyde.typepatcher.hyde_array_concat.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_concat.cljs$lang$applyTo = (function (seq26279){
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26279));
});

mrhyde.typepatcher.hyde_array_concat = (function mrhyde$typepatcher$hyde_array_concat(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26284 = arguments.length;
var i__25836__auto___26285 = (0);
while(true){
if((i__25836__auto___26285 < len__25835__auto___26284)){
args__25842__auto__.push((arguments[i__25836__auto___26285]));

var G__26286 = (i__25836__auto___26285 + (1));
i__25836__auto___26285 = G__26286;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method concat");
});

mrhyde.typepatcher.hyde_array_concat.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_concat.cljs$lang$applyTo = (function (seq26283){
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26283));
});

mrhyde.typepatcher.hyde_array_concat = (function mrhyde$typepatcher$hyde_array_concat(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26288 = arguments.length;
var i__25836__auto___26289 = (0);
while(true){
if((i__25836__auto___26289 < len__25835__auto___26288)){
args__25842__auto__.push((arguments[i__25836__auto___26289]));

var G__26290 = (i__25836__auto___26289 + (1));
i__25836__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method concat");
});

mrhyde.typepatcher.hyde_array_concat.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_concat.cljs$lang$applyTo = (function (seq26287){
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26287));
});

mrhyde.typepatcher.hyde_array_concat = (function mrhyde$typepatcher$hyde_array_concat(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26292 = arguments.length;
var i__25836__auto___26293 = (0);
while(true){
if((i__25836__auto___26293 < len__25835__auto___26292)){
args__25842__auto__.push((arguments[i__25836__auto___26293]));

var G__26294 = (i__25836__auto___26293 + (1));
i__25836__auto___26293 = G__26294;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method concat");
});

mrhyde.typepatcher.hyde_array_concat.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_concat.cljs$lang$applyTo = (function (seq26291){
return mrhyde.typepatcher.hyde_array_concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26291));
});

mrhyde.typepatcher.hyde_array_slice = (function mrhyde$typepatcher$hyde_array_slice(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26296 = arguments.length;
var i__25836__auto___26297 = (0);
while(true){
if((i__25836__auto___26297 < len__25835__auto___26296)){
args__25842__auto__.push((arguments[i__25836__auto___26297]));

var G__26298 = (i__25836__auto___26297 + (1));
i__25836__auto___26297 = G__26298;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_slice.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_slice.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var this$ = this;
var begin = cljs.core.first.call(null,args);
var end = cljs.core.second.call(null,args);
if((end == null)){
return cljs.core.drop.call(null,begin,this$);
} else {
return cljs.core.take.call(null,(end - begin),cljs.core.drop.call(null,begin,this$));
}
});

mrhyde.typepatcher.hyde_array_slice.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_slice.cljs$lang$applyTo = (function (seq26295){
return mrhyde.typepatcher.hyde_array_slice.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26295));
});

mrhyde.typepatcher.hyde_array_vector_slice = (function mrhyde$typepatcher$hyde_array_vector_slice(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26300 = arguments.length;
var i__25836__auto___26301 = (0);
while(true){
if((i__25836__auto___26301 < len__25835__auto___26300)){
args__25842__auto__.push((arguments[i__25836__auto___26301]));

var G__26302 = (i__25836__auto___26301 + (1));
i__25836__auto___26301 = G__26302;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_vector_slice.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_vector_slice.cljs$core$IFn$_invoke$arity$variadic = (function (args){
console.log("note: calling untested hyde-array vector-slice");

var this$ = this;
return cljs.core.apply.call(null,cljs.core.subvec,this$,args);
});

mrhyde.typepatcher.hyde_array_vector_slice.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_vector_slice.cljs$lang$applyTo = (function (seq26299){
return mrhyde.typepatcher.hyde_array_vector_slice.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26299));
});

mrhyde.typepatcher.hyde_array_to_source = (function mrhyde$typepatcher$hyde_array_to_source(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26304 = arguments.length;
var i__25836__auto___26305 = (0);
while(true){
if((i__25836__auto___26305 < len__25835__auto___26304)){
args__25842__auto__.push((arguments[i__25836__auto___26305]));

var G__26306 = (i__25836__auto___26305 + (1));
i__25836__auto___26305 = G__26306;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_to_source.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_to_source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method toSource");
});

mrhyde.typepatcher.hyde_array_to_source.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_to_source.cljs$lang$applyTo = (function (seq26303){
return mrhyde.typepatcher.hyde_array_to_source.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26303));
});

mrhyde.typepatcher.hyde_array_to_string = (function mrhyde$typepatcher$hyde_array_to_string(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26308 = arguments.length;
var i__25836__auto___26309 = (0);
while(true){
if((i__25836__auto___26309 < len__25835__auto___26308)){
args__25842__auto__.push((arguments[i__25836__auto___26309]));

var G__26310 = (i__25836__auto___26309 + (1));
i__25836__auto___26309 = G__26310;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_to_string.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_to_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var this$ = this;
return clojure.string.join.call(null,", ",this$);
});

mrhyde.typepatcher.hyde_array_to_string.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_to_string.cljs$lang$applyTo = (function (seq26307){
return mrhyde.typepatcher.hyde_array_to_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26307));
});

mrhyde.typepatcher.hyde_array_index_of = (function mrhyde$typepatcher$hyde_array_index_of(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26312 = arguments.length;
var i__25836__auto___26313 = (0);
while(true){
if((i__25836__auto___26313 < len__25835__auto___26312)){
args__25842__auto__.push((arguments[i__25836__auto___26313]));

var G__26314 = (i__25836__auto___26313 + (1));
i__25836__auto___26313 = G__26314;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_index_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_index_of.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method indexOf");
});

mrhyde.typepatcher.hyde_array_index_of.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_index_of.cljs$lang$applyTo = (function (seq26311){
return mrhyde.typepatcher.hyde_array_index_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26311));
});

mrhyde.typepatcher.hyde_array_last_index_of = (function mrhyde$typepatcher$hyde_array_last_index_of(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26316 = arguments.length;
var i__25836__auto___26317 = (0);
while(true){
if((i__25836__auto___26317 < len__25835__auto___26316)){
args__25842__auto__.push((arguments[i__25836__auto___26317]));

var G__26318 = (i__25836__auto___26317 + (1));
i__25836__auto___26317 = G__26318;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_last_index_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_last_index_of.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method lastIndexOf");
});

mrhyde.typepatcher.hyde_array_last_index_of.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_last_index_of.cljs$lang$applyTo = (function (seq26315){
return mrhyde.typepatcher.hyde_array_last_index_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26315));
});

mrhyde.typepatcher.hyde_array_every = (function mrhyde$typepatcher$hyde_array_every(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26320 = arguments.length;
var i__25836__auto___26321 = (0);
while(true){
if((i__25836__auto___26321 < len__25835__auto___26320)){
args__25842__auto__.push((arguments[i__25836__auto___26321]));

var G__26322 = (i__25836__auto___26321 + (1));
i__25836__auto___26321 = G__26322;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_every.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_every.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method every");
});

mrhyde.typepatcher.hyde_array_every.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_every.cljs$lang$applyTo = (function (seq26319){
return mrhyde.typepatcher.hyde_array_every.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26319));
});

mrhyde.typepatcher.hyde_array_some = (function mrhyde$typepatcher$hyde_array_some(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26324 = arguments.length;
var i__25836__auto___26325 = (0);
while(true){
if((i__25836__auto___26325 < len__25835__auto___26324)){
args__25842__auto__.push((arguments[i__25836__auto___26325]));

var G__26326 = (i__25836__auto___26325 + (1));
i__25836__auto___26325 = G__26326;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_some.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_some.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method some");
});

mrhyde.typepatcher.hyde_array_some.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_some.cljs$lang$applyTo = (function (seq26323){
return mrhyde.typepatcher.hyde_array_some.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26323));
});

mrhyde.typepatcher.hyde_array_filter = (function mrhyde$typepatcher$hyde_array_filter(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26329 = arguments.length;
var i__25836__auto___26330 = (0);
while(true){
if((i__25836__auto___26330 < len__25835__auto___26329)){
args__25842__auto__.push((arguments[i__25836__auto___26330]));

var G__26331 = (i__25836__auto___26330 + (1));
i__25836__auto___26330 = G__26331;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_filter.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var ct = this;
var v = cljs.core.vec.call(null,args);
var f = cljs.core.get.call(null,v,(0),cljs.core.identity);
var t = cljs.core.get.call(null,v,(1),undefined);
return cljs.core.vec.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (v,f,t,ct){
return (function (p1__26327_SHARP_){
return f.call(t,p1__26327_SHARP_);
});})(v,f,t,ct))
,cljs.core.seq.call(null,ct))));
});

mrhyde.typepatcher.hyde_array_filter.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_filter.cljs$lang$applyTo = (function (seq26328){
return mrhyde.typepatcher.hyde_array_filter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26328));
});

mrhyde.typepatcher.hyde_array_map = (function mrhyde$typepatcher$hyde_array_map(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26335 = arguments.length;
var i__25836__auto___26336 = (0);
while(true){
if((i__25836__auto___26336 < len__25835__auto___26335)){
args__25842__auto__.push((arguments[i__25836__auto___26336]));

var G__26337 = (i__25836__auto___26336 + (1));
i__25836__auto___26336 = G__26337;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var ct = this;
var v = cljs.core.vec.call(null,args);
var f = cljs.core.get.call(null,v,(0),cljs.core.identity);
var t = cljs.core.get.call(null,v,(1),undefined);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (v,f,t,ct){
return (function (p1__26332_SHARP_,p2__26333_SHARP_){
return f.call(t,p1__26332_SHARP_,p2__26333_SHARP_,ct);
});})(v,f,t,ct))
,cljs.core.seq.call(null,ct),cljs.core.range.call(null)));
});

mrhyde.typepatcher.hyde_array_map.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_map.cljs$lang$applyTo = (function (seq26334){
return mrhyde.typepatcher.hyde_array_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26334));
});

mrhyde.typepatcher.hyde_array_for_each = (function mrhyde$typepatcher$hyde_array_for_each(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26339 = arguments.length;
var i__25836__auto___26340 = (0);
while(true){
if((i__25836__auto___26340 < len__25835__auto___26339)){
args__25842__auto__.push((arguments[i__25836__auto___26340]));

var G__26341 = (i__25836__auto___26340 + (1));
i__25836__auto___26340 = G__26341;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_for_each.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_for_each.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var ct_26342 = this;
mrhyde.typepatcher.hyde_array_map.call(ct_26342,cljs.core.first.call(null,args),cljs.core.second.call(null,args));

return null;
});

mrhyde.typepatcher.hyde_array_for_each.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_for_each.cljs$lang$applyTo = (function (seq26338){
return mrhyde.typepatcher.hyde_array_for_each.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26338));
});

mrhyde.typepatcher.hyde_array_reduce = (function mrhyde$typepatcher$hyde_array_reduce(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26344 = arguments.length;
var i__25836__auto___26345 = (0);
while(true){
if((i__25836__auto___26345 < len__25835__auto___26344)){
args__25842__auto__.push((arguments[i__25836__auto___26345]));

var G__26346 = (i__25836__auto___26345 + (1));
i__25836__auto___26345 = G__26346;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_reduce.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_reduce.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method reduce");
});

mrhyde.typepatcher.hyde_array_reduce.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_reduce.cljs$lang$applyTo = (function (seq26343){
return mrhyde.typepatcher.hyde_array_reduce.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26343));
});

mrhyde.typepatcher.hyde_array_reduce_right = (function mrhyde$typepatcher$hyde_array_reduce_right(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26348 = arguments.length;
var i__25836__auto___26349 = (0);
while(true){
if((i__25836__auto___26349 < len__25835__auto___26348)){
args__25842__auto__.push((arguments[i__25836__auto___26349]));

var G__26350 = (i__25836__auto___26349 + (1));
i__25836__auto___26349 = G__26350;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return mrhyde.typepatcher.hyde_array_reduce_right.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

mrhyde.typepatcher.hyde_array_reduce_right.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log("WARNING: someone has called unsupported hyde-array method reduce-Right");
});

mrhyde.typepatcher.hyde_array_reduce_right.cljs$lang$maxFixedArity = (0);

mrhyde.typepatcher.hyde_array_reduce_right.cljs$lang$applyTo = (function (seq26347){
return mrhyde.typepatcher.hyde_array_reduce_right.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26347));
});

mrhyde.typepatcher.strkey = (function mrhyde$typepatcher$strkey(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return x;
}
});
mrhyde.typepatcher.gen_map_getter = (function mrhyde$typepatcher$gen_map_getter(k){
return (function (){
var t = this;
return cljs.core.get.call(null,(t[mrhyde.typepatcher.hyde_access_key]),k);
});
});
mrhyde.typepatcher.gen_map_setter = (function mrhyde$typepatcher$gen_map_setter(k){
return (function (v){
var t = this;
if(cljs.core.not.call(null,goog.object.containsKey(t,mrhyde.typepatcher.hyde_cache_key))){
var c_26351 = cljs.core.transient$.call(null,t);
mrhyde.typepatcher.aset_hidden.call(null,t,mrhyde.typepatcher.hyde_access_key,c_26351);

mrhyde.typepatcher.aset_hidden.call(null,t,mrhyde.typepatcher.hyde_cache_key,c_26351);
} else {
}

var c = (t[mrhyde.typepatcher.hyde_cache_key]);
return cljs.core.assoc_BANG_.call(null,c,k,v);
});
});
mrhyde.typepatcher.patch_map = (function mrhyde$typepatcher$patch_map(m){
mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_access_key,m);

mrhyde.typepatcher.hide_js_props.call(null,m,Object.keys(m));

var seq__26356_26360 = cljs.core.seq.call(null,cljs.core.keys.call(null,m));
var chunk__26357_26361 = null;
var count__26358_26362 = (0);
var i__26359_26363 = (0);
while(true){
if((i__26359_26363 < count__26358_26362)){
var k_26364 = cljs.core._nth.call(null,chunk__26357_26361,i__26359_26363);
if(((k_26364 instanceof cljs.core.Keyword)) && (cljs.core.not.call(null,goog.object.containsKey(m,cljs.core.name.call(null,k_26364))))){
mrhyde.typepatcher.install_js_getset_prop.call(null,m,cljs.core.name.call(null,k_26364),mrhyde.typepatcher.gen_map_getter.call(null,k_26364),mrhyde.typepatcher.gen_map_setter.call(null,k_26364));
} else {
}

var G__26365 = seq__26356_26360;
var G__26366 = chunk__26357_26361;
var G__26367 = count__26358_26362;
var G__26368 = (i__26359_26363 + (1));
seq__26356_26360 = G__26365;
chunk__26357_26361 = G__26366;
count__26358_26362 = G__26367;
i__26359_26363 = G__26368;
continue;
} else {
var temp__4657__auto___26369 = cljs.core.seq.call(null,seq__26356_26360);
if(temp__4657__auto___26369){
var seq__26356_26370__$1 = temp__4657__auto___26369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26356_26370__$1)){
var c__25571__auto___26371 = cljs.core.chunk_first.call(null,seq__26356_26370__$1);
var G__26372 = cljs.core.chunk_rest.call(null,seq__26356_26370__$1);
var G__26373 = c__25571__auto___26371;
var G__26374 = cljs.core.count.call(null,c__25571__auto___26371);
var G__26375 = (0);
seq__26356_26360 = G__26372;
chunk__26357_26361 = G__26373;
count__26358_26362 = G__26374;
i__26359_26363 = G__26375;
continue;
} else {
var k_26376 = cljs.core.first.call(null,seq__26356_26370__$1);
if(((k_26376 instanceof cljs.core.Keyword)) && (cljs.core.not.call(null,goog.object.containsKey(m,cljs.core.name.call(null,k_26376))))){
mrhyde.typepatcher.install_js_getset_prop.call(null,m,cljs.core.name.call(null,k_26376),mrhyde.typepatcher.gen_map_getter.call(null,k_26376),mrhyde.typepatcher.gen_map_setter.call(null,k_26376));
} else {
}

var G__26377 = cljs.core.next.call(null,seq__26356_26370__$1);
var G__26378 = null;
var G__26379 = (0);
var G__26380 = (0);
seq__26356_26360 = G__26377;
chunk__26357_26361 = G__26378;
count__26358_26362 = G__26379;
i__26359_26363 = G__26380;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,m)))){
mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_keylist_key,false);

mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_keyset_key,false);

mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_keylist_key,Object.keys(m));
} else {
}

return m;
});
mrhyde.typepatcher.have_patched_js_with_key_lookup = cljs.core.atom.call(null,false);
mrhyde.typepatcher.patch_js_with_key_lookup = (function mrhyde$typepatcher$patch_js_with_key_lookup(){
if(cljs.core.not.call(null,cljs.core.deref.call(null,mrhyde.typepatcher.have_patched_js_with_key_lookup))){
cljs.core.reset_BANG_.call(null,mrhyde.typepatcher.have_patched_js_with_key_lookup,true);

(cljs.core.ILookup["object"] = true);

return (cljs.core._lookup["object"] = (function() {
var G__26381 = null;
var G__26381__2 = (function (o,k){
return (o[mrhyde.typepatcher.strkey.call(null,k)]);
});
var G__26381__3 = (function (o,k,not_found){
var s = mrhyde.typepatcher.strkey.call(null,k);
if(cljs.core.truth_(goog.object.containsKey(o,s))){
return (o[s]);
} else {
return not_found;
}
});
G__26381 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__26381__2.call(this,o,k);
case 3:
return G__26381__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26381.cljs$core$IFn$_invoke$arity$2 = G__26381__2;
G__26381.cljs$core$IFn$_invoke$arity$3 = G__26381__3;
return G__26381;
})()
);
} else {
return null;
}
});
mrhyde.typepatcher.MAXLEN = (function (){var or__24760__auto__ = (function (){var ct = this;
return (ct["mrhyde_maxseqlen"]);
})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return (5000);
}
})();
mrhyde.typepatcher.patch_seq_object = (function mrhyde$typepatcher$patch_seq_object(o){
return null;
});
mrhyde.typepatcher.patch_map_object = (function mrhyde$typepatcher$patch_map_object(o){
mrhyde.typepatcher.patch_map.call(null,o);

return null;
});
mrhyde.typepatcher.patch_core_seq_type = (function mrhyde$typepatcher$patch_core_seq_type(s){
var orig_fn = (cljs.core[s]);
var orig_keys = Object.keys(orig_fn);
var new_fn = ((function (orig_fn,orig_keys){
return (function() { 
var G__26390__delegate = function (args){
var nargs = cljs.core.apply.call(null,cljs.core.array,cljs.core.cons.call(null,null,args));
var binder = Function.prototype.bind.apply(orig_fn,nargs);
var that = (new binder());
mrhyde.typepatcher.patch_seq_object.call(null,that);

return that;
};
var G__26390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26391__i = 0, G__26391__a = new Array(arguments.length -  0);
while (G__26391__i < G__26391__a.length) {G__26391__a[G__26391__i] = arguments[G__26391__i + 0]; ++G__26391__i;}
  args = new cljs.core.IndexedSeq(G__26391__a,0);
} 
return G__26390__delegate.call(this,args);};
G__26390.cljs$lang$maxFixedArity = 0;
G__26390.cljs$lang$applyTo = (function (arglist__26392){
var args = cljs.core.seq(arglist__26392);
return G__26390__delegate(args);
});
G__26390.cljs$core$IFn$_invoke$arity$variadic = G__26390__delegate;
return G__26390;
})()
;})(orig_fn,orig_keys))
;
var seq__26386_26393 = cljs.core.seq.call(null,orig_keys);
var chunk__26387_26394 = null;
var count__26388_26395 = (0);
var i__26389_26396 = (0);
while(true){
if((i__26389_26396 < count__26388_26395)){
var k_26397 = cljs.core._nth.call(null,chunk__26387_26394,i__26389_26396);
(new_fn[k_26397] = (orig_fn[k_26397]));

var G__26398 = seq__26386_26393;
var G__26399 = chunk__26387_26394;
var G__26400 = count__26388_26395;
var G__26401 = (i__26389_26396 + (1));
seq__26386_26393 = G__26398;
chunk__26387_26394 = G__26399;
count__26388_26395 = G__26400;
i__26389_26396 = G__26401;
continue;
} else {
var temp__4657__auto___26402 = cljs.core.seq.call(null,seq__26386_26393);
if(temp__4657__auto___26402){
var seq__26386_26403__$1 = temp__4657__auto___26402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26386_26403__$1)){
var c__25571__auto___26404 = cljs.core.chunk_first.call(null,seq__26386_26403__$1);
var G__26405 = cljs.core.chunk_rest.call(null,seq__26386_26403__$1);
var G__26406 = c__25571__auto___26404;
var G__26407 = cljs.core.count.call(null,c__25571__auto___26404);
var G__26408 = (0);
seq__26386_26393 = G__26405;
chunk__26387_26394 = G__26406;
count__26388_26395 = G__26407;
i__26389_26396 = G__26408;
continue;
} else {
var k_26409 = cljs.core.first.call(null,seq__26386_26403__$1);
(new_fn[k_26409] = (orig_fn[k_26409]));

var G__26410 = cljs.core.next.call(null,seq__26386_26403__$1);
var G__26411 = null;
var G__26412 = (0);
var G__26413 = (0);
seq__26386_26393 = G__26410;
chunk__26387_26394 = G__26411;
count__26388_26395 = G__26412;
i__26389_26396 = G__26413;
continue;
}
} else {
}
}
break;
}

return (cljs.core[s] = new_fn);
});
mrhyde.typepatcher.patch_core_map_type = (function mrhyde$typepatcher$patch_core_map_type(s){
var orig_fn = (cljs.core[s]);
var orig_keys = Object.keys(orig_fn);
var new_fn = ((function (orig_fn,orig_keys){
return (function() { 
var G__26422__delegate = function (args){
var nargs = cljs.core.apply.call(null,cljs.core.array,cljs.core.cons.call(null,null,args));
var binder = Function.prototype.bind.apply(orig_fn,nargs);
var that = (new binder());
mrhyde.typepatcher.patch_map_object.call(null,that);

return that;
};
var G__26422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26423__i = 0, G__26423__a = new Array(arguments.length -  0);
while (G__26423__i < G__26423__a.length) {G__26423__a[G__26423__i] = arguments[G__26423__i + 0]; ++G__26423__i;}
  args = new cljs.core.IndexedSeq(G__26423__a,0);
} 
return G__26422__delegate.call(this,args);};
G__26422.cljs$lang$maxFixedArity = 0;
G__26422.cljs$lang$applyTo = (function (arglist__26424){
var args = cljs.core.seq(arglist__26424);
return G__26422__delegate(args);
});
G__26422.cljs$core$IFn$_invoke$arity$variadic = G__26422__delegate;
return G__26422;
})()
;})(orig_fn,orig_keys))
;
var seq__26418_26425 = cljs.core.seq.call(null,orig_keys);
var chunk__26419_26426 = null;
var count__26420_26427 = (0);
var i__26421_26428 = (0);
while(true){
if((i__26421_26428 < count__26420_26427)){
var k_26429 = cljs.core._nth.call(null,chunk__26419_26426,i__26421_26428);
(new_fn[k_26429] = (orig_fn[k_26429]));

var G__26430 = seq__26418_26425;
var G__26431 = chunk__26419_26426;
var G__26432 = count__26420_26427;
var G__26433 = (i__26421_26428 + (1));
seq__26418_26425 = G__26430;
chunk__26419_26426 = G__26431;
count__26420_26427 = G__26432;
i__26421_26428 = G__26433;
continue;
} else {
var temp__4657__auto___26434 = cljs.core.seq.call(null,seq__26418_26425);
if(temp__4657__auto___26434){
var seq__26418_26435__$1 = temp__4657__auto___26434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26418_26435__$1)){
var c__25571__auto___26436 = cljs.core.chunk_first.call(null,seq__26418_26435__$1);
var G__26437 = cljs.core.chunk_rest.call(null,seq__26418_26435__$1);
var G__26438 = c__25571__auto___26436;
var G__26439 = cljs.core.count.call(null,c__25571__auto___26436);
var G__26440 = (0);
seq__26418_26425 = G__26437;
chunk__26419_26426 = G__26438;
count__26420_26427 = G__26439;
i__26421_26428 = G__26440;
continue;
} else {
var k_26441 = cljs.core.first.call(null,seq__26418_26435__$1);
(new_fn[k_26441] = (orig_fn[k_26441]));

var G__26442 = cljs.core.next.call(null,seq__26418_26435__$1);
var G__26443 = null;
var G__26444 = (0);
var G__26445 = (0);
seq__26418_26425 = G__26442;
chunk__26419_26426 = G__26443;
count__26420_26427 = G__26444;
i__26421_26428 = G__26445;
continue;
}
} else {
}
}
break;
}

return (cljs.core[s] = new_fn);
});
mrhyde.typepatcher.gen_seq_getter = (function mrhyde$typepatcher$gen_seq_getter(n){
return (function (){
var t = this;
var src = (cljs.core.truth_(goog.object.containsKey(t,mrhyde.typepatcher.hyde_cache_key))?(t[mrhyde.typepatcher.hyde_cache_key]):t);
return cljs.core.nth.call(null,src,n,undefined);
});
});
mrhyde.typepatcher.gen_seq_setter = (function mrhyde$typepatcher$gen_seq_setter(n){
return (function (v){
var t = this;
mrhyde.typepatcher.hyde_array_ensure_cached.call(null,t);

var c = (t[mrhyde.typepatcher.hyde_cache_key]);
return (c[n] = v);
});
});
mrhyde.typepatcher.patch_prototype_as_array = (function mrhyde$typepatcher$patch_prototype_as_array(p,o,is_vect){
mrhyde.typepatcher.aset_hidden.call(null,p,mrhyde.guts.hyde_proto_array_marker,true);

mrhyde.typepatcher.install_js_hidden_get_prop.call(null,p,"length",(function (){
var t = this;
return cljs.core.count.call(null,cljs.core.take.call(null,mrhyde.typepatcher.MAXLEN,t));
}));

var n__25675__auto___26446 = mrhyde.typepatcher.MAXLEN;
var n_26447 = (0);
while(true){
if((n_26447 < n__25675__auto___26446)){
mrhyde.typepatcher.install_js_hidden_getset_prop.call(null,p,n_26447,mrhyde.typepatcher.gen_seq_getter.call(null,n_26447),mrhyde.typepatcher.gen_seq_setter.call(null,n_26447));

var G__26448 = (n_26447 + (1));
n_26447 = G__26448;
continue;
} else {
}
break;
}

mrhyde.typepatcher.aset_hidden.call(null,p,"__ArrayLike",true);

mrhyde.typepatcher.aset_hidden.call(null,p,"toCljString",p.toString);

mrhyde.typepatcher.aset_hidden.call(null,p,"pop",mrhyde.typepatcher.hyde_array_pop);

mrhyde.typepatcher.aset_hidden.call(null,p,"push",mrhyde.typepatcher.hyde_array_push);

mrhyde.typepatcher.aset_hidden.call(null,p,"reverse",mrhyde.typepatcher.hyde_array_reverse);

mrhyde.typepatcher.aset_hidden.call(null,p,"shift",mrhyde.typepatcher.hyde_array_shift);

mrhyde.typepatcher.aset_hidden.call(null,p,"sort",mrhyde.typepatcher.hyde_array_sort);

mrhyde.typepatcher.aset_hidden.call(null,p,"splice",mrhyde.typepatcher.hyde_array_splice);

mrhyde.typepatcher.aset_hidden.call(null,p,"unshift",mrhyde.typepatcher.hyde_array_unshift);

mrhyde.typepatcher.aset_hidden.call(null,p,"concat",mrhyde.typepatcher.hyde_array_concat);

mrhyde.typepatcher.aset_hidden.call(null,p,"join",mrhyde.typepatcher.hyde_array_pop);

mrhyde.typepatcher.aset_hidden.call(null,p,"slice",(cljs.core.truth_(is_vect)?mrhyde.typepatcher.hyde_array_vector_slice:mrhyde.typepatcher.hyde_array_slice));

mrhyde.typepatcher.aset_hidden.call(null,p,"toSource",mrhyde.typepatcher.hyde_array_to_source);

mrhyde.typepatcher.aset_hidden.call(null,p,"toString",mrhyde.typepatcher.hyde_array_to_string);

mrhyde.typepatcher.aset_hidden.call(null,p,"indexOf",mrhyde.typepatcher.hyde_array_index_of);

mrhyde.typepatcher.aset_hidden.call(null,p,"lastIndexOf",mrhyde.typepatcher.hyde_array_last_index_of);

mrhyde.typepatcher.aset_hidden.call(null,p,"forEach",mrhyde.typepatcher.hyde_array_for_each);

mrhyde.typepatcher.aset_hidden.call(null,p,"every",mrhyde.typepatcher.hyde_array_every);

mrhyde.typepatcher.aset_hidden.call(null,p,"some",mrhyde.typepatcher.hyde_array_some);

mrhyde.typepatcher.aset_hidden.call(null,p,"filter",mrhyde.typepatcher.hyde_array_filter);

mrhyde.typepatcher.aset_hidden.call(null,p,"map",mrhyde.typepatcher.hyde_array_map);

mrhyde.typepatcher.aset_hidden.call(null,p,"reduce",mrhyde.typepatcher.hyde_array_reduce);

return mrhyde.typepatcher.aset_hidden.call(null,p,"reduceRight",mrhyde.typepatcher.hyde_array_reduce_right);
});
mrhyde.typepatcher.patch_prototype_as_map = (function mrhyde$typepatcher$patch_prototype_as_map(p,o){
return mrhyde.typepatcher.aset_hidden.call(null,p,mrhyde.guts.hyde_proto_object_marker,true);
});
mrhyde.typepatcher.add_hyde_protocol_to_seq = (function mrhyde$typepatcher$add_hyde_protocol_to_seq(s){
s.prototype.mrhyde$mrhyde$IHyde$ = true;

s.prototype.mrhyde$mrhyde$IHyde$has_cache_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return goog.object.containsKey(this$__$1,mrhyde.typepatcher.hyde_cache_key);
});

return s.prototype.mrhyde$mrhyde$IHyde$from_cache$arity$1 = (function (this$){
var this$__$1 = this;
var temp__4655__auto__ = (this$__$1[mrhyde.typepatcher.hyde_cache_key]);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
return cljs.core.vec.call(null,c);
} else {
return this$__$1;
}
});
});
mrhyde.typepatcher.filtered_keylist_set = (function mrhyde$typepatcher$filtered_keylist_set(l){
return cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__26449_SHARP_){
return cljs.core.re_find.call(null,/cljs\$/,p1__26449_SHARP_);
}),l));
});
mrhyde.typepatcher.lazy_init_hyde_setset = (function mrhyde$typepatcher$lazy_init_hyde_setset(m){
if(cljs.core.truth_((function (){var and__24748__auto__ = cljs.core.not.call(null,(m[mrhyde.typepatcher.hyde_keyset_key]));
if(and__24748__auto__){
return (m[mrhyde.typepatcher.hyde_keylist_key]);
} else {
return and__24748__auto__;
}
})())){
return mrhyde.typepatcher.aset_hidden.call(null,m,mrhyde.typepatcher.hyde_keyset_key,mrhyde.typepatcher.filtered_keylist_set.call(null,(m[mrhyde.typepatcher.hyde_keylist_key])));
} else {
return null;
}
});
mrhyde.typepatcher.add_hyde_protocol_to_map = (function mrhyde$typepatcher$add_hyde_protocol_to_map(m){
m.prototype.mrhyde$mrhyde$IHyde$ = true;

m.prototype.mrhyde$mrhyde$IHyde$has_cache_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
mrhyde.typepatcher.lazy_init_hyde_setset.call(null,this$__$1);

var or__24760__auto__ = goog.object.containsKey(this$__$1,mrhyde.typepatcher.hyde_cache_key);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.not_EQ_.call(null,(this$__$1[mrhyde.typepatcher.hyde_keyset_key]),mrhyde.typepatcher.filtered_keylist_set.call(null,Object.keys(this$__$1)));
}
});

m.prototype.mrhyde$mrhyde$IHyde$from_cache$arity$1 = (function (this$){
var this$__$1 = this;
mrhyde.typepatcher.lazy_init_hyde_setset.call(null,this$__$1);

var cur_keyset = clojure.set.difference.call(null,mrhyde.typepatcher.filtered_keylist_set.call(null,Object.keys(this$__$1)),cljs.core.PersistentHashSet.fromArray([mrhyde.typepatcher.hyde_cache_key], true));
var new_keys = clojure.set.difference.call(null,cur_keyset,(this$__$1[mrhyde.typepatcher.hyde_keyset_key]));
var new_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25540__auto__ = ((function (cur_keyset,new_keys,this$__$1){
return (function mrhyde$typepatcher$add_hyde_protocol_to_map_$_iter__26454(s__26455){
return (new cljs.core.LazySeq(null,((function (cur_keyset,new_keys,this$__$1){
return (function (){
var s__26455__$1 = s__26455;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26455__$1);
if(temp__4657__auto__){
var s__26455__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26455__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26455__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26457 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26456 = (0);
while(true){
if((i__26456 < size__25539__auto__)){
var k = cljs.core._nth.call(null,c__25538__auto__,i__26456);
cljs.core.chunk_append.call(null,b__26457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(this$__$1[k])], null));

var G__26458 = (i__26456 + (1));
i__26456 = G__26458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26457),mrhyde$typepatcher$add_hyde_protocol_to_map_$_iter__26454.call(null,cljs.core.chunk_rest.call(null,s__26455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26457),null);
}
} else {
var k = cljs.core.first.call(null,s__26455__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),(this$__$1[k])], null),mrhyde$typepatcher$add_hyde_protocol_to_map_$_iter__26454.call(null,cljs.core.rest.call(null,s__26455__$2)));
}
} else {
return null;
}
break;
}
});})(cur_keyset,new_keys,this$__$1))
,null,null));
});})(cur_keyset,new_keys,this$__$1))
;
return iter__25540__auto__.call(null,new_keys);
})());
var cache = (this$__$1[mrhyde.typepatcher.hyde_cache_key]);
if(cljs.core.truth_(cache)){
var p = cljs.core.persistent_BANG_.call(null,cache);
mrhyde.typepatcher.aset_hidden.call(null,this$__$1,mrhyde.typepatcher.hyde_cache_key,cljs.core.transient$.call(null,p));

return cljs.core.merge.call(null,p,new_map);
} else {
return cljs.core.merge.call(null,this$__$1,new_map);
}
});

var p = (m["prototype"]);
return mrhyde.typepatcher.hide_js_props.call(null,p,Object.keys(p));
});
mrhyde.typepatcher.from_cache_if_has_cache = (function mrhyde$typepatcher$from_cache_if_has_cache(x){
if(cljs.core.truth_((function (){var and__24748__auto__ = mrhyde.mrhyde.hyde_QMARK_.call(null,x);
if(and__24748__auto__){
return mrhyde.mrhyde.has_cache_QMARK_.call(null,x);
} else {
return and__24748__auto__;
}
})())){
return mrhyde.mrhyde.from_cache.call(null,x);
} else {
return x;
}
});
/**
 * Recursively transforms any cached hyde objects to new persistent versions.
 */
mrhyde.typepatcher.recurse_from_hyde_cache = (function mrhyde$typepatcher$recurse_from_hyde_cache(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26493 = arguments.length;
var i__25836__auto___26494 = (0);
while(true){
if((i__25836__auto___26494 < len__25835__auto___26493)){
args__25842__auto__.push((arguments[i__25836__auto___26494]));

var G__26495 = (i__25836__auto___26494 + (1));
i__25836__auto___26494 = G__26495;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return mrhyde.typepatcher.recurse_from_hyde_cache.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

mrhyde.typepatcher.recurse_from_hyde_cache.cljs$core$IFn$_invoke$arity$variadic = (function (xo,opts){
var opts_map = cljs.core.apply.call(null,cljs.core.array_map,opts);
var skippers = cljs.core.get.call(null,opts_map,new cljs.core.Keyword(null,"skip","skip",602715391),cljs.core.PersistentVector.EMPTY);
var skiplist = (((skippers instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [skippers], null):skippers);
var skipset = cljs.core.set.call(null,skiplist);
return ((function (opts_map,skippers,skiplist,skipset){
return (function mrhyde$typepatcher$internal_recurse(x){
if(cljs.core.truth_(goog.isArray(x))){
return cljs.core.vec.call(null,cljs.core.map.call(null,mrhyde$typepatcher$internal_recurse,x));
} else {
if(cljs.core.map_QMARK_.call(null,x)){
var c = mrhyde.typepatcher.from_cache_if_has_cache.call(null,x);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25540__auto__ = ((function (c,opts_map,skippers,skiplist,skipset){
return (function mrhyde$typepatcher$internal_recurse_$_iter__26477(s__26478){
return (new cljs.core.LazySeq(null,((function (c,opts_map,skippers,skiplist,skipset){
return (function (){
var s__26478__$1 = s__26478;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26478__$1);
if(temp__4657__auto__){
var s__26478__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26478__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26478__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26480 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26479 = (0);
while(true){
if((i__26479 < size__25539__auto__)){
var vec__26487 = cljs.core._nth.call(null,c__25538__auto__,i__26479);
var k = cljs.core.nth.call(null,vec__26487,(0),null);
var v = cljs.core.nth.call(null,vec__26487,(1),null);
cljs.core.chunk_append.call(null,b__26480,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrhyde$typepatcher$internal_recurse.call(null,k),(cljs.core.truth_(skipset.call(null,k))?v:mrhyde$typepatcher$internal_recurse.call(null,v))], null));

var G__26496 = (i__26479 + (1));
i__26479 = G__26496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26480),mrhyde$typepatcher$internal_recurse_$_iter__26477.call(null,cljs.core.chunk_rest.call(null,s__26478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26480),null);
}
} else {
var vec__26490 = cljs.core.first.call(null,s__26478__$2);
var k = cljs.core.nth.call(null,vec__26490,(0),null);
var v = cljs.core.nth.call(null,vec__26490,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrhyde$typepatcher$internal_recurse.call(null,k),(cljs.core.truth_(skipset.call(null,k))?v:mrhyde$typepatcher$internal_recurse.call(null,v))], null),mrhyde$typepatcher$internal_recurse_$_iter__26477.call(null,cljs.core.rest.call(null,s__26478__$2)));
}
} else {
return null;
}
break;
}
});})(c,opts_map,skippers,skiplist,skipset))
,null,null));
});})(c,opts_map,skippers,skiplist,skipset))
;
return iter__25540__auto__.call(null,c);
})());
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
var c = mrhyde.typepatcher.from_cache_if_has_cache.call(null,x);
return cljs.core.into.call(null,cljs.core.empty.call(null,c),cljs.core.map.call(null,mrhyde$typepatcher$internal_recurse,c));
} else {
return mrhyde.typepatcher.from_cache_if_has_cache.call(null,x);

}
}
}
});})(opts_map,skippers,skiplist,skipset))
.call(null,xo);
});

mrhyde.typepatcher.recurse_from_hyde_cache.cljs$lang$maxFixedArity = (1);

mrhyde.typepatcher.recurse_from_hyde_cache.cljs$lang$applyTo = (function (seq26459){
var G__26460 = cljs.core.first.call(null,seq26459);
var seq26459__$1 = cljs.core.next.call(null,seq26459);
return mrhyde.typepatcher.recurse_from_hyde_cache.cljs$core$IFn$_invoke$arity$variadic(G__26460,seq26459__$1);
});

mrhyde.typepatcher.repersist = (function mrhyde$typepatcher$repersist(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26499 = arguments.length;
var i__25836__auto___26500 = (0);
while(true){
if((i__25836__auto___26500 < len__25835__auto___26499)){
args__25842__auto__.push((arguments[i__25836__auto___26500]));

var G__26501 = (i__25836__auto___26500 + (1));
i__25836__auto___26500 = G__26501;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return mrhyde.typepatcher.repersist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

mrhyde.typepatcher.repersist.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){

if(cljs.core.truth_(goog.isFunction(x))){
return (function() { 
var G__26502__delegate = function (args){
return cljs.core.apply.call(null,mrhyde.typepatcher.repersist,(function (){var t = this;
return x.apply(t,cljs.core.apply.call(null,cljs.core.array,args));
})(),opts);
};
var G__26502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26503__i = 0, G__26503__a = new Array(arguments.length -  0);
while (G__26503__i < G__26503__a.length) {G__26503__a[G__26503__i] = arguments[G__26503__i + 0]; ++G__26503__i;}
  args = new cljs.core.IndexedSeq(G__26503__a,0);
} 
return G__26502__delegate.call(this,args);};
G__26502.cljs$lang$maxFixedArity = 0;
G__26502.cljs$lang$applyTo = (function (arglist__26504){
var args = cljs.core.seq(arglist__26504);
return G__26502__delegate(args);
});
G__26502.cljs$core$IFn$_invoke$arity$variadic = G__26502__delegate;
return G__26502;
})()
;
} else {
return cljs.core.apply.call(null,mrhyde.typepatcher.recurse_from_hyde_cache,x,opts);
}
});

mrhyde.typepatcher.repersist.cljs$lang$maxFixedArity = (1);

mrhyde.typepatcher.repersist.cljs$lang$applyTo = (function (seq26497){
var G__26498 = cljs.core.first.call(null,seq26497);
var seq26497__$1 = cljs.core.next.call(null,seq26497);
return mrhyde.typepatcher.repersist.cljs$core$IFn$_invoke$arity$variadic(G__26498,seq26497__$1);
});

mrhyde.typepatcher.have_patched_arrayish_flag = cljs.core.atom.call(null,false);
mrhyde.typepatcher.have_patched_mappish_flag = cljs.core.atom.call(null,false);
mrhyde.typepatcher.patch_sequential_type = (function mrhyde$typepatcher$patch_sequential_type(t){
if(mrhyde.mrhyde.hyde_array_QMARK_.call(null,(t["prototype"]))){
return null;
} else {
mrhyde.typepatcher.patch_prototype_as_array.call(null,(t["prototype"]),t,false);

return mrhyde.typepatcher.add_hyde_protocol_to_seq.call(null,t);
}
});
mrhyde.typepatcher.patch_vector_type = (function mrhyde$typepatcher$patch_vector_type(t){
if(mrhyde.mrhyde.hyde_array_QMARK_.call(null,(t["prototype"]))){
return null;
} else {
mrhyde.typepatcher.patch_prototype_as_array.call(null,(t["prototype"]),t,true);

return mrhyde.typepatcher.add_hyde_protocol_to_seq.call(null,t);
}
});
mrhyde.typepatcher.patch_map_type = (function mrhyde$typepatcher$patch_map_type(p__26505){
var vec__26509 = p__26505;
var t = cljs.core.nth.call(null,vec__26509,(0),null);
var s = cljs.core.nth.call(null,vec__26509,(1),null);
if(mrhyde.mrhyde.hyde_object_QMARK_.call(null,(t["prototype"]))){
return mrhyde.typepatcher.dp.call(null,[cljs.core.str("already a hyde-object: "),cljs.core.str(t)].join(''));
} else {
mrhyde.typepatcher.patch_prototype_as_map.call(null,(t["prototype"]),t);

mrhyde.typepatcher.add_hyde_protocol_to_map.call(null,t);

return mrhyde.typepatcher.patch_core_map_type.call(null,s);
}
});
mrhyde.typepatcher.patch_known_sequential_types = (function mrhyde$typepatcher$patch_known_sequential_types(){
var seq__26516 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.List,cljs.core.LazySeq,cljs.core.IndexedSeq,cljs.core.Cons,cljs.core.Range,cljs.core.ArrayNodeSeq,cljs.core.ChunkedSeq], null));
var chunk__26517 = null;
var count__26518 = (0);
var i__26519 = (0);
while(true){
if((i__26519 < count__26518)){
var t = cljs.core._nth.call(null,chunk__26517,i__26519);
mrhyde.typepatcher.patch_sequential_type.call(null,t);

var G__26520 = seq__26516;
var G__26521 = chunk__26517;
var G__26522 = count__26518;
var G__26523 = (i__26519 + (1));
seq__26516 = G__26520;
chunk__26517 = G__26521;
count__26518 = G__26522;
i__26519 = G__26523;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26516);
if(temp__4657__auto__){
var seq__26516__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26516__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__26516__$1);
var G__26524 = cljs.core.chunk_rest.call(null,seq__26516__$1);
var G__26525 = c__25571__auto__;
var G__26526 = cljs.core.count.call(null,c__25571__auto__);
var G__26527 = (0);
seq__26516 = G__26524;
chunk__26517 = G__26525;
count__26518 = G__26526;
i__26519 = G__26527;
continue;
} else {
var t = cljs.core.first.call(null,seq__26516__$1);
mrhyde.typepatcher.patch_sequential_type.call(null,t);

var G__26528 = cljs.core.next.call(null,seq__26516__$1);
var G__26529 = null;
var G__26530 = (0);
var G__26531 = (0);
seq__26516 = G__26528;
chunk__26517 = G__26529;
count__26518 = G__26530;
i__26519 = G__26531;
continue;
}
} else {
return null;
}
}
break;
}
});
mrhyde.typepatcher.patch_known_vector_types = (function mrhyde$typepatcher$patch_known_vector_types(){
var seq__26536 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector,cljs.core.Subvec], null));
var chunk__26537 = null;
var count__26538 = (0);
var i__26539 = (0);
while(true){
if((i__26539 < count__26538)){
var t = cljs.core._nth.call(null,chunk__26537,i__26539);
mrhyde.typepatcher.patch_vector_type.call(null,t);

var G__26540 = seq__26536;
var G__26541 = chunk__26537;
var G__26542 = count__26538;
var G__26543 = (i__26539 + (1));
seq__26536 = G__26540;
chunk__26537 = G__26541;
count__26538 = G__26542;
i__26539 = G__26543;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26536);
if(temp__4657__auto__){
var seq__26536__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26536__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__26536__$1);
var G__26544 = cljs.core.chunk_rest.call(null,seq__26536__$1);
var G__26545 = c__25571__auto__;
var G__26546 = cljs.core.count.call(null,c__25571__auto__);
var G__26547 = (0);
seq__26536 = G__26544;
chunk__26537 = G__26545;
count__26538 = G__26546;
i__26539 = G__26547;
continue;
} else {
var t = cljs.core.first.call(null,seq__26536__$1);
mrhyde.typepatcher.patch_vector_type.call(null,t);

var G__26548 = cljs.core.next.call(null,seq__26536__$1);
var G__26549 = null;
var G__26550 = (0);
var G__26551 = (0);
seq__26536 = G__26548;
chunk__26537 = G__26549;
count__26538 = G__26550;
i__26539 = G__26551;
continue;
}
} else {
return null;
}
}
break;
}
});
mrhyde.typepatcher.patch_known_mappish_types = (function mrhyde$typepatcher$patch_known_mappish_types(){
mrhyde.typepatcher.patch_sequential_type.call(null,cljs.core.LazySeq);

var seq__26556 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap,"PersistentHashMap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap,"PersistentArrayMap"], null)], null));
var chunk__26557 = null;
var count__26558 = (0);
var i__26559 = (0);
while(true){
if((i__26559 < count__26558)){
var t = cljs.core._nth.call(null,chunk__26557,i__26559);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,t),(cljs.core[cljs.core.second.call(null,t)]))){
mrhyde.typepatcher.patch_map_type.call(null,t);
} else {
}

var G__26560 = seq__26556;
var G__26561 = chunk__26557;
var G__26562 = count__26558;
var G__26563 = (i__26559 + (1));
seq__26556 = G__26560;
chunk__26557 = G__26561;
count__26558 = G__26562;
i__26559 = G__26563;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26556);
if(temp__4657__auto__){
var seq__26556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26556__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__26556__$1);
var G__26564 = cljs.core.chunk_rest.call(null,seq__26556__$1);
var G__26565 = c__25571__auto__;
var G__26566 = cljs.core.count.call(null,c__25571__auto__);
var G__26567 = (0);
seq__26556 = G__26564;
chunk__26557 = G__26565;
count__26558 = G__26566;
i__26559 = G__26567;
continue;
} else {
var t = cljs.core.first.call(null,seq__26556__$1);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,t),(cljs.core[cljs.core.second.call(null,t)]))){
mrhyde.typepatcher.patch_map_type.call(null,t);
} else {
}

var G__26568 = cljs.core.next.call(null,seq__26556__$1);
var G__26569 = null;
var G__26570 = (0);
var G__26571 = (0);
seq__26556 = G__26568;
chunk__26557 = G__26569;
count__26558 = G__26570;
i__26559 = G__26571;
continue;
}
} else {
return null;
}
}
break;
}
});
mrhyde.typepatcher.get_partition_key = (function mrhyde$typepatcher$get_partition_key(){
var t = this;
return (t[mrhyde.typepatcher.hyde_parition_key]);
});
mrhyde.typepatcher.set_partition_key = (function mrhyde$typepatcher$set_partition_key(k){
var t = this;
mrhyde.typepatcher.aset_hidden.call(null,t,mrhyde.typepatcher.hyde_parition_key,k);

(window["side"] = "effect");

if(cljs.core._EQ_.call(null,(16123663),k)){
console.log("matches");
} else {
}

console.log(k);

return console.log(t);
});
mrhyde.typepatcher.patch_obj_spy_on_partition = (function mrhyde$typepatcher$patch_obj_spy_on_partition(){
console.log(mrhyde.typepatcher.set_partition_key);

return mrhyde.typepatcher.install_js_hidden_getset_prop.call(null,cljs.core.PersistentHashMap.prototype,mrhyde.typepatcher.cljs_partition_key,mrhyde.typepatcher.get_partition_key,mrhyde.typepatcher.set_partition_key);
});

//# sourceMappingURL=typepatcher.js.map?rel=1478134417585