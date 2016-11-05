// Compiled by ClojureScript 1.9.229 {}
goog.provide('mrhyde.guts');
goog.require('cljs.core');
mrhyde.guts.hyde_proto_array_marker = "$cljs$mrhyde$isarray";
mrhyde.guts.hyde_proto_object_marker = "$cljs$mrhyde$isobject";
mrhyde.guts.get_store_cur_js_fn = (function mrhyde$guts$get_store_cur_js_fn(o,field_name){
var cur_fn = (o[field_name]);
var js_fn_name = [cljs.core.str("_js_"),cljs.core.str(field_name)].join('');
var root_fn = (o[js_fn_name]);
if(cljs.core._EQ_.call(null,undefined,root_fn)){
(o[js_fn_name] = cur_fn);
} else {
}

return cur_fn;
});
mrhyde.guts.restore_original_js_fn = (function mrhyde$guts$restore_original_js_fn(o,field_name){
var js_fn_name = [cljs.core.str("_js_"),cljs.core.str(field_name)].join('');
var root_fn = (o[js_fn_name]);
if(cljs.core.not_EQ_.call(null,undefined,root_fn)){
(o[field_name] = root_fn);
} else {
}

return root_fn;
});

//# sourceMappingURL=guts.js.map?rel=1478134416187