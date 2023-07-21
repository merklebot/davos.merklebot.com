(window.webpackJsonp=window.webpackJsonp||[]).push([[55,10,15,17,18,21,22,40],{1108:function(t,e,n){"use strict";n.r(e);var o=n(14),r=(n(21),n(64),{name:"MainPage",data:function(){return{interactionMode:"drawing"}},mounted:function(){this.updateInteractionMode()},methods:{drawingSent:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$refs.controlPanel.launchCps();case 2:t();case 3:case"end":return n.stop()}}),n)})))()},updateInteractionMode:function(){var t=this;fetch("https://api.merklebot.com/strelka/interaction_mode").then((function(t){return t.json()})).then((function(data){t.interactionMode=data.interaction_mode}))}}}),c=n(25),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"bg-gray-800 h-screen overflow-hidden relative"},[n("div",{staticClass:"flex items-start justify-between"},[n("SidePanel",{attrs:{active:"Home"}}),t._v(" "),n("div",{staticClass:"flex flex-col w-full md:space-y-4"},[n("HeaderPanel"),t._v(" "),n("div",{staticClass:"overflow-auto h-screen pb-24 px-4 md:px-6"},[n("h1",{staticClass:"text-4xl font-semibold text-gray-800 text-white my-2"},[t._v("\n          MerkleBot Spot SDK Education\n        ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),"drawing"===t.interactionMode?n("div",{staticClass:"grid grid-cols-3 grid-rows-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4"},[n("CardContainer",{staticClass:"col-span-2",attrs:{title:"Camera"}},[n("CameraFrame",{attrs:{"interaction-mode":t.interactionMode}}),t._v(" "),n("CardContainer",{attrs:{title:"Launch data"}},[n("ControlPanel",{ref:"controlPanel"})],1)],1),t._v(" "),n("CardContainer",{attrs:{title:"Drawing panel"}},[n("DrawingPanel",{attrs:{"canvas-id":"canvas-one"},on:{drawing_sent:t.drawingSent}})],1),t._v(" "),n("CardContainer",{staticClass:"col-span-3",attrs:{title:"Code example"}},[n("CodeSample")],1)],1):t._e(),t._v(" "),"movement"===t.interactionMode?n("div",{staticClass:"grid grid-cols-3 grid-rows-1 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4"},[n("CardContainer",{staticClass:"col-span-2",attrs:{title:"Camera"}},[n("CameraFrame")],1),t._v(" "),n("CardContainer",{attrs:{title:"Launch data"}},[n("ControlPanel",{ref:"controlPanel"}),t._v(" "),n("button",{staticClass:"py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",attrs:{type:"button"},on:{click:function(){return t.drawingSent((function(){}))}}},[t._v("\n              Launch\n            ")])],1)],1):t._e()])],1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"text-md text-gray-400 my-2"},[t._v("\n          Become a certified Boston Dynamics Spot developer at "),n("a",{attrs:{href:"https://spot-sdk.education/",rel:"noopener noreferrer"}},[t._v("https://spot-sdk.education/")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n          Here you can control Boston Dynamics Spot like a student at MerkleBot Spot SDK Basics course.\n          "),n("ol",[n("li",[t._v("1. Compose and send a program to Spot with authorization for your PolkadotService account,")]),t._v(" "),n("li",[t._v("2. Watch the robot executes your program,")]),t._v(" "),n("li",[t._v("3. Verify your session on Robonomics blockchain and IPFS.")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SidePanel:n(921).default,HeaderPanel:n(721).default,CameraFrame:n(592).default,ControlPanel:n(922).default,CardContainer:n(561).default,DrawingPanel:n(651).default,CodeSample:n(923).default})},560:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));var o=n(95),r=Object(o.c)("dashboardParameters",{state:function(){return{codeSampleParameter:!1}},actions:{setCodeSampleParameter:function(t){this.codeSampleParameter=t}}}),c=Object(o.c)("dAppParameters",{state:function(){return{payWithOption:"ticket",currentDrawingSegments:[]}}})},561:function(t,e,n){"use strict";n.r(e);var o={name:"CardContainer",props:{title:{type:String,required:!1}}},r=n(25),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"shadow-lg px-4 py-2 w-full bg-gray-600 relative"},[n("p",{staticClass:"text-lh w-max text-white font-semibold border-b border-gray-200"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,"7302cd96",null);e.default=component.exports},562:function(t,e,n){var o=n(8),r=n(33),c=n(20),l=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var f=c(r(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+d(c(o),l,"&quot;")+'"'),m+">"+f+"</"+e+">"}},563:function(t,e,n){var o=n(9);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},564:function(t,e,n){var o=n(8);t.exports=o(1..valueOf)},567:function(t,e,n){"use strict";var o=n(1),r=n(78).find,c=n(160),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},568:function(t,e,n){"use strict";var o=n(1),r=n(562);o({target:"String",proto:!0,forced:n(563)("sub")},{sub:function(){return r(this,"sub","","")}})},569:function(t,e,n){"use strict";var o=n(1),r=n(3),c=n(8),l=n(65),d=n(564),f=n(223),m=n(9),h=r.RangeError,v=r.String,_=Math.floor,x=c(f),y=c("".slice),w=c(1..toFixed),C=function(t,e,n){return 0===e?n:e%2==1?C(t,e-1,n*t):C(t*t,e/2,n)},k=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=_(o/1e7)},S=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=_(n/t),n=n%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:m((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!m((function(){w({})}))},{toFixed:function(t){var e,n,o,r,c=d(this),f=l(t),data=[0,0,0,0,0,0],m="",_="0";if(f<0||f>20)throw h("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return v(c);if(c<0&&(m="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*C(2,69,1))-69)<0?c*C(2,-e,1):c/C(2,e,1),n*=4503599627370496,(e=52-e)>0){for(k(data,0,n),o=f;o>=7;)k(data,1e7,0),o-=7;for(k(data,C(10,o,1),0),o=e-1;o>=23;)S(data,1<<23),o-=23;S(data,1<<o),k(data,1,1),S(data,2),_=j(data)}else k(data,0,n),k(data,1<<-e,0),_=j(data)+x("0",f);return _=f>0?m+((r=_.length)<=f?"0."+x("0",f-r)+_:y(_,0,r-f)+"."+y(_,r-f)):m+_}})},570:function(t,e,n){var content=n(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("06c608b5",content,!0,{sourceMap:!1})},585:function(t,e,n){"use strict";n(570)},586:function(t,e,n){var o=n(56)((function(i){return i[1]}));o.push([t.i,"div.clickEffect{position:fixed;box-sizing:border-box;border-style:solid;border-color:#8ed080;border-radius:50%;-webkit-animation:clickEffect .4s ease-out;animation:clickEffect .4s ease-out;z-index:99999}@-webkit-keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}@keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}",""]),o.locals={},t.exports=o},592:function(t,e,n){"use strict";n.r(e);n(21);var o={name:"CameraFrame",props:["interactionMode"],data:function(){return{pointers:[],calibrationNodes:[],calibrationProcess:!1,curCalibrationNodeIndex:0,imageLoaded:!0}},methods:{startCalibration:function(){alert("Start calibration"),this.calibrationProcess=!0,this.calibrationNodes=[],this.curCalibrationNodeIndex=0},onClickImage:function(t){if("movement"===this.interactionMode){var e=Math.floor(t.offsetX*(1280/this.$refs.image.width)),n=Math.floor(t.offsetY*(720/this.$refs.image.height));if(console.log(e,n),this.pointers.push([t.clientX,t.clientY]),this.calibrationProcess){var o={robot_x:0,robot_y:0,camera_x:0,camera_y:0};fetch("https://api.merklebot.com/strelka/odom",{method:"GET"}).then((function(t){return t.json()})).then((function(data){o.robot_x=data.position.x,o.robot_y=data.position.y})),o.camera_x=e,o.camera_y=n,this.calibrationNodes.push(o),this.curCalibrationNodeIndex+=1,this.curCalibrationNodeIndex>=16&&(this.calibrationProcess=!1,fetch("https://api.merklebot.com/strelka/set_movement_calibration_nodes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){})),alert("Calibration finished"))}else fetch("https://api.merklebot.com/strelka/go_to_point",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_point_coords:[e,n],calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){}))}},onImageError:function(){this.imageLoaded=!1,console.log("camera image error")}}},r=(n(585),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[t.imageLoaded?n("img",{ref:"image",staticClass:"w-full",staticStyle:{display:"block","-webkit-user-select":"none",margin:"auto","background-color":"hsl(0, 0%, 25%)"},style:"drawing"===t.interactionMode?{"aspect-ratio":"4/3","object-fit":"cover"}:{},attrs:{src:"https://api.merklebot.com/videoserver/video"},on:{click:t.onClickImage,error:t.onImageError}}):t._e(),t._v(" "),t.imageLoaded?t._e():n("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n      Camera isn't loaded\n    ")]),t._v(" "),t._l(t.pointers,(function(t,e){return n("div",{key:e,staticClass:"clickEffect",style:{left:t[0]+"px",top:t[1]+"px"}})})),t._v(" "),"movement"===t.interactionMode?n("div",{on:{click:t.startCalibration}},[t._v("\n      Calibrate\n    ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},598:function(t,e,n){var content=n(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("e204229a",content,!0,{sourceMap:!1})},636:function(t,e,n){"use strict";n(598)},637:function(t,e,n){var o=n(56)((function(i){return i[1]}));o.push([t.i,".canvas-style[data-v-a93bab18]{cursor:crosshair;width:100%!important;height:300px!important;display:block;margin:auto;background-color:#ffedd5}",""]),o.locals={},t.exports=o},651:function(t,e,n){"use strict";n.r(e);var o=n(31),r=(n(21),n(43),n(49),n(37),n(48),n(67),n(68),n(94)),c=n(560);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=n(713),f=Object(r.b)({props:["canvasId"],emits:["drawing_sent"],setup:function(t,e){e.emit;var path=null,n=null,f=[],m=Object(c.b)(),h=Object(c.a)();Object(r.d)((function(){(n=new d.PaperScope).setup(t.canvasId)}));var v=function(){h.currentDrawingSegments=[],f.forEach((function(path){var t=[];console.log(path._segments),path._segments.forEach((function(e){t.push([e.point.x,e.point.y])})),h.currentDrawingSegments.push(t)}))};return{mouseDown:function(t){console.log("mouse down");var e=function(t){return console.log("createTool"),t.activate(),new d.Tool}(n);e.onMouseDown=function(t){path=function(t){return t.activate(),new d.Path({strokeColor:"#000000",strokeJoin:"round",strokeWidth:1.5})}(n),path.add(t.point)},e.onMouseDrag=function(t){console.log("mouse drag"),path.add(t)},e.onMouseUp=function(t){console.log("mouse up"),path.add(t.point),path.simplify(10),path.flatten(3),f.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},path)),console.log(f),v()}},resetCanvas:function(){m.setCodeSampleParameter(!1),n.project.activeLayer.removeChildren(),f=[],v()}}}}),m=f,h=(n(636),n(25)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-full mb-8"},[n("canvas",{staticClass:"canvas-style",attrs:{id:t.canvasId},on:{mousedown:t.mouseDown}})]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:t.resetCanvas}},[t._v("\n    Clear canvas\n  ")])])}),[],!1,null,"a93bab18",null);e.default=component.exports},714:function(t,e){},715:function(t,e){},721:function(t,e,n){"use strict";n.r(e);var o={name:"HeaderPanel"},r=n(25),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"w-full h-16 z-40 flex items-center justify-between"},[n("div",{staticClass:"block lg:hidden ml-6"},[n("button",{staticClass:"flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md"},[n("svg",{staticClass:"text-gray-400",attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"}})])])]),t._v(" "),n("div",{staticClass:"relative z-20 flex flex-col justify-end h-full px-3 md:w-full"},[n("AccountChooser")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AccountChooser:n(599).default})},921:function(t,e,n){"use strict";n.r(e);var o={name:"SidePanel",props:["active"]},r=n(25),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-screen hidden lg:block shadow-lg relative w-80"},[n("div",{staticClass:"bg-gray-200 h-full bg-gray-700"},[t._m(0),t._v(" "),n("nav",{staticClass:"mt-6"},[n("div",[n("NuxtLink",{staticClass:"w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4",class:{"text-gray-800 text-white border-purple-500":"Home"===t.active,"text-gray-400 flex items-center hover:text-gray-800 border-transparent":"Records"===t.active},attrs:{to:"/"}},[n("span",{staticClass:"text-left"},[n("svg",{attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"}})])]),t._v(" "),n("span",{staticClass:"text-sm font-normal",class:{"mx-4":"Records"===t.active,"mx-2":"Home"===t.active}},[t._v("\n            Home\n          ")])]),t._v(" "),n("NuxtLink",{staticClass:"w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4",class:{"text-white border-purple-500":"Records"===t.active,"text-gray-400 flex items-center hover:text-gray-800 border-transparent":"Home"===t.active},attrs:{to:"/records"}},[n("span",{staticClass:"text-left"},[n("svg",{attrs:{width:"20",height:"20",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"}})])]),t._v(" "),n("span",{staticClass:"text-sm font-normal",class:{"mx-4":"Home"===t.active,"mx-2":"Records"===t.active}},[t._v("\n            Records\n          ")])])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center justify-start pt-6 ml-8"},[n("p",{staticClass:"font-bold text-white text-xl"},[t._v("\n        Merklebot\n      ")])])}],!1,null,null,null);e.default=component.exports},922:function(t,e,n){"use strict";n.r(e);var o=n(14),r=(n(47),n(21),n(79),n(64),n(555)),c={name:"ControlPanel",data:function(){return{queueSize:null,robotState:null,lastSessionId:null,cps:{address:"4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j",status:"unknown",launch:{txInfo:null,txStatus:null}}}},mounted:function(){this.doRobotStatePolling()},methods:{launchCps:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.cps.launch.txInfo={tx:null},e.cps.launch.txStatus=null,n.next=4,Object(r.c)(e.cps.address,!0);case 4:if(o=n.sent,e.cps.status="wait_tx",!t){n.next=15;break}return n.next=9,Object(r.e)(e.cps.address,t);case 9:return c=n.sent,n.next=12,Object(r.h)([o,c]);case 12:e.cps.launch.txInfo=n.sent,n.next=18;break;case 15:return n.next=17,Object(r.g)(o);case 17:e.cps.launch.txInfo=n.sent;case 18:return e.cps.launch.txStatus="accepted",e.cps.status="activated",n.abrupt("return",!0);case 21:case"end":return n.stop()}}),n)})))()},addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)},updateRobotState:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.merklebot.com/strelka/current_state",{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent,t.robotState=o.robot_state,t.queueSize=o.queue_size,t.lastSessionId=o.last_session_id,e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})))()},doRobotStatePolling:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.updateRobotState();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Spot state unavailable, retrying");case 8:setTimeout(t.doRobotStatePolling,1e3);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}},l=n(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[n("p",[t._v("Queued: "+t._s(t.queueSize))]),t._v(" "),n("p",[t._v("Robot state: "+t._s(t.robotState))]),t._v(" "),t.lastSessionId&&"idle"===t.robotState?n("p",{staticClass:"text-purple-500"},[n("NuxtLink",{attrs:{to:"/records/"+t.lastSessionId}},[t._v("Last session: "+t._s(t.lastSessionId))])],1):t._e(),t._v(" "),n("ul",{staticStyle:{"list-style":"none",padding:"0"}},[n("li",[t._v("Robot status: "+t._s(t.cps.status))]),t._v(" "),t.cps.launch.txStatus?n("li",[t._v("\n        Transaction status: "+t._s(t.cps.launch.txStatus)+"\n      ")]):t._e(),t._v(" "),t.cps.launch.txInfo?n("li",[t._v("\n        View transaction:\n        "),n("a",{attrs:{href:"https://robonomics.subscan.io/extrinsic/"+t.cps.launch.txInfo.tx,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.cps.launch.txInfo.tx)))])]):t._e()])])])}),[],!1,null,"4f659bbc",null);e.default=component.exports},923:function(t,e,n){"use strict";n.r(e);var o=n(94),r=n(560),c=Object(o.b)({setup:function(){var t=Object(r.b)();return{value:Object(o.a)((function(){return t.codeSampleParameter?'# Copyright (c) 2022 Boston Dynamics, Inc.  All rights reserved.\n\nimport argparse\nimport sys\nimport time\nimport bosdyn.client\nimport bosdyn.client.lease\nimport bosdyn.client.util\nimport bosdyn.geometry\n\nfrom bosdyn.client.robot_command import RobotCommandBuilder, RobotCommandClient, blocking_stand\n\n\ndef hello_spot(config):\n    sdk = bosdyn.client.create_standard_sdk(\'HelloSpotClient\')\n    robot = sdk.create_robot(config.hostname)\n    bosdyn.client.util.authenticate(robot)\n    robot.time_sync.wait_for_sync()\n    lease_client = robot.ensure_client(bosdyn.client.lease.LeaseClient.default_service_name)\n    with bosdyn.client.lease.LeaseKeepAlive(lease_client, must_acquire=True, return_at_exit=True):\n        robot.logger.info("Powering on robot... This may take several seconds.")\n        robot.power_on(timeout_sec=20)\n        assert robot.is_powered_on(), "Robot power on failed."\n        robot.logger.info("Robot powered on.")\n        robot.logger.info("Commanding robot to stand...")\n        command_client = robot.ensure_client(RobotCommandClient.default_service_name)\n        blocking_stand(command_client, timeout_sec=10)\n        robot.logger.info("Robot standing.")\n        time.sleep(3)\n        footprint_R_body = bosdyn.geometry.EulerZXY(yaw=0.4, roll=0.0, pitch=0.0)\n        cmd = RobotCommandBuilder.synchro_stand_command(footprint_R_body=footprint_R_body)\n        command_client.robot_command(cmd)\n        robot.logger.info("Robot standing twisted.")\n        time.sleep(3)\n        cmd = RobotCommandBuilder.synchro_stand_command(body_height=0.1)\n        command_client.robot_command(cmd)\n        robot.logger.info("Robot standing tall.")\n        time.sleep(3)\n        robot.power_off(cut_immediately=False, timeout_sec=20)\n        robot.logger.info("Robot safely powered off.")\n\n\ndef main(argv):\n    """Command line interface."""\n    parser = argparse.ArgumentParser()\n    bosdyn.client.util.add_base_arguments(parser)\n    options = parser.parse_args(argv)\n    hello_spot(options)\n\n\nif __name__ == \'__main__\':\n    if not main(sys.argv[1:]):\n        sys.exit(1)\n\n':"# Code sample will appear here"}))}}}),l=n(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("CodeEditor",{staticClass:"my-4",attrs:{theme:"light",width:"auto",read_only:!0,languages:[["python","Python"]]},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})}),[],!1,null,null,null);e.default=component.exports}}]);