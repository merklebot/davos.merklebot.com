(window.webpackJsonp=window.webpackJsonp||[]).push([[7,13,16,19,25,26,30,31,38,40],{1028:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(21),n(43),n(49),n(64),n(94)),l=n(556),c=n(554),d=n(588),m=n(589),f=n(594),v=n(774),x=n(555),h=Object(o.b)({components:{DashboardLikeContainer:f.default,RobotStateCard:m.default,ProgressContainerElement:d.default},setup:function(){var t=Object(l.a)(),e=Object(c.a)(),n=Object(o.f)(),d=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t.selectedAccount.account.address),n.next=3,Object(v.a)(t.selectedAccount.account.address);case 3:return r=n.sent,n.next=6,Object(x.i)(r);case 6:o=n.sent,console.log(r),console.log(o),e.robotToken=r,e.signedRobotToken=o;case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=Object(o.a)((function(){var n={connectWallet:"connected"===t.walletConnectionStatus,sendLaunchCommand:"unknown"!==e.cps.status,waitTx:"accepted"===e.cps.launch.txStatus,robotExecution:null!==e.cps.launch.recordData,recordedData:null!==e.cps.launch.recordData},r={},o="success";return Object.keys(n).forEach((function(t){if("success"===o){var e=n[t]?"success":"wait";o=e,r[t]=e}else"wait"===o?(o="disabled",r[t]="disabled"):"disabled"===o&&(r[t]="disabled");r[t]="success"})),r}));return{wallet:t,robot:e,progressElementStatuses:m,modal:n,openModal:function(){n.value.openModal()},signToken:d}}}),w=h,C=n(25),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",{staticClass:"overflow-x-hidden overflow-y-auto snap-y snap-mandatory"},[n("Modal",{ref:"modal"}),t._v(" "),n("ProgressContainer",[n("ProgressContainerElement",{attrs:{title:"Connect your wallet",status:t.progressElementStatuses.connectWallet}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-1","href-id":"#1",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            Identity and access rights are managed using the cryptographic key\n            from your Web3 wallet.\n          ")]),t._v(" "),n("img",{attrs:{src:"/pictures/Frame2.png"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("AccountChooser"),t._v(" "),"error"===t.wallet.walletConnectionStatus?n("div",[n("p",{staticClass:"text-xl my-6 text-center text-white font-bold"},[t._v("\n                ❗ Please install\n                "),t._v(" "),n("a",{staticClass:"text-orange-600",attrs:{href:"https://talisman.xyz/",target:"_blank"}},[t._v("Talisman web3 wallet")]),t._v(" and create an account. Then reload this page.\n              ")])]):t._e()],1),t._v(" "),n("div",[n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n              You need to get your control token by signing robot's token\n            ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:t.signToken}},[t._v("\n              Sign token\n            ")]),t._v(" "),n("div",[t._v("status: "+t._s(t.robot.signedRobotToken?"authed":"not authed"))])])],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Send launch transaction",status:t.progressElementStatuses.sendLaunchCommand}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-4","href-id":"#4",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            Teleoperation is authorized by sending transactions directly to the robot’s address using your wallet.\n          ")]),t._v(" "),n("img",{attrs:{src:"/pictures/Frame4.png"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center mt-4"},[n("SendDrawingCommand")],1)],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Wait for your transaction to process",status:t.progressElementStatuses.waitTx}},[n("Anchor",{attrs:{"anchor-id":"anchor-to-5","href-id":"#5",title:""}}),t._v(" "),n("StepContentContainer",[n("DashboardLikeContainer",[n("LaunchTransactionInfoCard")],1)],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Control spot",status:t.progressElementStatuses.robotExecution}},[n("Anchor",{attrs:{"anchor-id":"anchor-to-4","href-id":"#6",title:""}}),t._v(" "),n("StepContentContainer",[n("DashboardLikeContainer",[n("RobotStateCard"),t._v(" "),n("SpotAnimation")],1),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Control spot movement\n            ")]),t._v(" "),n("WASDController")],1),t._v(" "),n("div",{staticClass:"border-2 border-gray-500 p-4 mt-4"},[n("p",{staticClass:"text-md my-2 text-white"},[t._v("\n              Control spot poses\n            ")]),t._v(" "),n("PoseController")],1)],1)],1),t._v(" "),n("ProgressContainerElement",{attrs:{title:"Review recorded data",status:t.progressElementStatuses.recordedData}},[n("StepContentContainer",[n("Anchor",{attrs:{"anchor-id":"anchor-to-7","href-id":"#7",title:""}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            The data is recorded using IPFS and stored with multiple replicas using decentralized Crust Network to guarantee availability and resiliency.\n          ")]),t._v(" "),n("img",{attrs:{src:"/pictures/Frame5.png"}}),t._v(" "),n("p",{staticClass:"text-md my-2 text-white mx-6"},[t._v("\n            Here is the report from your interaction with Spot:\n          ")]),t._v(" "),n("ResultingRecordCard")],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:n(619).default,Anchor:n(602).default,AccountChooser:n(593).default,StepContentContainer:n(604).default,ProgressContainerElement:n(588).default,SendDrawingCommand:n(706).default,LaunchTransactionInfoCard:n(621).default,DashboardLikeContainer:n(594).default,RobotStateCard:n(589).default,SpotAnimation:n(622).default,WASDController:n(887).default,PoseController:n(888).default,ResultingRecordCard:n(623).default,ProgressContainer:n(603).default})},561:function(t,e,n){"use strict";n.r(e);var r={name:"CardContainer",props:{title:{type:String,required:!1}}},o=n(25),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"shadow-lg px-4 py-2 w-full bg-gray-600 relative"},[n("p",{staticClass:"text-lh w-max text-white font-semibold border-b border-gray-200"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,"7302cd96",null);e.default=component.exports},583:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.defineComponent)({props:{data:{type:Object,default:null}},setup:function(t){return{nftOrderInfo:t.data}}}),l=n(25),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{hidden:""}},[t._v("\n  NFT Data: "+t._s(t.nftOrderInfo)+"\n")])}),[],!1,null,null,null);e.default=component.exports},584:function(t,e,n){"use strict";n.r(e);var r=n(25),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"w-8 h-8 mr-2 animate-spin text-gray-600 fill-orange-600 inline",attrs:{role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}}),t._v(" "),n("path",{attrs:{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"}})])}),[],!1,null,null,null);e.default=component.exports},586:function(t,e,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("db0f9a46",content,!0,{sourceMap:!1})},588:function(t,e,n){"use strict";n.r(e);var r=n(94),o=Object(r.b)({props:["title","status"],setup:function(t){return{elementTitle:t.title,elementStatus:t.status}}}),l=n(25),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex md:contents"},[n("div",{staticClass:"col-start-0 col-end-2 mr-10 md:mx-auto relative"},[n("div",{staticClass:"h-full w-6 flex items-center justify-center"},[n("div",{staticClass:"h-full w-1 pointer-events-none",class:{"bg-green-500":"success"===t.status,"bg-orange-600":"wait"===t.status,"bg-gray-300":"disabled"===t.status}})]),t._v(" "),n("div",{staticClass:"w-6 h-6 absolute top-1/2 -mt-3 rounded-full  shadow text-center",class:{"bg-green-500":"success"===t.status,"bg-orange-600":"wait"===t.status,"bg-gray-300":"disabled"===t.status}},[n("i",{staticClass:"fas fa-check-circle text-white"})])]),t._v(" "),n("div",{staticClass:"col-start-2 col-end-12 p-4 my-4 mr-auto border-2 bg-gray-700  w-full",class:{"border-green-500":"success"===t.status,"border-gray-600":"success"!==t.status,"opacity-30 pointer-events-none":"disabled"===t.status}},[n("h3",{staticClass:"max-w-md text-xl md:text-2xl font-bold mx-6 text-white",attrs:{id:"anchor-to-1"}},[t._v("\n      "+t._s(t.elementTitle)+"\n    ")]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},589:function(t,e,n){"use strict";n.r(e);var r=n(94),o=n(554),l=Object(r.b)({setup:function(){return{robot:Object(o.a)()}}}),c=n(25),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CardContainer",{attrs:{title:"Robot info"}},[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Robot state: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.robotState))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Tasks in queue: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.queueSize))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardContainer:n(561).default})},593:function(t,e,n){"use strict";n.r(e);n(47);var r=n(94),o=n(556),l=Object(r.b)({setup:function(){var t=Object(o.a)(),e=Object(r.f)(!1);Object(r.d)((function(){t.connectWallet()}));return{showAccountChoose:e,selectAccount:function(e){t.setActiveAccount(e)},addressShort:function(address){return address.slice(0,6)+"..."+address.slice(-4)},wallet:t}}}),c=n(25),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative p-1 flex items-center w-full space-x-4 justify-end"},[n("div",{staticClass:"w-128"},[t.wallet.selectedAccount.account?n("div",{staticClass:"mt-1 relative"},[n("button",{staticClass:"relative w-full bg-gray-600 text-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-white sm:text-sm",attrs:{type:"button"},on:{click:function(){return t.showAccountChoose=!t.showAccountChoose}}},[n("span",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+t.wallet.selectedAccount.account.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block truncate"},[t._v("\n              "+t._s(t.wallet.selectedAccount.account.meta.name)+" - ("+t._s(t.wallet.selectedAccount.balanceFormatted)+") - "+t._s(t.addressShort(t.wallet.selectedAccount.account.address))+"\n            ")])]),t._v(" "),n("span",{staticClass:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},[n("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showAccountChoose,expression:"showAccountChoose"}],staticClass:"absolute mt-1 w-full z-10 rounded-md bg-gray-600 shadow-lg"},[n("ul",{staticClass:"max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",attrs:{tabindex:"-1",role:"listbox","aria-labelledby":"listbox-label","aria-activedescendant":"listbox-item-3"}},t._l(t.wallet.accounts,(function(e,r){return n("li",{key:r,staticClass:"text-white  cursor-default hover:bg-indigo-500 hover:text-white select-none relative py-2 pl-3 pr-9",attrs:{id:"listbox-item-0",value:e,role:"option"},on:{click:function(){t.selectAccount(e),t.showAccountChoose=!1}}},[n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"flex-shrink-0 h-6 w-6 rounded-full",attrs:{src:"https://avatars.dicebear.com/api/identicon/"+e.address+".svg",alt:"person"}}),t._v(" "),n("span",{staticClass:"ml-3 block font-normal truncate"},[t._v("\n                  "+t._s(e.meta.name)+" - "+t._s(t.addressShort(e.address))+"\n                ")])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.wallet.selectedAccount.account.address===e.address,expression:"wallet.selectedAccount.account.address===account.address"}],staticClass:"absolute inset-y-0 right-0 flex items-center pr-4"},[n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])])])})),0)])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},594:function(t,e,n){"use strict";n.r(e);var r=n(25),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-4 min-h-200 p-2"},[n("div",{staticClass:"grid grid-cols-2 gap-4"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},602:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.defineComponent)({props:["anchorId","hrefId","title"],setup:function(t){return{props:t}}}),l=n(25),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{id:t.props.anchorId,href:t.props.hrefId}},[n("h3",{staticClass:"w-full text-xl md:text-2xl font-bold mx-6 text-white",attrs:{id:t.props.anchorId}},[t._v("\n    "+t._s(t.props.title)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},603:function(t,e,n){"use strict";n.r(e);var r=n(94),o=Object(r.b)({setup:function(){}}),l=n(25),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-4 mt-4"},[n("div",{staticClass:"container"},[n("div",{staticClass:"flex flex-col md:grid grid-cols-12 text-gray-50"},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},604:function(t,e,n){"use strict";n.r(e);var r=n(25),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen flex items-center snap-always snap-center scroll-my-10"},[n("div",{staticClass:"bg-gray-700 px-6 py-8"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},612:function(t,e,n){"use strict";n(586)},613:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,"@-webkit-keyframes SpotBody-data-v-04b63336{0%{transform:translateY(0)}to{transform:translateY(-50px)}}@keyframes SpotBody-data-v-04b63336{0%{transform:translateY(0)}to{transform:translateY(-50px)}}@-webkit-keyframes SpotLeg1Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@keyframes SpotLeg1Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@-webkit-keyframes SpotLeg1Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(6deg)}to{transform:translateY(-40px) rotate(30deg)}}@keyframes SpotLeg1Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(6deg)}to{transform:translateY(-40px) rotate(30deg)}}@-webkit-keyframes SpotLeg2Top-data-v-04b63336{0%{transform:translateY(0) rotate(-14deg)}to{transform:translateY(-40px) rotate(-20deg)}}@keyframes SpotLeg2Top-data-v-04b63336{0%{transform:translateY(0) rotate(-14deg)}to{transform:translateY(-40px) rotate(-20deg)}}@-webkit-keyframes SpotLeg2Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-30px) rotate(28deg)}}@keyframes SpotLeg2Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-30px) rotate(28deg)}}@-webkit-keyframes SpotLeg3Top-data-v-04b63336{0%{transform:translateY(0) rotate(-17deg)}to{transform:translateY(-35px) rotate(-12deg)}}@keyframes SpotLeg3Top-data-v-04b63336{0%{transform:translateY(0) rotate(-17deg)}to{transform:translateY(-35px) rotate(-12deg)}}@-webkit-keyframes SpotLeg3Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-50px) rotate(40deg)}}@keyframes SpotLeg3Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(9deg)}to{transform:translateY(-50px) rotate(40deg)}}@-webkit-keyframes SpotLeg4Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@keyframes SpotLeg4Top-data-v-04b63336{0%{transform:translateY(0) rotate(-20deg)}to{transform:translateY(-60px) rotate(-30deg)}}@-webkit-keyframes SpotLeg4Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(11deg)}to{transform:translateY(-45px) rotate(35deg)}}@keyframes SpotLeg4Bottom-data-v-04b63336{0%{transform:translateY(0) rotate(11deg)}to{transform:translateY(-45px) rotate(35deg)}}.spot[data-v-04b63336]{position:relative;width:395px;height:223px;transform:scale(.6) translateX(-80px)}.spot>img[data-v-04b63336]{display:block;position:absolute;-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.spot-body[data-v-04b63336]{width:320px;bottom:67px;left:calc(50% - 160px);z-index:2}.animated .spot-body[data-v-04b63336]{-webkit-animation-name:SpotBody-data-v-04b63336;animation-name:SpotBody-data-v-04b63336}.spot-leg1-top[data-v-04b63336]{width:162.5px;bottom:78px;left:-55px;transform-origin:100% 100%;transform:rotate(-20deg);z-index:4}.animated .spot-leg1-top[data-v-04b63336]{-webkit-animation-name:SpotLeg1Top-data-v-04b63336;animation-name:SpotLeg1Top-data-v-04b63336}.spot-leg1-bottom[data-v-04b63336]{width:151px;bottom:28px;left:-35px;transform-origin:0 0;transform:rotate(6deg);z-index:3}.animated .spot-leg1-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg1Bottom-data-v-04b63336;animation-name:SpotLeg1Bottom-data-v-04b63336}.spot-leg2-top[data-v-04b63336]{width:118.5px;bottom:80px;left:-45px;transform-origin:100% 100%;transform:rotate(-14deg);z-index:1}.animated .spot-leg2-top[data-v-04b63336]{-webkit-animation-name:SpotLeg2Top-data-v-04b63336;animation-name:SpotLeg2Top-data-v-04b63336}.spot-leg2-bottom[data-v-04b63336]{width:142.5px;bottom:46px;left:-37px;transform-origin:0 0;transform:rotate(9deg);z-index:0}.animated .spot-leg2-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg2Bottom-data-v-04b63336;animation-name:SpotLeg2Bottom-data-v-04b63336}.spot-leg3-top[data-v-04b63336]{width:143px;bottom:80px;left:186px;transform-origin:100% 100%;transform:rotate(-17deg);z-index:0}.animated .spot-leg3-top[data-v-04b63336]{-webkit-animation-name:SpotLeg3Top-data-v-04b63336;animation-name:SpotLeg3Top-data-v-04b63336}.spot-leg3-bottom[data-v-04b63336]{width:142.5px;bottom:35px;left:188px;transform-origin:0 0;transform:rotate(9deg);z-index:1}.animated .spot-leg3-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg3Bottom-data-v-04b63336;animation-name:SpotLeg3Bottom-data-v-04b63336}.spot-leg4-top[data-v-04b63336]{width:158px;bottom:80px;left:166px;transform-origin:100% 100%;transform:rotate(-20deg);z-index:4}.animated .spot-leg4-top[data-v-04b63336]{-webkit-animation-name:SpotLeg4Top-data-v-04b63336;animation-name:SpotLeg4Top-data-v-04b63336}.spot-leg4-bottom[data-v-04b63336]{width:153.5px;bottom:28px;left:188px;transform-origin:0 0;transform:rotate(11deg);z-index:1}.animated .spot-leg4-bottom[data-v-04b63336]{-webkit-animation-name:SpotLeg4Bottom-data-v-04b63336;animation-name:SpotLeg4Bottom-data-v-04b63336}",""]),r.locals={},t.exports=r},618:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m}));var r=n(14),o=(n(64),n(78)),l=n.n(o).a.create({baseURL:"https://api.merklebot.com/strelka"}),c=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("start_calibration",{account:e,signed_token:n});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("command",{account:e,signed_token:n,action:"move",value:r});case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("command",{account:e,signed_token:n,action:"pose",value:r});case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},619:function(t,e,n){"use strict";n.r(e);var r=n(94),o=Object(r.b)({emits:["showModal"],setup:function(t){t.emit;var e=Object(r.f)(!1);return{show:e,closeModal:function(){e.value=!1},openModal:function(){e.value=!0}}}}),l=n(25),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show?n("div",{staticClass:"fixed z-10 overflow-y-auto top-0 w-full left-0 "},[n("div",{staticClass:"flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"},[t._m(0),t._v(" "),n("div",{staticClass:"inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[n("div",{staticClass:"shadow-lg px-4 py-2 w-full bg-gray-600 relative"},[n("p",{staticClass:"text-lg w-max text-white font-semibold border-b border-gray-200"},[t._v("\n            Success\n          ")]),t._v(" "),n("p",{staticClass:"text-white mt-4"},[t._v("\n            Ticket successfully got. XRT for launch will be sent to your account during the next one minute in one of the next few blocks.\n          ")]),t._v(" "),n("div",{staticClass:"px-4 py-3 text-right"},[n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("\n              Got it!\n            ")])])])])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fixed inset-0 transition-opacity"},[e("div",{staticClass:"absolute inset-0 bg-gray-900 opacity-75"})])}],!1,null,null,null);e.default=component.exports},621:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(554),l=n(555),c=Object(r.defineComponent)({setup:function(){return{robot:Object(o.a)(),makeSubscanLink:l.d,addressShort:l.a}}}),d=n(25),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CardContainer",{attrs:{title:"Launch info"}},[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    launch status: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.cps.status))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Tx status: "),n("span",{staticClass:"text-yellow-500"},[t._v(t._s(t.robot.cps.launch.txStatus))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n    Transaction: "),n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.robot.cps.launch.txInfo.tx),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.robot.cps.launch.txInfo.tx)))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardContainer:n(561).default})},622:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(554),l=Object(r.defineComponent)({setup:function(){return{robot:Object(o.a)()}}}),c=(n(612),n(25)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spot",class:{animated:"idle"!==t.robot.robotState}},[n("img",{staticClass:"spot-body",attrs:{src:"/spot/animated-pose-1/spot-body.png"}}),t._v(" "),n("img",{staticClass:"spot-leg1-top",attrs:{src:"/spot/animated-pose-1/spot-leg1-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg1-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg1-bottom.png"}}),t._v(" "),n("img",{staticClass:"spot-leg2-top",attrs:{src:"/spot/animated-pose-1/spot-leg2-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg2-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg2-bottom.png"}}),t._v(" "),n("img",{staticClass:"spot-leg3-top",attrs:{src:"/spot/animated-pose-1/spot-leg3-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg3-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg3-bottom.png"}}),t._v(" "),n("img",{staticClass:"spot-leg4-top",attrs:{src:"/spot/animated-pose-1/spot-leg4-top.png"}}),t._v(" "),n("img",{staticClass:"spot-leg4-bottom",attrs:{src:"/spot/animated-pose-1/spot-leg4-bottom.png"}})])}),[],!1,null,"04b63336",null);e.default=component.exports},623:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(47),n(76),n(77),n(94)),l=n(554),c=n(558),d=n(555),m=n(584),f=n(583),v=Object(o.b)({components:{Spinner:m.default,NftInfo:f.default},setup:function(){var t=Object(l.a)(),e=Object(o.f)(null),n=Object(o.f)(null),m=Object(o.f)(null),f=Object(o.f)(null),v=Object(o.f)(null),x=Object(o.f)(null),h=Object(o.f)(null),w=function(){var o=Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.cps.launch.txStatus){r.next=15;break}return r.prev=1,r.next=4,Object(c.d)({launchTxId:"".concat(t.cps.launch.txInfo.blockNumber,"-").concat(t.cps.launch.txInfo.txIndex)});case 4:if(o=r.sent,console.log(o),o&&(t.cps.launch.recordData=o,e.value=o,n.value={ipfsCid:o.ipfs_cid,sender:o.sender,nonce:o.nonce,createdAt:o.created_at},m.value=o.launch_tx_id,f.value=o.datalog_tx_id,v.value=o.crust_tx_id,x.value=o.nft_order_id),!x.value){r.next=11;break}return r.next=10,Object(c.c)(x.value);case 10:h.value=r.sent;case 11:r.next=15;break;case 13:r.prev=13,r.t0=r.catch(1);case 15:setTimeout(w,1e3);case 16:case"end":return r.stop()}}),r,null,[[1,13]])})));return function(){return o.apply(this,arguments)}}();return Object(o.d)((function(){w()})),{robot:t,launchData:e,traceInfo:n,launchTxId:m,datalogTxId:f,crustTxId:v,addressShort:function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""},makeSubscanLink:d.d,makeIpfsFolderLink:c.b,nftOrderInfo:h}}}),x=v,h=n(25),component=Object(h.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-4 min-h-200 p-2"},[n("div"),t._v(" "),n("div",{staticClass:"mt-4"},[n("CardContainer",{attrs:{title:"Saved data"}},[null!==t.launchData?n("div",[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Robonomics Launch Tx: "),n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.launchTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.launchTxId)))])]),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Record data on IPFS: "),t.traceInfo.ipfsCid?n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeIpfsFolderLink(t.traceInfo),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.traceInfo.ipfsCid)))]):n("Spinner")],1),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Robonomics Datalog Tx: "),t.datalogTxId?n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("robonomics",t.datalogTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.datalogTxId)))]):n("Spinner")],1),t._v(" "),n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Crust Storage Order Tx: "),t.crustTxId?n("a",{staticClass:"text-yellow-500",attrs:{href:t.makeSubscanLink("crust",t.crustTxId),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.addressShort(t.crustTxId)))]):n("Spinner")],1),t._v(" "),n("div",{staticClass:"flex items-left justify-left m-4"},[n("video",{attrs:{src:t.makeIpfsFolderLink(t.traceInfo)+"/h264_camera.mp4",type:"video/mp4",controls:""}})])]):n("div",[n("p",{staticClass:"text-md mt-2 text-white"},[t._v("\n          Your launch data will appear here after processing drawing and saving all data\n        ")])])]),t._v(" "),n("CardContainer",[n("NftInfo")],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:n(584).default,CardContainer:n(561).default,NftInfo:n(583).default})},774:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m}));var r=n(14),o=(n(64),n(78)),l=n.n(o).a.create({baseURL:"https://api.merklebot.com/videoserver"}),c=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("token",{account:e});case 2:return n=t.sent,t.abrupt("return",n.data.token);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("control",{account:e,signed_token:n,control_name:"move",velocity:r});case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.post("control",{account:e,signed_token:n,control_name:"zoom",zoom_absolute:r});case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},887:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(0)),l=n(618),c=n(554),d=n(556),m=Object(o.defineComponent)({setup:function(){var t=Object(d.a)(),e=Object(c.a)(),n=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.b)(t.selectedAccount.account.address,e.signedRobotToken,r);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(o.onMounted)((function(){document.addEventListener("keydown",(function(t){var e=t.key;"w"===e?n({x:.45,y:0,r:0}):"a"===e?n({x:0,y:.4,r:0}):"s"===e?n({x:-.4,y:0,r:0}):"d"===e?n({x:0,y:-.4,r:0}):"q"===e?n({x:0,y:0,r:.4}):"e"===e&&n({x:0,y:0,r:-.4})}),!1)})),{moveCommand:n}}}),f=m,v=n(25),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-3 gap-x-4"},[n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:1,y:0})}}},[t._v("\n    Up\n  ")]),t._v(" "),n("div"),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:-1})}}},[t._v("\n    Left\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:-1,y:0})}}},[t._v("\n    Down\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.moveCommand({x:0,y:1})}}},[t._v("\n    Right\n  ")])])}),[],!1,null,null,null);e.default=component.exports},888:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(64),n(0)),l=n(618),c=n(554),d=n(556),m=Object(o.defineComponent)({setup:function(){var t=Object(d.a)(),e=Object(c.a)(),n=function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.c)(t.selectedAccount.account.address,e.signedRobotToken,r);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return{poseCommand:n}}}),f=m,v=n(25),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-2 gap-x-4"},[n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("stance")}}},[t._v("\n    Stance sides\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("stance_0")}}},[t._v("\n    Stance default\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("seat")}}},[t._v("\n    Seat\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("stand")}}},[t._v("\n    Stand\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("bow")}}},[t._v("\n    Bow\n  ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-1 bg-gray-200 text-gray-800\n      hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:function(){return t.poseCommand("bow_b")}}},[t._v("\n    Look up\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);