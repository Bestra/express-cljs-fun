// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8351__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8352__i = 0, G__8352__a = new Array(arguments.length -  0);
while (G__8352__i < G__8352__a.length) {G__8352__a[G__8352__i] = arguments[G__8352__i + 0]; ++G__8352__i;}
  args = new cljs.core.IndexedSeq(G__8352__a,0);
} 
return G__8351__delegate.call(this,args);};
G__8351.cljs$lang$maxFixedArity = 0;
G__8351.cljs$lang$applyTo = (function (arglist__8353){
var args = cljs.core.seq(arglist__8353);
return G__8351__delegate(args);
});
G__8351.cljs$core$IFn$_invoke$arity$variadic = G__8351__delegate;
return G__8351;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8354__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8355__i = 0, G__8355__a = new Array(arguments.length -  0);
while (G__8355__i < G__8355__a.length) {G__8355__a[G__8355__i] = arguments[G__8355__i + 0]; ++G__8355__i;}
  args = new cljs.core.IndexedSeq(G__8355__a,0);
} 
return G__8354__delegate.call(this,args);};
G__8354.cljs$lang$maxFixedArity = 0;
G__8354.cljs$lang$applyTo = (function (arglist__8356){
var args = cljs.core.seq(arglist__8356);
return G__8354__delegate(args);
});
G__8354.cljs$core$IFn$_invoke$arity$variadic = G__8354__delegate;
return G__8354;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map