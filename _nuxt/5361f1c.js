(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{554:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"f",(function(){return w})),n.d(e,"i",(function(){return R})),n.d(e,"c",(function(){return _})),n.d(e,"e",(function(){return S})),n.d(e,"g",(function(){return k})),n.d(e,"h",(function(){return j})),n.d(e,"d",(function(){return O})),n.d(e,"a",(function(){return y}));var r,c,o=n(14),f=(n(56),n(76),n(47),n(64),n(570)),l=n(574),d=n.n(l),x=n(576),h=n(585),v=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new f.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new d.a(x.a)),t.next=6,r.run();case 6:return t.next=8,d.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,v();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return r=t.sent,c=r.launch.send(e,Object(h.a)(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return r=t.sent,c=r.api.tx.balances.transfer(e,n),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t,e){return"https://".concat(t,".subscan.io/extrinsic/").concat(e)},y=function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}},571:function(t,e){},572:function(t,e){},573:function(t,e){},852:function(t,e,n){"use strict";n.r(e);var r=n(14),c=(n(47),n(21),n(78),n(64),n(554)),o={name:"ControlPanel",data:function(){return{queueSize:null,robotState:null,lastSessionId:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:null,txStatus:null}}}},mounted:function(){this.doRobotStatePolling()},methods:{launchCps:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cps.launch.txInfo={tx:null},e.cps.launch.txStatus=null,n.next=4,Object(c.c)(e.cps.address,!0);case 4:if(r=n.sent,e.cps.status="wait_tx",!t){n.next=15;break}return n.next=9,Object(c.e)(e.cps.address,t);case 9:return o=n.sent,n.next=12,Object(c.h)([r,o]);case 12:e.cps.launch.txInfo=n.sent,n.next=18;break;case 15:return n.next=17,Object(c.g)(r);case 17:e.cps.launch.txInfo=n.sent;case 18:return e.cps.launch.txStatus="accepted",e.cps.status="activated",n.abrupt("return",!0);case 21:case"end":return n.stop()}}),n)})))()},addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})))()},doRobotStatePolling:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.updateRobotState();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Spot state unavailable, retrying");case 8:setTimeout(t.doRobotStatePolling,1e3);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}},f=n(28),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[n("p",[t._v("Queued: "+t._s(t.queueSize))]),t._v(" "),n("p",[t._v("Robot state: "+t._s(t.robotState))]),t._v(" "),t.lastSessionId&&"idle"===t.robotState?n("p",{staticClass:"text-purple-500"},[n("NuxtLink",{attrs:{to:"/records/"+t.lastSessionId}},[t._v("Last session: "+t._s(t.lastSessionId))])],1):t._e(),t._v(" "),n("ul",{staticStyle:{"list-style":"none",padding:"0"}},[n("li",[t._v("Robot status: "+t._s(t.cps.status))]),t._v(" "),t.cps.launch.txStatus?n("li",[t._v("\n        Transaction status: "+t._s(t.cps.launch.txStatus)+"\n      ")]):t._e(),t._v(" "),t.cps.launch.txInfo?n("li",[t._v("\n        View transaction:\n        "),n("a",{attrs:{href:"https://robonomics.subscan.io/extrinsic/"+t.cps.launch.txInfo.tx,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.cps.launch.txInfo.tx)))])]):t._e()])])])}),[],!1,null,"4f659bbc",null);e.default=component.exports}}]);