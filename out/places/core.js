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
return (function (p1__38588_SHARP_,p2__38587_SHARP_){
return (p2__38587_SHARP_ * (32));
});})(text))
,new cljs.core.Keyword(null,"dy","dy",1719547243),".35em"], null));

text.text(cljs.core.identity);

return text.exit().remove();
});
places.core.make_se = (function places$core$make_se(){
var c__28141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28141__auto__){
return (function (){
var f__28142__auto__ = (function (){var switch__28076__auto__ = ((function (c__28141__auto__){
return (function (state_38789){
var state_val_38790 = (state_38789[(1)]);
if((state_val_38790 === (7))){
var inst_38717 = (state_38789[(7)]);
var inst_38733 = (state_38789[(2)]);
var inst_38734 = places.se.natmus.id__GT_image.call(null,inst_38733,inst_38717);
var inst_38735 = places.se.natmus.call_wiki_image.call(null,inst_38734);
var state_38789__$1 = state_38789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38789__$1,(8),inst_38735);
} else {
if((state_val_38790 === (20))){
var inst_38777 = (state_38789[(8)]);
var inst_38708 = (state_38789[(9)]);
var inst_38783 = (state_38789[(2)]);
var inst_38784 = (inst_38708 + (1));
var inst_38706 = inst_38777;
var inst_38707 = inst_38783;
var inst_38708__$1 = inst_38784;
var state_38789__$1 = (function (){var statearr_38791 = state_38789;
(statearr_38791[(10)] = inst_38706);

(statearr_38791[(9)] = inst_38708__$1);

(statearr_38791[(11)] = inst_38707);

return statearr_38791;
})();
var statearr_38792_38823 = state_38789__$1;
(statearr_38792_38823[(2)] = null);

(statearr_38792_38823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (1))){
var inst_38706 = (0);
var inst_38707 = (1);
var inst_38708 = (1);
var state_38789__$1 = (function (){var statearr_38793 = state_38789;
(statearr_38793[(10)] = inst_38706);

(statearr_38793[(9)] = inst_38708);

(statearr_38793[(11)] = inst_38707);

return statearr_38793;
})();
var statearr_38794_38824 = state_38789__$1;
(statearr_38794_38824[(2)] = null);

(statearr_38794_38824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (4))){
var inst_38708 = (state_38789[(9)]);
var inst_38712 = (state_38789[(12)]);
var inst_38712__$1 = (state_38789[(2)]);
var inst_38713 = places.dk.natmus.extract_id.call(null,inst_38712__$1);
var inst_38714 = places.se.natmus.query_id.call(null,inst_38708);
var state_38789__$1 = (function (){var statearr_38795 = state_38789;
(statearr_38795[(12)] = inst_38712__$1);

(statearr_38795[(13)] = inst_38713);

return statearr_38795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38789__$1,(5),inst_38714);
} else {
if((state_val_38790 === (15))){
var state_38789__$1 = state_38789;
var statearr_38796_38825 = state_38789__$1;
(statearr_38796_38825[(2)] = (0));

(statearr_38796_38825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (13))){
var inst_38757 = (state_38789[(14)]);
var inst_38717 = (state_38789[(7)]);
var inst_38756 = (state_38789[(2)]);
var inst_38757__$1 = places.se.natmus.id__GT_entity.call(null,inst_38717,inst_38756);
var inst_38758 = places.se.natmus.entity__GT_tag.call(null,inst_38757__$1);
var state_38789__$1 = (function (){var statearr_38797 = state_38789;
(statearr_38797[(14)] = inst_38757__$1);

return statearr_38797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38789__$1,(14),inst_38758);
} else {
if((state_val_38790 === (6))){
var inst_38712 = (state_38789[(12)]);
var inst_38707 = (state_38789[(11)]);
var inst_38717 = (state_38789[(7)]);
var inst_38720 = (state_38789[(2)]);
var inst_38721 = places.core.svg.append("svg:image");
var inst_38722 = [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_38723 = places.dk.natmus.extract_id.call(null,inst_38712);
var inst_38724 = clojure.string.replace.call(null,inst_38723,"-","/");
var inst_38725 = places.dk.natmus.id__GT_image.call(null,inst_38724);
var inst_38726 = (inst_38707 + (15));
var inst_38727 = (inst_38707 + (15));
var inst_38728 = [inst_38725,"left",(400),(400),inst_38726,inst_38727];
var inst_38729 = cljs.core.PersistentHashMap.fromArrays(inst_38722,inst_38728);
var inst_38730 = inst_38721.attr(inst_38729);
var inst_38731 = places.se.natmus.call_image.call(null,inst_38717);
var state_38789__$1 = (function (){var statearr_38798 = state_38789;
(statearr_38798[(15)] = inst_38720);

(statearr_38798[(16)] = inst_38730);

return statearr_38798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38789__$1,(7),inst_38731);
} else {
if((state_val_38790 === (17))){
var inst_38706 = (state_38789[(10)]);
var inst_38777 = (state_38789[(2)]);
var inst_38778 = (inst_38706 > (9));
var state_38789__$1 = (function (){var statearr_38799 = state_38789;
(statearr_38799[(8)] = inst_38777);

return statearr_38799;
})();
if(cljs.core.truth_(inst_38778)){
var statearr_38800_38826 = state_38789__$1;
(statearr_38800_38826[(1)] = (18));

} else {
var statearr_38801_38827 = state_38789__$1;
(statearr_38801_38827[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (3))){
var inst_38787 = (state_38789[(2)]);
var state_38789__$1 = state_38789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38789__$1,inst_38787);
} else {
if((state_val_38790 === (12))){
var inst_38706 = (state_38789[(10)]);
var inst_38771 = (state_38789[(2)]);
var inst_38772 = cljs.core._EQ_.call(null,(10),inst_38706);
var state_38789__$1 = (function (){var statearr_38802 = state_38789;
(statearr_38802[(17)] = inst_38771);

return statearr_38802;
})();
if(inst_38772){
var statearr_38803_38828 = state_38789__$1;
(statearr_38803_38828[(1)] = (15));

} else {
var statearr_38804_38829 = state_38789__$1;
(statearr_38804_38829[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (2))){
var inst_38707 = (state_38789[(11)]);
var inst_38710 = places.dk.natmus.query_id.call(null,inst_38707);
var state_38789__$1 = state_38789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38789__$1,(4),inst_38710);
} else {
if((state_val_38790 === (19))){
var inst_38707 = (state_38789[(11)]);
var state_38789__$1 = state_38789;
var statearr_38805_38830 = state_38789__$1;
(statearr_38805_38830[(2)] = inst_38707);

(statearr_38805_38830[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (11))){
var state_38789__$1 = state_38789;
var statearr_38806_38831 = state_38789__$1;
(statearr_38806_38831[(2)] = null);

(statearr_38806_38831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (9))){
var inst_38720 = (state_38789[(15)]);
var inst_38717 = (state_38789[(7)]);
var inst_38749 = (state_38789[(2)]);
var inst_38750 = places.dk.natmus.extract_tags.call(null,inst_38749);
var inst_38751 = places.se.natmus.tags_QMARK_.call(null,inst_38717,inst_38720);
var inst_38752 = cljs.core.not.call(null,inst_38751);
var state_38789__$1 = (function (){var statearr_38807 = state_38789;
(statearr_38807[(18)] = inst_38750);

return statearr_38807;
})();
if(inst_38752){
var statearr_38808_38832 = state_38789__$1;
(statearr_38808_38832[(1)] = (10));

} else {
var statearr_38809_38833 = state_38789__$1;
(statearr_38809_38833[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (5))){
var inst_38717 = (state_38789[(7)]);
var inst_38716 = (state_38789[(2)]);
var inst_38717__$1 = places.se.natmus.extract_id.call(null,inst_38716);
var inst_38718 = places.se.natmus.call_base_entity.call(null,inst_38717__$1);
var state_38789__$1 = (function (){var statearr_38810 = state_38789;
(statearr_38810[(7)] = inst_38717__$1);

return statearr_38810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38789__$1,(6),inst_38718);
} else {
if((state_val_38790 === (14))){
var inst_38757 = (state_38789[(14)]);
var inst_38750 = (state_38789[(18)]);
var inst_38760 = (state_38789[(2)]);
var inst_38761 = places.se.natmus.extract_tags.call(null,inst_38760,inst_38757);
var inst_38762 = places.core.get_lev_text.call(null,inst_38750,inst_38761);
var inst_38763 = [cljs.core.str(inst_38762),cljs.core.str(", "),cljs.core.str(inst_38761)].join('');
var inst_38764 = places.core.update_text.call(null,inst_38763);
var inst_38765 = places.core.get_lev_text.call(null,inst_38750,inst_38761);
var inst_38766 = places.core.get_lev_number.call(null,inst_38750,inst_38761);
var inst_38767 = [cljs.core.str("lev text: "),cljs.core.str(inst_38765),cljs.core.str("sv tag: "),cljs.core.str(inst_38761),cljs.core.str("lev number"),cljs.core.str(inst_38766)].join('');
var inst_38768 = console.log(inst_38767);
var state_38789__$1 = (function (){var statearr_38811 = state_38789;
(statearr_38811[(19)] = inst_38764);

return statearr_38811;
})();
var statearr_38812_38834 = state_38789__$1;
(statearr_38812_38834[(2)] = inst_38768);

(statearr_38812_38834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (16))){
var inst_38706 = (state_38789[(10)]);
var inst_38775 = (inst_38706 + (1));
var state_38789__$1 = state_38789;
var statearr_38813_38835 = state_38789__$1;
(statearr_38813_38835[(2)] = inst_38775);

(statearr_38813_38835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (10))){
var inst_38717 = (state_38789[(7)]);
var inst_38754 = places.se.natmus.call_base_entity.call(null,inst_38717);
var state_38789__$1 = state_38789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38789__$1,(13),inst_38754);
} else {
if((state_val_38790 === (18))){
var inst_38707 = (state_38789[(11)]);
var inst_38780 = (inst_38707 + (1));
var state_38789__$1 = state_38789;
var statearr_38814_38836 = state_38789__$1;
(statearr_38814_38836[(2)] = inst_38780);

(statearr_38814_38836[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38790 === (8))){
var inst_38707 = (state_38789[(11)]);
var inst_38713 = (state_38789[(13)]);
var inst_38737 = (state_38789[(2)]);
var inst_38738 = places.se.natmus.extract_wiki_image.call(null,inst_38737);
var inst_38739 = places.core.svg.append("svg:image");
var inst_38740 = [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_38741 = (inst_38707 + (15));
var inst_38742 = ((500) + inst_38741);
var inst_38743 = (inst_38707 + (15));
var inst_38744 = [inst_38738,"left",(400),(400),inst_38742,inst_38743];
var inst_38745 = cljs.core.PersistentHashMap.fromArrays(inst_38740,inst_38744);
var inst_38746 = inst_38739.attr(inst_38745);
var inst_38747 = places.dk.natmus.id__GT_tags.call(null,inst_38713);
var state_38789__$1 = (function (){var statearr_38815 = state_38789;
(statearr_38815[(20)] = inst_38746);

return statearr_38815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38789__$1,(9),inst_38747);
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
});})(c__28141__auto__))
;
return ((function (switch__28076__auto__,c__28141__auto__){
return (function() {
var places$core$make_se_$_state_machine__28077__auto__ = null;
var places$core$make_se_$_state_machine__28077__auto____0 = (function (){
var statearr_38819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38819[(0)] = places$core$make_se_$_state_machine__28077__auto__);

(statearr_38819[(1)] = (1));

return statearr_38819;
});
var places$core$make_se_$_state_machine__28077__auto____1 = (function (state_38789){
while(true){
var ret_value__28078__auto__ = (function (){try{while(true){
var result__28079__auto__ = switch__28076__auto__.call(null,state_38789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28079__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28079__auto__;
}
break;
}
}catch (e38820){if((e38820 instanceof Object)){
var ex__28080__auto__ = e38820;
var statearr_38821_38837 = state_38789;
(statearr_38821_38837[(5)] = ex__28080__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28078__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38838 = state_38789;
state_38789 = G__38838;
continue;
} else {
return ret_value__28078__auto__;
}
break;
}
});
places$core$make_se_$_state_machine__28077__auto__ = function(state_38789){
switch(arguments.length){
case 0:
return places$core$make_se_$_state_machine__28077__auto____0.call(this);
case 1:
return places$core$make_se_$_state_machine__28077__auto____1.call(this,state_38789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
places$core$make_se_$_state_machine__28077__auto__.cljs$core$IFn$_invoke$arity$0 = places$core$make_se_$_state_machine__28077__auto____0;
places$core$make_se_$_state_machine__28077__auto__.cljs$core$IFn$_invoke$arity$1 = places$core$make_se_$_state_machine__28077__auto____1;
return places$core$make_se_$_state_machine__28077__auto__;
})()
;})(switch__28076__auto__,c__28141__auto__))
})();
var state__28143__auto__ = (function (){var statearr_38822 = f__28142__auto__.call(null);
(statearr_38822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28141__auto__);

return statearr_38822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28143__auto__);
});})(c__28141__auto__))
);

return c__28141__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
console.log("start");
places.core.make_se.call(null);
console.log("end");

//# sourceMappingURL=core.js.map?rel=1478375419082