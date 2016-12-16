// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32200__i = 0, G__32200__a = new Array(arguments.length -  0);
while (G__32200__i < G__32200__a.length) {G__32200__a[G__32200__i] = arguments[G__32200__i + 0]; ++G__32200__i;}
  args = new cljs.core.IndexedSeq(G__32200__a,0);
} 
return G__32199__delegate.call(this,args);};
G__32199.cljs$lang$maxFixedArity = 0;
G__32199.cljs$lang$applyTo = (function (arglist__32201){
var args = cljs.core.seq(arglist__32201);
return G__32199__delegate(args);
});
G__32199.cljs$core$IFn$_invoke$arity$variadic = G__32199__delegate;
return G__32199;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32202__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32203__i = 0, G__32203__a = new Array(arguments.length -  0);
while (G__32203__i < G__32203__a.length) {G__32203__a[G__32203__i] = arguments[G__32203__i + 0]; ++G__32203__i;}
  args = new cljs.core.IndexedSeq(G__32203__a,0);
} 
return G__32202__delegate.call(this,args);};
G__32202.cljs$lang$maxFixedArity = 0;
G__32202.cljs$lang$applyTo = (function (arglist__32204){
var args = cljs.core.seq(arglist__32204);
return G__32202__delegate(args);
});
G__32202.cljs$core$IFn$_invoke$arity$variadic = G__32202__delegate;
return G__32202;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map