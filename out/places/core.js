// Compiled by ClojureScript 1.9.229 {}
goog.provide('places.core');
goog.require('cljs.core');
goog.require('clj_fuzzy.metrics');
goog.require('clj_fuzzy.stemmers');
goog.require('places.se.natmus');
goog.require('hiccups.runtime');
goog.require('cljs.core.async');
goog.require('places.util');
goog.require('places.dk.natmus');
goog.require('strokes');
strokes.bootstrap.call(null);
places.core.width = (960);
places.core.height = (600);
places.core.svg = strokes.d3.select("#landp-node").append("svg").attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),places.core.width,new cljs.core.Keyword(null,"height","height",1025178622),places.core.height], null)).append("g").attr(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(32,"),cljs.core.str((places.core.height / (2))),cljs.core.str(")")].join('')], null));
places.core.reduced_lev = (function places$core$reduced_lev(xs,y){
return cljs.core.reduce.call(null,(function (x,y__$1){
if((cljs.core.second.call(null,x) > cljs.core.second.call(null,y__$1))){
return x;
} else {
return y__$1;
}
}),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.map.call(null,(function (x){
return clj_fuzzy.metrics.levenshtein.call(null,x);
}),xs)));
});
places.core.get_lev_text = (function places$core$get_lev_text(xs,y){
return cljs.core.first.call(null,places.core.reduced_lev.call(null,xs,y));
});
places.core.get_lev_number = (function places$core$get_lev_number(xs,y){
return cljs.core.second.call(null,places.core.reduced_lev.call(null,xs,y));
});
places.core.update_text = (function places$core$update_text(data){
var text = places.core.svg.selectAll("text").data(data);
text.attr(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"update"], null));

text.enter().append("text").attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"enter",new cljs.core.Keyword(null,"x","x",2099068185),((function (text){
return (function (p1__31570_SHARP_,p2__31569_SHARP_){
return (p2__31569_SHARP_ * (32));
});})(text))
,new cljs.core.Keyword(null,"dy","dy",1719547243),".35em"], null));

text.text(cljs.core.identity);

return text.exit().remove();
});
places.core.make_se = (function places$core$make_se(){
var c__26790__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26790__auto__){
return (function (){
var f__26791__auto__ = (function (){var switch__26769__auto__ = ((function (c__26790__auto__){
return (function (state_31771){
var state_val_31772 = (state_31771[(1)]);
if((state_val_31772 === (7))){
var inst_31699 = (state_31771[(7)]);
var inst_31715 = (state_31771[(2)]);
var inst_31716 = places.se.natmus.id__GT_image.call(null,inst_31715,inst_31699);
var inst_31717 = places.se.natmus.call_wiki_image.call(null,inst_31716);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(8),inst_31717);
} else {
if((state_val_31772 === (20))){
var inst_31690 = (state_31771[(8)]);
var inst_31759 = (state_31771[(9)]);
var inst_31765 = (state_31771[(2)]);
var inst_31766 = (inst_31690 + (1));
var inst_31688 = inst_31759;
var inst_31689 = inst_31765;
var inst_31690__$1 = inst_31766;
var state_31771__$1 = (function (){var statearr_31773 = state_31771;
(statearr_31773[(8)] = inst_31690__$1);

(statearr_31773[(10)] = inst_31689);

(statearr_31773[(11)] = inst_31688);

return statearr_31773;
})();
var statearr_31774_31805 = state_31771__$1;
(statearr_31774_31805[(2)] = null);

(statearr_31774_31805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (1))){
var inst_31688 = (0);
var inst_31689 = (1);
var inst_31690 = (1);
var state_31771__$1 = (function (){var statearr_31775 = state_31771;
(statearr_31775[(8)] = inst_31690);

(statearr_31775[(10)] = inst_31689);

(statearr_31775[(11)] = inst_31688);

return statearr_31775;
})();
var statearr_31776_31806 = state_31771__$1;
(statearr_31776_31806[(2)] = null);

(statearr_31776_31806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (4))){
var inst_31690 = (state_31771[(8)]);
var inst_31694 = (state_31771[(12)]);
var inst_31694__$1 = (state_31771[(2)]);
var inst_31695 = places.dk.natmus.extract_id.call(null,inst_31694__$1);
var inst_31696 = places.se.natmus.query_id.call(null,inst_31690);
var state_31771__$1 = (function (){var statearr_31777 = state_31771;
(statearr_31777[(12)] = inst_31694__$1);

(statearr_31777[(13)] = inst_31695);

return statearr_31777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(5),inst_31696);
} else {
if((state_val_31772 === (15))){
var state_31771__$1 = state_31771;
var statearr_31778_31807 = state_31771__$1;
(statearr_31778_31807[(2)] = (0));

(statearr_31778_31807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (13))){
var inst_31699 = (state_31771[(7)]);
var inst_31739 = (state_31771[(14)]);
var inst_31738 = (state_31771[(2)]);
var inst_31739__$1 = places.se.natmus.id__GT_entity.call(null,inst_31699,inst_31738);
var inst_31740 = places.se.natmus.entity__GT_tag.call(null,inst_31739__$1);
var state_31771__$1 = (function (){var statearr_31779 = state_31771;
(statearr_31779[(14)] = inst_31739__$1);

return statearr_31779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(14),inst_31740);
} else {
if((state_val_31772 === (6))){
var inst_31699 = (state_31771[(7)]);
var inst_31689 = (state_31771[(10)]);
var inst_31694 = (state_31771[(12)]);
var inst_31702 = (state_31771[(2)]);
var inst_31703 = places.core.svg.append("svg:image");
var inst_31704 = [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_31705 = places.dk.natmus.extract_id.call(null,inst_31694);
var inst_31706 = clojure.string.replace.call(null,inst_31705,"-","/");
var inst_31707 = places.dk.natmus.id__GT_image.call(null,inst_31706);
var inst_31708 = (inst_31689 + (15));
var inst_31709 = (inst_31689 + (15));
var inst_31710 = [inst_31707,"left",(400),(400),inst_31708,inst_31709];
var inst_31711 = cljs.core.PersistentHashMap.fromArrays(inst_31704,inst_31710);
var inst_31712 = inst_31703.attr(inst_31711);
var inst_31713 = places.se.natmus.call_image.call(null,inst_31699);
var state_31771__$1 = (function (){var statearr_31780 = state_31771;
(statearr_31780[(15)] = inst_31702);

(statearr_31780[(16)] = inst_31712);

return statearr_31780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(7),inst_31713);
} else {
if((state_val_31772 === (17))){
var inst_31688 = (state_31771[(11)]);
var inst_31759 = (state_31771[(2)]);
var inst_31760 = (inst_31688 > (9));
var state_31771__$1 = (function (){var statearr_31781 = state_31771;
(statearr_31781[(9)] = inst_31759);

return statearr_31781;
})();
if(cljs.core.truth_(inst_31760)){
var statearr_31782_31808 = state_31771__$1;
(statearr_31782_31808[(1)] = (18));

} else {
var statearr_31783_31809 = state_31771__$1;
(statearr_31783_31809[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (3))){
var inst_31769 = (state_31771[(2)]);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31771__$1,inst_31769);
} else {
if((state_val_31772 === (12))){
var inst_31688 = (state_31771[(11)]);
var inst_31753 = (state_31771[(2)]);
var inst_31754 = cljs.core._EQ_.call(null,(10),inst_31688);
var state_31771__$1 = (function (){var statearr_31784 = state_31771;
(statearr_31784[(17)] = inst_31753);

return statearr_31784;
})();
if(inst_31754){
var statearr_31785_31810 = state_31771__$1;
(statearr_31785_31810[(1)] = (15));

} else {
var statearr_31786_31811 = state_31771__$1;
(statearr_31786_31811[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (2))){
var inst_31689 = (state_31771[(10)]);
var inst_31692 = places.dk.natmus.query_id.call(null,inst_31689);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(4),inst_31692);
} else {
if((state_val_31772 === (19))){
var inst_31689 = (state_31771[(10)]);
var state_31771__$1 = state_31771;
var statearr_31787_31812 = state_31771__$1;
(statearr_31787_31812[(2)] = inst_31689);

(statearr_31787_31812[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (11))){
var state_31771__$1 = state_31771;
var statearr_31788_31813 = state_31771__$1;
(statearr_31788_31813[(2)] = null);

(statearr_31788_31813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (9))){
var inst_31699 = (state_31771[(7)]);
var inst_31702 = (state_31771[(15)]);
var inst_31731 = (state_31771[(2)]);
var inst_31732 = places.dk.natmus.extract_tags.call(null,inst_31731);
var inst_31733 = places.se.natmus.tags_QMARK_.call(null,inst_31699,inst_31702);
var inst_31734 = cljs.core.not.call(null,inst_31733);
var state_31771__$1 = (function (){var statearr_31789 = state_31771;
(statearr_31789[(18)] = inst_31732);

return statearr_31789;
})();
if(inst_31734){
var statearr_31790_31814 = state_31771__$1;
(statearr_31790_31814[(1)] = (10));

} else {
var statearr_31791_31815 = state_31771__$1;
(statearr_31791_31815[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (5))){
var inst_31699 = (state_31771[(7)]);
var inst_31698 = (state_31771[(2)]);
var inst_31699__$1 = places.se.natmus.extract_id.call(null,inst_31698);
var inst_31700 = places.se.natmus.call_base_entity.call(null,inst_31699__$1);
var state_31771__$1 = (function (){var statearr_31792 = state_31771;
(statearr_31792[(7)] = inst_31699__$1);

return statearr_31792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(6),inst_31700);
} else {
if((state_val_31772 === (14))){
var inst_31732 = (state_31771[(18)]);
var inst_31739 = (state_31771[(14)]);
var inst_31742 = (state_31771[(2)]);
var inst_31743 = places.se.natmus.extract_tags.call(null,inst_31742,inst_31739);
var inst_31744 = places.core.get_lev_text.call(null,inst_31732,inst_31743);
var inst_31745 = [cljs.core.str(inst_31744),cljs.core.str(", "),cljs.core.str(inst_31743)].join('');
var inst_31746 = places.core.update_text.call(null,inst_31745);
var inst_31747 = places.core.get_lev_text.call(null,inst_31732,inst_31743);
var inst_31748 = places.core.get_lev_number.call(null,inst_31732,inst_31743);
var inst_31749 = [cljs.core.str("lev text: "),cljs.core.str(inst_31747),cljs.core.str("sv tag: "),cljs.core.str(inst_31743),cljs.core.str("lev number"),cljs.core.str(inst_31748)].join('');
var inst_31750 = console.log(inst_31749);
var state_31771__$1 = (function (){var statearr_31793 = state_31771;
(statearr_31793[(19)] = inst_31746);

return statearr_31793;
})();
var statearr_31794_31816 = state_31771__$1;
(statearr_31794_31816[(2)] = inst_31750);

(statearr_31794_31816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (16))){
var inst_31688 = (state_31771[(11)]);
var inst_31757 = (inst_31688 + (1));
var state_31771__$1 = state_31771;
var statearr_31795_31817 = state_31771__$1;
(statearr_31795_31817[(2)] = inst_31757);

(statearr_31795_31817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (10))){
var inst_31699 = (state_31771[(7)]);
var inst_31736 = places.se.natmus.call_base_entity.call(null,inst_31699);
var state_31771__$1 = state_31771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(13),inst_31736);
} else {
if((state_val_31772 === (18))){
var inst_31689 = (state_31771[(10)]);
var inst_31762 = (inst_31689 + (1));
var state_31771__$1 = state_31771;
var statearr_31796_31818 = state_31771__$1;
(statearr_31796_31818[(2)] = inst_31762);

(statearr_31796_31818[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31772 === (8))){
var inst_31689 = (state_31771[(10)]);
var inst_31695 = (state_31771[(13)]);
var inst_31719 = (state_31771[(2)]);
var inst_31720 = places.se.natmus.extract_wiki_image.call(null,inst_31719);
var inst_31721 = places.core.svg.append("svg:image");
var inst_31722 = [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_31723 = (inst_31689 + (15));
var inst_31724 = ((500) + inst_31723);
var inst_31725 = (inst_31689 + (15));
var inst_31726 = [inst_31720,"left",(400),(400),inst_31724,inst_31725];
var inst_31727 = cljs.core.PersistentHashMap.fromArrays(inst_31722,inst_31726);
var inst_31728 = inst_31721.attr(inst_31727);
var inst_31729 = places.dk.natmus.id__GT_tags.call(null,inst_31695);
var state_31771__$1 = (function (){var statearr_31797 = state_31771;
(statearr_31797[(20)] = inst_31728);

return statearr_31797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31771__$1,(9),inst_31729);
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
});})(c__26790__auto__))
;
return ((function (switch__26769__auto__,c__26790__auto__){
return (function() {
var places$core$make_se_$_state_machine__26770__auto__ = null;
var places$core$make_se_$_state_machine__26770__auto____0 = (function (){
var statearr_31801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31801[(0)] = places$core$make_se_$_state_machine__26770__auto__);

(statearr_31801[(1)] = (1));

return statearr_31801;
});
var places$core$make_se_$_state_machine__26770__auto____1 = (function (state_31771){
while(true){
var ret_value__26771__auto__ = (function (){try{while(true){
var result__26772__auto__ = switch__26769__auto__.call(null,state_31771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26772__auto__;
}
break;
}
}catch (e31802){if((e31802 instanceof Object)){
var ex__26773__auto__ = e31802;
var statearr_31803_31819 = state_31771;
(statearr_31803_31819[(5)] = ex__26773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31820 = state_31771;
state_31771 = G__31820;
continue;
} else {
return ret_value__26771__auto__;
}
break;
}
});
places$core$make_se_$_state_machine__26770__auto__ = function(state_31771){
switch(arguments.length){
case 0:
return places$core$make_se_$_state_machine__26770__auto____0.call(this);
case 1:
return places$core$make_se_$_state_machine__26770__auto____1.call(this,state_31771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
places$core$make_se_$_state_machine__26770__auto__.cljs$core$IFn$_invoke$arity$0 = places$core$make_se_$_state_machine__26770__auto____0;
places$core$make_se_$_state_machine__26770__auto__.cljs$core$IFn$_invoke$arity$1 = places$core$make_se_$_state_machine__26770__auto____1;
return places$core$make_se_$_state_machine__26770__auto__;
})()
;})(switch__26769__auto__,c__26790__auto__))
})();
var state__26792__auto__ = (function (){var statearr_31804 = f__26791__auto__.call(null);
(statearr_31804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26790__auto__);

return statearr_31804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26792__auto__);
});})(c__26790__auto__))
);

return c__26790__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
console.log("start");
places.core.make_se.call(null);
console.log("end");

//# sourceMappingURL=core.js.map?rel=1478377249842