(window.webpackJsonp=window.webpackJsonp||[]).push([[51,10],{554:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(14),c=(n(21),n(64),n(95)),o=n(584),f=n.n(o),d=n(555),l=Object(c.c)("robot",{state:function(){return{robotToken:null,signedRobotToken:null,queueSize:null,robotState:null,lastSessionId:null,nftData:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null,recordData:null}}}},actions:{launchCps:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var c,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.cps.launch.txInfo={tx:null},n.cps.launch.txStatus=null,r.next=4,f.a.of(JSON.stringify(e));case 4:return c=r.sent,r.next=7,Object(d.c)(n.cps.address,c);case 7:if(o=r.sent,n.cps.status="wait_tx",!t){r.next=18;break}return r.next=12,Object(d.e)(n.cps.address,t);case 12:return l=r.sent,r.next=15,Object(d.h)([o,l]);case 15:n.cps.launch.txInfo=r.sent,r.next=21;break;case 18:return r.next=20,Object(d.g)(o);case 20:n.cps.launch.txInfo=r.sent;case 21:return n.cps.launch.txStatus="accepted",n.cps.status="activated",r.abrupt("return",n.cps.launch);case 24:case"end":return r.stop()}}),r)})))()},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),t.robotState=null,t.queueSize=null,t.lastSessionId=null,e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},setNftData:function(data){this.nftData=data},sendDrawing:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ticket",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,segments:e,payment_mode:n,tx_id:r})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))},startInspection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/start_inspection",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))}}})},555:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"f",(function(){return y})),n.d(e,"j",(function(){return k})),n.d(e,"c",(function(){return R})),n.d(e,"e",(function(){return j})),n.d(e,"i",(function(){return O})),n.d(e,"g",(function(){return _})),n.d(e,"h",(function(){return A})),n.d(e,"d",(function(){return S})),n.d(e,"a",(function(){return C}));var r,c,o=n(14),f=(n(58),n(76),n(47),n(64),n(579)),d=n(576),l=n.n(d),v=n(578),m=n(917),h=n(862),x=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new f.a({endpoint:"wss://kusama.rpc.robonomics.network"})).setAccountManager(new l.a(v.a)),t.next=6,r.run();case 6:return t.next=8,l.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,x();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return r=t.sent,c=r.launch.send(e,f.b.cidToHex(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return r=t.sent,c=r.api.tx.balances.transfer(e,n),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o,f,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return r=t.sent,t.next=5,Object(m.i)(r.accountManager.account.meta.source);case 5:if(c=t.sent,!(o=null==c||null===(n=c.signer)||void 0===n?void 0:n.signRaw)){t.next=13;break}return t.next=10,o({address:r.accountManager.account.address,data:Object(h.a)(e),type:"bytes"});case 10:return f=t.sent,d=f.signature,t.abrupt("return",d);case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(t,e){return"https://".concat(t,".subscan.io/extrinsic/").concat(e)},C=function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}},556:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(14),c=(n(64),n(566),n(21),n(567),n(568),n(95)),o=n(557),f=n(555),d=Object(c.c)("wallet",{state:function(){return{accounts:[],walletConnectionStatus:"wait",selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null,tickets:[]}}},actions:{connectWallet:function(){var t=this;Object(f.b)().then((function(e){console.log("accounts",e),t.accounts=e;var n=localStorage.getItem("selectedAccountAddress"),r=e.find((function(a){return a.address===n}));t.setActiveAccount(null!=r?r:e[0]),t.walletConnectionStatus="connected"})).catch((function(e){t.walletConnectionStatus="error"}))},updateTicketsList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.selectedAccount.account){e.next=4;break}return e.next=3,Object(o.e)(t.selectedAccount.account.address);case 3:t.selectedAccount.tickets=e.sent;case 4:case"end":return e.stop()}}),e)})))()},setActiveAccount:function(t){var e=this;this.selectedAccount.account=t,Object(f.f)(t.address),localStorage.setItem("selectedAccountAddress",t.address),Object(f.j)(this.selectedAccount.account.address,(function(t){var n=t.free,r=t.feeFrozen,c=n.sub(r);e.selectedAccount.balanceRaw=c,e.selectedAccount.balanceFormatted=(c*Math.pow(10,-9)).toFixed(4)+" XRT"}))}}})},557:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return v})),n.d(e,"f",(function(){return m})),n.d(e,"c",(function(){return w}));var r=n(14),c=(n(76),n(64),n(79)),o=n.n(c).a.create({baseURL:"https://api.merklebot.com"}),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,f,d,l,v,m,h,x,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sender,r=void 0===n?null:n,c=e.nonce,f=void 0===c?null:c,d=e.launchTxId,l=void 0===d?null:d,v=e.skip,m=void 0===v?0:v,h=e.limit,x=void 0===h?1e4:h,t.next=3,o.get("robonomics-launch-traces",{params:{sender:r,nonce:f,skip:m,limit:x,launch_tx_id:l}});case 3:return w=t.sent,t.abrupt("return",w.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("filecoin-finder/providers/"+e,{});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return n=t.sent,t.abrupt("return",n.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("spot-demo/tickets",{params:{customer:e,spent:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,form){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("faucet/retrieve",{account:e,form:form});case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h={v1:{begin:0,end:Date.parse("2022-08-22 16:41:19 +0000")},v2:{begin:Date.parse("2022-08-22 16:41:19 +0000")+1,end:1/0}},x="https://merklebot.mypinata.cloud/ipfs",w=function(t){var e=t.ipfsCid,n=t.sender,r=t.nonce,c=t.createdAt,o=Date.parse(c+"+0000");switch(!0){case o>h.v1.begin&&o<h.v1.end:return"".concat(x,"/").concat(e)+"/spot/spot.merklebot.com/spot/traces"+"/user-".concat(n,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(r,"-").concat(c);case o>h.v2.begin&&o<h.v2.end:return"".concat(x,"/").concat(e)+"/user-".concat(n,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(r,"-").concat(c);default:console.error({msg:"can't identify version",createdAt:c,versionsTime:h})}}},562:function(t,e,n){var r=n(8),c=n(33),o=n(20),f=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var l=o(c(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(o(r),f,"&quot;")+'"'),v+">"+l+"</"+e+">"}},563:function(t,e,n){var r=n(9);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},564:function(t,e,n){var r=n(8);t.exports=r(1..valueOf)},566:function(t,e,n){"use strict";var r=n(1),c=n(77).find,o=n(160),f="find",d=!0;f in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(f)},567:function(t,e,n){"use strict";var r=n(1),c=n(562);r({target:"String",proto:!0,forced:n(563)("sub")},{sub:function(){return c(this,"sub","","")}})},568:function(t,e,n){"use strict";var r=n(1),c=n(3),o=n(8),f=n(65),d=n(564),l=n(223),v=n(9),m=c.RangeError,h=c.String,x=Math.floor,w=o(l),y=o("".slice),k=o(1..toFixed),R=function(t,e,n){return 0===e?n:e%2==1?R(t,e-1,n*t):R(t*t,e/2,n)},j=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=x(r/1e7)},O=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=x(n/t),n=n%t*1e7},_=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+w("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==k(8e-5,3)||"1"!==k(.9,0)||"1.25"!==k(1.255,2)||"1000000000000000128"!==k(0xde0b6b3a7640080,0)}))||!v((function(){k({})}))},{toFixed:function(t){var e,n,r,c,o=d(this),l=f(t),data=[0,0,0,0,0,0],v="",x="0";if(l<0||l>20)throw m("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return h(o);if(o<0&&(v="-",o=-o),o>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(o*R(2,69,1))-69)<0?o*R(2,-e,1):o/R(2,e,1),n*=4503599627370496,(e=52-e)>0){for(j(data,0,n),r=l;r>=7;)j(data,1e7,0),r-=7;for(j(data,R(10,r,1),0),r=e-1;r>=23;)O(data,1<<23),r-=23;O(data,1<<r),j(data,1,1),O(data,2),x=_(data)}else j(data,0,n),j(data,1<<-e,0),x=_(data)+w("0",l);return x=l>0?v+((c=x.length)<=l?"0."+w("0",l-c)+x:y(x,0,c-l)+"."+y(x,c-l)):v+x}})},573:function(t,e){},575:function(t,e){},577:function(t,e){},602:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l}));var r=n(14),c=(n(64),n(79)),o=n.n(c).a.create({baseURL:"https://api.merklebot.com/strelka"}),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("start_calibration",{account:e,signed_token:n});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("command",{account:e,signed_token:n,action:"move",value:r});case 2:return c=t.sent,t.abrupt("return",c);case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("command",{account:e,signed_token:n,action:"pose",value:r});case 2:return c=t.sent,t.abrupt("return",c);case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},715:function(t,e,n){"use strict";n.r(e);var r=n(14),c=(n(64),n(0)),o=n(602),f=n(554),d=n(556),l=Object(c.defineComponent)({setup:function(){var t=Object(d.a)(),e=Object(f.a)(),n=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.b)(t.selectedAccount.account.address,e.signedRobotToken,r);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(c.onMounted)((function(){document.addEventListener("keydown",(function(t){var e=t.key;"w"===e?n({x:.45,y:0,r:0}):"a"===e?n({x:0,y:.4,r:0}):"s"===e?n({x:-.4,y:0,r:0}):"d"===e?n({x:0,y:-.4,r:0}):"q"===e?n({x:0,y:0,r:.4}):"e"===e&&n({x:0,y:0,r:-.4})}),!1)})),{moveCommand:n}}}),v=l,m=n(25),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-3 gap-x-4"},[n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:1,y:0})}}},[t._v("\n    Up\n  ")]),t._v(" "),n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:-1})}}},[t._v("\n    Left\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:-1,y:0})}}},[t._v("\n    Down\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:1})}}},[t._v("\n    Right\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);