(window.webpackJsonp=window.webpackJsonp||[]).push([[21,4,5,9,12,14],{552:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return x})),n.d(e,"e",(function(){return w})),n.d(e,"h",(function(){return y})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return _})),n.d(e,"f",(function(){return C})),n.d(e,"g",(function(){return j}));var r,o,c=n(14),l=(n(55),n(63),n(565)),d=n(574),m=n.n(d),h=n(575),f=n(571),v=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new l.Robonomics({endpoint:"wss://kusama.rpc.robonomics.network/"})).setAccountManager(new m.a(h.a)),t.next=6,r.run();case 6:return t.next=8,m.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o&&o(),t.next=3,v();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:o=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return r=t.sent,o=r.launch.send(e,Object(f.a)(n)),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return r=t.sent,o=r.api.balances.transfer(e,n),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),C=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return o=t.sent,t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},555:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return m}));var r=n(14),o=(n(63),n(77)),c=n.n(o).a.create({baseURL:"https://api.merklebot.com"}),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l,d,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sender,r=void 0===n?null:n,o=e.nonce,l=void 0===o?null:o,d=e.launchTxId,m=void 0===d?null:d,t.next=3,c.get("robonomics-launch-traces",{params:{sender:r,nonce:l,launch_tx_id:m}});case 3:return h=t.sent,t.abrupt("return",h.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return n=t.sent,t.abrupt("return",n.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("spot-demo/tickets",{params:{customer:e,spent:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},557:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(559);var r=n(94),o=n(799),c=n(555),l=n(552),d=Object(r.c)("wallet",{state:function(){return{accounts:[],walletConnectionStatus:"wait",selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null,tickets:[]}}},actions:{connectWallet:function(){var t=this;Object(l.a)().then((function(e){console.log("accounts",e),t.accounts=e,t.setActiveAccount(e[0]),t.walletConnectionStatus="connected"})).catch((function(e){t.walletConnectionStatus="error"}))},setActiveAccount:function(t){var e=this;this.selectedAccount.account=t,Object(l.e)(t.address),Object(l.h)(this.selectedAccount.account.address,(function(n){Object(l.b)().then((function(r){var l=n.free.sub(n.feeFrozen);e.selectedAccount.balanceRaw=l,0===l&&(e.selectedAccount.balanceFormatted="0 XRT"),e.selectedAccount.balanceFormatted=Object(o.a)(l,{decimals:r.api.registry.chainDecimals[0],withUnit:r.api.registry.chainTokens[0]}),Object(c.c)(t.address).then((function(t){e.selectedAccount.tickets=t}))}))}))}}})},559:function(t,e,n){"use strict";var r=n(1),o=n(560);r({target:"String",proto:!0,forced:n(561)("sub")},{sub:function(){return o(this,"sub","","")}})},560:function(t,e,n){var r=n(9),o=n(32),c=n(20),l=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var m=c(o(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+d(c(r),l,"&quot;")+'"'),h+">"+m+"</"+e+">"}},561:function(t,e,n){var r=n(8);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},567:function(t,e){},570:function(t,e){},572:function(t,e){},576:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(14),o=(n(21),n(63),n(94)),c=n(552),l=Object(o.c)("robot",{state:function(){return{queueSize:null,robotState:null,lastSessionId:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:{tx:null},txStatus:null}}}},actions:{launchCps:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cps.launch.txInfo={tx:null},e.cps.launch.txStatus=null,n.next=4,Object(c.c)(e.cps.address,!0);case 4:if(r=n.sent,e.cps.status="wait_tx",!t){n.next=15;break}return n.next=9,Object(c.d)(e.cps.address,t);case 9:return o=n.sent,n.next=12,Object(c.g)([r,o]);case 12:e.cps.launch.txInfo=n.sent,n.next=18;break;case 15:return n.next=17,Object(c.f)(r);case 17:e.cps.launch.txInfo=n.sent;case 18:return e.cps.launch.txStatus="accepted",e.cps.status="activated",n.abrupt("return",e.cps.launch);case 21:case"end":return n.stop()}}),n)})))()},updateRobotState:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,t.robotState=r.robot_state,t.queueSize=r.queue_size,t.lastSessionId=r.last_session_id,e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(0),t.robotState=null,t.queueSize=null,t.lastSessionId=null,e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},sendDrawing:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ticket",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";fetch("https://api.merklebot.com/strelka/draw_figure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({segments:t,payment_mode:e,tx_id:n})}).then((function(t){return t.json()})).then((function(data){console.log(data)}))}}})},586:function(t,e,n){var content=n(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("06c608b5",content,!0,{sourceMap:!1})},587:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(94),o=Object(r.c)("dashboardParameters",{state:function(){return{codeSampleParameter:!1}},actions:{setCodeSampleParameter:function(t){this.codeSampleParameter=t}}})},588:function(t,e,n){var content=n(622);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("172c2846",content,!0,{sourceMap:!1})},589:function(t,e,n){"use strict";n.r(e);n(46);var r=n(93),o=n(557),c=Object(r.b)({setup:function(){var t=Object(o.a)(),e=Object(r.f)(!1);Object(r.d)((function(){t.connectWallet()}));return{showAccountChoose:e,selectAccount:function(e){t.setActiveAccount(e)},addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)},wallet:t}}}),l=n(27),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative p-1 flex items-center w-full space-x-4 justify-end"},[n("div",{staticClass:"w-128"},[t.wallet.selectedAccount.account?n("div",{staticClass:"mt-1 relative"},[n("button",{staticClass:"relative w-full bg-white dark:bg-gray-600 dark:text-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-white sm:text-sm",attrs:{type:"button"},on:{click:function(){return t.showAccountChoose=!t.showAccountChoose}}},[n("span",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+t.wallet.selectedAccount.account.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block truncate"},[t._v("\n              "+t._s(t.wallet.selectedAccount.account.meta.name)+" - ("+t._s(t.wallet.selectedAccount.balanceFormatted)+") - "+t._s(t.addressShort(t.wallet.selectedAccount.account.address))+"\n            ")])]),t._v(" "),n("span",{staticClass:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},[n("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccountChoose,expression:"showAccountChoose"}],staticClass:"absolute mt-1 w-full z-10 rounded-md bg-white dark:bg-gray-600 shadow-lg"},[n("ul",{staticClass:"max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",attrs:{tabindex:"-1",role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-item-3"}},t._l(t.wallet.accounts,(function(e,r){return n("li",{key:r,staticClass:"text-gray-900 dark:text-white  cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9",attrs:{id:"listbox-item-0",value:e,role:"option"},on:{click:function(){t.selectAccount(e),t.showAccountChoose=!1}}},[n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+e.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block font-normal truncate"},[t._v("\n                  "+t._s(e.meta.name)+" - "+t._s(t.addressShort(e.address))+"\n                ")])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.wallet.selectedAccount.account.address===e.address,expression:"wallet.selectedAccount.account.address===account.address"}],staticClass:"absolute inset-y-0 right-0 flex items-center pr-4"},[n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])])])})),0)])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},619:function(t,e,n){"use strict";n(586)},620:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"div.clickEffect{position:fixed;box-sizing:border-box;border-style:solid;border-color:#8ed080;border-radius:50%;-webkit-animation:clickEffect .4s ease-out;animation:clickEffect .4s ease-out;z-index:99999}@-webkit-keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}@keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}",""]),r.locals={},t.exports=r},621:function(t,e,n){"use strict";n(588)},622:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,".canvas-style[data-v-650fd452]{cursor:crosshair;width:100%!important;height:300px!important;border:2px solid #000;border-radius:0;display:block;margin:auto}",""]),r.locals={},t.exports=r},658:function(t,e,n){"use strict";n.r(e);n(21);var r={name:"CameraFrame",props:["interactionMode"],data:function(){return{pointers:[],calibrationNodes:[],calibrationProcess:!1,curCalibrationNodeIndex:0,imageLoaded:!0}},methods:{startCalibration:function(){alert("Start calibration"),this.calibrationProcess=!0,this.calibrationNodes=[],this.curCalibrationNodeIndex=0},onClickImage:function(t){if("movement"===this.interactionMode){var e=Math.floor(t.offsetX*(1280/this.$refs.image.width)),n=Math.floor(t.offsetY*(720/this.$refs.image.height));if(console.log(e,n),this.pointers.push([t.clientX,t.clientY]),this.calibrationProcess){var r={robot_x:0,robot_y:0,camera_x:0,camera_y:0};fetch("https://api.merklebot.com/strelka/odom",{method:"GET"}).then((function(t){return t.json()})).then((function(data){r.robot_x=data.position.x,r.robot_y=data.position.y})),r.camera_x=e,r.camera_y=n,this.calibrationNodes.push(r),this.curCalibrationNodeIndex+=1,this.curCalibrationNodeIndex>=16&&(this.calibrationProcess=!1,fetch("https://api.merklebot.com/strelka/set_movement_calibration_nodes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){})),alert("Calibration finished"))}else fetch("https://api.merklebot.com/strelka/go_to_point",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_point_coords:[e,n],calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){}))}},onImageError:function(){this.imageLoaded=!1,console.log("camera image error")}}},o=(n(619),n(27)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[t.imageLoaded?n("img",{ref:"image",staticClass:"w-full",staticStyle:{display:"block","-webkit-user-select":"none",margin:"auto","background-color":"hsl(0, 0%, 25%)"},style:"drawing"===t.interactionMode?{"aspect-ratio":"4/3","object-fit":"cover"}:{},attrs:{src:"https://api.merklebot.com/videoserver/video"},on:{click:t.onClickImage,error:t.onImageError}}):t._e(),t._v(" "),t.imageLoaded?t._e():n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n    Camera isn't loaded\n  ")]),t._v(" "),t._l(t.pointers,(function(t,e){return n("div",{key:e,staticClass:"clickEffect",style:{left:t[0]+"px",top:t[1]+"px"}})})),t._v(" "),"movement"===t.interactionMode?n("div",{on:{click:t.startCalibration}},[t._v("\n    Calibrate\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},659:function(t,e,n){"use strict";n.r(e);var r=n(30),o=n(14),c=(n(63),n(21),n(42),n(75),n(48),n(36),n(47),n(64),n(65),n(93)),l=n(587),d=n(576);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h=n(728),f=Object(c.b)({props:["canvasId"],emits:["drawing_sent"],setup:function(t,e){e.emit;var n=Object(d.a)(),path=null,f=null,v=[],x=Object(l.a)();Object(c.d)((function(){(f=new h.PaperScope).setup(t.canvasId)}));var w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],console.log("Sending command"),console.log(v),v.forEach((function(path){var t=[];console.log(path._segments),path._segments.forEach((function(e){t.push([e.point.x,e.point.y])})),r.push(t)})),console.log(r),x.setCodeSampleParameter(!0),t.next=8,n.launchCps(e);case 8:o=t.sent,c=e?"xrt":"ticket",o&&n.sendDrawing(r,c,"".concat(o.txInfo.blockNumber,"-").concat(o.txInfo.txIndex));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(1*Math.pow(10,9));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{mouseDown:function(t){console.log("mouse down");var e=function(t){return console.log("createTool"),t.activate(),new h.Tool}(f);e.onMouseDown=function(t){path=function(t){return t.activate(),new h.Path({strokeColor:"#000000",strokeJoin:"round",strokeWidth:1.5})}(f),path.add(t.point)},e.onMouseDrag=function(t){console.log("mouse drag"),path.add(t)},e.onMouseUp=function(t){console.log("mouse up"),path.add(t.point),path.simplify(10),path.flatten(3),v.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},path)),console.log(v)}},resetCanvas:function(){x.setCodeSampleParameter(!1),f.project.activeLayer.removeChildren(),v=[]},sendCommandXrt:y,sendCommandTicket:k}}}),v=f,x=(n(621),n(27)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-full mb-8"},[n("canvas",{staticClass:"canvas-style",attrs:{id:t.canvasId},on:{mousedown:t.mouseDown}})]),t._v(" "),n("div",{},[n("button",{staticClass:" uppercase py-2 my-2 px-4  bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md",attrs:{type:"button"},on:{click:t.resetCanvas}},[t._v("\n      Clear canvas\n    ")]),t._v(" "),n("button",{staticClass:" uppercase py-2 my-2 px-4  bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md",attrs:{type:"button"},on:{click:t.sendCommandXrt}},[t._v("\n      Send command spending 1 XRT\n    ")]),t._v(" "),n("button",{staticClass:" uppercase py-2 my-2 px-4  bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md",attrs:{type:"button"},on:{click:t.sendCommandTicket}},[t._v("\n      Send command spending 1 ticket\n    ")])])])}),[],!1,null,"650fd452",null);e.default=component.exports},729:function(t,e){},730:function(t,e){},829:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(47),n(21),n(63),n(93)),c=n(557),l=n(555),d="https://js.stripe.com/v3",m=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,h="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",f=null,v=function(t){return null!==f||(f=new Promise((function(e,n){if("undefined"!=typeof window)if(window.Stripe&&t&&console.warn(h),window.Stripe)e(window.Stripe);else try{var script=function(){for(var t=document.querySelectorAll('script[src^="'.concat(d,'"]')),i=0;i<t.length;i++){var script=t[i];if(m.test(script.src))return script}return null}();script&&t?console.warn(h):script||(script=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",script=document.createElement("script");script.src="".concat(d).concat(e);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(script),script}(t)),script.addEventListener("load",(function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))})),script.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(t){return void n(t)}else e(null)}))),f},x=function(t,e,n){if(null===t)return null;var r=t.apply(void 0,e);return function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.31.0",startTime:e})}(r,n),r},w=Promise.resolve().then((function(){return v(null)})),y=!1;w.catch((function(t){y||console.warn(t)}));var k,_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];y=!0;var r=Date.now();return w.then((function(t){return x(t,e,r)}))},C=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!k){t.next=2;break}return t.abrupt("return",k);case 2:return t.next=4,_("pk_live_51IvSZKJXrK78CsUSfSb5Jyjo3AkjZ2k6ZMr0c8miMMIcWcQiBKtCapD5ho2Bk45MjMh3QTlpLamkrOiG9gMJzMh100iGhW3ehO");case 4:return k=t.sent,t.abrupt("return",k);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=Object(o.b)({setup:function(){var t=Object(c.a)(),e=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)(t.selectedAccount.account.address);case 2:return n=e.sent,e.next=5,C();case 5:return r=e.sent,e.next=8,r.redirectToCheckout({sessionId:n});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=Object(o.a)((function(){return t.selectedAccount.balanceRaw*Math.pow(10,-9)>1})),d=Object(o.a)((function(){return t.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length>=1}));return{wallet:t,checkout:e,hasEnoughXrt:n,hasTicket:d}}}),O=j,S=n(27),component=Object(S.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n      One launch requires 1 ticket or 1 XRT.\n    ")]),t._v(" "),n("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n      You have:\n    ")]),t._v(" "),n("ul",{staticClass:"list-disc ml-8 text-md my-2 dark:text-white mx-6"},[n("li",[t._v(t._s(t.wallet.selectedAccount.balanceFormatted))]),t._v(" "),n("li",[t._v(t._s(t.wallet.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length)+" tickets")])]),t._v(" "),t.hasTicket||t.hasEnoughXrt?n("span",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n      It is enough to launch the robot by\n      "),t.hasTicket?n("span",[t._v(" ticket")]):t._e(),t._v(" "),t.hasTicket&&t.hasEnoughXrt?n("span",[t._v(" or")]):t._e(),t._v(" "),t.hasEnoughXrt?n("span",[t._v(" XRT")]):t._e(),t._v(".\n    ")]):n("span",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n      It is not enough to launch the robot. Purchase a ticket "),n("em",[t._v("or")]),t._v(" get XRT.\n    ")])]),t._v(" "),n("div",[n("button",{staticClass:"h-12 w-96 py-2 px-4 my-4 items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg",attrs:{type:"button"},on:{click:t.checkout}},[n("span",[t._v("Purchase a ticket for 5 USD")]),t._v(" "),n("img",{staticClass:"h-6 ml-2 inline-block bg-purple-600 rounded-lg",attrs:{src:"stripe.svg"}})])])])}),[],!1,null,"5044dc30",null);e.default=component.exports},831:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(63),n(46),n(75),n(76),n(93)),c=n(576),l=n(555),d=Object(o.b)({setup:function(){var t=Object(c.a)(),e=Object(o.f)(null),n=Object(o.f)(null),d=Object(o.f)(null),m=Object(o.f)(null),h=function(){var o=Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.cps.launch.txStatus){r.next=11;break}return r.prev=1,r.next=4,Object(l.b)({launchTxId:"".concat(t.cps.launch.txInfo.blockNumber,"-").concat(t.cps.launch.txInfo.txIndex)});case 4:o=r.sent,console.log(o),o&&(e.value=o,n.value="https://merklebot.mypinata.cloud/ipfs/".concat(o.ipfs_cid,"/spot/davos.merklebot.com/spot/traces/user-").concat(o.sender,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(o.nonce,"-").concat(o.created_at),d.value="https://robonomics.subscan.io/extrinsic/".concat(o.launch_tx_id),m.value="https://robonomics.subscan.io/extrinsic/".concat(o.datalog_tx_id)),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(1);case 11:setTimeout(h,1e3);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return o.apply(this,arguments)}}();return Object(o.d)((function(){h()})),{robot:t,launchData:e,traceFolderLink:n,launchLink:d,datalogLink:m,addressShort:function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}}}}),m=d,h=n(27),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800  dark:border-white m-4 mt-12 min-h-200"},[n("h2",{staticClass:"max-w-xl text-2xl md:text-3xl font-bold mx-auto dark:text-white text-gray-800 py-2"},[t._v("\n    4. See your launch data\n  ")]),t._v(" "),n("div",[n("p",{staticClass:"text-xl mt-2 dark:text-white mx-6"},[t._v("\n      Robot state: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.robotState))])]),t._v(" "),n("p",{staticClass:"text-xl mt-2 dark:text-white mx-6"},[t._v("\n      Robot status: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.cps.status))])]),t._v(" "),n("p",{staticClass:"text-xl mt-2 dark:text-white mx-6"},[t._v("\n      Transaction status: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.cps.launch.txStatus))])]),t._v(" "),n("p",{staticClass:"text-xl mt-2 dark:text-white mx-6"},[t._v("\n      View transaction: "),n("a",{staticClass:"text-yellow-500",attrs:{href:"https://robonomics.subscan.io/extrinsic/"+t.robot.cps.launch.txInfo.tx,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.robot.cps.launch.txInfo.tx)))])])]),t._v(" "),null!==t.launchData?n("div",[n("p",{staticClass:"text-md mt-2 dark:text-white mx-6"},[t._v("\n      IPFS Content ID: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.launchData.ipfs_cid))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 dark:text-white mx-6"},[t._v("\n      View Robonomics Launch Tx: "),n("a",{staticClass:"text-yellow-500",attrs:{href:t.datalogLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.launchLink))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 dark:text-white mx-6"},[t._v("\n      View record data on IPFS: "),n("a",{staticClass:"text-yellow-500",attrs:{href:t.traceFolderLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.traceFolderLink.slice(0,50)+"..."))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 dark:text-white mx-6"},[t._v("\n      View Robonomics Datalog Tx:"),n("a",{staticClass:"text-yellow-500",attrs:{href:t.datalogLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.datalogLink.slice(0,50)+"..."))])]),t._v(" "),n("div",{staticClass:"flex items-left justify-left m-4"},[n("video",{attrs:{src:t.traceFolderLink+"/h264_camera.mp4",type:"video/mp4",controls:""}})]),t._v(" "),n("div")]):n("div",[n("p",{staticClass:"text-md mt-2 dark:text-white mx-6 my-4"},[t._v("\n      Your launch data will appear here after processing drawing and saving all data\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},951:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(63),n(76),n(93)),c=n(576),l=n(557),d=Object(o.b)({setup:function(){var t=Object(c.a)(),e=Object(l.a)(),n=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.updateRobotState();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Spot state unavailable, retrying");case 8:setTimeout(n,1e3);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(o.d)((function(){n()})),{robot:t,wallet:e}}}),m=d,h=n(27),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"dark:bg-gray-800 font-mono bg-white overflow-hidden "},[n("div",{staticClass:"z-20 container mx-auto flex flex-row"},[n("div",{staticClass:"basis-5/12"},[n("div",{staticClass:"px-6 flex flex-col justify-between items-center py-4 "},[t.robot.robotState?n("div",{staticClass:"flex flex-col"},[n("p",{staticClass:"text-3xl my-6 text-center dark:text-white"},[t._v("\n            Hi, I’m Spot 🦾🐶\n          ")]),t._v(" "),n("div",[n("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.robot.robotState?t._e():n("div",{staticClass:"flex flex-col"},[n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n            Spot is currently unavailable\n          ")]),t._v(" "),n("div",{staticClass:"h-1/3"},[n("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1)])])]),t._v(" "),n("div",{staticClass:"basis-7/12"},[n("div",{staticClass:"overflow-y-auto h-screen"},[n("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800  dark:border-white m-4 mt-12"},[n("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-8 dark:text-white text-gray-800 mt-4"},[t._v("\n            User Ownership of Data\n          ")]),t._v(" "),n("p",{staticClass:"text-md my-1 dark:text-white mx-6"},[t._v("\n            To power this demo we integrated Boston Dynamics SDK, just like we did with other major robotics manufacturers like Mitsubishi Electric and Universal Robots. And we also support Robot Operating System - dominant framework for robotics development today. Robots are ready to use Web3.\n          ")]),t._v(" "),n("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            Identity and access rights are managed using the cryptographic key from your Web3 wallet. This way we make sure that you own the data generated during your interaction with the robot. And for enterprise cases we cryptographically verify the whole chain of custody for machine data within and accross organizations.\n          ")]),t._v(" "),n("div",{staticClass:"flex items-center justify-center my-4"},[n("AccountChooser"),t._v(" "),"error"===t.wallet.walletConnectionStatus?n("div",[t._m(2)]):t._e()],1),t._v(" "),n("div")]),t._v(" "),n("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800  dark:border-white m-4 mt-12"},[n("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-8 dark:text-white text-gray-800 mt-4"},[t._v("\n            Robots Transfer Value\n          ")]),t._v(" "),n("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            Billing for robot’s work can happen in both US dollars and cryptocurrencies - money for robots. While robots today can already navigate our complex world, perform inspections and even interact with people - they still couldn’t participate in our economy directly. From fun demos like this one to data-driven equipment leasing: now robots can transact in fully autonomous supply chains.\n          ")]),t._v(" "),n("div",{staticClass:"flex mt-4 mx-6"},[n("PurchaseTicket")],1),t._v(" "),n("div")]),t._v(" "),n("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800  dark:border-white m-4 mt-12"},[n("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-8 dark:text-white text-gray-800 mt-4"},[t._v("\n            Secure Access to Machines\n          ")]),t._v(" "),n("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            Teleoperation session is authorized by the key in your wallet and the data can be encrypted with it too. You will now send a transaction directly to the robot and it will be recorded in Robonomics blockchain within Polkadot ecosystem. This way technical command and value transfer are tied together and verified to ensure resiliency of large scale cyber-physical systems.\n          ")]),t._v(" "),n("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            Now you can collaborate with Spot, draw anything in the box and ask her to repeat it:\n          ")]),t._v(" "),n("div",{staticClass:"flex items-center justify-center mt-4"},[n("DrawingPanel",{attrs:{"canvas-id":"canvas-one"}})],1),t._v(" "),n("div")]),t._v(" "),n("ResultingRecordCard"),t._v(" "),t._m(3)],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-2xl my-6 text-center dark:text-white"},[t._v("\n            And we are a team of builders who share the vision of\n            "),n("br"),t._v(" "),n("span",{staticClass:"text-orange-600 font-bold"},[t._v("machine economy with no single point of failure.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-2xl mt-2 text-center dark:text-white"},[t._v("\n            With this demo we aim to demonstrate the benefits of using Web3 software stack in robotics deployments.\n            "),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-xl my-6 text-center dark:text-white font-bold"},[t._v("\n                ❗ Please install "),n("a",{staticClass:"text-orange-600",attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[t._v("Polkadot.js extension")]),t._v(", create and add Web3 account. Then reload this page.\n              ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800 dark:border-white  m-4 mt-12"},[n("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-8 dark:text-white text-gray-800 mt-4"},[t._v("\n            Digital Economies Powering Physical World\n          ")]),t._v(" "),n("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            With the rise of cryptocurrencies adoption new digital market flourished and they present a number of opportunities to reduce costs, drive additional revenue streams and partnerships.\n          ")]),t._v(" "),n("div",{staticClass:"flex flex-row mx-8 py-4"},[n("div",{staticClass:"basis-1/3 mx-2 px-2 dark:bg-gray-600 relative"},[n("h4",{staticClass:"max-w-sm text-md md:text-xl font-bold dark:text-white text-gray-800 mt-4"},[t._v("\n                DeFi pools and DAOs (costs 📉)\n              ")]),t._v(" "),n("p",{staticClass:"text-md my-4 mb-16 dark:text-white "},[t._v("\n                Data-driven leasing model unlocks global funding sources for new robotics deployments.\n              ")]),t._v(" "),n("a",{staticClass:"absolute bottom-0 inset-x-0  uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{href:"https://docs.google.com/presentation/d/1iMaQJuA91D2bHG1LefyikUMNoGKSNqsXwCDAjztJ9xw/edit?usp=sharing",target:"_blank"}},[t._v("\n                Case study\n              ")])]),t._v(" "),n("div",{staticClass:"basis-1/3 mx-2 px-2 dark:bg-gray-600 relative"},[n("h4",{staticClass:"max-w-sm text-md md:text-xl font-bold dark:text-white text-gray-800 mt-4"},[t._v("\n                DeFi pools and DAOs (NFT and data markets (revenue 📈))\n              ")]),t._v(" "),n("p",{staticClass:"text-md my-4 mb-16 dark:text-white "},[t._v("\n                The birth of digital markets present unique opportunities to form supporting community around equipment operators.\n              ")]),t._v(" "),n("a",{staticClass:"absolute bottom-0 inset-x-0  uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{href:"https://telescope.merklebot.com/#/",target:"_blank"}},[t._v("\n                Check dApp\n              ")])]),t._v(" "),n("div",{staticClass:"basis-1/3 mx-2 px-2 dark:bg-gray-600 relative"},[n("h4",{staticClass:"max-w-sm text-md md:text-xl font-bold dark:text-white text-gray-800 mt-4"},[t._v("\n                Plug-and-play integrations (optimization 📊)\n              ")]),t._v(" "),n("p",{staticClass:"text-md my-4 mb-16 dark:text-white "},[t._v("\n                Open infrastructure and wide hardware support opens endless opportunities for data-driven partnerships and collaboration.\n              ")]),t._v(" "),n("a",{staticClass:"absolute bottom-0 inset-x-0  uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{href:"https://docs.google.com/presentation/d/1iMaQJuA91D2bHG1LefyikUMNoGKSNqsXwCDAjztJ9xw/edit?usp=sharing",target:"_blank"}},[t._v("\n                Case study\n              ")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CameraFrame:n(658).default,AccountChooser:n(589).default,PurchaseTicket:n(829).default,DrawingPanel:n(659).default,ResultingRecordCard:n(831).default})}}]);