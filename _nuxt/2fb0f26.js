(window.webpackJsonp=window.webpackJsonp||[]).push([[36,18],{554:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(14),c=(n(21),n(64),n(95)),o=n(555),l=Object(c.c)("robot",{state:function(){return{robotToken:null,signedRobotToken:null,queueSize:null,robotState:null,lastSessionId:null,nftData:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null,recordData:null}}}},actions:{launchCps:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cps.launch.txInfo={tx:null},e.cps.launch.txStatus=null,n.next=4,Object(o.c)(e.cps.address,!0);case 4:if(r=n.sent,e.cps.status="wait_tx",!t){n.next=15;break}return n.next=9,Object(o.e)(e.cps.address,t);case 9:return c=n.sent,n.next=12,Object(o.h)([r,c]);case 12:e.cps.launch.txInfo=n.sent,n.next=18;break;case 15:return n.next=17,Object(o.g)(r);case 17:e.cps.launch.txInfo=n.sent;case 18:return e.cps.launch.txStatus="accepted",e.cps.status="activated",n.abrupt("return",e.cps.launch);case 21:case"end":return n.stop()}}),n)})))()},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),t.robotState=null,t.queueSize=null,t.lastSessionId=null,e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},setNftData:function(data){this.nftData=data},sendDrawing:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segments:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))},startInspection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/start_inspection",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))}}})},555:function(t,e,n){"use strict";n.d(e,"b",(function(){return k})),n.d(e,"f",(function(){return j})),n.d(e,"j",(function(){return y})),n.d(e,"c",(function(){return R})),n.d(e,"e",(function(){return O})),n.d(e,"i",(function(){return _})),n.d(e,"g",(function(){return S})),n.d(e,"h",(function(){return C})),n.d(e,"d",(function(){return I})),n.d(e,"a",(function(){return M}));var r,c,o=n(14),l=(n(58),n(76),n(47),n(64),n(571)),f=n(576),d=n.n(f),x=n(580),h=n(596),m=n(894),v=n(855),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.Robonomics({endpoint:"wss://robonomics.leemo.me"})).setAccountManager(new d.a(x.a)),t.next=6,r.run();case 6:return t.next=8,d.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,w();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,c=r.launch.send(e,Object(h.a)(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,c=r.api.tx.balances.transfer(e,n),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,t.next=5,Object(m.i)(r.accountManager.account.meta.source);case 5:if(c=t.sent,!(o=null==c||null===(n=c.signer)||void 0===n?void 0:n.signRaw)){t.next=13;break}return t.next=10,o({address:r.accountManager.account.address,data:Object(v.a)(e),type:"bytes"});case 10:return l=t.sent,f=l.signature,t.abrupt("return",f);case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(t,e){return"https://".concat(t,".subscan.io/extrinsic/").concat(e)},M=function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}},560:function(t,e,n){"use strict";n.r(e);var r={name:"CardContainer",props:{title:{type:String,required:!1}}},c=n(25),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"shadow-lg px-4 py-2 w-full bg-gray-600 relative"},[n("p",{staticClass:"text-lh w-max text-white font-semibold border-b border-gray-200"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,"7302cd96",null);e.default=component.exports},572:function(t,e){},573:function(t,e){},574:function(t,e){},592:function(t,e,n){"use strict";n.r(e);var r=n(94),c=n(554),o=Object(r.b)({setup:function(){return{robot:Object(c.a)()}}}),l=n(25),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CardContainer",{attrs:{title:"Robot info"}},[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Robot state: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.robotState))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Tasks in queue: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.queueSize))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardContainer:n(560).default})}}]);