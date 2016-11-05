// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27927 = [];
var len__25835__auto___27933 = arguments.length;
var i__25836__auto___27934 = (0);
while(true){
if((i__25836__auto___27934 < len__25835__auto___27933)){
args27927.push((arguments[i__25836__auto___27934]));

var G__27935 = (i__25836__auto___27934 + (1));
i__25836__auto___27934 = G__27935;
continue;
} else {
}
break;
}

var G__27929 = args27927.length;
switch (G__27929) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27927.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27930 = (function (f,blockable,meta27931){
this.f = f;
this.blockable = blockable;
this.meta27931 = meta27931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27932,meta27931__$1){
var self__ = this;
var _27932__$1 = this;
return (new cljs.core.async.t_cljs$core$async27930(self__.f,self__.blockable,meta27931__$1));
});

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27932){
var self__ = this;
var _27932__$1 = this;
return self__.meta27931;
});

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27930.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27931","meta27931",-2043398666,null)], null);
});

cljs.core.async.t_cljs$core$async27930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27930";

cljs.core.async.t_cljs$core$async27930.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async27930");
});

cljs.core.async.__GT_t_cljs$core$async27930 = (function cljs$core$async$__GT_t_cljs$core$async27930(f__$1,blockable__$1,meta27931){
return (new cljs.core.async.t_cljs$core$async27930(f__$1,blockable__$1,meta27931));
});

}

return (new cljs.core.async.t_cljs$core$async27930(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27939 = [];
var len__25835__auto___27942 = arguments.length;
var i__25836__auto___27943 = (0);
while(true){
if((i__25836__auto___27943 < len__25835__auto___27942)){
args27939.push((arguments[i__25836__auto___27943]));

var G__27944 = (i__25836__auto___27943 + (1));
i__25836__auto___27943 = G__27944;
continue;
} else {
}
break;
}

var G__27941 = args27939.length;
switch (G__27941) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27939.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27946 = [];
var len__25835__auto___27949 = arguments.length;
var i__25836__auto___27950 = (0);
while(true){
if((i__25836__auto___27950 < len__25835__auto___27949)){
args27946.push((arguments[i__25836__auto___27950]));

var G__27951 = (i__25836__auto___27950 + (1));
i__25836__auto___27950 = G__27951;
continue;
} else {
}
break;
}

var G__27948 = args27946.length;
switch (G__27948) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27946.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27953 = [];
var len__25835__auto___27956 = arguments.length;
var i__25836__auto___27957 = (0);
while(true){
if((i__25836__auto___27957 < len__25835__auto___27956)){
args27953.push((arguments[i__25836__auto___27957]));

var G__27958 = (i__25836__auto___27957 + (1));
i__25836__auto___27957 = G__27958;
continue;
} else {
}
break;
}

var G__27955 = args27953.length;
switch (G__27955) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27953.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27960 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27960);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27960,ret){
return (function (){
return fn1.call(null,val_27960);
});})(val_27960,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27961 = [];
var len__25835__auto___27964 = arguments.length;
var i__25836__auto___27965 = (0);
while(true){
if((i__25836__auto___27965 < len__25835__auto___27964)){
args27961.push((arguments[i__25836__auto___27965]));

var G__27966 = (i__25836__auto___27965 + (1));
i__25836__auto___27965 = G__27966;
continue;
} else {
}
break;
}

var G__27963 = args27961.length;
switch (G__27963) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27961.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25675__auto___27968 = n;
var x_27969 = (0);
while(true){
if((x_27969 < n__25675__auto___27968)){
(a[x_27969] = (0));

var G__27970 = (x_27969 + (1));
x_27969 = G__27970;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27971 = (i + (1));
i = G__27971;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27975 = (function (alt_flag,flag,meta27976){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27976 = meta27976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27977,meta27976__$1){
var self__ = this;
var _27977__$1 = this;
return (new cljs.core.async.t_cljs$core$async27975(self__.alt_flag,self__.flag,meta27976__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27977){
var self__ = this;
var _27977__$1 = this;
return self__.meta27976;
});})(flag))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27975.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27976","meta27976",-930188623,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27975";

cljs.core.async.t_cljs$core$async27975.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async27975");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27975 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27975(alt_flag__$1,flag__$1,meta27976){
return (new cljs.core.async.t_cljs$core$async27975(alt_flag__$1,flag__$1,meta27976));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27975(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27981 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27981 = (function (alt_handler,flag,cb,meta27982){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27982 = meta27982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27983,meta27982__$1){
var self__ = this;
var _27983__$1 = this;
return (new cljs.core.async.t_cljs$core$async27981(self__.alt_handler,self__.flag,self__.cb,meta27982__$1));
});

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27983){
var self__ = this;
var _27983__$1 = this;
return self__.meta27982;
});

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27982","meta27982",269525295,null)], null);
});

cljs.core.async.t_cljs$core$async27981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27981";

cljs.core.async.t_cljs$core$async27981.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async27981");
});

cljs.core.async.__GT_t_cljs$core$async27981 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27981(alt_handler__$1,flag__$1,cb__$1,meta27982){
return (new cljs.core.async.t_cljs$core$async27981(alt_handler__$1,flag__$1,cb__$1,meta27982));
});

}

return (new cljs.core.async.t_cljs$core$async27981(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27984_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27984_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27985_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27985_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24760__auto__ = wport;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27986 = (i + (1));
i = G__27986;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24760__auto__ = ret;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24748__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24748__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___27992 = arguments.length;
var i__25836__auto___27993 = (0);
while(true){
if((i__25836__auto___27993 < len__25835__auto___27992)){
args__25842__auto__.push((arguments[i__25836__auto___27993]));

var G__27994 = (i__25836__auto___27993 + (1));
i__25836__auto___27993 = G__27994;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27989){
var map__27990 = p__27989;
var map__27990__$1 = ((((!((map__27990 == null)))?((((map__27990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27990):map__27990);
var opts = map__27990__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27987){
var G__27988 = cljs.core.first.call(null,seq27987);
var seq27987__$1 = cljs.core.next.call(null,seq27987);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27988,seq27987__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27995 = [];
var len__25835__auto___28045 = arguments.length;
var i__25836__auto___28046 = (0);
while(true){
if((i__25836__auto___28046 < len__25835__auto___28045)){
args27995.push((arguments[i__25836__auto___28046]));

var G__28047 = (i__25836__auto___28046 + (1));
i__25836__auto___28046 = G__28047;
continue;
} else {
}
break;
}

var G__27997 = args27995.length;
switch (G__27997) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27995.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27882__auto___28049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___28049){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___28049){
return (function (state_28021){
var state_val_28022 = (state_28021[(1)]);
if((state_val_28022 === (7))){
var inst_28017 = (state_28021[(2)]);
var state_28021__$1 = state_28021;
var statearr_28023_28050 = state_28021__$1;
(statearr_28023_28050[(2)] = inst_28017);

(statearr_28023_28050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (1))){
var state_28021__$1 = state_28021;
var statearr_28024_28051 = state_28021__$1;
(statearr_28024_28051[(2)] = null);

(statearr_28024_28051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (4))){
var inst_28000 = (state_28021[(7)]);
var inst_28000__$1 = (state_28021[(2)]);
var inst_28001 = (inst_28000__$1 == null);
var state_28021__$1 = (function (){var statearr_28025 = state_28021;
(statearr_28025[(7)] = inst_28000__$1);

return statearr_28025;
})();
if(cljs.core.truth_(inst_28001)){
var statearr_28026_28052 = state_28021__$1;
(statearr_28026_28052[(1)] = (5));

} else {
var statearr_28027_28053 = state_28021__$1;
(statearr_28027_28053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (13))){
var state_28021__$1 = state_28021;
var statearr_28028_28054 = state_28021__$1;
(statearr_28028_28054[(2)] = null);

(statearr_28028_28054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (6))){
var inst_28000 = (state_28021[(7)]);
var state_28021__$1 = state_28021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28021__$1,(11),to,inst_28000);
} else {
if((state_val_28022 === (3))){
var inst_28019 = (state_28021[(2)]);
var state_28021__$1 = state_28021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28021__$1,inst_28019);
} else {
if((state_val_28022 === (12))){
var state_28021__$1 = state_28021;
var statearr_28029_28055 = state_28021__$1;
(statearr_28029_28055[(2)] = null);

(statearr_28029_28055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (2))){
var state_28021__$1 = state_28021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28021__$1,(4),from);
} else {
if((state_val_28022 === (11))){
var inst_28010 = (state_28021[(2)]);
var state_28021__$1 = state_28021;
if(cljs.core.truth_(inst_28010)){
var statearr_28030_28056 = state_28021__$1;
(statearr_28030_28056[(1)] = (12));

} else {
var statearr_28031_28057 = state_28021__$1;
(statearr_28031_28057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (9))){
var state_28021__$1 = state_28021;
var statearr_28032_28058 = state_28021__$1;
(statearr_28032_28058[(2)] = null);

(statearr_28032_28058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (5))){
var state_28021__$1 = state_28021;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28033_28059 = state_28021__$1;
(statearr_28033_28059[(1)] = (8));

} else {
var statearr_28034_28060 = state_28021__$1;
(statearr_28034_28060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (14))){
var inst_28015 = (state_28021[(2)]);
var state_28021__$1 = state_28021;
var statearr_28035_28061 = state_28021__$1;
(statearr_28035_28061[(2)] = inst_28015);

(statearr_28035_28061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (10))){
var inst_28007 = (state_28021[(2)]);
var state_28021__$1 = state_28021;
var statearr_28036_28062 = state_28021__$1;
(statearr_28036_28062[(2)] = inst_28007);

(statearr_28036_28062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (8))){
var inst_28004 = cljs.core.async.close_BANG_.call(null,to);
var state_28021__$1 = state_28021;
var statearr_28037_28063 = state_28021__$1;
(statearr_28037_28063[(2)] = inst_28004);

(statearr_28037_28063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___28049))
;
return ((function (switch__27770__auto__,c__27882__auto___28049){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_28041 = [null,null,null,null,null,null,null,null];
(statearr_28041[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_28041[(1)] = (1));

return statearr_28041;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_28021){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_28021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e28042){if((e28042 instanceof Object)){
var ex__27774__auto__ = e28042;
var statearr_28043_28064 = state_28021;
(statearr_28043_28064[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28065 = state_28021;
state_28021 = G__28065;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_28021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_28021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___28049))
})();
var state__27884__auto__ = (function (){var statearr_28044 = f__27883__auto__.call(null);
(statearr_28044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___28049);

return statearr_28044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___28049))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28253){
var vec__28254 = p__28253;
var v = cljs.core.nth.call(null,vec__28254,(0),null);
var p = cljs.core.nth.call(null,vec__28254,(1),null);
var job = vec__28254;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27882__auto___28440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___28440,res,vec__28254,v,p,job,jobs,results){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___28440,res,vec__28254,v,p,job,jobs,results){
return (function (state_28261){
var state_val_28262 = (state_28261[(1)]);
if((state_val_28262 === (1))){
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28261__$1,(2),res,v);
} else {
if((state_val_28262 === (2))){
var inst_28258 = (state_28261[(2)]);
var inst_28259 = cljs.core.async.close_BANG_.call(null,res);
var state_28261__$1 = (function (){var statearr_28263 = state_28261;
(statearr_28263[(7)] = inst_28258);

return statearr_28263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28261__$1,inst_28259);
} else {
return null;
}
}
});})(c__27882__auto___28440,res,vec__28254,v,p,job,jobs,results))
;
return ((function (switch__27770__auto__,c__27882__auto___28440,res,vec__28254,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0 = (function (){
var statearr_28267 = [null,null,null,null,null,null,null,null];
(statearr_28267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__);

(statearr_28267[(1)] = (1));

return statearr_28267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1 = (function (state_28261){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_28261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e28268){if((e28268 instanceof Object)){
var ex__27774__auto__ = e28268;
var statearr_28269_28441 = state_28261;
(statearr_28269_28441[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28442 = state_28261;
state_28261 = G__28442;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = function(state_28261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1.call(this,state_28261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___28440,res,vec__28254,v,p,job,jobs,results))
})();
var state__27884__auto__ = (function (){var statearr_28270 = f__27883__auto__.call(null);
(statearr_28270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___28440);

return statearr_28270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___28440,res,vec__28254,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28271){
var vec__28272 = p__28271;
var v = cljs.core.nth.call(null,vec__28272,(0),null);
var p = cljs.core.nth.call(null,vec__28272,(1),null);
var job = vec__28272;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25675__auto___28443 = n;
var __28444 = (0);
while(true){
if((__28444 < n__25675__auto___28443)){
var G__28275_28445 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28275_28445) {
case "compute":
var c__27882__auto___28447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28444,c__27882__auto___28447,G__28275_28445,n__25675__auto___28443,jobs,results,process,async){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (__28444,c__27882__auto___28447,G__28275_28445,n__25675__auto___28443,jobs,results,process,async){
return (function (state_28288){
var state_val_28289 = (state_28288[(1)]);
if((state_val_28289 === (1))){
var state_28288__$1 = state_28288;
var statearr_28290_28448 = state_28288__$1;
(statearr_28290_28448[(2)] = null);

(statearr_28290_28448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (2))){
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28288__$1,(4),jobs);
} else {
if((state_val_28289 === (3))){
var inst_28286 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28288__$1,inst_28286);
} else {
if((state_val_28289 === (4))){
var inst_28278 = (state_28288[(2)]);
var inst_28279 = process.call(null,inst_28278);
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28279)){
var statearr_28291_28449 = state_28288__$1;
(statearr_28291_28449[(1)] = (5));

} else {
var statearr_28292_28450 = state_28288__$1;
(statearr_28292_28450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (5))){
var state_28288__$1 = state_28288;
var statearr_28293_28451 = state_28288__$1;
(statearr_28293_28451[(2)] = null);

(statearr_28293_28451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (6))){
var state_28288__$1 = state_28288;
var statearr_28294_28452 = state_28288__$1;
(statearr_28294_28452[(2)] = null);

(statearr_28294_28452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (7))){
var inst_28284 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28295_28453 = state_28288__$1;
(statearr_28295_28453[(2)] = inst_28284);

(statearr_28295_28453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28444,c__27882__auto___28447,G__28275_28445,n__25675__auto___28443,jobs,results,process,async))
;
return ((function (__28444,switch__27770__auto__,c__27882__auto___28447,G__28275_28445,n__25675__auto___28443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0 = (function (){
var statearr_28299 = [null,null,null,null,null,null,null];
(statearr_28299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__);

(statearr_28299[(1)] = (1));

return statearr_28299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1 = (function (state_28288){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_28288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e28300){if((e28300 instanceof Object)){
var ex__27774__auto__ = e28300;
var statearr_28301_28454 = state_28288;
(statearr_28301_28454[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28455 = state_28288;
state_28288 = G__28455;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = function(state_28288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1.call(this,state_28288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__;
})()
;})(__28444,switch__27770__auto__,c__27882__auto___28447,G__28275_28445,n__25675__auto___28443,jobs,results,process,async))
})();
var state__27884__auto__ = (function (){var statearr_28302 = f__27883__auto__.call(null);
(statearr_28302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___28447);

return statearr_28302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(__28444,c__27882__auto___28447,G__28275_28445,n__25675__auto___28443,jobs,results,process,async))
);


break;
case "async":
var c__27882__auto___28456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28444,c__27882__auto___28456,G__28275_28445,n__25675__auto___28443,jobs,results,process,async){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (__28444,c__27882__auto___28456,G__28275_28445,n__25675__auto___28443,jobs,results,process,async){
return (function (state_28315){
var state_val_28316 = (state_28315[(1)]);
if((state_val_28316 === (1))){
var state_28315__$1 = state_28315;
var statearr_28317_28457 = state_28315__$1;
(statearr_28317_28457[(2)] = null);

(statearr_28317_28457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (2))){
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28315__$1,(4),jobs);
} else {
if((state_val_28316 === (3))){
var inst_28313 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28315__$1,inst_28313);
} else {
if((state_val_28316 === (4))){
var inst_28305 = (state_28315[(2)]);
var inst_28306 = async.call(null,inst_28305);
var state_28315__$1 = state_28315;
if(cljs.core.truth_(inst_28306)){
var statearr_28318_28458 = state_28315__$1;
(statearr_28318_28458[(1)] = (5));

} else {
var statearr_28319_28459 = state_28315__$1;
(statearr_28319_28459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (5))){
var state_28315__$1 = state_28315;
var statearr_28320_28460 = state_28315__$1;
(statearr_28320_28460[(2)] = null);

(statearr_28320_28460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (6))){
var state_28315__$1 = state_28315;
var statearr_28321_28461 = state_28315__$1;
(statearr_28321_28461[(2)] = null);

(statearr_28321_28461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28316 === (7))){
var inst_28311 = (state_28315[(2)]);
var state_28315__$1 = state_28315;
var statearr_28322_28462 = state_28315__$1;
(statearr_28322_28462[(2)] = inst_28311);

(statearr_28322_28462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28444,c__27882__auto___28456,G__28275_28445,n__25675__auto___28443,jobs,results,process,async))
;
return ((function (__28444,switch__27770__auto__,c__27882__auto___28456,G__28275_28445,n__25675__auto___28443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0 = (function (){
var statearr_28326 = [null,null,null,null,null,null,null];
(statearr_28326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__);

(statearr_28326[(1)] = (1));

return statearr_28326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1 = (function (state_28315){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_28315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e28327){if((e28327 instanceof Object)){
var ex__27774__auto__ = e28327;
var statearr_28328_28463 = state_28315;
(statearr_28328_28463[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28464 = state_28315;
state_28315 = G__28464;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = function(state_28315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1.call(this,state_28315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__;
})()
;})(__28444,switch__27770__auto__,c__27882__auto___28456,G__28275_28445,n__25675__auto___28443,jobs,results,process,async))
})();
var state__27884__auto__ = (function (){var statearr_28329 = f__27883__auto__.call(null);
(statearr_28329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___28456);

return statearr_28329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(__28444,c__27882__auto___28456,G__28275_28445,n__25675__auto___28443,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28465 = (__28444 + (1));
__28444 = G__28465;
continue;
} else {
}
break;
}

var c__27882__auto___28466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___28466,jobs,results,process,async){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___28466,jobs,results,process,async){
return (function (state_28351){
var state_val_28352 = (state_28351[(1)]);
if((state_val_28352 === (1))){
var state_28351__$1 = state_28351;
var statearr_28353_28467 = state_28351__$1;
(statearr_28353_28467[(2)] = null);

(statearr_28353_28467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (2))){
var state_28351__$1 = state_28351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28351__$1,(4),from);
} else {
if((state_val_28352 === (3))){
var inst_28349 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28351__$1,inst_28349);
} else {
if((state_val_28352 === (4))){
var inst_28332 = (state_28351[(7)]);
var inst_28332__$1 = (state_28351[(2)]);
var inst_28333 = (inst_28332__$1 == null);
var state_28351__$1 = (function (){var statearr_28354 = state_28351;
(statearr_28354[(7)] = inst_28332__$1);

return statearr_28354;
})();
if(cljs.core.truth_(inst_28333)){
var statearr_28355_28468 = state_28351__$1;
(statearr_28355_28468[(1)] = (5));

} else {
var statearr_28356_28469 = state_28351__$1;
(statearr_28356_28469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (5))){
var inst_28335 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28351__$1 = state_28351;
var statearr_28357_28470 = state_28351__$1;
(statearr_28357_28470[(2)] = inst_28335);

(statearr_28357_28470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (6))){
var inst_28337 = (state_28351[(8)]);
var inst_28332 = (state_28351[(7)]);
var inst_28337__$1 = cljs.core.async.chan.call(null,(1));
var inst_28338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28339 = [inst_28332,inst_28337__$1];
var inst_28340 = (new cljs.core.PersistentVector(null,2,(5),inst_28338,inst_28339,null));
var state_28351__$1 = (function (){var statearr_28358 = state_28351;
(statearr_28358[(8)] = inst_28337__$1);

return statearr_28358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28351__$1,(8),jobs,inst_28340);
} else {
if((state_val_28352 === (7))){
var inst_28347 = (state_28351[(2)]);
var state_28351__$1 = state_28351;
var statearr_28359_28471 = state_28351__$1;
(statearr_28359_28471[(2)] = inst_28347);

(statearr_28359_28471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28352 === (8))){
var inst_28337 = (state_28351[(8)]);
var inst_28342 = (state_28351[(2)]);
var state_28351__$1 = (function (){var statearr_28360 = state_28351;
(statearr_28360[(9)] = inst_28342);

return statearr_28360;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28351__$1,(9),results,inst_28337);
} else {
if((state_val_28352 === (9))){
var inst_28344 = (state_28351[(2)]);
var state_28351__$1 = (function (){var statearr_28361 = state_28351;
(statearr_28361[(10)] = inst_28344);

return statearr_28361;
})();
var statearr_28362_28472 = state_28351__$1;
(statearr_28362_28472[(2)] = null);

(statearr_28362_28472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___28466,jobs,results,process,async))
;
return ((function (switch__27770__auto__,c__27882__auto___28466,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0 = (function (){
var statearr_28366 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__);

(statearr_28366[(1)] = (1));

return statearr_28366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1 = (function (state_28351){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_28351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e28367){if((e28367 instanceof Object)){
var ex__27774__auto__ = e28367;
var statearr_28368_28473 = state_28351;
(statearr_28368_28473[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28474 = state_28351;
state_28351 = G__28474;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = function(state_28351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1.call(this,state_28351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___28466,jobs,results,process,async))
})();
var state__27884__auto__ = (function (){var statearr_28369 = f__27883__auto__.call(null);
(statearr_28369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___28466);

return statearr_28369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___28466,jobs,results,process,async))
);


var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__,jobs,results,process,async){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__,jobs,results,process,async){
return (function (state_28407){
var state_val_28408 = (state_28407[(1)]);
if((state_val_28408 === (7))){
var inst_28403 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28409_28475 = state_28407__$1;
(statearr_28409_28475[(2)] = inst_28403);

(statearr_28409_28475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (20))){
var state_28407__$1 = state_28407;
var statearr_28410_28476 = state_28407__$1;
(statearr_28410_28476[(2)] = null);

(statearr_28410_28476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (1))){
var state_28407__$1 = state_28407;
var statearr_28411_28477 = state_28407__$1;
(statearr_28411_28477[(2)] = null);

(statearr_28411_28477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (4))){
var inst_28372 = (state_28407[(7)]);
var inst_28372__$1 = (state_28407[(2)]);
var inst_28373 = (inst_28372__$1 == null);
var state_28407__$1 = (function (){var statearr_28412 = state_28407;
(statearr_28412[(7)] = inst_28372__$1);

return statearr_28412;
})();
if(cljs.core.truth_(inst_28373)){
var statearr_28413_28478 = state_28407__$1;
(statearr_28413_28478[(1)] = (5));

} else {
var statearr_28414_28479 = state_28407__$1;
(statearr_28414_28479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (15))){
var inst_28385 = (state_28407[(8)]);
var state_28407__$1 = state_28407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28407__$1,(18),to,inst_28385);
} else {
if((state_val_28408 === (21))){
var inst_28398 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28415_28480 = state_28407__$1;
(statearr_28415_28480[(2)] = inst_28398);

(statearr_28415_28480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (13))){
var inst_28400 = (state_28407[(2)]);
var state_28407__$1 = (function (){var statearr_28416 = state_28407;
(statearr_28416[(9)] = inst_28400);

return statearr_28416;
})();
var statearr_28417_28481 = state_28407__$1;
(statearr_28417_28481[(2)] = null);

(statearr_28417_28481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (6))){
var inst_28372 = (state_28407[(7)]);
var state_28407__$1 = state_28407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28407__$1,(11),inst_28372);
} else {
if((state_val_28408 === (17))){
var inst_28393 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
if(cljs.core.truth_(inst_28393)){
var statearr_28418_28482 = state_28407__$1;
(statearr_28418_28482[(1)] = (19));

} else {
var statearr_28419_28483 = state_28407__$1;
(statearr_28419_28483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (3))){
var inst_28405 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28407__$1,inst_28405);
} else {
if((state_val_28408 === (12))){
var inst_28382 = (state_28407[(10)]);
var state_28407__$1 = state_28407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28407__$1,(14),inst_28382);
} else {
if((state_val_28408 === (2))){
var state_28407__$1 = state_28407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28407__$1,(4),results);
} else {
if((state_val_28408 === (19))){
var state_28407__$1 = state_28407;
var statearr_28420_28484 = state_28407__$1;
(statearr_28420_28484[(2)] = null);

(statearr_28420_28484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (11))){
var inst_28382 = (state_28407[(2)]);
var state_28407__$1 = (function (){var statearr_28421 = state_28407;
(statearr_28421[(10)] = inst_28382);

return statearr_28421;
})();
var statearr_28422_28485 = state_28407__$1;
(statearr_28422_28485[(2)] = null);

(statearr_28422_28485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (9))){
var state_28407__$1 = state_28407;
var statearr_28423_28486 = state_28407__$1;
(statearr_28423_28486[(2)] = null);

(statearr_28423_28486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (5))){
var state_28407__$1 = state_28407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28424_28487 = state_28407__$1;
(statearr_28424_28487[(1)] = (8));

} else {
var statearr_28425_28488 = state_28407__$1;
(statearr_28425_28488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (14))){
var inst_28385 = (state_28407[(8)]);
var inst_28387 = (state_28407[(11)]);
var inst_28385__$1 = (state_28407[(2)]);
var inst_28386 = (inst_28385__$1 == null);
var inst_28387__$1 = cljs.core.not.call(null,inst_28386);
var state_28407__$1 = (function (){var statearr_28426 = state_28407;
(statearr_28426[(8)] = inst_28385__$1);

(statearr_28426[(11)] = inst_28387__$1);

return statearr_28426;
})();
if(inst_28387__$1){
var statearr_28427_28489 = state_28407__$1;
(statearr_28427_28489[(1)] = (15));

} else {
var statearr_28428_28490 = state_28407__$1;
(statearr_28428_28490[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (16))){
var inst_28387 = (state_28407[(11)]);
var state_28407__$1 = state_28407;
var statearr_28429_28491 = state_28407__$1;
(statearr_28429_28491[(2)] = inst_28387);

(statearr_28429_28491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (10))){
var inst_28379 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28430_28492 = state_28407__$1;
(statearr_28430_28492[(2)] = inst_28379);

(statearr_28430_28492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (18))){
var inst_28390 = (state_28407[(2)]);
var state_28407__$1 = state_28407;
var statearr_28431_28493 = state_28407__$1;
(statearr_28431_28493[(2)] = inst_28390);

(statearr_28431_28493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28408 === (8))){
var inst_28376 = cljs.core.async.close_BANG_.call(null,to);
var state_28407__$1 = state_28407;
var statearr_28432_28494 = state_28407__$1;
(statearr_28432_28494[(2)] = inst_28376);

(statearr_28432_28494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto__,jobs,results,process,async))
;
return ((function (switch__27770__auto__,c__27882__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0 = (function (){
var statearr_28436 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__);

(statearr_28436[(1)] = (1));

return statearr_28436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1 = (function (state_28407){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_28407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e28437){if((e28437 instanceof Object)){
var ex__27774__auto__ = e28437;
var statearr_28438_28495 = state_28407;
(statearr_28438_28495[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28496 = state_28407;
state_28407 = G__28496;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__ = function(state_28407){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1.call(this,state_28407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27771__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__,jobs,results,process,async))
})();
var state__27884__auto__ = (function (){var statearr_28439 = f__27883__auto__.call(null);
(statearr_28439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_28439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__,jobs,results,process,async))
);

return c__27882__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28497 = [];
var len__25835__auto___28500 = arguments.length;
var i__25836__auto___28501 = (0);
while(true){
if((i__25836__auto___28501 < len__25835__auto___28500)){
args28497.push((arguments[i__25836__auto___28501]));

var G__28502 = (i__25836__auto___28501 + (1));
i__25836__auto___28501 = G__28502;
continue;
} else {
}
break;
}

var G__28499 = args28497.length;
switch (G__28499) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28497.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28504 = [];
var len__25835__auto___28507 = arguments.length;
var i__25836__auto___28508 = (0);
while(true){
if((i__25836__auto___28508 < len__25835__auto___28507)){
args28504.push((arguments[i__25836__auto___28508]));

var G__28509 = (i__25836__auto___28508 + (1));
i__25836__auto___28508 = G__28509;
continue;
} else {
}
break;
}

var G__28506 = args28504.length;
switch (G__28506) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28504.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28511 = [];
var len__25835__auto___28564 = arguments.length;
var i__25836__auto___28565 = (0);
while(true){
if((i__25836__auto___28565 < len__25835__auto___28564)){
args28511.push((arguments[i__25836__auto___28565]));

var G__28566 = (i__25836__auto___28565 + (1));
i__25836__auto___28565 = G__28566;
continue;
} else {
}
break;
}

var G__28513 = args28511.length;
switch (G__28513) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28511.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27882__auto___28568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___28568,tc,fc){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___28568,tc,fc){
return (function (state_28539){
var state_val_28540 = (state_28539[(1)]);
if((state_val_28540 === (7))){
var inst_28535 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
var statearr_28541_28569 = state_28539__$1;
(statearr_28541_28569[(2)] = inst_28535);

(statearr_28541_28569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (1))){
var state_28539__$1 = state_28539;
var statearr_28542_28570 = state_28539__$1;
(statearr_28542_28570[(2)] = null);

(statearr_28542_28570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (4))){
var inst_28516 = (state_28539[(7)]);
var inst_28516__$1 = (state_28539[(2)]);
var inst_28517 = (inst_28516__$1 == null);
var state_28539__$1 = (function (){var statearr_28543 = state_28539;
(statearr_28543[(7)] = inst_28516__$1);

return statearr_28543;
})();
if(cljs.core.truth_(inst_28517)){
var statearr_28544_28571 = state_28539__$1;
(statearr_28544_28571[(1)] = (5));

} else {
var statearr_28545_28572 = state_28539__$1;
(statearr_28545_28572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (13))){
var state_28539__$1 = state_28539;
var statearr_28546_28573 = state_28539__$1;
(statearr_28546_28573[(2)] = null);

(statearr_28546_28573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (6))){
var inst_28516 = (state_28539[(7)]);
var inst_28522 = p.call(null,inst_28516);
var state_28539__$1 = state_28539;
if(cljs.core.truth_(inst_28522)){
var statearr_28547_28574 = state_28539__$1;
(statearr_28547_28574[(1)] = (9));

} else {
var statearr_28548_28575 = state_28539__$1;
(statearr_28548_28575[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (3))){
var inst_28537 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28539__$1,inst_28537);
} else {
if((state_val_28540 === (12))){
var state_28539__$1 = state_28539;
var statearr_28549_28576 = state_28539__$1;
(statearr_28549_28576[(2)] = null);

(statearr_28549_28576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (2))){
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28539__$1,(4),ch);
} else {
if((state_val_28540 === (11))){
var inst_28516 = (state_28539[(7)]);
var inst_28526 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28539__$1,(8),inst_28526,inst_28516);
} else {
if((state_val_28540 === (9))){
var state_28539__$1 = state_28539;
var statearr_28550_28577 = state_28539__$1;
(statearr_28550_28577[(2)] = tc);

(statearr_28550_28577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (5))){
var inst_28519 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28520 = cljs.core.async.close_BANG_.call(null,fc);
var state_28539__$1 = (function (){var statearr_28551 = state_28539;
(statearr_28551[(8)] = inst_28519);

return statearr_28551;
})();
var statearr_28552_28578 = state_28539__$1;
(statearr_28552_28578[(2)] = inst_28520);

(statearr_28552_28578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (14))){
var inst_28533 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
var statearr_28553_28579 = state_28539__$1;
(statearr_28553_28579[(2)] = inst_28533);

(statearr_28553_28579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (10))){
var state_28539__$1 = state_28539;
var statearr_28554_28580 = state_28539__$1;
(statearr_28554_28580[(2)] = fc);

(statearr_28554_28580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (8))){
var inst_28528 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
if(cljs.core.truth_(inst_28528)){
var statearr_28555_28581 = state_28539__$1;
(statearr_28555_28581[(1)] = (12));

} else {
var statearr_28556_28582 = state_28539__$1;
(statearr_28556_28582[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___28568,tc,fc))
;
return ((function (switch__27770__auto__,c__27882__auto___28568,tc,fc){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_28560 = [null,null,null,null,null,null,null,null,null];
(statearr_28560[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_28560[(1)] = (1));

return statearr_28560;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_28539){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_28539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e28561){if((e28561 instanceof Object)){
var ex__27774__auto__ = e28561;
var statearr_28562_28583 = state_28539;
(statearr_28562_28583[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28584 = state_28539;
state_28539 = G__28584;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_28539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_28539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___28568,tc,fc))
})();
var state__27884__auto__ = (function (){var statearr_28563 = f__27883__auto__.call(null);
(statearr_28563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___28568);

return statearr_28563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___28568,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__){
return (function (state_28648){
var state_val_28649 = (state_28648[(1)]);
if((state_val_28649 === (7))){
var inst_28644 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28650_28671 = state_28648__$1;
(statearr_28650_28671[(2)] = inst_28644);

(statearr_28650_28671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (1))){
var inst_28628 = init;
var state_28648__$1 = (function (){var statearr_28651 = state_28648;
(statearr_28651[(7)] = inst_28628);

return statearr_28651;
})();
var statearr_28652_28672 = state_28648__$1;
(statearr_28652_28672[(2)] = null);

(statearr_28652_28672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (4))){
var inst_28631 = (state_28648[(8)]);
var inst_28631__$1 = (state_28648[(2)]);
var inst_28632 = (inst_28631__$1 == null);
var state_28648__$1 = (function (){var statearr_28653 = state_28648;
(statearr_28653[(8)] = inst_28631__$1);

return statearr_28653;
})();
if(cljs.core.truth_(inst_28632)){
var statearr_28654_28673 = state_28648__$1;
(statearr_28654_28673[(1)] = (5));

} else {
var statearr_28655_28674 = state_28648__$1;
(statearr_28655_28674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (6))){
var inst_28631 = (state_28648[(8)]);
var inst_28628 = (state_28648[(7)]);
var inst_28635 = (state_28648[(9)]);
var inst_28635__$1 = f.call(null,inst_28628,inst_28631);
var inst_28636 = cljs.core.reduced_QMARK_.call(null,inst_28635__$1);
var state_28648__$1 = (function (){var statearr_28656 = state_28648;
(statearr_28656[(9)] = inst_28635__$1);

return statearr_28656;
})();
if(inst_28636){
var statearr_28657_28675 = state_28648__$1;
(statearr_28657_28675[(1)] = (8));

} else {
var statearr_28658_28676 = state_28648__$1;
(statearr_28658_28676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (3))){
var inst_28646 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28648__$1,inst_28646);
} else {
if((state_val_28649 === (2))){
var state_28648__$1 = state_28648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28648__$1,(4),ch);
} else {
if((state_val_28649 === (9))){
var inst_28635 = (state_28648[(9)]);
var inst_28628 = inst_28635;
var state_28648__$1 = (function (){var statearr_28659 = state_28648;
(statearr_28659[(7)] = inst_28628);

return statearr_28659;
})();
var statearr_28660_28677 = state_28648__$1;
(statearr_28660_28677[(2)] = null);

(statearr_28660_28677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (5))){
var inst_28628 = (state_28648[(7)]);
var state_28648__$1 = state_28648;
var statearr_28661_28678 = state_28648__$1;
(statearr_28661_28678[(2)] = inst_28628);

(statearr_28661_28678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (10))){
var inst_28642 = (state_28648[(2)]);
var state_28648__$1 = state_28648;
var statearr_28662_28679 = state_28648__$1;
(statearr_28662_28679[(2)] = inst_28642);

(statearr_28662_28679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28649 === (8))){
var inst_28635 = (state_28648[(9)]);
var inst_28638 = cljs.core.deref.call(null,inst_28635);
var state_28648__$1 = state_28648;
var statearr_28663_28680 = state_28648__$1;
(statearr_28663_28680[(2)] = inst_28638);

(statearr_28663_28680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto__))
;
return ((function (switch__27770__auto__,c__27882__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27771__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27771__auto____0 = (function (){
var statearr_28667 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28667[(0)] = cljs$core$async$reduce_$_state_machine__27771__auto__);

(statearr_28667[(1)] = (1));

return statearr_28667;
});
var cljs$core$async$reduce_$_state_machine__27771__auto____1 = (function (state_28648){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_28648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e28668){if((e28668 instanceof Object)){
var ex__27774__auto__ = e28668;
var statearr_28669_28681 = state_28648;
(statearr_28669_28681[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28682 = state_28648;
state_28648 = G__28682;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27771__auto__ = function(state_28648){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27771__auto____1.call(this,state_28648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27771__auto____0;
cljs$core$async$reduce_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27771__auto____1;
return cljs$core$async$reduce_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__))
})();
var state__27884__auto__ = (function (){var statearr_28670 = f__27883__auto__.call(null);
(statearr_28670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_28670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__))
);

return c__27882__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28683 = [];
var len__25835__auto___28735 = arguments.length;
var i__25836__auto___28736 = (0);
while(true){
if((i__25836__auto___28736 < len__25835__auto___28735)){
args28683.push((arguments[i__25836__auto___28736]));

var G__28737 = (i__25836__auto___28736 + (1));
i__25836__auto___28736 = G__28737;
continue;
} else {
}
break;
}

var G__28685 = args28683.length;
switch (G__28685) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28683.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__){
return (function (state_28710){
var state_val_28711 = (state_28710[(1)]);
if((state_val_28711 === (7))){
var inst_28692 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28712_28739 = state_28710__$1;
(statearr_28712_28739[(2)] = inst_28692);

(statearr_28712_28739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (1))){
var inst_28686 = cljs.core.seq.call(null,coll);
var inst_28687 = inst_28686;
var state_28710__$1 = (function (){var statearr_28713 = state_28710;
(statearr_28713[(7)] = inst_28687);

return statearr_28713;
})();
var statearr_28714_28740 = state_28710__$1;
(statearr_28714_28740[(2)] = null);

(statearr_28714_28740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (4))){
var inst_28687 = (state_28710[(7)]);
var inst_28690 = cljs.core.first.call(null,inst_28687);
var state_28710__$1 = state_28710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28710__$1,(7),ch,inst_28690);
} else {
if((state_val_28711 === (13))){
var inst_28704 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28715_28741 = state_28710__$1;
(statearr_28715_28741[(2)] = inst_28704);

(statearr_28715_28741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (6))){
var inst_28695 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
if(cljs.core.truth_(inst_28695)){
var statearr_28716_28742 = state_28710__$1;
(statearr_28716_28742[(1)] = (8));

} else {
var statearr_28717_28743 = state_28710__$1;
(statearr_28717_28743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (3))){
var inst_28708 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28710__$1,inst_28708);
} else {
if((state_val_28711 === (12))){
var state_28710__$1 = state_28710;
var statearr_28718_28744 = state_28710__$1;
(statearr_28718_28744[(2)] = null);

(statearr_28718_28744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (2))){
var inst_28687 = (state_28710[(7)]);
var state_28710__$1 = state_28710;
if(cljs.core.truth_(inst_28687)){
var statearr_28719_28745 = state_28710__$1;
(statearr_28719_28745[(1)] = (4));

} else {
var statearr_28720_28746 = state_28710__$1;
(statearr_28720_28746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (11))){
var inst_28701 = cljs.core.async.close_BANG_.call(null,ch);
var state_28710__$1 = state_28710;
var statearr_28721_28747 = state_28710__$1;
(statearr_28721_28747[(2)] = inst_28701);

(statearr_28721_28747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (9))){
var state_28710__$1 = state_28710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28722_28748 = state_28710__$1;
(statearr_28722_28748[(1)] = (11));

} else {
var statearr_28723_28749 = state_28710__$1;
(statearr_28723_28749[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (5))){
var inst_28687 = (state_28710[(7)]);
var state_28710__$1 = state_28710;
var statearr_28724_28750 = state_28710__$1;
(statearr_28724_28750[(2)] = inst_28687);

(statearr_28724_28750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (10))){
var inst_28706 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28725_28751 = state_28710__$1;
(statearr_28725_28751[(2)] = inst_28706);

(statearr_28725_28751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (8))){
var inst_28687 = (state_28710[(7)]);
var inst_28697 = cljs.core.next.call(null,inst_28687);
var inst_28687__$1 = inst_28697;
var state_28710__$1 = (function (){var statearr_28726 = state_28710;
(statearr_28726[(7)] = inst_28687__$1);

return statearr_28726;
})();
var statearr_28727_28752 = state_28710__$1;
(statearr_28727_28752[(2)] = null);

(statearr_28727_28752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto__))
;
return ((function (switch__27770__auto__,c__27882__auto__){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_28731 = [null,null,null,null,null,null,null,null];
(statearr_28731[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_28731[(1)] = (1));

return statearr_28731;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_28710){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_28710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e28732){if((e28732 instanceof Object)){
var ex__27774__auto__ = e28732;
var statearr_28733_28753 = state_28710;
(statearr_28733_28753[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28754 = state_28710;
state_28710 = G__28754;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_28710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_28710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__))
})();
var state__27884__auto__ = (function (){var statearr_28734 = f__27883__auto__.call(null);
(statearr_28734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_28734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__))
);

return c__27882__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25423__auto__ = (((_ == null))?null:_);
var m__25424__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,_);
} else {
var m__25424__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28980 = (function (mult,ch,cs,meta28981){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28981 = meta28981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28982,meta28981__$1){
var self__ = this;
var _28982__$1 = this;
return (new cljs.core.async.t_cljs$core$async28980(self__.mult,self__.ch,self__.cs,meta28981__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28982){
var self__ = this;
var _28982__$1 = this;
return self__.meta28981;
});})(cs))
;

cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28980.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28980.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28981","meta28981",-216478459,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28980";

cljs.core.async.t_cljs$core$async28980.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28980");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28980 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28980(mult__$1,ch__$1,cs__$1,meta28981){
return (new cljs.core.async.t_cljs$core$async28980(mult__$1,ch__$1,cs__$1,meta28981));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28980(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27882__auto___29205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___29205,cs,m,dchan,dctr,done){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___29205,cs,m,dchan,dctr,done){
return (function (state_29117){
var state_val_29118 = (state_29117[(1)]);
if((state_val_29118 === (7))){
var inst_29113 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29119_29206 = state_29117__$1;
(statearr_29119_29206[(2)] = inst_29113);

(statearr_29119_29206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (20))){
var inst_29016 = (state_29117[(7)]);
var inst_29028 = cljs.core.first.call(null,inst_29016);
var inst_29029 = cljs.core.nth.call(null,inst_29028,(0),null);
var inst_29030 = cljs.core.nth.call(null,inst_29028,(1),null);
var state_29117__$1 = (function (){var statearr_29120 = state_29117;
(statearr_29120[(8)] = inst_29029);

return statearr_29120;
})();
if(cljs.core.truth_(inst_29030)){
var statearr_29121_29207 = state_29117__$1;
(statearr_29121_29207[(1)] = (22));

} else {
var statearr_29122_29208 = state_29117__$1;
(statearr_29122_29208[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (27))){
var inst_29065 = (state_29117[(9)]);
var inst_29060 = (state_29117[(10)]);
var inst_29058 = (state_29117[(11)]);
var inst_28985 = (state_29117[(12)]);
var inst_29065__$1 = cljs.core._nth.call(null,inst_29058,inst_29060);
var inst_29066 = cljs.core.async.put_BANG_.call(null,inst_29065__$1,inst_28985,done);
var state_29117__$1 = (function (){var statearr_29123 = state_29117;
(statearr_29123[(9)] = inst_29065__$1);

return statearr_29123;
})();
if(cljs.core.truth_(inst_29066)){
var statearr_29124_29209 = state_29117__$1;
(statearr_29124_29209[(1)] = (30));

} else {
var statearr_29125_29210 = state_29117__$1;
(statearr_29125_29210[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (1))){
var state_29117__$1 = state_29117;
var statearr_29126_29211 = state_29117__$1;
(statearr_29126_29211[(2)] = null);

(statearr_29126_29211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (24))){
var inst_29016 = (state_29117[(7)]);
var inst_29035 = (state_29117[(2)]);
var inst_29036 = cljs.core.next.call(null,inst_29016);
var inst_28994 = inst_29036;
var inst_28995 = null;
var inst_28996 = (0);
var inst_28997 = (0);
var state_29117__$1 = (function (){var statearr_29127 = state_29117;
(statearr_29127[(13)] = inst_28996);

(statearr_29127[(14)] = inst_29035);

(statearr_29127[(15)] = inst_28994);

(statearr_29127[(16)] = inst_28997);

(statearr_29127[(17)] = inst_28995);

return statearr_29127;
})();
var statearr_29128_29212 = state_29117__$1;
(statearr_29128_29212[(2)] = null);

(statearr_29128_29212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (39))){
var state_29117__$1 = state_29117;
var statearr_29132_29213 = state_29117__$1;
(statearr_29132_29213[(2)] = null);

(statearr_29132_29213[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (4))){
var inst_28985 = (state_29117[(12)]);
var inst_28985__$1 = (state_29117[(2)]);
var inst_28986 = (inst_28985__$1 == null);
var state_29117__$1 = (function (){var statearr_29133 = state_29117;
(statearr_29133[(12)] = inst_28985__$1);

return statearr_29133;
})();
if(cljs.core.truth_(inst_28986)){
var statearr_29134_29214 = state_29117__$1;
(statearr_29134_29214[(1)] = (5));

} else {
var statearr_29135_29215 = state_29117__$1;
(statearr_29135_29215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (15))){
var inst_28996 = (state_29117[(13)]);
var inst_28994 = (state_29117[(15)]);
var inst_28997 = (state_29117[(16)]);
var inst_28995 = (state_29117[(17)]);
var inst_29012 = (state_29117[(2)]);
var inst_29013 = (inst_28997 + (1));
var tmp29129 = inst_28996;
var tmp29130 = inst_28994;
var tmp29131 = inst_28995;
var inst_28994__$1 = tmp29130;
var inst_28995__$1 = tmp29131;
var inst_28996__$1 = tmp29129;
var inst_28997__$1 = inst_29013;
var state_29117__$1 = (function (){var statearr_29136 = state_29117;
(statearr_29136[(13)] = inst_28996__$1);

(statearr_29136[(15)] = inst_28994__$1);

(statearr_29136[(16)] = inst_28997__$1);

(statearr_29136[(17)] = inst_28995__$1);

(statearr_29136[(18)] = inst_29012);

return statearr_29136;
})();
var statearr_29137_29216 = state_29117__$1;
(statearr_29137_29216[(2)] = null);

(statearr_29137_29216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (21))){
var inst_29039 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29141_29217 = state_29117__$1;
(statearr_29141_29217[(2)] = inst_29039);

(statearr_29141_29217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (31))){
var inst_29065 = (state_29117[(9)]);
var inst_29069 = done.call(null,null);
var inst_29070 = cljs.core.async.untap_STAR_.call(null,m,inst_29065);
var state_29117__$1 = (function (){var statearr_29142 = state_29117;
(statearr_29142[(19)] = inst_29069);

return statearr_29142;
})();
var statearr_29143_29218 = state_29117__$1;
(statearr_29143_29218[(2)] = inst_29070);

(statearr_29143_29218[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (32))){
var inst_29060 = (state_29117[(10)]);
var inst_29057 = (state_29117[(20)]);
var inst_29058 = (state_29117[(11)]);
var inst_29059 = (state_29117[(21)]);
var inst_29072 = (state_29117[(2)]);
var inst_29073 = (inst_29060 + (1));
var tmp29138 = inst_29057;
var tmp29139 = inst_29058;
var tmp29140 = inst_29059;
var inst_29057__$1 = tmp29138;
var inst_29058__$1 = tmp29139;
var inst_29059__$1 = tmp29140;
var inst_29060__$1 = inst_29073;
var state_29117__$1 = (function (){var statearr_29144 = state_29117;
(statearr_29144[(10)] = inst_29060__$1);

(statearr_29144[(20)] = inst_29057__$1);

(statearr_29144[(11)] = inst_29058__$1);

(statearr_29144[(21)] = inst_29059__$1);

(statearr_29144[(22)] = inst_29072);

return statearr_29144;
})();
var statearr_29145_29219 = state_29117__$1;
(statearr_29145_29219[(2)] = null);

(statearr_29145_29219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (40))){
var inst_29085 = (state_29117[(23)]);
var inst_29089 = done.call(null,null);
var inst_29090 = cljs.core.async.untap_STAR_.call(null,m,inst_29085);
var state_29117__$1 = (function (){var statearr_29146 = state_29117;
(statearr_29146[(24)] = inst_29089);

return statearr_29146;
})();
var statearr_29147_29220 = state_29117__$1;
(statearr_29147_29220[(2)] = inst_29090);

(statearr_29147_29220[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (33))){
var inst_29076 = (state_29117[(25)]);
var inst_29078 = cljs.core.chunked_seq_QMARK_.call(null,inst_29076);
var state_29117__$1 = state_29117;
if(inst_29078){
var statearr_29148_29221 = state_29117__$1;
(statearr_29148_29221[(1)] = (36));

} else {
var statearr_29149_29222 = state_29117__$1;
(statearr_29149_29222[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (13))){
var inst_29006 = (state_29117[(26)]);
var inst_29009 = cljs.core.async.close_BANG_.call(null,inst_29006);
var state_29117__$1 = state_29117;
var statearr_29150_29223 = state_29117__$1;
(statearr_29150_29223[(2)] = inst_29009);

(statearr_29150_29223[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (22))){
var inst_29029 = (state_29117[(8)]);
var inst_29032 = cljs.core.async.close_BANG_.call(null,inst_29029);
var state_29117__$1 = state_29117;
var statearr_29151_29224 = state_29117__$1;
(statearr_29151_29224[(2)] = inst_29032);

(statearr_29151_29224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (36))){
var inst_29076 = (state_29117[(25)]);
var inst_29080 = cljs.core.chunk_first.call(null,inst_29076);
var inst_29081 = cljs.core.chunk_rest.call(null,inst_29076);
var inst_29082 = cljs.core.count.call(null,inst_29080);
var inst_29057 = inst_29081;
var inst_29058 = inst_29080;
var inst_29059 = inst_29082;
var inst_29060 = (0);
var state_29117__$1 = (function (){var statearr_29152 = state_29117;
(statearr_29152[(10)] = inst_29060);

(statearr_29152[(20)] = inst_29057);

(statearr_29152[(11)] = inst_29058);

(statearr_29152[(21)] = inst_29059);

return statearr_29152;
})();
var statearr_29153_29225 = state_29117__$1;
(statearr_29153_29225[(2)] = null);

(statearr_29153_29225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (41))){
var inst_29076 = (state_29117[(25)]);
var inst_29092 = (state_29117[(2)]);
var inst_29093 = cljs.core.next.call(null,inst_29076);
var inst_29057 = inst_29093;
var inst_29058 = null;
var inst_29059 = (0);
var inst_29060 = (0);
var state_29117__$1 = (function (){var statearr_29154 = state_29117;
(statearr_29154[(10)] = inst_29060);

(statearr_29154[(20)] = inst_29057);

(statearr_29154[(11)] = inst_29058);

(statearr_29154[(21)] = inst_29059);

(statearr_29154[(27)] = inst_29092);

return statearr_29154;
})();
var statearr_29155_29226 = state_29117__$1;
(statearr_29155_29226[(2)] = null);

(statearr_29155_29226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (43))){
var state_29117__$1 = state_29117;
var statearr_29156_29227 = state_29117__$1;
(statearr_29156_29227[(2)] = null);

(statearr_29156_29227[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (29))){
var inst_29101 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29157_29228 = state_29117__$1;
(statearr_29157_29228[(2)] = inst_29101);

(statearr_29157_29228[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (44))){
var inst_29110 = (state_29117[(2)]);
var state_29117__$1 = (function (){var statearr_29158 = state_29117;
(statearr_29158[(28)] = inst_29110);

return statearr_29158;
})();
var statearr_29159_29229 = state_29117__$1;
(statearr_29159_29229[(2)] = null);

(statearr_29159_29229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (6))){
var inst_29049 = (state_29117[(29)]);
var inst_29048 = cljs.core.deref.call(null,cs);
var inst_29049__$1 = cljs.core.keys.call(null,inst_29048);
var inst_29050 = cljs.core.count.call(null,inst_29049__$1);
var inst_29051 = cljs.core.reset_BANG_.call(null,dctr,inst_29050);
var inst_29056 = cljs.core.seq.call(null,inst_29049__$1);
var inst_29057 = inst_29056;
var inst_29058 = null;
var inst_29059 = (0);
var inst_29060 = (0);
var state_29117__$1 = (function (){var statearr_29160 = state_29117;
(statearr_29160[(10)] = inst_29060);

(statearr_29160[(20)] = inst_29057);

(statearr_29160[(29)] = inst_29049__$1);

(statearr_29160[(30)] = inst_29051);

(statearr_29160[(11)] = inst_29058);

(statearr_29160[(21)] = inst_29059);

return statearr_29160;
})();
var statearr_29161_29230 = state_29117__$1;
(statearr_29161_29230[(2)] = null);

(statearr_29161_29230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (28))){
var inst_29076 = (state_29117[(25)]);
var inst_29057 = (state_29117[(20)]);
var inst_29076__$1 = cljs.core.seq.call(null,inst_29057);
var state_29117__$1 = (function (){var statearr_29162 = state_29117;
(statearr_29162[(25)] = inst_29076__$1);

return statearr_29162;
})();
if(inst_29076__$1){
var statearr_29163_29231 = state_29117__$1;
(statearr_29163_29231[(1)] = (33));

} else {
var statearr_29164_29232 = state_29117__$1;
(statearr_29164_29232[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (25))){
var inst_29060 = (state_29117[(10)]);
var inst_29059 = (state_29117[(21)]);
var inst_29062 = (inst_29060 < inst_29059);
var inst_29063 = inst_29062;
var state_29117__$1 = state_29117;
if(cljs.core.truth_(inst_29063)){
var statearr_29165_29233 = state_29117__$1;
(statearr_29165_29233[(1)] = (27));

} else {
var statearr_29166_29234 = state_29117__$1;
(statearr_29166_29234[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (34))){
var state_29117__$1 = state_29117;
var statearr_29167_29235 = state_29117__$1;
(statearr_29167_29235[(2)] = null);

(statearr_29167_29235[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (17))){
var state_29117__$1 = state_29117;
var statearr_29168_29236 = state_29117__$1;
(statearr_29168_29236[(2)] = null);

(statearr_29168_29236[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (3))){
var inst_29115 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29117__$1,inst_29115);
} else {
if((state_val_29118 === (12))){
var inst_29044 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29169_29237 = state_29117__$1;
(statearr_29169_29237[(2)] = inst_29044);

(statearr_29169_29237[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (2))){
var state_29117__$1 = state_29117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29117__$1,(4),ch);
} else {
if((state_val_29118 === (23))){
var state_29117__$1 = state_29117;
var statearr_29170_29238 = state_29117__$1;
(statearr_29170_29238[(2)] = null);

(statearr_29170_29238[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (35))){
var inst_29099 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29171_29239 = state_29117__$1;
(statearr_29171_29239[(2)] = inst_29099);

(statearr_29171_29239[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (19))){
var inst_29016 = (state_29117[(7)]);
var inst_29020 = cljs.core.chunk_first.call(null,inst_29016);
var inst_29021 = cljs.core.chunk_rest.call(null,inst_29016);
var inst_29022 = cljs.core.count.call(null,inst_29020);
var inst_28994 = inst_29021;
var inst_28995 = inst_29020;
var inst_28996 = inst_29022;
var inst_28997 = (0);
var state_29117__$1 = (function (){var statearr_29172 = state_29117;
(statearr_29172[(13)] = inst_28996);

(statearr_29172[(15)] = inst_28994);

(statearr_29172[(16)] = inst_28997);

(statearr_29172[(17)] = inst_28995);

return statearr_29172;
})();
var statearr_29173_29240 = state_29117__$1;
(statearr_29173_29240[(2)] = null);

(statearr_29173_29240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (11))){
var inst_28994 = (state_29117[(15)]);
var inst_29016 = (state_29117[(7)]);
var inst_29016__$1 = cljs.core.seq.call(null,inst_28994);
var state_29117__$1 = (function (){var statearr_29174 = state_29117;
(statearr_29174[(7)] = inst_29016__$1);

return statearr_29174;
})();
if(inst_29016__$1){
var statearr_29175_29241 = state_29117__$1;
(statearr_29175_29241[(1)] = (16));

} else {
var statearr_29176_29242 = state_29117__$1;
(statearr_29176_29242[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (9))){
var inst_29046 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29177_29243 = state_29117__$1;
(statearr_29177_29243[(2)] = inst_29046);

(statearr_29177_29243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (5))){
var inst_28992 = cljs.core.deref.call(null,cs);
var inst_28993 = cljs.core.seq.call(null,inst_28992);
var inst_28994 = inst_28993;
var inst_28995 = null;
var inst_28996 = (0);
var inst_28997 = (0);
var state_29117__$1 = (function (){var statearr_29178 = state_29117;
(statearr_29178[(13)] = inst_28996);

(statearr_29178[(15)] = inst_28994);

(statearr_29178[(16)] = inst_28997);

(statearr_29178[(17)] = inst_28995);

return statearr_29178;
})();
var statearr_29179_29244 = state_29117__$1;
(statearr_29179_29244[(2)] = null);

(statearr_29179_29244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (14))){
var state_29117__$1 = state_29117;
var statearr_29180_29245 = state_29117__$1;
(statearr_29180_29245[(2)] = null);

(statearr_29180_29245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (45))){
var inst_29107 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29181_29246 = state_29117__$1;
(statearr_29181_29246[(2)] = inst_29107);

(statearr_29181_29246[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (26))){
var inst_29049 = (state_29117[(29)]);
var inst_29103 = (state_29117[(2)]);
var inst_29104 = cljs.core.seq.call(null,inst_29049);
var state_29117__$1 = (function (){var statearr_29182 = state_29117;
(statearr_29182[(31)] = inst_29103);

return statearr_29182;
})();
if(inst_29104){
var statearr_29183_29247 = state_29117__$1;
(statearr_29183_29247[(1)] = (42));

} else {
var statearr_29184_29248 = state_29117__$1;
(statearr_29184_29248[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (16))){
var inst_29016 = (state_29117[(7)]);
var inst_29018 = cljs.core.chunked_seq_QMARK_.call(null,inst_29016);
var state_29117__$1 = state_29117;
if(inst_29018){
var statearr_29185_29249 = state_29117__$1;
(statearr_29185_29249[(1)] = (19));

} else {
var statearr_29186_29250 = state_29117__$1;
(statearr_29186_29250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (38))){
var inst_29096 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29187_29251 = state_29117__$1;
(statearr_29187_29251[(2)] = inst_29096);

(statearr_29187_29251[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (30))){
var state_29117__$1 = state_29117;
var statearr_29188_29252 = state_29117__$1;
(statearr_29188_29252[(2)] = null);

(statearr_29188_29252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (10))){
var inst_28997 = (state_29117[(16)]);
var inst_28995 = (state_29117[(17)]);
var inst_29005 = cljs.core._nth.call(null,inst_28995,inst_28997);
var inst_29006 = cljs.core.nth.call(null,inst_29005,(0),null);
var inst_29007 = cljs.core.nth.call(null,inst_29005,(1),null);
var state_29117__$1 = (function (){var statearr_29189 = state_29117;
(statearr_29189[(26)] = inst_29006);

return statearr_29189;
})();
if(cljs.core.truth_(inst_29007)){
var statearr_29190_29253 = state_29117__$1;
(statearr_29190_29253[(1)] = (13));

} else {
var statearr_29191_29254 = state_29117__$1;
(statearr_29191_29254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (18))){
var inst_29042 = (state_29117[(2)]);
var state_29117__$1 = state_29117;
var statearr_29192_29255 = state_29117__$1;
(statearr_29192_29255[(2)] = inst_29042);

(statearr_29192_29255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (42))){
var state_29117__$1 = state_29117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29117__$1,(45),dchan);
} else {
if((state_val_29118 === (37))){
var inst_29085 = (state_29117[(23)]);
var inst_29076 = (state_29117[(25)]);
var inst_28985 = (state_29117[(12)]);
var inst_29085__$1 = cljs.core.first.call(null,inst_29076);
var inst_29086 = cljs.core.async.put_BANG_.call(null,inst_29085__$1,inst_28985,done);
var state_29117__$1 = (function (){var statearr_29193 = state_29117;
(statearr_29193[(23)] = inst_29085__$1);

return statearr_29193;
})();
if(cljs.core.truth_(inst_29086)){
var statearr_29194_29256 = state_29117__$1;
(statearr_29194_29256[(1)] = (39));

} else {
var statearr_29195_29257 = state_29117__$1;
(statearr_29195_29257[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29118 === (8))){
var inst_28996 = (state_29117[(13)]);
var inst_28997 = (state_29117[(16)]);
var inst_28999 = (inst_28997 < inst_28996);
var inst_29000 = inst_28999;
var state_29117__$1 = state_29117;
if(cljs.core.truth_(inst_29000)){
var statearr_29196_29258 = state_29117__$1;
(statearr_29196_29258[(1)] = (10));

} else {
var statearr_29197_29259 = state_29117__$1;
(statearr_29197_29259[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___29205,cs,m,dchan,dctr,done))
;
return ((function (switch__27770__auto__,c__27882__auto___29205,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27771__auto__ = null;
var cljs$core$async$mult_$_state_machine__27771__auto____0 = (function (){
var statearr_29201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29201[(0)] = cljs$core$async$mult_$_state_machine__27771__auto__);

(statearr_29201[(1)] = (1));

return statearr_29201;
});
var cljs$core$async$mult_$_state_machine__27771__auto____1 = (function (state_29117){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_29117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e29202){if((e29202 instanceof Object)){
var ex__27774__auto__ = e29202;
var statearr_29203_29260 = state_29117;
(statearr_29203_29260[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29261 = state_29117;
state_29117 = G__29261;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27771__auto__ = function(state_29117){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27771__auto____1.call(this,state_29117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27771__auto____0;
cljs$core$async$mult_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27771__auto____1;
return cljs$core$async$mult_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___29205,cs,m,dchan,dctr,done))
})();
var state__27884__auto__ = (function (){var statearr_29204 = f__27883__auto__.call(null);
(statearr_29204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___29205);

return statearr_29204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___29205,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29262 = [];
var len__25835__auto___29265 = arguments.length;
var i__25836__auto___29266 = (0);
while(true){
if((i__25836__auto___29266 < len__25835__auto___29265)){
args29262.push((arguments[i__25836__auto___29266]));

var G__29267 = (i__25836__auto___29266 + (1));
i__25836__auto___29266 = G__29267;
continue;
} else {
}
break;
}

var G__29264 = args29262.length;
switch (G__29264) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29262.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,state_map);
} else {
var m__25424__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,mode);
} else {
var m__25424__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___29279 = arguments.length;
var i__25836__auto___29280 = (0);
while(true){
if((i__25836__auto___29280 < len__25835__auto___29279)){
args__25842__auto__.push((arguments[i__25836__auto___29280]));

var G__29281 = (i__25836__auto___29280 + (1));
i__25836__auto___29280 = G__29281;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((3) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25843__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29273){
var map__29274 = p__29273;
var map__29274__$1 = ((((!((map__29274 == null)))?((((map__29274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29274):map__29274);
var opts = map__29274__$1;
var statearr_29276_29282 = state;
(statearr_29276_29282[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29274,map__29274__$1,opts){
return (function (val){
var statearr_29277_29283 = state;
(statearr_29277_29283[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29274,map__29274__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29278_29284 = state;
(statearr_29278_29284[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29269){
var G__29270 = cljs.core.first.call(null,seq29269);
var seq29269__$1 = cljs.core.next.call(null,seq29269);
var G__29271 = cljs.core.first.call(null,seq29269__$1);
var seq29269__$2 = cljs.core.next.call(null,seq29269__$1);
var G__29272 = cljs.core.first.call(null,seq29269__$2);
var seq29269__$3 = cljs.core.next.call(null,seq29269__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29270,G__29271,G__29272,seq29269__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29450 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29451){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29451 = meta29451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29452,meta29451__$1){
var self__ = this;
var _29452__$1 = this;
return (new cljs.core.async.t_cljs$core$async29450(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29451__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29452){
var self__ = this;
var _29452__$1 = this;
return self__.meta29451;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29450.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29450.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29451","meta29451",-760439190,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29450";

cljs.core.async.t_cljs$core$async29450.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29450");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29450 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29450(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29451){
return (new cljs.core.async.t_cljs$core$async29450(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29451));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29450(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27882__auto___29615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___29615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___29615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29552){
var state_val_29553 = (state_29552[(1)]);
if((state_val_29553 === (7))){
var inst_29468 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
var statearr_29554_29616 = state_29552__$1;
(statearr_29554_29616[(2)] = inst_29468);

(statearr_29554_29616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (20))){
var inst_29480 = (state_29552[(7)]);
var state_29552__$1 = state_29552;
var statearr_29555_29617 = state_29552__$1;
(statearr_29555_29617[(2)] = inst_29480);

(statearr_29555_29617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (27))){
var state_29552__$1 = state_29552;
var statearr_29556_29618 = state_29552__$1;
(statearr_29556_29618[(2)] = null);

(statearr_29556_29618[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (1))){
var inst_29456 = (state_29552[(8)]);
var inst_29456__$1 = calc_state.call(null);
var inst_29458 = (inst_29456__$1 == null);
var inst_29459 = cljs.core.not.call(null,inst_29458);
var state_29552__$1 = (function (){var statearr_29557 = state_29552;
(statearr_29557[(8)] = inst_29456__$1);

return statearr_29557;
})();
if(inst_29459){
var statearr_29558_29619 = state_29552__$1;
(statearr_29558_29619[(1)] = (2));

} else {
var statearr_29559_29620 = state_29552__$1;
(statearr_29559_29620[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (24))){
var inst_29503 = (state_29552[(9)]);
var inst_29512 = (state_29552[(10)]);
var inst_29526 = (state_29552[(11)]);
var inst_29526__$1 = inst_29503.call(null,inst_29512);
var state_29552__$1 = (function (){var statearr_29560 = state_29552;
(statearr_29560[(11)] = inst_29526__$1);

return statearr_29560;
})();
if(cljs.core.truth_(inst_29526__$1)){
var statearr_29561_29621 = state_29552__$1;
(statearr_29561_29621[(1)] = (29));

} else {
var statearr_29562_29622 = state_29552__$1;
(statearr_29562_29622[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (4))){
var inst_29471 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
if(cljs.core.truth_(inst_29471)){
var statearr_29563_29623 = state_29552__$1;
(statearr_29563_29623[(1)] = (8));

} else {
var statearr_29564_29624 = state_29552__$1;
(statearr_29564_29624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (15))){
var inst_29497 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
if(cljs.core.truth_(inst_29497)){
var statearr_29565_29625 = state_29552__$1;
(statearr_29565_29625[(1)] = (19));

} else {
var statearr_29566_29626 = state_29552__$1;
(statearr_29566_29626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (21))){
var inst_29502 = (state_29552[(12)]);
var inst_29502__$1 = (state_29552[(2)]);
var inst_29503 = cljs.core.get.call(null,inst_29502__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29504 = cljs.core.get.call(null,inst_29502__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29505 = cljs.core.get.call(null,inst_29502__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29552__$1 = (function (){var statearr_29567 = state_29552;
(statearr_29567[(9)] = inst_29503);

(statearr_29567[(12)] = inst_29502__$1);

(statearr_29567[(13)] = inst_29504);

return statearr_29567;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29552__$1,(22),inst_29505);
} else {
if((state_val_29553 === (31))){
var inst_29534 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
if(cljs.core.truth_(inst_29534)){
var statearr_29568_29627 = state_29552__$1;
(statearr_29568_29627[(1)] = (32));

} else {
var statearr_29569_29628 = state_29552__$1;
(statearr_29569_29628[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (32))){
var inst_29511 = (state_29552[(14)]);
var state_29552__$1 = state_29552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29552__$1,(35),out,inst_29511);
} else {
if((state_val_29553 === (33))){
var inst_29502 = (state_29552[(12)]);
var inst_29480 = inst_29502;
var state_29552__$1 = (function (){var statearr_29570 = state_29552;
(statearr_29570[(7)] = inst_29480);

return statearr_29570;
})();
var statearr_29571_29629 = state_29552__$1;
(statearr_29571_29629[(2)] = null);

(statearr_29571_29629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (13))){
var inst_29480 = (state_29552[(7)]);
var inst_29487 = inst_29480.cljs$lang$protocol_mask$partition0$;
var inst_29488 = (inst_29487 & (64));
var inst_29489 = inst_29480.cljs$core$ISeq$;
var inst_29490 = (inst_29488) || (inst_29489);
var state_29552__$1 = state_29552;
if(cljs.core.truth_(inst_29490)){
var statearr_29572_29630 = state_29552__$1;
(statearr_29572_29630[(1)] = (16));

} else {
var statearr_29573_29631 = state_29552__$1;
(statearr_29573_29631[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (22))){
var inst_29511 = (state_29552[(14)]);
var inst_29512 = (state_29552[(10)]);
var inst_29510 = (state_29552[(2)]);
var inst_29511__$1 = cljs.core.nth.call(null,inst_29510,(0),null);
var inst_29512__$1 = cljs.core.nth.call(null,inst_29510,(1),null);
var inst_29513 = (inst_29511__$1 == null);
var inst_29514 = cljs.core._EQ_.call(null,inst_29512__$1,change);
var inst_29515 = (inst_29513) || (inst_29514);
var state_29552__$1 = (function (){var statearr_29574 = state_29552;
(statearr_29574[(14)] = inst_29511__$1);

(statearr_29574[(10)] = inst_29512__$1);

return statearr_29574;
})();
if(cljs.core.truth_(inst_29515)){
var statearr_29575_29632 = state_29552__$1;
(statearr_29575_29632[(1)] = (23));

} else {
var statearr_29576_29633 = state_29552__$1;
(statearr_29576_29633[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (36))){
var inst_29502 = (state_29552[(12)]);
var inst_29480 = inst_29502;
var state_29552__$1 = (function (){var statearr_29577 = state_29552;
(statearr_29577[(7)] = inst_29480);

return statearr_29577;
})();
var statearr_29578_29634 = state_29552__$1;
(statearr_29578_29634[(2)] = null);

(statearr_29578_29634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (29))){
var inst_29526 = (state_29552[(11)]);
var state_29552__$1 = state_29552;
var statearr_29579_29635 = state_29552__$1;
(statearr_29579_29635[(2)] = inst_29526);

(statearr_29579_29635[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (6))){
var state_29552__$1 = state_29552;
var statearr_29580_29636 = state_29552__$1;
(statearr_29580_29636[(2)] = false);

(statearr_29580_29636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (28))){
var inst_29522 = (state_29552[(2)]);
var inst_29523 = calc_state.call(null);
var inst_29480 = inst_29523;
var state_29552__$1 = (function (){var statearr_29581 = state_29552;
(statearr_29581[(15)] = inst_29522);

(statearr_29581[(7)] = inst_29480);

return statearr_29581;
})();
var statearr_29582_29637 = state_29552__$1;
(statearr_29582_29637[(2)] = null);

(statearr_29582_29637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (25))){
var inst_29548 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
var statearr_29583_29638 = state_29552__$1;
(statearr_29583_29638[(2)] = inst_29548);

(statearr_29583_29638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (34))){
var inst_29546 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
var statearr_29584_29639 = state_29552__$1;
(statearr_29584_29639[(2)] = inst_29546);

(statearr_29584_29639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (17))){
var state_29552__$1 = state_29552;
var statearr_29585_29640 = state_29552__$1;
(statearr_29585_29640[(2)] = false);

(statearr_29585_29640[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (3))){
var state_29552__$1 = state_29552;
var statearr_29586_29641 = state_29552__$1;
(statearr_29586_29641[(2)] = false);

(statearr_29586_29641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (12))){
var inst_29550 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29552__$1,inst_29550);
} else {
if((state_val_29553 === (2))){
var inst_29456 = (state_29552[(8)]);
var inst_29461 = inst_29456.cljs$lang$protocol_mask$partition0$;
var inst_29462 = (inst_29461 & (64));
var inst_29463 = inst_29456.cljs$core$ISeq$;
var inst_29464 = (inst_29462) || (inst_29463);
var state_29552__$1 = state_29552;
if(cljs.core.truth_(inst_29464)){
var statearr_29587_29642 = state_29552__$1;
(statearr_29587_29642[(1)] = (5));

} else {
var statearr_29588_29643 = state_29552__$1;
(statearr_29588_29643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (23))){
var inst_29511 = (state_29552[(14)]);
var inst_29517 = (inst_29511 == null);
var state_29552__$1 = state_29552;
if(cljs.core.truth_(inst_29517)){
var statearr_29589_29644 = state_29552__$1;
(statearr_29589_29644[(1)] = (26));

} else {
var statearr_29590_29645 = state_29552__$1;
(statearr_29590_29645[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (35))){
var inst_29537 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
if(cljs.core.truth_(inst_29537)){
var statearr_29591_29646 = state_29552__$1;
(statearr_29591_29646[(1)] = (36));

} else {
var statearr_29592_29647 = state_29552__$1;
(statearr_29592_29647[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (19))){
var inst_29480 = (state_29552[(7)]);
var inst_29499 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29480);
var state_29552__$1 = state_29552;
var statearr_29593_29648 = state_29552__$1;
(statearr_29593_29648[(2)] = inst_29499);

(statearr_29593_29648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (11))){
var inst_29480 = (state_29552[(7)]);
var inst_29484 = (inst_29480 == null);
var inst_29485 = cljs.core.not.call(null,inst_29484);
var state_29552__$1 = state_29552;
if(inst_29485){
var statearr_29594_29649 = state_29552__$1;
(statearr_29594_29649[(1)] = (13));

} else {
var statearr_29595_29650 = state_29552__$1;
(statearr_29595_29650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (9))){
var inst_29456 = (state_29552[(8)]);
var state_29552__$1 = state_29552;
var statearr_29596_29651 = state_29552__$1;
(statearr_29596_29651[(2)] = inst_29456);

(statearr_29596_29651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (5))){
var state_29552__$1 = state_29552;
var statearr_29597_29652 = state_29552__$1;
(statearr_29597_29652[(2)] = true);

(statearr_29597_29652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (14))){
var state_29552__$1 = state_29552;
var statearr_29598_29653 = state_29552__$1;
(statearr_29598_29653[(2)] = false);

(statearr_29598_29653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (26))){
var inst_29512 = (state_29552[(10)]);
var inst_29519 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29512);
var state_29552__$1 = state_29552;
var statearr_29599_29654 = state_29552__$1;
(statearr_29599_29654[(2)] = inst_29519);

(statearr_29599_29654[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (16))){
var state_29552__$1 = state_29552;
var statearr_29600_29655 = state_29552__$1;
(statearr_29600_29655[(2)] = true);

(statearr_29600_29655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (38))){
var inst_29542 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
var statearr_29601_29656 = state_29552__$1;
(statearr_29601_29656[(2)] = inst_29542);

(statearr_29601_29656[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (30))){
var inst_29503 = (state_29552[(9)]);
var inst_29504 = (state_29552[(13)]);
var inst_29512 = (state_29552[(10)]);
var inst_29529 = cljs.core.empty_QMARK_.call(null,inst_29503);
var inst_29530 = inst_29504.call(null,inst_29512);
var inst_29531 = cljs.core.not.call(null,inst_29530);
var inst_29532 = (inst_29529) && (inst_29531);
var state_29552__$1 = state_29552;
var statearr_29602_29657 = state_29552__$1;
(statearr_29602_29657[(2)] = inst_29532);

(statearr_29602_29657[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (10))){
var inst_29456 = (state_29552[(8)]);
var inst_29476 = (state_29552[(2)]);
var inst_29477 = cljs.core.get.call(null,inst_29476,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29478 = cljs.core.get.call(null,inst_29476,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29479 = cljs.core.get.call(null,inst_29476,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29480 = inst_29456;
var state_29552__$1 = (function (){var statearr_29603 = state_29552;
(statearr_29603[(16)] = inst_29479);

(statearr_29603[(17)] = inst_29477);

(statearr_29603[(18)] = inst_29478);

(statearr_29603[(7)] = inst_29480);

return statearr_29603;
})();
var statearr_29604_29658 = state_29552__$1;
(statearr_29604_29658[(2)] = null);

(statearr_29604_29658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (18))){
var inst_29494 = (state_29552[(2)]);
var state_29552__$1 = state_29552;
var statearr_29605_29659 = state_29552__$1;
(statearr_29605_29659[(2)] = inst_29494);

(statearr_29605_29659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (37))){
var state_29552__$1 = state_29552;
var statearr_29606_29660 = state_29552__$1;
(statearr_29606_29660[(2)] = null);

(statearr_29606_29660[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29553 === (8))){
var inst_29456 = (state_29552[(8)]);
var inst_29473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29456);
var state_29552__$1 = state_29552;
var statearr_29607_29661 = state_29552__$1;
(statearr_29607_29661[(2)] = inst_29473);

(statearr_29607_29661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___29615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27770__auto__,c__27882__auto___29615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27771__auto__ = null;
var cljs$core$async$mix_$_state_machine__27771__auto____0 = (function (){
var statearr_29611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29611[(0)] = cljs$core$async$mix_$_state_machine__27771__auto__);

(statearr_29611[(1)] = (1));

return statearr_29611;
});
var cljs$core$async$mix_$_state_machine__27771__auto____1 = (function (state_29552){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_29552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e29612){if((e29612 instanceof Object)){
var ex__27774__auto__ = e29612;
var statearr_29613_29662 = state_29552;
(statearr_29613_29662[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29663 = state_29552;
state_29552 = G__29663;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27771__auto__ = function(state_29552){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27771__auto____1.call(this,state_29552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27771__auto____0;
cljs$core$async$mix_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27771__auto____1;
return cljs$core$async$mix_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___29615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27884__auto__ = (function (){var statearr_29614 = f__27883__auto__.call(null);
(statearr_29614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___29615);

return statearr_29614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___29615,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29664 = [];
var len__25835__auto___29667 = arguments.length;
var i__25836__auto___29668 = (0);
while(true){
if((i__25836__auto___29668 < len__25835__auto___29667)){
args29664.push((arguments[i__25836__auto___29668]));

var G__29669 = (i__25836__auto___29668 + (1));
i__25836__auto___29668 = G__29669;
continue;
} else {
}
break;
}

var G__29666 = args29664.length;
switch (G__29666) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29664.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29672 = [];
var len__25835__auto___29797 = arguments.length;
var i__25836__auto___29798 = (0);
while(true){
if((i__25836__auto___29798 < len__25835__auto___29797)){
args29672.push((arguments[i__25836__auto___29798]));

var G__29799 = (i__25836__auto___29798 + (1));
i__25836__auto___29798 = G__29799;
continue;
} else {
}
break;
}

var G__29674 = args29672.length;
switch (G__29674) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29672.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24760__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24760__auto__,mults){
return (function (p1__29671_SHARP_){
if(cljs.core.truth_(p1__29671_SHARP_.call(null,topic))){
return p1__29671_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29671_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24760__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29675 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29676){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29676 = meta29676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29677,meta29676__$1){
var self__ = this;
var _29677__$1 = this;
return (new cljs.core.async.t_cljs$core$async29675(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29676__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29677){
var self__ = this;
var _29677__$1 = this;
return self__.meta29676;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29675.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29675.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29676","meta29676",-878467886,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29675";

cljs.core.async.t_cljs$core$async29675.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29675");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29675 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29675(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29676){
return (new cljs.core.async.t_cljs$core$async29675(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29676));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29675(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27882__auto___29801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___29801,mults,ensure_mult,p){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___29801,mults,ensure_mult,p){
return (function (state_29749){
var state_val_29750 = (state_29749[(1)]);
if((state_val_29750 === (7))){
var inst_29745 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29751_29802 = state_29749__$1;
(statearr_29751_29802[(2)] = inst_29745);

(statearr_29751_29802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (20))){
var state_29749__$1 = state_29749;
var statearr_29752_29803 = state_29749__$1;
(statearr_29752_29803[(2)] = null);

(statearr_29752_29803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (1))){
var state_29749__$1 = state_29749;
var statearr_29753_29804 = state_29749__$1;
(statearr_29753_29804[(2)] = null);

(statearr_29753_29804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (24))){
var inst_29728 = (state_29749[(7)]);
var inst_29737 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29728);
var state_29749__$1 = state_29749;
var statearr_29754_29805 = state_29749__$1;
(statearr_29754_29805[(2)] = inst_29737);

(statearr_29754_29805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (4))){
var inst_29680 = (state_29749[(8)]);
var inst_29680__$1 = (state_29749[(2)]);
var inst_29681 = (inst_29680__$1 == null);
var state_29749__$1 = (function (){var statearr_29755 = state_29749;
(statearr_29755[(8)] = inst_29680__$1);

return statearr_29755;
})();
if(cljs.core.truth_(inst_29681)){
var statearr_29756_29806 = state_29749__$1;
(statearr_29756_29806[(1)] = (5));

} else {
var statearr_29757_29807 = state_29749__$1;
(statearr_29757_29807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (15))){
var inst_29722 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29758_29808 = state_29749__$1;
(statearr_29758_29808[(2)] = inst_29722);

(statearr_29758_29808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (21))){
var inst_29742 = (state_29749[(2)]);
var state_29749__$1 = (function (){var statearr_29759 = state_29749;
(statearr_29759[(9)] = inst_29742);

return statearr_29759;
})();
var statearr_29760_29809 = state_29749__$1;
(statearr_29760_29809[(2)] = null);

(statearr_29760_29809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (13))){
var inst_29704 = (state_29749[(10)]);
var inst_29706 = cljs.core.chunked_seq_QMARK_.call(null,inst_29704);
var state_29749__$1 = state_29749;
if(inst_29706){
var statearr_29761_29810 = state_29749__$1;
(statearr_29761_29810[(1)] = (16));

} else {
var statearr_29762_29811 = state_29749__$1;
(statearr_29762_29811[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (22))){
var inst_29734 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
if(cljs.core.truth_(inst_29734)){
var statearr_29763_29812 = state_29749__$1;
(statearr_29763_29812[(1)] = (23));

} else {
var statearr_29764_29813 = state_29749__$1;
(statearr_29764_29813[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (6))){
var inst_29680 = (state_29749[(8)]);
var inst_29730 = (state_29749[(11)]);
var inst_29728 = (state_29749[(7)]);
var inst_29728__$1 = topic_fn.call(null,inst_29680);
var inst_29729 = cljs.core.deref.call(null,mults);
var inst_29730__$1 = cljs.core.get.call(null,inst_29729,inst_29728__$1);
var state_29749__$1 = (function (){var statearr_29765 = state_29749;
(statearr_29765[(11)] = inst_29730__$1);

(statearr_29765[(7)] = inst_29728__$1);

return statearr_29765;
})();
if(cljs.core.truth_(inst_29730__$1)){
var statearr_29766_29814 = state_29749__$1;
(statearr_29766_29814[(1)] = (19));

} else {
var statearr_29767_29815 = state_29749__$1;
(statearr_29767_29815[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (25))){
var inst_29739 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29768_29816 = state_29749__$1;
(statearr_29768_29816[(2)] = inst_29739);

(statearr_29768_29816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (17))){
var inst_29704 = (state_29749[(10)]);
var inst_29713 = cljs.core.first.call(null,inst_29704);
var inst_29714 = cljs.core.async.muxch_STAR_.call(null,inst_29713);
var inst_29715 = cljs.core.async.close_BANG_.call(null,inst_29714);
var inst_29716 = cljs.core.next.call(null,inst_29704);
var inst_29690 = inst_29716;
var inst_29691 = null;
var inst_29692 = (0);
var inst_29693 = (0);
var state_29749__$1 = (function (){var statearr_29769 = state_29749;
(statearr_29769[(12)] = inst_29715);

(statearr_29769[(13)] = inst_29692);

(statearr_29769[(14)] = inst_29693);

(statearr_29769[(15)] = inst_29690);

(statearr_29769[(16)] = inst_29691);

return statearr_29769;
})();
var statearr_29770_29817 = state_29749__$1;
(statearr_29770_29817[(2)] = null);

(statearr_29770_29817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (3))){
var inst_29747 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29749__$1,inst_29747);
} else {
if((state_val_29750 === (12))){
var inst_29724 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29771_29818 = state_29749__$1;
(statearr_29771_29818[(2)] = inst_29724);

(statearr_29771_29818[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (2))){
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29749__$1,(4),ch);
} else {
if((state_val_29750 === (23))){
var state_29749__$1 = state_29749;
var statearr_29772_29819 = state_29749__$1;
(statearr_29772_29819[(2)] = null);

(statearr_29772_29819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (19))){
var inst_29680 = (state_29749[(8)]);
var inst_29730 = (state_29749[(11)]);
var inst_29732 = cljs.core.async.muxch_STAR_.call(null,inst_29730);
var state_29749__$1 = state_29749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29749__$1,(22),inst_29732,inst_29680);
} else {
if((state_val_29750 === (11))){
var inst_29704 = (state_29749[(10)]);
var inst_29690 = (state_29749[(15)]);
var inst_29704__$1 = cljs.core.seq.call(null,inst_29690);
var state_29749__$1 = (function (){var statearr_29773 = state_29749;
(statearr_29773[(10)] = inst_29704__$1);

return statearr_29773;
})();
if(inst_29704__$1){
var statearr_29774_29820 = state_29749__$1;
(statearr_29774_29820[(1)] = (13));

} else {
var statearr_29775_29821 = state_29749__$1;
(statearr_29775_29821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (9))){
var inst_29726 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29776_29822 = state_29749__$1;
(statearr_29776_29822[(2)] = inst_29726);

(statearr_29776_29822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (5))){
var inst_29687 = cljs.core.deref.call(null,mults);
var inst_29688 = cljs.core.vals.call(null,inst_29687);
var inst_29689 = cljs.core.seq.call(null,inst_29688);
var inst_29690 = inst_29689;
var inst_29691 = null;
var inst_29692 = (0);
var inst_29693 = (0);
var state_29749__$1 = (function (){var statearr_29777 = state_29749;
(statearr_29777[(13)] = inst_29692);

(statearr_29777[(14)] = inst_29693);

(statearr_29777[(15)] = inst_29690);

(statearr_29777[(16)] = inst_29691);

return statearr_29777;
})();
var statearr_29778_29823 = state_29749__$1;
(statearr_29778_29823[(2)] = null);

(statearr_29778_29823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (14))){
var state_29749__$1 = state_29749;
var statearr_29782_29824 = state_29749__$1;
(statearr_29782_29824[(2)] = null);

(statearr_29782_29824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (16))){
var inst_29704 = (state_29749[(10)]);
var inst_29708 = cljs.core.chunk_first.call(null,inst_29704);
var inst_29709 = cljs.core.chunk_rest.call(null,inst_29704);
var inst_29710 = cljs.core.count.call(null,inst_29708);
var inst_29690 = inst_29709;
var inst_29691 = inst_29708;
var inst_29692 = inst_29710;
var inst_29693 = (0);
var state_29749__$1 = (function (){var statearr_29783 = state_29749;
(statearr_29783[(13)] = inst_29692);

(statearr_29783[(14)] = inst_29693);

(statearr_29783[(15)] = inst_29690);

(statearr_29783[(16)] = inst_29691);

return statearr_29783;
})();
var statearr_29784_29825 = state_29749__$1;
(statearr_29784_29825[(2)] = null);

(statearr_29784_29825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (10))){
var inst_29692 = (state_29749[(13)]);
var inst_29693 = (state_29749[(14)]);
var inst_29690 = (state_29749[(15)]);
var inst_29691 = (state_29749[(16)]);
var inst_29698 = cljs.core._nth.call(null,inst_29691,inst_29693);
var inst_29699 = cljs.core.async.muxch_STAR_.call(null,inst_29698);
var inst_29700 = cljs.core.async.close_BANG_.call(null,inst_29699);
var inst_29701 = (inst_29693 + (1));
var tmp29779 = inst_29692;
var tmp29780 = inst_29690;
var tmp29781 = inst_29691;
var inst_29690__$1 = tmp29780;
var inst_29691__$1 = tmp29781;
var inst_29692__$1 = tmp29779;
var inst_29693__$1 = inst_29701;
var state_29749__$1 = (function (){var statearr_29785 = state_29749;
(statearr_29785[(13)] = inst_29692__$1);

(statearr_29785[(14)] = inst_29693__$1);

(statearr_29785[(17)] = inst_29700);

(statearr_29785[(15)] = inst_29690__$1);

(statearr_29785[(16)] = inst_29691__$1);

return statearr_29785;
})();
var statearr_29786_29826 = state_29749__$1;
(statearr_29786_29826[(2)] = null);

(statearr_29786_29826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (18))){
var inst_29719 = (state_29749[(2)]);
var state_29749__$1 = state_29749;
var statearr_29787_29827 = state_29749__$1;
(statearr_29787_29827[(2)] = inst_29719);

(statearr_29787_29827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29750 === (8))){
var inst_29692 = (state_29749[(13)]);
var inst_29693 = (state_29749[(14)]);
var inst_29695 = (inst_29693 < inst_29692);
var inst_29696 = inst_29695;
var state_29749__$1 = state_29749;
if(cljs.core.truth_(inst_29696)){
var statearr_29788_29828 = state_29749__$1;
(statearr_29788_29828[(1)] = (10));

} else {
var statearr_29789_29829 = state_29749__$1;
(statearr_29789_29829[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___29801,mults,ensure_mult,p))
;
return ((function (switch__27770__auto__,c__27882__auto___29801,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_29793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29793[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_29793[(1)] = (1));

return statearr_29793;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_29749){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_29749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e29794){if((e29794 instanceof Object)){
var ex__27774__auto__ = e29794;
var statearr_29795_29830 = state_29749;
(statearr_29795_29830[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29831 = state_29749;
state_29749 = G__29831;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_29749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_29749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___29801,mults,ensure_mult,p))
})();
var state__27884__auto__ = (function (){var statearr_29796 = f__27883__auto__.call(null);
(statearr_29796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___29801);

return statearr_29796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___29801,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29832 = [];
var len__25835__auto___29835 = arguments.length;
var i__25836__auto___29836 = (0);
while(true){
if((i__25836__auto___29836 < len__25835__auto___29835)){
args29832.push((arguments[i__25836__auto___29836]));

var G__29837 = (i__25836__auto___29836 + (1));
i__25836__auto___29836 = G__29837;
continue;
} else {
}
break;
}

var G__29834 = args29832.length;
switch (G__29834) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29832.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29839 = [];
var len__25835__auto___29842 = arguments.length;
var i__25836__auto___29843 = (0);
while(true){
if((i__25836__auto___29843 < len__25835__auto___29842)){
args29839.push((arguments[i__25836__auto___29843]));

var G__29844 = (i__25836__auto___29843 + (1));
i__25836__auto___29843 = G__29844;
continue;
} else {
}
break;
}

var G__29841 = args29839.length;
switch (G__29841) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29839.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29846 = [];
var len__25835__auto___29917 = arguments.length;
var i__25836__auto___29918 = (0);
while(true){
if((i__25836__auto___29918 < len__25835__auto___29917)){
args29846.push((arguments[i__25836__auto___29918]));

var G__29919 = (i__25836__auto___29918 + (1));
i__25836__auto___29918 = G__29919;
continue;
} else {
}
break;
}

var G__29848 = args29846.length;
switch (G__29848) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29846.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27882__auto___29921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___29921,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___29921,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29887){
var state_val_29888 = (state_29887[(1)]);
if((state_val_29888 === (7))){
var state_29887__$1 = state_29887;
var statearr_29889_29922 = state_29887__$1;
(statearr_29889_29922[(2)] = null);

(statearr_29889_29922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (1))){
var state_29887__$1 = state_29887;
var statearr_29890_29923 = state_29887__$1;
(statearr_29890_29923[(2)] = null);

(statearr_29890_29923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (4))){
var inst_29851 = (state_29887[(7)]);
var inst_29853 = (inst_29851 < cnt);
var state_29887__$1 = state_29887;
if(cljs.core.truth_(inst_29853)){
var statearr_29891_29924 = state_29887__$1;
(statearr_29891_29924[(1)] = (6));

} else {
var statearr_29892_29925 = state_29887__$1;
(statearr_29892_29925[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (15))){
var inst_29883 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29893_29926 = state_29887__$1;
(statearr_29893_29926[(2)] = inst_29883);

(statearr_29893_29926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (13))){
var inst_29876 = cljs.core.async.close_BANG_.call(null,out);
var state_29887__$1 = state_29887;
var statearr_29894_29927 = state_29887__$1;
(statearr_29894_29927[(2)] = inst_29876);

(statearr_29894_29927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (6))){
var state_29887__$1 = state_29887;
var statearr_29895_29928 = state_29887__$1;
(statearr_29895_29928[(2)] = null);

(statearr_29895_29928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (3))){
var inst_29885 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29887__$1,inst_29885);
} else {
if((state_val_29888 === (12))){
var inst_29873 = (state_29887[(8)]);
var inst_29873__$1 = (state_29887[(2)]);
var inst_29874 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29873__$1);
var state_29887__$1 = (function (){var statearr_29896 = state_29887;
(statearr_29896[(8)] = inst_29873__$1);

return statearr_29896;
})();
if(cljs.core.truth_(inst_29874)){
var statearr_29897_29929 = state_29887__$1;
(statearr_29897_29929[(1)] = (13));

} else {
var statearr_29898_29930 = state_29887__$1;
(statearr_29898_29930[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (2))){
var inst_29850 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29851 = (0);
var state_29887__$1 = (function (){var statearr_29899 = state_29887;
(statearr_29899[(9)] = inst_29850);

(statearr_29899[(7)] = inst_29851);

return statearr_29899;
})();
var statearr_29900_29931 = state_29887__$1;
(statearr_29900_29931[(2)] = null);

(statearr_29900_29931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (11))){
var inst_29851 = (state_29887[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29887,(10),Object,null,(9));
var inst_29860 = chs__$1.call(null,inst_29851);
var inst_29861 = done.call(null,inst_29851);
var inst_29862 = cljs.core.async.take_BANG_.call(null,inst_29860,inst_29861);
var state_29887__$1 = state_29887;
var statearr_29901_29932 = state_29887__$1;
(statearr_29901_29932[(2)] = inst_29862);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29887__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (9))){
var inst_29851 = (state_29887[(7)]);
var inst_29864 = (state_29887[(2)]);
var inst_29865 = (inst_29851 + (1));
var inst_29851__$1 = inst_29865;
var state_29887__$1 = (function (){var statearr_29902 = state_29887;
(statearr_29902[(7)] = inst_29851__$1);

(statearr_29902[(10)] = inst_29864);

return statearr_29902;
})();
var statearr_29903_29933 = state_29887__$1;
(statearr_29903_29933[(2)] = null);

(statearr_29903_29933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (5))){
var inst_29871 = (state_29887[(2)]);
var state_29887__$1 = (function (){var statearr_29904 = state_29887;
(statearr_29904[(11)] = inst_29871);

return statearr_29904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29887__$1,(12),dchan);
} else {
if((state_val_29888 === (14))){
var inst_29873 = (state_29887[(8)]);
var inst_29878 = cljs.core.apply.call(null,f,inst_29873);
var state_29887__$1 = state_29887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29887__$1,(16),out,inst_29878);
} else {
if((state_val_29888 === (16))){
var inst_29880 = (state_29887[(2)]);
var state_29887__$1 = (function (){var statearr_29905 = state_29887;
(statearr_29905[(12)] = inst_29880);

return statearr_29905;
})();
var statearr_29906_29934 = state_29887__$1;
(statearr_29906_29934[(2)] = null);

(statearr_29906_29934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (10))){
var inst_29855 = (state_29887[(2)]);
var inst_29856 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29887__$1 = (function (){var statearr_29907 = state_29887;
(statearr_29907[(13)] = inst_29855);

return statearr_29907;
})();
var statearr_29908_29935 = state_29887__$1;
(statearr_29908_29935[(2)] = inst_29856);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29887__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29888 === (8))){
var inst_29869 = (state_29887[(2)]);
var state_29887__$1 = state_29887;
var statearr_29909_29936 = state_29887__$1;
(statearr_29909_29936[(2)] = inst_29869);

(statearr_29909_29936[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___29921,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27770__auto__,c__27882__auto___29921,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_29913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29913[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_29913[(1)] = (1));

return statearr_29913;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_29887){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_29887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e29914){if((e29914 instanceof Object)){
var ex__27774__auto__ = e29914;
var statearr_29915_29937 = state_29887;
(statearr_29915_29937[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29938 = state_29887;
state_29887 = G__29938;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_29887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_29887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___29921,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27884__auto__ = (function (){var statearr_29916 = f__27883__auto__.call(null);
(statearr_29916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___29921);

return statearr_29916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___29921,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29940 = [];
var len__25835__auto___29998 = arguments.length;
var i__25836__auto___29999 = (0);
while(true){
if((i__25836__auto___29999 < len__25835__auto___29998)){
args29940.push((arguments[i__25836__auto___29999]));

var G__30000 = (i__25836__auto___29999 + (1));
i__25836__auto___29999 = G__30000;
continue;
} else {
}
break;
}

var G__29942 = args29940.length;
switch (G__29942) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29940.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27882__auto___30002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___30002,out){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___30002,out){
return (function (state_29974){
var state_val_29975 = (state_29974[(1)]);
if((state_val_29975 === (7))){
var inst_29953 = (state_29974[(7)]);
var inst_29954 = (state_29974[(8)]);
var inst_29953__$1 = (state_29974[(2)]);
var inst_29954__$1 = cljs.core.nth.call(null,inst_29953__$1,(0),null);
var inst_29955 = cljs.core.nth.call(null,inst_29953__$1,(1),null);
var inst_29956 = (inst_29954__$1 == null);
var state_29974__$1 = (function (){var statearr_29976 = state_29974;
(statearr_29976[(9)] = inst_29955);

(statearr_29976[(7)] = inst_29953__$1);

(statearr_29976[(8)] = inst_29954__$1);

return statearr_29976;
})();
if(cljs.core.truth_(inst_29956)){
var statearr_29977_30003 = state_29974__$1;
(statearr_29977_30003[(1)] = (8));

} else {
var statearr_29978_30004 = state_29974__$1;
(statearr_29978_30004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (1))){
var inst_29943 = cljs.core.vec.call(null,chs);
var inst_29944 = inst_29943;
var state_29974__$1 = (function (){var statearr_29979 = state_29974;
(statearr_29979[(10)] = inst_29944);

return statearr_29979;
})();
var statearr_29980_30005 = state_29974__$1;
(statearr_29980_30005[(2)] = null);

(statearr_29980_30005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (4))){
var inst_29944 = (state_29974[(10)]);
var state_29974__$1 = state_29974;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29974__$1,(7),inst_29944);
} else {
if((state_val_29975 === (6))){
var inst_29970 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_29981_30006 = state_29974__$1;
(statearr_29981_30006[(2)] = inst_29970);

(statearr_29981_30006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (3))){
var inst_29972 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29974__$1,inst_29972);
} else {
if((state_val_29975 === (2))){
var inst_29944 = (state_29974[(10)]);
var inst_29946 = cljs.core.count.call(null,inst_29944);
var inst_29947 = (inst_29946 > (0));
var state_29974__$1 = state_29974;
if(cljs.core.truth_(inst_29947)){
var statearr_29983_30007 = state_29974__$1;
(statearr_29983_30007[(1)] = (4));

} else {
var statearr_29984_30008 = state_29974__$1;
(statearr_29984_30008[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (11))){
var inst_29944 = (state_29974[(10)]);
var inst_29963 = (state_29974[(2)]);
var tmp29982 = inst_29944;
var inst_29944__$1 = tmp29982;
var state_29974__$1 = (function (){var statearr_29985 = state_29974;
(statearr_29985[(10)] = inst_29944__$1);

(statearr_29985[(11)] = inst_29963);

return statearr_29985;
})();
var statearr_29986_30009 = state_29974__$1;
(statearr_29986_30009[(2)] = null);

(statearr_29986_30009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (9))){
var inst_29954 = (state_29974[(8)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29974__$1,(11),out,inst_29954);
} else {
if((state_val_29975 === (5))){
var inst_29968 = cljs.core.async.close_BANG_.call(null,out);
var state_29974__$1 = state_29974;
var statearr_29987_30010 = state_29974__$1;
(statearr_29987_30010[(2)] = inst_29968);

(statearr_29987_30010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (10))){
var inst_29966 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_29988_30011 = state_29974__$1;
(statearr_29988_30011[(2)] = inst_29966);

(statearr_29988_30011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (8))){
var inst_29955 = (state_29974[(9)]);
var inst_29953 = (state_29974[(7)]);
var inst_29944 = (state_29974[(10)]);
var inst_29954 = (state_29974[(8)]);
var inst_29958 = (function (){var cs = inst_29944;
var vec__29949 = inst_29953;
var v = inst_29954;
var c = inst_29955;
return ((function (cs,vec__29949,v,c,inst_29955,inst_29953,inst_29944,inst_29954,state_val_29975,c__27882__auto___30002,out){
return (function (p1__29939_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29939_SHARP_);
});
;})(cs,vec__29949,v,c,inst_29955,inst_29953,inst_29944,inst_29954,state_val_29975,c__27882__auto___30002,out))
})();
var inst_29959 = cljs.core.filterv.call(null,inst_29958,inst_29944);
var inst_29944__$1 = inst_29959;
var state_29974__$1 = (function (){var statearr_29989 = state_29974;
(statearr_29989[(10)] = inst_29944__$1);

return statearr_29989;
})();
var statearr_29990_30012 = state_29974__$1;
(statearr_29990_30012[(2)] = null);

(statearr_29990_30012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___30002,out))
;
return ((function (switch__27770__auto__,c__27882__auto___30002,out){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_29994 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29994[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_29994[(1)] = (1));

return statearr_29994;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_29974){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_29974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e29995){if((e29995 instanceof Object)){
var ex__27774__auto__ = e29995;
var statearr_29996_30013 = state_29974;
(statearr_29996_30013[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30014 = state_29974;
state_29974 = G__30014;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_29974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_29974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___30002,out))
})();
var state__27884__auto__ = (function (){var statearr_29997 = f__27883__auto__.call(null);
(statearr_29997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___30002);

return statearr_29997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___30002,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30015 = [];
var len__25835__auto___30064 = arguments.length;
var i__25836__auto___30065 = (0);
while(true){
if((i__25836__auto___30065 < len__25835__auto___30064)){
args30015.push((arguments[i__25836__auto___30065]));

var G__30066 = (i__25836__auto___30065 + (1));
i__25836__auto___30065 = G__30066;
continue;
} else {
}
break;
}

var G__30017 = args30015.length;
switch (G__30017) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30015.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27882__auto___30068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___30068,out){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___30068,out){
return (function (state_30041){
var state_val_30042 = (state_30041[(1)]);
if((state_val_30042 === (7))){
var inst_30023 = (state_30041[(7)]);
var inst_30023__$1 = (state_30041[(2)]);
var inst_30024 = (inst_30023__$1 == null);
var inst_30025 = cljs.core.not.call(null,inst_30024);
var state_30041__$1 = (function (){var statearr_30043 = state_30041;
(statearr_30043[(7)] = inst_30023__$1);

return statearr_30043;
})();
if(inst_30025){
var statearr_30044_30069 = state_30041__$1;
(statearr_30044_30069[(1)] = (8));

} else {
var statearr_30045_30070 = state_30041__$1;
(statearr_30045_30070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (1))){
var inst_30018 = (0);
var state_30041__$1 = (function (){var statearr_30046 = state_30041;
(statearr_30046[(8)] = inst_30018);

return statearr_30046;
})();
var statearr_30047_30071 = state_30041__$1;
(statearr_30047_30071[(2)] = null);

(statearr_30047_30071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (4))){
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30041__$1,(7),ch);
} else {
if((state_val_30042 === (6))){
var inst_30036 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30048_30072 = state_30041__$1;
(statearr_30048_30072[(2)] = inst_30036);

(statearr_30048_30072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (3))){
var inst_30038 = (state_30041[(2)]);
var inst_30039 = cljs.core.async.close_BANG_.call(null,out);
var state_30041__$1 = (function (){var statearr_30049 = state_30041;
(statearr_30049[(9)] = inst_30038);

return statearr_30049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30041__$1,inst_30039);
} else {
if((state_val_30042 === (2))){
var inst_30018 = (state_30041[(8)]);
var inst_30020 = (inst_30018 < n);
var state_30041__$1 = state_30041;
if(cljs.core.truth_(inst_30020)){
var statearr_30050_30073 = state_30041__$1;
(statearr_30050_30073[(1)] = (4));

} else {
var statearr_30051_30074 = state_30041__$1;
(statearr_30051_30074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (11))){
var inst_30018 = (state_30041[(8)]);
var inst_30028 = (state_30041[(2)]);
var inst_30029 = (inst_30018 + (1));
var inst_30018__$1 = inst_30029;
var state_30041__$1 = (function (){var statearr_30052 = state_30041;
(statearr_30052[(8)] = inst_30018__$1);

(statearr_30052[(10)] = inst_30028);

return statearr_30052;
})();
var statearr_30053_30075 = state_30041__$1;
(statearr_30053_30075[(2)] = null);

(statearr_30053_30075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (9))){
var state_30041__$1 = state_30041;
var statearr_30054_30076 = state_30041__$1;
(statearr_30054_30076[(2)] = null);

(statearr_30054_30076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (5))){
var state_30041__$1 = state_30041;
var statearr_30055_30077 = state_30041__$1;
(statearr_30055_30077[(2)] = null);

(statearr_30055_30077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (10))){
var inst_30033 = (state_30041[(2)]);
var state_30041__$1 = state_30041;
var statearr_30056_30078 = state_30041__$1;
(statearr_30056_30078[(2)] = inst_30033);

(statearr_30056_30078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30042 === (8))){
var inst_30023 = (state_30041[(7)]);
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30041__$1,(11),out,inst_30023);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___30068,out))
;
return ((function (switch__27770__auto__,c__27882__auto___30068,out){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_30060 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30060[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_30060[(1)] = (1));

return statearr_30060;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_30041){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_30041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e30061){if((e30061 instanceof Object)){
var ex__27774__auto__ = e30061;
var statearr_30062_30079 = state_30041;
(statearr_30062_30079[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30080 = state_30041;
state_30041 = G__30080;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_30041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_30041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___30068,out))
})();
var state__27884__auto__ = (function (){var statearr_30063 = f__27883__auto__.call(null);
(statearr_30063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___30068);

return statearr_30063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___30068,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30088 = (function (map_LT_,f,ch,meta30089){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30089 = meta30089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30090,meta30089__$1){
var self__ = this;
var _30090__$1 = this;
return (new cljs.core.async.t_cljs$core$async30088(self__.map_LT_,self__.f,self__.ch,meta30089__$1));
});

cljs.core.async.t_cljs$core$async30088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30090){
var self__ = this;
var _30090__$1 = this;
return self__.meta30089;
});

cljs.core.async.t_cljs$core$async30088.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30088.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30088.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30088.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30088.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30091 = (function (map_LT_,f,ch,meta30089,_,fn1,meta30092){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30089 = meta30089;
this._ = _;
this.fn1 = fn1;
this.meta30092 = meta30092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30093,meta30092__$1){
var self__ = this;
var _30093__$1 = this;
return (new cljs.core.async.t_cljs$core$async30091(self__.map_LT_,self__.f,self__.ch,self__.meta30089,self__._,self__.fn1,meta30092__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30093){
var self__ = this;
var _30093__$1 = this;
return self__.meta30092;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30091.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30081_SHARP_){
return f1.call(null,(((p1__30081_SHARP_ == null))?null:self__.f.call(null,p1__30081_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30091.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30089","meta30089",-1697773798,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30088","cljs.core.async/t_cljs$core$async30088",1938723141,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30092","meta30092",-358273054,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30091";

cljs.core.async.t_cljs$core$async30091.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30091");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30091 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30091(map_LT___$1,f__$1,ch__$1,meta30089__$1,___$2,fn1__$1,meta30092){
return (new cljs.core.async.t_cljs$core$async30091(map_LT___$1,f__$1,ch__$1,meta30089__$1,___$2,fn1__$1,meta30092));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30091(self__.map_LT_,self__.f,self__.ch,self__.meta30089,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24748__auto__ = ret;
if(cljs.core.truth_(and__24748__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24748__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30088.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30088.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30089","meta30089",-1697773798,null)], null);
});

cljs.core.async.t_cljs$core$async30088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30088";

cljs.core.async.t_cljs$core$async30088.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30088");
});

cljs.core.async.__GT_t_cljs$core$async30088 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30088(map_LT___$1,f__$1,ch__$1,meta30089){
return (new cljs.core.async.t_cljs$core$async30088(map_LT___$1,f__$1,ch__$1,meta30089));
});

}

return (new cljs.core.async.t_cljs$core$async30088(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30097 = (function (map_GT_,f,ch,meta30098){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30098 = meta30098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30099,meta30098__$1){
var self__ = this;
var _30099__$1 = this;
return (new cljs.core.async.t_cljs$core$async30097(self__.map_GT_,self__.f,self__.ch,meta30098__$1));
});

cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30099){
var self__ = this;
var _30099__$1 = this;
return self__.meta30098;
});

cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30097.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30098","meta30098",-392159283,null)], null);
});

cljs.core.async.t_cljs$core$async30097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30097";

cljs.core.async.t_cljs$core$async30097.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30097");
});

cljs.core.async.__GT_t_cljs$core$async30097 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30097(map_GT___$1,f__$1,ch__$1,meta30098){
return (new cljs.core.async.t_cljs$core$async30097(map_GT___$1,f__$1,ch__$1,meta30098));
});

}

return (new cljs.core.async.t_cljs$core$async30097(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30103 = (function (filter_GT_,p,ch,meta30104){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30104 = meta30104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30105,meta30104__$1){
var self__ = this;
var _30105__$1 = this;
return (new cljs.core.async.t_cljs$core$async30103(self__.filter_GT_,self__.p,self__.ch,meta30104__$1));
});

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30105){
var self__ = this;
var _30105__$1 = this;
return self__.meta30104;
});

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30104","meta30104",-1562481757,null)], null);
});

cljs.core.async.t_cljs$core$async30103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30103";

cljs.core.async.t_cljs$core$async30103.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30103");
});

cljs.core.async.__GT_t_cljs$core$async30103 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30103(filter_GT___$1,p__$1,ch__$1,meta30104){
return (new cljs.core.async.t_cljs$core$async30103(filter_GT___$1,p__$1,ch__$1,meta30104));
});

}

return (new cljs.core.async.t_cljs$core$async30103(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30106 = [];
var len__25835__auto___30150 = arguments.length;
var i__25836__auto___30151 = (0);
while(true){
if((i__25836__auto___30151 < len__25835__auto___30150)){
args30106.push((arguments[i__25836__auto___30151]));

var G__30152 = (i__25836__auto___30151 + (1));
i__25836__auto___30151 = G__30152;
continue;
} else {
}
break;
}

var G__30108 = args30106.length;
switch (G__30108) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30106.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27882__auto___30154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___30154,out){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___30154,out){
return (function (state_30129){
var state_val_30130 = (state_30129[(1)]);
if((state_val_30130 === (7))){
var inst_30125 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30131_30155 = state_30129__$1;
(statearr_30131_30155[(2)] = inst_30125);

(statearr_30131_30155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (1))){
var state_30129__$1 = state_30129;
var statearr_30132_30156 = state_30129__$1;
(statearr_30132_30156[(2)] = null);

(statearr_30132_30156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (4))){
var inst_30111 = (state_30129[(7)]);
var inst_30111__$1 = (state_30129[(2)]);
var inst_30112 = (inst_30111__$1 == null);
var state_30129__$1 = (function (){var statearr_30133 = state_30129;
(statearr_30133[(7)] = inst_30111__$1);

return statearr_30133;
})();
if(cljs.core.truth_(inst_30112)){
var statearr_30134_30157 = state_30129__$1;
(statearr_30134_30157[(1)] = (5));

} else {
var statearr_30135_30158 = state_30129__$1;
(statearr_30135_30158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (6))){
var inst_30111 = (state_30129[(7)]);
var inst_30116 = p.call(null,inst_30111);
var state_30129__$1 = state_30129;
if(cljs.core.truth_(inst_30116)){
var statearr_30136_30159 = state_30129__$1;
(statearr_30136_30159[(1)] = (8));

} else {
var statearr_30137_30160 = state_30129__$1;
(statearr_30137_30160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (3))){
var inst_30127 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30129__$1,inst_30127);
} else {
if((state_val_30130 === (2))){
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30129__$1,(4),ch);
} else {
if((state_val_30130 === (11))){
var inst_30119 = (state_30129[(2)]);
var state_30129__$1 = state_30129;
var statearr_30138_30161 = state_30129__$1;
(statearr_30138_30161[(2)] = inst_30119);

(statearr_30138_30161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (9))){
var state_30129__$1 = state_30129;
var statearr_30139_30162 = state_30129__$1;
(statearr_30139_30162[(2)] = null);

(statearr_30139_30162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (5))){
var inst_30114 = cljs.core.async.close_BANG_.call(null,out);
var state_30129__$1 = state_30129;
var statearr_30140_30163 = state_30129__$1;
(statearr_30140_30163[(2)] = inst_30114);

(statearr_30140_30163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (10))){
var inst_30122 = (state_30129[(2)]);
var state_30129__$1 = (function (){var statearr_30141 = state_30129;
(statearr_30141[(8)] = inst_30122);

return statearr_30141;
})();
var statearr_30142_30164 = state_30129__$1;
(statearr_30142_30164[(2)] = null);

(statearr_30142_30164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30130 === (8))){
var inst_30111 = (state_30129[(7)]);
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30129__$1,(11),out,inst_30111);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___30154,out))
;
return ((function (switch__27770__auto__,c__27882__auto___30154,out){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_30146 = [null,null,null,null,null,null,null,null,null];
(statearr_30146[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_30146[(1)] = (1));

return statearr_30146;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_30129){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_30129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e30147){if((e30147 instanceof Object)){
var ex__27774__auto__ = e30147;
var statearr_30148_30165 = state_30129;
(statearr_30148_30165[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30166 = state_30129;
state_30129 = G__30166;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_30129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_30129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___30154,out))
})();
var state__27884__auto__ = (function (){var statearr_30149 = f__27883__auto__.call(null);
(statearr_30149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___30154);

return statearr_30149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___30154,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30167 = [];
var len__25835__auto___30170 = arguments.length;
var i__25836__auto___30171 = (0);
while(true){
if((i__25836__auto___30171 < len__25835__auto___30170)){
args30167.push((arguments[i__25836__auto___30171]));

var G__30172 = (i__25836__auto___30171 + (1));
i__25836__auto___30171 = G__30172;
continue;
} else {
}
break;
}

var G__30169 = args30167.length;
switch (G__30169) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30167.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__){
return (function (state_30339){
var state_val_30340 = (state_30339[(1)]);
if((state_val_30340 === (7))){
var inst_30335 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30341_30382 = state_30339__$1;
(statearr_30341_30382[(2)] = inst_30335);

(statearr_30341_30382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (20))){
var inst_30305 = (state_30339[(7)]);
var inst_30316 = (state_30339[(2)]);
var inst_30317 = cljs.core.next.call(null,inst_30305);
var inst_30291 = inst_30317;
var inst_30292 = null;
var inst_30293 = (0);
var inst_30294 = (0);
var state_30339__$1 = (function (){var statearr_30342 = state_30339;
(statearr_30342[(8)] = inst_30293);

(statearr_30342[(9)] = inst_30294);

(statearr_30342[(10)] = inst_30292);

(statearr_30342[(11)] = inst_30316);

(statearr_30342[(12)] = inst_30291);

return statearr_30342;
})();
var statearr_30343_30383 = state_30339__$1;
(statearr_30343_30383[(2)] = null);

(statearr_30343_30383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (1))){
var state_30339__$1 = state_30339;
var statearr_30344_30384 = state_30339__$1;
(statearr_30344_30384[(2)] = null);

(statearr_30344_30384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (4))){
var inst_30280 = (state_30339[(13)]);
var inst_30280__$1 = (state_30339[(2)]);
var inst_30281 = (inst_30280__$1 == null);
var state_30339__$1 = (function (){var statearr_30345 = state_30339;
(statearr_30345[(13)] = inst_30280__$1);

return statearr_30345;
})();
if(cljs.core.truth_(inst_30281)){
var statearr_30346_30385 = state_30339__$1;
(statearr_30346_30385[(1)] = (5));

} else {
var statearr_30347_30386 = state_30339__$1;
(statearr_30347_30386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (15))){
var state_30339__$1 = state_30339;
var statearr_30351_30387 = state_30339__$1;
(statearr_30351_30387[(2)] = null);

(statearr_30351_30387[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (21))){
var state_30339__$1 = state_30339;
var statearr_30352_30388 = state_30339__$1;
(statearr_30352_30388[(2)] = null);

(statearr_30352_30388[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (13))){
var inst_30293 = (state_30339[(8)]);
var inst_30294 = (state_30339[(9)]);
var inst_30292 = (state_30339[(10)]);
var inst_30291 = (state_30339[(12)]);
var inst_30301 = (state_30339[(2)]);
var inst_30302 = (inst_30294 + (1));
var tmp30348 = inst_30293;
var tmp30349 = inst_30292;
var tmp30350 = inst_30291;
var inst_30291__$1 = tmp30350;
var inst_30292__$1 = tmp30349;
var inst_30293__$1 = tmp30348;
var inst_30294__$1 = inst_30302;
var state_30339__$1 = (function (){var statearr_30353 = state_30339;
(statearr_30353[(14)] = inst_30301);

(statearr_30353[(8)] = inst_30293__$1);

(statearr_30353[(9)] = inst_30294__$1);

(statearr_30353[(10)] = inst_30292__$1);

(statearr_30353[(12)] = inst_30291__$1);

return statearr_30353;
})();
var statearr_30354_30389 = state_30339__$1;
(statearr_30354_30389[(2)] = null);

(statearr_30354_30389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (22))){
var state_30339__$1 = state_30339;
var statearr_30355_30390 = state_30339__$1;
(statearr_30355_30390[(2)] = null);

(statearr_30355_30390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (6))){
var inst_30280 = (state_30339[(13)]);
var inst_30289 = f.call(null,inst_30280);
var inst_30290 = cljs.core.seq.call(null,inst_30289);
var inst_30291 = inst_30290;
var inst_30292 = null;
var inst_30293 = (0);
var inst_30294 = (0);
var state_30339__$1 = (function (){var statearr_30356 = state_30339;
(statearr_30356[(8)] = inst_30293);

(statearr_30356[(9)] = inst_30294);

(statearr_30356[(10)] = inst_30292);

(statearr_30356[(12)] = inst_30291);

return statearr_30356;
})();
var statearr_30357_30391 = state_30339__$1;
(statearr_30357_30391[(2)] = null);

(statearr_30357_30391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (17))){
var inst_30305 = (state_30339[(7)]);
var inst_30309 = cljs.core.chunk_first.call(null,inst_30305);
var inst_30310 = cljs.core.chunk_rest.call(null,inst_30305);
var inst_30311 = cljs.core.count.call(null,inst_30309);
var inst_30291 = inst_30310;
var inst_30292 = inst_30309;
var inst_30293 = inst_30311;
var inst_30294 = (0);
var state_30339__$1 = (function (){var statearr_30358 = state_30339;
(statearr_30358[(8)] = inst_30293);

(statearr_30358[(9)] = inst_30294);

(statearr_30358[(10)] = inst_30292);

(statearr_30358[(12)] = inst_30291);

return statearr_30358;
})();
var statearr_30359_30392 = state_30339__$1;
(statearr_30359_30392[(2)] = null);

(statearr_30359_30392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (3))){
var inst_30337 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30339__$1,inst_30337);
} else {
if((state_val_30340 === (12))){
var inst_30325 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30360_30393 = state_30339__$1;
(statearr_30360_30393[(2)] = inst_30325);

(statearr_30360_30393[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (2))){
var state_30339__$1 = state_30339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30339__$1,(4),in$);
} else {
if((state_val_30340 === (23))){
var inst_30333 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30361_30394 = state_30339__$1;
(statearr_30361_30394[(2)] = inst_30333);

(statearr_30361_30394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (19))){
var inst_30320 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30362_30395 = state_30339__$1;
(statearr_30362_30395[(2)] = inst_30320);

(statearr_30362_30395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (11))){
var inst_30305 = (state_30339[(7)]);
var inst_30291 = (state_30339[(12)]);
var inst_30305__$1 = cljs.core.seq.call(null,inst_30291);
var state_30339__$1 = (function (){var statearr_30363 = state_30339;
(statearr_30363[(7)] = inst_30305__$1);

return statearr_30363;
})();
if(inst_30305__$1){
var statearr_30364_30396 = state_30339__$1;
(statearr_30364_30396[(1)] = (14));

} else {
var statearr_30365_30397 = state_30339__$1;
(statearr_30365_30397[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (9))){
var inst_30327 = (state_30339[(2)]);
var inst_30328 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30339__$1 = (function (){var statearr_30366 = state_30339;
(statearr_30366[(15)] = inst_30327);

return statearr_30366;
})();
if(cljs.core.truth_(inst_30328)){
var statearr_30367_30398 = state_30339__$1;
(statearr_30367_30398[(1)] = (21));

} else {
var statearr_30368_30399 = state_30339__$1;
(statearr_30368_30399[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (5))){
var inst_30283 = cljs.core.async.close_BANG_.call(null,out);
var state_30339__$1 = state_30339;
var statearr_30369_30400 = state_30339__$1;
(statearr_30369_30400[(2)] = inst_30283);

(statearr_30369_30400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (14))){
var inst_30305 = (state_30339[(7)]);
var inst_30307 = cljs.core.chunked_seq_QMARK_.call(null,inst_30305);
var state_30339__$1 = state_30339;
if(inst_30307){
var statearr_30370_30401 = state_30339__$1;
(statearr_30370_30401[(1)] = (17));

} else {
var statearr_30371_30402 = state_30339__$1;
(statearr_30371_30402[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (16))){
var inst_30323 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30372_30403 = state_30339__$1;
(statearr_30372_30403[(2)] = inst_30323);

(statearr_30372_30403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (10))){
var inst_30294 = (state_30339[(9)]);
var inst_30292 = (state_30339[(10)]);
var inst_30299 = cljs.core._nth.call(null,inst_30292,inst_30294);
var state_30339__$1 = state_30339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30339__$1,(13),out,inst_30299);
} else {
if((state_val_30340 === (18))){
var inst_30305 = (state_30339[(7)]);
var inst_30314 = cljs.core.first.call(null,inst_30305);
var state_30339__$1 = state_30339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30339__$1,(20),out,inst_30314);
} else {
if((state_val_30340 === (8))){
var inst_30293 = (state_30339[(8)]);
var inst_30294 = (state_30339[(9)]);
var inst_30296 = (inst_30294 < inst_30293);
var inst_30297 = inst_30296;
var state_30339__$1 = state_30339;
if(cljs.core.truth_(inst_30297)){
var statearr_30373_30404 = state_30339__$1;
(statearr_30373_30404[(1)] = (10));

} else {
var statearr_30374_30405 = state_30339__$1;
(statearr_30374_30405[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto__))
;
return ((function (switch__27770__auto__,c__27882__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27771__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27771__auto____0 = (function (){
var statearr_30378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30378[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27771__auto__);

(statearr_30378[(1)] = (1));

return statearr_30378;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27771__auto____1 = (function (state_30339){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_30339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e30379){if((e30379 instanceof Object)){
var ex__27774__auto__ = e30379;
var statearr_30380_30406 = state_30339;
(statearr_30380_30406[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30407 = state_30339;
state_30339 = G__30407;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27771__auto__ = function(state_30339){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27771__auto____1.call(this,state_30339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27771__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27771__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__))
})();
var state__27884__auto__ = (function (){var statearr_30381 = f__27883__auto__.call(null);
(statearr_30381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_30381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__))
);

return c__27882__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30408 = [];
var len__25835__auto___30411 = arguments.length;
var i__25836__auto___30412 = (0);
while(true){
if((i__25836__auto___30412 < len__25835__auto___30411)){
args30408.push((arguments[i__25836__auto___30412]));

var G__30413 = (i__25836__auto___30412 + (1));
i__25836__auto___30412 = G__30413;
continue;
} else {
}
break;
}

var G__30410 = args30408.length;
switch (G__30410) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30408.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30415 = [];
var len__25835__auto___30418 = arguments.length;
var i__25836__auto___30419 = (0);
while(true){
if((i__25836__auto___30419 < len__25835__auto___30418)){
args30415.push((arguments[i__25836__auto___30419]));

var G__30420 = (i__25836__auto___30419 + (1));
i__25836__auto___30419 = G__30420;
continue;
} else {
}
break;
}

var G__30417 = args30415.length;
switch (G__30417) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30415.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30422 = [];
var len__25835__auto___30473 = arguments.length;
var i__25836__auto___30474 = (0);
while(true){
if((i__25836__auto___30474 < len__25835__auto___30473)){
args30422.push((arguments[i__25836__auto___30474]));

var G__30475 = (i__25836__auto___30474 + (1));
i__25836__auto___30474 = G__30475;
continue;
} else {
}
break;
}

var G__30424 = args30422.length;
switch (G__30424) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30422.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27882__auto___30477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___30477,out){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___30477,out){
return (function (state_30448){
var state_val_30449 = (state_30448[(1)]);
if((state_val_30449 === (7))){
var inst_30443 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
var statearr_30450_30478 = state_30448__$1;
(statearr_30450_30478[(2)] = inst_30443);

(statearr_30450_30478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (1))){
var inst_30425 = null;
var state_30448__$1 = (function (){var statearr_30451 = state_30448;
(statearr_30451[(7)] = inst_30425);

return statearr_30451;
})();
var statearr_30452_30479 = state_30448__$1;
(statearr_30452_30479[(2)] = null);

(statearr_30452_30479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (4))){
var inst_30428 = (state_30448[(8)]);
var inst_30428__$1 = (state_30448[(2)]);
var inst_30429 = (inst_30428__$1 == null);
var inst_30430 = cljs.core.not.call(null,inst_30429);
var state_30448__$1 = (function (){var statearr_30453 = state_30448;
(statearr_30453[(8)] = inst_30428__$1);

return statearr_30453;
})();
if(inst_30430){
var statearr_30454_30480 = state_30448__$1;
(statearr_30454_30480[(1)] = (5));

} else {
var statearr_30455_30481 = state_30448__$1;
(statearr_30455_30481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (6))){
var state_30448__$1 = state_30448;
var statearr_30456_30482 = state_30448__$1;
(statearr_30456_30482[(2)] = null);

(statearr_30456_30482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (3))){
var inst_30445 = (state_30448[(2)]);
var inst_30446 = cljs.core.async.close_BANG_.call(null,out);
var state_30448__$1 = (function (){var statearr_30457 = state_30448;
(statearr_30457[(9)] = inst_30445);

return statearr_30457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30448__$1,inst_30446);
} else {
if((state_val_30449 === (2))){
var state_30448__$1 = state_30448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30448__$1,(4),ch);
} else {
if((state_val_30449 === (11))){
var inst_30428 = (state_30448[(8)]);
var inst_30437 = (state_30448[(2)]);
var inst_30425 = inst_30428;
var state_30448__$1 = (function (){var statearr_30458 = state_30448;
(statearr_30458[(10)] = inst_30437);

(statearr_30458[(7)] = inst_30425);

return statearr_30458;
})();
var statearr_30459_30483 = state_30448__$1;
(statearr_30459_30483[(2)] = null);

(statearr_30459_30483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (9))){
var inst_30428 = (state_30448[(8)]);
var state_30448__$1 = state_30448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30448__$1,(11),out,inst_30428);
} else {
if((state_val_30449 === (5))){
var inst_30428 = (state_30448[(8)]);
var inst_30425 = (state_30448[(7)]);
var inst_30432 = cljs.core._EQ_.call(null,inst_30428,inst_30425);
var state_30448__$1 = state_30448;
if(inst_30432){
var statearr_30461_30484 = state_30448__$1;
(statearr_30461_30484[(1)] = (8));

} else {
var statearr_30462_30485 = state_30448__$1;
(statearr_30462_30485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (10))){
var inst_30440 = (state_30448[(2)]);
var state_30448__$1 = state_30448;
var statearr_30463_30486 = state_30448__$1;
(statearr_30463_30486[(2)] = inst_30440);

(statearr_30463_30486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30449 === (8))){
var inst_30425 = (state_30448[(7)]);
var tmp30460 = inst_30425;
var inst_30425__$1 = tmp30460;
var state_30448__$1 = (function (){var statearr_30464 = state_30448;
(statearr_30464[(7)] = inst_30425__$1);

return statearr_30464;
})();
var statearr_30465_30487 = state_30448__$1;
(statearr_30465_30487[(2)] = null);

(statearr_30465_30487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___30477,out))
;
return ((function (switch__27770__auto__,c__27882__auto___30477,out){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_30469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30469[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_30469[(1)] = (1));

return statearr_30469;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_30448){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_30448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e30470){if((e30470 instanceof Object)){
var ex__27774__auto__ = e30470;
var statearr_30471_30488 = state_30448;
(statearr_30471_30488[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30489 = state_30448;
state_30448 = G__30489;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_30448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_30448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___30477,out))
})();
var state__27884__auto__ = (function (){var statearr_30472 = f__27883__auto__.call(null);
(statearr_30472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___30477);

return statearr_30472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___30477,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30490 = [];
var len__25835__auto___30560 = arguments.length;
var i__25836__auto___30561 = (0);
while(true){
if((i__25836__auto___30561 < len__25835__auto___30560)){
args30490.push((arguments[i__25836__auto___30561]));

var G__30562 = (i__25836__auto___30561 + (1));
i__25836__auto___30561 = G__30562;
continue;
} else {
}
break;
}

var G__30492 = args30490.length;
switch (G__30492) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30490.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27882__auto___30564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___30564,out){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___30564,out){
return (function (state_30530){
var state_val_30531 = (state_30530[(1)]);
if((state_val_30531 === (7))){
var inst_30526 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30532_30565 = state_30530__$1;
(statearr_30532_30565[(2)] = inst_30526);

(statearr_30532_30565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (1))){
var inst_30493 = (new Array(n));
var inst_30494 = inst_30493;
var inst_30495 = (0);
var state_30530__$1 = (function (){var statearr_30533 = state_30530;
(statearr_30533[(7)] = inst_30494);

(statearr_30533[(8)] = inst_30495);

return statearr_30533;
})();
var statearr_30534_30566 = state_30530__$1;
(statearr_30534_30566[(2)] = null);

(statearr_30534_30566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (4))){
var inst_30498 = (state_30530[(9)]);
var inst_30498__$1 = (state_30530[(2)]);
var inst_30499 = (inst_30498__$1 == null);
var inst_30500 = cljs.core.not.call(null,inst_30499);
var state_30530__$1 = (function (){var statearr_30535 = state_30530;
(statearr_30535[(9)] = inst_30498__$1);

return statearr_30535;
})();
if(inst_30500){
var statearr_30536_30567 = state_30530__$1;
(statearr_30536_30567[(1)] = (5));

} else {
var statearr_30537_30568 = state_30530__$1;
(statearr_30537_30568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (15))){
var inst_30520 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30538_30569 = state_30530__$1;
(statearr_30538_30569[(2)] = inst_30520);

(statearr_30538_30569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (13))){
var state_30530__$1 = state_30530;
var statearr_30539_30570 = state_30530__$1;
(statearr_30539_30570[(2)] = null);

(statearr_30539_30570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (6))){
var inst_30495 = (state_30530[(8)]);
var inst_30516 = (inst_30495 > (0));
var state_30530__$1 = state_30530;
if(cljs.core.truth_(inst_30516)){
var statearr_30540_30571 = state_30530__$1;
(statearr_30540_30571[(1)] = (12));

} else {
var statearr_30541_30572 = state_30530__$1;
(statearr_30541_30572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (3))){
var inst_30528 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30530__$1,inst_30528);
} else {
if((state_val_30531 === (12))){
var inst_30494 = (state_30530[(7)]);
var inst_30518 = cljs.core.vec.call(null,inst_30494);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30530__$1,(15),out,inst_30518);
} else {
if((state_val_30531 === (2))){
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(4),ch);
} else {
if((state_val_30531 === (11))){
var inst_30510 = (state_30530[(2)]);
var inst_30511 = (new Array(n));
var inst_30494 = inst_30511;
var inst_30495 = (0);
var state_30530__$1 = (function (){var statearr_30542 = state_30530;
(statearr_30542[(7)] = inst_30494);

(statearr_30542[(8)] = inst_30495);

(statearr_30542[(10)] = inst_30510);

return statearr_30542;
})();
var statearr_30543_30573 = state_30530__$1;
(statearr_30543_30573[(2)] = null);

(statearr_30543_30573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (9))){
var inst_30494 = (state_30530[(7)]);
var inst_30508 = cljs.core.vec.call(null,inst_30494);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30530__$1,(11),out,inst_30508);
} else {
if((state_val_30531 === (5))){
var inst_30503 = (state_30530[(11)]);
var inst_30494 = (state_30530[(7)]);
var inst_30495 = (state_30530[(8)]);
var inst_30498 = (state_30530[(9)]);
var inst_30502 = (inst_30494[inst_30495] = inst_30498);
var inst_30503__$1 = (inst_30495 + (1));
var inst_30504 = (inst_30503__$1 < n);
var state_30530__$1 = (function (){var statearr_30544 = state_30530;
(statearr_30544[(11)] = inst_30503__$1);

(statearr_30544[(12)] = inst_30502);

return statearr_30544;
})();
if(cljs.core.truth_(inst_30504)){
var statearr_30545_30574 = state_30530__$1;
(statearr_30545_30574[(1)] = (8));

} else {
var statearr_30546_30575 = state_30530__$1;
(statearr_30546_30575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (14))){
var inst_30523 = (state_30530[(2)]);
var inst_30524 = cljs.core.async.close_BANG_.call(null,out);
var state_30530__$1 = (function (){var statearr_30548 = state_30530;
(statearr_30548[(13)] = inst_30523);

return statearr_30548;
})();
var statearr_30549_30576 = state_30530__$1;
(statearr_30549_30576[(2)] = inst_30524);

(statearr_30549_30576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (10))){
var inst_30514 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30550_30577 = state_30530__$1;
(statearr_30550_30577[(2)] = inst_30514);

(statearr_30550_30577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (8))){
var inst_30503 = (state_30530[(11)]);
var inst_30494 = (state_30530[(7)]);
var tmp30547 = inst_30494;
var inst_30494__$1 = tmp30547;
var inst_30495 = inst_30503;
var state_30530__$1 = (function (){var statearr_30551 = state_30530;
(statearr_30551[(7)] = inst_30494__$1);

(statearr_30551[(8)] = inst_30495);

return statearr_30551;
})();
var statearr_30552_30578 = state_30530__$1;
(statearr_30552_30578[(2)] = null);

(statearr_30552_30578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___30564,out))
;
return ((function (switch__27770__auto__,c__27882__auto___30564,out){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_30556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30556[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_30556[(1)] = (1));

return statearr_30556;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_30530){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_30530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e30557){if((e30557 instanceof Object)){
var ex__27774__auto__ = e30557;
var statearr_30558_30579 = state_30530;
(statearr_30558_30579[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30580 = state_30530;
state_30530 = G__30580;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_30530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_30530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___30564,out))
})();
var state__27884__auto__ = (function (){var statearr_30559 = f__27883__auto__.call(null);
(statearr_30559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___30564);

return statearr_30559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___30564,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30581 = [];
var len__25835__auto___30655 = arguments.length;
var i__25836__auto___30656 = (0);
while(true){
if((i__25836__auto___30656 < len__25835__auto___30655)){
args30581.push((arguments[i__25836__auto___30656]));

var G__30657 = (i__25836__auto___30656 + (1));
i__25836__auto___30656 = G__30657;
continue;
} else {
}
break;
}

var G__30583 = args30581.length;
switch (G__30583) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30581.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27882__auto___30659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___30659,out){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___30659,out){
return (function (state_30625){
var state_val_30626 = (state_30625[(1)]);
if((state_val_30626 === (7))){
var inst_30621 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30627_30660 = state_30625__$1;
(statearr_30627_30660[(2)] = inst_30621);

(statearr_30627_30660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (1))){
var inst_30584 = [];
var inst_30585 = inst_30584;
var inst_30586 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30625__$1 = (function (){var statearr_30628 = state_30625;
(statearr_30628[(7)] = inst_30586);

(statearr_30628[(8)] = inst_30585);

return statearr_30628;
})();
var statearr_30629_30661 = state_30625__$1;
(statearr_30629_30661[(2)] = null);

(statearr_30629_30661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (4))){
var inst_30589 = (state_30625[(9)]);
var inst_30589__$1 = (state_30625[(2)]);
var inst_30590 = (inst_30589__$1 == null);
var inst_30591 = cljs.core.not.call(null,inst_30590);
var state_30625__$1 = (function (){var statearr_30630 = state_30625;
(statearr_30630[(9)] = inst_30589__$1);

return statearr_30630;
})();
if(inst_30591){
var statearr_30631_30662 = state_30625__$1;
(statearr_30631_30662[(1)] = (5));

} else {
var statearr_30632_30663 = state_30625__$1;
(statearr_30632_30663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (15))){
var inst_30615 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30633_30664 = state_30625__$1;
(statearr_30633_30664[(2)] = inst_30615);

(statearr_30633_30664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (13))){
var state_30625__$1 = state_30625;
var statearr_30634_30665 = state_30625__$1;
(statearr_30634_30665[(2)] = null);

(statearr_30634_30665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (6))){
var inst_30585 = (state_30625[(8)]);
var inst_30610 = inst_30585.length;
var inst_30611 = (inst_30610 > (0));
var state_30625__$1 = state_30625;
if(cljs.core.truth_(inst_30611)){
var statearr_30635_30666 = state_30625__$1;
(statearr_30635_30666[(1)] = (12));

} else {
var statearr_30636_30667 = state_30625__$1;
(statearr_30636_30667[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (3))){
var inst_30623 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30625__$1,inst_30623);
} else {
if((state_val_30626 === (12))){
var inst_30585 = (state_30625[(8)]);
var inst_30613 = cljs.core.vec.call(null,inst_30585);
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30625__$1,(15),out,inst_30613);
} else {
if((state_val_30626 === (2))){
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30625__$1,(4),ch);
} else {
if((state_val_30626 === (11))){
var inst_30593 = (state_30625[(10)]);
var inst_30589 = (state_30625[(9)]);
var inst_30603 = (state_30625[(2)]);
var inst_30604 = [];
var inst_30605 = inst_30604.push(inst_30589);
var inst_30585 = inst_30604;
var inst_30586 = inst_30593;
var state_30625__$1 = (function (){var statearr_30637 = state_30625;
(statearr_30637[(11)] = inst_30605);

(statearr_30637[(7)] = inst_30586);

(statearr_30637[(12)] = inst_30603);

(statearr_30637[(8)] = inst_30585);

return statearr_30637;
})();
var statearr_30638_30668 = state_30625__$1;
(statearr_30638_30668[(2)] = null);

(statearr_30638_30668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (9))){
var inst_30585 = (state_30625[(8)]);
var inst_30601 = cljs.core.vec.call(null,inst_30585);
var state_30625__$1 = state_30625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30625__$1,(11),out,inst_30601);
} else {
if((state_val_30626 === (5))){
var inst_30586 = (state_30625[(7)]);
var inst_30593 = (state_30625[(10)]);
var inst_30589 = (state_30625[(9)]);
var inst_30593__$1 = f.call(null,inst_30589);
var inst_30594 = cljs.core._EQ_.call(null,inst_30593__$1,inst_30586);
var inst_30595 = cljs.core.keyword_identical_QMARK_.call(null,inst_30586,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30596 = (inst_30594) || (inst_30595);
var state_30625__$1 = (function (){var statearr_30639 = state_30625;
(statearr_30639[(10)] = inst_30593__$1);

return statearr_30639;
})();
if(cljs.core.truth_(inst_30596)){
var statearr_30640_30669 = state_30625__$1;
(statearr_30640_30669[(1)] = (8));

} else {
var statearr_30641_30670 = state_30625__$1;
(statearr_30641_30670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (14))){
var inst_30618 = (state_30625[(2)]);
var inst_30619 = cljs.core.async.close_BANG_.call(null,out);
var state_30625__$1 = (function (){var statearr_30643 = state_30625;
(statearr_30643[(13)] = inst_30618);

return statearr_30643;
})();
var statearr_30644_30671 = state_30625__$1;
(statearr_30644_30671[(2)] = inst_30619);

(statearr_30644_30671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (10))){
var inst_30608 = (state_30625[(2)]);
var state_30625__$1 = state_30625;
var statearr_30645_30672 = state_30625__$1;
(statearr_30645_30672[(2)] = inst_30608);

(statearr_30645_30672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30626 === (8))){
var inst_30593 = (state_30625[(10)]);
var inst_30585 = (state_30625[(8)]);
var inst_30589 = (state_30625[(9)]);
var inst_30598 = inst_30585.push(inst_30589);
var tmp30642 = inst_30585;
var inst_30585__$1 = tmp30642;
var inst_30586 = inst_30593;
var state_30625__$1 = (function (){var statearr_30646 = state_30625;
(statearr_30646[(14)] = inst_30598);

(statearr_30646[(7)] = inst_30586);

(statearr_30646[(8)] = inst_30585__$1);

return statearr_30646;
})();
var statearr_30647_30673 = state_30625__$1;
(statearr_30647_30673[(2)] = null);

(statearr_30647_30673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27882__auto___30659,out))
;
return ((function (switch__27770__auto__,c__27882__auto___30659,out){
return (function() {
var cljs$core$async$state_machine__27771__auto__ = null;
var cljs$core$async$state_machine__27771__auto____0 = (function (){
var statearr_30651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30651[(0)] = cljs$core$async$state_machine__27771__auto__);

(statearr_30651[(1)] = (1));

return statearr_30651;
});
var cljs$core$async$state_machine__27771__auto____1 = (function (state_30625){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_30625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e30652){if((e30652 instanceof Object)){
var ex__27774__auto__ = e30652;
var statearr_30653_30674 = state_30625;
(statearr_30653_30674[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30675 = state_30625;
state_30625 = G__30675;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
cljs$core$async$state_machine__27771__auto__ = function(state_30625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27771__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27771__auto____1.call(this,state_30625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27771__auto____0;
cljs$core$async$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27771__auto____1;
return cljs$core$async$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___30659,out))
})();
var state__27884__auto__ = (function (){var statearr_30654 = f__27883__auto__.call(null);
(statearr_30654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___30659);

return statearr_30654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___30659,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1478134421515