(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{374:function(t,e,n){"use strict";n.d(e,"b",(function(){return x})),n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return w})),n.d(e,"f",(function(){return R})),n.d(e,"c",(function(){return _})),n.d(e,"e",(function(){return k}));var r,c,o=n(15),f=(n(51),n(61),n(442)),l=n(503),d=n.n(l),h=n(507),v=n(355),x=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new f.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new d.a(h.a)),t.next=6,r.run();case 6:return t.next=8,d.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,x();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return r=t.sent,c=r.launch.send(e,Object(v.a)(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},446:function(t,e){},450:function(t,e){},458:function(t,e){},612:function(t,e,n){"use strict";n.r(e);var r=n(15),c=(n(50),n(22),n(73),n(61),n(374)),o={name:"ControlPanel",data:function(){return{queueSize:null,robotState:null,selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null},cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:null,txStatus:null}}}},mounted:function(){this.doRobotStatePolling()},methods:{launchCps:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.c)(t.cps.address,!0);case 2:return n=e.sent,t.cps.status="wait_tx",e.next=6,Object(c.e)(n);case 6:t.cps.launch.txInfo=e.sent,t.cps.launch.txStatus="accepted",t.cps.status="activated";case 9:case"end":return e.stop()}}),e)})))()},addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://10.200.0.3:1234/current_state",{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})))()},doRobotStatePolling:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateRobotState();case 2:setTimeout(t.doRobotStatePolling,1e3);case 3:case"end":return e.stop()}}),e)})))()}}},f=n(60),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[n("p",[t._v("Queued: "+t._s(t.queueSize))]),t._v(" "),n("p",[t._v("Robot state: "+t._s(t.robotState))]),t._v(" "),n("button",{attrs:{disabled:!1},on:{click:t.launchCps}},[t._v("\n      Launch\n    ")]),t._v(" "),n("ul",{staticStyle:{"list-style":"none",padding:"0"}},[n("li",[t._v("Robot status: "+t._s(t.cps.status))]),t._v(" "),t.cps.launch.txStatus?n("li",[t._v("\n        Transaction status: "+t._s(t.cps.launch.txStatus)+"\n      ")]):t._e(),t._v(" "),t.cps.launch.txInfo?n("li",[t._v("\n        View transaction:\n        "),n("a",{attrs:{href:"https://robonomics.subscan.io/extrinsic/"+t.cps.launch.txInfo.tx,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.cps.launch.txInfo.tx)))])]):t._e()])])])}),[],!1,null,"479e6dd3",null);e.default=component.exports}}]);