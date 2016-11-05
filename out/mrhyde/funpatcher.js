// Compiled by ClojureScript 1.9.229 {}
goog.provide('mrhyde.funpatcher');
goog.require('cljs.core');
goog.require('mrhyde.mrhyde');
goog.require('mrhyde.typepatcher');
goog.require('mrhyde.guts');
mrhyde.funpatcher.patch_return_value_to_clj = (function mrhyde$funpatcher$patch_return_value_to_clj(o,field_name){
var orig_fn = mrhyde.guts.get_store_cur_js_fn.call(null,o,field_name);
return (o[field_name] = ((function (orig_fn){
return (function() { 
var G__26574__delegate = function (args){
return cljs.core.js__GT_clj.call(null,(function (){var ct = this;
return orig_fn.apply(ct,args);
})());
};
var G__26574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26575__i = 0, G__26575__a = new Array(arguments.length -  0);
while (G__26575__i < G__26575__a.length) {G__26575__a[G__26575__i] = arguments[G__26575__i + 0]; ++G__26575__i;}
  args = new cljs.core.IndexedSeq(G__26575__a,0);
} 
return G__26574__delegate.call(this,args);};
G__26574.cljs$lang$maxFixedArity = 0;
G__26574.cljs$lang$applyTo = (function (arglist__26576){
var args = cljs.core.seq(arglist__26576);
return G__26574__delegate(args);
});
G__26574.cljs$core$IFn$_invoke$arity$variadic = G__26574__delegate;
return G__26574;
})()
;})(orig_fn))
);
});
mrhyde.funpatcher.patch_return_value_recurse_from_cache = (function mrhyde$funpatcher$patch_return_value_recurse_from_cache(o,field_name){
var orig_fn = mrhyde.guts.get_store_cur_js_fn.call(null,o,field_name);
return (o[field_name] = ((function (orig_fn){
return (function() { 
var G__26577__delegate = function (args){
return mrhyde.typepatcher.recurse_from_hyde_cache.call(null,(function (){var ct = this;
return orig_fn.apply(ct,args);
})());
};
var G__26577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26578__i = 0, G__26578__a = new Array(arguments.length -  0);
while (G__26578__i < G__26578__a.length) {G__26578__a[G__26578__i] = arguments[G__26578__i + 0]; ++G__26578__i;}
  args = new cljs.core.IndexedSeq(G__26578__a,0);
} 
return G__26577__delegate.call(this,args);};
G__26577.cljs$lang$maxFixedArity = 0;
G__26577.cljs$lang$applyTo = (function (arglist__26579){
var args = cljs.core.seq(arglist__26579);
return G__26577__delegate(args);
});
G__26577.cljs$core$IFn$_invoke$arity$variadic = G__26577__delegate;
return G__26577;
})()
;})(orig_fn))
);
});
mrhyde.funpatcher.patch_return_value_recurse_from_cache_as_function = (function mrhyde$funpatcher$patch_return_value_recurse_from_cache_as_function(o,field_name){
var orig_fn = mrhyde.guts.get_store_cur_js_fn.call(null,o,field_name);
return (o[field_name] = ((function (orig_fn){
return (function() { 
var G__26580__delegate = function (args){
var dyn_fun = (function (){var ct = this;
return orig_fn.apply(ct,args);
})();
return ((function (dyn_fun,orig_fn){
return (function() { 
var G__26581__delegate = function (nargs){
var ct = this;
return dyn_fun.apply(ct,nargs);
};
var G__26581 = function (var_args){
var nargs = null;
if (arguments.length > 0) {
var G__26582__i = 0, G__26582__a = new Array(arguments.length -  0);
while (G__26582__i < G__26582__a.length) {G__26582__a[G__26582__i] = arguments[G__26582__i + 0]; ++G__26582__i;}
  nargs = new cljs.core.IndexedSeq(G__26582__a,0);
} 
return G__26581__delegate.call(this,nargs);};
G__26581.cljs$lang$maxFixedArity = 0;
G__26581.cljs$lang$applyTo = (function (arglist__26583){
var nargs = cljs.core.seq(arglist__26583);
return G__26581__delegate(nargs);
});
G__26581.cljs$core$IFn$_invoke$arity$variadic = G__26581__delegate;
return G__26581;
})()
;
;})(dyn_fun,orig_fn))
};
var G__26580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26584__i = 0, G__26584__a = new Array(arguments.length -  0);
while (G__26584__i < G__26584__a.length) {G__26584__a[G__26584__i] = arguments[G__26584__i + 0]; ++G__26584__i;}
  args = new cljs.core.IndexedSeq(G__26584__a,0);
} 
return G__26580__delegate.call(this,args);};
G__26580.cljs$lang$maxFixedArity = 0;
G__26580.cljs$lang$applyTo = (function (arglist__26585){
var args = cljs.core.seq(arglist__26585);
return G__26580__delegate(args);
});
G__26580.cljs$core$IFn$_invoke$arity$variadic = G__26580__delegate;
return G__26580;
})()
;})(orig_fn))
);
});
mrhyde.funpatcher.recurse_from_hyde_cache_maybe_fn = (function mrhyde$funpatcher$recurse_from_hyde_cache_maybe_fn(x){
if(cljs.core.truth_(goog.isFunction(x))){
return (function() { 
var G__26586__delegate = function (args){
return mrhyde.typepatcher.recurse_from_hyde_cache.call(null,(function (){var ct = this;
return x.apply(ct,args);
})());
};
var G__26586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26587__i = 0, G__26587__a = new Array(arguments.length -  0);
while (G__26587__i < G__26587__a.length) {G__26587__a[G__26587__i] = arguments[G__26587__i + 0]; ++G__26587__i;}
  args = new cljs.core.IndexedSeq(G__26587__a,0);
} 
return G__26586__delegate.call(this,args);};
G__26586.cljs$lang$maxFixedArity = 0;
G__26586.cljs$lang$applyTo = (function (arglist__26588){
var args = cljs.core.seq(arglist__26588);
return G__26586__delegate(args);
});
G__26586.cljs$core$IFn$_invoke$arity$variadic = G__26586__delegate;
return G__26586;
})()
;
} else {
return mrhyde.typepatcher.recurse_from_hyde_cache.call(null,x);
}
});
mrhyde.funpatcher.patch_args_recurse_from_cache = (function mrhyde$funpatcher$patch_args_recurse_from_cache(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26594 = arguments.length;
var i__25836__auto___26595 = (0);
while(true){
if((i__25836__auto___26595 < len__25835__auto___26594)){
args__25842__auto__.push((arguments[i__25836__auto___26595]));

var G__26596 = (i__25836__auto___26595 + (1));
i__25836__auto___26595 = G__26596;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return mrhyde.funpatcher.patch_args_recurse_from_cache.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

mrhyde.funpatcher.patch_args_recurse_from_cache.cljs$core$IFn$_invoke$arity$variadic = (function (o,field_name,fields){
var orig_fn = mrhyde.guts.get_store_cur_js_fn.call(null,o,field_name);
var arg_filter = ((cljs.core.empty_QMARK_.call(null,fields))?((function (orig_fn){
return (function (){
return cljs.core.identity.call(null,true);
});})(orig_fn))
:cljs.core.set.call(null,fields));
return (o[field_name] = ((function (orig_fn,arg_filter){
return (function() { 
var G__26597__delegate = function (args){
var nargs = cljs.core.map.call(null,((function (orig_fn,arg_filter){
return (function (p1__26589_SHARP_,p2__26590_SHARP_){
if(cljs.core.truth_(arg_filter.call(null,p1__26589_SHARP_))){
return mrhyde.funpatcher.recurse_from_hyde_cache_maybe_fn.call(null,p2__26590_SHARP_);
} else {
return p2__26590_SHARP_;
}
});})(orig_fn,arg_filter))
,cljs.core.range.call(null),args);
var ct = this;
return orig_fn.apply(ct,nargs);
};
var G__26597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26598__i = 0, G__26598__a = new Array(arguments.length -  0);
while (G__26598__i < G__26598__a.length) {G__26598__a[G__26598__i] = arguments[G__26598__i + 0]; ++G__26598__i;}
  args = new cljs.core.IndexedSeq(G__26598__a,0);
} 
return G__26597__delegate.call(this,args);};
G__26597.cljs$lang$maxFixedArity = 0;
G__26597.cljs$lang$applyTo = (function (arglist__26599){
var args = cljs.core.seq(arglist__26599);
return G__26597__delegate(args);
});
G__26597.cljs$core$IFn$_invoke$arity$variadic = G__26597__delegate;
return G__26597;
})()
;})(orig_fn,arg_filter))
);
});

mrhyde.funpatcher.patch_args_recurse_from_cache.cljs$lang$maxFixedArity = (2);

mrhyde.funpatcher.patch_args_recurse_from_cache.cljs$lang$applyTo = (function (seq26591){
var G__26592 = cljs.core.first.call(null,seq26591);
var seq26591__$1 = cljs.core.next.call(null,seq26591);
var G__26593 = cljs.core.first.call(null,seq26591__$1);
var seq26591__$2 = cljs.core.next.call(null,seq26591__$1);
return mrhyde.funpatcher.patch_args_recurse_from_cache.cljs$core$IFn$_invoke$arity$variadic(G__26592,G__26593,seq26591__$2);
});

mrhyde.funpatcher.patch_args_keyword_to_fn = (function mrhyde$funpatcher$patch_args_keyword_to_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26604 = arguments.length;
var i__25836__auto___26605 = (0);
while(true){
if((i__25836__auto___26605 < len__25835__auto___26604)){
args__25842__auto__.push((arguments[i__25836__auto___26605]));

var G__26606 = (i__25836__auto___26605 + (1));
i__25836__auto___26605 = G__26606;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return mrhyde.funpatcher.patch_args_keyword_to_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

mrhyde.funpatcher.patch_args_keyword_to_fn.cljs$core$IFn$_invoke$arity$variadic = (function (o,field_name,fields){
var orig_fn = mrhyde.guts.get_store_cur_js_fn.call(null,o,field_name);
var arg_filter = ((cljs.core.empty_QMARK_.call(null,fields))?((function (orig_fn){
return (function (){
return cljs.core.identity.call(null,true);
});})(orig_fn))
:cljs.core.set.call(null,fields));
return (o[field_name] = ((function (orig_fn,arg_filter){
return (function() { 
var G__26607__delegate = function (args){
var nargs = cljs.core.map.call(null,((function (orig_fn,arg_filter){
return (function (c,x){
if(cljs.core.truth_((function (){var and__24748__auto__ = arg_filter.call(null,c);
if(cljs.core.truth_(and__24748__auto__)){
return (x instanceof cljs.core.Keyword);
} else {
return and__24748__auto__;
}
})())){
return ((function (orig_fn,arg_filter){
return (function (p1__26600_SHARP_){
return x.call(null,p1__26600_SHARP_);
});
;})(orig_fn,arg_filter))
} else {
return x;
}
});})(orig_fn,arg_filter))
,cljs.core.range.call(null),args);
var ct = this;
return orig_fn.apply(ct,nargs);
};
var G__26607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26608__i = 0, G__26608__a = new Array(arguments.length -  0);
while (G__26608__i < G__26608__a.length) {G__26608__a[G__26608__i] = arguments[G__26608__i + 0]; ++G__26608__i;}
  args = new cljs.core.IndexedSeq(G__26608__a,0);
} 
return G__26607__delegate.call(this,args);};
G__26607.cljs$lang$maxFixedArity = 0;
G__26607.cljs$lang$applyTo = (function (arglist__26609){
var args = cljs.core.seq(arglist__26609);
return G__26607__delegate(args);
});
G__26607.cljs$core$IFn$_invoke$arity$variadic = G__26607__delegate;
return G__26607;
})()
;})(orig_fn,arg_filter))
);
});

mrhyde.funpatcher.patch_args_keyword_to_fn.cljs$lang$maxFixedArity = (2);

mrhyde.funpatcher.patch_args_keyword_to_fn.cljs$lang$applyTo = (function (seq26601){
var G__26602 = cljs.core.first.call(null,seq26601);
var seq26601__$1 = cljs.core.next.call(null,seq26601);
var G__26603 = cljs.core.first.call(null,seq26601__$1);
var seq26601__$2 = cljs.core.next.call(null,seq26601__$1);
return mrhyde.funpatcher.patch_args_keyword_to_fn.cljs$core$IFn$_invoke$arity$variadic(G__26602,G__26603,seq26601__$2);
});

mrhyde.funpatcher.patch_args_map_to_obj = (function mrhyde$funpatcher$patch_args_map_to_obj(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26613 = arguments.length;
var i__25836__auto___26614 = (0);
while(true){
if((i__25836__auto___26614 < len__25835__auto___26613)){
args__25842__auto__.push((arguments[i__25836__auto___26614]));

var G__26615 = (i__25836__auto___26614 + (1));
i__25836__auto___26614 = G__26615;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return mrhyde.funpatcher.patch_args_map_to_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

mrhyde.funpatcher.patch_args_map_to_obj.cljs$core$IFn$_invoke$arity$variadic = (function (o,field_name,fields){
var orig_fn = mrhyde.guts.get_store_cur_js_fn.call(null,o,field_name);
var arg_filter = ((cljs.core.empty_QMARK_.call(null,fields))?((function (orig_fn){
return (function (){
return cljs.core.identity.call(null,true);
});})(orig_fn))
:cljs.core.set.call(null,fields));
return (o[field_name] = ((function (orig_fn,arg_filter){
return (function() { 
var G__26616__delegate = function (args){
var nargs = cljs.core.map.call(null,((function (orig_fn,arg_filter){
return (function (c,x){
if(cljs.core.truth_((function (){var and__24748__auto__ = arg_filter.call(null,c);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.map_QMARK_.call(null,x);
} else {
return and__24748__auto__;
}
})())){
return cljs.core.clj__GT_js.call(null,x);
} else {
return x;
}
});})(orig_fn,arg_filter))
,cljs.core.range.call(null),args);
var ct = this;
return orig_fn.apply(ct,nargs);
};
var G__26616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26617__i = 0, G__26617__a = new Array(arguments.length -  0);
while (G__26617__i < G__26617__a.length) {G__26617__a[G__26617__i] = arguments[G__26617__i + 0]; ++G__26617__i;}
  args = new cljs.core.IndexedSeq(G__26617__a,0);
} 
return G__26616__delegate.call(this,args);};
G__26616.cljs$lang$maxFixedArity = 0;
G__26616.cljs$lang$applyTo = (function (arglist__26618){
var args = cljs.core.seq(arglist__26618);
return G__26616__delegate(args);
});
G__26616.cljs$core$IFn$_invoke$arity$variadic = G__26616__delegate;
return G__26616;
})()
;})(orig_fn,arg_filter))
);
});

mrhyde.funpatcher.patch_args_map_to_obj.cljs$lang$maxFixedArity = (2);

mrhyde.funpatcher.patch_args_map_to_obj.cljs$lang$applyTo = (function (seq26610){
var G__26611 = cljs.core.first.call(null,seq26610);
var seq26610__$1 = cljs.core.next.call(null,seq26610);
var G__26612 = cljs.core.first.call(null,seq26610__$1);
var seq26610__$2 = cljs.core.next.call(null,seq26610__$1);
return mrhyde.funpatcher.patch_args_map_to_obj.cljs$core$IFn$_invoke$arity$variadic(G__26611,G__26612,seq26610__$2);
});

mrhyde.funpatcher.patch_args_seq_to_array = (function mrhyde$funpatcher$patch_args_seq_to_array(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26624 = arguments.length;
var i__25836__auto___26625 = (0);
while(true){
if((i__25836__auto___26625 < len__25835__auto___26624)){
args__25842__auto__.push((arguments[i__25836__auto___26625]));

var G__26626 = (i__25836__auto___26625 + (1));
i__25836__auto___26625 = G__26626;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return mrhyde.funpatcher.patch_args_seq_to_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

mrhyde.funpatcher.patch_args_seq_to_array.cljs$core$IFn$_invoke$arity$variadic = (function (o,field_name,fields){
var orig_fn = mrhyde.guts.get_store_cur_js_fn.call(null,o,field_name);
var arg_filter = ((cljs.core.empty_QMARK_.call(null,fields))?((function (orig_fn){
return (function (){
return cljs.core.identity.call(null,true);
});})(orig_fn))
:cljs.core.set.call(null,fields));
return (o[field_name] = ((function (orig_fn,arg_filter){
return (function() { 
var G__26627__delegate = function (args){
var nargs = cljs.core.map.call(null,((function (orig_fn,arg_filter){
return (function (p1__26619_SHARP_,p2__26620_SHARP_){
if(cljs.core.truth_((function (){var and__24748__auto__ = arg_filter.call(null,p1__26619_SHARP_);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.sequential_QMARK_.call(null,p2__26620_SHARP_);
} else {
return and__24748__auto__;
}
})())){
return cljs.core.apply.call(null,cljs.core.array,p2__26620_SHARP_);
} else {
return p2__26620_SHARP_;
}
});})(orig_fn,arg_filter))
,cljs.core.range.call(null),args);
var ct = this;
return orig_fn.apply(ct,nargs);
};
var G__26627 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26628__i = 0, G__26628__a = new Array(arguments.length -  0);
while (G__26628__i < G__26628__a.length) {G__26628__a[G__26628__i] = arguments[G__26628__i + 0]; ++G__26628__i;}
  args = new cljs.core.IndexedSeq(G__26628__a,0);
} 
return G__26627__delegate.call(this,args);};
G__26627.cljs$lang$maxFixedArity = 0;
G__26627.cljs$lang$applyTo = (function (arglist__26629){
var args = cljs.core.seq(arglist__26629);
return G__26627__delegate(args);
});
G__26627.cljs$core$IFn$_invoke$arity$variadic = G__26627__delegate;
return G__26627;
})()
;})(orig_fn,arg_filter))
);
});

mrhyde.funpatcher.patch_args_seq_to_array.cljs$lang$maxFixedArity = (2);

mrhyde.funpatcher.patch_args_seq_to_array.cljs$lang$applyTo = (function (seq26621){
var G__26622 = cljs.core.first.call(null,seq26621);
var seq26621__$1 = cljs.core.next.call(null,seq26621);
var G__26623 = cljs.core.first.call(null,seq26621__$1);
var seq26621__$2 = cljs.core.next.call(null,seq26621__$1);
return mrhyde.funpatcher.patch_args_seq_to_array.cljs$core$IFn$_invoke$arity$variadic(G__26622,G__26623,seq26621__$2);
});

mrhyde.funpatcher.patch_args_clj_to_js = (function mrhyde$funpatcher$patch_args_clj_to_js(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26635 = arguments.length;
var i__25836__auto___26636 = (0);
while(true){
if((i__25836__auto___26636 < len__25835__auto___26635)){
args__25842__auto__.push((arguments[i__25836__auto___26636]));

var G__26637 = (i__25836__auto___26636 + (1));
i__25836__auto___26636 = G__26637;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return mrhyde.funpatcher.patch_args_clj_to_js.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

mrhyde.funpatcher.patch_args_clj_to_js.cljs$core$IFn$_invoke$arity$variadic = (function (o,field_name,fields){
var orig_fn = mrhyde.guts.get_store_cur_js_fn.call(null,o,field_name);
var arg_filter = ((cljs.core.empty_QMARK_.call(null,fields))?((function (orig_fn){
return (function (){
return cljs.core.identity.call(null,true);
});})(orig_fn))
:cljs.core.set.call(null,fields));
return (o[field_name] = ((function (orig_fn,arg_filter){
return (function() { 
var G__26638__delegate = function (args){
var nargs = cljs.core.map.call(null,((function (orig_fn,arg_filter){
return (function (p1__26630_SHARP_,p2__26631_SHARP_){
if(cljs.core.truth_(arg_filter.call(null,p1__26630_SHARP_))){
return cljs.core.clj__GT_js.call(null,p2__26631_SHARP_);
} else {
return p2__26631_SHARP_;
}
});})(orig_fn,arg_filter))
,cljs.core.range.call(null),args);
var ct = this;
return orig_fn.apply(ct,cljs.core.apply.call(null,cljs.core.array,nargs));
};
var G__26638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26639__i = 0, G__26639__a = new Array(arguments.length -  0);
while (G__26639__i < G__26639__a.length) {G__26639__a[G__26639__i] = arguments[G__26639__i + 0]; ++G__26639__i;}
  args = new cljs.core.IndexedSeq(G__26639__a,0);
} 
return G__26638__delegate.call(this,args);};
G__26638.cljs$lang$maxFixedArity = 0;
G__26638.cljs$lang$applyTo = (function (arglist__26640){
var args = cljs.core.seq(arglist__26640);
return G__26638__delegate(args);
});
G__26638.cljs$core$IFn$_invoke$arity$variadic = G__26638__delegate;
return G__26638;
})()
;})(orig_fn,arg_filter))
);
});

mrhyde.funpatcher.patch_args_clj_to_js.cljs$lang$maxFixedArity = (2);

mrhyde.funpatcher.patch_args_clj_to_js.cljs$lang$applyTo = (function (seq26632){
var G__26633 = cljs.core.first.call(null,seq26632);
var seq26632__$1 = cljs.core.next.call(null,seq26632);
var G__26634 = cljs.core.first.call(null,seq26632__$1);
var seq26632__$2 = cljs.core.next.call(null,seq26632__$1);
return mrhyde.funpatcher.patch_args_clj_to_js.cljs$core$IFn$_invoke$arity$variadic(G__26633,G__26634,seq26632__$2);
});

mrhyde.funpatcher.patch_tostring_sequential_isarray = (function mrhyde$funpatcher$patch_tostring_sequential_isarray(o,field_name){
var orig_fn = mrhyde.guts.get_store_cur_js_fn.call(null,o,field_name);
return (o[field_name] = ((function (orig_fn){
return (function() { 
var G__26641__delegate = function (args){
var ct = this;
if(mrhyde.mrhyde.hyde_array_QMARK_.call(null,ct)){
return "[object Array]";
} else {
return orig_fn.apply(ct,args);
}
};
var G__26641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26642__i = 0, G__26642__a = new Array(arguments.length -  0);
while (G__26642__i < G__26642__a.length) {G__26642__a[G__26642__i] = arguments[G__26642__i + 0]; ++G__26642__i;}
  args = new cljs.core.IndexedSeq(G__26642__a,0);
} 
return G__26641__delegate.call(this,args);};
G__26641.cljs$lang$maxFixedArity = 0;
G__26641.cljs$lang$applyTo = (function (arglist__26643){
var args = cljs.core.seq(arglist__26643);
return G__26641__delegate(args);
});
G__26641.cljs$core$IFn$_invoke$arity$variadic = G__26641__delegate;
return G__26641;
})()
;})(orig_fn))
);
});
mrhyde.funpatcher.patch_tostring_hydearray_is_array = (function mrhyde$funpatcher$patch_tostring_hydearray_is_array(){
return mrhyde.funpatcher.patch_tostring_sequential_isarray.call(null,Object.prototype,"toString");
});

//# sourceMappingURL=funpatcher.js.map?rel=1478134417777