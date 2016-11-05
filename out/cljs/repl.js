// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35632){
var map__35657 = p__35632;
var map__35657__$1 = ((((!((map__35657 == null)))?((((map__35657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35657):map__35657);
var m = map__35657__$1;
var n = cljs.core.get.call(null,map__35657__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35657__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35659_35681 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35660_35682 = null;
var count__35661_35683 = (0);
var i__35662_35684 = (0);
while(true){
if((i__35662_35684 < count__35661_35683)){
var f_35685 = cljs.core._nth.call(null,chunk__35660_35682,i__35662_35684);
cljs.core.println.call(null,"  ",f_35685);

var G__35686 = seq__35659_35681;
var G__35687 = chunk__35660_35682;
var G__35688 = count__35661_35683;
var G__35689 = (i__35662_35684 + (1));
seq__35659_35681 = G__35686;
chunk__35660_35682 = G__35687;
count__35661_35683 = G__35688;
i__35662_35684 = G__35689;
continue;
} else {
var temp__4657__auto___35690 = cljs.core.seq.call(null,seq__35659_35681);
if(temp__4657__auto___35690){
var seq__35659_35691__$1 = temp__4657__auto___35690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35659_35691__$1)){
var c__25571__auto___35692 = cljs.core.chunk_first.call(null,seq__35659_35691__$1);
var G__35693 = cljs.core.chunk_rest.call(null,seq__35659_35691__$1);
var G__35694 = c__25571__auto___35692;
var G__35695 = cljs.core.count.call(null,c__25571__auto___35692);
var G__35696 = (0);
seq__35659_35681 = G__35693;
chunk__35660_35682 = G__35694;
count__35661_35683 = G__35695;
i__35662_35684 = G__35696;
continue;
} else {
var f_35697 = cljs.core.first.call(null,seq__35659_35691__$1);
cljs.core.println.call(null,"  ",f_35697);

var G__35698 = cljs.core.next.call(null,seq__35659_35691__$1);
var G__35699 = null;
var G__35700 = (0);
var G__35701 = (0);
seq__35659_35681 = G__35698;
chunk__35660_35682 = G__35699;
count__35661_35683 = G__35700;
i__35662_35684 = G__35701;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35702 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24760__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35702);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35702)))?cljs.core.second.call(null,arglists_35702):arglists_35702));
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
var seq__35663_35703 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35664_35704 = null;
var count__35665_35705 = (0);
var i__35666_35706 = (0);
while(true){
if((i__35666_35706 < count__35665_35705)){
var vec__35667_35707 = cljs.core._nth.call(null,chunk__35664_35704,i__35666_35706);
var name_35708 = cljs.core.nth.call(null,vec__35667_35707,(0),null);
var map__35670_35709 = cljs.core.nth.call(null,vec__35667_35707,(1),null);
var map__35670_35710__$1 = ((((!((map__35670_35709 == null)))?((((map__35670_35709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35670_35709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35670_35709):map__35670_35709);
var doc_35711 = cljs.core.get.call(null,map__35670_35710__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35712 = cljs.core.get.call(null,map__35670_35710__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35708);

cljs.core.println.call(null," ",arglists_35712);

if(cljs.core.truth_(doc_35711)){
cljs.core.println.call(null," ",doc_35711);
} else {
}

var G__35713 = seq__35663_35703;
var G__35714 = chunk__35664_35704;
var G__35715 = count__35665_35705;
var G__35716 = (i__35666_35706 + (1));
seq__35663_35703 = G__35713;
chunk__35664_35704 = G__35714;
count__35665_35705 = G__35715;
i__35666_35706 = G__35716;
continue;
} else {
var temp__4657__auto___35717 = cljs.core.seq.call(null,seq__35663_35703);
if(temp__4657__auto___35717){
var seq__35663_35718__$1 = temp__4657__auto___35717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35663_35718__$1)){
var c__25571__auto___35719 = cljs.core.chunk_first.call(null,seq__35663_35718__$1);
var G__35720 = cljs.core.chunk_rest.call(null,seq__35663_35718__$1);
var G__35721 = c__25571__auto___35719;
var G__35722 = cljs.core.count.call(null,c__25571__auto___35719);
var G__35723 = (0);
seq__35663_35703 = G__35720;
chunk__35664_35704 = G__35721;
count__35665_35705 = G__35722;
i__35666_35706 = G__35723;
continue;
} else {
var vec__35672_35724 = cljs.core.first.call(null,seq__35663_35718__$1);
var name_35725 = cljs.core.nth.call(null,vec__35672_35724,(0),null);
var map__35675_35726 = cljs.core.nth.call(null,vec__35672_35724,(1),null);
var map__35675_35727__$1 = ((((!((map__35675_35726 == null)))?((((map__35675_35726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35675_35726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35675_35726):map__35675_35726);
var doc_35728 = cljs.core.get.call(null,map__35675_35727__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35729 = cljs.core.get.call(null,map__35675_35727__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35725);

cljs.core.println.call(null," ",arglists_35729);

if(cljs.core.truth_(doc_35728)){
cljs.core.println.call(null," ",doc_35728);
} else {
}

var G__35730 = cljs.core.next.call(null,seq__35663_35718__$1);
var G__35731 = null;
var G__35732 = (0);
var G__35733 = (0);
seq__35663_35703 = G__35730;
chunk__35664_35704 = G__35731;
count__35665_35705 = G__35732;
i__35666_35706 = G__35733;
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

var seq__35677 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35678 = null;
var count__35679 = (0);
var i__35680 = (0);
while(true){
if((i__35680 < count__35679)){
var role = cljs.core._nth.call(null,chunk__35678,i__35680);
var temp__4657__auto___35734__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35734__$1)){
var spec_35735 = temp__4657__auto___35734__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35735));
} else {
}

var G__35736 = seq__35677;
var G__35737 = chunk__35678;
var G__35738 = count__35679;
var G__35739 = (i__35680 + (1));
seq__35677 = G__35736;
chunk__35678 = G__35737;
count__35679 = G__35738;
i__35680 = G__35739;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35677);
if(temp__4657__auto____$1){
var seq__35677__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35677__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35677__$1);
var G__35740 = cljs.core.chunk_rest.call(null,seq__35677__$1);
var G__35741 = c__25571__auto__;
var G__35742 = cljs.core.count.call(null,c__25571__auto__);
var G__35743 = (0);
seq__35677 = G__35740;
chunk__35678 = G__35741;
count__35679 = G__35742;
i__35680 = G__35743;
continue;
} else {
var role = cljs.core.first.call(null,seq__35677__$1);
var temp__4657__auto___35744__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35744__$2)){
var spec_35745 = temp__4657__auto___35744__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35745));
} else {
}

var G__35746 = cljs.core.next.call(null,seq__35677__$1);
var G__35747 = null;
var G__35748 = (0);
var G__35749 = (0);
seq__35677 = G__35746;
chunk__35678 = G__35747;
count__35679 = G__35748;
i__35680 = G__35749;
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

//# sourceMappingURL=repl.js.map?rel=1478134562318