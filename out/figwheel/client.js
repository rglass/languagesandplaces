// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36070 = [];
var len__25835__auto___36073 = arguments.length;
var i__25836__auto___36074 = (0);
while(true){
if((i__25836__auto___36074 < len__25835__auto___36073)){
args36070.push((arguments[i__25836__auto___36074]));

var G__36075 = (i__25836__auto___36074 + (1));
i__25836__auto___36074 = G__36075;
continue;
} else {
}
break;
}

var G__36072 = args36070.length;
switch (G__36072) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36070.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___36078 = arguments.length;
var i__25836__auto___36079 = (0);
while(true){
if((i__25836__auto___36079 < len__25835__auto___36078)){
args__25842__auto__.push((arguments[i__25836__auto___36079]));

var G__36080 = (i__25836__auto___36079 + (1));
i__25836__auto___36079 = G__36080;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36077){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36077));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___36082 = arguments.length;
var i__25836__auto___36083 = (0);
while(true){
if((i__25836__auto___36083 < len__25835__auto___36082)){
args__25842__auto__.push((arguments[i__25836__auto___36083]));

var G__36084 = (i__25836__auto___36083 + (1));
i__25836__auto___36083 = G__36084;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36081){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36081));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__36085 = cljs.core._EQ_;
var expr__36086 = (function (){var or__24760__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e36089){if((e36089 instanceof Error)){
var e = e36089;
return false;
} else {
throw e36089;

}
}})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__36085.call(null,"true",expr__36086))){
return true;
} else {
if(cljs.core.truth_(pred__36085.call(null,"false",expr__36086))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36086)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e36091){if((e36091 instanceof Error)){
var e = e36091;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e36091;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36092){
var map__36095 = p__36092;
var map__36095__$1 = ((((!((map__36095 == null)))?((((map__36095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36095):map__36095);
var message = cljs.core.get.call(null,map__36095__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36095__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24760__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24748__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24748__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24748__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27882__auto___36257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___36257,ch){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___36257,ch){
return (function (state_36226){
var state_val_36227 = (state_36226[(1)]);
if((state_val_36227 === (7))){
var inst_36222 = (state_36226[(2)]);
var state_36226__$1 = state_36226;
var statearr_36228_36258 = state_36226__$1;
(statearr_36228_36258[(2)] = inst_36222);

(statearr_36228_36258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (1))){
var state_36226__$1 = state_36226;
var statearr_36229_36259 = state_36226__$1;
(statearr_36229_36259[(2)] = null);

(statearr_36229_36259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (4))){
var inst_36179 = (state_36226[(7)]);
var inst_36179__$1 = (state_36226[(2)]);
var state_36226__$1 = (function (){var statearr_36230 = state_36226;
(statearr_36230[(7)] = inst_36179__$1);

return statearr_36230;
})();
if(cljs.core.truth_(inst_36179__$1)){
var statearr_36231_36260 = state_36226__$1;
(statearr_36231_36260[(1)] = (5));

} else {
var statearr_36232_36261 = state_36226__$1;
(statearr_36232_36261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (15))){
var inst_36186 = (state_36226[(8)]);
var inst_36201 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36186);
var inst_36202 = cljs.core.first.call(null,inst_36201);
var inst_36203 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36202);
var inst_36204 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36203)].join('');
var inst_36205 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36204);
var state_36226__$1 = state_36226;
var statearr_36233_36262 = state_36226__$1;
(statearr_36233_36262[(2)] = inst_36205);

(statearr_36233_36262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (13))){
var inst_36210 = (state_36226[(2)]);
var state_36226__$1 = state_36226;
var statearr_36234_36263 = state_36226__$1;
(statearr_36234_36263[(2)] = inst_36210);

(statearr_36234_36263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (6))){
var state_36226__$1 = state_36226;
var statearr_36235_36264 = state_36226__$1;
(statearr_36235_36264[(2)] = null);

(statearr_36235_36264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (17))){
var inst_36208 = (state_36226[(2)]);
var state_36226__$1 = state_36226;
var statearr_36236_36265 = state_36226__$1;
(statearr_36236_36265[(2)] = inst_36208);

(statearr_36236_36265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (3))){
var inst_36224 = (state_36226[(2)]);
var state_36226__$1 = state_36226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36226__$1,inst_36224);
} else {
if((state_val_36227 === (12))){
var inst_36185 = (state_36226[(9)]);
var inst_36199 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36185,opts);
var state_36226__$1 = state_36226;
if(cljs.core.truth_(inst_36199)){
var statearr_36237_36266 = state_36226__$1;
(statearr_36237_36266[(1)] = (15));

} else {
var statearr_36238_36267 = state_36226__$1;
(statearr_36238_36267[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (2))){
var state_36226__$1 = state_36226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36226__$1,(4),ch);
} else {
if((state_val_36227 === (11))){
var inst_36186 = (state_36226[(8)]);
var inst_36191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36192 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36186);
var inst_36193 = cljs.core.async.timeout.call(null,(1000));
var inst_36194 = [inst_36192,inst_36193];
var inst_36195 = (new cljs.core.PersistentVector(null,2,(5),inst_36191,inst_36194,null));
var state_36226__$1 = state_36226;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36226__$1,(14),inst_36195);
} else {
if((state_val_36227 === (9))){
var inst_36186 = (state_36226[(8)]);
var inst_36212 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36213 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36186);
var inst_36214 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36213);
var inst_36215 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36214)].join('');
var inst_36216 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36215);
var state_36226__$1 = (function (){var statearr_36239 = state_36226;
(statearr_36239[(10)] = inst_36212);

return statearr_36239;
})();
var statearr_36240_36268 = state_36226__$1;
(statearr_36240_36268[(2)] = inst_36216);

(statearr_36240_36268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (5))){
var inst_36179 = (state_36226[(7)]);
var inst_36181 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36182 = (new cljs.core.PersistentArrayMap(null,2,inst_36181,null));
var inst_36183 = (new cljs.core.PersistentHashSet(null,inst_36182,null));
var inst_36184 = figwheel.client.focus_msgs.call(null,inst_36183,inst_36179);
var inst_36185 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36184);
var inst_36186 = cljs.core.first.call(null,inst_36184);
var inst_36187 = figwheel.client.autoload_QMARK_.call(null);
var state_36226__$1 = (function (){var statearr_36241 = state_36226;
(statearr_36241[(9)] = inst_36185);

(statearr_36241[(8)] = inst_36186);

return statearr_36241;
})();
if(cljs.core.truth_(inst_36187)){
var statearr_36242_36269 = state_36226__$1;
(statearr_36242_36269[(1)] = (8));

} else {
var statearr_36243_36270 = state_36226__$1;
(statearr_36243_36270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (14))){
var inst_36197 = (state_36226[(2)]);
var state_36226__$1 = state_36226;
var statearr_36244_36271 = state_36226__$1;
(statearr_36244_36271[(2)] = inst_36197);

(statearr_36244_36271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (16))){
var state_36226__$1 = state_36226;
var statearr_36245_36272 = state_36226__$1;
(statearr_36245_36272[(2)] = null);

(statearr_36245_36272[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (10))){
var inst_36218 = (state_36226[(2)]);
var state_36226__$1 = (function (){var statearr_36246 = state_36226;
(statearr_36246[(11)] = inst_36218);

return statearr_36246;
})();
var statearr_36247_36273 = state_36226__$1;
(statearr_36247_36273[(2)] = null);

(statearr_36247_36273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36227 === (8))){
var inst_36185 = (state_36226[(9)]);
var inst_36189 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36185,opts);
var state_36226__$1 = state_36226;
if(cljs.core.truth_(inst_36189)){
var statearr_36248_36274 = state_36226__$1;
(statearr_36248_36274[(1)] = (11));

} else {
var statearr_36249_36275 = state_36226__$1;
(statearr_36249_36275[(1)] = (12));

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
});})(c__27882__auto___36257,ch))
;
return ((function (switch__27770__auto__,c__27882__auto___36257,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27771__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27771__auto____0 = (function (){
var statearr_36253 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36253[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27771__auto__);

(statearr_36253[(1)] = (1));

return statearr_36253;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27771__auto____1 = (function (state_36226){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_36226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e36254){if((e36254 instanceof Object)){
var ex__27774__auto__ = e36254;
var statearr_36255_36276 = state_36226;
(statearr_36255_36276[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36277 = state_36226;
state_36226 = G__36277;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27771__auto__ = function(state_36226){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27771__auto____1.call(this,state_36226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27771__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27771__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___36257,ch))
})();
var state__27884__auto__ = (function (){var statearr_36256 = f__27883__auto__.call(null);
(statearr_36256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___36257);

return statearr_36256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___36257,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36278_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36278_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36281 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36281){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36280){if((e36280 instanceof Error)){
var e = e36280;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36281], null));
} else {
var e = e36280;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36281))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36282){
var map__36291 = p__36282;
var map__36291__$1 = ((((!((map__36291 == null)))?((((map__36291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36291):map__36291);
var opts = map__36291__$1;
var build_id = cljs.core.get.call(null,map__36291__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36291,map__36291__$1,opts,build_id){
return (function (p__36293){
var vec__36294 = p__36293;
var seq__36295 = cljs.core.seq.call(null,vec__36294);
var first__36296 = cljs.core.first.call(null,seq__36295);
var seq__36295__$1 = cljs.core.next.call(null,seq__36295);
var map__36297 = first__36296;
var map__36297__$1 = ((((!((map__36297 == null)))?((((map__36297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36297):map__36297);
var msg = map__36297__$1;
var msg_name = cljs.core.get.call(null,map__36297__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36295__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36294,seq__36295,first__36296,seq__36295__$1,map__36297,map__36297__$1,msg,msg_name,_,map__36291,map__36291__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36294,seq__36295,first__36296,seq__36295__$1,map__36297,map__36297__$1,msg,msg_name,_,map__36291,map__36291__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36291,map__36291__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36305){
var vec__36306 = p__36305;
var seq__36307 = cljs.core.seq.call(null,vec__36306);
var first__36308 = cljs.core.first.call(null,seq__36307);
var seq__36307__$1 = cljs.core.next.call(null,seq__36307);
var map__36309 = first__36308;
var map__36309__$1 = ((((!((map__36309 == null)))?((((map__36309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36309):map__36309);
var msg = map__36309__$1;
var msg_name = cljs.core.get.call(null,map__36309__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36307__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36311){
var map__36323 = p__36311;
var map__36323__$1 = ((((!((map__36323 == null)))?((((map__36323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36323):map__36323);
var on_compile_warning = cljs.core.get.call(null,map__36323__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36323__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36323,map__36323__$1,on_compile_warning,on_compile_fail){
return (function (p__36325){
var vec__36326 = p__36325;
var seq__36327 = cljs.core.seq.call(null,vec__36326);
var first__36328 = cljs.core.first.call(null,seq__36327);
var seq__36327__$1 = cljs.core.next.call(null,seq__36327);
var map__36329 = first__36328;
var map__36329__$1 = ((((!((map__36329 == null)))?((((map__36329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36329):map__36329);
var msg = map__36329__$1;
var msg_name = cljs.core.get.call(null,map__36329__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36327__$1;
var pred__36331 = cljs.core._EQ_;
var expr__36332 = msg_name;
if(cljs.core.truth_(pred__36331.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36332))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36331.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36332))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36323,map__36323__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__,msg_hist,msg_names,msg){
return (function (state_36560){
var state_val_36561 = (state_36560[(1)]);
if((state_val_36561 === (7))){
var inst_36480 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36480)){
var statearr_36562_36612 = state_36560__$1;
(statearr_36562_36612[(1)] = (8));

} else {
var statearr_36563_36613 = state_36560__$1;
(statearr_36563_36613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (20))){
var inst_36554 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36564_36614 = state_36560__$1;
(statearr_36564_36614[(2)] = inst_36554);

(statearr_36564_36614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (27))){
var inst_36550 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36565_36615 = state_36560__$1;
(statearr_36565_36615[(2)] = inst_36550);

(statearr_36565_36615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (1))){
var inst_36473 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36473)){
var statearr_36566_36616 = state_36560__$1;
(statearr_36566_36616[(1)] = (2));

} else {
var statearr_36567_36617 = state_36560__$1;
(statearr_36567_36617[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (24))){
var inst_36552 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36568_36618 = state_36560__$1;
(statearr_36568_36618[(2)] = inst_36552);

(statearr_36568_36618[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (4))){
var inst_36558 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36560__$1,inst_36558);
} else {
if((state_val_36561 === (15))){
var inst_36556 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36569_36619 = state_36560__$1;
(statearr_36569_36619[(2)] = inst_36556);

(statearr_36569_36619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (21))){
var inst_36509 = (state_36560[(2)]);
var inst_36510 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36511 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36510);
var state_36560__$1 = (function (){var statearr_36570 = state_36560;
(statearr_36570[(7)] = inst_36509);

return statearr_36570;
})();
var statearr_36571_36620 = state_36560__$1;
(statearr_36571_36620[(2)] = inst_36511);

(statearr_36571_36620[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (31))){
var inst_36539 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36539)){
var statearr_36572_36621 = state_36560__$1;
(statearr_36572_36621[(1)] = (34));

} else {
var statearr_36573_36622 = state_36560__$1;
(statearr_36573_36622[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (32))){
var inst_36548 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36574_36623 = state_36560__$1;
(statearr_36574_36623[(2)] = inst_36548);

(statearr_36574_36623[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (33))){
var inst_36535 = (state_36560[(2)]);
var inst_36536 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36537 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36536);
var state_36560__$1 = (function (){var statearr_36575 = state_36560;
(statearr_36575[(8)] = inst_36535);

return statearr_36575;
})();
var statearr_36576_36624 = state_36560__$1;
(statearr_36576_36624[(2)] = inst_36537);

(statearr_36576_36624[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (13))){
var inst_36494 = figwheel.client.heads_up.clear.call(null);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(16),inst_36494);
} else {
if((state_val_36561 === (22))){
var inst_36515 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36516 = figwheel.client.heads_up.append_warning_message.call(null,inst_36515);
var state_36560__$1 = state_36560;
var statearr_36577_36625 = state_36560__$1;
(statearr_36577_36625[(2)] = inst_36516);

(statearr_36577_36625[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (36))){
var inst_36546 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36578_36626 = state_36560__$1;
(statearr_36578_36626[(2)] = inst_36546);

(statearr_36578_36626[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (29))){
var inst_36526 = (state_36560[(2)]);
var inst_36527 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36528 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36527);
var state_36560__$1 = (function (){var statearr_36579 = state_36560;
(statearr_36579[(9)] = inst_36526);

return statearr_36579;
})();
var statearr_36580_36627 = state_36560__$1;
(statearr_36580_36627[(2)] = inst_36528);

(statearr_36580_36627[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (6))){
var inst_36475 = (state_36560[(10)]);
var state_36560__$1 = state_36560;
var statearr_36581_36628 = state_36560__$1;
(statearr_36581_36628[(2)] = inst_36475);

(statearr_36581_36628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (28))){
var inst_36522 = (state_36560[(2)]);
var inst_36523 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36524 = figwheel.client.heads_up.display_warning.call(null,inst_36523);
var state_36560__$1 = (function (){var statearr_36582 = state_36560;
(statearr_36582[(11)] = inst_36522);

return statearr_36582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(29),inst_36524);
} else {
if((state_val_36561 === (25))){
var inst_36520 = figwheel.client.heads_up.clear.call(null);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(28),inst_36520);
} else {
if((state_val_36561 === (34))){
var inst_36541 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(37),inst_36541);
} else {
if((state_val_36561 === (17))){
var inst_36500 = (state_36560[(2)]);
var inst_36501 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36502 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36501);
var state_36560__$1 = (function (){var statearr_36583 = state_36560;
(statearr_36583[(12)] = inst_36500);

return statearr_36583;
})();
var statearr_36584_36629 = state_36560__$1;
(statearr_36584_36629[(2)] = inst_36502);

(statearr_36584_36629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (3))){
var inst_36492 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36492)){
var statearr_36585_36630 = state_36560__$1;
(statearr_36585_36630[(1)] = (13));

} else {
var statearr_36586_36631 = state_36560__$1;
(statearr_36586_36631[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (12))){
var inst_36488 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36587_36632 = state_36560__$1;
(statearr_36587_36632[(2)] = inst_36488);

(statearr_36587_36632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (2))){
var inst_36475 = (state_36560[(10)]);
var inst_36475__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36560__$1 = (function (){var statearr_36588 = state_36560;
(statearr_36588[(10)] = inst_36475__$1);

return statearr_36588;
})();
if(cljs.core.truth_(inst_36475__$1)){
var statearr_36589_36633 = state_36560__$1;
(statearr_36589_36633[(1)] = (5));

} else {
var statearr_36590_36634 = state_36560__$1;
(statearr_36590_36634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (23))){
var inst_36518 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36518)){
var statearr_36591_36635 = state_36560__$1;
(statearr_36591_36635[(1)] = (25));

} else {
var statearr_36592_36636 = state_36560__$1;
(statearr_36592_36636[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (35))){
var state_36560__$1 = state_36560;
var statearr_36593_36637 = state_36560__$1;
(statearr_36593_36637[(2)] = null);

(statearr_36593_36637[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (19))){
var inst_36513 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36513)){
var statearr_36594_36638 = state_36560__$1;
(statearr_36594_36638[(1)] = (22));

} else {
var statearr_36595_36639 = state_36560__$1;
(statearr_36595_36639[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (11))){
var inst_36484 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36596_36640 = state_36560__$1;
(statearr_36596_36640[(2)] = inst_36484);

(statearr_36596_36640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (9))){
var inst_36486 = figwheel.client.heads_up.clear.call(null);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(12),inst_36486);
} else {
if((state_val_36561 === (5))){
var inst_36477 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36560__$1 = state_36560;
var statearr_36597_36641 = state_36560__$1;
(statearr_36597_36641[(2)] = inst_36477);

(statearr_36597_36641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (14))){
var inst_36504 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36504)){
var statearr_36598_36642 = state_36560__$1;
(statearr_36598_36642[(1)] = (18));

} else {
var statearr_36599_36643 = state_36560__$1;
(statearr_36599_36643[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (26))){
var inst_36530 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36560__$1 = state_36560;
if(cljs.core.truth_(inst_36530)){
var statearr_36600_36644 = state_36560__$1;
(statearr_36600_36644[(1)] = (30));

} else {
var statearr_36601_36645 = state_36560__$1;
(statearr_36601_36645[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (16))){
var inst_36496 = (state_36560[(2)]);
var inst_36497 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36498 = figwheel.client.heads_up.display_exception.call(null,inst_36497);
var state_36560__$1 = (function (){var statearr_36602 = state_36560;
(statearr_36602[(13)] = inst_36496);

return statearr_36602;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(17),inst_36498);
} else {
if((state_val_36561 === (30))){
var inst_36532 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36533 = figwheel.client.heads_up.display_warning.call(null,inst_36532);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(33),inst_36533);
} else {
if((state_val_36561 === (10))){
var inst_36490 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36603_36646 = state_36560__$1;
(statearr_36603_36646[(2)] = inst_36490);

(statearr_36603_36646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (18))){
var inst_36506 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36507 = figwheel.client.heads_up.display_exception.call(null,inst_36506);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(21),inst_36507);
} else {
if((state_val_36561 === (37))){
var inst_36543 = (state_36560[(2)]);
var state_36560__$1 = state_36560;
var statearr_36604_36647 = state_36560__$1;
(statearr_36604_36647[(2)] = inst_36543);

(statearr_36604_36647[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36561 === (8))){
var inst_36482 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36560__$1 = state_36560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36560__$1,(11),inst_36482);
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
});})(c__27882__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27770__auto__,c__27882__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto____0 = (function (){
var statearr_36608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36608[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto__);

(statearr_36608[(1)] = (1));

return statearr_36608;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto____1 = (function (state_36560){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_36560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e36609){if((e36609 instanceof Object)){
var ex__27774__auto__ = e36609;
var statearr_36610_36648 = state_36560;
(statearr_36610_36648[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36649 = state_36560;
state_36560 = G__36649;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto__ = function(state_36560){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto____1.call(this,state_36560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__,msg_hist,msg_names,msg))
})();
var state__27884__auto__ = (function (){var statearr_36611 = f__27883__auto__.call(null);
(statearr_36611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_36611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__,msg_hist,msg_names,msg))
);

return c__27882__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27882__auto___36712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___36712,ch){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___36712,ch){
return (function (state_36695){
var state_val_36696 = (state_36695[(1)]);
if((state_val_36696 === (1))){
var state_36695__$1 = state_36695;
var statearr_36697_36713 = state_36695__$1;
(statearr_36697_36713[(2)] = null);

(statearr_36697_36713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (2))){
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36695__$1,(4),ch);
} else {
if((state_val_36696 === (3))){
var inst_36693 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36695__$1,inst_36693);
} else {
if((state_val_36696 === (4))){
var inst_36683 = (state_36695[(7)]);
var inst_36683__$1 = (state_36695[(2)]);
var state_36695__$1 = (function (){var statearr_36698 = state_36695;
(statearr_36698[(7)] = inst_36683__$1);

return statearr_36698;
})();
if(cljs.core.truth_(inst_36683__$1)){
var statearr_36699_36714 = state_36695__$1;
(statearr_36699_36714[(1)] = (5));

} else {
var statearr_36700_36715 = state_36695__$1;
(statearr_36700_36715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (5))){
var inst_36683 = (state_36695[(7)]);
var inst_36685 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36683);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36695__$1,(8),inst_36685);
} else {
if((state_val_36696 === (6))){
var state_36695__$1 = state_36695;
var statearr_36701_36716 = state_36695__$1;
(statearr_36701_36716[(2)] = null);

(statearr_36701_36716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (7))){
var inst_36691 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36702_36717 = state_36695__$1;
(statearr_36702_36717[(2)] = inst_36691);

(statearr_36702_36717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (8))){
var inst_36687 = (state_36695[(2)]);
var state_36695__$1 = (function (){var statearr_36703 = state_36695;
(statearr_36703[(8)] = inst_36687);

return statearr_36703;
})();
var statearr_36704_36718 = state_36695__$1;
(statearr_36704_36718[(2)] = null);

(statearr_36704_36718[(1)] = (2));


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
});})(c__27882__auto___36712,ch))
;
return ((function (switch__27770__auto__,c__27882__auto___36712,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27771__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27771__auto____0 = (function (){
var statearr_36708 = [null,null,null,null,null,null,null,null,null];
(statearr_36708[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27771__auto__);

(statearr_36708[(1)] = (1));

return statearr_36708;
});
var figwheel$client$heads_up_plugin_$_state_machine__27771__auto____1 = (function (state_36695){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_36695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e36709){if((e36709 instanceof Object)){
var ex__27774__auto__ = e36709;
var statearr_36710_36719 = state_36695;
(statearr_36710_36719[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36720 = state_36695;
state_36695 = G__36720;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27771__auto__ = function(state_36695){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27771__auto____1.call(this,state_36695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27771__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27771__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___36712,ch))
})();
var state__27884__auto__ = (function (){var statearr_36711 = f__27883__auto__.call(null);
(statearr_36711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___36712);

return statearr_36711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___36712,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__){
return (function (state_36741){
var state_val_36742 = (state_36741[(1)]);
if((state_val_36742 === (1))){
var inst_36736 = cljs.core.async.timeout.call(null,(3000));
var state_36741__$1 = state_36741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36741__$1,(2),inst_36736);
} else {
if((state_val_36742 === (2))){
var inst_36738 = (state_36741[(2)]);
var inst_36739 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36741__$1 = (function (){var statearr_36743 = state_36741;
(statearr_36743[(7)] = inst_36738);

return statearr_36743;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36741__$1,inst_36739);
} else {
return null;
}
}
});})(c__27882__auto__))
;
return ((function (switch__27770__auto__,c__27882__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27771__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27771__auto____0 = (function (){
var statearr_36747 = [null,null,null,null,null,null,null,null];
(statearr_36747[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27771__auto__);

(statearr_36747[(1)] = (1));

return statearr_36747;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27771__auto____1 = (function (state_36741){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_36741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e36748){if((e36748 instanceof Object)){
var ex__27774__auto__ = e36748;
var statearr_36749_36751 = state_36741;
(statearr_36749_36751[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36752 = state_36741;
state_36741 = G__36752;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27771__auto__ = function(state_36741){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27771__auto____1.call(this,state_36741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27771__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27771__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__))
})();
var state__27884__auto__ = (function (){var statearr_36750 = f__27883__auto__.call(null);
(statearr_36750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_36750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__))
);

return c__27882__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36775){
var state_val_36776 = (state_36775[(1)]);
if((state_val_36776 === (1))){
var inst_36769 = cljs.core.async.timeout.call(null,(2000));
var state_36775__$1 = state_36775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36775__$1,(2),inst_36769);
} else {
if((state_val_36776 === (2))){
var inst_36771 = (state_36775[(2)]);
var inst_36772 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36773 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36772);
var state_36775__$1 = (function (){var statearr_36777 = state_36775;
(statearr_36777[(7)] = inst_36771);

return statearr_36777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36775__$1,inst_36773);
} else {
return null;
}
}
});})(c__27882__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27770__auto__,c__27882__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto____0 = (function (){
var statearr_36781 = [null,null,null,null,null,null,null,null];
(statearr_36781[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto__);

(statearr_36781[(1)] = (1));

return statearr_36781;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto____1 = (function (state_36775){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_36775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e36782){if((e36782 instanceof Object)){
var ex__27774__auto__ = e36782;
var statearr_36783_36785 = state_36775;
(statearr_36783_36785[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36786 = state_36775;
state_36775 = G__36786;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto__ = function(state_36775){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto____1.call(this,state_36775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27884__auto__ = (function (){var statearr_36784 = f__27883__auto__.call(null);
(statearr_36784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_36784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__,figwheel_version,temp__4657__auto__))
);

return c__27882__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36787){
var map__36791 = p__36787;
var map__36791__$1 = ((((!((map__36791 == null)))?((((map__36791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36791):map__36791);
var file = cljs.core.get.call(null,map__36791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36791__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36791__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36793 = "";
var G__36793__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36793),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36793);
var G__36793__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36793__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36793__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = line;
if(cljs.core.truth_(and__24748__auto__)){
return column;
} else {
return and__24748__auto__;
}
})())){
return [cljs.core.str(G__36793__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36793__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36794){
var map__36801 = p__36794;
var map__36801__$1 = ((((!((map__36801 == null)))?((((map__36801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36801):map__36801);
var ed = map__36801__$1;
var formatted_exception = cljs.core.get.call(null,map__36801__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36801__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36801__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36803_36807 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36804_36808 = null;
var count__36805_36809 = (0);
var i__36806_36810 = (0);
while(true){
if((i__36806_36810 < count__36805_36809)){
var msg_36811 = cljs.core._nth.call(null,chunk__36804_36808,i__36806_36810);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36811);

var G__36812 = seq__36803_36807;
var G__36813 = chunk__36804_36808;
var G__36814 = count__36805_36809;
var G__36815 = (i__36806_36810 + (1));
seq__36803_36807 = G__36812;
chunk__36804_36808 = G__36813;
count__36805_36809 = G__36814;
i__36806_36810 = G__36815;
continue;
} else {
var temp__4657__auto___36816 = cljs.core.seq.call(null,seq__36803_36807);
if(temp__4657__auto___36816){
var seq__36803_36817__$1 = temp__4657__auto___36816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36803_36817__$1)){
var c__25571__auto___36818 = cljs.core.chunk_first.call(null,seq__36803_36817__$1);
var G__36819 = cljs.core.chunk_rest.call(null,seq__36803_36817__$1);
var G__36820 = c__25571__auto___36818;
var G__36821 = cljs.core.count.call(null,c__25571__auto___36818);
var G__36822 = (0);
seq__36803_36807 = G__36819;
chunk__36804_36808 = G__36820;
count__36805_36809 = G__36821;
i__36806_36810 = G__36822;
continue;
} else {
var msg_36823 = cljs.core.first.call(null,seq__36803_36817__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36823);

var G__36824 = cljs.core.next.call(null,seq__36803_36817__$1);
var G__36825 = null;
var G__36826 = (0);
var G__36827 = (0);
seq__36803_36807 = G__36824;
chunk__36804_36808 = G__36825;
count__36805_36809 = G__36826;
i__36806_36810 = G__36827;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36828){
var map__36831 = p__36828;
var map__36831__$1 = ((((!((map__36831 == null)))?((((map__36831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36831):map__36831);
var w = map__36831__$1;
var message = cljs.core.get.call(null,map__36831__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24748__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24748__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36843 = cljs.core.seq.call(null,plugins);
var chunk__36844 = null;
var count__36845 = (0);
var i__36846 = (0);
while(true){
if((i__36846 < count__36845)){
var vec__36847 = cljs.core._nth.call(null,chunk__36844,i__36846);
var k = cljs.core.nth.call(null,vec__36847,(0),null);
var plugin = cljs.core.nth.call(null,vec__36847,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36853 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36843,chunk__36844,count__36845,i__36846,pl_36853,vec__36847,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36853.call(null,msg_hist);
});})(seq__36843,chunk__36844,count__36845,i__36846,pl_36853,vec__36847,k,plugin))
);
} else {
}

var G__36854 = seq__36843;
var G__36855 = chunk__36844;
var G__36856 = count__36845;
var G__36857 = (i__36846 + (1));
seq__36843 = G__36854;
chunk__36844 = G__36855;
count__36845 = G__36856;
i__36846 = G__36857;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36843);
if(temp__4657__auto__){
var seq__36843__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36843__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__36843__$1);
var G__36858 = cljs.core.chunk_rest.call(null,seq__36843__$1);
var G__36859 = c__25571__auto__;
var G__36860 = cljs.core.count.call(null,c__25571__auto__);
var G__36861 = (0);
seq__36843 = G__36858;
chunk__36844 = G__36859;
count__36845 = G__36860;
i__36846 = G__36861;
continue;
} else {
var vec__36850 = cljs.core.first.call(null,seq__36843__$1);
var k = cljs.core.nth.call(null,vec__36850,(0),null);
var plugin = cljs.core.nth.call(null,vec__36850,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36862 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36843,chunk__36844,count__36845,i__36846,pl_36862,vec__36850,k,plugin,seq__36843__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36862.call(null,msg_hist);
});})(seq__36843,chunk__36844,count__36845,i__36846,pl_36862,vec__36850,k,plugin,seq__36843__$1,temp__4657__auto__))
);
} else {
}

var G__36863 = cljs.core.next.call(null,seq__36843__$1);
var G__36864 = null;
var G__36865 = (0);
var G__36866 = (0);
seq__36843 = G__36863;
chunk__36844 = G__36864;
count__36845 = G__36865;
i__36846 = G__36866;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36867 = [];
var len__25835__auto___36874 = arguments.length;
var i__25836__auto___36875 = (0);
while(true){
if((i__25836__auto___36875 < len__25835__auto___36874)){
args36867.push((arguments[i__25836__auto___36875]));

var G__36876 = (i__25836__auto___36875 + (1));
i__25836__auto___36875 = G__36876;
continue;
} else {
}
break;
}

var G__36869 = args36867.length;
switch (G__36869) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36867.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36870_36878 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36871_36879 = null;
var count__36872_36880 = (0);
var i__36873_36881 = (0);
while(true){
if((i__36873_36881 < count__36872_36880)){
var msg_36882 = cljs.core._nth.call(null,chunk__36871_36879,i__36873_36881);
figwheel.client.socket.handle_incoming_message.call(null,msg_36882);

var G__36883 = seq__36870_36878;
var G__36884 = chunk__36871_36879;
var G__36885 = count__36872_36880;
var G__36886 = (i__36873_36881 + (1));
seq__36870_36878 = G__36883;
chunk__36871_36879 = G__36884;
count__36872_36880 = G__36885;
i__36873_36881 = G__36886;
continue;
} else {
var temp__4657__auto___36887 = cljs.core.seq.call(null,seq__36870_36878);
if(temp__4657__auto___36887){
var seq__36870_36888__$1 = temp__4657__auto___36887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36870_36888__$1)){
var c__25571__auto___36889 = cljs.core.chunk_first.call(null,seq__36870_36888__$1);
var G__36890 = cljs.core.chunk_rest.call(null,seq__36870_36888__$1);
var G__36891 = c__25571__auto___36889;
var G__36892 = cljs.core.count.call(null,c__25571__auto___36889);
var G__36893 = (0);
seq__36870_36878 = G__36890;
chunk__36871_36879 = G__36891;
count__36872_36880 = G__36892;
i__36873_36881 = G__36893;
continue;
} else {
var msg_36894 = cljs.core.first.call(null,seq__36870_36888__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36894);

var G__36895 = cljs.core.next.call(null,seq__36870_36888__$1);
var G__36896 = null;
var G__36897 = (0);
var G__36898 = (0);
seq__36870_36878 = G__36895;
chunk__36871_36879 = G__36896;
count__36872_36880 = G__36897;
i__36873_36881 = G__36898;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25842__auto__ = [];
var len__25835__auto___36903 = arguments.length;
var i__25836__auto___36904 = (0);
while(true){
if((i__25836__auto___36904 < len__25835__auto___36903)){
args__25842__auto__.push((arguments[i__25836__auto___36904]));

var G__36905 = (i__25836__auto___36904 + (1));
i__25836__auto___36904 = G__36905;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36900){
var map__36901 = p__36900;
var map__36901__$1 = ((((!((map__36901 == null)))?((((map__36901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36901):map__36901);
var opts = map__36901__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36899){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36899));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36907){if((e36907 instanceof Error)){
var e = e36907;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36907;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36911){
var map__36912 = p__36911;
var map__36912__$1 = ((((!((map__36912 == null)))?((((map__36912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36912):map__36912);
var msg_name = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1478134563177