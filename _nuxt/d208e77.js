(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{660:function(e,t,n){"use strict";n.r(t);var l={name:"Toggle",props:["checked","label"],data:function(){return{active:!1}},methods:{toggled:function(){console.log("toggled"),this.active=!this.active,this.$emit("toggled",{checked:this.active})}}},o=n(27),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"relative inline-block w-10 mr-2 align-middle select-none",on:{click:e.toggled}},[n("input",{staticClass:" outline-none focus:outline-none  duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer",class:{"bg-blue-500 right-0":e.active,"right-4":!e.active},attrs:{type:"checkbox",name:"toggle"}}),e._v(" "),n("label",{staticClass:"block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"})]),e._v(" "),n("span",{staticClass:" text-sm text-gray-500 dark:text-gray-200"},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,"1097acff",null);t.default=component.exports}}]);