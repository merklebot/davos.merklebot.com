(window.webpackJsonp=window.webpackJsonp||[]).push([[6,13,16,29,30,39],{1018:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(21),n(43),n(49),n(0)),c=n(94),l=n(555),d=n(557),v=n(554),m=n(770),f=n(658),h=Object(o.defineComponent)({setup:function(){var t=Object(d.a)(),e=Object(v.a)(),n=Object(c.f)("173"),o=Object(c.a)((function(){var e={connectWallet:"connected"===t.walletConnectionStatus,cameraControl:!0},n={},r="success";return Object.keys(e).forEach((function(t){if("success"===r){var o=e[t]?"success":"wait";r=o,n[t]=o}else"wait"===r?(r="disabled",n[t]="disabled"):"disabled"===r&&(n[t]="disabled")})),n})),h=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t.selectedAccount.account.address),n.next=3,Object(m.a)(t.selectedAccount.account.address);case 3:return r=n.sent,n.next=6,Object(l.i)(r);case 6:o=n.sent,console.log(r),console.log(o),e.robotToken=r,e.signedRobotToken=o;case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(m.b)(t.selectedAccount.account.address,e.signedRobotToken,r);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),w=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(f.a)(t.selectedAccount.account.address,e.signedRobotToken);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){var o=Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("zoom command"),r.next=3,Object(m.c)(t.selectedAccount.account.address,e.signedRobotToken,parseInt(n.value));case 3:case"end":return r.stop()}}),r)})));return function(){return o.apply(this,arguments)}}();return{wallet:t,robot:e,progressElementStatuses:o,zoomAbsolute:n,signToken:h,moveCommand:x,zoomCommand:y,startCalibration:w}}}),x=h,w=n(25),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"overflow-x-hidden overflow-y-auto h-screen snap-y snap-mandatory"},[n("ProgressContainer",[n("ProgressContainerElement",{attrs:{title:"Connect your wallet",status:t.progressElementStatuses.connectWallet}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-1","href-id":"#1",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            Identity and access rights are managed using the cryptographic key\n            from your Web3 wallet.\n          ")]),t._v(" "),n("img",{attrs:{src:"/pictures/Frame2.png"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("AccountChooser"),t._v(" "),"error"===t.wallet.walletConnectionStatus?n("div",[n("p",{staticClass:"text-xl my-6 text-center text-white font-bold"},[t._v("\n                ❗ Please install\n                "),t._v(" "),n("a",{staticClass:"text-orange-600",attrs:{href:"https://talisman.xyz/",target:"_blank"}},[t._v("Talisman web3 wallet")]),t._v(" and create an account. Then reload this page.\n              ")])]):t._e()],1)],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Auth",status:"wait"}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-2","href-id":"#2",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            You need to get your control token by signing robot's token\n          ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:t.signToken}},[t._v("\n            Sign token\n          ")]),t._v(" "),n("div",[t._v("status: "+t._s(t.robot.signedRobotToken?"authed":"not authed"))])],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Control camera",status:"wait"}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-2","href-id":"#2",title:""}}),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Move camera\n            ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-3 gap-x-4"},[n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:1})}}},[t._v("\n                Up\n              ")]),t._v(" "),n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:-1,y:0})}}},[t._v("\n                Left\n              ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:-1})}}},[t._v("\n                Down\n              ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:1,y:0})}}},[t._v("\n                Right\n              ")])])]),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4 mt-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Set camera zoom\n            ")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.zoomAbsolute,expression:"zoomAbsolute"}],staticClass:"border-b-2 border-orange-600 py-2 my-2 px-4 bg-gray-600",domProps:{value:t.zoomAbsolute},on:{input:function(e){e.target.composing||(t.zoomAbsolute=e.target.value)}}}),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.zoomCommand()}}},[t._v("\n                Set zoom\n              ")])])]),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4 mt-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Start Spot calibration\n            ")]),t._v(" "),n("RobotStateCard"),t._v(" "),n("div",[n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.startCalibration()}}},[t._v("\n                Start Calibration\n              ")])])],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Anchor:n(610).default,AccountChooser:n(597).default,StepContentContainer:n(613).default,ProgressContainerElement:n(590).default,RobotStateCard:n(591).default,ProgressContainer:n(611).default})},561:function(t,e,n){"use strict";n.r(e);var r={name:"CardContainer",props:{title:{type:String,required:!1}}},o=n(25),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"shadow-lg px-4 py-2 w-full bg-gray-600 relative"},[n("p",{staticClass:"text-lh w-max text-white font-semibold border-b border-gray-200"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,"7302cd96",null);e.default=component.exports},590:function(t,e,n){"use strict";n.r(e);var r=n(94),o=Object(r.b)({props:["title","status"],setup:function(t){return{elementTitle:t.title,elementStatus:t.status}}}),c=n(25),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex md:contents"},[n("div",{staticClass:"col-start-0 col-end-2 mr-10 md:mx-auto relative"},[n("div",{staticClass:"h-full w-6 flex items-center justify-center"},[n("div",{staticClass:"h-full w-1 pointer-events-none",class:{"bg-green-500":"success"===t.status,"bg-orange-600":"wait"===t.status,"bg-gray-300":"disabled"===t.status}})]),t._v(" "),n("div",{staticClass:"w-6 h-6 absolute top-1/2 -mt-3 rounded-full  shadow text-center",class:{"bg-green-500":"success"===t.status,"bg-orange-600":"wait"===t.status,"bg-gray-300":"disabled"===t.status}},[n("i",{staticClass:"fas fa-check-circle text-white"})])]),t._v(" "),n("div",{staticClass:"col-start-2 col-end-12 p-4 my-4 mr-auto border-2 bg-gray-700  w-full",class:{"border-green-500":"success"===t.status,"border-gray-600":"success"!==t.status,"opacity-30 pointer-events-none":"disabled"===t.status}},[n("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-6 text-white",attrs:{id:"anchor-to-1"}},[t._v("\n      "+t._s(t.elementTitle)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},591:function(t,e,n){"use strict";n.r(e);var r=n(94),o=n(554),c=Object(r.b)({setup:function(){return{robot:Object(o.a)()}}}),l=n(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CardContainer",{attrs:{title:"Robot info"}},[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Robot state: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.robotState))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Tasks in queue: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.queueSize))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardContainer:n(561).default})},597:function(t,e,n){"use strict";n.r(e);n(47);var r=n(94),o=n(557),c=Object(r.b)({setup:function(){var t=Object(o.a)(),e=Object(r.f)(!1);Object(r.d)((function(){t.connectWallet()}));return{showAccountChoose:e,selectAccount:function(e){t.setActiveAccount(e)},addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)},wallet:t}}}),l=n(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative p-1 flex items-center w-full space-x-4 justify-end"},[n("div",{staticClass:"w-128"},[t.wallet.selectedAccount.account?n("div",{staticClass:"mt-1 relative"},[n("button",{staticClass:"relative w-full bg-gray-600 text-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-white sm:text-sm",attrs:{type:"button"},on:{click:function(){return t.showAccountChoose=!t.showAccountChoose}}},[n("span",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+t.wallet.selectedAccount.account.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block truncate"},[t._v("\n              "+t._s(t.wallet.selectedAccount.account.meta.name)+" - ("+t._s(t.wallet.selectedAccount.balanceFormatted)+") - "+t._s(t.addressShort(t.wallet.selectedAccount.account.address))+"\n            ")])]),t._v(" "),n("span",{staticClass:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},[n("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccountChoose,expression:"showAccountChoose"}],staticClass:"absolute mt-1 w-full z-10 rounded-md bg-gray-600 shadow-lg"},[n("ul",{staticClass:"max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",attrs:{tabindex:"-1",role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-item-3"}},t._l(t.wallet.accounts,(function(e,r){return n("li",{key:r,staticClass:"text-white  cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9",attrs:{id:"listbox-item-0",value:e,role:"option"},on:{click:function(){t.selectAccount(e),t.showAccountChoose=!1}}},[n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+e.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block font-normal truncate"},[t._v("\n                  "+t._s(e.meta.name)+" - "+t._s(t.addressShort(e.address))+"\n                ")])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.wallet.selectedAccount.account.address===e.address,expression:"wallet.selectedAccount.account.address===account.address"}],staticClass:"absolute inset-y-0 right-0 flex items-center pr-4"},[n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])])])})),0)])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},610:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.defineComponent)({props:["anchorId","hrefId","title"],setup:function(t){return{props:t}}}),c=n(25),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{id:t.props.anchorId,href:t.props.hrefId}},[n("h3",{staticClass:"w-full text-xl md:text-2xl font-bold mx-6 text-white",attrs:{id:t.props.anchorId}},[t._v("\n    "+t._s(t.props.title)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},611:function(t,e,n){"use strict";n.r(e);var r=n(94),o=Object(r.b)({setup:function(){}}),c=n(25),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 mt-4"},[n("div",{staticClass:"container"},[n("div",{staticClass:"flex flex-col md:grid grid-cols-12 text-gray-50"},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},613:function(t,e,n){"use strict";n.r(e);var r=n(25),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen flex items-center snap-always snap-center scroll-my-10"},[n("div",{staticClass:"bg-gray-700 px-6 py-8"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},770:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return v}));var r=n(14),o=(n(64),n(79)),c=n.n(o).a.create({baseURL:"https://api.merklebot.com/videoserver"}),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("token",{account:e});case 2:return n=t.sent,t.abrupt("return",n.data.token);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("control",{account:e,signed_token:n,control_name:"move",velocity:r});case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),v=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("control",{account:e,signed_token:n,control_name:"zoom",zoom_absolute:r});case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}}]);