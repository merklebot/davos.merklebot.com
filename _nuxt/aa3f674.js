(window.webpackJsonp=window.webpackJsonp||[]).push([[35,18,40],{554:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(14),c=(n(21),n(64),n(95)),o=n(555),l=Object(c.c)("robot",{state:function(){return{robotToken:null,signedRobotToken:null,queueSize:null,robotState:null,lastSessionId:null,nftData:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null,recordData:null}}}},actions:{launchCps:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cps.launch.txInfo={tx:null},e.cps.launch.txStatus=null,n.next=4,Object(o.c)(e.cps.address,!0);case 4:if(r=n.sent,e.cps.status="wait_tx",!t){n.next=15;break}return n.next=9,Object(o.e)(e.cps.address,t);case 9:return c=n.sent,n.next=12,Object(o.h)([r,c]);case 12:e.cps.launch.txInfo=n.sent,n.next=18;break;case 15:return n.next=17,Object(o.g)(r);case 17:e.cps.launch.txInfo=n.sent;case 18:return e.cps.launch.txStatus="accepted",e.cps.status="activated",n.abrupt("return",e.cps.launch);case 21:case"end":return n.stop()}}),n)})))()},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),t.robotState=null,t.queueSize=null,t.lastSessionId=null,e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},setNftData:function(data){this.nftData=data},sendDrawing:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segments:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))},startInspection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/start_inspection",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({account:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))}}})},555:function(t,e,n){"use strict";n.d(e,"b",(function(){return k})),n.d(e,"f",(function(){return C})),n.d(e,"j",(function(){return _})),n.d(e,"c",(function(){return j})),n.d(e,"e",(function(){return y})),n.d(e,"i",(function(){return O})),n.d(e,"g",(function(){return R})),n.d(e,"h",(function(){return S})),n.d(e,"d",(function(){return I})),n.d(e,"a",(function(){return T}));var r,c,o=n(14),l=(n(58),n(76),n(47),n(64),n(571)),d=n(576),f=n.n(d),m=n(580),v=n(596),x=n(894),h=n(855),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.Robonomics({endpoint:"wss://robonomics.leemo.me"})).setAccountManager(new f.a(m.a)),t.next=6,r.run();case 6:return t.next=8,f.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,w();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,c=r.launch.send(e,Object(v.a)(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,c=r.api.tx.balances.transfer(e,n),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,t.next=5,Object(x.i)(r.accountManager.account.meta.source);case 5:if(c=t.sent,!(o=null==c||null===(n=c.signer)||void 0===n?void 0:n.signRaw)){t.next=13;break}return t.next=10,o({address:r.accountManager.account.address,data:Object(h.a)(e),type:"bytes"});case 10:return l=t.sent,d=l.signature,t.abrupt("return",d);case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(t,e){return"https://".concat(t,".subscan.io/extrinsic/").concat(e)},T=function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}},560:function(t,e,n){"use strict";n.r(e);var r={name:"CardContainer",props:{title:{type:String,required:!1}}},c=n(25),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"shadow-lg px-4 py-2 w-full bg-gray-600 relative"},[n("p",{staticClass:"text-lh w-max text-white font-semibold border-b border-gray-200"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,"7302cd96",null);e.default=component.exports},561:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return m})),n.d(e,"b",(function(){return h}));var r=n(14),c=(n(76),n(64),n(79)),o=n.n(c).a.create({baseURL:"https://api.merklebot.com"}),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,l,d,f,m,v,x,h,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sender,r=void 0===n?null:n,c=e.nonce,l=void 0===c?null:c,d=e.launchTxId,f=void 0===d?null:d,m=e.skip,v=void 0===m?0:m,x=e.limit,h=void 0===x?1e4:x,t.next=3,o.get("robonomics-launch-traces",{params:{sender:r,nonce:l,skip:v,limit:h,launch_tx_id:f}});case 3:return w=t.sent,t.abrupt("return",w.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return n=t.sent,t.abrupt("return",n.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("spot-demo/tickets",{params:{customer:e,spent:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,form){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("faucet/retrieve",{account:e,form:form});case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v={v1:{begin:0,end:Date.parse("2022-08-22 16:41:19 +0000")},v2:{begin:Date.parse("2022-08-22 16:41:19 +0000")+1,end:1/0}},x="https://merklebot.mypinata.cloud/ipfs",h=function(t){var e=t.ipfsCid,n=t.sender,r=t.nonce,c=t.createdAt,o=Date.parse(c+"+0000");switch(!0){case o>v.v1.begin&&o<v.v1.end:return"".concat(x,"/").concat(e)+"/spot/spot.merklebot.com/spot/traces"+"/user-".concat(n,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(r,"-").concat(c);case o>v.v2.begin&&o<v.v2.end:return"".concat(x,"/").concat(e)+"/user-".concat(n,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(r,"-").concat(c);default:console.error({msg:"can't identify version",createdAt:c,versionsTime:v})}}},572:function(t,e){},573:function(t,e){},574:function(t,e){},581:function(t,e,n){"use strict";n.r(e);var r=n(25),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"w-8 h-8 mr-2 animate-spin text-gray-600 fill-orange-600 inline",attrs:{role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),n("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})])}),[],!1,null,null,null);e.default=component.exports},640:function(t,e,n){"use strict";n.r(e);var r=n(14),c=(n(64),n(47),n(76),n(77),n(94)),o=n(554),l=n(561),d=n(555),f=n(581),m=Object(c.b)({components:{Spinner:f.default},setup:function(){var t=Object(o.a)(),e=Object(c.f)(null),n=Object(c.f)(null),f=Object(c.f)(null),m=Object(c.f)(null),v=Object(c.f)(null),x=function(){var c=Object(r.a)(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.cps.launch.txStatus){r.next=11;break}return r.prev=1,r.next=4,Object(l.c)({launchTxId:"".concat(t.cps.launch.txInfo.blockNumber,"-").concat(t.cps.launch.txInfo.txIndex)});case 4:c=r.sent,console.log(c),c&&(t.cps.launch.recordData=c,e.value=c,n.value={ipfsCid:c.ipfs_cid,sender:c.sender,nonce:c.nonce,createdAt:c.created_at},f.value=c.launch_tx_id,m.value=c.datalog_tx_id,v.value=c.crust_tx_id),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(1);case 11:setTimeout(x,1e3);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return c.apply(this,arguments)}}();return Object(c.d)((function(){x()})),{robot:t,launchData:e,traceInfo:n,launchTxId:f,datalogTxId:m,crustTxId:v,addressShort:function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""},makeSubscanLink:d.d,makeIpfsFolderLink:l.b}}}),v=m,x=n(25),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-4 min-h-200 p-2"},[n("div"),t._v(" "),n("div",{staticClass:"mt-4"},[n("CardContainer",{attrs:{title:"Saved data"}},[null!==t.launchData?n("div",[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Robonomics Launch Tx: "),n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.launchTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.launchTxId)))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Record data on IPFS: "),t.traceInfo.ipfsCid?n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeIpfsFolderLink(t.traceInfo),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.traceInfo.ipfsCid)))]):n("Spinner")],1),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Robonomics Datalog Tx: "),t.datalogTxId?n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.datalogTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.datalogTxId)))]):n("Spinner")],1),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Crust Storage Order Tx: "),t.crustTxId?n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("crust",t.crustTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.crustTxId)))]):n("Spinner")],1),t._v(" "),n("div",{staticClass:"flex items-left justify-left m-4"},[n("video",{attrs:{src:t.makeIpfsFolderLink(t.traceInfo)+"/h264_camera.mp4",type:"video/mp4",controls:""}})])]):n("div",[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Your launch data will appear here after processing drawing and saving all data\n        ")])])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:n(581).default,CardContainer:n(560).default})}}]);