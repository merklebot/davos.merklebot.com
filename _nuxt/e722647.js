(window.webpackJsonp=window.webpackJsonp||[]).push([[34,10,30],{555:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"f",(function(){return y})),n.d(e,"j",(function(){return k})),n.d(e,"c",(function(){return R})),n.d(e,"e",(function(){return j})),n.d(e,"i",(function(){return O})),n.d(e,"g",(function(){return _})),n.d(e,"h",(function(){return A})),n.d(e,"d",(function(){return C})),n.d(e,"a",(function(){return S}));var r,c,o=n(14),f=(n(58),n(76),n(47),n(64),n(579)),l=n(576),d=n.n(l),v=n(578),h=n(917),m=n(862),x=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=2;break}return t.abrupt("return",r);case 2:return(r=new f.a({endpoint:"wss://kusama.rpc.robonomics.network"})).setAccountManager(new d.a(v.a)),t.next=6,r.run();case 6:return t.next=8,d.a.initPlugin(r.accountManager.keyring);case 8:return t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.next=5,e.accountManager.getAccounts();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return e=t.sent,t.next=5,e.accountManager.selectAccountByAddress(address);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(address,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c&&c(),t.next=3,x();case 3:return n=t.sent,t.next=6,n.account.getBalance(address,e);case 6:c=t.sent;case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),R=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return r=t.sent,c=r.launch.send(e,f.b.cidToHex(n)),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return r=t.sent,c=r.api.tx.balances.transfer(e,n),t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c,o,f,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return r=t.sent,t.next=5,Object(h.i)(r.accountManager.account.meta.source);case 5:if(c=t.sent,!(o=null==c||null===(n=c.signer)||void 0===n?void 0:n.signRaw)){t.next=13;break}return t.next=10,o({address:r.accountManager.account.address,data:Object(m.a)(e),type:"bytes"});case 10:return f=t.sent,l=f.signature,t.abrupt("return",l);case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return n=t.sent,t.next=5,n.accountManager.signAndSend(e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:return n=t.sent,t.next=5,n.api.tx.utility.batch(e);case 5:return r=t.sent,t.next=8,n.accountManager.signAndSend(r);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(t,e){return"https://".concat(t,".subscan.io/extrinsic/").concat(e)},S=function(address){return address?address.slice(0,6)+"..."+address.slice(-4):""}},556:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(14),c=(n(64),n(566),n(21),n(567),n(568),n(95)),o=n(557),f=n(555),l=Object(c.c)("wallet",{state:function(){return{accounts:[],walletConnectionStatus:"wait",selectedAccount:{account:null,balanceRaw:null,balanceFormatted:null,tickets:[]}}},actions:{connectWallet:function(){var t=this;Object(f.b)().then((function(e){console.log("accounts",e),t.accounts=e;var n=localStorage.getItem("selectedAccountAddress"),r=e.find((function(a){return a.address===n}));t.setActiveAccount(null!=r?r:e[0]),t.walletConnectionStatus="connected"})).catch((function(e){t.walletConnectionStatus="error"}))},updateTicketsList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.selectedAccount.account){e.next=4;break}return e.next=3,Object(o.e)(t.selectedAccount.account.address);case 3:t.selectedAccount.tickets=e.sent;case 4:case"end":return e.stop()}}),e)})))()},setActiveAccount:function(t){var e=this;this.selectedAccount.account=t,Object(f.f)(t.address),localStorage.setItem("selectedAccountAddress",t.address),Object(f.j)(this.selectedAccount.account.address,(function(t){var n=t.free,r=t.feeFrozen,c=n.sub(r);e.selectedAccount.balanceRaw=c,e.selectedAccount.balanceFormatted=(c*Math.pow(10,-9)).toFixed(4)+" XRT"}))}}})},557:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return v})),n.d(e,"f",(function(){return h})),n.d(e,"c",(function(){return w}));var r=n(14),c=(n(76),n(64),n(79)),o=n.n(c).a.create({baseURL:"https://api.merklebot.com"}),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,c,f,l,d,v,h,m,x,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sender,r=void 0===n?null:n,c=e.nonce,f=void 0===c?null:c,l=e.launchTxId,d=void 0===l?null:l,v=e.skip,h=void 0===v?0:v,m=e.limit,x=void 0===m?1e4:m,t.next=3,o.get("robonomics-launch-traces",{params:{sender:r,nonce:f,skip:h,limit:x,launch_tx_id:d}});case 3:return w=t.sent,t.abrupt("return",w.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("filecoin-finder/providers/"+e,{});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("spot-demo-ticket/checkout",{quantity:"1",account:e});case 2:return n=t.sent,t.abrupt("return",n.data.id);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("spot-demo/tickets",{params:{customer:e,spent:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,form){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("faucet/retrieve",{account:e,form:form});case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m={v1:{begin:0,end:Date.parse("2022-08-22 16:41:19 +0000")},v2:{begin:Date.parse("2022-08-22 16:41:19 +0000")+1,end:1/0}},x="https://merklebot.mypinata.cloud/ipfs",w=function(t){var e=t.ipfsCid,n=t.sender,r=t.nonce,c=t.createdAt,o=Date.parse(c+"+0000");switch(!0){case o>m.v1.begin&&o<m.v1.end:return"".concat(x,"/").concat(e)+"/spot/spot.merklebot.com/spot/traces"+"/user-".concat(n,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(r,"-").concat(c);case o>m.v2.begin&&o<m.v2.end:return"".concat(x,"/").concat(e)+"/user-".concat(n,"-cps-4FNQo2tK6PLeEhNEUuPePs8B8xKNwx15fX7tC2XnYpkC8W1j-session-").concat(r,"-").concat(c);default:console.error({msg:"can't identify version",createdAt:c,versionsTime:m})}}},560:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}));var r=n(95),c=Object(r.c)("dashboardParameters",{state:function(){return{codeSampleParameter:!1}},actions:{setCodeSampleParameter:function(t){this.codeSampleParameter=t}}}),o=Object(r.c)("dAppParameters",{state:function(){return{payWithOption:"ticket",currentDrawingSegments:[]}}})},562:function(t,e,n){var r=n(8),c=n(33),o=n(20),f=/"/g,l=r("".replace);t.exports=function(t,e,n,r){var d=o(c(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+l(o(r),f,"&quot;")+'"'),v+">"+d+"</"+e+">"}},563:function(t,e,n){var r=n(9);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},564:function(t,e,n){var r=n(8);t.exports=r(1..valueOf)},566:function(t,e,n){"use strict";var r=n(1),c=n(77).find,o=n(160),f="find",l=!0;f in[]&&Array(1).find((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(f)},567:function(t,e,n){"use strict";var r=n(1),c=n(562);r({target:"String",proto:!0,forced:n(563)("sub")},{sub:function(){return c(this,"sub","","")}})},568:function(t,e,n){"use strict";var r=n(1),c=n(3),o=n(8),f=n(65),l=n(564),d=n(223),v=n(9),h=c.RangeError,m=c.String,x=Math.floor,w=o(d),y=o("".slice),k=o(1..toFixed),R=function(t,e,n){return 0===e?n:e%2==1?R(t,e-1,n*t):R(t*t,e/2,n)},j=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=x(r/1e7)},O=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=x(n/t),n=n%t*1e7},_=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+w("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==k(8e-5,3)||"1"!==k(.9,0)||"1.25"!==k(1.255,2)||"1000000000000000128"!==k(0xde0b6b3a7640080,0)}))||!v((function(){k({})}))},{toFixed:function(t){var e,n,r,c,o=l(this),d=f(t),data=[0,0,0,0,0,0],v="",x="0";if(d<0||d>20)throw h("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return m(o);if(o<0&&(v="-",o=-o),o>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(o*R(2,69,1))-69)<0?o*R(2,-e,1):o/R(2,e,1),n*=4503599627370496,(e=52-e)>0){for(j(data,0,n),r=d;r>=7;)j(data,1e7,0),r-=7;for(j(data,R(10,r,1),0),r=e-1;r>=23;)O(data,1<<23),r-=23;O(data,1<<r),j(data,1,1),O(data,2),x=_(data)}else j(data,0,n),j(data,1<<-e,0),x=_(data)+w("0",d);return x=d>0?v+((c=x.length)<=d?"0."+w("0",d-c)+x:y(x,0,c-d)+"."+y(x,c-d)):v+x}})},573:function(t,e){},575:function(t,e){},577:function(t,e){},583:function(t,e,n){"use strict";n.r(e);var r=n(94),c=n(560),o=Object(r.b)({setup:function(){return{dappParameters:Object(c.a)()}}}),f=n(25),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full py-4"},[n("div",{staticClass:"flex flex-row"},[n("button",{staticClass:"basis-1/2 uppercase py-2 px-4 text-gray-800 text-md",class:{"bg-orange-600 text-white border-b-0":"ticket"===t.dappParameters.payWithOption,"bg-gray-200 text-gray-800  hover:bg-gray-800 hover:bg-gray-100 hover:text-white":"XRT"===t.dappParameters.payWithOption},attrs:{type:"button",disabled:"ticket"===t.dappParameters.payWithOption},on:{click:function(e){t.dappParameters.payWithOption="ticket"}}},[t._v("\n      Credit Card\n    ")]),t._v(" "),n("button",{staticClass:"basis-1/2 uppercase py-2 px-4 text-gray-800 text-md",class:{"bg-orange-600 text-white border-b-0":"XRT"===t.dappParameters.payWithOption,"bg-gray-200 text-gray-800 hover:bg-gray-800 hover:bg-gray-100 hover:text-white":"ticket"===t.dappParameters.payWithOption},attrs:{type:"button",disabled:"XRT"===t.dappParameters.payWithOption},on:{click:function(e){t.dappParameters.payWithOption="XRT"}}},[t._v("\n      Crypto\n    ")])]),t._v(" "),n("div",[n("div",{staticClass:"flex flex-row "},["XRT"===t.dappParameters.payWithOption?t._t("XRT"):t._e(),t._v(" "),"ticket"===t.dappParameters.payWithOption?t._t("ticket"):t._e()],2)])])}),[],!1,null,null,null);e.default=component.exports},713:function(t,e,n){"use strict";n.r(e);var r=n(14),c=(n(48),n(21),n(64),n(94)),o=n(556),f=n(557),l="https://js.stripe.com/v3",d=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,v="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",h=null,m=function(t){return null!==h||(h=new Promise((function(e,n){if("undefined"!=typeof window)if(window.Stripe&&t&&console.warn(v),window.Stripe)e(window.Stripe);else try{var script=function(){for(var t=document.querySelectorAll('script[src^="'.concat(l,'"]')),i=0;i<t.length;i++){var script=t[i];if(d.test(script.src))return script}return null}();script&&t?console.warn(v):script||(script=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",script=document.createElement("script");script.src="".concat(l).concat(e);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(script),script}(t)),script.addEventListener("load",(function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))})),script.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(t){return void n(t)}else e(null)}))),h},x=function(t,e,n){if(null===t)return null;var r=t.apply(void 0,e);return function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.31.0",startTime:e})}(r,n),r},w=Promise.resolve().then((function(){return m(null)})),y=!1;w.catch((function(t){y||console.warn(t)}));var k,R=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];y=!0;var r=Date.now();return w.then((function(t){return x(t,e,r)}))},j=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!k){t.next=2;break}return t.abrupt("return",k);case 2:return t.next=4,R("pk_live_51IvSZKJXrK78CsUSfSb5Jyjo3AkjZ2k6ZMr0c8miMMIcWcQiBKtCapD5ho2Bk45MjMh3QTlpLamkrOiG9gMJzMh100iGhW3ehO");case 4:return k=t.sent,t.abrupt("return",k);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=Object(c.b)({setup:function(){var t=Object(o.a)(),e=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)(t.selectedAccount.account.address);case 2:return n=e.sent,e.next=5,j();case 5:return r=e.sent,e.next=8,r.redirectToCheckout({sessionId:n});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=Object(c.a)((function(){return t.selectedAccount.balanceRaw*Math.pow(10,-9)>1})),l=Object(c.a)((function(){return t.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length>=1}));return{wallet:t,checkout:e,hasEnoughXrt:n,hasTicket:l}}}),_=O,A=n(25),component=Object(A.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",[n("PayWithToggle",{scopedSlots:t._u([{key:"ticket",fn:function(){return[n("div",{staticClass:"w-full px-2 bg-gray-600 relative"},[n("p",{staticClass:"text-md my-4 mb-2 text-white text-center"},[t._v("\n            You have "+t._s(t.wallet.selectedAccount.tickets.filter((function(t){return!1===t.spent})).length)+"\n            tickets\n          ")]),t._v(" "),n("button",{staticClass:"uppercase text-md w-full py-2 my-2 px-4 bg-gray-200 text-gray-800\n              hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{type:"button"},on:{click:t.checkout}},[n("span",[t._v("Get ticket")]),t._v(" "),n("img",{staticClass:"h-6 ml-2 inline-block bg-indigo-400 rounded-lg",attrs:{src:"stripe.svg"}})])])]},proxy:!0},{key:"XRT",fn:function(){return[n("div",{staticClass:"w-full px-2 bg-gray-600 relative"},[n("p",{staticClass:"text-md my-4 mb-16 text-white text-center"},[t._v("\n            You have "+t._s(t.wallet.selectedAccount.balanceFormatted)+"\n          ")]),t._v(" "),n("a",{staticClass:"absolute bottom-0 inset-x-0 uppercase py-2 my-2 mx-2 px-2 bg-gray-200 text-gray-800\n              text-md text-center hover:bg-gray-800 hover:bg-gray-100 hover:text-white",attrs:{href:"https://www.kraken.com/prices/robonomics.network",target:"_blank",rel:"noopener noreferrer"}},[n("span",[t._v("Get XRT")])])])]},proxy:!0}])})],1),t._v(" "),t.hasTicket||t.hasEnoughXrt?n("span",{staticClass:"text-md my-2 text-white"},[t._v("\n    It is enough to launch the robot by\n    "),t.hasTicket?n("span",[t._v(" ticket")]):t._e(),t._v(" "),t.hasTicket&&t.hasEnoughXrt?n("span",[t._v(" or")]):t._e(),t._v(" "),t.hasEnoughXrt?n("span",[t._v(" XRT")]):t._e(),t._v(".\n  ")]):n("span",{staticClass:"text-md my-2 text-white"},[t._v("\n    It is not enough to launch the robot. Purchase a ticket "),n("em",[t._v("or")]),t._v(" get\n    XRT.\n  ")])])}),[],!1,null,"e51abb58",null);e.default=component.exports;installComponents(component,{PayWithToggle:n(583).default})}}]);