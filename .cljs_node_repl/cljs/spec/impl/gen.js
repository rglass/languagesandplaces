// Compiled by ClojureScript 1.9.229 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7366__auto__,writer__7367__auto__,opt__7368__auto__){
return cljs.core._write.call(null,writer__7367__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10050 = arguments.length;
var i__7836__auto___10051 = (0);
while(true){
if((i__7836__auto___10051 < len__7835__auto___10050)){
args__7842__auto__.push((arguments[i__7836__auto___10051]));

var G__10052 = (i__7836__auto___10051 + (1));
i__7836__auto___10051 = G__10052;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq10049){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10049));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10054 = arguments.length;
var i__7836__auto___10055 = (0);
while(true){
if((i__7836__auto___10055 < len__7835__auto___10054)){
args__7842__auto__.push((arguments[i__7836__auto___10055]));

var G__10056 = (i__7836__auto___10055 + (1));
i__7836__auto___10055 = G__10056;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq10053){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10053));
});

var g_QMARK__10057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_10058 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__10057){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__10057))
,null));
var mkg_10059 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__10057,g_10058){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__10057,g_10058))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__10057,g_10058,mkg_10059){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__10057).call(null,x);
});})(g_QMARK__10057,g_10058,mkg_10059))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__10057,g_10058,mkg_10059){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_10059).call(null,gfn);
});})(g_QMARK__10057,g_10058,mkg_10059))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__10057,g_10058,mkg_10059){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_10058).call(null,generator);
});})(g_QMARK__10057,g_10058,mkg_10059))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8135__auto___10078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8135__auto___10078){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10079 = arguments.length;
var i__7836__auto___10080 = (0);
while(true){
if((i__7836__auto___10080 < len__7835__auto___10079)){
args__7842__auto__.push((arguments[i__7836__auto___10080]));

var G__10081 = (i__7836__auto___10080 + (1));
i__7836__auto___10080 = G__10081;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10078))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10078){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10078),args);
});})(g__8135__auto___10078))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8135__auto___10078){
return (function (seq10060){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10060));
});})(g__8135__auto___10078))
;


var g__8135__auto___10082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8135__auto___10082){
return (function cljs$spec$impl$gen$list(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10083 = arguments.length;
var i__7836__auto___10084 = (0);
while(true){
if((i__7836__auto___10084 < len__7835__auto___10083)){
args__7842__auto__.push((arguments[i__7836__auto___10084]));

var G__10085 = (i__7836__auto___10084 + (1));
i__7836__auto___10084 = G__10085;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10082))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10082){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10082),args);
});})(g__8135__auto___10082))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8135__auto___10082){
return (function (seq10061){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10061));
});})(g__8135__auto___10082))
;


var g__8135__auto___10086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8135__auto___10086){
return (function cljs$spec$impl$gen$map(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10087 = arguments.length;
var i__7836__auto___10088 = (0);
while(true){
if((i__7836__auto___10088 < len__7835__auto___10087)){
args__7842__auto__.push((arguments[i__7836__auto___10088]));

var G__10089 = (i__7836__auto___10088 + (1));
i__7836__auto___10088 = G__10089;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10086))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10086){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10086),args);
});})(g__8135__auto___10086))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8135__auto___10086){
return (function (seq10062){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10062));
});})(g__8135__auto___10086))
;


var g__8135__auto___10090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8135__auto___10090){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10091 = arguments.length;
var i__7836__auto___10092 = (0);
while(true){
if((i__7836__auto___10092 < len__7835__auto___10091)){
args__7842__auto__.push((arguments[i__7836__auto___10092]));

var G__10093 = (i__7836__auto___10092 + (1));
i__7836__auto___10092 = G__10093;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10090))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10090){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10090),args);
});})(g__8135__auto___10090))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8135__auto___10090){
return (function (seq10063){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10063));
});})(g__8135__auto___10090))
;


var g__8135__auto___10094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8135__auto___10094){
return (function cljs$spec$impl$gen$set(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10095 = arguments.length;
var i__7836__auto___10096 = (0);
while(true){
if((i__7836__auto___10096 < len__7835__auto___10095)){
args__7842__auto__.push((arguments[i__7836__auto___10096]));

var G__10097 = (i__7836__auto___10096 + (1));
i__7836__auto___10096 = G__10097;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10094))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10094){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10094),args);
});})(g__8135__auto___10094))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8135__auto___10094){
return (function (seq10064){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10064));
});})(g__8135__auto___10094))
;


var g__8135__auto___10098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8135__auto___10098){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10099 = arguments.length;
var i__7836__auto___10100 = (0);
while(true){
if((i__7836__auto___10100 < len__7835__auto___10099)){
args__7842__auto__.push((arguments[i__7836__auto___10100]));

var G__10101 = (i__7836__auto___10100 + (1));
i__7836__auto___10100 = G__10101;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10098))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10098){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10098),args);
});})(g__8135__auto___10098))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8135__auto___10098){
return (function (seq10065){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10065));
});})(g__8135__auto___10098))
;


var g__8135__auto___10102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8135__auto___10102){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10103 = arguments.length;
var i__7836__auto___10104 = (0);
while(true){
if((i__7836__auto___10104 < len__7835__auto___10103)){
args__7842__auto__.push((arguments[i__7836__auto___10104]));

var G__10105 = (i__7836__auto___10104 + (1));
i__7836__auto___10104 = G__10105;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10102))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10102){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10102),args);
});})(g__8135__auto___10102))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8135__auto___10102){
return (function (seq10066){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10066));
});})(g__8135__auto___10102))
;


var g__8135__auto___10106 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8135__auto___10106){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10107 = arguments.length;
var i__7836__auto___10108 = (0);
while(true){
if((i__7836__auto___10108 < len__7835__auto___10107)){
args__7842__auto__.push((arguments[i__7836__auto___10108]));

var G__10109 = (i__7836__auto___10108 + (1));
i__7836__auto___10108 = G__10109;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10106))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10106){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10106),args);
});})(g__8135__auto___10106))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8135__auto___10106){
return (function (seq10067){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10067));
});})(g__8135__auto___10106))
;


var g__8135__auto___10110 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8135__auto___10110){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10111 = arguments.length;
var i__7836__auto___10112 = (0);
while(true){
if((i__7836__auto___10112 < len__7835__auto___10111)){
args__7842__auto__.push((arguments[i__7836__auto___10112]));

var G__10113 = (i__7836__auto___10112 + (1));
i__7836__auto___10112 = G__10113;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10110))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10110){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10110),args);
});})(g__8135__auto___10110))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8135__auto___10110){
return (function (seq10068){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10068));
});})(g__8135__auto___10110))
;


var g__8135__auto___10114 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8135__auto___10114){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10115 = arguments.length;
var i__7836__auto___10116 = (0);
while(true){
if((i__7836__auto___10116 < len__7835__auto___10115)){
args__7842__auto__.push((arguments[i__7836__auto___10116]));

var G__10117 = (i__7836__auto___10116 + (1));
i__7836__auto___10116 = G__10117;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10114))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10114){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10114),args);
});})(g__8135__auto___10114))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8135__auto___10114){
return (function (seq10069){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10069));
});})(g__8135__auto___10114))
;


var g__8135__auto___10118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8135__auto___10118){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10119 = arguments.length;
var i__7836__auto___10120 = (0);
while(true){
if((i__7836__auto___10120 < len__7835__auto___10119)){
args__7842__auto__.push((arguments[i__7836__auto___10120]));

var G__10121 = (i__7836__auto___10120 + (1));
i__7836__auto___10120 = G__10121;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10118))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10118){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10118),args);
});})(g__8135__auto___10118))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8135__auto___10118){
return (function (seq10070){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10070));
});})(g__8135__auto___10118))
;


var g__8135__auto___10122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8135__auto___10122){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10123 = arguments.length;
var i__7836__auto___10124 = (0);
while(true){
if((i__7836__auto___10124 < len__7835__auto___10123)){
args__7842__auto__.push((arguments[i__7836__auto___10124]));

var G__10125 = (i__7836__auto___10124 + (1));
i__7836__auto___10124 = G__10125;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10122))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10122){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10122),args);
});})(g__8135__auto___10122))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8135__auto___10122){
return (function (seq10071){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10071));
});})(g__8135__auto___10122))
;


var g__8135__auto___10126 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8135__auto___10126){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10127 = arguments.length;
var i__7836__auto___10128 = (0);
while(true){
if((i__7836__auto___10128 < len__7835__auto___10127)){
args__7842__auto__.push((arguments[i__7836__auto___10128]));

var G__10129 = (i__7836__auto___10128 + (1));
i__7836__auto___10128 = G__10129;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10126))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10126){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10126),args);
});})(g__8135__auto___10126))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8135__auto___10126){
return (function (seq10072){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10072));
});})(g__8135__auto___10126))
;


var g__8135__auto___10130 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8135__auto___10130){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10131 = arguments.length;
var i__7836__auto___10132 = (0);
while(true){
if((i__7836__auto___10132 < len__7835__auto___10131)){
args__7842__auto__.push((arguments[i__7836__auto___10132]));

var G__10133 = (i__7836__auto___10132 + (1));
i__7836__auto___10132 = G__10133;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10130))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10130){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10130),args);
});})(g__8135__auto___10130))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8135__auto___10130){
return (function (seq10073){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10073));
});})(g__8135__auto___10130))
;


var g__8135__auto___10134 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8135__auto___10134){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10135 = arguments.length;
var i__7836__auto___10136 = (0);
while(true){
if((i__7836__auto___10136 < len__7835__auto___10135)){
args__7842__auto__.push((arguments[i__7836__auto___10136]));

var G__10137 = (i__7836__auto___10136 + (1));
i__7836__auto___10136 = G__10137;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10134))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10134){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10134),args);
});})(g__8135__auto___10134))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8135__auto___10134){
return (function (seq10074){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10074));
});})(g__8135__auto___10134))
;


var g__8135__auto___10138 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8135__auto___10138){
return (function cljs$spec$impl$gen$return(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10139 = arguments.length;
var i__7836__auto___10140 = (0);
while(true){
if((i__7836__auto___10140 < len__7835__auto___10139)){
args__7842__auto__.push((arguments[i__7836__auto___10140]));

var G__10141 = (i__7836__auto___10140 + (1));
i__7836__auto___10140 = G__10141;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10138))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10138){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10138),args);
});})(g__8135__auto___10138))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8135__auto___10138){
return (function (seq10075){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10075));
});})(g__8135__auto___10138))
;


var g__8135__auto___10142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8135__auto___10142){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10143 = arguments.length;
var i__7836__auto___10144 = (0);
while(true){
if((i__7836__auto___10144 < len__7835__auto___10143)){
args__7842__auto__.push((arguments[i__7836__auto___10144]));

var G__10145 = (i__7836__auto___10144 + (1));
i__7836__auto___10144 = G__10145;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10142))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10142){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10142),args);
});})(g__8135__auto___10142))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8135__auto___10142){
return (function (seq10076){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10076));
});})(g__8135__auto___10142))
;


var g__8135__auto___10146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__8135__auto___10146){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10147 = arguments.length;
var i__7836__auto___10148 = (0);
while(true){
if((i__7836__auto___10148 < len__7835__auto___10147)){
args__7842__auto__.push((arguments[i__7836__auto___10148]));

var G__10149 = (i__7836__auto___10148 + (1));
i__7836__auto___10148 = G__10149;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8135__auto___10146))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8135__auto___10146){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8135__auto___10146),args);
});})(g__8135__auto___10146))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__8135__auto___10146){
return (function (seq10077){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10077));
});})(g__8135__auto___10146))
;

var g__8148__auto___10171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8148__auto___10171){
return (function cljs$spec$impl$gen$any(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10172 = arguments.length;
var i__7836__auto___10173 = (0);
while(true){
if((i__7836__auto___10173 < len__7835__auto___10172)){
args__7842__auto__.push((arguments[i__7836__auto___10173]));

var G__10174 = (i__7836__auto___10173 + (1));
i__7836__auto___10173 = G__10174;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10171))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10171){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10171);
});})(g__8148__auto___10171))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8148__auto___10171){
return (function (seq10150){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10150));
});})(g__8148__auto___10171))
;


var g__8148__auto___10175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8148__auto___10175){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10176 = arguments.length;
var i__7836__auto___10177 = (0);
while(true){
if((i__7836__auto___10177 < len__7835__auto___10176)){
args__7842__auto__.push((arguments[i__7836__auto___10177]));

var G__10178 = (i__7836__auto___10177 + (1));
i__7836__auto___10177 = G__10178;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10175))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10175){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10175);
});})(g__8148__auto___10175))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8148__auto___10175){
return (function (seq10151){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10151));
});})(g__8148__auto___10175))
;


var g__8148__auto___10179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8148__auto___10179){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10180 = arguments.length;
var i__7836__auto___10181 = (0);
while(true){
if((i__7836__auto___10181 < len__7835__auto___10180)){
args__7842__auto__.push((arguments[i__7836__auto___10181]));

var G__10182 = (i__7836__auto___10181 + (1));
i__7836__auto___10181 = G__10182;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10179))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10179){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10179);
});})(g__8148__auto___10179))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8148__auto___10179){
return (function (seq10152){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10152));
});})(g__8148__auto___10179))
;


var g__8148__auto___10183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8148__auto___10183){
return (function cljs$spec$impl$gen$char(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10184 = arguments.length;
var i__7836__auto___10185 = (0);
while(true){
if((i__7836__auto___10185 < len__7835__auto___10184)){
args__7842__auto__.push((arguments[i__7836__auto___10185]));

var G__10186 = (i__7836__auto___10185 + (1));
i__7836__auto___10185 = G__10186;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10183))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10183){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10183);
});})(g__8148__auto___10183))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8148__auto___10183){
return (function (seq10153){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10153));
});})(g__8148__auto___10183))
;


var g__8148__auto___10187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8148__auto___10187){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10188 = arguments.length;
var i__7836__auto___10189 = (0);
while(true){
if((i__7836__auto___10189 < len__7835__auto___10188)){
args__7842__auto__.push((arguments[i__7836__auto___10189]));

var G__10190 = (i__7836__auto___10189 + (1));
i__7836__auto___10189 = G__10190;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10187))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10187){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10187);
});})(g__8148__auto___10187))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8148__auto___10187){
return (function (seq10154){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10154));
});})(g__8148__auto___10187))
;


var g__8148__auto___10191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8148__auto___10191){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10192 = arguments.length;
var i__7836__auto___10193 = (0);
while(true){
if((i__7836__auto___10193 < len__7835__auto___10192)){
args__7842__auto__.push((arguments[i__7836__auto___10193]));

var G__10194 = (i__7836__auto___10193 + (1));
i__7836__auto___10193 = G__10194;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10191))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10191){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10191);
});})(g__8148__auto___10191))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8148__auto___10191){
return (function (seq10155){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10155));
});})(g__8148__auto___10191))
;


var g__8148__auto___10195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8148__auto___10195){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10196 = arguments.length;
var i__7836__auto___10197 = (0);
while(true){
if((i__7836__auto___10197 < len__7835__auto___10196)){
args__7842__auto__.push((arguments[i__7836__auto___10197]));

var G__10198 = (i__7836__auto___10197 + (1));
i__7836__auto___10197 = G__10198;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10195))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10195){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10195);
});})(g__8148__auto___10195))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8148__auto___10195){
return (function (seq10156){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10156));
});})(g__8148__auto___10195))
;


var g__8148__auto___10199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8148__auto___10199){
return (function cljs$spec$impl$gen$double(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10200 = arguments.length;
var i__7836__auto___10201 = (0);
while(true){
if((i__7836__auto___10201 < len__7835__auto___10200)){
args__7842__auto__.push((arguments[i__7836__auto___10201]));

var G__10202 = (i__7836__auto___10201 + (1));
i__7836__auto___10201 = G__10202;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10199))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10199){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10199);
});})(g__8148__auto___10199))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8148__auto___10199){
return (function (seq10157){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10157));
});})(g__8148__auto___10199))
;


var g__8148__auto___10203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8148__auto___10203){
return (function cljs$spec$impl$gen$int(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10204 = arguments.length;
var i__7836__auto___10205 = (0);
while(true){
if((i__7836__auto___10205 < len__7835__auto___10204)){
args__7842__auto__.push((arguments[i__7836__auto___10205]));

var G__10206 = (i__7836__auto___10205 + (1));
i__7836__auto___10205 = G__10206;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10203))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10203){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10203);
});})(g__8148__auto___10203))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8148__auto___10203){
return (function (seq10158){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10158));
});})(g__8148__auto___10203))
;


var g__8148__auto___10207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8148__auto___10207){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10208 = arguments.length;
var i__7836__auto___10209 = (0);
while(true){
if((i__7836__auto___10209 < len__7835__auto___10208)){
args__7842__auto__.push((arguments[i__7836__auto___10209]));

var G__10210 = (i__7836__auto___10209 + (1));
i__7836__auto___10209 = G__10210;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10207))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10207){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10207);
});})(g__8148__auto___10207))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8148__auto___10207){
return (function (seq10159){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10159));
});})(g__8148__auto___10207))
;


var g__8148__auto___10211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8148__auto___10211){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10212 = arguments.length;
var i__7836__auto___10213 = (0);
while(true){
if((i__7836__auto___10213 < len__7835__auto___10212)){
args__7842__auto__.push((arguments[i__7836__auto___10213]));

var G__10214 = (i__7836__auto___10213 + (1));
i__7836__auto___10213 = G__10214;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10211))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10211){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10211);
});})(g__8148__auto___10211))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8148__auto___10211){
return (function (seq10160){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10160));
});})(g__8148__auto___10211))
;


var g__8148__auto___10215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8148__auto___10215){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10216 = arguments.length;
var i__7836__auto___10217 = (0);
while(true){
if((i__7836__auto___10217 < len__7835__auto___10216)){
args__7842__auto__.push((arguments[i__7836__auto___10217]));

var G__10218 = (i__7836__auto___10217 + (1));
i__7836__auto___10217 = G__10218;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10215))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10215){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10215);
});})(g__8148__auto___10215))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8148__auto___10215){
return (function (seq10161){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10161));
});})(g__8148__auto___10215))
;


var g__8148__auto___10219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8148__auto___10219){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10220 = arguments.length;
var i__7836__auto___10221 = (0);
while(true){
if((i__7836__auto___10221 < len__7835__auto___10220)){
args__7842__auto__.push((arguments[i__7836__auto___10221]));

var G__10222 = (i__7836__auto___10221 + (1));
i__7836__auto___10221 = G__10222;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10219))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10219){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10219);
});})(g__8148__auto___10219))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8148__auto___10219){
return (function (seq10162){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10162));
});})(g__8148__auto___10219))
;


var g__8148__auto___10223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8148__auto___10223){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10224 = arguments.length;
var i__7836__auto___10225 = (0);
while(true){
if((i__7836__auto___10225 < len__7835__auto___10224)){
args__7842__auto__.push((arguments[i__7836__auto___10225]));

var G__10226 = (i__7836__auto___10225 + (1));
i__7836__auto___10225 = G__10226;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10223))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10223){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10223);
});})(g__8148__auto___10223))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8148__auto___10223){
return (function (seq10163){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10163));
});})(g__8148__auto___10223))
;


var g__8148__auto___10227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8148__auto___10227){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10228 = arguments.length;
var i__7836__auto___10229 = (0);
while(true){
if((i__7836__auto___10229 < len__7835__auto___10228)){
args__7842__auto__.push((arguments[i__7836__auto___10229]));

var G__10230 = (i__7836__auto___10229 + (1));
i__7836__auto___10229 = G__10230;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10227))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10227){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10227);
});})(g__8148__auto___10227))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8148__auto___10227){
return (function (seq10164){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10164));
});})(g__8148__auto___10227))
;


var g__8148__auto___10231 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8148__auto___10231){
return (function cljs$spec$impl$gen$string(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10232 = arguments.length;
var i__7836__auto___10233 = (0);
while(true){
if((i__7836__auto___10233 < len__7835__auto___10232)){
args__7842__auto__.push((arguments[i__7836__auto___10233]));

var G__10234 = (i__7836__auto___10233 + (1));
i__7836__auto___10233 = G__10234;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10231))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10231){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10231);
});})(g__8148__auto___10231))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8148__auto___10231){
return (function (seq10165){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10165));
});})(g__8148__auto___10231))
;


var g__8148__auto___10235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8148__auto___10235){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10236 = arguments.length;
var i__7836__auto___10237 = (0);
while(true){
if((i__7836__auto___10237 < len__7835__auto___10236)){
args__7842__auto__.push((arguments[i__7836__auto___10237]));

var G__10238 = (i__7836__auto___10237 + (1));
i__7836__auto___10237 = G__10238;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10235))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10235){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10235);
});})(g__8148__auto___10235))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8148__auto___10235){
return (function (seq10166){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10166));
});})(g__8148__auto___10235))
;


var g__8148__auto___10239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8148__auto___10239){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10240 = arguments.length;
var i__7836__auto___10241 = (0);
while(true){
if((i__7836__auto___10241 < len__7835__auto___10240)){
args__7842__auto__.push((arguments[i__7836__auto___10241]));

var G__10242 = (i__7836__auto___10241 + (1));
i__7836__auto___10241 = G__10242;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10239))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10239){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10239);
});})(g__8148__auto___10239))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8148__auto___10239){
return (function (seq10167){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10167));
});})(g__8148__auto___10239))
;


var g__8148__auto___10243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8148__auto___10243){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10244 = arguments.length;
var i__7836__auto___10245 = (0);
while(true){
if((i__7836__auto___10245 < len__7835__auto___10244)){
args__7842__auto__.push((arguments[i__7836__auto___10245]));

var G__10246 = (i__7836__auto___10245 + (1));
i__7836__auto___10245 = G__10246;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10243))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10243){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10243);
});})(g__8148__auto___10243))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8148__auto___10243){
return (function (seq10168){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10168));
});})(g__8148__auto___10243))
;


var g__8148__auto___10247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8148__auto___10247){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10248 = arguments.length;
var i__7836__auto___10249 = (0);
while(true){
if((i__7836__auto___10249 < len__7835__auto___10248)){
args__7842__auto__.push((arguments[i__7836__auto___10249]));

var G__10250 = (i__7836__auto___10249 + (1));
i__7836__auto___10249 = G__10250;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10247))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10247){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10247);
});})(g__8148__auto___10247))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8148__auto___10247){
return (function (seq10169){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10169));
});})(g__8148__auto___10247))
;


var g__8148__auto___10251 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8148__auto___10251){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10252 = arguments.length;
var i__7836__auto___10253 = (0);
while(true){
if((i__7836__auto___10253 < len__7835__auto___10252)){
args__7842__auto__.push((arguments[i__7836__auto___10253]));

var G__10254 = (i__7836__auto___10253 + (1));
i__7836__auto___10253 = G__10254;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});})(g__8148__auto___10251))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8148__auto___10251){
return (function (args){
return cljs.core.deref.call(null,g__8148__auto___10251);
});})(g__8148__auto___10251))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8148__auto___10251){
return (function (seq10170){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10170));
});})(g__8148__auto___10251))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7842__auto__ = [];
var len__7835__auto___10257 = arguments.length;
var i__7836__auto___10258 = (0);
while(true){
if((i__7836__auto___10258 < len__7835__auto___10257)){
args__7842__auto__.push((arguments[i__7836__auto___10258]));

var G__10259 = (i__7836__auto___10258 + (1));
i__7836__auto___10258 = G__10259;
continue;
} else {
}
break;
}

var argseq__7843__auto__ = ((((0) < args__7842__auto__.length))?(new cljs.core.IndexedSeq(args__7842__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7843__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__10255_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__10255_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq10256){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10256));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__10260_SHARP_){
return (new Date(p1__10260_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map