(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{554:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(14),o=(n(21),n(64),n(95)),c=n(584),m=n.n(c),d=n(555),f=n(556),l=Object(o.c)("robot",{state:function(){return{robotToken:null,signedRobotToken:null,queueSize:null,robotState:null,lastSessionId:null,nftData:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null,recordData:null}}}},actions:{launchCps:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.cps.launch.txInfo={tx:null},n.cps.launch.txStatus=null,o=JSON.stringify(e),r.next=5,m.a.of(o);case 5:return c=r.sent,r.next=8,Object(f.h)(o);case 8:return console.log(c),console.log(o),r.next=12,Object(d.c)(n.cps.address,c);case 12:if(l=r.sent,n.cps.status="wait_tx",!t){r.next=23;break}return r.next=17,Object(d.e)(n.cps.address,t);case 17:return v=r.sent,r.next=20,Object(d.h)([l,v]);case 20:n.cps.launch.txInfo=r.sent,r.next=26;break;case 23:return r.next=25,Object(d.g)(l);case 25:n.cps.launch.txInfo=r.sent;case 26:return n.cps.launch.txStatus="accepted",n.cps.status="activated",r.abrupt("return",n.cps.launch);case 29:case"end":return r.stop()}}),r)})))()},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),t.robotState=null,t.queueSize=null,t.lastSessionId=null,e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},setNftData:function(data){this.nftData=data},sendDrawing:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ticket",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,segments:e,payment_mode:n,tx_id:r})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))},startInspection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/start_inspection",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))}}})},555:function(t,e,n){"use strict";n.d(e,"b",(function(){return k})),n.d(e,"f",(function(){return w})),n.d(e,"j",(function(){return y})),n.d(e,"c",(function(){return S})),n.d(e,"e",(function(){return R})),n.d(e,"i",(function(){return Y})),n.d(e,"g",(function(){return j})),n.d(e,"h",(function(){return L})),n.d(e,"d",(function(){return O})),n.d(e,"a",(function(){return _}));var r,o,c=n(14),m=(n(58),n(76),n(47),n(64),n(580)),d=n(577),f=n.n(d),l=n(579),v=n(921),x=n(866),h=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new m.a({endpoint:"wss://kusama.rpc.robonomics.network"})).setAccountManager(new f.a(l.a)),t.next=6,r.run();case 6:return t.next=8,f.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o&&o(),t.next=3,h();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:o=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),S=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return r=t.sent,o=r.launch.send(e,m.b.cidToHex(n)),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),R=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return r=t.sent,o=r.api.tx.balances.transfer(e,n),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Y=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return r=t.sent,t.next=5,Object(v.i)(r.accountManager.account.meta.source);case 5:if(o=t.sent,!(c=null==o||null===(n=o.signer)||void 0===n?void 0:n.signRaw)){t.next=13;break}return t.next=10,c({address:r.accountManager.account.address,data:Object(x.a)(e),type:"bytes"});case 10:return m=t.sent,d=m.signature,t.abrupt("return",d);case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return o=t.sent,t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t,e){return"https://".concat(t,".subscan.io/extrinsic/").concat(e)},_=function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}},556:function(t,e,n){"use strict";n.d(e,"e",(function(){return m})),n.d(e,"h",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return l})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return x})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return y}));var r=n(14),o=(n(76),n(64),n(77)),c=n.n(o).a.create({baseURL:"https://api.merklebot.com"}),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,m,d,f,l,v,x,h,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sender,r=void 0===n?null:n,o=e.nonce,m=void 0===o?null:o,d=e.launchTxId,f=void 0===d?null:d,l=e.skip,v=void 0===l?0:l,x=e.limit,h=void 0===x?1e4:x,t.next=3,c.get("robonomics-launch-traces",{params:{sender:r,nonce:m,skip:v,limit:h,launch_tx_id:f}});case 3:return k=t.sent,t.abrupt("return",k.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("spot-demo/process_command",null,{params:{command_params:e}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("filecoin-finder/providers/"+e,{});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return n=t.sent,t.abrupt("return",n.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("spot-demo/tickets",{params:{customer:e,spent:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,form){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("faucet/retrieve",{account:e,form:form});case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h={v1:{begin:0,end:Date.parse("2022-08-22 16:41:19 +0000")},v2:{begin:Date.parse("2022-08-22 16:41:19 +0000")+1,end:1/0}},k="https://merklebot.mypinata.cloud/ipfs",w=function(t){var e=t.ipfsCid,n=t.sender,r=t.nonce,o=t.createdAt,c=Date.parse(o+"+0000");switch(!0){case c>h.v1.begin&&c<h.v1.end:return"".concat(k,"/").concat(e)+"/spot/spot.merklebot.com/spot/traces"+"/user-".concat(n,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(r,"-").concat(o);case c>h.v2.begin&&c<h.v2.end:return"".concat(k,"/").concat(e)+"/user-".concat(n,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(r,"-").concat(o);default:console.error({msg:"can't identify version",createdAt:o,versionsTime:h})}},y=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("spot-demo/nft/orders/".concat(e),{params:{nft_order_id:e}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},574:function(t,e){},576:function(t,e){},578:function(t,e){},582:function(t,e,n){var content=n(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("db0f9a46",content,!0,{sourceMap:!1})},611:function(t,e,n){"use strict";n(582)},612:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"@-webkit-keyframes SpotBody-data-v-04b63336{0%{transform:translateY(0)}to{transform:translateY(-50px)}}@keyframes SpotBody-data-v-04b63336{0%{transform:translateY(0)}to{transform:translateY(-50px)}}@-webkit-keyframes SpotLeg1Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@keyframes SpotLeg1Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@-webkit-keyframes SpotLeg1Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(6deg)}to{transform:translateY(-40px) rotate(30deg)}}@keyframes SpotLeg1Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(6deg)}to{transform:translateY(-40px) rotate(30deg)}}@-webkit-keyframes SpotLeg2Top-data-v-04b63336{0%{transform:translateY(0) rotate(-14deg)}to{transform:translateY(-40px) rotate(-20deg)}}@keyframes SpotLeg2Top-data-v-04b63336{0%{transform:translateY(0) rotate(-14deg)}to{transform:translateY(-40px) rotate(-20deg)}}@-webkit-keyframes SpotLeg2Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-30px) rotate(28deg)}}@keyframes SpotLeg2Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-30px) rotate(28deg)}}@-webkit-keyframes SpotLeg3Top-data-v-04b63336{0%{transform:translateY(0) rotate(-17deg)}to{transform:translateY(-35px) rotate(-12deg)}}@keyframes SpotLeg3Top-data-v-04b63336{0%{transform:translateY(0) rotate(-17deg)}to{transform:translateY(-35px) rotate(-12deg)}}@-webkit-keyframes SpotLeg3Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-50px) rotate(40deg)}}@keyframes SpotLeg3Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-50px) rotate(40deg)}}@-webkit-keyframes SpotLeg4Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@keyframes SpotLeg4Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@-webkit-keyframes SpotLeg4Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(11deg)}to{transform:translateY(-45px) rotate(35deg)}}@keyframes SpotLeg4Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(11deg)}to{transform:translateY(-45px) rotate(35deg)}}.spot[data-v-04b63336]{position:relative;width:395px;height:223px;transform:scale(.6) translateX(-80px)}.spot>img[data-v-04b63336]{display:block;position:absolute;-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.spot-body[data-v-04b63336]{width:320px;bottom:67px;left:calc(50% - 160px);z-index:2}.animated .spot-body[data-v-04b63336]{-webkit-animation-name:SpotBody-data-v-04b63336;animation-name:SpotBody-data-v-04b63336}.spot-leg1-top[data-v-04b63336]{width:162.5px;bottom:78px;left:-55px;transform-origin:100% 100%;transform:rotate(-20deg);z-index:4}.animated .spot-leg1-top[data-v-04b63336]{-webkit-animation-name:SpotLeg1Top-data-v-04b63336;animation-name:SpotLeg1Top-data-v-04b63336}.spot-leg1-bottom[data-v-04b63336]{width:151px;bottom:28px;left:-35px;transform-origin:0 0;transform:rotate(6deg);z-index:3}.animated .spot-leg1-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg1Bottom-data-v-04b63336;animation-name:SpotLeg1Bottom-data-v-04b63336}.spot-leg2-top[data-v-04b63336]{width:118.5px;bottom:80px;left:-45px;transform-origin:100% 100%;transform:rotate(-14deg);z-index:1}.animated .spot-leg2-top[data-v-04b63336]{-webkit-animation-name:SpotLeg2Top-data-v-04b63336;animation-name:SpotLeg2Top-data-v-04b63336}.spot-leg2-bottom[data-v-04b63336]{width:142.5px;bottom:46px;left:-37px;transform-origin:0 0;transform:rotate(9deg);z-index:0}.animated .spot-leg2-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg2Bottom-data-v-04b63336;animation-name:SpotLeg2Bottom-data-v-04b63336}.spot-leg3-top[data-v-04b63336]{width:143px;bottom:80px;left:186px;transform-origin:100% 100%;transform:rotate(-17deg);z-index:0}.animated .spot-leg3-top[data-v-04b63336]{-webkit-animation-name:SpotLeg3Top-data-v-04b63336;animation-name:SpotLeg3Top-data-v-04b63336}.spot-leg3-bottom[data-v-04b63336]{width:142.5px;bottom:35px;left:188px;transform-origin:0 0;transform:rotate(9deg);z-index:1}.animated .spot-leg3-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg3Bottom-data-v-04b63336;animation-name:SpotLeg3Bottom-data-v-04b63336}.spot-leg4-top[data-v-04b63336]{width:158px;bottom:80px;left:166px;transform-origin:100% 100%;transform:rotate(-20deg);z-index:4}.animated .spot-leg4-top[data-v-04b63336]{-webkit-animation-name:SpotLeg4Top-data-v-04b63336;animation-name:SpotLeg4Top-data-v-04b63336}.spot-leg4-bottom[data-v-04b63336]{width:153.5px;bottom:28px;left:188px;transform-origin:0 0;transform:rotate(11deg);z-index:1}.animated .spot-leg4-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg4Bottom-data-v-04b63336;animation-name:SpotLeg4Bottom-data-v-04b63336}",""]),r.locals={},t.exports=r},625:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(554),c=Object(r.defineComponent)({setup:function(){return{robot:Object(o.a)()}}}),m=(n(611),n(25)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spot",class:{animated:"idle"!==t.robot.robotState}},[n("img",{staticClass:"spot-body",attrs:{src:"/spot/animated-pose-1/spot-body.png"}}),t._v(" "),n("img",{staticClass:"spot-leg1-top",attrs:{src:"/spot/animated-pose-1/spot-leg1-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg1-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg1-bottom.png"}}),t._v(" "),n("img",{staticClass:"spot-leg2-top",attrs:{src:"/spot/animated-pose-1/spot-leg2-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg2-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg2-bottom.png"}}),t._v(" "),n("img",{staticClass:"spot-leg3-top",attrs:{src:"/spot/animated-pose-1/spot-leg3-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg3-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg3-bottom.png"}}),t._v(" "),n("img",{staticClass:"spot-leg4-top",attrs:{src:"/spot/animated-pose-1/spot-leg4-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg4-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg4-bottom.png"}})])}),[],!1,null,"04b63336",null);e.default=component.exports}}]);