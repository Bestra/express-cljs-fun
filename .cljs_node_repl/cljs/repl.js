// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30992){
var map__31017 = p__30992;
var map__31017__$1 = ((((!((map__31017 == null)))?((((map__31017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31017):map__31017);
var m = map__31017__$1;
var n = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31017__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31019_31041 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31020_31042 = null;
var count__31021_31043 = (0);
var i__31022_31044 = (0);
while(true){
if((i__31022_31044 < count__31021_31043)){
var f_31045 = cljs.core._nth.call(null,chunk__31020_31042,i__31022_31044);
cljs.core.println.call(null,"  ",f_31045);

var G__31046 = seq__31019_31041;
var G__31047 = chunk__31020_31042;
var G__31048 = count__31021_31043;
var G__31049 = (i__31022_31044 + (1));
seq__31019_31041 = G__31046;
chunk__31020_31042 = G__31047;
count__31021_31043 = G__31048;
i__31022_31044 = G__31049;
continue;
} else {
var temp__6753__auto___31050 = cljs.core.seq.call(null,seq__31019_31041);
if(temp__6753__auto___31050){
var seq__31019_31051__$1 = temp__6753__auto___31050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31019_31051__$1)){
var c__29585__auto___31052 = cljs.core.chunk_first.call(null,seq__31019_31051__$1);
var G__31053 = cljs.core.chunk_rest.call(null,seq__31019_31051__$1);
var G__31054 = c__29585__auto___31052;
var G__31055 = cljs.core.count.call(null,c__29585__auto___31052);
var G__31056 = (0);
seq__31019_31041 = G__31053;
chunk__31020_31042 = G__31054;
count__31021_31043 = G__31055;
i__31022_31044 = G__31056;
continue;
} else {
var f_31057 = cljs.core.first.call(null,seq__31019_31051__$1);
cljs.core.println.call(null,"  ",f_31057);

var G__31058 = cljs.core.next.call(null,seq__31019_31051__$1);
var G__31059 = null;
var G__31060 = (0);
var G__31061 = (0);
seq__31019_31041 = G__31058;
chunk__31020_31042 = G__31059;
count__31021_31043 = G__31060;
i__31022_31044 = G__31061;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31062 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28679__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28679__auto__)){
return or__28679__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31062);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31062)))?cljs.core.second.call(null,arglists_31062):arglists_31062));
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
var seq__31023_31063 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31024_31064 = null;
var count__31025_31065 = (0);
var i__31026_31066 = (0);
while(true){
if((i__31026_31066 < count__31025_31065)){
var vec__31027_31067 = cljs.core._nth.call(null,chunk__31024_31064,i__31026_31066);
var name_31068 = cljs.core.nth.call(null,vec__31027_31067,(0),null);
var map__31030_31069 = cljs.core.nth.call(null,vec__31027_31067,(1),null);
var map__31030_31070__$1 = ((((!((map__31030_31069 == null)))?((((map__31030_31069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31030_31069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31030_31069):map__31030_31069);
var doc_31071 = cljs.core.get.call(null,map__31030_31070__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31072 = cljs.core.get.call(null,map__31030_31070__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31068);

cljs.core.println.call(null," ",arglists_31072);

if(cljs.core.truth_(doc_31071)){
cljs.core.println.call(null," ",doc_31071);
} else {
}

var G__31073 = seq__31023_31063;
var G__31074 = chunk__31024_31064;
var G__31075 = count__31025_31065;
var G__31076 = (i__31026_31066 + (1));
seq__31023_31063 = G__31073;
chunk__31024_31064 = G__31074;
count__31025_31065 = G__31075;
i__31026_31066 = G__31076;
continue;
} else {
var temp__6753__auto___31077 = cljs.core.seq.call(null,seq__31023_31063);
if(temp__6753__auto___31077){
var seq__31023_31078__$1 = temp__6753__auto___31077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31023_31078__$1)){
var c__29585__auto___31079 = cljs.core.chunk_first.call(null,seq__31023_31078__$1);
var G__31080 = cljs.core.chunk_rest.call(null,seq__31023_31078__$1);
var G__31081 = c__29585__auto___31079;
var G__31082 = cljs.core.count.call(null,c__29585__auto___31079);
var G__31083 = (0);
seq__31023_31063 = G__31080;
chunk__31024_31064 = G__31081;
count__31025_31065 = G__31082;
i__31026_31066 = G__31083;
continue;
} else {
var vec__31032_31084 = cljs.core.first.call(null,seq__31023_31078__$1);
var name_31085 = cljs.core.nth.call(null,vec__31032_31084,(0),null);
var map__31035_31086 = cljs.core.nth.call(null,vec__31032_31084,(1),null);
var map__31035_31087__$1 = ((((!((map__31035_31086 == null)))?((((map__31035_31086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31035_31086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31035_31086):map__31035_31086);
var doc_31088 = cljs.core.get.call(null,map__31035_31087__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31089 = cljs.core.get.call(null,map__31035_31087__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31085);

cljs.core.println.call(null," ",arglists_31089);

if(cljs.core.truth_(doc_31088)){
cljs.core.println.call(null," ",doc_31088);
} else {
}

var G__31090 = cljs.core.next.call(null,seq__31023_31078__$1);
var G__31091 = null;
var G__31092 = (0);
var G__31093 = (0);
seq__31023_31063 = G__31090;
chunk__31024_31064 = G__31091;
count__31025_31065 = G__31092;
i__31026_31066 = G__31093;
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

var seq__31037 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31038 = null;
var count__31039 = (0);
var i__31040 = (0);
while(true){
if((i__31040 < count__31039)){
var role = cljs.core._nth.call(null,chunk__31038,i__31040);
var temp__6753__auto___31094__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___31094__$1)){
var spec_31095 = temp__6753__auto___31094__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31095));
} else {
}

var G__31096 = seq__31037;
var G__31097 = chunk__31038;
var G__31098 = count__31039;
var G__31099 = (i__31040 + (1));
seq__31037 = G__31096;
chunk__31038 = G__31097;
count__31039 = G__31098;
i__31040 = G__31099;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__31037);
if(temp__6753__auto____$1){
var seq__31037__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31037__$1)){
var c__29585__auto__ = cljs.core.chunk_first.call(null,seq__31037__$1);
var G__31100 = cljs.core.chunk_rest.call(null,seq__31037__$1);
var G__31101 = c__29585__auto__;
var G__31102 = cljs.core.count.call(null,c__29585__auto__);
var G__31103 = (0);
seq__31037 = G__31100;
chunk__31038 = G__31101;
count__31039 = G__31102;
i__31040 = G__31103;
continue;
} else {
var role = cljs.core.first.call(null,seq__31037__$1);
var temp__6753__auto___31104__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___31104__$2)){
var spec_31105 = temp__6753__auto___31104__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31105));
} else {
}

var G__31106 = cljs.core.next.call(null,seq__31037__$1);
var G__31107 = null;
var G__31108 = (0);
var G__31109 = (0);
seq__31037 = G__31106;
chunk__31038 = G__31107;
count__31039 = G__31108;
i__31040 = G__31109;
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