// Compiled by ClojureScript 1.9.229 {}
goog.provide('places.se.natmus');
goog.require('cljs.core');
goog.require('places.util');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('cljs_hash.md5');
places.se.natmus.entity_base_url = "https://www.wikidata.org/wiki/Special:EntityData";
places.se.natmus.base_url = "https://query.wikidata.org/bigdata/namespace/wdq/sparql";
places.se.natmus.sparql_query = "SELECT ?item WHERE { ?item wdt:P195 wd:Q842858 . } LIMIT 1 OFFSET ";
places.se.natmus.extract_id = (function places$se$natmus$extract_id(response){
var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
var b = cljs.core.get.call(null,cljs.core.get.call(null,cognitect.transit.read.call(null,r,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)),"results"),"bindings");
if(cljs.core.contains_QMARK_.call(null,b,(0))){
return clojure.string.replace.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.nth.call(null,b,(0)),"item"),"value"),"http://www.wikidata.org/entity/","");
} else {
return null;
}
});
places.se.natmus.query_id = (function places$se$natmus$query_id(offset){
return cljs_http.client.get.call(null,places.se.natmus.base_url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 2, ["query",[cljs.core.str(places.se.natmus.sparql_query),cljs.core.str(offset)].join(''),"format","json"], null),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
places.se.natmus.entity__GT_tag = (function places$se$natmus$entity__GT_tag(entity){
return cljs_http.client.get.call(null,[cljs.core.str(places.se.natmus.entity_base_url),cljs.core.str("/"),cljs.core.str(entity),cljs.core.str(".json")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
places.se.natmus.extract_tags = (function places$se$natmus$extract_tags(response,entity){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sv","sv",-170947079).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,entity).call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))))));
});
places.se.natmus.call_base_entity = (function places$se$natmus$call_base_entity(id){
return cljs_http.client.get.call(null,[cljs.core.str(places.se.natmus.entity_base_url),cljs.core.str("/"),cljs.core.str(id),cljs.core.str(".json")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
places.se.natmus.tags_extr = (function places$se$natmus$tags_extr(id,response){
return new cljs.core.Keyword(null,"claims","claims",1454900969).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,id).call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))));
});
places.se.natmus.tags_QMARK_ = (function places$se$natmus$tags_QMARK_(id,response){
return cljs.core.empty_QMARK_.call(null,cljs.core.keyword.call(null,"P180").call(null,new cljs.core.Keyword(null,"claims","claims",1454900969).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,id).call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))))));
});
places.se.natmus.id__GT_entity = (function places$se$natmus$id__GT_entity(id,response){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"datavalue","datavalue",-1253966354).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mainsnak","mainsnak",-575190784).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.keyword.call(null,"P180").call(null,new cljs.core.Keyword(null,"claims","claims",1454900969).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,id).call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))))),(0))))));
});
places.se.natmus.wikimedia_file = "https://commons.wikimedia.org/wiki/File:";
places.se.natmus.call_image = (function places$se$natmus$call_image(id){
return cljs_http.client.get.call(null,[cljs.core.str(places.se.natmus.entity_base_url),cljs.core.str("/"),cljs.core.str(id),cljs.core.str(".json")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
places.se.natmus.id__GT_image = (function places$se$natmus$id__GT_image(response,id){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"datavalue","datavalue",-1253966354).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mainsnak","mainsnak",-575190784).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.keyword.call(null,"P18").call(null,new cljs.core.Keyword(null,"claims","claims",1454900969).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,id).call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))))),(0)))));
});
places.se.natmus.call_wiki_image = (function places$se$natmus$call_wiki_image(filename){
return cljs_http.client.get.call(null,"https://commons.wikimedia.org/w/api.php",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 6, ["action","query","titles",[cljs.core.str("File:"),cljs.core.str(filename)].join(''),"prop","imageinfo","iiprop","url","format","json","origin","*"], null),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
places.se.natmus.extract_wiki_image = (function places$se$natmus$extract_wiki_image(response){
var buf = new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)));
return new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"imageinfo","imageinfo",-263834510).cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,buf))).call(null,buf)),(0)));
});

//# sourceMappingURL=natmus.js.map?rel=1478137811634