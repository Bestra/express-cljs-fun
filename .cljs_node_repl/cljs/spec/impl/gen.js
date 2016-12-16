// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__29331__auto__,writer__29332__auto__,opt__29333__auto__){
return cljs.core._write.call(null,writer__29332__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__29902__auto__ = [];
var len__29895__auto___31978 = arguments.length;
var i__29896__auto___31979 = (0);
while(true){
if((i__29896__auto___31979 < len__29895__auto___31978)){
args__29902__auto__.push((arguments[i__29896__auto___31979]));

var G__31980 = (i__29896__auto___31979 + (1));
i__29896__auto___31979 = G__31980;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq31977){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31977));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__29902__auto__ = [];
var len__29895__auto___31982 = arguments.length;
var i__29896__auto___31983 = (0);
while(true){
if((i__29896__auto___31983 < len__29895__auto___31982)){
args__29902__auto__.push((arguments[i__29896__auto___31983]));

var G__31984 = (i__29896__auto___31983 + (1));
i__29896__auto___31983 = G__31984;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq31981){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31981));
});

var g_QMARK__31985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_31986 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31985){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31985))
,null));
var mkg_31987 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31985,g_31986){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31985,g_31986))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__31985,g_31986,mkg_31987){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31985).call(null,x);
});})(g_QMARK__31985,g_31986,mkg_31987))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__31985,g_31986,mkg_31987){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_31987).call(null,gfn);
});})(g_QMARK__31985,g_31986,mkg_31987))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__31985,g_31986,mkg_31987){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_31986).call(null,generator);
});})(g_QMARK__31985,g_31986,mkg_31987))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29979__auto___32006 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__29979__auto___32006){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32007 = arguments.length;
var i__29896__auto___32008 = (0);
while(true){
if((i__29896__auto___32008 < len__29895__auto___32007)){
args__29902__auto__.push((arguments[i__29896__auto___32008]));

var G__32009 = (i__29896__auto___32008 + (1));
i__29896__auto___32008 = G__32009;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32006))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32006){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32006),args);
});})(g__29979__auto___32006))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__29979__auto___32006){
return (function (seq31988){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31988));
});})(g__29979__auto___32006))
;


var g__29979__auto___32010 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__29979__auto___32010){
return (function cljs$spec$impl$gen$list(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32011 = arguments.length;
var i__29896__auto___32012 = (0);
while(true){
if((i__29896__auto___32012 < len__29895__auto___32011)){
args__29902__auto__.push((arguments[i__29896__auto___32012]));

var G__32013 = (i__29896__auto___32012 + (1));
i__29896__auto___32012 = G__32013;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32010))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32010){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32010),args);
});})(g__29979__auto___32010))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__29979__auto___32010){
return (function (seq31989){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31989));
});})(g__29979__auto___32010))
;


var g__29979__auto___32014 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__29979__auto___32014){
return (function cljs$spec$impl$gen$map(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32015 = arguments.length;
var i__29896__auto___32016 = (0);
while(true){
if((i__29896__auto___32016 < len__29895__auto___32015)){
args__29902__auto__.push((arguments[i__29896__auto___32016]));

var G__32017 = (i__29896__auto___32016 + (1));
i__29896__auto___32016 = G__32017;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32014))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32014){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32014),args);
});})(g__29979__auto___32014))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__29979__auto___32014){
return (function (seq31990){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31990));
});})(g__29979__auto___32014))
;


var g__29979__auto___32018 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__29979__auto___32018){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32019 = arguments.length;
var i__29896__auto___32020 = (0);
while(true){
if((i__29896__auto___32020 < len__29895__auto___32019)){
args__29902__auto__.push((arguments[i__29896__auto___32020]));

var G__32021 = (i__29896__auto___32020 + (1));
i__29896__auto___32020 = G__32021;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32018))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32018){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32018),args);
});})(g__29979__auto___32018))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__29979__auto___32018){
return (function (seq31991){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31991));
});})(g__29979__auto___32018))
;


var g__29979__auto___32022 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__29979__auto___32022){
return (function cljs$spec$impl$gen$set(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32023 = arguments.length;
var i__29896__auto___32024 = (0);
while(true){
if((i__29896__auto___32024 < len__29895__auto___32023)){
args__29902__auto__.push((arguments[i__29896__auto___32024]));

var G__32025 = (i__29896__auto___32024 + (1));
i__29896__auto___32024 = G__32025;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32022))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32022){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32022),args);
});})(g__29979__auto___32022))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__29979__auto___32022){
return (function (seq31992){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31992));
});})(g__29979__auto___32022))
;


var g__29979__auto___32026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__29979__auto___32026){
return (function cljs$spec$impl$gen$vector(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32027 = arguments.length;
var i__29896__auto___32028 = (0);
while(true){
if((i__29896__auto___32028 < len__29895__auto___32027)){
args__29902__auto__.push((arguments[i__29896__auto___32028]));

var G__32029 = (i__29896__auto___32028 + (1));
i__29896__auto___32028 = G__32029;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32026))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32026){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32026),args);
});})(g__29979__auto___32026))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__29979__auto___32026){
return (function (seq31993){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31993));
});})(g__29979__auto___32026))
;


var g__29979__auto___32030 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__29979__auto___32030){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32031 = arguments.length;
var i__29896__auto___32032 = (0);
while(true){
if((i__29896__auto___32032 < len__29895__auto___32031)){
args__29902__auto__.push((arguments[i__29896__auto___32032]));

var G__32033 = (i__29896__auto___32032 + (1));
i__29896__auto___32032 = G__32033;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32030))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32030){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32030),args);
});})(g__29979__auto___32030))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__29979__auto___32030){
return (function (seq31994){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31994));
});})(g__29979__auto___32030))
;


var g__29979__auto___32034 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__29979__auto___32034){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32035 = arguments.length;
var i__29896__auto___32036 = (0);
while(true){
if((i__29896__auto___32036 < len__29895__auto___32035)){
args__29902__auto__.push((arguments[i__29896__auto___32036]));

var G__32037 = (i__29896__auto___32036 + (1));
i__29896__auto___32036 = G__32037;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32034))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32034){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32034),args);
});})(g__29979__auto___32034))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__29979__auto___32034){
return (function (seq31995){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31995));
});})(g__29979__auto___32034))
;


var g__29979__auto___32038 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__29979__auto___32038){
return (function cljs$spec$impl$gen$elements(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32039 = arguments.length;
var i__29896__auto___32040 = (0);
while(true){
if((i__29896__auto___32040 < len__29895__auto___32039)){
args__29902__auto__.push((arguments[i__29896__auto___32040]));

var G__32041 = (i__29896__auto___32040 + (1));
i__29896__auto___32040 = G__32041;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32038))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32038){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32038),args);
});})(g__29979__auto___32038))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__29979__auto___32038){
return (function (seq31996){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31996));
});})(g__29979__auto___32038))
;


var g__29979__auto___32042 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__29979__auto___32042){
return (function cljs$spec$impl$gen$bind(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32043 = arguments.length;
var i__29896__auto___32044 = (0);
while(true){
if((i__29896__auto___32044 < len__29895__auto___32043)){
args__29902__auto__.push((arguments[i__29896__auto___32044]));

var G__32045 = (i__29896__auto___32044 + (1));
i__29896__auto___32044 = G__32045;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32042))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32042){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32042),args);
});})(g__29979__auto___32042))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__29979__auto___32042){
return (function (seq31997){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31997));
});})(g__29979__auto___32042))
;


var g__29979__auto___32046 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__29979__auto___32046){
return (function cljs$spec$impl$gen$choose(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32047 = arguments.length;
var i__29896__auto___32048 = (0);
while(true){
if((i__29896__auto___32048 < len__29895__auto___32047)){
args__29902__auto__.push((arguments[i__29896__auto___32048]));

var G__32049 = (i__29896__auto___32048 + (1));
i__29896__auto___32048 = G__32049;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32046))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32046){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32046),args);
});})(g__29979__auto___32046))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__29979__auto___32046){
return (function (seq31998){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31998));
});})(g__29979__auto___32046))
;


var g__29979__auto___32050 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__29979__auto___32050){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32051 = arguments.length;
var i__29896__auto___32052 = (0);
while(true){
if((i__29896__auto___32052 < len__29895__auto___32051)){
args__29902__auto__.push((arguments[i__29896__auto___32052]));

var G__32053 = (i__29896__auto___32052 + (1));
i__29896__auto___32052 = G__32053;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32050))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32050){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32050),args);
});})(g__29979__auto___32050))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__29979__auto___32050){
return (function (seq31999){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31999));
});})(g__29979__auto___32050))
;


var g__29979__auto___32054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__29979__auto___32054){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32055 = arguments.length;
var i__29896__auto___32056 = (0);
while(true){
if((i__29896__auto___32056 < len__29895__auto___32055)){
args__29902__auto__.push((arguments[i__29896__auto___32056]));

var G__32057 = (i__29896__auto___32056 + (1));
i__29896__auto___32056 = G__32057;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32054))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32054){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32054),args);
});})(g__29979__auto___32054))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__29979__auto___32054){
return (function (seq32000){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32000));
});})(g__29979__auto___32054))
;


var g__29979__auto___32058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__29979__auto___32058){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32059 = arguments.length;
var i__29896__auto___32060 = (0);
while(true){
if((i__29896__auto___32060 < len__29895__auto___32059)){
args__29902__auto__.push((arguments[i__29896__auto___32060]));

var G__32061 = (i__29896__auto___32060 + (1));
i__29896__auto___32060 = G__32061;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32058))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32058){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32058),args);
});})(g__29979__auto___32058))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__29979__auto___32058){
return (function (seq32001){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32001));
});})(g__29979__auto___32058))
;


var g__29979__auto___32062 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__29979__auto___32062){
return (function cljs$spec$impl$gen$sample(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32063 = arguments.length;
var i__29896__auto___32064 = (0);
while(true){
if((i__29896__auto___32064 < len__29895__auto___32063)){
args__29902__auto__.push((arguments[i__29896__auto___32064]));

var G__32065 = (i__29896__auto___32064 + (1));
i__29896__auto___32064 = G__32065;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32062))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32062){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32062),args);
});})(g__29979__auto___32062))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__29979__auto___32062){
return (function (seq32002){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32002));
});})(g__29979__auto___32062))
;


var g__29979__auto___32066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__29979__auto___32066){
return (function cljs$spec$impl$gen$return(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32067 = arguments.length;
var i__29896__auto___32068 = (0);
while(true){
if((i__29896__auto___32068 < len__29895__auto___32067)){
args__29902__auto__.push((arguments[i__29896__auto___32068]));

var G__32069 = (i__29896__auto___32068 + (1));
i__29896__auto___32068 = G__32069;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32066))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32066){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32066),args);
});})(g__29979__auto___32066))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__29979__auto___32066){
return (function (seq32003){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32003));
});})(g__29979__auto___32066))
;


var g__29979__auto___32070 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__29979__auto___32070){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32071 = arguments.length;
var i__29896__auto___32072 = (0);
while(true){
if((i__29896__auto___32072 < len__29895__auto___32071)){
args__29902__auto__.push((arguments[i__29896__auto___32072]));

var G__32073 = (i__29896__auto___32072 + (1));
i__29896__auto___32072 = G__32073;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32070))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32070){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32070),args);
});})(g__29979__auto___32070))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29979__auto___32070){
return (function (seq32004){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32004));
});})(g__29979__auto___32070))
;


var g__29979__auto___32074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__29979__auto___32074){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32075 = arguments.length;
var i__29896__auto___32076 = (0);
while(true){
if((i__29896__auto___32076 < len__29895__auto___32075)){
args__29902__auto__.push((arguments[i__29896__auto___32076]));

var G__32077 = (i__29896__auto___32076 + (1));
i__29896__auto___32076 = G__32077;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29979__auto___32074))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29979__auto___32074){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29979__auto___32074),args);
});})(g__29979__auto___32074))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__29979__auto___32074){
return (function (seq32005){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32005));
});})(g__29979__auto___32074))
;

var g__29992__auto___32099 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__29992__auto___32099){
return (function cljs$spec$impl$gen$any(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32100 = arguments.length;
var i__29896__auto___32101 = (0);
while(true){
if((i__29896__auto___32101 < len__29895__auto___32100)){
args__29902__auto__.push((arguments[i__29896__auto___32101]));

var G__32102 = (i__29896__auto___32101 + (1));
i__29896__auto___32101 = G__32102;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32099))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32099){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32099);
});})(g__29992__auto___32099))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__29992__auto___32099){
return (function (seq32078){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32078));
});})(g__29992__auto___32099))
;


var g__29992__auto___32103 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__29992__auto___32103){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32104 = arguments.length;
var i__29896__auto___32105 = (0);
while(true){
if((i__29896__auto___32105 < len__29895__auto___32104)){
args__29902__auto__.push((arguments[i__29896__auto___32105]));

var G__32106 = (i__29896__auto___32105 + (1));
i__29896__auto___32105 = G__32106;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32103))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32103){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32103);
});})(g__29992__auto___32103))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__29992__auto___32103){
return (function (seq32079){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32079));
});})(g__29992__auto___32103))
;


var g__29992__auto___32107 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__29992__auto___32107){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32108 = arguments.length;
var i__29896__auto___32109 = (0);
while(true){
if((i__29896__auto___32109 < len__29895__auto___32108)){
args__29902__auto__.push((arguments[i__29896__auto___32109]));

var G__32110 = (i__29896__auto___32109 + (1));
i__29896__auto___32109 = G__32110;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32107))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32107){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32107);
});})(g__29992__auto___32107))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__29992__auto___32107){
return (function (seq32080){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32080));
});})(g__29992__auto___32107))
;


var g__29992__auto___32111 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__29992__auto___32111){
return (function cljs$spec$impl$gen$char(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32112 = arguments.length;
var i__29896__auto___32113 = (0);
while(true){
if((i__29896__auto___32113 < len__29895__auto___32112)){
args__29902__auto__.push((arguments[i__29896__auto___32113]));

var G__32114 = (i__29896__auto___32113 + (1));
i__29896__auto___32113 = G__32114;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32111))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32111){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32111);
});})(g__29992__auto___32111))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__29992__auto___32111){
return (function (seq32081){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32081));
});})(g__29992__auto___32111))
;


var g__29992__auto___32115 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__29992__auto___32115){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32116 = arguments.length;
var i__29896__auto___32117 = (0);
while(true){
if((i__29896__auto___32117 < len__29895__auto___32116)){
args__29902__auto__.push((arguments[i__29896__auto___32117]));

var G__32118 = (i__29896__auto___32117 + (1));
i__29896__auto___32117 = G__32118;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32115))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32115){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32115);
});})(g__29992__auto___32115))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__29992__auto___32115){
return (function (seq32082){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32082));
});})(g__29992__auto___32115))
;


var g__29992__auto___32119 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__29992__auto___32119){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32120 = arguments.length;
var i__29896__auto___32121 = (0);
while(true){
if((i__29896__auto___32121 < len__29895__auto___32120)){
args__29902__auto__.push((arguments[i__29896__auto___32121]));

var G__32122 = (i__29896__auto___32121 + (1));
i__29896__auto___32121 = G__32122;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32119))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32119){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32119);
});})(g__29992__auto___32119))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__29992__auto___32119){
return (function (seq32083){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32083));
});})(g__29992__auto___32119))
;


var g__29992__auto___32123 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__29992__auto___32123){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32124 = arguments.length;
var i__29896__auto___32125 = (0);
while(true){
if((i__29896__auto___32125 < len__29895__auto___32124)){
args__29902__auto__.push((arguments[i__29896__auto___32125]));

var G__32126 = (i__29896__auto___32125 + (1));
i__29896__auto___32125 = G__32126;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32123))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32123){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32123);
});})(g__29992__auto___32123))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__29992__auto___32123){
return (function (seq32084){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32084));
});})(g__29992__auto___32123))
;


var g__29992__auto___32127 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__29992__auto___32127){
return (function cljs$spec$impl$gen$double(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32128 = arguments.length;
var i__29896__auto___32129 = (0);
while(true){
if((i__29896__auto___32129 < len__29895__auto___32128)){
args__29902__auto__.push((arguments[i__29896__auto___32129]));

var G__32130 = (i__29896__auto___32129 + (1));
i__29896__auto___32129 = G__32130;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32127))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32127){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32127);
});})(g__29992__auto___32127))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__29992__auto___32127){
return (function (seq32085){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32085));
});})(g__29992__auto___32127))
;


var g__29992__auto___32131 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__29992__auto___32131){
return (function cljs$spec$impl$gen$int(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32132 = arguments.length;
var i__29896__auto___32133 = (0);
while(true){
if((i__29896__auto___32133 < len__29895__auto___32132)){
args__29902__auto__.push((arguments[i__29896__auto___32133]));

var G__32134 = (i__29896__auto___32133 + (1));
i__29896__auto___32133 = G__32134;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32131))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32131){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32131);
});})(g__29992__auto___32131))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__29992__auto___32131){
return (function (seq32086){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32086));
});})(g__29992__auto___32131))
;


var g__29992__auto___32135 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__29992__auto___32135){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32136 = arguments.length;
var i__29896__auto___32137 = (0);
while(true){
if((i__29896__auto___32137 < len__29895__auto___32136)){
args__29902__auto__.push((arguments[i__29896__auto___32137]));

var G__32138 = (i__29896__auto___32137 + (1));
i__29896__auto___32137 = G__32138;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32135))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32135){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32135);
});})(g__29992__auto___32135))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__29992__auto___32135){
return (function (seq32087){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32087));
});})(g__29992__auto___32135))
;


var g__29992__auto___32139 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__29992__auto___32139){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32140 = arguments.length;
var i__29896__auto___32141 = (0);
while(true){
if((i__29896__auto___32141 < len__29895__auto___32140)){
args__29902__auto__.push((arguments[i__29896__auto___32141]));

var G__32142 = (i__29896__auto___32141 + (1));
i__29896__auto___32141 = G__32142;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32139))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32139){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32139);
});})(g__29992__auto___32139))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__29992__auto___32139){
return (function (seq32088){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32088));
});})(g__29992__auto___32139))
;


var g__29992__auto___32143 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__29992__auto___32143){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32144 = arguments.length;
var i__29896__auto___32145 = (0);
while(true){
if((i__29896__auto___32145 < len__29895__auto___32144)){
args__29902__auto__.push((arguments[i__29896__auto___32145]));

var G__32146 = (i__29896__auto___32145 + (1));
i__29896__auto___32145 = G__32146;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32143))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32143){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32143);
});})(g__29992__auto___32143))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__29992__auto___32143){
return (function (seq32089){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32089));
});})(g__29992__auto___32143))
;


var g__29992__auto___32147 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__29992__auto___32147){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32148 = arguments.length;
var i__29896__auto___32149 = (0);
while(true){
if((i__29896__auto___32149 < len__29895__auto___32148)){
args__29902__auto__.push((arguments[i__29896__auto___32149]));

var G__32150 = (i__29896__auto___32149 + (1));
i__29896__auto___32149 = G__32150;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32147))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32147){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32147);
});})(g__29992__auto___32147))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__29992__auto___32147){
return (function (seq32090){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32090));
});})(g__29992__auto___32147))
;


var g__29992__auto___32151 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__29992__auto___32151){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32152 = arguments.length;
var i__29896__auto___32153 = (0);
while(true){
if((i__29896__auto___32153 < len__29895__auto___32152)){
args__29902__auto__.push((arguments[i__29896__auto___32153]));

var G__32154 = (i__29896__auto___32153 + (1));
i__29896__auto___32153 = G__32154;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32151))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32151){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32151);
});})(g__29992__auto___32151))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__29992__auto___32151){
return (function (seq32091){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32091));
});})(g__29992__auto___32151))
;


var g__29992__auto___32155 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__29992__auto___32155){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32156 = arguments.length;
var i__29896__auto___32157 = (0);
while(true){
if((i__29896__auto___32157 < len__29895__auto___32156)){
args__29902__auto__.push((arguments[i__29896__auto___32157]));

var G__32158 = (i__29896__auto___32157 + (1));
i__29896__auto___32157 = G__32158;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32155))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32155){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32155);
});})(g__29992__auto___32155))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__29992__auto___32155){
return (function (seq32092){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32092));
});})(g__29992__auto___32155))
;


var g__29992__auto___32159 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__29992__auto___32159){
return (function cljs$spec$impl$gen$string(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32160 = arguments.length;
var i__29896__auto___32161 = (0);
while(true){
if((i__29896__auto___32161 < len__29895__auto___32160)){
args__29902__auto__.push((arguments[i__29896__auto___32161]));

var G__32162 = (i__29896__auto___32161 + (1));
i__29896__auto___32161 = G__32162;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32159))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32159){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32159);
});})(g__29992__auto___32159))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__29992__auto___32159){
return (function (seq32093){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32093));
});})(g__29992__auto___32159))
;


var g__29992__auto___32163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__29992__auto___32163){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32164 = arguments.length;
var i__29896__auto___32165 = (0);
while(true){
if((i__29896__auto___32165 < len__29895__auto___32164)){
args__29902__auto__.push((arguments[i__29896__auto___32165]));

var G__32166 = (i__29896__auto___32165 + (1));
i__29896__auto___32165 = G__32166;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32163))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32163){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32163);
});})(g__29992__auto___32163))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__29992__auto___32163){
return (function (seq32094){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32094));
});})(g__29992__auto___32163))
;


var g__29992__auto___32167 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__29992__auto___32167){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32168 = arguments.length;
var i__29896__auto___32169 = (0);
while(true){
if((i__29896__auto___32169 < len__29895__auto___32168)){
args__29902__auto__.push((arguments[i__29896__auto___32169]));

var G__32170 = (i__29896__auto___32169 + (1));
i__29896__auto___32169 = G__32170;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32167))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32167){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32167);
});})(g__29992__auto___32167))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__29992__auto___32167){
return (function (seq32095){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32095));
});})(g__29992__auto___32167))
;


var g__29992__auto___32171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__29992__auto___32171){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32172 = arguments.length;
var i__29896__auto___32173 = (0);
while(true){
if((i__29896__auto___32173 < len__29895__auto___32172)){
args__29902__auto__.push((arguments[i__29896__auto___32173]));

var G__32174 = (i__29896__auto___32173 + (1));
i__29896__auto___32173 = G__32174;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32171))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32171){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32171);
});})(g__29992__auto___32171))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__29992__auto___32171){
return (function (seq32096){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32096));
});})(g__29992__auto___32171))
;


var g__29992__auto___32175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__29992__auto___32175){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32176 = arguments.length;
var i__29896__auto___32177 = (0);
while(true){
if((i__29896__auto___32177 < len__29895__auto___32176)){
args__29902__auto__.push((arguments[i__29896__auto___32177]));

var G__32178 = (i__29896__auto___32177 + (1));
i__29896__auto___32177 = G__32178;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32175))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32175){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32175);
});})(g__29992__auto___32175))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__29992__auto___32175){
return (function (seq32097){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32097));
});})(g__29992__auto___32175))
;


var g__29992__auto___32179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__29992__auto___32179){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32180 = arguments.length;
var i__29896__auto___32181 = (0);
while(true){
if((i__29896__auto___32181 < len__29895__auto___32180)){
args__29902__auto__.push((arguments[i__29896__auto___32181]));

var G__32182 = (i__29896__auto___32181 + (1));
i__29896__auto___32181 = G__32182;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});})(g__29992__auto___32179))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29992__auto___32179){
return (function (args){
return cljs.core.deref.call(null,g__29992__auto___32179);
});})(g__29992__auto___32179))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__29992__auto___32179){
return (function (seq32098){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32098));
});})(g__29992__auto___32179))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__29902__auto__ = [];
var len__29895__auto___32185 = arguments.length;
var i__29896__auto___32186 = (0);
while(true){
if((i__29896__auto___32186 < len__29895__auto___32185)){
args__29902__auto__.push((arguments[i__29896__auto___32186]));

var G__32187 = (i__29896__auto___32186 + (1));
i__29896__auto___32186 = G__32187;
continue;
} else {
}
break;
}

var argseq__29903__auto__ = ((((0) < args__29902__auto__.length))?(new cljs.core.IndexedSeq(args__29902__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29903__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__32183_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__32183_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq32184){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32184));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__32188_SHARP_){
return (new Date(p1__32188_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map