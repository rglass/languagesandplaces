// Compiled by ClojureScript 1.9.229 {}
goog.provide('places.dk.natmus');
goog.require('cljs.core');
goog.require('places.util');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
places.dk.natmus.base_url = "http://samlinger.natmus.dk";
places.dk.natmus.default_collection = "ES";
places.dk.natmus.search_suffix = "/api/all/_search?q=";
places.dk.natmus.id__GT_image = (function places$dk$natmus$id__GT_image(id){
return [cljs.core.str(places.dk.natmus.base_url),cljs.core.str("/"),cljs.core.str(id),cljs.core.str("/image/800/")].join('');
});
places.dk.natmus.extract_id = (function places$dk$natmus$extract_id(response){
return new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))),(0)));
});
places.dk.natmus.query_id = (function places$dk$natmus$query_id(i){
return cljs_http.client.get.call(null,[cljs.core.str(places.dk.natmus.base_url),cljs.core.str(places.dk.natmus.search_suffix),cljs.core.str("_type:asset&collection:es")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(1),new cljs.core.Keyword(null,"from","from",1815293044),i,new cljs.core.Keyword(null,"media","media",-1066138403),"picture"], null),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
places.dk.natmus.id__GT_tags = (function places$dk$natmus$id__GT_tags(id){
return cljs_http.client.get.call(null,[cljs.core.str(places.dk.natmus.base_url),cljs.core.str(places.dk.natmus.search_suffix),cljs.core.str("(_id:"),cljs.core.str(id),cljs.core.str(")")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
places.dk.natmus.extract_tags = (function places$dk$natmus$extract_tags(response){
return new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"_source","_source",-812884485).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))),(0))));
});

//# sourceMappingURL=natmus.js.map?rel=1478377249601