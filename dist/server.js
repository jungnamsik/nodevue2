!function(e){var o={};function t(n){if(o[n])return o[n].exports;var s=o[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var s in e)t.d(n,s,function(o){return e[o]}.bind(null,s));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=3)}([function(e,o){e.exports=require("util")},function(e,o,t){const n=t(6),s=t(0),r=t(2);r.promisifyAll(n),r.promisifyAll(t(7).prototype),r.promisifyAll(t(8).prototype);const i={host:"localhost",user:"test",password:"test12#$",database:"testdb",multipleStatements:!0,connectionLimit:5,waitForConnections:!1};e.exports=class{constructor(e){e=e||i,this.pool=n.createPool(e)}connect(){return this.pool.getConnectionAsync().disposer(e=>e.release())}end(){this.pool.end(e=>{s.log(">>>>>>>>>>>>>>>>>>>> End of pool!!!"),e&&s.err("ERR pool ending!!")})}}},function(e,o){e.exports=require("bluebird")},function(e,o,t){(function(e){const o=t(0),n=t(4),s=n(),r=t(5),i=t(1),c=t(9),l=new i;s.use(n.static("public")),s.set("views",e+"/views"),s.set("view engine","ejs"),s.engine("html",t(10).renderFile),s.get("/",(e,o)=>{o.render("index.ejs",{name:"abcd"})}),s.get("/dbtest/:no",(e,o)=>{let t=e.params.no,n=new c(l);n.execute(e=>{e.query("select no, cno from tno where no >=?",[t],(e,t)=>{if(e)throw e;for(x in t);o.json(t)})})}),s.get("/test/:email",(e,o)=>{r.email=e.params.email,r.aa=e.query.aa,o.json(r)});const u=s.listen(7e3,(function(){console.log("Express's started on port 7000")}));t(11).listen(u,{log:!1,origins:"*:*",pingInterval:3e3,pingTimeout:5e3}).sockets.on("connection",(e,t)=>{o.log(">>>>>",e.id);let n=e.id;e.emit("message",{msg:"Welcome!!["+e.id+"]",socketId:n}),o.log("connection>>",n,e.handshake.query),e.on("join",(t,n)=>{e.join(t,()=>{o.log("join",t,Object.keys(e.rooms)),n&&n()})}),e.on("leave",(o,t)=>{e.leave(o,()=>{t&&t()})}),e.on("rooms",t=>{o.log("rooms=>",e.rooms),t&&t(Object.keys(e.rooms))}),e.on("message",(t,n)=>{o.log("message>>",t,Object.keys(e.rooms)),n&&n(t.msg),e.broadcast.to(t.room).emit("message",t)}),e.on("message-for-one",(t,n)=>{o.log("message-for-one>>",t,Object.keys(e.rooms)),n&&n(t.msg),e.to(t.socketid).emit("message",t)}),e.on("disconnecting",t=>{o.log("disconnecting>>",e.id,Object.keys(e.rooms))}),e.on("disconnect",t=>{o.log("disconnect>>",e.id,Object.keys(e.rooms))})})}).call(this,"/")},function(e,o){e.exports=require("express")},function(e){e.exports=JSON.parse('{"id":123,"name":"jns"}')},function(e,o){e.exports=require("mysql")},function(e,o){e.exports=require("mysql/lib/Connection")},function(e,o){e.exports=require("mysql/lib/Pool")},function(e,o,t){const n=t(2);t(1);e.exports=class{constructor(e){this.pool=e}execute(e){n.using(this.pool.connect(),o=>{e(o)})}executeTx(e){n.using(this.pool.connect(),o=>{o.beginTransaction(t=>{e(o)})})}}},function(e,o){e.exports=require("ejs")},function(e,o){e.exports=require("socket.io")}]);