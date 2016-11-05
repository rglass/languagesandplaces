// Compiled by ClojureScript 1.9.229 {}
goog.provide('mrhyde.mrhyde');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('mrhyde.guts');

/**
 * Container types extended with js metaprogramming
 * @interface
 */
mrhyde.mrhyde.IHyde = function(){};

/**
 * is there cached information attached from js mutation?
 */
mrhyde.mrhyde.has_cache_QMARK_ = (function mrhyde$mrhyde$has_cache_QMARK_(this$){
if((!((this$ == null))) && (!((this$.mrhyde$mrhyde$IHyde$has_cache_QMARK_$arity$1 == null)))){
return this$.mrhyde$mrhyde$IHyde$has_cache_QMARK_$arity$1(this$);
} else {
var x__25423__auto__ = (((this$ == null))?null:this$);
var m__25424__auto__ = (mrhyde.mrhyde.has_cache_QMARK_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,this$);
} else {
var m__25424__auto____$1 = (mrhyde.mrhyde.has_cache_QMARK_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHyde.has-cache?",this$);
}
}
}
});

/**
 * render this container with cached information
 */
mrhyde.mrhyde.from_cache = (function mrhyde$mrhyde$from_cache(this$){
if((!((this$ == null))) && (!((this$.mrhyde$mrhyde$IHyde$from_cache$arity$1 == null)))){
return this$.mrhyde$mrhyde$IHyde$from_cache$arity$1(this$);
} else {
var x__25423__auto__ = (((this$ == null))?null:this$);
var m__25424__auto__ = (mrhyde.mrhyde.from_cache[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,this$);
} else {
var m__25424__auto____$1 = (mrhyde.mrhyde.from_cache["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHyde.from-cache",this$);
}
}
}
});

/**
 * Returns true if coll satisfies IHyde
 */
mrhyde.mrhyde.hyde_QMARK_ = (function mrhyde$mrhyde$hyde_QMARK_(x){
if(!((x == null))){
if((false) || (x.mrhyde$mrhyde$IHyde$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,x);
}
});
/**
 * Returns true if coll satisfies IHyde
 */
mrhyde.mrhyde.hyde_array_QMARK_ = (function mrhyde$mrhyde$hyde_array_QMARK_(x){
var and__24748__auto__ = ((!((x == null)))?(((false) || (x.mrhyde$mrhyde$IHyde$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,x):false)):cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,x));
if(and__24748__auto__){
return (x[mrhyde.guts.hyde_proto_array_marker]);
} else {
return and__24748__auto__;
}
});
/**
 * Returns true if coll satisfies IHyde
 */
mrhyde.mrhyde.hyde_object_QMARK_ = (function mrhyde$mrhyde$hyde_object_QMARK_(x){
var and__24748__auto__ = ((!((x == null)))?(((false) || (x.mrhyde$mrhyde$IHyde$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,x):false)):cljs.core.native_satisfies_QMARK_.call(null,mrhyde.mrhyde.IHyde,x));
if(and__24748__auto__){
return (x[mrhyde.guts.hyde_proto_object_marker]);
} else {
return and__24748__auto__;
}
});
/**
 * Convert js object to cljs equivalent
 */
mrhyde.mrhyde.toclj = (function mrhyde$mrhyde$toclj(x){
return cljs.core.js__GT_clj.call(null,x,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
goog.exportSymbol('mrhyde.mrhyde.toclj', mrhyde.mrhyde.toclj);
/**
 * Convert cljs object to js equivalent
 */
mrhyde.mrhyde.tojs = (function mrhyde$mrhyde$tojs(x){
return cljs.core.clj__GT_js.call(null,x);
});
goog.exportSymbol('mrhyde.mrhyde.tojs', mrhyde.mrhyde.tojs);
/**
 * Pass a string through the cljs reader and return the result
 */
mrhyde.mrhyde.cljread = (function mrhyde$mrhyde$cljread(x){
return cljs.reader.read_string.call(null,x);
});
goog.exportSymbol('mrhyde.mrhyde.cljread', mrhyde.mrhyde.cljread);

//# sourceMappingURL=mrhyde.js.map?rel=1478134416992