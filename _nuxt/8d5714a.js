(window.webpackJsonp=window.webpackJsonp||[]).push([[20,6],{584:function(t,e,r){var content=r(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(57).default)("06c608b5",content,!0,{sourceMap:!1})},586:function(t,e,r){"use strict";r.r(e);r(46);var n=r(93),o=r(556),c=Object(n.b)({setup:function(){var t=Object(o.a)(),e=Object(n.f)(!1);Object(n.d)((function(){t.connectWallet()}));return{showAccountChoose:e,selectAccount:function(e){t.setActiveAccount(e)},addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)},wallet:t}}}),l=r(27),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"relative p-1 flex items-center w-full space-x-4 justify-end"},[r("div",{staticClass:"w-128"},[t.wallet.selectedAccount.account?r("div",{staticClass:"mt-1 relative"},[r("button",{staticClass:"relative w-full bg-white dark:bg-gray-600 dark:text-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-white sm:text-sm",attrs:{type:"button"},on:{click:function(){return t.showAccountChoose=!t.showAccountChoose}}},[r("span",{staticClass:"flex items-center"},[r("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+t.wallet.selectedAccount.account.address+".svg",alt:"person"}}),t._v(" "),r("span",{staticClass:"ml-3 block truncate"},[t._v("\n              "+t._s(t.wallet.selectedAccount.account.meta.name)+" - ("+t._s(t.wallet.selectedAccount.balanceFormatted)+") - "+t._s(t.addressShort(t.wallet.selectedAccount.account.address))+"\n            ")])]),t._v(" "),r("span",{staticClass:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},[r("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccountChoose,expression:"showAccountChoose"}],staticClass:"absolute mt-1 w-full z-10 rounded-md bg-white dark:bg-gray-600 shadow-lg"},[r("ul",{staticClass:"max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",attrs:{tabindex:"-1",role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-item-3"}},t._l(t.wallet.accounts,(function(e,n){return r("li",{key:n,staticClass:"text-gray-900 dark:text-white  cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9",attrs:{id:"listbox-item-0",value:e,role:"option"},on:{click:function(){t.selectAccount(e),t.showAccountChoose=!1}}},[r("div",{staticClass:"flex items-center"},[r("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+e.address+".svg",alt:"person"}}),t._v(" "),r("span",{staticClass:"ml-3 block font-normal truncate"},[t._v("\n                  "+t._s(e.meta.name)+" - "+t._s(t.addressShort(e.address))+"\n                ")])]),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.wallet.selectedAccount.account.address===e.address,expression:"wallet.selectedAccount.account.address===account.address"}],staticClass:"absolute inset-y-0 right-0 flex items-center pr-4"},[r("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])])])})),0)])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},616:function(t,e,r){"use strict";r(584)},617:function(t,e,r){var n=r(56)((function(i){return i[1]}));n.push([t.i,"div.clickEffect{position:fixed;box-sizing:border-box;border-style:solid;border-color:#8ed080;border-radius:50%;-webkit-animation:clickEffect .4s ease-out;animation:clickEffect .4s ease-out;z-index:99999}@-webkit-keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}@keyframes clickEffect{0%{opacity:1;width:.5em;height:.5em;margin:-.25em;border-width:.5em}to{opacity:.2;width:8em;height:7em;margin:-4em;border-width:.03em}}",""]),n.locals={},t.exports=n},657:function(t,e,r){"use strict";r.r(e);r(21);var n={name:"CameraFrame",props:["interactionMode"],data:function(){return{pointers:[],calibrationNodes:[],calibrationProcess:!1,curCalibrationNodeIndex:0,imageLoaded:!0}},methods:{startCalibration:function(){alert("Start calibration"),this.calibrationProcess=!0,this.calibrationNodes=[],this.curCalibrationNodeIndex=0},onClickImage:function(t){if("movement"===this.interactionMode){var e=Math.floor(t.offsetX*(1280/this.$refs.image.width)),r=Math.floor(t.offsetY*(720/this.$refs.image.height));if(console.log(e,r),this.pointers.push([t.clientX,t.clientY]),this.calibrationProcess){var n={robot_x:0,robot_y:0,camera_x:0,camera_y:0};fetch("https://api.merklebot.com/strelka/odom",{method:"GET"}).then((function(t){return t.json()})).then((function(data){n.robot_x=data.position.x,n.robot_y=data.position.y})),n.camera_x=e,n.camera_y=r,this.calibrationNodes.push(n),this.curCalibrationNodeIndex+=1,this.curCalibrationNodeIndex>=16&&(this.calibrationProcess=!1,fetch("https://api.merklebot.com/strelka/set_movement_calibration_nodes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){})),alert("Calibration finished"))}else fetch("https://api.merklebot.com/strelka/go_to_point",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({camera_point_coords:[e,r],calibration_nodes:this.calibrationNodes})}).then((function(t){return t.json()})).then((function(data){}))}},onImageError:function(){this.imageLoaded=!1,console.log("camera image error")}}},o=(r(616),r(27)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative"}},[t.imageLoaded?r("img",{ref:"image",staticClass:"w-full",staticStyle:{display:"block","-webkit-user-select":"none",margin:"auto","background-color":"hsl(0, 0%, 25%)"},style:"drawing"===t.interactionMode?{"aspect-ratio":"4/3","object-fit":"cover"}:{},attrs:{src:"https://api.merklebot.com/videoserver/video"},on:{click:t.onClickImage,error:t.onImageError}}):t._e(),t._v(" "),t.imageLoaded?t._e():r("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n    Camera isn't loaded\n  ")]),t._v(" "),t._l(t.pointers,(function(t,e){return r("div",{key:e,staticClass:"clickEffect",style:{left:t[0]+"px",top:t[1]+"px"}})})),t._v(" "),"movement"===t.interactionMode?r("div",{on:{click:t.startCalibration}},[t._v("\n    Calibrate\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},823:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(47),r(21),r(63),r(93)),c=r(556),l=r(557),d="https://js.stripe.com/v3",m=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,h="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",x=null,v=function(t){return null!==x||(x=new Promise((function(e,r){if("undefined"!=typeof window)if(window.Stripe&&t&&console.warn(h),window.Stripe)e(window.Stripe);else try{var script=function(){for(var t=document.querySelectorAll('script[src^="'.concat(d,'"]')),i=0;i<t.length;i++){var script=t[i];if(m.test(script.src))return script}return null}();script&&t?console.warn(h):script||(script=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",script=document.createElement("script");script.src="".concat(d).concat(e);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(script),script}(t)),script.addEventListener("load",(function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))})),script.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(t){return void r(t)}else e(null)}))),x},f=function(t,e,r){if(null===t)return null;var n=t.apply(void 0,e);return function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.31.0",startTime:e})}(n,r),n},w=Promise.resolve().then((function(){return v(null)})),_=!1;w.catch((function(t){_||console.warn(t)}));var y,k=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];_=!0;var n=Date.now();return w.then((function(t){return f(t,e,n)}))},C=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!y){t.next=2;break}return t.abrupt("return",y);case 2:return t.next=4,k("pk_live_51IvSZKJXrK78CsUSfSb5Jyjo3AkjZ2k6ZMr0c8miMMIcWcQiBKtCapD5ho2Bk45MjMh3QTlpLamkrOiG9gMJzMh100iGhW3ehO");case 4:return y=t.sent,t.abrupt("return",y);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=Object(o.b)({setup:function(){var t=Object(c.a)(),e=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)(t.selectedAccount.account.address);case 2:return r=e.sent,e.next=5,C();case 5:return n=e.sent,e.next=8,n.redirectToCheckout({sessionId:r});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=Object(o.a)((function(){return t.selectedAccount.balanceRaw*Math.pow(10,-9)>1})),d=Object(o.a)((function(){return t.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length>=1}));return{wallet:t,checkout:e,hasEnoughXrt:r,hasTicket:d}}}),S=j,O=r(27),component=Object(O.a)(S,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n      One launch requires 1 ticket or 1 XRT.\n    ")]),t._v(" "),r("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n      You have:\n    ")]),t._v(" "),r("ul",{staticClass:"list-disc ml-8 text-md my-2 dark:text-white mx-6"},[r("li",[t._v(t._s(t.wallet.selectedAccount.balanceFormatted))]),t._v(" "),r("li",[t._v(t._s(t.wallet.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length)+" tickets")])]),t._v(" "),t.hasTicket||t.hasEnoughXrt?r("span",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n      It is enough to launch the robot by\n      "),t.hasTicket?r("span",[t._v(" ticket")]):t._e(),t._v(" "),t.hasTicket&&t.hasEnoughXrt?r("span",[t._v(" or")]):t._e(),t._v(" "),t.hasEnoughXrt?r("span",[t._v(" XRT")]):t._e(),t._v(".\n    ")]):r("span",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n      It is not enough to launch the robot. Purchase a ticket "),r("em",[t._v("or")]),t._v(" get XRT.\n    ")])]),t._v(" "),r("div",[r("button",{staticClass:"h-12 w-96 py-2 px-4 my-4 items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg",attrs:{type:"button"},on:{click:t.checkout}},[r("span",[t._v("Purchase a ticket for 5 USD")]),t._v(" "),r("img",{staticClass:"h-6 ml-2 inline-block bg-purple-600 rounded-lg",attrs:{src:"stripe.svg"}})])])])}),[],!1,null,"5044dc30",null);e.default=component.exports},828:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(63),r(46),r(75),r(76),r(93)),c=r(618),l=r(557),d=Object(o.b)({setup:function(){var t=Object(c.a)(),e=Object(o.f)(null),r=Object(o.f)(null),d=Object(o.f)(null),m=Object(o.f)(null),h=function(){var o=Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.cps.launch.txStatus){n.next=11;break}return n.prev=1,n.next=4,Object(l.b)({launchTxId:"".concat(t.cps.launch.txInfo.blockNumber,"-").concat(t.cps.launch.txInfo.txIndex)});case 4:o=n.sent,console.log(o),o&&(e.value=o,r.value="https://merklebot.mypinata.cloud/ipfs/".concat(o.ipfs_cid,"/spot/davos.merklebot.com/spot/traces/user-").concat(o.sender,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(o.nonce,"-").concat(o.created_at),d.value="https://robonomics.subscan.io/extrinsic/".concat(o.launch_tx_id),m.value="https://robonomics.subscan.io/extrinsic/".concat(o.datalog_tx_id)),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(1);case 11:setTimeout(h,1e3);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return o.apply(this,arguments)}}();return Object(o.d)((function(){h()})),{robot:t,launchData:e,traceFolderLink:r,launchLink:d,datalogLink:m,addressShort:function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}}}}),m=d,h=r(27),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800  dark:border-white m-4 mt-12 min-h-200"},[r("h2",{staticClass:"max-w-xl text-2xl md:text-3xl font-bold mx-auto dark:text-white text-gray-800 py-2"},[t._v("\n    4. See your launch data\n  ")]),t._v(" "),r("div",[r("p",{staticClass:"text-xl mt-2 dark:text-white mx-6"},[t._v("\n      Robot state: "),r("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.robotState))])]),t._v(" "),r("p",{staticClass:"text-xl mt-2 dark:text-white mx-6"},[t._v("\n      Robot status: "),r("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.cps.status))])]),t._v(" "),r("p",{staticClass:"text-xl mt-2 dark:text-white mx-6"},[t._v("\n      Transaction status: "),r("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.cps.launch.txStatus))])]),t._v(" "),r("p",{staticClass:"text-xl mt-2 dark:text-white mx-6"},[t._v("\n      View transaction: "),r("a",{staticClass:"text-yellow-500",attrs:{href:"https://robonomics.subscan.io/extrinsic/"+t.robot.cps.launch.txInfo.tx,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.robot.cps.launch.txInfo.tx)))])])]),t._v(" "),null!==t.launchData?r("div",[r("p",{staticClass:"text-md mt-2 dark:text-white mx-6"},[t._v("\n      IPFS Content ID: "),r("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.launchData.ipfs_cid))])]),t._v(" "),r("p",{staticClass:"text-md mt-2 dark:text-white mx-6"},[t._v("\n      View Robonomics Launch Tx: "),r("a",{staticClass:"text-yellow-500",attrs:{href:t.datalogLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.launchLink))])]),t._v(" "),r("p",{staticClass:"text-md mt-2 dark:text-white mx-6"},[t._v("\n      View record data on IPFS: "),r("a",{staticClass:"text-yellow-500",attrs:{href:t.traceFolderLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.traceFolderLink.slice(0,50)+"..."))])]),t._v(" "),r("p",{staticClass:"text-md mt-2 dark:text-white mx-6"},[t._v("\n      View Robonomics Datalog Tx:"),r("a",{staticClass:"text-yellow-500",attrs:{href:t.datalogLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.datalogLink.slice(0,50)+"..."))])]),t._v(" "),r("div",{staticClass:"flex items-left justify-left m-4"},[r("video",{attrs:{src:t.traceFolderLink+"/h264_camera.mp4",type:"video/mp4",controls:""}})]),t._v(" "),r("div")]):r("div",[r("p",{staticClass:"text-md mt-2 dark:text-white mx-6 my-4"},[t._v("\n      Your launch data will appear here after processing drawing and saving all data\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},953:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(63),r(76),r(93)),c=r(618),l=r(556),d=Object(o.b)({setup:function(){var t=Object(c.a)(),e=Object(l.a)(),r=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.updateRobotState();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Spot state unavailable, retrying");case 8:setTimeout(r,1e3);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(o.d)((function(){r()})),{robot:t,wallet:e}}}),m=d,h=r(27),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"dark:bg-gray-800 font-mono bg-white overflow-hidden "},[r("div",{staticClass:"z-20 container mx-auto flex flex-row"},[r("div",{staticClass:"basis-5/12"},[r("div",{staticClass:"px-6 flex flex-col justify-between items-center py-4 "},[t.robot.robotState?r("div",{staticClass:"flex flex-col"},[r("p",{staticClass:"text-3xl my-6 text-center dark:text-white"},[t._v("\n            Hi, I’m Spot 🦾🐶\n          ")]),t._v(" "),r("div",[r("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.robot.robotState?t._e():r("div",{staticClass:"flex flex-col"},[r("p",{staticClass:"text-3xl my-6 text-center text-red-600"},[t._v("\n            Spot is currently unavailable\n          ")]),t._v(" "),r("div",{staticClass:"h-1/3"},[r("CameraFrame",{attrs:{"interaction-mode":"drawing"}})],1)])])]),t._v(" "),r("div",{staticClass:"basis-7/12"},[r("div",{staticClass:"overflow-y-auto h-screen"},[r("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800  dark:border-white m-4 mt-12"},[r("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-8 dark:text-white text-gray-800 mt-4"},[t._v("\n            User Ownership of Data\n          ")]),t._v(" "),r("p",{staticClass:"text-md my-1 dark:text-white mx-6"},[t._v("\n            To power this demo we integrated Boston Dynamics SDK, just like we did with other major robotics manufacturers like Mitsubishi Electric and Universal Robots. And we also support Robot Operating System - dominant framework for robotics development today. Robots are ready to use Web3.\n          ")]),t._v(" "),r("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            Identity and access rights are managed using the cryptographic key from your Web3 wallet. This way we make sure that you own the data generated during your interaction with the robot. And for enterprise cases we cryptographically verify the whole chain of custody for machine data within and accross organizations.\n          ")]),t._v(" "),r("div",{staticClass:"flex items-center justify-center my-4"},[r("AccountChooser"),t._v(" "),"error"===t.wallet.walletConnectionStatus?r("div",[t._m(2)]):t._e()],1),t._v(" "),r("div")]),t._v(" "),r("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800  dark:border-white m-4 mt-12"},[r("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-8 dark:text-white text-gray-800 mt-4"},[t._v("\n            Robots Transfer Value\n          ")]),t._v(" "),r("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            Billing for robot’s work can happen in both US dollars and cryptocurrencies - money for robots. While robots today can already navigate our complex world, perform inspections and even interact with people - they still couldn’t participate in our economy directly. From fun demos like this one to data-driven equipment leasing: now robots can transact in fully autonomous supply chains.\n          ")]),t._v(" "),r("div",{staticClass:"flex mt-4 mx-6"},[r("PurchaseTicket")],1),t._v(" "),r("div")]),t._v(" "),r("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800  dark:border-white m-4 mt-12"},[r("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-8 dark:text-white text-gray-800 mt-4"},[t._v("\n            Secure Access to Machines\n          ")]),t._v(" "),r("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            Teleoperation session is authorized by the key in your wallet and the data can be encrypted with it too. You will now send a transaction directly to the robot and it will be recorded in Robonomics blockchain within Polkadot ecosystem. This way technical command and value transfer are tied together and verified to ensure resiliency of large scale cyber-physical systems.\n          ")]),t._v(" "),r("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            Now you can collaborate with Spot, draw anything in the box and ask her to repeat it:\n          ")]),t._v(" "),r("div",{staticClass:"flex items-center justify-center mt-4"},[r("DrawingPanel",{attrs:{"canvas-id":"canvas-one"}})],1),t._v(" "),r("div")]),t._v(" "),r("ResultingRecordCard"),t._v(" "),t._m(3)],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-2xl my-6 text-center dark:text-white"},[t._v("\n            And we are a team of builders who share the vision of\n            "),r("br"),t._v(" "),r("span",{staticClass:"text-orange-600 font-bold"},[t._v("machine economy with no single point of failure.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-2xl mt-2 text-center dark:text-white"},[t._v("\n            With this demo we aim to demonstrate the benefits of using Web3 software stack in robotics deployments.\n            "),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-xl my-6 text-center dark:text-white font-bold"},[t._v("\n                ❗ Please install "),r("a",{staticClass:"text-orange-600",attrs:{href:"https://polkadot.js.org/extension/",target:"_blank"}},[t._v("Polkadot.js extension")]),t._v(", create and add Web3 account. Then reload this page.\n              ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dark:bg-gray-700 border-2 border-gray-800 dark:border-white  m-4 mt-12"},[r("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-8 dark:text-white text-gray-800 mt-4"},[t._v("\n            Digital Economies Powering Physical World\n          ")]),t._v(" "),r("p",{staticClass:"text-md my-2 dark:text-white mx-6"},[t._v("\n            With the rise of cryptocurrencies adoption new digital market flourished and they present a number of opportunities to reduce costs, drive additional revenue streams and partnerships.\n          ")]),t._v(" "),r("div",{staticClass:"flex flex-row mx-8 py-4"},[r("div",{staticClass:"basis-1/3 mx-2 px-2 dark:bg-gray-600 relative"},[r("h4",{staticClass:"max-w-sm text-md md:text-xl font-bold dark:text-white text-gray-800 mt-4"},[t._v("\n                DeFi pools and DAOs (costs 📉)\n              ")]),t._v(" "),r("p",{staticClass:"text-md my-4 mb-16 dark:text-white "},[t._v("\n                Data-driven leasing model unlocks global funding sources for new robotics deployments.\n              ")]),t._v(" "),r("a",{staticClass:"absolute bottom-0 inset-x-0  uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{href:"https://docs.google.com/presentation/d/1iMaQJuA91D2bHG1LefyikUMNoGKSNqsXwCDAjztJ9xw/edit?usp=sharing",target:"_blank"}},[t._v("\n                Case study\n              ")])]),t._v(" "),r("div",{staticClass:"basis-1/3 mx-2 px-2 dark:bg-gray-600 relative"},[r("h4",{staticClass:"max-w-sm text-md md:text-xl font-bold dark:text-white text-gray-800 mt-4"},[t._v("\n                DeFi pools and DAOs (NFT and data markets (revenue 📈))\n              ")]),t._v(" "),r("p",{staticClass:"text-md my-4 mb-16 dark:text-white "},[t._v("\n                The birth of digital markets present unique opportunities to form supporting community around equipment operators.\n              ")]),t._v(" "),r("a",{staticClass:"absolute bottom-0 inset-x-0  uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{href:"https://telescope.merklebot.com/#/",target:"_blank"}},[t._v("\n                Check dApp\n              ")])]),t._v(" "),r("div",{staticClass:"basis-1/3 mx-2 px-2 dark:bg-gray-600 relative"},[r("h4",{staticClass:"max-w-sm text-md md:text-xl font-bold dark:text-white text-gray-800 mt-4"},[t._v("\n                Plug-and-play integrations (optimization 📊)\n              ")]),t._v(" "),r("p",{staticClass:"text-md my-4 mb-16 dark:text-white "},[t._v("\n                Open infrastructure and wide hardware support opens endless opportunities for data-driven partnerships and collaboration.\n              ")]),t._v(" "),r("a",{staticClass:"absolute bottom-0 inset-x-0  uppercase py-2 mx-4 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md text-center",attrs:{href:"https://docs.google.com/presentation/d/1iMaQJuA91D2bHG1LefyikUMNoGKSNqsXwCDAjztJ9xw/edit?usp=sharing",target:"_blank"}},[t._v("\n                Case study\n              ")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CameraFrame:r(657).default,AccountChooser:r(586).default,PurchaseTicket:r(823).default,DrawingPanel:r(826).default,ResultingRecordCard:r(828).default})}}]);