// Compiled by ClojureScript 1.9.229 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9113){
var map__9138 = p__9113;
var map__9138__$1 = ((((!((map__9138 == null)))?((((map__9138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9138):map__9138);
var m = map__9138__$1;
var n = cljs.core.get.call(null,map__9138__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9138__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9140_9162 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9141_9163 = null;
var count__9142_9164 = (0);
var i__9143_9165 = (0);
while(true){
if((i__9143_9165 < count__9142_9164)){
var f_9166 = cljs.core._nth.call(null,chunk__9141_9163,i__9143_9165);
cljs.core.println.call(null,"  ",f_9166);

var G__9167 = seq__9140_9162;
var G__9168 = chunk__9141_9163;
var G__9169 = count__9142_9164;
var G__9170 = (i__9143_9165 + (1));
seq__9140_9162 = G__9167;
chunk__9141_9163 = G__9168;
count__9142_9164 = G__9169;
i__9143_9165 = G__9170;
continue;
} else {
var temp__4657__auto___9171 = cljs.core.seq.call(null,seq__9140_9162);
if(temp__4657__auto___9171){
var seq__9140_9172__$1 = temp__4657__auto___9171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9140_9172__$1)){
var c__7571__auto___9173 = cljs.core.chunk_first.call(null,seq__9140_9172__$1);
var G__9174 = cljs.core.chunk_rest.call(null,seq__9140_9172__$1);
var G__9175 = c__7571__auto___9173;
var G__9176 = cljs.core.count.call(null,c__7571__auto___9173);
var G__9177 = (0);
seq__9140_9162 = G__9174;
chunk__9141_9163 = G__9175;
count__9142_9164 = G__9176;
i__9143_9165 = G__9177;
continue;
} else {
var f_9178 = cljs.core.first.call(null,seq__9140_9172__$1);
cljs.core.println.call(null,"  ",f_9178);

var G__9179 = cljs.core.next.call(null,seq__9140_9172__$1);
var G__9180 = null;
var G__9181 = (0);
var G__9182 = (0);
seq__9140_9162 = G__9179;
chunk__9141_9163 = G__9180;
count__9142_9164 = G__9181;
i__9143_9165 = G__9182;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9183 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6760__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6760__auto__)){
return or__6760__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9183);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9183)))?cljs.core.second.call(null,arglists_9183):arglists_9183));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9144_9184 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9145_9185 = null;
var count__9146_9186 = (0);
var i__9147_9187 = (0);
while(true){
if((i__9147_9187 < count__9146_9186)){
var vec__9148_9188 = cljs.core._nth.call(null,chunk__9145_9185,i__9147_9187);
var name_9189 = cljs.core.nth.call(null,vec__9148_9188,(0),null);
var map__9151_9190 = cljs.core.nth.call(null,vec__9148_9188,(1),null);
var map__9151_9191__$1 = ((((!((map__9151_9190 == null)))?((((map__9151_9190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9151_9190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9151_9190):map__9151_9190);
var doc_9192 = cljs.core.get.call(null,map__9151_9191__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9193 = cljs.core.get.call(null,map__9151_9191__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9189);

cljs.core.println.call(null," ",arglists_9193);

if(cljs.core.truth_(doc_9192)){
cljs.core.println.call(null," ",doc_9192);
} else {
}

var G__9194 = seq__9144_9184;
var G__9195 = chunk__9145_9185;
var G__9196 = count__9146_9186;
var G__9197 = (i__9147_9187 + (1));
seq__9144_9184 = G__9194;
chunk__9145_9185 = G__9195;
count__9146_9186 = G__9196;
i__9147_9187 = G__9197;
continue;
} else {
var temp__4657__auto___9198 = cljs.core.seq.call(null,seq__9144_9184);
if(temp__4657__auto___9198){
var seq__9144_9199__$1 = temp__4657__auto___9198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9144_9199__$1)){
var c__7571__auto___9200 = cljs.core.chunk_first.call(null,seq__9144_9199__$1);
var G__9201 = cljs.core.chunk_rest.call(null,seq__9144_9199__$1);
var G__9202 = c__7571__auto___9200;
var G__9203 = cljs.core.count.call(null,c__7571__auto___9200);
var G__9204 = (0);
seq__9144_9184 = G__9201;
chunk__9145_9185 = G__9202;
count__9146_9186 = G__9203;
i__9147_9187 = G__9204;
continue;
} else {
var vec__9153_9205 = cljs.core.first.call(null,seq__9144_9199__$1);
var name_9206 = cljs.core.nth.call(null,vec__9153_9205,(0),null);
var map__9156_9207 = cljs.core.nth.call(null,vec__9153_9205,(1),null);
var map__9156_9208__$1 = ((((!((map__9156_9207 == null)))?((((map__9156_9207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9156_9207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9156_9207):map__9156_9207);
var doc_9209 = cljs.core.get.call(null,map__9156_9208__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9210 = cljs.core.get.call(null,map__9156_9208__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9206);

cljs.core.println.call(null," ",arglists_9210);

if(cljs.core.truth_(doc_9209)){
cljs.core.println.call(null," ",doc_9209);
} else {
}

var G__9211 = cljs.core.next.call(null,seq__9144_9199__$1);
var G__9212 = null;
var G__9213 = (0);
var G__9214 = (0);
seq__9144_9184 = G__9211;
chunk__9145_9185 = G__9212;
count__9146_9186 = G__9213;
i__9147_9187 = G__9214;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__9158 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9159 = null;
var count__9160 = (0);
var i__9161 = (0);
while(true){
if((i__9161 < count__9160)){
var role = cljs.core._nth.call(null,chunk__9159,i__9161);
var temp__4657__auto___9215__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9215__$1)){
var spec_9216 = temp__4657__auto___9215__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_9216));
} else {
}

var G__9217 = seq__9158;
var G__9218 = chunk__9159;
var G__9219 = count__9160;
var G__9220 = (i__9161 + (1));
seq__9158 = G__9217;
chunk__9159 = G__9218;
count__9160 = G__9219;
i__9161 = G__9220;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__9158);
if(temp__4657__auto____$1){
var seq__9158__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9158__$1)){
var c__7571__auto__ = cljs.core.chunk_first.call(null,seq__9158__$1);
var G__9221 = cljs.core.chunk_rest.call(null,seq__9158__$1);
var G__9222 = c__7571__auto__;
var G__9223 = cljs.core.count.call(null,c__7571__auto__);
var G__9224 = (0);
seq__9158 = G__9221;
chunk__9159 = G__9222;
count__9160 = G__9223;
i__9161 = G__9224;
continue;
} else {
var role = cljs.core.first.call(null,seq__9158__$1);
var temp__4657__auto___9225__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___9225__$2)){
var spec_9226 = temp__4657__auto___9225__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_9226));
} else {
}

var G__9227 = cljs.core.next.call(null,seq__9158__$1);
var G__9228 = null;
var G__9229 = (0);
var G__9230 = (0);
seq__9158 = G__9227;
chunk__9159 = G__9228;
count__9160 = G__9229;
i__9161 = G__9230;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map