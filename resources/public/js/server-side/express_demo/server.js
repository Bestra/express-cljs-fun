// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('express_demo.server');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
express_demo.server.express = cljs.nodejs.require.call(null,"express");
express_demo.server.say_hello_BANG_ = (function express_demo$server$say_hello_BANG_(req,res){
return res.send("Hello world!");
});
express_demo.server._main = (function express_demo$server$_main(){
var app = express_demo.server.express.call(null);
app.get("/",express_demo.server.say_hello_BANG_);

return app.listen((3000),((function (app){
return (function (){
return cljs.core.println.call(null,"Server started on port 3000");
});})(app))
);
});
cljs.core._STAR_main_cli_fn_STAR_ = express_demo.server._main;

//# sourceMappingURL=server.js.map