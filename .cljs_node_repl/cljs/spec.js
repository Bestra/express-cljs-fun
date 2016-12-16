// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__29392__auto__ = (((spec == null))?null:spec);
var m__29393__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__29392__auto__)]);
if(!((m__29393__auto__ == null))){
return m__29393__auto__.call(null,spec,x);
} else {
var m__29393__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__29393__auto____$1 == null))){
return m__29393__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__29392__auto__ = (((spec == null))?null:spec);
var m__29393__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__29392__auto__)]);
if(!((m__29393__auto__ == null))){
return m__29393__auto__.call(null,spec,y);
} else {
var m__29393__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__29393__auto____$1 == null))){
return m__29393__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__29392__auto__ = (((spec == null))?null:spec);
var m__29393__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__29392__auto__)]);
if(!((m__29393__auto__ == null))){
return m__29393__auto__.call(null,spec,path,via,in$,x);
} else {
var m__29393__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__29393__auto____$1 == null))){
return m__29393__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__29392__auto__ = (((spec == null))?null:spec);
var m__29393__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__29392__auto__)]);
if(!((m__29393__auto__ == null))){
return m__29393__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__29393__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__29393__auto____$1 == null))){
return m__29393__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__29392__auto__ = (((spec == null))?null:spec);
var m__29393__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__29392__auto__)]);
if(!((m__29393__auto__ == null))){
return m__29393__auto__.call(null,spec,gfn);
} else {
var m__29393__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__29393__auto____$1 == null))){
return m__29393__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__29392__auto__ = (((spec == null))?null:spec);
var m__29393__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__29392__auto__)]);
if(!((m__29393__auto__ == null))){
return m__29393__auto__.call(null,spec);
} else {
var m__29393__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__29393__auto____$1 == null))){
return m__29393__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__31116 = cljs.core.get.call(null,reg,spec);
spec = G__31116;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__28679__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__28667__auto__ = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$Spec$)))?true:false):false);
if(and__28667__auto__){
return x;
} else {
return and__28667__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__28667__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__28667__auto__)){
return x;
} else {
return and__28667__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__28679__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
var or__28679__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__28679__auto____$1)){
return or__28679__auto____$1;
} else {
var or__28679__auto____$2 = (function (){var and__28667__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__28667__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__28667__auto__;
}
})();
if(cljs.core.truth_(or__28679__auto____$2)){
return or__28679__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__28679__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__28679__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__28667__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__28667__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__28667__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__28667__auto__ = (form instanceof cljs.core.Symbol);
if(and__28667__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__28667__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6753__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__6753__auto__)){
var probs = temp__6753__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6751__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.explain_printer = (function cljs$spec$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__29766__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31161_31201 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31162_31202 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31161_31201,_STAR_print_fn_STAR_31162_31202,sb__29766__auto__){
return (function (x__29767__auto__){
return sb__29766__auto__.append(x__29767__auto__);
});})(_STAR_print_newline_STAR_31161_31201,_STAR_print_fn_STAR_31162_31202,sb__29766__auto__))
;

try{var seq__31163_31203 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__31164_31204 = null;
var count__31165_31205 = (0);
var i__31166_31206 = (0);
while(true){
if((i__31166_31206 < count__31165_31205)){
var map__31167_31207 = cljs.core._nth.call(null,chunk__31164_31204,i__31166_31206);
var map__31167_31208__$1 = ((((!((map__31167_31207 == null)))?((((map__31167_31207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31167_31207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31167_31207):map__31167_31207);
var prob_31209 = map__31167_31208__$1;
var path_31210 = cljs.core.get.call(null,map__31167_31208__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_31211 = cljs.core.get.call(null,map__31167_31208__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_31212 = cljs.core.get.call(null,map__31167_31208__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_31213 = cljs.core.get.call(null,map__31167_31208__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_31214 = cljs.core.get.call(null,map__31167_31208__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_31215 = cljs.core.get.call(null,map__31167_31208__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_31215)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_31215),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_31212);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_31214)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_31214)));
}

if(cljs.core.empty_QMARK_.call(null,path_31210)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_31210));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_31211));

if(cljs.core.truth_(reason_31213)){
cljs.core.print.call(null,", ",reason_31213);
} else {
}

var seq__31169_31216 = cljs.core.seq.call(null,prob_31209);
var chunk__31170_31217 = null;
var count__31171_31218 = (0);
var i__31172_31219 = (0);
while(true){
if((i__31172_31219 < count__31171_31218)){
var vec__31173_31220 = cljs.core._nth.call(null,chunk__31170_31217,i__31172_31219);
var k_31221 = cljs.core.nth.call(null,vec__31173_31220,(0),null);
var v_31222 = cljs.core.nth.call(null,vec__31173_31220,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_31221))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_31221)," ");

cljs.core.pr.call(null,v_31222);
}

var G__31223 = seq__31169_31216;
var G__31224 = chunk__31170_31217;
var G__31225 = count__31171_31218;
var G__31226 = (i__31172_31219 + (1));
seq__31169_31216 = G__31223;
chunk__31170_31217 = G__31224;
count__31171_31218 = G__31225;
i__31172_31219 = G__31226;
continue;
} else {
var temp__6753__auto___31227 = cljs.core.seq.call(null,seq__31169_31216);
if(temp__6753__auto___31227){
var seq__31169_31228__$1 = temp__6753__auto___31227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31169_31228__$1)){
var c__29585__auto___31229 = cljs.core.chunk_first.call(null,seq__31169_31228__$1);
var G__31230 = cljs.core.chunk_rest.call(null,seq__31169_31228__$1);
var G__31231 = c__29585__auto___31229;
var G__31232 = cljs.core.count.call(null,c__29585__auto___31229);
var G__31233 = (0);
seq__31169_31216 = G__31230;
chunk__31170_31217 = G__31231;
count__31171_31218 = G__31232;
i__31172_31219 = G__31233;
continue;
} else {
var vec__31176_31234 = cljs.core.first.call(null,seq__31169_31228__$1);
var k_31235 = cljs.core.nth.call(null,vec__31176_31234,(0),null);
var v_31236 = cljs.core.nth.call(null,vec__31176_31234,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_31235))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_31235)," ");

cljs.core.pr.call(null,v_31236);
}

var G__31237 = cljs.core.next.call(null,seq__31169_31228__$1);
var G__31238 = null;
var G__31239 = (0);
var G__31240 = (0);
seq__31169_31216 = G__31237;
chunk__31170_31217 = G__31238;
count__31171_31218 = G__31239;
i__31172_31219 = G__31240;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__31241 = seq__31163_31203;
var G__31242 = chunk__31164_31204;
var G__31243 = count__31165_31205;
var G__31244 = (i__31166_31206 + (1));
seq__31163_31203 = G__31241;
chunk__31164_31204 = G__31242;
count__31165_31205 = G__31243;
i__31166_31206 = G__31244;
continue;
} else {
var temp__6753__auto___31245 = cljs.core.seq.call(null,seq__31163_31203);
if(temp__6753__auto___31245){
var seq__31163_31246__$1 = temp__6753__auto___31245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31163_31246__$1)){
var c__29585__auto___31247 = cljs.core.chunk_first.call(null,seq__31163_31246__$1);
var G__31248 = cljs.core.chunk_rest.call(null,seq__31163_31246__$1);
var G__31249 = c__29585__auto___31247;
var G__31250 = cljs.core.count.call(null,c__29585__auto___31247);
var G__31251 = (0);
seq__31163_31203 = G__31248;
chunk__31164_31204 = G__31249;
count__31165_31205 = G__31250;
i__31166_31206 = G__31251;
continue;
} else {
var map__31179_31252 = cljs.core.first.call(null,seq__31163_31246__$1);
var map__31179_31253__$1 = ((((!((map__31179_31252 == null)))?((((map__31179_31252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31179_31252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31179_31252):map__31179_31252);
var prob_31254 = map__31179_31253__$1;
var path_31255 = cljs.core.get.call(null,map__31179_31253__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_31256 = cljs.core.get.call(null,map__31179_31253__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_31257 = cljs.core.get.call(null,map__31179_31253__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_31258 = cljs.core.get.call(null,map__31179_31253__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_31259 = cljs.core.get.call(null,map__31179_31253__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_31260 = cljs.core.get.call(null,map__31179_31253__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_31260)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_31260),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_31257);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_31259)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_31259)));
}

if(cljs.core.empty_QMARK_.call(null,path_31255)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_31255));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_31256));

if(cljs.core.truth_(reason_31258)){
cljs.core.print.call(null,", ",reason_31258);
} else {
}

var seq__31181_31261 = cljs.core.seq.call(null,prob_31254);
var chunk__31182_31262 = null;
var count__31183_31263 = (0);
var i__31184_31264 = (0);
while(true){
if((i__31184_31264 < count__31183_31263)){
var vec__31185_31265 = cljs.core._nth.call(null,chunk__31182_31262,i__31184_31264);
var k_31266 = cljs.core.nth.call(null,vec__31185_31265,(0),null);
var v_31267 = cljs.core.nth.call(null,vec__31185_31265,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_31266))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_31266)," ");

cljs.core.pr.call(null,v_31267);
}

var G__31268 = seq__31181_31261;
var G__31269 = chunk__31182_31262;
var G__31270 = count__31183_31263;
var G__31271 = (i__31184_31264 + (1));
seq__31181_31261 = G__31268;
chunk__31182_31262 = G__31269;
count__31183_31263 = G__31270;
i__31184_31264 = G__31271;
continue;
} else {
var temp__6753__auto___31272__$1 = cljs.core.seq.call(null,seq__31181_31261);
if(temp__6753__auto___31272__$1){
var seq__31181_31273__$1 = temp__6753__auto___31272__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31181_31273__$1)){
var c__29585__auto___31274 = cljs.core.chunk_first.call(null,seq__31181_31273__$1);
var G__31275 = cljs.core.chunk_rest.call(null,seq__31181_31273__$1);
var G__31276 = c__29585__auto___31274;
var G__31277 = cljs.core.count.call(null,c__29585__auto___31274);
var G__31278 = (0);
seq__31181_31261 = G__31275;
chunk__31182_31262 = G__31276;
count__31183_31263 = G__31277;
i__31184_31264 = G__31278;
continue;
} else {
var vec__31188_31279 = cljs.core.first.call(null,seq__31181_31273__$1);
var k_31280 = cljs.core.nth.call(null,vec__31188_31279,(0),null);
var v_31281 = cljs.core.nth.call(null,vec__31188_31279,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_31280))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_31280)," ");

cljs.core.pr.call(null,v_31281);
}

var G__31282 = cljs.core.next.call(null,seq__31181_31273__$1);
var G__31283 = null;
var G__31284 = (0);
var G__31285 = (0);
seq__31181_31261 = G__31282;
chunk__31182_31262 = G__31283;
count__31183_31263 = G__31284;
i__31184_31264 = G__31285;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__31286 = cljs.core.next.call(null,seq__31163_31246__$1);
var G__31287 = null;
var G__31288 = (0);
var G__31289 = (0);
seq__31163_31203 = G__31286;
chunk__31164_31204 = G__31287;
count__31165_31205 = G__31288;
i__31166_31206 = G__31289;
continue;
}
} else {
}
}
break;
}

var seq__31191_31290 = cljs.core.seq.call(null,ed);
var chunk__31192_31291 = null;
var count__31193_31292 = (0);
var i__31194_31293 = (0);
while(true){
if((i__31194_31293 < count__31193_31292)){
var vec__31195_31294 = cljs.core._nth.call(null,chunk__31192_31291,i__31194_31293);
var k_31295 = cljs.core.nth.call(null,vec__31195_31294,(0),null);
var v_31296 = cljs.core.nth.call(null,vec__31195_31294,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_31295))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_31295)," ");

cljs.core.pr.call(null,v_31296);

cljs.core.newline.call(null);
}

var G__31297 = seq__31191_31290;
var G__31298 = chunk__31192_31291;
var G__31299 = count__31193_31292;
var G__31300 = (i__31194_31293 + (1));
seq__31191_31290 = G__31297;
chunk__31192_31291 = G__31298;
count__31193_31292 = G__31299;
i__31194_31293 = G__31300;
continue;
} else {
var temp__6753__auto___31301 = cljs.core.seq.call(null,seq__31191_31290);
if(temp__6753__auto___31301){
var seq__31191_31302__$1 = temp__6753__auto___31301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31191_31302__$1)){
var c__29585__auto___31303 = cljs.core.chunk_first.call(null,seq__31191_31302__$1);
var G__31304 = cljs.core.chunk_rest.call(null,seq__31191_31302__$1);
var G__31305 = c__29585__auto___31303;
var G__31306 = cljs.core.count.call(null,c__29585__auto___31303);
var G__31307 = (0);
seq__31191_31290 = G__31304;
chunk__31192_31291 = G__31305;
count__31193_31292 = G__31306;
i__31194_31293 = G__31307;
continue;
} else {
var vec__31198_31308 = cljs.core.first.call(null,seq__31191_31302__$1);
var k_31309 = cljs.core.nth.call(null,vec__31198_31308,(0),null);
var v_31310 = cljs.core.nth.call(null,vec__31198_31308,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_31309))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_31309)," ");

cljs.core.pr.call(null,v_31310);

cljs.core.newline.call(null);
}

var G__31311 = cljs.core.next.call(null,seq__31191_31302__$1);
var G__31312 = null;
var G__31313 = (0);
var G__31314 = (0);
seq__31191_31290 = G__31311;
chunk__31192_31291 = G__31312;
count__31193_31292 = G__31313;
i__31194_31293 = G__31314;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31162_31202;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31161_31201;
}
return [cljs.core.str(sb__29766__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec._STAR_explain_out_STAR_ = cljs.spec.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
return cljs.spec._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__29766__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31317_31319 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31318_31320 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31317_31319,_STAR_print_fn_STAR_31318_31320,sb__29766__auto__){
return (function (x__29767__auto__){
return sb__29766__auto__.append(x__29767__auto__);
});})(_STAR_print_newline_STAR_31317_31319,_STAR_print_fn_STAR_31318_31320,sb__29766__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31318_31320;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31317_31319;
}
return [cljs.core.str(sb__29766__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__6751__auto__ = (function (){var or__28679__auto__ = (function (){var temp__6753__auto__ = (function (){var or__28679__auto__ = cljs.core.get.call(null,overrides,(function (){var or__28679__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var gfn = temp__6753__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var g = temp__6751__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__6751__auto__,spec__$1){
return (function (p1__31321_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__31321_SHARP_);
});})(g,temp__6751__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args31322 = [];
var len__29895__auto___31325 = arguments.length;
var i__29896__auto___31326 = (0);
while(true){
if((i__29896__auto___31326 < len__29895__auto___31325)){
args31322.push((arguments[i__29896__auto___31326]));

var G__31327 = (i__29896__auto___31326 + (1));
i__29896__auto___31326 = G__31327;
continue;
} else {
}
break;
}

var G__31324 = args31322.length;
switch (G__31324) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31322.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__28667__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__28667__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__28667__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__28679__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
var or__28679__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__28679__auto____$1)){
return or__28679__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__6753__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6753__auto__)){
var arg_spec = temp__6753__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6751__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__29766__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31331_31333 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31332_31334 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31331_31333,_STAR_print_fn_STAR_31332_31334,sb__29766__auto__,ed,arg_spec,temp__6753__auto__,specs){
return (function (x__29767__auto__){
return sb__29766__auto__.append(x__29767__auto__);
});})(_STAR_print_newline_STAR_31331_31333,_STAR_print_fn_STAR_31332_31334,sb__29766__auto__,ed,arg_spec,temp__6753__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31332_31334;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31331_31333;
}
return [cljs.core.str(sb__29766__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__28679__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args31335 = [];
var len__29895__auto___31338 = arguments.length;
var i__29896__auto___31339 = (0);
while(true){
if((i__29896__auto___31339 < len__29895__auto___31338)){
args31335.push((arguments[i__29896__auto___31339]));

var G__31340 = (i__29896__auto___31339 + (1));
i__29896__auto___31339 = G__31340;
continue;
} else {
}
break;
}

var G__31337 = args31335.length;
switch (G__31337) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31335.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6751__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__6751__auto__)){
var spec = temp__6751__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args31342 = [];
var len__29895__auto___31345 = arguments.length;
var i__29896__auto___31346 = (0);
while(true){
if((i__29896__auto___31346 < len__29895__auto___31345)){
args31342.push((arguments[i__29896__auto___31346]));

var G__31347 = (i__29896__auto___31346 + (1));
i__29896__auto___31346 = G__31347;
continue;
} else {
}
break;
}

var G__31344 = args31342.length;
switch (G__31344) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31342.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__6751__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__31352){
var map__31383 = p__31352;
var map__31383__$1 = ((((!((map__31383 == null)))?((((map__31383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31383):map__31383);
var argm = map__31383__$1;
var opt = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__31383__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__31349_SHARP_){
var or__28679__auto__ = k__GT_s.call(null,p1__31349_SHARP_);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return p1__31349_SHARP_;
}
});})(keys_pred,k__GT_s,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec31385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec31385 = (function (p__31352,opt,req_un,opt_un,map__31383,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta31386){
this.p__31352 = p__31352;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.map__31383 = map__31383;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta31386 = meta31386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_31387,meta31386__$1){
var self__ = this;
var _31387__$1 = this;
return (new cljs.spec.t_cljs$spec31385(self__.p__31352,self__.opt,self__.req_un,self__.opt_un,self__.map__31383,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta31386__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec31385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_31387){
var self__ = this;
var _31387__$1 = this;
return self__.meta31386;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec31385.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31385.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__31391 = cljs.core.keys.call(null,m);
var vec__31392 = G__31391;
var seq__31393 = cljs.core.seq.call(null,vec__31392);
var first__31394 = cljs.core.first.call(null,seq__31393);
var seq__31393__$1 = cljs.core.next.call(null,seq__31393);
var k = first__31394;
var ks = seq__31393__$1;
var keys = vec__31392;
var ret__$1 = ret;
var G__31391__$1 = G__31391;
while(true){
var ret__$2 = ret__$1;
var vec__31395 = G__31391__$1;
var seq__31396 = cljs.core.seq.call(null,vec__31395);
var first__31397 = cljs.core.first.call(null,seq__31396);
var seq__31396__$1 = cljs.core.next.call(null,seq__31396);
var k__$1 = first__31397;
var ks__$1 = seq__31396__$1;
var keys__$1 = vec__31395;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__31413 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__31414 = ks__$1;
ret__$1 = G__31413;
G__31391__$1 = G__31414;
continue;
}
} else {
var G__31415 = ret__$2;
var G__31416 = ks__$1;
ret__$1 = G__31415;
G__31391__$1 = G__31416;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec31385.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__31401 = cljs.core.keys.call(null,m);
var vec__31402 = G__31401;
var seq__31403 = cljs.core.seq.call(null,vec__31402);
var first__31404 = cljs.core.first.call(null,seq__31403);
var seq__31403__$1 = cljs.core.next.call(null,seq__31403);
var k = first__31404;
var ks = seq__31403__$1;
var keys = vec__31402;
var ret__$1 = ret;
var G__31401__$1 = G__31401;
while(true){
var ret__$2 = ret__$1;
var vec__31405 = G__31401__$1;
var seq__31406 = cljs.core.seq.call(null,vec__31405);
var first__31407 = cljs.core.first.call(null,seq__31406);
var seq__31406__$1 = cljs.core.next.call(null,seq__31406);
var k__$1 = first__31407;
var ks__$1 = seq__31406__$1;
var keys__$1 = vec__31405;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__31417 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__31418 = ks__$1;
ret__$1 = G__31417;
G__31401__$1 = G__31418;
continue;
} else {
var G__31419 = ret__$2;
var G__31420 = ks__$1;
ret__$1 = G__31419;
G__31401__$1 = G__31420;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec31385.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__6753__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6753__auto__){
var probs = temp__6753__auto__;
return cljs.core.map.call(null,((function (probs,temp__6753__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__31350_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__31350_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__6753__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__31408){
var vec__31409 = p__31408;
var k = cljs.core.nth.call(null,vec__31409,(0),null);
var v = cljs.core.nth.call(null,vec__31409,(1),null);
if(cljs.core.truth_((function (){var or__28679__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec31385.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__31351_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__31351_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec31385.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec31385.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__31412 = cljs.core.PersistentVector.EMPTY;
var G__31412__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__31412,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__31412);
var G__31412__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__31412__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__31412__$1);
var G__31412__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__31412__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__31412__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__31412__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__31412__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec31385.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__31352","p__31352",987245920,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"map__31383","map__31383",-1872588471,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta31386","meta31386",-1185649752,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec31385.cljs$lang$type = true;

cljs.spec.t_cljs$spec31385.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31385";

cljs.spec.t_cljs$spec31385.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31385");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec31385 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec31385(p__31352__$1,opt__$1,req_un__$1,opt_un__$1,map__31383__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta31386){
return (new cljs.spec.t_cljs$spec31385(p__31352__$1,opt__$1,req_un__$1,opt_un__$1,map__31383__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta31386));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__31383,map__31383__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec31385(p__31352,opt,req_un,opt_un,map__31383__$1,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args31421 = [];
var len__29895__auto___31429 = arguments.length;
var i__29896__auto___31430 = (0);
while(true){
if((i__29896__auto___31430 < len__29895__auto___31429)){
args31421.push((arguments[i__29896__auto___31430]));

var G__31431 = (i__29896__auto___31430 + (1));
i__29896__auto___31430 = G__31431;
continue;
} else {
}
break;
}

var G__31423 = args31421.length;
switch (G__31423) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31421.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__31424 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__31424,gfn);
} else {
return G__31424;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__31425 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__31425,gfn);
} else {
return G__31425;
}
} else {
if(typeof cljs.spec.t_cljs$spec31426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec31426 = (function (form,pred,gfn,cpred_QMARK_,unc,meta31427){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta31427 = meta31427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31428,meta31427__$1){
var self__ = this;
var _31428__$1 = this;
return (new cljs.spec.t_cljs$spec31426(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta31427__$1));
});

cljs.spec.t_cljs$spec31426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31428){
var self__ = this;
var _31428__$1 = this;
return self__.meta31427;
});

cljs.spec.t_cljs$spec31426.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31426.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec31426.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec31426.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec31426.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec31426.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec31426.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec31426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta31427","meta31427",-1080480070,null)], null);
});

cljs.spec.t_cljs$spec31426.cljs$lang$type = true;

cljs.spec.t_cljs$spec31426.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31426";

cljs.spec.t_cljs$spec31426.cljs$lang$ctorPrWriter = (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31426");
});

cljs.spec.__GT_t_cljs$spec31426 = (function cljs$spec$__GT_t_cljs$spec31426(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta31427){
return (new cljs.spec.t_cljs$spec31426(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta31427));
});

}

return (new cljs.spec.t_cljs$spec31426(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args31438 = [];
var len__29895__auto___31452 = arguments.length;
var i__29896__auto___31453 = (0);
while(true){
if((i__29896__auto___31453 < len__29895__auto___31452)){
args31438.push((arguments[i__29896__auto___31453]));

var G__31454 = (i__29896__auto___31453 + (1));
i__29896__auto___31453 = G__31454;
continue;
} else {
}
break;
}

var G__31440 = args31438.length;
switch (G__31440) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31438.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__31433_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__28667__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__31433_SHARP_));
if(cljs.core.truth_(and__28667__auto__)){
return mm.call(null,p1__31433_SHARP_);
} else {
return and__28667__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__31434_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__31434_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__31435_SHARP_,p2__31436_SHARP_){
return cljs.core.assoc.call(null,p1__31435_SHARP_,retag,p2__31436_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec31441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec31441 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta31442){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta31442 = meta31442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_31443,meta31442__$1){
var self__ = this;
var _31443__$1 = this;
return (new cljs.spec.t_cljs$spec31441(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta31442__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec31441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_31443){
var self__ = this;
var _31443__$1 = this;
return self__.meta31442;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec31441.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31441.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6751__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6751__auto__)){
var pred = temp__6751__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec31441.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6751__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6751__auto__)){
var pred = temp__6751__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec31441.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__6751__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6751__auto__)){
var pred = temp__6751__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec31441.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__31444){
var vec__31445 = p__31444;
var k = cljs.core.nth.call(null,vec__31445,(0),null);
var f = cljs.core.nth.call(null,vec__31445,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__31445,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__31445,k,f,___$1,id,predx,dval,tag){
return (function (p1__31437_SHARP_){
return self__.tag.call(null,p1__31437_SHARP_,k);
});})(rmap__$1,p,vec__31445,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__29608__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__29608__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto____$1);
})(),x__29608__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__31445,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__31448){
var vec__31449 = p__31448;
var k = cljs.core.nth.call(null,vec__31449,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec31441.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec31441.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__29608__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),(function (){var x__29608__auto__ = self__.retag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec31441.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta31442","meta31442",2042602921,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec31441.cljs$lang$type = true;

cljs.spec.t_cljs$spec31441.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31441";

cljs.spec.t_cljs$spec31441.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31441");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec31441 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec31441(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta31442){
return (new cljs.spec.t_cljs$spec31441(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta31442));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec31441(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args31456 = [];
var len__29895__auto___31462 = arguments.length;
var i__29896__auto___31463 = (0);
while(true){
if((i__29896__auto___31463 < len__29895__auto___31462)){
args31456.push((arguments[i__29896__auto___31463]));

var G__31464 = (i__29896__auto___31463 + (1));
i__29896__auto___31463 = G__31464;
continue;
} else {
}
break;
}

var G__31458 = args31456.length;
switch (G__31458) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31456.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec31459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec31459 = (function (forms,preds,gfn,meta31460){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta31460 = meta31460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31461,meta31460__$1){
var self__ = this;
var _31461__$1 = this;
return (new cljs.spec.t_cljs$spec31459(self__.forms,self__.preds,self__.gfn,meta31460__$1));
});

cljs.spec.t_cljs$spec31459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31461){
var self__ = this;
var _31461__$1 = this;
return self__.meta31460;
});

cljs.spec.t_cljs$spec31459.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31459.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__31466 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__31467 = (i + (1));
ret = G__31466;
i = G__31467;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec31459.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__31468 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__31469 = (i + (1));
ret = G__31468;
i = G__31469;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec31459.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__29608__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),(function (){var x__29608__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec31459.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec31459.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec31459.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec31459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta31460","meta31460",175631367,null)], null);
});

cljs.spec.t_cljs$spec31459.cljs$lang$type = true;

cljs.spec.t_cljs$spec31459.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31459";

cljs.spec.t_cljs$spec31459.cljs$lang$ctorPrWriter = (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31459");
});

cljs.spec.__GT_t_cljs$spec31459 = (function cljs$spec$__GT_t_cljs$spec31459(forms__$1,preds__$1,gfn__$1,meta31460){
return (new cljs.spec.t_cljs$spec31459(forms__$1,preds__$1,gfn__$1,meta31460));
});

}

return (new cljs.spec.t_cljs$spec31459(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x31471 = v;
x31471.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x31471.cljs$core$IMapEntry$_key$arity$1 = ((function (x31471){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x31471))
;

x31471.cljs$core$IMapEntry$_val$arity$1 = ((function (x31471){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x31471))
;

return x31471;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__31486 = (i + (1));
i = G__31486;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec31479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec31479 = (function (keys,forms,preds,gfn,id,kps,cform,meta31480){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta31480 = meta31480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_31481,meta31480__$1){
var self__ = this;
var _31481__$1 = this;
return (new cljs.spec.t_cljs$spec31479(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta31480__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec31479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_31481){
var self__ = this;
var _31481__$1 = this;
return self__.meta31480;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec31479.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31479.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec31479.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__31482){
var self__ = this;
var vec__31483 = p__31482;
var k = cljs.core.nth.call(null,vec__31483,(0),null);
var x = cljs.core.nth.call(null,vec__31483,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec31479.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec31479.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec31479.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec31479.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec31479.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta31480","meta31480",1175654790,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec31479.cljs$lang$type = true;

cljs.spec.t_cljs$spec31479.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31479";

cljs.spec.t_cljs$spec31479.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31479");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec31479 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec31479(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta31480){
return (new cljs.spec.t_cljs$spec31479(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta31480));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec31479(keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__31513 = preds;
var vec__31515 = G__31513;
var seq__31516 = cljs.core.seq.call(null,vec__31515);
var first__31517 = cljs.core.first.call(null,seq__31516);
var seq__31516__$1 = cljs.core.next.call(null,seq__31516);
var pred = first__31517;
var preds__$1 = seq__31516__$1;
var G__31514 = forms;
var vec__31518 = G__31514;
var seq__31519 = cljs.core.seq.call(null,vec__31518);
var first__31520 = cljs.core.first.call(null,seq__31519);
var seq__31519__$1 = cljs.core.next.call(null,seq__31519);
var form = first__31520;
var forms__$1 = seq__31519__$1;
var ret__$1 = ret;
var G__31513__$1 = G__31513;
var G__31514__$1 = G__31514;
while(true){
var ret__$2 = ret__$1;
var vec__31521 = G__31513__$1;
var seq__31522 = cljs.core.seq.call(null,vec__31521);
var first__31523 = cljs.core.first.call(null,seq__31522);
var seq__31522__$1 = cljs.core.next.call(null,seq__31522);
var pred__$1 = first__31523;
var preds__$2 = seq__31522__$1;
var vec__31524 = G__31514__$1;
var seq__31525 = cljs.core.seq.call(null,vec__31524);
var first__31526 = cljs.core.first.call(null,seq__31525);
var seq__31525__$1 = cljs.core.next.call(null,seq__31525);
var form__$1 = first__31526;
var forms__$2 = seq__31525__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__31527 = nret;
var G__31528 = preds__$2;
var G__31529 = forms__$2;
ret__$1 = G__31527;
G__31513__$1 = G__31528;
G__31514__$1 = G__31529;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__31556 = forms;
var vec__31558 = G__31556;
var seq__31559 = cljs.core.seq.call(null,vec__31558);
var first__31560 = cljs.core.first.call(null,seq__31559);
var seq__31559__$1 = cljs.core.next.call(null,seq__31559);
var form = first__31560;
var forms__$1 = seq__31559__$1;
var G__31557 = preds;
var vec__31561 = G__31557;
var seq__31562 = cljs.core.seq.call(null,vec__31561);
var first__31563 = cljs.core.first.call(null,seq__31562);
var seq__31562__$1 = cljs.core.next.call(null,seq__31562);
var pred = first__31563;
var preds__$1 = seq__31562__$1;
var ret__$1 = ret;
var G__31556__$1 = G__31556;
var G__31557__$1 = G__31557;
while(true){
var ret__$2 = ret__$1;
var vec__31564 = G__31556__$1;
var seq__31565 = cljs.core.seq.call(null,vec__31564);
var first__31566 = cljs.core.first.call(null,seq__31565);
var seq__31565__$1 = cljs.core.next.call(null,seq__31565);
var form__$1 = first__31566;
var forms__$2 = seq__31565__$1;
var vec__31567 = G__31557__$1;
var seq__31568 = cljs.core.seq.call(null,vec__31567);
var first__31569 = cljs.core.first.call(null,seq__31568);
var seq__31568__$1 = cljs.core.next.call(null,seq__31568);
var pred__$1 = first__31569;
var preds__$2 = seq__31568__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__31570 = nret;
var G__31571 = forms__$2;
var G__31572 = preds__$2;
ret__$1 = G__31570;
G__31556__$1 = G__31571;
G__31557__$1 = G__31572;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec31578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec31578 = (function (forms,preds,gfn,meta31579){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta31579 = meta31579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31580,meta31579__$1){
var self__ = this;
var _31580__$1 = this;
return (new cljs.spec.t_cljs$spec31578(self__.forms,self__.preds,self__.gfn,meta31579__$1));
});

cljs.spec.t_cljs$spec31578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31580){
var self__ = this;
var _31580__$1 = this;
return self__.meta31579;
});

cljs.spec.t_cljs$spec31578.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31578.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec31578.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__31574_SHARP_,p2__31573_SHARP_){
return cljs.spec.unform.call(null,p2__31573_SHARP_,p1__31574_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec31578.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec31578.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec31578.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec31578.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec31578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta31579","meta31579",1370404953,null)], null);
});

cljs.spec.t_cljs$spec31578.cljs$lang$type = true;

cljs.spec.t_cljs$spec31578.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31578";

cljs.spec.t_cljs$spec31578.cljs$lang$ctorPrWriter = (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31578");
});

cljs.spec.__GT_t_cljs$spec31578 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec31578(forms__$1,preds__$1,gfn__$1,meta31579){
return (new cljs.spec.t_cljs$spec31578(forms__$1,preds__$1,gfn__$1,meta31579));
});

}

return (new cljs.spec.t_cljs$spec31578(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__28679__auto__ = kfn;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__28679__auto__ = kform;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.valid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__28667__auto__ = distinct;
if(cljs.core.truth_(and__28667__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__28667__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__28667__auto__ = count;
if(cljs.core.truth_(and__28667__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__28667__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__29608__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),(function (){var x__29608__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__28667__auto__ = (function (){var or__28679__auto__ = min_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__28667__auto__)){
return !((((function (){var or__28679__auto__ = min_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__28679__auto__ = max_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__28667__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__29608__auto__ = (function (){var or__28679__auto__ = min_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),(function (){var x__29608__auto__ = cljs.core.count.call(null,cljs.core.unquote.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),(function (){var x__29608__auto__ = (function (){var or__28679__auto__ = max_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec31592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec31592 = (function (forms,preds,gfn,meta31593){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta31593 = meta31593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31594,meta31593__$1){
var self__ = this;
var _31594__$1 = this;
return (new cljs.spec.t_cljs$spec31592(self__.forms,self__.preds,self__.gfn,meta31593__$1));
});

cljs.spec.t_cljs$spec31592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31594){
var self__ = this;
var _31594__$1 = this;
return self__.meta31593;
});

cljs.spec.t_cljs$spec31592.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31592.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__31581_SHARP_,p2__31582_SHARP_){
return cljs.spec.dt.call(null,p1__31581_SHARP_,x,p2__31582_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),null], null), null),ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec31592.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__31583_SHARP_){
return cljs.spec.unform.call(null,p1__31583_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec31592.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__31584_SHARP_,p2__31585_SHARP_){
return cljs.spec.explain_1.call(null,p1__31584_SHARP_,p2__31585_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec31592.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__31586_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__31586_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__31587_SHARP_,p2__31588_SHARP_){
return cljs.spec.gensub.call(null,p1__31587_SHARP_,overrides,path,rmap,p2__31588_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec31592.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec31592.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec31592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta31593","meta31593",-275865882,null)], null);
});

cljs.spec.t_cljs$spec31592.cljs$lang$type = true;

cljs.spec.t_cljs$spec31592.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31592";

cljs.spec.t_cljs$spec31592.cljs$lang$ctorPrWriter = (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31592");
});

cljs.spec.__GT_t_cljs$spec31592 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec31592(forms__$1,preds__$1,gfn__$1,meta31593){
return (new cljs.spec.t_cljs$spec31592(forms__$1,preds__$1,gfn__$1,meta31593));
});

}

return (new cljs.spec.t_cljs$spec31592(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args31599 = [];
var len__29895__auto___31624 = arguments.length;
var i__29896__auto___31625 = (0);
while(true){
if((i__29896__auto___31625 < len__29895__auto___31624)){
args31599.push((arguments[i__29896__auto___31625]));

var G__31626 = (i__29896__auto___31625 + (1));
i__29896__auto___31625 = G__31626;
continue;
} else {
}
break;
}

var G__31601 = args31599.length;
switch (G__31601) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31599.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__31602,gfn){
var map__31603 = p__31602;
var map__31603__$1 = ((((!((map__31603 == null)))?((((map__31603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31603):map__31603);
var opts = map__31603__$1;
var max_count = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_into = gen_into;
var check_QMARK_ = ((function (conform_into,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__31595_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__31595_SHARP_);
});})(conform_into,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var kfn__$1 = (function (){var or__28679__auto__ = kfn;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return ((function (or__28679__auto__,conform_into,check_QMARK_,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
return i;
});
;})(or__28679__auto__,conform_into,check_QMARK_,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
}
})();
var addcv = ((function (conform_into,check_QMARK_,kfn__$1,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,check_QMARK_,kfn__$1,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var vec__31605 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__31605,(0),null);
var kindform = cljs.core.nth.call(null,vec__31605,(1),null);
var cfns = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__28667__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__28667__auto__){
var or__28679__auto__ = (function (){var and__28667__auto____$1 = kind;
if(cljs.core.truth_(and__28667__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__28667__auto____$1;
}
})();
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__28667__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || ((cljs.core.not.call(null,conform_into)) && ((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__31596_SHARP_){
return cljs.core.empty.call(null,(function (){var or__28679__auto__ = conform_into;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return p1__31596_SHARP_;
}
})());
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
if(typeof cljs.spec.t_cljs$spec31608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec31608 = (function (form,max_count,map__31603,check_QMARK_,gfn,gen_max,vec__31605,pred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn,gen_into,count,min_count,opts,kind,conform_all,p__31602,conform_into,meta31609){
this.form = form;
this.max_count = max_count;
this.map__31603 = map__31603;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.vec__31605 = vec__31605;
this.pred = pred;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.p__31602 = p__31602;
this.conform_into = conform_into;
this.meta31609 = meta31609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_31610,meta31609__$1){
var self__ = this;
var _31610__$1 = this;
return (new cljs.spec.t_cljs$spec31608(self__.form,self__.max_count,self__.map__31603,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.vec__31605,self__.pred,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.p__31602,self__.conform_into,meta31609__$1));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec31608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_31610){
var self__ = this;
var _31610__$1 = this;
return self__.meta31609;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec31608.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31608.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,null,null,null))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__31611 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__31611,(0),null);
var add = cljs.core.nth.call(null,vec__31611,(1),null);
var complete = cljs.core.nth.call(null,vec__31611,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__31617 = cljs.core.seq.call(null,x);
var vec__31618 = G__31617;
var seq__31619 = cljs.core.seq.call(null,vec__31618);
var first__31620 = cljs.core.first.call(null,seq__31619);
var seq__31619__$1 = cljs.core.next.call(null,seq__31619);
var v = first__31620;
var vs = seq__31619__$1;
var vseq = vec__31618;
var ret__$1 = ret;
var i__$1 = i;
var G__31617__$1 = G__31617;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__31621 = G__31617__$1;
var seq__31622 = cljs.core.seq.call(null,vec__31621);
var first__31623 = cljs.core.first.call(null,seq__31622);
var seq__31622__$1 = cljs.core.next.call(null,seq__31622);
var v__$1 = first__31623;
var vs__$1 = seq__31622__$1;
var vseq__$1 = vec__31621;
if(vseq__$1){
var cv = cljs.spec.dt.call(null,self__.pred,v__$1,null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__31628 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__31629 = (i__$2 + (1));
var G__31630 = vs__$1;
ret__$1 = G__31628;
i__$1 = G__31629;
G__31617__$1 = G__31630;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__29012__auto__ = (1);
var y__29013__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__29012__auto__ > y__29013__auto__) ? x__29012__auto__ : y__29013__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__31631 = (i + step);
i = G__31631;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__28679__auto__ = (function (){var and__28667__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__28667__auto__){
return x;
} else {
return and__28667__auto__;
}
})();
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec31608.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec31608.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__28679__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__28679__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__28679__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.range.call(null),x))));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec31608.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__31597_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__31597_SHARP_)){
return p1__31597_SHARP_;
} else {
return cljs.core.empty.call(null,p1__31597_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__31598_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__31598_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__31598_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__28679__auto__ = self__.min_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__28679__auto__ = self__.max_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
var x__29012__auto__ = self__.gen_max;
var y__29013__auto__ = ((2) * (function (){var or__28679__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__28679__auto____$1)){
return or__28679__auto____$1;
} else {
return (0);
}
})());
return ((x__29012__auto__ > y__29013__auto__) ? x__29012__auto__ : y__29013__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__28679__auto__ = self__.min_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__28679__auto__ = self__.min_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return (0);
}
})(),(function (){var or__28679__auto__ = self__.max_count;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
var x__29012__auto__ = self__.gen_max;
var y__29013__auto__ = ((2) * (function (){var or__28679__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__28679__auto____$1)){
return or__28679__auto____$1;
} else {
return (0);
}
})());
return ((x__29012__auto__ > y__29013__auto__) ? x__29012__auto__ : y__29013__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec31608.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec31608.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__29608__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec31608.getBasis = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"map__31603","map__31603",243667648,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"vec__31605","vec__31605",1038449676,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"p__31602","p__31602",83720382,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta31609","meta31609",465529860,null)], null);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec31608.cljs$lang$type = true;

cljs.spec.t_cljs$spec31608.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31608";

cljs.spec.t_cljs$spec31608.cljs$lang$ctorPrWriter = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31608");
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.__GT_t_cljs$spec31608 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function cljs$spec$__GT_t_cljs$spec31608(form__$1,max_count__$1,map__31603__$2,check_QMARK___$1,gfn__$1,gen_max__$1,vec__31605__$1,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,p__31602__$1,conform_into__$1,meta31609){
return (new cljs.spec.t_cljs$spec31608(form__$1,max_count__$1,map__31603__$2,check_QMARK___$1,gfn__$1,gen_max__$1,vec__31605__$1,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,p__31602__$1,conform_into__$1,meta31609));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__31605,kindfn,kindform,cfns,map__31603,map__31603__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

}

return (new cljs.spec.t_cljs$spec31608(form,max_count,map__31603__$1,check_QMARK_,gfn,gen_max,vec__31605,pred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,p__31602,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__31632){
var map__31635 = p__31632;
var map__31635__$1 = ((((!((map__31635 == null)))?((((map__31635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31635):map__31635);
var op = cljs.core.get.call(null,map__31635__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__31637){
var map__31649 = p__31637;
var map__31649__$1 = ((((!((map__31649 == null)))?((((map__31649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31649):map__31649);
var vec__31650 = cljs.core.get.call(null,map__31649__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__31651 = cljs.core.seq.call(null,vec__31650);
var first__31652 = cljs.core.first.call(null,seq__31651);
var seq__31651__$1 = cljs.core.next.call(null,seq__31651);
var p1 = first__31652;
var pr = seq__31651__$1;
var ps = vec__31650;
var vec__31653 = cljs.core.get.call(null,map__31649__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__31654 = cljs.core.seq.call(null,vec__31653);
var first__31655 = cljs.core.first.call(null,seq__31654);
var seq__31654__$1 = cljs.core.next.call(null,seq__31654);
var k1 = first__31655;
var kr = seq__31654__$1;
var ks = vec__31653;
var vec__31656 = cljs.core.get.call(null,map__31649__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__31657 = cljs.core.seq.call(null,vec__31656);
var first__31658 = cljs.core.first.call(null,seq__31657);
var seq__31657__$1 = cljs.core.next.call(null,seq__31657);
var f1 = first__31658;
var fr = seq__31657__$1;
var forms = vec__31656;
var ret = cljs.core.get.call(null,map__31649__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__31649__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__29902__auto__ = [];
var len__29895__auto___31661 = arguments.length;
var i__29896__auto___31662 = (0);
while(true){
if((i__29896__auto___31662 < len__29895__auto___31661)){
args__29902__auto__.push((arguments[i__29896__auto___31662]));

var G__31663 = (i__29896__auto___31662 + (1));
i__29896__auto___31662 = G__31663;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq31660){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31660));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29608__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),(function (){var x__29608__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__29608__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__28679__auto__ = ks;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__31664_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__31664_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__28679__auto__ = cljs.core.seq.call(null,ks);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__28679__auto__ = cljs.core.seq.call(null,forms);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__31665_SHARP_){
return cljs.core.nth.call(null,p1__31665_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__31675 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__31678 = cljs.core.nth.call(null,vec__31675,(0),null);
var seq__31679 = cljs.core.seq.call(null,vec__31678);
var first__31680 = cljs.core.first.call(null,seq__31679);
var seq__31679__$1 = cljs.core.next.call(null,seq__31679);
var p1 = first__31680;
var pr = seq__31679__$1;
var ps__$1 = vec__31678;
var vec__31681 = cljs.core.nth.call(null,vec__31675,(1),null);
var k1 = cljs.core.nth.call(null,vec__31681,(0),null);
var ks__$1 = vec__31681;
var forms__$1 = cljs.core.nth.call(null,vec__31675,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__29902__auto__ = [];
var len__29895__auto___31685 = arguments.length;
var i__29896__auto___31686 = (0);
while(true){
if((i__29896__auto___31686 < len__29895__auto___31685)){
args__29902__auto__.push((arguments[i__29896__auto___31686]));

var G__31687 = (i__29896__auto___31686 + (1));
i__29896__auto___31686 = G__31687;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq31684){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31684));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__28667__auto__ = p1;
if(cljs.core.truth_(and__28667__auto__)){
return p2;
} else {
return and__28667__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__28679__auto__ = p1;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__28679__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__28679__auto__){
return or__28679__auto__;
} else {
var or__28679__auto____$1 = (function (){var and__28667__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__28667__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__28667__auto__;
}
})();
if(cljs.core.truth_(or__28679__auto____$1)){
return or__28679__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__31691 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__31691__$1 = ((((!((map__31691 == null)))?((((map__31691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31691):map__31691);
var p__$1 = map__31691__$1;
var op = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__31693 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__31693)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__31693)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__31693)){
var and__28667__auto__ = cljs.spec.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__28667__auto__)){
var or__28679__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__28667__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__31693)){
var or__28679__auto__ = (p1 === p2);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.spec.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__31693)){
return cljs.core.every_QMARK_.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__31693)){
return cljs.core.some.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__31712 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__31712__$1 = ((((!((map__31712 == null)))?((((map__31712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31712):map__31712);
var p__$1 = map__31712__$1;
var vec__31713 = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__31714 = cljs.core.seq.call(null,vec__31713);
var first__31715 = cljs.core.first.call(null,seq__31714);
var seq__31714__$1 = cljs.core.next.call(null,seq__31714);
var p0 = first__31715;
var pr = seq__31714__$1;
var ps = vec__31713;
var vec__31716 = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__31716,(0),null);
var ks = vec__31716;
var op = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__31720 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__31720)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__31720)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__31720)){
var pret = cljs.spec.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__31720)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__31720)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__31720)){
var vec__31721 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__31724 = cljs.core.nth.call(null,vec__31721,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__31724,(0),null);
var vec__31727 = cljs.core.nth.call(null,vec__31721,(1),null);
var k0 = cljs.core.nth.call(null,vec__31727,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs.spec.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__31746 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__31746__$1 = ((((!((map__31746 == null)))?((((map__31746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31746):map__31746);
var p__$1 = map__31746__$1;
var vec__31747 = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__31748 = cljs.core.seq.call(null,vec__31747);
var first__31749 = cljs.core.first.call(null,seq__31748);
var seq__31748__$1 = cljs.core.next.call(null,seq__31748);
var p0 = first__31749;
var pr = seq__31748__$1;
var ps = vec__31747;
var vec__31750 = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__31750,(0),null);
var ks = vec__31750;
var op = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__31746__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__31754 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__31754)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__31754)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__31754)){
var px = cljs.core.reduce.call(null,((function (G__31754,map__31746,map__31746__$1,p__$1,vec__31747,seq__31748,first__31749,seq__31748__$1,p0,pr,ps,vec__31750,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__31731_SHARP_,p2__31730_SHARP_){
return cljs.spec.unform.call(null,p2__31730_SHARP_,p1__31731_SHARP_);
});})(G__31754,map__31746,map__31746__$1,p__$1,vec__31747,seq__31748,first__31749,seq__31748__$1,p0,pr,ps,vec__31750,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__31754)){
return cljs.core.mapcat.call(null,((function (G__31754,map__31746,map__31746__$1,p__$1,vec__31747,seq__31748,first__31749,seq__31748__$1,p0,pr,ps,vec__31750,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__31732_SHARP_){
return cljs.spec.op_unform.call(null,p1,p1__31732_SHARP_);
});})(G__31754,map__31746,map__31746__$1,p__$1,vec__31747,seq__31748,first__31749,seq__31748__$1,p0,pr,ps,vec__31750,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__31754)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__31754,map__31746,map__31746__$1,p__$1,vec__31747,seq__31748,first__31749,seq__31748__$1,p0,pr,ps,vec__31750,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__31733_SHARP_){
return cljs.spec.op_unform.call(null,p0,p1__31733_SHARP_);
});})(G__31754,map__31746,map__31746__$1,p__$1,vec__31747,seq__31748,first__31749,seq__31748__$1,p0,pr,ps,vec__31750,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__31754,map__31746,map__31746__$1,p__$1,vec__31747,seq__31748,first__31749,seq__31748__$1,p0,pr,ps,vec__31750,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__31754,map__31746,map__31746__$1,p__$1,vec__31747,seq__31748,first__31749,seq__31748__$1,p0,pr,ps,vec__31750,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__31754)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__31755 = x;
var k__$1 = cljs.core.nth.call(null,vec__31755,(0),null);
var v = cljs.core.nth.call(null,vec__31755,(1),null);
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__31761 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__31761__$1 = ((((!((map__31761 == null)))?((((map__31761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31761):map__31761);
var p__$1 = map__31761__$1;
var op = cljs.core.get.call(null,map__31761__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__31761__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__31761__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__31761,map__31761__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__31761,map__31761__$1,p__$1,op,ps,splice))
;
var G__31763 = op;
if(cljs.core._EQ_.call(null,null,G__31763)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__31763)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__31763)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__31763)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__31763)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__31763)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__31774 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__31774__$1 = ((((!((map__31774 == null)))?((((map__31774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31774):map__31774);
var p__$1 = map__31774__$1;
var vec__31775 = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__31776 = cljs.core.seq.call(null,vec__31775);
var first__31777 = cljs.core.first.call(null,seq__31776);
var seq__31776__$1 = cljs.core.next.call(null,seq__31776);
var p0 = first__31777;
var pr = seq__31776__$1;
var ps = vec__31775;
var vec__31778 = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__31779 = cljs.core.seq.call(null,vec__31778);
var first__31780 = cljs.core.first.call(null,seq__31779);
var seq__31779__$1 = cljs.core.next.call(null,seq__31779);
var k0 = first__31780;
var kr = seq__31779__$1;
var ks = vec__31778;
var op = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__31782 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__31782)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__31782)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__31782)){
var temp__6753__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6753__auto__)){
var p1__$1 = temp__6753__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__31782)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs.spec.deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__31782)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__31782,map__31774,map__31774__$1,p__$1,vec__31775,seq__31776,first__31777,seq__31776__$1,p0,pr,ps,vec__31778,seq__31779,first__31780,seq__31779__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__31764_SHARP_){
return cljs.spec.deriv.call(null,p1__31764_SHARP_,x);
});})(G__31782,map__31774,map__31774__$1,p__$1,vec__31775,seq__31776,first__31777,seq__31776__$1,p0,pr,ps,vec__31778,seq__31779,first__31780,seq__31779__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__31782)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs.spec.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs.spec.deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__31786 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__31786__$1 = ((((!((map__31786 == null)))?((((map__31786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31786):map__31786);
var p__$1 = map__31786__$1;
var op = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__31786__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__31788 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__31788)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__31788)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__31788)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs.spec.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__31788)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__29608__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__28679__auto__ = cljs.core.seq.call(null,ks);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__31788)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__29608__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__31788)){
var x__29608__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__29608__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto____$1);
})(),x__29608__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__31802 = input;
var x = cljs.core.nth.call(null,vec__31802,(0),null);
var input__$1 = vec__31802;
var map__31805 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__31805__$1 = ((((!((map__31805 == null)))?((((map__31805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31805):map__31805);
var p__$1 = map__31805__$1;
var op = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__31805__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6751__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var name = temp__6751__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__31802,x,input__$1,map__31805,map__31805__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__31802,x,input__$1,map__31805,map__31805__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__31807 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__31807)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__31807)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__31807)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__6751__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6751__auto__)){
var p1__$1 = temp__6751__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__31807)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__28679__auto__ = cljs.core.seq.call(null,ks);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__28679__auto__ = cljs.core.seq.call(null,forms);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__31808 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__31807,vec__31802,x,input__$1,map__31805,map__31805__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__31811){
var vec__31812 = p__31811;
var p__$2 = cljs.core.nth.call(null,vec__31812,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__31807,vec__31802,x,input__$1,map__31805,map__31805__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__31808,(0),null);
var k = cljs.core.nth.call(null,vec__31808,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__31808,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__28679__auto__ = form__$1;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__31807)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__31807,vec__31802,x,input__$1,map__31805,map__31805__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.op_explain.call(null,(function (){var or__28679__auto__ = form__$1;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__31807,vec__31802,x,input__$1,map__31805,map__31805__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__28679__auto__ = cljs.core.seq.call(null,ks);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__28679__auto__ = cljs.core.seq.call(null,forms);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__31807)){
return cljs.spec.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__31821 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__31821__$1 = ((((!((map__31821 == null)))?((((map__31821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31821):map__31821);
var p__$1 = map__31821__$1;
var ps = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__31821__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__31821,map__31821__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__31821,map__31821__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__28667__auto__ = rmap__$1;
if(cljs.core.truth_(and__28667__auto__)){
var and__28667__auto____$1 = id;
if(cljs.core.truth_(and__28667__auto____$1)){
var and__28667__auto____$2 = k;
if(cljs.core.truth_(and__28667__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__28667__auto____$2;
}
} else {
return and__28667__auto____$1;
}
} else {
return and__28667__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__31821,map__31821__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__28679__auto__ = f__$1;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return p__$2;
}
})());
});})(map__31821,map__31821__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__28679__auto__ = f__$1;
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__31821,map__31821__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__28679__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__28679__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__28679__auto__){
return or__28679__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__31821,map__31821__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__28679__auto__ = (function (){var temp__6753__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__6753__auto__)){
var g = temp__6753__auto__;
var G__31824 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__31824)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__31824)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
var or__28679__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__28679__auto____$1)){
return or__28679__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__31825 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__31825)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__31825)){
var temp__6753__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6753__auto__)){
var g = temp__6753__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__31825)){
return cljs.spec.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__31825)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__31825)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__31825)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__6753__auto__ = cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__6753__auto__)){
var g = temp__6753__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__6753__auto__,G__31825,or__28679__auto____$1,or__28679__auto__,map__31821,map__31821__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__31815_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31815_SHARP_);
});})(g,temp__6753__auto__,G__31825,or__28679__auto____$1,or__28679__auto__,map__31821,map__31821__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__31826){
while(true){
var vec__31830 = p__31826;
var seq__31831 = cljs.core.seq.call(null,vec__31830);
var first__31832 = cljs.core.first.call(null,seq__31831);
var seq__31831__$1 = cljs.core.next.call(null,seq__31831);
var x = first__31832;
var xs = seq__31831__$1;
var data = vec__31830;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__6751__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__6751__auto__)){
var dp = temp__6751__auto__;
var G__31833 = dp;
var G__31834 = xs;
p = G__31833;
p__31826 = G__31834;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__31848 = input;
var vec__31849 = G__31848;
var seq__31850 = cljs.core.seq.call(null,vec__31849);
var first__31851 = cljs.core.first.call(null,seq__31850);
var seq__31850__$1 = cljs.core.next.call(null,seq__31850);
var x = first__31851;
var xs = seq__31850__$1;
var data = vec__31849;
var i = (0);
var p__$1 = p;
var G__31848__$1 = G__31848;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__31852 = G__31848__$1;
var seq__31853 = cljs.core.seq.call(null,vec__31852);
var first__31854 = cljs.core.first.call(null,seq__31853);
var seq__31853__$1 = cljs.core.next.call(null,seq__31853);
var x__$1 = first__31854;
var xs__$1 = seq__31853__$1;
var data__$1 = vec__31852;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6751__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var dp = temp__6751__auto__;
var G__31855 = dp;
var G__31856 = xs__$1;
var G__31857 = (i__$2 + (1));
p__$1 = G__31855;
G__31848__$1 = G__31856;
i__$1 = G__31857;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__28679__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec31861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec31861 = (function (re,gfn,meta31862){
this.re = re;
this.gfn = gfn;
this.meta31862 = meta31862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31863,meta31862__$1){
var self__ = this;
var _31863__$1 = this;
return (new cljs.spec.t_cljs$spec31861(self__.re,self__.gfn,meta31862__$1));
});

cljs.spec.t_cljs$spec31861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31863){
var self__ = this;
var _31863__$1 = this;
return self__.meta31862;
});

cljs.spec.t_cljs$spec31861.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31861.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec31861.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec31861.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec31861.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec31861.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec31861.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec31861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta31862","meta31862",-1571100628,null)], null);
});

cljs.spec.t_cljs$spec31861.cljs$lang$type = true;

cljs.spec.t_cljs$spec31861.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31861";

cljs.spec.t_cljs$spec31861.cljs$lang$ctorPrWriter = (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31861");
});

cljs.spec.__GT_t_cljs$spec31861 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec31861(re__$1,gfn__$1,meta31862){
return (new cljs.spec.t_cljs$spec31861(re__$1,gfn__$1,meta31862));
});

}

return (new cljs.spec.t_cljs$spec31861(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__28667__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__28667__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__28667__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__31864_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__31864_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__6751__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6751__auto__)){
var vec__31868 = temp__6751__auto__;
var smallest = cljs.core.nth.call(null,vec__31868,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec31877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec31877 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta31878){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta31878 = meta31878;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec31877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_31879,meta31878__$1){
var self__ = this;
var _31879__$1 = this;
return (new cljs.spec.t_cljs$spec31877(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta31878__$1));
});})(specs))
;

cljs.spec.t_cljs$spec31877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_31879){
var self__ = this;
var _31879__$1 = this;
return self__.meta31878;
});})(specs))
;

cljs.spec.t_cljs$spec31877.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec31877.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec31877.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec31877.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec31877.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec31877.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e31880){if((e31880 instanceof Error)){
var t = e31880;
return t;
} else {
throw e31880;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec31877.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__31883__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__29766__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31881_31884 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31882_31885 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31881_31884,_STAR_print_fn_STAR_31882_31885,sb__29766__auto__,___$3,specs){
return (function (x__29767__auto__){
return sb__29766__auto__.append(x__29767__auto__);
});})(_STAR_print_newline_STAR_31881_31884,_STAR_print_fn_STAR_31882_31885,sb__29766__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31882_31885;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31881_31884;
}
return [cljs.core.str(sb__29766__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__31883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31886__i = 0, G__31886__a = new Array(arguments.length -  0);
while (G__31886__i < G__31886__a.length) {G__31886__a[G__31886__i] = arguments[G__31886__i + 0]; ++G__31886__i;}
  args = new cljs.core.IndexedSeq(G__31886__a,0);
} 
return G__31883__delegate.call(this,args);};
G__31883.cljs$lang$maxFixedArity = 0;
G__31883.cljs$lang$applyTo = (function (arglist__31887){
var args = cljs.core.seq(arglist__31887);
return G__31883__delegate(args);
});
G__31883.cljs$core$IFn$_invoke$arity$variadic = G__31883__delegate;
return G__31883;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec31877.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec31877.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__29608__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__29608__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__29608__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29608__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec31877.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta31878","meta31878",-2037112101,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec31877.cljs$lang$type = true;

cljs.spec.t_cljs$spec31877.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec31877";

cljs.spec.t_cljs$spec31877.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec/t_cljs$spec31877");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec31877 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec31877(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta31878){
return (new cljs.spec.t_cljs$spec31877(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta31878));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec31877(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__31888#","p1__31888#",378287008,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__31888#","p1__31888#",378287008,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__31888#","p1__31888#",378287008,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__31889#","p1__31889#",979455450,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__31889#","p1__31889#",979455450,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__31888#","p1__31888#",378287008,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__31888#","p1__31888#",378287008,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__31888#","p1__31888#",378287008,null)))),(function (p1__31888_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__31888_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__31888_SHARP_));
}),null,true,(function (p1__31889_SHARP_){
return cljs.core.map.call(null,(function (p__31890){
var vec__31891 = p__31890;
var k = cljs.core.nth.call(null,vec__31891,(0),null);
var v = cljs.core.nth.call(null,vec__31891,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__31889_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args31895 = [];
var len__29895__auto___31898 = arguments.length;
var i__29896__auto___31899 = (0);
while(true){
if((i__29896__auto___31899 < len__29895__auto___31898)){
args31895.push((arguments[i__29896__auto___31899]));

var G__31900 = (i__29896__auto___31899 + (1));
i__29896__auto___31899 = G__31900;
continue;
} else {
}
break;
}

var G__31897 = args31895.length;
switch (G__31897) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31895.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__31894_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__31894_SHARP_,cljs.spec.conform.call(null,spec,p1__31894_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__28667__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__28667__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__28667__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__28667__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__28667__auto__)){
return val.lessThan(end);
} else {
return and__28667__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__28667__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__28667__auto__)){
return val.lessThan(end);
} else {
return and__28667__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str("Spec assertion failed\n"),cljs.core.str((function (){var sb__29766__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31904_31906 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31905_31907 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31904_31906,_STAR_print_fn_STAR_31905_31907,sb__29766__auto__,ed){
return (function (x__29767__auto__){
return sb__29766__auto__.append(x__29767__auto__);
});})(_STAR_print_newline_STAR_31904_31906,_STAR_print_fn_STAR_31905_31907,sb__29766__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31905_31907;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31904_31906;
}
return [cljs.core.str(sb__29766__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map