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
goog.require('clojure.string');
goog.require('strokes');
strokes.bootstrap.call(null);
places.core.margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"right","right",-452581833),(10),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(20),new cljs.core.Keyword(null,"left","left",-399115937),(10)], null);
places.core.width = (((960) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(places.core.margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(places.core.margin));
places.core.height = (((500) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(places.core.margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(places.core.margin));
places.core.svg = strokes.d3.select("#landp-node").append("svg").attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((places.core.width + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(places.core.margin)) + new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(places.core.margin)),new cljs.core.Keyword(null,"height","height",1025178622),((places.core.height + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(places.core.margin)) + new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(places.core.margin))], null)).append("g").attr(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(places.core.margin)),cljs.core.str(", "),cljs.core.str(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(places.core.margin)),cljs.core.str(")")].join('')], null));
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
return (function (p1__8670_SHARP_,p2__8669_SHARP_){
return (p2__8669_SHARP_ * (32));
});})(text))
,new cljs.core.Keyword(null,"dy","dy",1719547243),".35em"], null));

text.text(cljs.core.identity);

return text.exit().remove();
});
places.core.make_se = (function places$core$make_se(){
var c__8432__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8432__auto__){
return (function (){
var f__8433__auto__ = (function (){var switch__8411__auto__ = ((function (c__8432__auto__){
return (function (state_8909){
var state_val_8910 = (state_8909[(1)]);
if((state_val_8910 === (7))){
var inst_8823 = (state_8909[(7)]);
var inst_8839 = (state_8909[(2)]);
var inst_8840 = places.se.natmus.id__GT_image.call(null,inst_8839,inst_8823);
var inst_8841 = places.se.natmus.call_wiki_image.call(null,inst_8840);
var state_8909__$1 = state_8909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(8),inst_8841);
} else {
if((state_val_8910 === (20))){
var inst_8870 = (state_8909[(8)]);
var inst_8877 = (state_8909[(9)]);
var inst_8880 = (state_8909[(2)]);
var inst_8881 = places.se.natmus.extract_tags.call(null,inst_8880,inst_8877);
var inst_8882 = places.core.get_lev_text.call(null,inst_8870,inst_8881);
var inst_8883 = [cljs.core.str(inst_8882),cljs.core.str(", "),cljs.core.str(inst_8881)].join('');
var inst_8884 = places.core.update_text.call(null,inst_8883);
var inst_8885 = places.core.get_lev_text.call(null,inst_8870,inst_8881);
var inst_8886 = places.core.get_lev_number.call(null,inst_8870,inst_8881);
var inst_8887 = [cljs.core.str("lev text: "),cljs.core.str(inst_8885),cljs.core.str("sv tag: "),cljs.core.str(inst_8881),cljs.core.str("lev number"),cljs.core.str(inst_8886)].join('');
var inst_8888 = console.log(inst_8887);
var state_8909__$1 = (function (){var statearr_8911 = state_8909;
(statearr_8911[(10)] = inst_8884);

return statearr_8911;
})();
var statearr_8912_8953 = state_8909__$1;
(statearr_8912_8953[(2)] = inst_8888);

(statearr_8912_8953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (1))){
var inst_8812 = (0);
var inst_8813 = (1);
var inst_8814 = (1);
var state_8909__$1 = (function (){var statearr_8913 = state_8909;
(statearr_8913[(11)] = inst_8812);

(statearr_8913[(12)] = inst_8814);

(statearr_8913[(13)] = inst_8813);

return statearr_8913;
})();
var statearr_8914_8954 = state_8909__$1;
(statearr_8914_8954[(2)] = null);

(statearr_8914_8954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (24))){
var inst_8813 = (state_8909[(13)]);
var inst_8900 = (inst_8813 + (1));
var state_8909__$1 = state_8909;
var statearr_8915_8955 = state_8909__$1;
(statearr_8915_8955[(2)] = inst_8900);

(statearr_8915_8955[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (4))){
var inst_8818 = (state_8909[(14)]);
var inst_8814 = (state_8909[(12)]);
var inst_8818__$1 = (state_8909[(2)]);
var inst_8819 = places.dk.natmus.extract_id.call(null,inst_8818__$1);
var inst_8820 = places.se.natmus.query_id.call(null,inst_8814);
var state_8909__$1 = (function (){var statearr_8916 = state_8909;
(statearr_8916[(14)] = inst_8818__$1);

(statearr_8916[(15)] = inst_8819);

return statearr_8916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(5),inst_8820);
} else {
if((state_val_8910 === (15))){
var inst_8823 = (state_8909[(7)]);
var inst_8826 = (state_8909[(16)]);
var inst_8869 = (state_8909[(2)]);
var inst_8870 = places.dk.natmus.extract_tags.call(null,inst_8869);
var inst_8871 = places.se.natmus.tags_QMARK_.call(null,inst_8823,inst_8826);
var inst_8872 = cljs.core.not.call(null,inst_8871);
var state_8909__$1 = (function (){var statearr_8917 = state_8909;
(statearr_8917[(8)] = inst_8870);

return statearr_8917;
})();
if(inst_8872){
var statearr_8918_8956 = state_8909__$1;
(statearr_8918_8956[(1)] = (16));

} else {
var statearr_8919_8957 = state_8909__$1;
(statearr_8919_8957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (21))){
var state_8909__$1 = state_8909;
var statearr_8920_8958 = state_8909__$1;
(statearr_8920_8958[(2)] = (0));

(statearr_8920_8958[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (13))){
var state_8909__$1 = state_8909;
var statearr_8921_8959 = state_8909__$1;
(statearr_8921_8959[(2)] = null);

(statearr_8921_8959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (22))){
var inst_8812 = (state_8909[(11)]);
var inst_8895 = (inst_8812 + (1));
var state_8909__$1 = state_8909;
var statearr_8922_8960 = state_8909__$1;
(statearr_8922_8960[(2)] = inst_8895);

(statearr_8922_8960[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (6))){
var inst_8818 = (state_8909[(14)]);
var inst_8823 = (state_8909[(7)]);
var inst_8813 = (state_8909[(13)]);
var inst_8826 = (state_8909[(2)]);
var inst_8827 = places.core.svg.append("svg:image");
var inst_8828 = [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_8829 = places.dk.natmus.extract_id.call(null,inst_8818);
var inst_8830 = clojure.string.replace.call(null,inst_8829,"-","/");
var inst_8831 = places.dk.natmus.id__GT_image.call(null,inst_8830);
var inst_8832 = (inst_8813 + (15));
var inst_8833 = (inst_8813 + (15));
var inst_8834 = [inst_8831,"left",(400),(400),inst_8832,inst_8833];
var inst_8835 = cljs.core.PersistentHashMap.fromArrays(inst_8828,inst_8834);
var inst_8836 = inst_8827.attr(inst_8835);
var inst_8837 = places.se.natmus.call_image.call(null,inst_8823);
var state_8909__$1 = (function (){var statearr_8923 = state_8909;
(statearr_8923[(17)] = inst_8836);

(statearr_8923[(16)] = inst_8826);

return statearr_8923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(7),inst_8837);
} else {
if((state_val_8910 === (25))){
var inst_8813 = (state_8909[(13)]);
var state_8909__$1 = state_8909;
var statearr_8924_8961 = state_8909__$1;
(statearr_8924_8961[(2)] = inst_8813);

(statearr_8924_8961[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (17))){
var state_8909__$1 = state_8909;
var statearr_8925_8962 = state_8909__$1;
(statearr_8925_8962[(2)] = null);

(statearr_8925_8962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (3))){
var inst_8907 = (state_8909[(2)]);
var state_8909__$1 = state_8909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8909__$1,inst_8907);
} else {
if((state_val_8910 === (12))){
var inst_8844 = (state_8909[(18)]);
var inst_8813 = (state_8909[(13)]);
var inst_8852 = places.core.svg.append("svg:image");
var inst_8853 = [new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_8854 = (inst_8813 + (15));
var inst_8855 = ((500) + inst_8854);
var inst_8856 = (inst_8813 + (15));
var inst_8857 = [inst_8844,"left",(400),(400),inst_8855,inst_8856];
var inst_8858 = cljs.core.PersistentHashMap.fromArrays(inst_8853,inst_8857);
var inst_8859 = inst_8852.attr(inst_8858);
var inst_8860 = console.log(inst_8844);
var state_8909__$1 = (function (){var statearr_8926 = state_8909;
(statearr_8926[(19)] = inst_8859);

return statearr_8926;
})();
var statearr_8927_8963 = state_8909__$1;
(statearr_8927_8963[(2)] = inst_8860);

(statearr_8927_8963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (2))){
var inst_8813 = (state_8909[(13)]);
var inst_8816 = places.dk.natmus.query_id.call(null,inst_8813);
var state_8909__$1 = state_8909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(4),inst_8816);
} else {
if((state_val_8910 === (23))){
var inst_8812 = (state_8909[(11)]);
var inst_8897 = (state_8909[(2)]);
var inst_8898 = (inst_8812 > (9));
var state_8909__$1 = (function (){var statearr_8928 = state_8909;
(statearr_8928[(20)] = inst_8897);

return statearr_8928;
})();
if(cljs.core.truth_(inst_8898)){
var statearr_8929_8964 = state_8909__$1;
(statearr_8929_8964[(1)] = (24));

} else {
var statearr_8930_8965 = state_8909__$1;
(statearr_8930_8965[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (19))){
var inst_8823 = (state_8909[(7)]);
var inst_8877 = (state_8909[(9)]);
var inst_8876 = (state_8909[(2)]);
var inst_8877__$1 = places.se.natmus.id__GT_entity.call(null,inst_8823,inst_8876);
var inst_8878 = places.se.natmus.entity__GT_tag.call(null,inst_8877__$1);
var state_8909__$1 = (function (){var statearr_8931 = state_8909;
(statearr_8931[(9)] = inst_8877__$1);

return statearr_8931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(20),inst_8878);
} else {
if((state_val_8910 === (11))){
var inst_8819 = (state_8909[(15)]);
var inst_8866 = (state_8909[(2)]);
var inst_8867 = places.dk.natmus.id__GT_tags.call(null,inst_8819);
var state_8909__$1 = (function (){var statearr_8932 = state_8909;
(statearr_8932[(21)] = inst_8866);

return statearr_8932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(15),inst_8867);
} else {
if((state_val_8910 === (9))){
var inst_8844 = (state_8909[(18)]);
var inst_8849 = clojure.string.ends_with_QMARK_.call(null,inst_8844,"tif");
var inst_8850 = !(inst_8849);
var state_8909__$1 = state_8909;
if(inst_8850){
var statearr_8933_8966 = state_8909__$1;
(statearr_8933_8966[(1)] = (12));

} else {
var statearr_8934_8967 = state_8909__$1;
(statearr_8934_8967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (5))){
var inst_8823 = (state_8909[(7)]);
var inst_8822 = (state_8909[(2)]);
var inst_8823__$1 = places.se.natmus.extract_id.call(null,inst_8822);
var inst_8824 = places.se.natmus.call_base_entity.call(null,inst_8823__$1);
var state_8909__$1 = (function (){var statearr_8935 = state_8909;
(statearr_8935[(7)] = inst_8823__$1);

return statearr_8935;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(6),inst_8824);
} else {
if((state_val_8910 === (14))){
var inst_8863 = (state_8909[(2)]);
var state_8909__$1 = state_8909;
var statearr_8936_8968 = state_8909__$1;
(statearr_8936_8968[(2)] = inst_8863);

(statearr_8936_8968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (26))){
var inst_8814 = (state_8909[(12)]);
var inst_8897 = (state_8909[(20)]);
var inst_8903 = (state_8909[(2)]);
var inst_8904 = (inst_8814 + (1));
var inst_8812 = inst_8897;
var inst_8813 = inst_8903;
var inst_8814__$1 = inst_8904;
var state_8909__$1 = (function (){var statearr_8937 = state_8909;
(statearr_8937[(11)] = inst_8812);

(statearr_8937[(12)] = inst_8814__$1);

(statearr_8937[(13)] = inst_8813);

return statearr_8937;
})();
var statearr_8938_8969 = state_8909__$1;
(statearr_8938_8969[(2)] = null);

(statearr_8938_8969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (16))){
var inst_8823 = (state_8909[(7)]);
var inst_8874 = places.se.natmus.call_base_entity.call(null,inst_8823);
var state_8909__$1 = state_8909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8909__$1,(19),inst_8874);
} else {
if((state_val_8910 === (10))){
var state_8909__$1 = state_8909;
var statearr_8939_8970 = state_8909__$1;
(statearr_8939_8970[(2)] = null);

(statearr_8939_8970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (18))){
var inst_8812 = (state_8909[(11)]);
var inst_8891 = (state_8909[(2)]);
var inst_8892 = cljs.core._EQ_.call(null,(10),inst_8812);
var state_8909__$1 = (function (){var statearr_8940 = state_8909;
(statearr_8940[(22)] = inst_8891);

return statearr_8940;
})();
if(inst_8892){
var statearr_8941_8971 = state_8909__$1;
(statearr_8941_8971[(1)] = (21));

} else {
var statearr_8942_8972 = state_8909__$1;
(statearr_8942_8972[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8910 === (8))){
var inst_8844 = (state_8909[(18)]);
var inst_8843 = (state_8909[(2)]);
var inst_8844__$1 = places.se.natmus.extract_wiki_image.call(null,inst_8843);
var inst_8845 = console.log(inst_8844__$1);
var inst_8846 = (inst_8844__$1 == null);
var inst_8847 = cljs.core.not.call(null,inst_8846);
var state_8909__$1 = (function (){var statearr_8943 = state_8909;
(statearr_8943[(18)] = inst_8844__$1);

(statearr_8943[(23)] = inst_8845);

return statearr_8943;
})();
if(inst_8847){
var statearr_8944_8973 = state_8909__$1;
(statearr_8944_8973[(1)] = (9));

} else {
var statearr_8945_8974 = state_8909__$1;
(statearr_8945_8974[(1)] = (10));

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
});})(c__8432__auto__))
;
return ((function (switch__8411__auto__,c__8432__auto__){
return (function() {
var places$core$make_se_$_state_machine__8412__auto__ = null;
var places$core$make_se_$_state_machine__8412__auto____0 = (function (){
var statearr_8949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8949[(0)] = places$core$make_se_$_state_machine__8412__auto__);

(statearr_8949[(1)] = (1));

return statearr_8949;
});
var places$core$make_se_$_state_machine__8412__auto____1 = (function (state_8909){
while(true){
var ret_value__8413__auto__ = (function (){try{while(true){
var result__8414__auto__ = switch__8411__auto__.call(null,state_8909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8414__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8414__auto__;
}
break;
}
}catch (e8950){if((e8950 instanceof Object)){
var ex__8415__auto__ = e8950;
var statearr_8951_8975 = state_8909;
(statearr_8951_8975[(5)] = ex__8415__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8413__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8976 = state_8909;
state_8909 = G__8976;
continue;
} else {
return ret_value__8413__auto__;
}
break;
}
});
places$core$make_se_$_state_machine__8412__auto__ = function(state_8909){
switch(arguments.length){
case 0:
return places$core$make_se_$_state_machine__8412__auto____0.call(this);
case 1:
return places$core$make_se_$_state_machine__8412__auto____1.call(this,state_8909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
places$core$make_se_$_state_machine__8412__auto__.cljs$core$IFn$_invoke$arity$0 = places$core$make_se_$_state_machine__8412__auto____0;
places$core$make_se_$_state_machine__8412__auto__.cljs$core$IFn$_invoke$arity$1 = places$core$make_se_$_state_machine__8412__auto____1;
return places$core$make_se_$_state_machine__8412__auto__;
})()
;})(switch__8411__auto__,c__8432__auto__))
})();
var state__8434__auto__ = (function (){var statearr_8952 = f__8433__auto__.call(null);
(statearr_8952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8432__auto__);

return statearr_8952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8434__auto__);
});})(c__8432__auto__))
);

return c__8432__auto__;
});
cljs.core.enable_console_print_BANG_.call(null);
console.log("start");
places.core.make_se.call(null);
console.log("end");

//# sourceMappingURL=core.js.map