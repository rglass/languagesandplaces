// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24760__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24760__auto__){
return or__24760__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24760__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31274_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31274_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31279 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31280 = null;
var count__31281 = (0);
var i__31282 = (0);
while(true){
if((i__31282 < count__31281)){
var n = cljs.core._nth.call(null,chunk__31280,i__31282);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31283 = seq__31279;
var G__31284 = chunk__31280;
var G__31285 = count__31281;
var G__31286 = (i__31282 + (1));
seq__31279 = G__31283;
chunk__31280 = G__31284;
count__31281 = G__31285;
i__31282 = G__31286;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31279);
if(temp__4657__auto__){
var seq__31279__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31279__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__31279__$1);
var G__31287 = cljs.core.chunk_rest.call(null,seq__31279__$1);
var G__31288 = c__25571__auto__;
var G__31289 = cljs.core.count.call(null,c__25571__auto__);
var G__31290 = (0);
seq__31279 = G__31287;
chunk__31280 = G__31288;
count__31281 = G__31289;
i__31282 = G__31290;
continue;
} else {
var n = cljs.core.first.call(null,seq__31279__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31291 = cljs.core.next.call(null,seq__31279__$1);
var G__31292 = null;
var G__31293 = (0);
var G__31294 = (0);
seq__31279 = G__31291;
chunk__31280 = G__31292;
count__31281 = G__31293;
i__31282 = G__31294;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31345_31356 = cljs.core.seq.call(null,deps);
var chunk__31346_31357 = null;
var count__31347_31358 = (0);
var i__31348_31359 = (0);
while(true){
if((i__31348_31359 < count__31347_31358)){
var dep_31360 = cljs.core._nth.call(null,chunk__31346_31357,i__31348_31359);
topo_sort_helper_STAR_.call(null,dep_31360,(depth + (1)),state);

var G__31361 = seq__31345_31356;
var G__31362 = chunk__31346_31357;
var G__31363 = count__31347_31358;
var G__31364 = (i__31348_31359 + (1));
seq__31345_31356 = G__31361;
chunk__31346_31357 = G__31362;
count__31347_31358 = G__31363;
i__31348_31359 = G__31364;
continue;
} else {
var temp__4657__auto___31365 = cljs.core.seq.call(null,seq__31345_31356);
if(temp__4657__auto___31365){
var seq__31345_31366__$1 = temp__4657__auto___31365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31345_31366__$1)){
var c__25571__auto___31367 = cljs.core.chunk_first.call(null,seq__31345_31366__$1);
var G__31368 = cljs.core.chunk_rest.call(null,seq__31345_31366__$1);
var G__31369 = c__25571__auto___31367;
var G__31370 = cljs.core.count.call(null,c__25571__auto___31367);
var G__31371 = (0);
seq__31345_31356 = G__31368;
chunk__31346_31357 = G__31369;
count__31347_31358 = G__31370;
i__31348_31359 = G__31371;
continue;
} else {
var dep_31372 = cljs.core.first.call(null,seq__31345_31366__$1);
topo_sort_helper_STAR_.call(null,dep_31372,(depth + (1)),state);

var G__31373 = cljs.core.next.call(null,seq__31345_31366__$1);
var G__31374 = null;
var G__31375 = (0);
var G__31376 = (0);
seq__31345_31356 = G__31373;
chunk__31346_31357 = G__31374;
count__31347_31358 = G__31375;
i__31348_31359 = G__31376;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31349){
var vec__31353 = p__31349;
var seq__31354 = cljs.core.seq.call(null,vec__31353);
var first__31355 = cljs.core.first.call(null,seq__31354);
var seq__31354__$1 = cljs.core.next.call(null,seq__31354);
var x = first__31355;
var xs = seq__31354__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31353,seq__31354,first__31355,seq__31354__$1,x,xs,get_deps__$1){
return (function (p1__31295_SHARP_){
return clojure.set.difference.call(null,p1__31295_SHARP_,x);
});})(vec__31353,seq__31354,first__31355,seq__31354__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31389 = cljs.core.seq.call(null,provides);
var chunk__31390 = null;
var count__31391 = (0);
var i__31392 = (0);
while(true){
if((i__31392 < count__31391)){
var prov = cljs.core._nth.call(null,chunk__31390,i__31392);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31393_31401 = cljs.core.seq.call(null,requires);
var chunk__31394_31402 = null;
var count__31395_31403 = (0);
var i__31396_31404 = (0);
while(true){
if((i__31396_31404 < count__31395_31403)){
var req_31405 = cljs.core._nth.call(null,chunk__31394_31402,i__31396_31404);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31405,prov);

var G__31406 = seq__31393_31401;
var G__31407 = chunk__31394_31402;
var G__31408 = count__31395_31403;
var G__31409 = (i__31396_31404 + (1));
seq__31393_31401 = G__31406;
chunk__31394_31402 = G__31407;
count__31395_31403 = G__31408;
i__31396_31404 = G__31409;
continue;
} else {
var temp__4657__auto___31410 = cljs.core.seq.call(null,seq__31393_31401);
if(temp__4657__auto___31410){
var seq__31393_31411__$1 = temp__4657__auto___31410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31393_31411__$1)){
var c__25571__auto___31412 = cljs.core.chunk_first.call(null,seq__31393_31411__$1);
var G__31413 = cljs.core.chunk_rest.call(null,seq__31393_31411__$1);
var G__31414 = c__25571__auto___31412;
var G__31415 = cljs.core.count.call(null,c__25571__auto___31412);
var G__31416 = (0);
seq__31393_31401 = G__31413;
chunk__31394_31402 = G__31414;
count__31395_31403 = G__31415;
i__31396_31404 = G__31416;
continue;
} else {
var req_31417 = cljs.core.first.call(null,seq__31393_31411__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31417,prov);

var G__31418 = cljs.core.next.call(null,seq__31393_31411__$1);
var G__31419 = null;
var G__31420 = (0);
var G__31421 = (0);
seq__31393_31401 = G__31418;
chunk__31394_31402 = G__31419;
count__31395_31403 = G__31420;
i__31396_31404 = G__31421;
continue;
}
} else {
}
}
break;
}

var G__31422 = seq__31389;
var G__31423 = chunk__31390;
var G__31424 = count__31391;
var G__31425 = (i__31392 + (1));
seq__31389 = G__31422;
chunk__31390 = G__31423;
count__31391 = G__31424;
i__31392 = G__31425;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31389);
if(temp__4657__auto__){
var seq__31389__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31389__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__31389__$1);
var G__31426 = cljs.core.chunk_rest.call(null,seq__31389__$1);
var G__31427 = c__25571__auto__;
var G__31428 = cljs.core.count.call(null,c__25571__auto__);
var G__31429 = (0);
seq__31389 = G__31426;
chunk__31390 = G__31427;
count__31391 = G__31428;
i__31392 = G__31429;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31389__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31397_31430 = cljs.core.seq.call(null,requires);
var chunk__31398_31431 = null;
var count__31399_31432 = (0);
var i__31400_31433 = (0);
while(true){
if((i__31400_31433 < count__31399_31432)){
var req_31434 = cljs.core._nth.call(null,chunk__31398_31431,i__31400_31433);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31434,prov);

var G__31435 = seq__31397_31430;
var G__31436 = chunk__31398_31431;
var G__31437 = count__31399_31432;
var G__31438 = (i__31400_31433 + (1));
seq__31397_31430 = G__31435;
chunk__31398_31431 = G__31436;
count__31399_31432 = G__31437;
i__31400_31433 = G__31438;
continue;
} else {
var temp__4657__auto___31439__$1 = cljs.core.seq.call(null,seq__31397_31430);
if(temp__4657__auto___31439__$1){
var seq__31397_31440__$1 = temp__4657__auto___31439__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31397_31440__$1)){
var c__25571__auto___31441 = cljs.core.chunk_first.call(null,seq__31397_31440__$1);
var G__31442 = cljs.core.chunk_rest.call(null,seq__31397_31440__$1);
var G__31443 = c__25571__auto___31441;
var G__31444 = cljs.core.count.call(null,c__25571__auto___31441);
var G__31445 = (0);
seq__31397_31430 = G__31442;
chunk__31398_31431 = G__31443;
count__31399_31432 = G__31444;
i__31400_31433 = G__31445;
continue;
} else {
var req_31446 = cljs.core.first.call(null,seq__31397_31440__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31446,prov);

var G__31447 = cljs.core.next.call(null,seq__31397_31440__$1);
var G__31448 = null;
var G__31449 = (0);
var G__31450 = (0);
seq__31397_31430 = G__31447;
chunk__31398_31431 = G__31448;
count__31399_31432 = G__31449;
i__31400_31433 = G__31450;
continue;
}
} else {
}
}
break;
}

var G__31451 = cljs.core.next.call(null,seq__31389__$1);
var G__31452 = null;
var G__31453 = (0);
var G__31454 = (0);
seq__31389 = G__31451;
chunk__31390 = G__31452;
count__31391 = G__31453;
i__31392 = G__31454;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31459_31463 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31460_31464 = null;
var count__31461_31465 = (0);
var i__31462_31466 = (0);
while(true){
if((i__31462_31466 < count__31461_31465)){
var ns_31467 = cljs.core._nth.call(null,chunk__31460_31464,i__31462_31466);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31467);

var G__31468 = seq__31459_31463;
var G__31469 = chunk__31460_31464;
var G__31470 = count__31461_31465;
var G__31471 = (i__31462_31466 + (1));
seq__31459_31463 = G__31468;
chunk__31460_31464 = G__31469;
count__31461_31465 = G__31470;
i__31462_31466 = G__31471;
continue;
} else {
var temp__4657__auto___31472 = cljs.core.seq.call(null,seq__31459_31463);
if(temp__4657__auto___31472){
var seq__31459_31473__$1 = temp__4657__auto___31472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31459_31473__$1)){
var c__25571__auto___31474 = cljs.core.chunk_first.call(null,seq__31459_31473__$1);
var G__31475 = cljs.core.chunk_rest.call(null,seq__31459_31473__$1);
var G__31476 = c__25571__auto___31474;
var G__31477 = cljs.core.count.call(null,c__25571__auto___31474);
var G__31478 = (0);
seq__31459_31463 = G__31475;
chunk__31460_31464 = G__31476;
count__31461_31465 = G__31477;
i__31462_31466 = G__31478;
continue;
} else {
var ns_31479 = cljs.core.first.call(null,seq__31459_31473__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31479);

var G__31480 = cljs.core.next.call(null,seq__31459_31473__$1);
var G__31481 = null;
var G__31482 = (0);
var G__31483 = (0);
seq__31459_31463 = G__31480;
chunk__31460_31464 = G__31481;
count__31461_31465 = G__31482;
i__31462_31466 = G__31483;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24760__auto__ = goog.require__;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31484__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31485__i = 0, G__31485__a = new Array(arguments.length -  0);
while (G__31485__i < G__31485__a.length) {G__31485__a[G__31485__i] = arguments[G__31485__i + 0]; ++G__31485__i;}
  args = new cljs.core.IndexedSeq(G__31485__a,0);
} 
return G__31484__delegate.call(this,args);};
G__31484.cljs$lang$maxFixedArity = 0;
G__31484.cljs$lang$applyTo = (function (arglist__31486){
var args = cljs.core.seq(arglist__31486);
return G__31484__delegate(args);
});
G__31484.cljs$core$IFn$_invoke$arity$variadic = G__31484__delegate;
return G__31484;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31488 = cljs.core._EQ_;
var expr__31489 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31488.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31489))){
var path_parts = ((function (pred__31488,expr__31489){
return (function (p1__31487_SHARP_){
return clojure.string.split.call(null,p1__31487_SHARP_,/[\/\\]/);
});})(pred__31488,expr__31489))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31488,expr__31489){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31491){if((e31491 instanceof Error)){
var e = e31491;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31491;

}
}})());
});
;})(path_parts,sep,root,pred__31488,expr__31489))
} else {
if(cljs.core.truth_(pred__31488.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31489))){
return ((function (pred__31488,expr__31489){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31488,expr__31489){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31488,expr__31489))
);

return deferred.addErrback(((function (deferred,pred__31488,expr__31489){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31488,expr__31489))
);
});
;})(pred__31488,expr__31489))
} else {
return ((function (pred__31488,expr__31489){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31488,expr__31489))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31492,callback){
var map__31495 = p__31492;
var map__31495__$1 = ((((!((map__31495 == null)))?((((map__31495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31495):map__31495);
var file_msg = map__31495__$1;
var request_url = cljs.core.get.call(null,map__31495__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31495,map__31495__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31495,map__31495__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__){
return (function (state_31519){
var state_val_31520 = (state_31519[(1)]);
if((state_val_31520 === (7))){
var inst_31515 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31521_31541 = state_31519__$1;
(statearr_31521_31541[(2)] = inst_31515);

(statearr_31521_31541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (1))){
var state_31519__$1 = state_31519;
var statearr_31522_31542 = state_31519__$1;
(statearr_31522_31542[(2)] = null);

(statearr_31522_31542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (4))){
var inst_31499 = (state_31519[(7)]);
var inst_31499__$1 = (state_31519[(2)]);
var state_31519__$1 = (function (){var statearr_31523 = state_31519;
(statearr_31523[(7)] = inst_31499__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31499__$1)){
var statearr_31524_31543 = state_31519__$1;
(statearr_31524_31543[(1)] = (5));

} else {
var statearr_31525_31544 = state_31519__$1;
(statearr_31525_31544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (6))){
var state_31519__$1 = state_31519;
var statearr_31526_31545 = state_31519__$1;
(statearr_31526_31545[(2)] = null);

(statearr_31526_31545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (3))){
var inst_31517 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31519__$1,inst_31517);
} else {
if((state_val_31520 === (2))){
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31519__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31520 === (11))){
var inst_31511 = (state_31519[(2)]);
var state_31519__$1 = (function (){var statearr_31527 = state_31519;
(statearr_31527[(8)] = inst_31511);

return statearr_31527;
})();
var statearr_31528_31546 = state_31519__$1;
(statearr_31528_31546[(2)] = null);

(statearr_31528_31546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (9))){
var inst_31505 = (state_31519[(9)]);
var inst_31503 = (state_31519[(10)]);
var inst_31507 = inst_31505.call(null,inst_31503);
var state_31519__$1 = state_31519;
var statearr_31529_31547 = state_31519__$1;
(statearr_31529_31547[(2)] = inst_31507);

(statearr_31529_31547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (5))){
var inst_31499 = (state_31519[(7)]);
var inst_31501 = figwheel.client.file_reloading.blocking_load.call(null,inst_31499);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31519__$1,(8),inst_31501);
} else {
if((state_val_31520 === (10))){
var inst_31503 = (state_31519[(10)]);
var inst_31509 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31503);
var state_31519__$1 = state_31519;
var statearr_31530_31548 = state_31519__$1;
(statearr_31530_31548[(2)] = inst_31509);

(statearr_31530_31548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (8))){
var inst_31505 = (state_31519[(9)]);
var inst_31499 = (state_31519[(7)]);
var inst_31503 = (state_31519[(2)]);
var inst_31504 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31505__$1 = cljs.core.get.call(null,inst_31504,inst_31499);
var state_31519__$1 = (function (){var statearr_31531 = state_31519;
(statearr_31531[(9)] = inst_31505__$1);

(statearr_31531[(10)] = inst_31503);

return statearr_31531;
})();
if(cljs.core.truth_(inst_31505__$1)){
var statearr_31532_31549 = state_31519__$1;
(statearr_31532_31549[(1)] = (9));

} else {
var statearr_31533_31550 = state_31519__$1;
(statearr_31533_31550[(1)] = (10));

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
});})(c__27882__auto__))
;
return ((function (switch__27770__auto__,c__27882__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27771__auto__ = null;
var figwheel$client$file_reloading$state_machine__27771__auto____0 = (function (){
var statearr_31537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31537[(0)] = figwheel$client$file_reloading$state_machine__27771__auto__);

(statearr_31537[(1)] = (1));

return statearr_31537;
});
var figwheel$client$file_reloading$state_machine__27771__auto____1 = (function (state_31519){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_31519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e31538){if((e31538 instanceof Object)){
var ex__27774__auto__ = e31538;
var statearr_31539_31551 = state_31519;
(statearr_31539_31551[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31552 = state_31519;
state_31519 = G__31552;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27771__auto__ = function(state_31519){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27771__auto____1.call(this,state_31519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27771__auto____0;
figwheel$client$file_reloading$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27771__auto____1;
return figwheel$client$file_reloading$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__))
})();
var state__27884__auto__ = (function (){var statearr_31540 = f__27883__auto__.call(null);
(statearr_31540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_31540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__))
);

return c__27882__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31553,callback){
var map__31556 = p__31553;
var map__31556__$1 = ((((!((map__31556 == null)))?((((map__31556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31556):map__31556);
var file_msg = map__31556__$1;
var namespace = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31556,map__31556__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31556,map__31556__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31558){
var map__31561 = p__31558;
var map__31561__$1 = ((((!((map__31561 == null)))?((((map__31561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31561):map__31561);
var file_msg = map__31561__$1;
var namespace = cljs.core.get.call(null,map__31561__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24748__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24748__auto__){
var or__24760__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto____$1)){
return or__24760__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24748__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31563,callback){
var map__31566 = p__31563;
var map__31566__$1 = ((((!((map__31566 == null)))?((((map__31566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31566):map__31566);
var file_msg = map__31566__$1;
var request_url = cljs.core.get.call(null,map__31566__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31566__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27882__auto___31670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___31670,out){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___31670,out){
return (function (state_31652){
var state_val_31653 = (state_31652[(1)]);
if((state_val_31653 === (1))){
var inst_31626 = cljs.core.seq.call(null,files);
var inst_31627 = cljs.core.first.call(null,inst_31626);
var inst_31628 = cljs.core.next.call(null,inst_31626);
var inst_31629 = files;
var state_31652__$1 = (function (){var statearr_31654 = state_31652;
(statearr_31654[(7)] = inst_31628);

(statearr_31654[(8)] = inst_31627);

(statearr_31654[(9)] = inst_31629);

return statearr_31654;
})();
var statearr_31655_31671 = state_31652__$1;
(statearr_31655_31671[(2)] = null);

(statearr_31655_31671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31653 === (2))){
var inst_31635 = (state_31652[(10)]);
var inst_31629 = (state_31652[(9)]);
var inst_31634 = cljs.core.seq.call(null,inst_31629);
var inst_31635__$1 = cljs.core.first.call(null,inst_31634);
var inst_31636 = cljs.core.next.call(null,inst_31634);
var inst_31637 = (inst_31635__$1 == null);
var inst_31638 = cljs.core.not.call(null,inst_31637);
var state_31652__$1 = (function (){var statearr_31656 = state_31652;
(statearr_31656[(11)] = inst_31636);

(statearr_31656[(10)] = inst_31635__$1);

return statearr_31656;
})();
if(inst_31638){
var statearr_31657_31672 = state_31652__$1;
(statearr_31657_31672[(1)] = (4));

} else {
var statearr_31658_31673 = state_31652__$1;
(statearr_31658_31673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31653 === (3))){
var inst_31650 = (state_31652[(2)]);
var state_31652__$1 = state_31652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31652__$1,inst_31650);
} else {
if((state_val_31653 === (4))){
var inst_31635 = (state_31652[(10)]);
var inst_31640 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31635);
var state_31652__$1 = state_31652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31652__$1,(7),inst_31640);
} else {
if((state_val_31653 === (5))){
var inst_31646 = cljs.core.async.close_BANG_.call(null,out);
var state_31652__$1 = state_31652;
var statearr_31659_31674 = state_31652__$1;
(statearr_31659_31674[(2)] = inst_31646);

(statearr_31659_31674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31653 === (6))){
var inst_31648 = (state_31652[(2)]);
var state_31652__$1 = state_31652;
var statearr_31660_31675 = state_31652__$1;
(statearr_31660_31675[(2)] = inst_31648);

(statearr_31660_31675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31653 === (7))){
var inst_31636 = (state_31652[(11)]);
var inst_31642 = (state_31652[(2)]);
var inst_31643 = cljs.core.async.put_BANG_.call(null,out,inst_31642);
var inst_31629 = inst_31636;
var state_31652__$1 = (function (){var statearr_31661 = state_31652;
(statearr_31661[(12)] = inst_31643);

(statearr_31661[(9)] = inst_31629);

return statearr_31661;
})();
var statearr_31662_31676 = state_31652__$1;
(statearr_31662_31676[(2)] = null);

(statearr_31662_31676[(1)] = (2));


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
});})(c__27882__auto___31670,out))
;
return ((function (switch__27770__auto__,c__27882__auto___31670,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____0 = (function (){
var statearr_31666 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31666[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__);

(statearr_31666[(1)] = (1));

return statearr_31666;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____1 = (function (state_31652){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_31652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e31667){if((e31667 instanceof Object)){
var ex__27774__auto__ = e31667;
var statearr_31668_31677 = state_31652;
(statearr_31668_31677[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31678 = state_31652;
state_31652 = G__31678;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__ = function(state_31652){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____1.call(this,state_31652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___31670,out))
})();
var state__27884__auto__ = (function (){var statearr_31669 = f__27883__auto__.call(null);
(statearr_31669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___31670);

return statearr_31669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___31670,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31679,opts){
var map__31683 = p__31679;
var map__31683__$1 = ((((!((map__31683 == null)))?((((map__31683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31683):map__31683);
var eval_body__$1 = cljs.core.get.call(null,map__31683__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31683__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24748__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24748__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24748__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31685){var e = e31685;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31686_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31686_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31695){
var vec__31696 = p__31695;
var k = cljs.core.nth.call(null,vec__31696,(0),null);
var v = cljs.core.nth.call(null,vec__31696,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31699){
var vec__31700 = p__31699;
var k = cljs.core.nth.call(null,vec__31700,(0),null);
var v = cljs.core.nth.call(null,vec__31700,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31706,p__31707){
var map__31954 = p__31706;
var map__31954__$1 = ((((!((map__31954 == null)))?((((map__31954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31954):map__31954);
var opts = map__31954__$1;
var before_jsload = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31954__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31955 = p__31707;
var map__31955__$1 = ((((!((map__31955 == null)))?((((map__31955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31955):map__31955);
var msg = map__31955__$1;
var files = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32108){
var state_val_32109 = (state_32108[(1)]);
if((state_val_32109 === (7))){
var inst_31969 = (state_32108[(7)]);
var inst_31971 = (state_32108[(8)]);
var inst_31970 = (state_32108[(9)]);
var inst_31972 = (state_32108[(10)]);
var inst_31977 = cljs.core._nth.call(null,inst_31970,inst_31972);
var inst_31978 = figwheel.client.file_reloading.eval_body.call(null,inst_31977,opts);
var inst_31979 = (inst_31972 + (1));
var tmp32110 = inst_31969;
var tmp32111 = inst_31971;
var tmp32112 = inst_31970;
var inst_31969__$1 = tmp32110;
var inst_31970__$1 = tmp32112;
var inst_31971__$1 = tmp32111;
var inst_31972__$1 = inst_31979;
var state_32108__$1 = (function (){var statearr_32113 = state_32108;
(statearr_32113[(7)] = inst_31969__$1);

(statearr_32113[(8)] = inst_31971__$1);

(statearr_32113[(9)] = inst_31970__$1);

(statearr_32113[(11)] = inst_31978);

(statearr_32113[(10)] = inst_31972__$1);

return statearr_32113;
})();
var statearr_32114_32200 = state_32108__$1;
(statearr_32114_32200[(2)] = null);

(statearr_32114_32200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (20))){
var inst_32012 = (state_32108[(12)]);
var inst_32020 = figwheel.client.file_reloading.sort_files.call(null,inst_32012);
var state_32108__$1 = state_32108;
var statearr_32115_32201 = state_32108__$1;
(statearr_32115_32201[(2)] = inst_32020);

(statearr_32115_32201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (27))){
var state_32108__$1 = state_32108;
var statearr_32116_32202 = state_32108__$1;
(statearr_32116_32202[(2)] = null);

(statearr_32116_32202[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (1))){
var inst_31961 = (state_32108[(13)]);
var inst_31958 = before_jsload.call(null,files);
var inst_31959 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31960 = (function (){return ((function (inst_31961,inst_31958,inst_31959,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31703_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31703_SHARP_);
});
;})(inst_31961,inst_31958,inst_31959,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31961__$1 = cljs.core.filter.call(null,inst_31960,files);
var inst_31962 = cljs.core.not_empty.call(null,inst_31961__$1);
var state_32108__$1 = (function (){var statearr_32117 = state_32108;
(statearr_32117[(14)] = inst_31958);

(statearr_32117[(15)] = inst_31959);

(statearr_32117[(13)] = inst_31961__$1);

return statearr_32117;
})();
if(cljs.core.truth_(inst_31962)){
var statearr_32118_32203 = state_32108__$1;
(statearr_32118_32203[(1)] = (2));

} else {
var statearr_32119_32204 = state_32108__$1;
(statearr_32119_32204[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (24))){
var state_32108__$1 = state_32108;
var statearr_32120_32205 = state_32108__$1;
(statearr_32120_32205[(2)] = null);

(statearr_32120_32205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (39))){
var inst_32062 = (state_32108[(16)]);
var state_32108__$1 = state_32108;
var statearr_32121_32206 = state_32108__$1;
(statearr_32121_32206[(2)] = inst_32062);

(statearr_32121_32206[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (46))){
var inst_32103 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32122_32207 = state_32108__$1;
(statearr_32122_32207[(2)] = inst_32103);

(statearr_32122_32207[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (4))){
var inst_32006 = (state_32108[(2)]);
var inst_32007 = cljs.core.List.EMPTY;
var inst_32008 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32007);
var inst_32009 = (function (){return ((function (inst_32006,inst_32007,inst_32008,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31704_SHARP_){
var and__24748__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31704_SHARP_);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31704_SHARP_));
} else {
return and__24748__auto__;
}
});
;})(inst_32006,inst_32007,inst_32008,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32010 = cljs.core.filter.call(null,inst_32009,files);
var inst_32011 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32012 = cljs.core.concat.call(null,inst_32010,inst_32011);
var state_32108__$1 = (function (){var statearr_32123 = state_32108;
(statearr_32123[(12)] = inst_32012);

(statearr_32123[(17)] = inst_32008);

(statearr_32123[(18)] = inst_32006);

return statearr_32123;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32124_32208 = state_32108__$1;
(statearr_32124_32208[(1)] = (16));

} else {
var statearr_32125_32209 = state_32108__$1;
(statearr_32125_32209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (15))){
var inst_31996 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32126_32210 = state_32108__$1;
(statearr_32126_32210[(2)] = inst_31996);

(statearr_32126_32210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (21))){
var inst_32022 = (state_32108[(19)]);
var inst_32022__$1 = (state_32108[(2)]);
var inst_32023 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32022__$1);
var state_32108__$1 = (function (){var statearr_32127 = state_32108;
(statearr_32127[(19)] = inst_32022__$1);

return statearr_32127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32108__$1,(22),inst_32023);
} else {
if((state_val_32109 === (31))){
var inst_32106 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32108__$1,inst_32106);
} else {
if((state_val_32109 === (32))){
var inst_32062 = (state_32108[(16)]);
var inst_32067 = inst_32062.cljs$lang$protocol_mask$partition0$;
var inst_32068 = (inst_32067 & (64));
var inst_32069 = inst_32062.cljs$core$ISeq$;
var inst_32070 = (inst_32068) || (inst_32069);
var state_32108__$1 = state_32108;
if(cljs.core.truth_(inst_32070)){
var statearr_32128_32211 = state_32108__$1;
(statearr_32128_32211[(1)] = (35));

} else {
var statearr_32129_32212 = state_32108__$1;
(statearr_32129_32212[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (40))){
var inst_32083 = (state_32108[(20)]);
var inst_32082 = (state_32108[(2)]);
var inst_32083__$1 = cljs.core.get.call(null,inst_32082,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32084 = cljs.core.get.call(null,inst_32082,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32085 = cljs.core.not_empty.call(null,inst_32083__$1);
var state_32108__$1 = (function (){var statearr_32130 = state_32108;
(statearr_32130[(21)] = inst_32084);

(statearr_32130[(20)] = inst_32083__$1);

return statearr_32130;
})();
if(cljs.core.truth_(inst_32085)){
var statearr_32131_32213 = state_32108__$1;
(statearr_32131_32213[(1)] = (41));

} else {
var statearr_32132_32214 = state_32108__$1;
(statearr_32132_32214[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (33))){
var state_32108__$1 = state_32108;
var statearr_32133_32215 = state_32108__$1;
(statearr_32133_32215[(2)] = false);

(statearr_32133_32215[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (13))){
var inst_31982 = (state_32108[(22)]);
var inst_31986 = cljs.core.chunk_first.call(null,inst_31982);
var inst_31987 = cljs.core.chunk_rest.call(null,inst_31982);
var inst_31988 = cljs.core.count.call(null,inst_31986);
var inst_31969 = inst_31987;
var inst_31970 = inst_31986;
var inst_31971 = inst_31988;
var inst_31972 = (0);
var state_32108__$1 = (function (){var statearr_32134 = state_32108;
(statearr_32134[(7)] = inst_31969);

(statearr_32134[(8)] = inst_31971);

(statearr_32134[(9)] = inst_31970);

(statearr_32134[(10)] = inst_31972);

return statearr_32134;
})();
var statearr_32135_32216 = state_32108__$1;
(statearr_32135_32216[(2)] = null);

(statearr_32135_32216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (22))){
var inst_32030 = (state_32108[(23)]);
var inst_32022 = (state_32108[(19)]);
var inst_32025 = (state_32108[(24)]);
var inst_32026 = (state_32108[(25)]);
var inst_32025__$1 = (state_32108[(2)]);
var inst_32026__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32025__$1);
var inst_32027 = (function (){var all_files = inst_32022;
var res_SINGLEQUOTE_ = inst_32025__$1;
var res = inst_32026__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32030,inst_32022,inst_32025,inst_32026,inst_32025__$1,inst_32026__$1,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31705_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31705_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32030,inst_32022,inst_32025,inst_32026,inst_32025__$1,inst_32026__$1,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32028 = cljs.core.filter.call(null,inst_32027,inst_32025__$1);
var inst_32029 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32030__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32029);
var inst_32031 = cljs.core.not_empty.call(null,inst_32030__$1);
var state_32108__$1 = (function (){var statearr_32136 = state_32108;
(statearr_32136[(23)] = inst_32030__$1);

(statearr_32136[(24)] = inst_32025__$1);

(statearr_32136[(26)] = inst_32028);

(statearr_32136[(25)] = inst_32026__$1);

return statearr_32136;
})();
if(cljs.core.truth_(inst_32031)){
var statearr_32137_32217 = state_32108__$1;
(statearr_32137_32217[(1)] = (23));

} else {
var statearr_32138_32218 = state_32108__$1;
(statearr_32138_32218[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (36))){
var state_32108__$1 = state_32108;
var statearr_32139_32219 = state_32108__$1;
(statearr_32139_32219[(2)] = false);

(statearr_32139_32219[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (41))){
var inst_32083 = (state_32108[(20)]);
var inst_32087 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32088 = cljs.core.map.call(null,inst_32087,inst_32083);
var inst_32089 = cljs.core.pr_str.call(null,inst_32088);
var inst_32090 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32089)].join('');
var inst_32091 = figwheel.client.utils.log.call(null,inst_32090);
var state_32108__$1 = state_32108;
var statearr_32140_32220 = state_32108__$1;
(statearr_32140_32220[(2)] = inst_32091);

(statearr_32140_32220[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (43))){
var inst_32084 = (state_32108[(21)]);
var inst_32094 = (state_32108[(2)]);
var inst_32095 = cljs.core.not_empty.call(null,inst_32084);
var state_32108__$1 = (function (){var statearr_32141 = state_32108;
(statearr_32141[(27)] = inst_32094);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32095)){
var statearr_32142_32221 = state_32108__$1;
(statearr_32142_32221[(1)] = (44));

} else {
var statearr_32143_32222 = state_32108__$1;
(statearr_32143_32222[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (29))){
var inst_32030 = (state_32108[(23)]);
var inst_32022 = (state_32108[(19)]);
var inst_32025 = (state_32108[(24)]);
var inst_32028 = (state_32108[(26)]);
var inst_32026 = (state_32108[(25)]);
var inst_32062 = (state_32108[(16)]);
var inst_32058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32061 = (function (){var all_files = inst_32022;
var res_SINGLEQUOTE_ = inst_32025;
var res = inst_32026;
var files_not_loaded = inst_32028;
var dependencies_that_loaded = inst_32030;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32030,inst_32022,inst_32025,inst_32028,inst_32026,inst_32062,inst_32058,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32060){
var map__32144 = p__32060;
var map__32144__$1 = ((((!((map__32144 == null)))?((((map__32144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32144):map__32144);
var namespace = cljs.core.get.call(null,map__32144__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32030,inst_32022,inst_32025,inst_32028,inst_32026,inst_32062,inst_32058,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32062__$1 = cljs.core.group_by.call(null,inst_32061,inst_32028);
var inst_32064 = (inst_32062__$1 == null);
var inst_32065 = cljs.core.not.call(null,inst_32064);
var state_32108__$1 = (function (){var statearr_32146 = state_32108;
(statearr_32146[(28)] = inst_32058);

(statearr_32146[(16)] = inst_32062__$1);

return statearr_32146;
})();
if(inst_32065){
var statearr_32147_32223 = state_32108__$1;
(statearr_32147_32223[(1)] = (32));

} else {
var statearr_32148_32224 = state_32108__$1;
(statearr_32148_32224[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (44))){
var inst_32084 = (state_32108[(21)]);
var inst_32097 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32084);
var inst_32098 = cljs.core.pr_str.call(null,inst_32097);
var inst_32099 = [cljs.core.str("not required: "),cljs.core.str(inst_32098)].join('');
var inst_32100 = figwheel.client.utils.log.call(null,inst_32099);
var state_32108__$1 = state_32108;
var statearr_32149_32225 = state_32108__$1;
(statearr_32149_32225[(2)] = inst_32100);

(statearr_32149_32225[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (6))){
var inst_32003 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32150_32226 = state_32108__$1;
(statearr_32150_32226[(2)] = inst_32003);

(statearr_32150_32226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (28))){
var inst_32028 = (state_32108[(26)]);
var inst_32055 = (state_32108[(2)]);
var inst_32056 = cljs.core.not_empty.call(null,inst_32028);
var state_32108__$1 = (function (){var statearr_32151 = state_32108;
(statearr_32151[(29)] = inst_32055);

return statearr_32151;
})();
if(cljs.core.truth_(inst_32056)){
var statearr_32152_32227 = state_32108__$1;
(statearr_32152_32227[(1)] = (29));

} else {
var statearr_32153_32228 = state_32108__$1;
(statearr_32153_32228[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (25))){
var inst_32026 = (state_32108[(25)]);
var inst_32042 = (state_32108[(2)]);
var inst_32043 = cljs.core.not_empty.call(null,inst_32026);
var state_32108__$1 = (function (){var statearr_32154 = state_32108;
(statearr_32154[(30)] = inst_32042);

return statearr_32154;
})();
if(cljs.core.truth_(inst_32043)){
var statearr_32155_32229 = state_32108__$1;
(statearr_32155_32229[(1)] = (26));

} else {
var statearr_32156_32230 = state_32108__$1;
(statearr_32156_32230[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (34))){
var inst_32077 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
if(cljs.core.truth_(inst_32077)){
var statearr_32157_32231 = state_32108__$1;
(statearr_32157_32231[(1)] = (38));

} else {
var statearr_32158_32232 = state_32108__$1;
(statearr_32158_32232[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (17))){
var state_32108__$1 = state_32108;
var statearr_32159_32233 = state_32108__$1;
(statearr_32159_32233[(2)] = recompile_dependents);

(statearr_32159_32233[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (3))){
var state_32108__$1 = state_32108;
var statearr_32160_32234 = state_32108__$1;
(statearr_32160_32234[(2)] = null);

(statearr_32160_32234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (12))){
var inst_31999 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32161_32235 = state_32108__$1;
(statearr_32161_32235[(2)] = inst_31999);

(statearr_32161_32235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (2))){
var inst_31961 = (state_32108[(13)]);
var inst_31968 = cljs.core.seq.call(null,inst_31961);
var inst_31969 = inst_31968;
var inst_31970 = null;
var inst_31971 = (0);
var inst_31972 = (0);
var state_32108__$1 = (function (){var statearr_32162 = state_32108;
(statearr_32162[(7)] = inst_31969);

(statearr_32162[(8)] = inst_31971);

(statearr_32162[(9)] = inst_31970);

(statearr_32162[(10)] = inst_31972);

return statearr_32162;
})();
var statearr_32163_32236 = state_32108__$1;
(statearr_32163_32236[(2)] = null);

(statearr_32163_32236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (23))){
var inst_32030 = (state_32108[(23)]);
var inst_32022 = (state_32108[(19)]);
var inst_32025 = (state_32108[(24)]);
var inst_32028 = (state_32108[(26)]);
var inst_32026 = (state_32108[(25)]);
var inst_32033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32035 = (function (){var all_files = inst_32022;
var res_SINGLEQUOTE_ = inst_32025;
var res = inst_32026;
var files_not_loaded = inst_32028;
var dependencies_that_loaded = inst_32030;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32030,inst_32022,inst_32025,inst_32028,inst_32026,inst_32033,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32034){
var map__32164 = p__32034;
var map__32164__$1 = ((((!((map__32164 == null)))?((((map__32164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32164):map__32164);
var request_url = cljs.core.get.call(null,map__32164__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32030,inst_32022,inst_32025,inst_32028,inst_32026,inst_32033,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32036 = cljs.core.reverse.call(null,inst_32030);
var inst_32037 = cljs.core.map.call(null,inst_32035,inst_32036);
var inst_32038 = cljs.core.pr_str.call(null,inst_32037);
var inst_32039 = figwheel.client.utils.log.call(null,inst_32038);
var state_32108__$1 = (function (){var statearr_32166 = state_32108;
(statearr_32166[(31)] = inst_32033);

return statearr_32166;
})();
var statearr_32167_32237 = state_32108__$1;
(statearr_32167_32237[(2)] = inst_32039);

(statearr_32167_32237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (35))){
var state_32108__$1 = state_32108;
var statearr_32168_32238 = state_32108__$1;
(statearr_32168_32238[(2)] = true);

(statearr_32168_32238[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (19))){
var inst_32012 = (state_32108[(12)]);
var inst_32018 = figwheel.client.file_reloading.expand_files.call(null,inst_32012);
var state_32108__$1 = state_32108;
var statearr_32169_32239 = state_32108__$1;
(statearr_32169_32239[(2)] = inst_32018);

(statearr_32169_32239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (11))){
var state_32108__$1 = state_32108;
var statearr_32170_32240 = state_32108__$1;
(statearr_32170_32240[(2)] = null);

(statearr_32170_32240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (9))){
var inst_32001 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32171_32241 = state_32108__$1;
(statearr_32171_32241[(2)] = inst_32001);

(statearr_32171_32241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (5))){
var inst_31971 = (state_32108[(8)]);
var inst_31972 = (state_32108[(10)]);
var inst_31974 = (inst_31972 < inst_31971);
var inst_31975 = inst_31974;
var state_32108__$1 = state_32108;
if(cljs.core.truth_(inst_31975)){
var statearr_32172_32242 = state_32108__$1;
(statearr_32172_32242[(1)] = (7));

} else {
var statearr_32173_32243 = state_32108__$1;
(statearr_32173_32243[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (14))){
var inst_31982 = (state_32108[(22)]);
var inst_31991 = cljs.core.first.call(null,inst_31982);
var inst_31992 = figwheel.client.file_reloading.eval_body.call(null,inst_31991,opts);
var inst_31993 = cljs.core.next.call(null,inst_31982);
var inst_31969 = inst_31993;
var inst_31970 = null;
var inst_31971 = (0);
var inst_31972 = (0);
var state_32108__$1 = (function (){var statearr_32174 = state_32108;
(statearr_32174[(7)] = inst_31969);

(statearr_32174[(32)] = inst_31992);

(statearr_32174[(8)] = inst_31971);

(statearr_32174[(9)] = inst_31970);

(statearr_32174[(10)] = inst_31972);

return statearr_32174;
})();
var statearr_32175_32244 = state_32108__$1;
(statearr_32175_32244[(2)] = null);

(statearr_32175_32244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (45))){
var state_32108__$1 = state_32108;
var statearr_32176_32245 = state_32108__$1;
(statearr_32176_32245[(2)] = null);

(statearr_32176_32245[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (26))){
var inst_32030 = (state_32108[(23)]);
var inst_32022 = (state_32108[(19)]);
var inst_32025 = (state_32108[(24)]);
var inst_32028 = (state_32108[(26)]);
var inst_32026 = (state_32108[(25)]);
var inst_32045 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32047 = (function (){var all_files = inst_32022;
var res_SINGLEQUOTE_ = inst_32025;
var res = inst_32026;
var files_not_loaded = inst_32028;
var dependencies_that_loaded = inst_32030;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32030,inst_32022,inst_32025,inst_32028,inst_32026,inst_32045,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32046){
var map__32177 = p__32046;
var map__32177__$1 = ((((!((map__32177 == null)))?((((map__32177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32177):map__32177);
var namespace = cljs.core.get.call(null,map__32177__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32177__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32030,inst_32022,inst_32025,inst_32028,inst_32026,inst_32045,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32048 = cljs.core.map.call(null,inst_32047,inst_32026);
var inst_32049 = cljs.core.pr_str.call(null,inst_32048);
var inst_32050 = figwheel.client.utils.log.call(null,inst_32049);
var inst_32051 = (function (){var all_files = inst_32022;
var res_SINGLEQUOTE_ = inst_32025;
var res = inst_32026;
var files_not_loaded = inst_32028;
var dependencies_that_loaded = inst_32030;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32030,inst_32022,inst_32025,inst_32028,inst_32026,inst_32045,inst_32047,inst_32048,inst_32049,inst_32050,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32030,inst_32022,inst_32025,inst_32028,inst_32026,inst_32045,inst_32047,inst_32048,inst_32049,inst_32050,state_val_32109,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32052 = setTimeout(inst_32051,(10));
var state_32108__$1 = (function (){var statearr_32179 = state_32108;
(statearr_32179[(33)] = inst_32050);

(statearr_32179[(34)] = inst_32045);

return statearr_32179;
})();
var statearr_32180_32246 = state_32108__$1;
(statearr_32180_32246[(2)] = inst_32052);

(statearr_32180_32246[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (16))){
var state_32108__$1 = state_32108;
var statearr_32181_32247 = state_32108__$1;
(statearr_32181_32247[(2)] = reload_dependents);

(statearr_32181_32247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (38))){
var inst_32062 = (state_32108[(16)]);
var inst_32079 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32062);
var state_32108__$1 = state_32108;
var statearr_32182_32248 = state_32108__$1;
(statearr_32182_32248[(2)] = inst_32079);

(statearr_32182_32248[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (30))){
var state_32108__$1 = state_32108;
var statearr_32183_32249 = state_32108__$1;
(statearr_32183_32249[(2)] = null);

(statearr_32183_32249[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (10))){
var inst_31982 = (state_32108[(22)]);
var inst_31984 = cljs.core.chunked_seq_QMARK_.call(null,inst_31982);
var state_32108__$1 = state_32108;
if(inst_31984){
var statearr_32184_32250 = state_32108__$1;
(statearr_32184_32250[(1)] = (13));

} else {
var statearr_32185_32251 = state_32108__$1;
(statearr_32185_32251[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (18))){
var inst_32016 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
if(cljs.core.truth_(inst_32016)){
var statearr_32186_32252 = state_32108__$1;
(statearr_32186_32252[(1)] = (19));

} else {
var statearr_32187_32253 = state_32108__$1;
(statearr_32187_32253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (42))){
var state_32108__$1 = state_32108;
var statearr_32188_32254 = state_32108__$1;
(statearr_32188_32254[(2)] = null);

(statearr_32188_32254[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (37))){
var inst_32074 = (state_32108[(2)]);
var state_32108__$1 = state_32108;
var statearr_32189_32255 = state_32108__$1;
(statearr_32189_32255[(2)] = inst_32074);

(statearr_32189_32255[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32109 === (8))){
var inst_31982 = (state_32108[(22)]);
var inst_31969 = (state_32108[(7)]);
var inst_31982__$1 = cljs.core.seq.call(null,inst_31969);
var state_32108__$1 = (function (){var statearr_32190 = state_32108;
(statearr_32190[(22)] = inst_31982__$1);

return statearr_32190;
})();
if(inst_31982__$1){
var statearr_32191_32256 = state_32108__$1;
(statearr_32191_32256[(1)] = (10));

} else {
var statearr_32192_32257 = state_32108__$1;
(statearr_32192_32257[(1)] = (11));

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
}
});})(c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27770__auto__,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____0 = (function (){
var statearr_32196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32196[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__);

(statearr_32196[(1)] = (1));

return statearr_32196;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____1 = (function (state_32108){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_32108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e32197){if((e32197 instanceof Object)){
var ex__27774__auto__ = e32197;
var statearr_32198_32258 = state_32108;
(statearr_32198_32258[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32259 = state_32108;
state_32108 = G__32259;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__ = function(state_32108){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____1.call(this,state_32108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27884__auto__ = (function (){var statearr_32199 = f__27883__auto__.call(null);
(statearr_32199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_32199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__,map__31954,map__31954__$1,opts,before_jsload,on_jsload,reload_dependents,map__31955,map__31955__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27882__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32262,link){
var map__32265 = p__32262;
var map__32265__$1 = ((((!((map__32265 == null)))?((((map__32265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32265):map__32265);
var file = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32265,map__32265__$1,file){
return (function (p1__32260_SHARP_,p2__32261_SHARP_){
if(cljs.core._EQ_.call(null,p1__32260_SHARP_,p2__32261_SHARP_)){
return p1__32260_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32265,map__32265__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32271){
var map__32272 = p__32271;
var map__32272__$1 = ((((!((map__32272 == null)))?((((map__32272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32272):map__32272);
var match_length = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32272__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32267_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32267_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args32274 = [];
var len__25835__auto___32277 = arguments.length;
var i__25836__auto___32278 = (0);
while(true){
if((i__25836__auto___32278 < len__25835__auto___32277)){
args32274.push((arguments[i__25836__auto___32278]));

var G__32279 = (i__25836__auto___32278 + (1));
i__25836__auto___32278 = G__32279;
continue;
} else {
}
break;
}

var G__32276 = args32274.length;
switch (G__32276) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32274.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32281_SHARP_,p2__32282_SHARP_){
return cljs.core.assoc.call(null,p1__32281_SHARP_,cljs.core.get.call(null,p2__32282_SHARP_,key),p2__32282_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32283){
var map__32286 = p__32283;
var map__32286__$1 = ((((!((map__32286 == null)))?((((map__32286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32286):map__32286);
var f_data = map__32286__$1;
var file = cljs.core.get.call(null,map__32286__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32288,p__32289){
var map__32298 = p__32288;
var map__32298__$1 = ((((!((map__32298 == null)))?((((map__32298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32298):map__32298);
var opts = map__32298__$1;
var on_cssload = cljs.core.get.call(null,map__32298__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32299 = p__32289;
var map__32299__$1 = ((((!((map__32299 == null)))?((((map__32299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32299):map__32299);
var files_msg = map__32299__$1;
var files = cljs.core.get.call(null,map__32299__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32302_32306 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__32303_32307 = null;
var count__32304_32308 = (0);
var i__32305_32309 = (0);
while(true){
if((i__32305_32309 < count__32304_32308)){
var f_32310 = cljs.core._nth.call(null,chunk__32303_32307,i__32305_32309);
figwheel.client.file_reloading.reload_css_file.call(null,f_32310);

var G__32311 = seq__32302_32306;
var G__32312 = chunk__32303_32307;
var G__32313 = count__32304_32308;
var G__32314 = (i__32305_32309 + (1));
seq__32302_32306 = G__32311;
chunk__32303_32307 = G__32312;
count__32304_32308 = G__32313;
i__32305_32309 = G__32314;
continue;
} else {
var temp__4657__auto___32315 = cljs.core.seq.call(null,seq__32302_32306);
if(temp__4657__auto___32315){
var seq__32302_32316__$1 = temp__4657__auto___32315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32302_32316__$1)){
var c__25571__auto___32317 = cljs.core.chunk_first.call(null,seq__32302_32316__$1);
var G__32318 = cljs.core.chunk_rest.call(null,seq__32302_32316__$1);
var G__32319 = c__25571__auto___32317;
var G__32320 = cljs.core.count.call(null,c__25571__auto___32317);
var G__32321 = (0);
seq__32302_32306 = G__32318;
chunk__32303_32307 = G__32319;
count__32304_32308 = G__32320;
i__32305_32309 = G__32321;
continue;
} else {
var f_32322 = cljs.core.first.call(null,seq__32302_32316__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32322);

var G__32323 = cljs.core.next.call(null,seq__32302_32316__$1);
var G__32324 = null;
var G__32325 = (0);
var G__32326 = (0);
seq__32302_32306 = G__32323;
chunk__32303_32307 = G__32324;
count__32304_32308 = G__32325;
i__32305_32309 = G__32326;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32298,map__32298__$1,opts,on_cssload,map__32299,map__32299__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__32298,map__32298__$1,opts,on_cssload,map__32299,map__32299__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1478134423755