// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11347){
var map__11372 = p__11347;
var map__11372__$1 = ((((!((map__11372 == null)))?((((map__11372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11372):map__11372);
var m = map__11372__$1;
var n = cljs.core.get.call(null,map__11372__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11372__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
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
var seq__11374_11396 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11375_11397 = null;
var count__11376_11398 = (0);
var i__11377_11399 = (0);
while(true){
if((i__11377_11399 < count__11376_11398)){
var f_11400 = cljs.core._nth.call(null,chunk__11375_11397,i__11377_11399);
cljs.core.println.call(null,"  ",f_11400);

var G__11401 = seq__11374_11396;
var G__11402 = chunk__11375_11397;
var G__11403 = count__11376_11398;
var G__11404 = (i__11377_11399 + (1));
seq__11374_11396 = G__11401;
chunk__11375_11397 = G__11402;
count__11376_11398 = G__11403;
i__11377_11399 = G__11404;
continue;
} else {
var temp__6753__auto___11405 = cljs.core.seq.call(null,seq__11374_11396);
if(temp__6753__auto___11405){
var seq__11374_11406__$1 = temp__6753__auto___11405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11374_11406__$1)){
var c__9940__auto___11407 = cljs.core.chunk_first.call(null,seq__11374_11406__$1);
var G__11408 = cljs.core.chunk_rest.call(null,seq__11374_11406__$1);
var G__11409 = c__9940__auto___11407;
var G__11410 = cljs.core.count.call(null,c__9940__auto___11407);
var G__11411 = (0);
seq__11374_11396 = G__11408;
chunk__11375_11397 = G__11409;
count__11376_11398 = G__11410;
i__11377_11399 = G__11411;
continue;
} else {
var f_11412 = cljs.core.first.call(null,seq__11374_11406__$1);
cljs.core.println.call(null,"  ",f_11412);

var G__11413 = cljs.core.next.call(null,seq__11374_11406__$1);
var G__11414 = null;
var G__11415 = (0);
var G__11416 = (0);
seq__11374_11396 = G__11413;
chunk__11375_11397 = G__11414;
count__11376_11398 = G__11415;
i__11377_11399 = G__11416;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11417 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9034__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9034__auto__)){
return or__9034__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11417);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11417)))?cljs.core.second.call(null,arglists_11417):arglists_11417));
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
var seq__11378_11418 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11379_11419 = null;
var count__11380_11420 = (0);
var i__11381_11421 = (0);
while(true){
if((i__11381_11421 < count__11380_11420)){
var vec__11382_11422 = cljs.core._nth.call(null,chunk__11379_11419,i__11381_11421);
var name_11423 = cljs.core.nth.call(null,vec__11382_11422,(0),null);
var map__11385_11424 = cljs.core.nth.call(null,vec__11382_11422,(1),null);
var map__11385_11425__$1 = ((((!((map__11385_11424 == null)))?((((map__11385_11424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11385_11424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11385_11424):map__11385_11424);
var doc_11426 = cljs.core.get.call(null,map__11385_11425__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11427 = cljs.core.get.call(null,map__11385_11425__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11423);

cljs.core.println.call(null," ",arglists_11427);

if(cljs.core.truth_(doc_11426)){
cljs.core.println.call(null," ",doc_11426);
} else {
}

var G__11428 = seq__11378_11418;
var G__11429 = chunk__11379_11419;
var G__11430 = count__11380_11420;
var G__11431 = (i__11381_11421 + (1));
seq__11378_11418 = G__11428;
chunk__11379_11419 = G__11429;
count__11380_11420 = G__11430;
i__11381_11421 = G__11431;
continue;
} else {
var temp__6753__auto___11432 = cljs.core.seq.call(null,seq__11378_11418);
if(temp__6753__auto___11432){
var seq__11378_11433__$1 = temp__6753__auto___11432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11378_11433__$1)){
var c__9940__auto___11434 = cljs.core.chunk_first.call(null,seq__11378_11433__$1);
var G__11435 = cljs.core.chunk_rest.call(null,seq__11378_11433__$1);
var G__11436 = c__9940__auto___11434;
var G__11437 = cljs.core.count.call(null,c__9940__auto___11434);
var G__11438 = (0);
seq__11378_11418 = G__11435;
chunk__11379_11419 = G__11436;
count__11380_11420 = G__11437;
i__11381_11421 = G__11438;
continue;
} else {
var vec__11387_11439 = cljs.core.first.call(null,seq__11378_11433__$1);
var name_11440 = cljs.core.nth.call(null,vec__11387_11439,(0),null);
var map__11390_11441 = cljs.core.nth.call(null,vec__11387_11439,(1),null);
var map__11390_11442__$1 = ((((!((map__11390_11441 == null)))?((((map__11390_11441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11390_11441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11390_11441):map__11390_11441);
var doc_11443 = cljs.core.get.call(null,map__11390_11442__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11444 = cljs.core.get.call(null,map__11390_11442__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11440);

cljs.core.println.call(null," ",arglists_11444);

if(cljs.core.truth_(doc_11443)){
cljs.core.println.call(null," ",doc_11443);
} else {
}

var G__11445 = cljs.core.next.call(null,seq__11378_11433__$1);
var G__11446 = null;
var G__11447 = (0);
var G__11448 = (0);
seq__11378_11418 = G__11445;
chunk__11379_11419 = G__11446;
count__11380_11420 = G__11447;
i__11381_11421 = G__11448;
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
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__11392 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11393 = null;
var count__11394 = (0);
var i__11395 = (0);
while(true){
if((i__11395 < count__11394)){
var role = cljs.core._nth.call(null,chunk__11393,i__11395);
var temp__6753__auto___11449__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___11449__$1)){
var spec_11450 = temp__6753__auto___11449__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11450));
} else {
}

var G__11451 = seq__11392;
var G__11452 = chunk__11393;
var G__11453 = count__11394;
var G__11454 = (i__11395 + (1));
seq__11392 = G__11451;
chunk__11393 = G__11452;
count__11394 = G__11453;
i__11395 = G__11454;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__11392);
if(temp__6753__auto____$1){
var seq__11392__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11392__$1)){
var c__9940__auto__ = cljs.core.chunk_first.call(null,seq__11392__$1);
var G__11455 = cljs.core.chunk_rest.call(null,seq__11392__$1);
var G__11456 = c__9940__auto__;
var G__11457 = cljs.core.count.call(null,c__9940__auto__);
var G__11458 = (0);
seq__11392 = G__11455;
chunk__11393 = G__11456;
count__11394 = G__11457;
i__11395 = G__11458;
continue;
} else {
var role = cljs.core.first.call(null,seq__11392__$1);
var temp__6753__auto___11459__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___11459__$2)){
var spec_11460 = temp__6753__auto___11459__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11460));
} else {
}

var G__11461 = cljs.core.next.call(null,seq__11392__$1);
var G__11462 = null;
var G__11463 = (0);
var G__11464 = (0);
seq__11392 = G__11461;
chunk__11393 = G__11462;
count__11394 = G__11463;
i__11395 = G__11464;
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

//# sourceMappingURL=repl.js.map