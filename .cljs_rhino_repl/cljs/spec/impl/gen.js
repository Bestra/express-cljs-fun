// Compiled by ClojureScript 1.9.293 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__9686__auto__,writer__9687__auto__,opt__9688__auto__){
return cljs.core._write.call(null,writer__9687__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__10257__auto__ = [];
var len__10250__auto___12333 = arguments.length;
var i__10251__auto___12334 = (0);
while(true){
if((i__10251__auto___12334 < len__10250__auto___12333)){
args__10257__auto__.push((arguments[i__10251__auto___12334]));

var G__12335 = (i__10251__auto___12334 + (1));
i__10251__auto___12334 = G__12335;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12332){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12332));
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
var args__10257__auto__ = [];
var len__10250__auto___12337 = arguments.length;
var i__10251__auto___12338 = (0);
while(true){
if((i__10251__auto___12338 < len__10250__auto___12337)){
args__10257__auto__.push((arguments[i__10251__auto___12338]));

var G__12339 = (i__10251__auto___12338 + (1));
i__10251__auto___12338 = G__12339;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12336){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12336));
});

var g_QMARK__12340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12341 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12340){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12340))
,null));
var mkg_12342 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12340,g_12341){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12340,g_12341))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12340,g_12341,mkg_12342){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12340).call(null,x);
});})(g_QMARK__12340,g_12341,mkg_12342))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12340,g_12341,mkg_12342){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12342).call(null,gfn);
});})(g_QMARK__12340,g_12341,mkg_12342))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12340,g_12341,mkg_12342){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12341).call(null,generator);
});})(g_QMARK__12340,g_12341,mkg_12342))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10334__auto___12361 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__10334__auto___12361){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12362 = arguments.length;
var i__10251__auto___12363 = (0);
while(true){
if((i__10251__auto___12363 < len__10250__auto___12362)){
args__10257__auto__.push((arguments[i__10251__auto___12363]));

var G__12364 = (i__10251__auto___12363 + (1));
i__10251__auto___12363 = G__12364;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12361))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12361){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12361),args);
});})(g__10334__auto___12361))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__10334__auto___12361){
return (function (seq12343){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12343));
});})(g__10334__auto___12361))
;


var g__10334__auto___12365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__10334__auto___12365){
return (function cljs$spec$impl$gen$list(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12366 = arguments.length;
var i__10251__auto___12367 = (0);
while(true){
if((i__10251__auto___12367 < len__10250__auto___12366)){
args__10257__auto__.push((arguments[i__10251__auto___12367]));

var G__12368 = (i__10251__auto___12367 + (1));
i__10251__auto___12367 = G__12368;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12365))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12365){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12365),args);
});})(g__10334__auto___12365))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__10334__auto___12365){
return (function (seq12344){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12344));
});})(g__10334__auto___12365))
;


var g__10334__auto___12369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__10334__auto___12369){
return (function cljs$spec$impl$gen$map(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12370 = arguments.length;
var i__10251__auto___12371 = (0);
while(true){
if((i__10251__auto___12371 < len__10250__auto___12370)){
args__10257__auto__.push((arguments[i__10251__auto___12371]));

var G__12372 = (i__10251__auto___12371 + (1));
i__10251__auto___12371 = G__12372;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12369))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12369){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12369),args);
});})(g__10334__auto___12369))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__10334__auto___12369){
return (function (seq12345){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12345));
});})(g__10334__auto___12369))
;


var g__10334__auto___12373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__10334__auto___12373){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12374 = arguments.length;
var i__10251__auto___12375 = (0);
while(true){
if((i__10251__auto___12375 < len__10250__auto___12374)){
args__10257__auto__.push((arguments[i__10251__auto___12375]));

var G__12376 = (i__10251__auto___12375 + (1));
i__10251__auto___12375 = G__12376;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12373))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12373),args);
});})(g__10334__auto___12373))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__10334__auto___12373){
return (function (seq12346){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12346));
});})(g__10334__auto___12373))
;


var g__10334__auto___12377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__10334__auto___12377){
return (function cljs$spec$impl$gen$set(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12378 = arguments.length;
var i__10251__auto___12379 = (0);
while(true){
if((i__10251__auto___12379 < len__10250__auto___12378)){
args__10257__auto__.push((arguments[i__10251__auto___12379]));

var G__12380 = (i__10251__auto___12379 + (1));
i__10251__auto___12379 = G__12380;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12377))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12377){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12377),args);
});})(g__10334__auto___12377))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__10334__auto___12377){
return (function (seq12347){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12347));
});})(g__10334__auto___12377))
;


var g__10334__auto___12381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__10334__auto___12381){
return (function cljs$spec$impl$gen$vector(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12382 = arguments.length;
var i__10251__auto___12383 = (0);
while(true){
if((i__10251__auto___12383 < len__10250__auto___12382)){
args__10257__auto__.push((arguments[i__10251__auto___12383]));

var G__12384 = (i__10251__auto___12383 + (1));
i__10251__auto___12383 = G__12384;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12381))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12381){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12381),args);
});})(g__10334__auto___12381))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__10334__auto___12381){
return (function (seq12348){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12348));
});})(g__10334__auto___12381))
;


var g__10334__auto___12385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__10334__auto___12385){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12386 = arguments.length;
var i__10251__auto___12387 = (0);
while(true){
if((i__10251__auto___12387 < len__10250__auto___12386)){
args__10257__auto__.push((arguments[i__10251__auto___12387]));

var G__12388 = (i__10251__auto___12387 + (1));
i__10251__auto___12387 = G__12388;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12385))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12385),args);
});})(g__10334__auto___12385))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__10334__auto___12385){
return (function (seq12349){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12349));
});})(g__10334__auto___12385))
;


var g__10334__auto___12389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__10334__auto___12389){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12390 = arguments.length;
var i__10251__auto___12391 = (0);
while(true){
if((i__10251__auto___12391 < len__10250__auto___12390)){
args__10257__auto__.push((arguments[i__10251__auto___12391]));

var G__12392 = (i__10251__auto___12391 + (1));
i__10251__auto___12391 = G__12392;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12389))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12389),args);
});})(g__10334__auto___12389))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__10334__auto___12389){
return (function (seq12350){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12350));
});})(g__10334__auto___12389))
;


var g__10334__auto___12393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__10334__auto___12393){
return (function cljs$spec$impl$gen$elements(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12394 = arguments.length;
var i__10251__auto___12395 = (0);
while(true){
if((i__10251__auto___12395 < len__10250__auto___12394)){
args__10257__auto__.push((arguments[i__10251__auto___12395]));

var G__12396 = (i__10251__auto___12395 + (1));
i__10251__auto___12395 = G__12396;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12393))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12393),args);
});})(g__10334__auto___12393))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__10334__auto___12393){
return (function (seq12351){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12351));
});})(g__10334__auto___12393))
;


var g__10334__auto___12397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__10334__auto___12397){
return (function cljs$spec$impl$gen$bind(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12398 = arguments.length;
var i__10251__auto___12399 = (0);
while(true){
if((i__10251__auto___12399 < len__10250__auto___12398)){
args__10257__auto__.push((arguments[i__10251__auto___12399]));

var G__12400 = (i__10251__auto___12399 + (1));
i__10251__auto___12399 = G__12400;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12397))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12397),args);
});})(g__10334__auto___12397))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__10334__auto___12397){
return (function (seq12352){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12352));
});})(g__10334__auto___12397))
;


var g__10334__auto___12401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__10334__auto___12401){
return (function cljs$spec$impl$gen$choose(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12402 = arguments.length;
var i__10251__auto___12403 = (0);
while(true){
if((i__10251__auto___12403 < len__10250__auto___12402)){
args__10257__auto__.push((arguments[i__10251__auto___12403]));

var G__12404 = (i__10251__auto___12403 + (1));
i__10251__auto___12403 = G__12404;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12401))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12401),args);
});})(g__10334__auto___12401))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__10334__auto___12401){
return (function (seq12353){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12353));
});})(g__10334__auto___12401))
;


var g__10334__auto___12405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__10334__auto___12405){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12406 = arguments.length;
var i__10251__auto___12407 = (0);
while(true){
if((i__10251__auto___12407 < len__10250__auto___12406)){
args__10257__auto__.push((arguments[i__10251__auto___12407]));

var G__12408 = (i__10251__auto___12407 + (1));
i__10251__auto___12407 = G__12408;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12405))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12405),args);
});})(g__10334__auto___12405))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__10334__auto___12405){
return (function (seq12354){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12354));
});})(g__10334__auto___12405))
;


var g__10334__auto___12409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__10334__auto___12409){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12410 = arguments.length;
var i__10251__auto___12411 = (0);
while(true){
if((i__10251__auto___12411 < len__10250__auto___12410)){
args__10257__auto__.push((arguments[i__10251__auto___12411]));

var G__12412 = (i__10251__auto___12411 + (1));
i__10251__auto___12411 = G__12412;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12409))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12409),args);
});})(g__10334__auto___12409))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__10334__auto___12409){
return (function (seq12355){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12355));
});})(g__10334__auto___12409))
;


var g__10334__auto___12413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__10334__auto___12413){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12414 = arguments.length;
var i__10251__auto___12415 = (0);
while(true){
if((i__10251__auto___12415 < len__10250__auto___12414)){
args__10257__auto__.push((arguments[i__10251__auto___12415]));

var G__12416 = (i__10251__auto___12415 + (1));
i__10251__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12413))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12413),args);
});})(g__10334__auto___12413))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__10334__auto___12413){
return (function (seq12356){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12356));
});})(g__10334__auto___12413))
;


var g__10334__auto___12417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__10334__auto___12417){
return (function cljs$spec$impl$gen$sample(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12418 = arguments.length;
var i__10251__auto___12419 = (0);
while(true){
if((i__10251__auto___12419 < len__10250__auto___12418)){
args__10257__auto__.push((arguments[i__10251__auto___12419]));

var G__12420 = (i__10251__auto___12419 + (1));
i__10251__auto___12419 = G__12420;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12417))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12417),args);
});})(g__10334__auto___12417))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__10334__auto___12417){
return (function (seq12357){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12357));
});})(g__10334__auto___12417))
;


var g__10334__auto___12421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__10334__auto___12421){
return (function cljs$spec$impl$gen$return(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12422 = arguments.length;
var i__10251__auto___12423 = (0);
while(true){
if((i__10251__auto___12423 < len__10250__auto___12422)){
args__10257__auto__.push((arguments[i__10251__auto___12423]));

var G__12424 = (i__10251__auto___12423 + (1));
i__10251__auto___12423 = G__12424;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12421))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12421),args);
});})(g__10334__auto___12421))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__10334__auto___12421){
return (function (seq12358){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12358));
});})(g__10334__auto___12421))
;


var g__10334__auto___12425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__10334__auto___12425){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12426 = arguments.length;
var i__10251__auto___12427 = (0);
while(true){
if((i__10251__auto___12427 < len__10250__auto___12426)){
args__10257__auto__.push((arguments[i__10251__auto___12427]));

var G__12428 = (i__10251__auto___12427 + (1));
i__10251__auto___12427 = G__12428;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12425))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12425),args);
});})(g__10334__auto___12425))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10334__auto___12425){
return (function (seq12359){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12359));
});})(g__10334__auto___12425))
;


var g__10334__auto___12429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__10334__auto___12429){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12430 = arguments.length;
var i__10251__auto___12431 = (0);
while(true){
if((i__10251__auto___12431 < len__10250__auto___12430)){
args__10257__auto__.push((arguments[i__10251__auto___12431]));

var G__12432 = (i__10251__auto___12431 + (1));
i__10251__auto___12431 = G__12432;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10334__auto___12429))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10334__auto___12429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10334__auto___12429),args);
});})(g__10334__auto___12429))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__10334__auto___12429){
return (function (seq12360){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12360));
});})(g__10334__auto___12429))
;

var g__10347__auto___12454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__10347__auto___12454){
return (function cljs$spec$impl$gen$any(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12455 = arguments.length;
var i__10251__auto___12456 = (0);
while(true){
if((i__10251__auto___12456 < len__10250__auto___12455)){
args__10257__auto__.push((arguments[i__10251__auto___12456]));

var G__12457 = (i__10251__auto___12456 + (1));
i__10251__auto___12456 = G__12457;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12454))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12454){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12454);
});})(g__10347__auto___12454))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__10347__auto___12454){
return (function (seq12433){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12433));
});})(g__10347__auto___12454))
;


var g__10347__auto___12458 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__10347__auto___12458){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12459 = arguments.length;
var i__10251__auto___12460 = (0);
while(true){
if((i__10251__auto___12460 < len__10250__auto___12459)){
args__10257__auto__.push((arguments[i__10251__auto___12460]));

var G__12461 = (i__10251__auto___12460 + (1));
i__10251__auto___12460 = G__12461;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12458))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12458){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12458);
});})(g__10347__auto___12458))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__10347__auto___12458){
return (function (seq12434){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12434));
});})(g__10347__auto___12458))
;


var g__10347__auto___12462 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__10347__auto___12462){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12463 = arguments.length;
var i__10251__auto___12464 = (0);
while(true){
if((i__10251__auto___12464 < len__10250__auto___12463)){
args__10257__auto__.push((arguments[i__10251__auto___12464]));

var G__12465 = (i__10251__auto___12464 + (1));
i__10251__auto___12464 = G__12465;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12462))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12462){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12462);
});})(g__10347__auto___12462))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__10347__auto___12462){
return (function (seq12435){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12435));
});})(g__10347__auto___12462))
;


var g__10347__auto___12466 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__10347__auto___12466){
return (function cljs$spec$impl$gen$char(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12467 = arguments.length;
var i__10251__auto___12468 = (0);
while(true){
if((i__10251__auto___12468 < len__10250__auto___12467)){
args__10257__auto__.push((arguments[i__10251__auto___12468]));

var G__12469 = (i__10251__auto___12468 + (1));
i__10251__auto___12468 = G__12469;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12466))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12466){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12466);
});})(g__10347__auto___12466))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__10347__auto___12466){
return (function (seq12436){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12436));
});})(g__10347__auto___12466))
;


var g__10347__auto___12470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__10347__auto___12470){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12471 = arguments.length;
var i__10251__auto___12472 = (0);
while(true){
if((i__10251__auto___12472 < len__10250__auto___12471)){
args__10257__auto__.push((arguments[i__10251__auto___12472]));

var G__12473 = (i__10251__auto___12472 + (1));
i__10251__auto___12472 = G__12473;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12470))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12470){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12470);
});})(g__10347__auto___12470))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__10347__auto___12470){
return (function (seq12437){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12437));
});})(g__10347__auto___12470))
;


var g__10347__auto___12474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__10347__auto___12474){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12475 = arguments.length;
var i__10251__auto___12476 = (0);
while(true){
if((i__10251__auto___12476 < len__10250__auto___12475)){
args__10257__auto__.push((arguments[i__10251__auto___12476]));

var G__12477 = (i__10251__auto___12476 + (1));
i__10251__auto___12476 = G__12477;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12474))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12474){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12474);
});})(g__10347__auto___12474))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__10347__auto___12474){
return (function (seq12438){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12438));
});})(g__10347__auto___12474))
;


var g__10347__auto___12478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__10347__auto___12478){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12479 = arguments.length;
var i__10251__auto___12480 = (0);
while(true){
if((i__10251__auto___12480 < len__10250__auto___12479)){
args__10257__auto__.push((arguments[i__10251__auto___12480]));

var G__12481 = (i__10251__auto___12480 + (1));
i__10251__auto___12480 = G__12481;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12478))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12478){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12478);
});})(g__10347__auto___12478))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__10347__auto___12478){
return (function (seq12439){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12439));
});})(g__10347__auto___12478))
;


var g__10347__auto___12482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__10347__auto___12482){
return (function cljs$spec$impl$gen$double(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12483 = arguments.length;
var i__10251__auto___12484 = (0);
while(true){
if((i__10251__auto___12484 < len__10250__auto___12483)){
args__10257__auto__.push((arguments[i__10251__auto___12484]));

var G__12485 = (i__10251__auto___12484 + (1));
i__10251__auto___12484 = G__12485;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12482))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12482){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12482);
});})(g__10347__auto___12482))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__10347__auto___12482){
return (function (seq12440){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12440));
});})(g__10347__auto___12482))
;


var g__10347__auto___12486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__10347__auto___12486){
return (function cljs$spec$impl$gen$int(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12487 = arguments.length;
var i__10251__auto___12488 = (0);
while(true){
if((i__10251__auto___12488 < len__10250__auto___12487)){
args__10257__auto__.push((arguments[i__10251__auto___12488]));

var G__12489 = (i__10251__auto___12488 + (1));
i__10251__auto___12488 = G__12489;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12486))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12486){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12486);
});})(g__10347__auto___12486))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__10347__auto___12486){
return (function (seq12441){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12441));
});})(g__10347__auto___12486))
;


var g__10347__auto___12490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__10347__auto___12490){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12491 = arguments.length;
var i__10251__auto___12492 = (0);
while(true){
if((i__10251__auto___12492 < len__10250__auto___12491)){
args__10257__auto__.push((arguments[i__10251__auto___12492]));

var G__12493 = (i__10251__auto___12492 + (1));
i__10251__auto___12492 = G__12493;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12490))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12490){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12490);
});})(g__10347__auto___12490))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__10347__auto___12490){
return (function (seq12442){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12442));
});})(g__10347__auto___12490))
;


var g__10347__auto___12494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__10347__auto___12494){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12495 = arguments.length;
var i__10251__auto___12496 = (0);
while(true){
if((i__10251__auto___12496 < len__10250__auto___12495)){
args__10257__auto__.push((arguments[i__10251__auto___12496]));

var G__12497 = (i__10251__auto___12496 + (1));
i__10251__auto___12496 = G__12497;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12494))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12494){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12494);
});})(g__10347__auto___12494))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__10347__auto___12494){
return (function (seq12443){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12443));
});})(g__10347__auto___12494))
;


var g__10347__auto___12498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__10347__auto___12498){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12499 = arguments.length;
var i__10251__auto___12500 = (0);
while(true){
if((i__10251__auto___12500 < len__10250__auto___12499)){
args__10257__auto__.push((arguments[i__10251__auto___12500]));

var G__12501 = (i__10251__auto___12500 + (1));
i__10251__auto___12500 = G__12501;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12498))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12498){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12498);
});})(g__10347__auto___12498))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__10347__auto___12498){
return (function (seq12444){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12444));
});})(g__10347__auto___12498))
;


var g__10347__auto___12502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__10347__auto___12502){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12503 = arguments.length;
var i__10251__auto___12504 = (0);
while(true){
if((i__10251__auto___12504 < len__10250__auto___12503)){
args__10257__auto__.push((arguments[i__10251__auto___12504]));

var G__12505 = (i__10251__auto___12504 + (1));
i__10251__auto___12504 = G__12505;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12502))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12502){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12502);
});})(g__10347__auto___12502))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__10347__auto___12502){
return (function (seq12445){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12445));
});})(g__10347__auto___12502))
;


var g__10347__auto___12506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__10347__auto___12506){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12507 = arguments.length;
var i__10251__auto___12508 = (0);
while(true){
if((i__10251__auto___12508 < len__10250__auto___12507)){
args__10257__auto__.push((arguments[i__10251__auto___12508]));

var G__12509 = (i__10251__auto___12508 + (1));
i__10251__auto___12508 = G__12509;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12506))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12506){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12506);
});})(g__10347__auto___12506))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__10347__auto___12506){
return (function (seq12446){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12446));
});})(g__10347__auto___12506))
;


var g__10347__auto___12510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__10347__auto___12510){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12511 = arguments.length;
var i__10251__auto___12512 = (0);
while(true){
if((i__10251__auto___12512 < len__10250__auto___12511)){
args__10257__auto__.push((arguments[i__10251__auto___12512]));

var G__12513 = (i__10251__auto___12512 + (1));
i__10251__auto___12512 = G__12513;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12510))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12510){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12510);
});})(g__10347__auto___12510))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__10347__auto___12510){
return (function (seq12447){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12447));
});})(g__10347__auto___12510))
;


var g__10347__auto___12514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__10347__auto___12514){
return (function cljs$spec$impl$gen$string(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12515 = arguments.length;
var i__10251__auto___12516 = (0);
while(true){
if((i__10251__auto___12516 < len__10250__auto___12515)){
args__10257__auto__.push((arguments[i__10251__auto___12516]));

var G__12517 = (i__10251__auto___12516 + (1));
i__10251__auto___12516 = G__12517;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12514))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12514){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12514);
});})(g__10347__auto___12514))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__10347__auto___12514){
return (function (seq12448){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12448));
});})(g__10347__auto___12514))
;


var g__10347__auto___12518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__10347__auto___12518){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12519 = arguments.length;
var i__10251__auto___12520 = (0);
while(true){
if((i__10251__auto___12520 < len__10250__auto___12519)){
args__10257__auto__.push((arguments[i__10251__auto___12520]));

var G__12521 = (i__10251__auto___12520 + (1));
i__10251__auto___12520 = G__12521;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12518))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12518){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12518);
});})(g__10347__auto___12518))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__10347__auto___12518){
return (function (seq12449){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12449));
});})(g__10347__auto___12518))
;


var g__10347__auto___12522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__10347__auto___12522){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12523 = arguments.length;
var i__10251__auto___12524 = (0);
while(true){
if((i__10251__auto___12524 < len__10250__auto___12523)){
args__10257__auto__.push((arguments[i__10251__auto___12524]));

var G__12525 = (i__10251__auto___12524 + (1));
i__10251__auto___12524 = G__12525;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12522))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12522){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12522);
});})(g__10347__auto___12522))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__10347__auto___12522){
return (function (seq12450){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12450));
});})(g__10347__auto___12522))
;


var g__10347__auto___12526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__10347__auto___12526){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12527 = arguments.length;
var i__10251__auto___12528 = (0);
while(true){
if((i__10251__auto___12528 < len__10250__auto___12527)){
args__10257__auto__.push((arguments[i__10251__auto___12528]));

var G__12529 = (i__10251__auto___12528 + (1));
i__10251__auto___12528 = G__12529;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12526))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12526){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12526);
});})(g__10347__auto___12526))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__10347__auto___12526){
return (function (seq12451){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12451));
});})(g__10347__auto___12526))
;


var g__10347__auto___12530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__10347__auto___12530){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12531 = arguments.length;
var i__10251__auto___12532 = (0);
while(true){
if((i__10251__auto___12532 < len__10250__auto___12531)){
args__10257__auto__.push((arguments[i__10251__auto___12532]));

var G__12533 = (i__10251__auto___12532 + (1));
i__10251__auto___12532 = G__12533;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12530))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12530){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12530);
});})(g__10347__auto___12530))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__10347__auto___12530){
return (function (seq12452){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12452));
});})(g__10347__auto___12530))
;


var g__10347__auto___12534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__10347__auto___12534){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12535 = arguments.length;
var i__10251__auto___12536 = (0);
while(true){
if((i__10251__auto___12536 < len__10250__auto___12535)){
args__10257__auto__.push((arguments[i__10251__auto___12536]));

var G__12537 = (i__10251__auto___12536 + (1));
i__10251__auto___12536 = G__12537;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});})(g__10347__auto___12534))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10347__auto___12534){
return (function (args){
return cljs.core.deref.call(null,g__10347__auto___12534);
});})(g__10347__auto___12534))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__10347__auto___12534){
return (function (seq12453){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12453));
});})(g__10347__auto___12534))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__10257__auto__ = [];
var len__10250__auto___12540 = arguments.length;
var i__10251__auto___12541 = (0);
while(true){
if((i__10251__auto___12541 < len__10250__auto___12540)){
args__10257__auto__.push((arguments[i__10251__auto___12541]));

var G__12542 = (i__10251__auto___12541 + (1));
i__10251__auto___12541 = G__12542;
continue;
} else {
}
break;
}

var argseq__10258__auto__ = ((((0) < args__10257__auto__.length))?(new cljs.core.IndexedSeq(args__10257__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10258__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12538_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12538_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12539){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12539));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12543_SHARP_){
return (new Date(p1__12543_SHARP_));
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