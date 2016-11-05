// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__24748__auto__ = v;
if(cljs.core.truth_(and__24748__auto__)){
return (v > (0));
} else {
return and__24748__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__30995_SHARP_,p2__30994_SHARP_){
var vec__30999 = clojure.string.split.call(null,p2__30994_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__30999,(0),null);
var v = cljs.core.nth.call(null,vec__30999,(1),null);
return cljs.core.assoc.call(null,p1__30995_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__31002_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__31002_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__31003){
var vec__31007 = p__31003;
var k = cljs.core.nth.call(null,vec__31007,(0),null);
var v = cljs.core.nth.call(null,vec__31007,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__31010_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__31010_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__24748__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__24748__auto__){
var and__24748__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__24748__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__24748__auto____$1;
}
} else {
return and__24748__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__31011_SHARP_){
return cljs_http.client.decode_body.call(null,p1__31011_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31018 = arguments.length;
var i__25836__auto___31019 = (0);
while(true){
if((i__25836__auto___31019 < len__25835__auto___31018)){
args__25842__auto__.push((arguments[i__25836__auto___31019]));

var G__31020 = (i__25836__auto___31019 + (1));
i__25836__auto___31019 = G__31020;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31014){
var vec__31015 = p__31014;
var default_headers = cljs.core.nth.call(null,vec__31015,(0),null);
return ((function (vec__31015,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__24760__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__31015,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq31012){
var G__31013 = cljs.core.first.call(null,seq31012);
var seq31012__$1 = cljs.core.next.call(null,seq31012);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__31013,seq31012__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31027 = arguments.length;
var i__25836__auto___31028 = (0);
while(true){
if((i__25836__auto___31028 < len__25835__auto___31027)){
args__25842__auto__.push((arguments[i__25836__auto___31028]));

var G__31029 = (i__25836__auto___31028 + (1));
i__25836__auto___31028 = G__31029;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31023){
var vec__31024 = p__31023;
var accept = cljs.core.nth.call(null,vec__31024,(0),null);
return ((function (vec__31024,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__24760__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__31024,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq31021){
var G__31022 = cljs.core.first.call(null,seq31021);
var seq31021__$1 = cljs.core.next.call(null,seq31021);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__31022,seq31021__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31036 = arguments.length;
var i__25836__auto___31037 = (0);
while(true){
if((i__25836__auto___31037 < len__25835__auto___31036)){
args__25842__auto__.push((arguments[i__25836__auto___31037]));

var G__31038 = (i__25836__auto___31037 + (1));
i__25836__auto___31037 = G__31038;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31032){
var vec__31033 = p__31032;
var content_type = cljs.core.nth.call(null,vec__31033,(0),null);
return ((function (vec__31033,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__24760__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__31033,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq31030){
var G__31031 = cljs.core.first.call(null,seq31030);
var seq31030__$1 = cljs.core.next.call(null,seq31030);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__31031,seq31030__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__31041 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__31041__$1 = ((((!((map__31041 == null)))?((((map__31041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31041):map__31041);
var encoding = cljs.core.get.call(null,map__31041__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__31041__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__31047 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__31047__$1 = ((((!((map__31047 == null)))?((((map__31047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31047):map__31047);
var decoding = cljs.core.get.call(null,map__31047__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__31047__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__31047,map__31047__$1,decoding,decoding_opts){
return (function (p1__31043_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__31043_SHARP_,decoding,decoding_opts);
});})(map__31047,map__31047__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__31047,map__31047__$1,decoding,decoding_opts,transit_decode){
return (function (p1__31044_SHARP_){
return cljs_http.client.decode_body.call(null,p1__31044_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__31047,map__31047__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__31049_SHARP_){
return cljs_http.client.decode_body.call(null,p1__31049_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__31053){
var map__31054 = p__31053;
var map__31054__$1 = ((((!((map__31054 == null)))?((((map__31054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31054):map__31054);
var req = map__31054__$1;
var query_params = cljs.core.get.call(null,map__31054__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__31059){
var map__31060 = p__31059;
var map__31060__$1 = ((((!((map__31060 == null)))?((((map__31060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31060):map__31060);
var request = map__31060__$1;
var form_params = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__31060__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__24748__auto__ = form_params;
if(cljs.core.truth_(and__24748__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__24748__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__31072_31082 = cljs.core.seq.call(null,params);
var chunk__31073_31083 = null;
var count__31074_31084 = (0);
var i__31075_31085 = (0);
while(true){
if((i__31075_31085 < count__31074_31084)){
var vec__31076_31086 = cljs.core._nth.call(null,chunk__31073_31083,i__31075_31085);
var k_31087 = cljs.core.nth.call(null,vec__31076_31086,(0),null);
var v_31088 = cljs.core.nth.call(null,vec__31076_31086,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_31088)){
form_data.append(cljs.core.name.call(null,k_31087),cljs.core.first.call(null,v_31088),cljs.core.second.call(null,v_31088));
} else {
form_data.append(cljs.core.name.call(null,k_31087),v_31088);
}

var G__31089 = seq__31072_31082;
var G__31090 = chunk__31073_31083;
var G__31091 = count__31074_31084;
var G__31092 = (i__31075_31085 + (1));
seq__31072_31082 = G__31089;
chunk__31073_31083 = G__31090;
count__31074_31084 = G__31091;
i__31075_31085 = G__31092;
continue;
} else {
var temp__4657__auto___31093 = cljs.core.seq.call(null,seq__31072_31082);
if(temp__4657__auto___31093){
var seq__31072_31094__$1 = temp__4657__auto___31093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31072_31094__$1)){
var c__25571__auto___31095 = cljs.core.chunk_first.call(null,seq__31072_31094__$1);
var G__31096 = cljs.core.chunk_rest.call(null,seq__31072_31094__$1);
var G__31097 = c__25571__auto___31095;
var G__31098 = cljs.core.count.call(null,c__25571__auto___31095);
var G__31099 = (0);
seq__31072_31082 = G__31096;
chunk__31073_31083 = G__31097;
count__31074_31084 = G__31098;
i__31075_31085 = G__31099;
continue;
} else {
var vec__31079_31100 = cljs.core.first.call(null,seq__31072_31094__$1);
var k_31101 = cljs.core.nth.call(null,vec__31079_31100,(0),null);
var v_31102 = cljs.core.nth.call(null,vec__31079_31100,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_31102)){
form_data.append(cljs.core.name.call(null,k_31101),cljs.core.first.call(null,v_31102),cljs.core.second.call(null,v_31102));
} else {
form_data.append(cljs.core.name.call(null,k_31101),v_31102);
}

var G__31103 = cljs.core.next.call(null,seq__31072_31094__$1);
var G__31104 = null;
var G__31105 = (0);
var G__31106 = (0);
seq__31072_31082 = G__31103;
chunk__31073_31083 = G__31104;
count__31074_31084 = G__31105;
i__31075_31085 = G__31106;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__31110){
var map__31111 = p__31110;
var map__31111__$1 = ((((!((map__31111 == null)))?((((map__31111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31111):map__31111);
var request = map__31111__$1;
var multipart_params = cljs.core.get.call(null,map__31111__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__31111__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__24748__auto__ = multipart_params;
if(cljs.core.truth_(and__24748__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__24748__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__31113_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__31113_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__31118){
var map__31119 = p__31118;
var map__31119__$1 = ((((!((map__31119 == null)))?((((map__31119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31119):map__31119);
var req = map__31119__$1;
var query_params = cljs.core.get.call(null,map__31119__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__31119,map__31119__$1,req,query_params){
return (function (p1__31114_SHARP_){
return cljs.core.merge.call(null,p1__31114_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__31119,map__31119__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31127 = arguments.length;
var i__25836__auto___31128 = (0);
while(true){
if((i__25836__auto___31128 < len__25835__auto___31127)){
args__25842__auto__.push((arguments[i__25836__auto___31128]));

var G__31129 = (i__25836__auto___31128 + (1));
i__25836__auto___31128 = G__31129;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__31123){
var vec__31124 = p__31123;
var credentials = cljs.core.nth.call(null,vec__31124,(0),null);
return ((function (vec__31124,credentials){
return (function (req){
var credentials__$1 = (function (){var or__24760__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__31124,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq31121){
var G__31122 = cljs.core.first.call(null,seq31121);
var seq31121__$1 = cljs.core.next.call(null,seq31121);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__31122,seq31121__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31136 = arguments.length;
var i__25836__auto___31137 = (0);
while(true){
if((i__25836__auto___31137 < len__25835__auto___31136)){
args__25842__auto__.push((arguments[i__25836__auto___31137]));

var G__31138 = (i__25836__auto___31137 + (1));
i__25836__auto___31137 = G__31138;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31132){
var vec__31133 = p__31132;
var req = cljs.core.nth.call(null,vec__31133,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq31130){
var G__31131 = cljs.core.first.call(null,seq31130);
var seq31130__$1 = cljs.core.next.call(null,seq31130);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__31131,seq31130__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31145 = arguments.length;
var i__25836__auto___31146 = (0);
while(true){
if((i__25836__auto___31146 < len__25835__auto___31145)){
args__25842__auto__.push((arguments[i__25836__auto___31146]));

var G__31147 = (i__25836__auto___31146 + (1));
i__25836__auto___31146 = G__31147;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31141){
var vec__31142 = p__31141;
var req = cljs.core.nth.call(null,vec__31142,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq31139){
var G__31140 = cljs.core.first.call(null,seq31139);
var seq31139__$1 = cljs.core.next.call(null,seq31139);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__31140,seq31139__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31154 = arguments.length;
var i__25836__auto___31155 = (0);
while(true){
if((i__25836__auto___31155 < len__25835__auto___31154)){
args__25842__auto__.push((arguments[i__25836__auto___31155]));

var G__31156 = (i__25836__auto___31155 + (1));
i__25836__auto___31155 = G__31156;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31150){
var vec__31151 = p__31150;
var req = cljs.core.nth.call(null,vec__31151,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq31148){
var G__31149 = cljs.core.first.call(null,seq31148);
var seq31148__$1 = cljs.core.next.call(null,seq31148);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__31149,seq31148__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31163 = arguments.length;
var i__25836__auto___31164 = (0);
while(true){
if((i__25836__auto___31164 < len__25835__auto___31163)){
args__25842__auto__.push((arguments[i__25836__auto___31164]));

var G__31165 = (i__25836__auto___31164 + (1));
i__25836__auto___31164 = G__31165;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31159){
var vec__31160 = p__31159;
var req = cljs.core.nth.call(null,vec__31160,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq31157){
var G__31158 = cljs.core.first.call(null,seq31157);
var seq31157__$1 = cljs.core.next.call(null,seq31157);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__31158,seq31157__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31172 = arguments.length;
var i__25836__auto___31173 = (0);
while(true){
if((i__25836__auto___31173 < len__25835__auto___31172)){
args__25842__auto__.push((arguments[i__25836__auto___31173]));

var G__31174 = (i__25836__auto___31173 + (1));
i__25836__auto___31173 = G__31174;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31168){
var vec__31169 = p__31168;
var req = cljs.core.nth.call(null,vec__31169,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq31166){
var G__31167 = cljs.core.first.call(null,seq31166);
var seq31166__$1 = cljs.core.next.call(null,seq31166);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__31167,seq31166__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31181 = arguments.length;
var i__25836__auto___31182 = (0);
while(true){
if((i__25836__auto___31182 < len__25835__auto___31181)){
args__25842__auto__.push((arguments[i__25836__auto___31182]));

var G__31183 = (i__25836__auto___31182 + (1));
i__25836__auto___31182 = G__31183;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31177){
var vec__31178 = p__31177;
var req = cljs.core.nth.call(null,vec__31178,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq31175){
var G__31176 = cljs.core.first.call(null,seq31175);
var seq31175__$1 = cljs.core.next.call(null,seq31175);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__31176,seq31175__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31190 = arguments.length;
var i__25836__auto___31191 = (0);
while(true){
if((i__25836__auto___31191 < len__25835__auto___31190)){
args__25842__auto__.push((arguments[i__25836__auto___31191]));

var G__31192 = (i__25836__auto___31191 + (1));
i__25836__auto___31191 = G__31192;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31186){
var vec__31187 = p__31186;
var req = cljs.core.nth.call(null,vec__31187,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq31184){
var G__31185 = cljs.core.first.call(null,seq31184);
var seq31184__$1 = cljs.core.next.call(null,seq31184);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__31185,seq31184__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31199 = arguments.length;
var i__25836__auto___31200 = (0);
while(true){
if((i__25836__auto___31200 < len__25835__auto___31199)){
args__25842__auto__.push((arguments[i__25836__auto___31200]));

var G__31201 = (i__25836__auto___31200 + (1));
i__25836__auto___31200 = G__31201;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31195){
var vec__31196 = p__31195;
var req = cljs.core.nth.call(null,vec__31196,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq31193){
var G__31194 = cljs.core.first.call(null,seq31193);
var seq31193__$1 = cljs.core.next.call(null,seq31193);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__31194,seq31193__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31208 = arguments.length;
var i__25836__auto___31209 = (0);
while(true){
if((i__25836__auto___31209 < len__25835__auto___31208)){
args__25842__auto__.push((arguments[i__25836__auto___31209]));

var G__31210 = (i__25836__auto___31209 + (1));
i__25836__auto___31209 = G__31210;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31204){
var vec__31205 = p__31204;
var req = cljs.core.nth.call(null,vec__31205,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq31202){
var G__31203 = cljs.core.first.call(null,seq31202);
var seq31202__$1 = cljs.core.next.call(null,seq31202);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__31203,seq31202__$1);
});


//# sourceMappingURL=client.js.map?rel=1478134422898