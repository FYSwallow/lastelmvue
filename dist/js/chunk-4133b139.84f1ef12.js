(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4133b139"],{"179b":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-address"},[r("header",{staticClass:"search"},[r("div",{staticClass:"search-left"},[r("span",[t._v(t._s(t.cityName))]),r("van-icon",{staticClass:"icon",staticStyle:{transform:"rotate(90deg)"},attrs:{name:"play"}})],1),r("div",{staticClass:"search-right"},[r("van-search",{attrs:{placeholder:"请输入地址",shape:"round","show-action":""},on:{search:t.onSearch},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}},[r("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])])],1)]),r("section",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.warning,expression:"warning"}],staticClass:"point"},[r("p",[t._v("找不到地址？")]),r("p",[t._v("请尝试输入小区、写字楼或学校名")]),r("p",[t._v("详细地址（如门牌号）可稍后输入哦。")])]),t.searchList.length?r("div",{staticClass:"address-list"},[r("ul",t._l(t.searchList,(function(e,s){return r("li",{key:s,staticClass:"address-item",on:{click:function(r){return t.goAdd(e)}}},[r("h3",{staticClass:"item-title"},[t._v(t._s(e.name))]),r("p",{staticClass:"item-description"},[t._v(t._s(e.address))])])})),0)]):t._e()])])},n=[],a=(r("a4d3"),r("4de4"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("96cf"),r("1da1")),i=r("ade3"),c=r("2f62"),o=r("365c");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={data:function(){return{address:"",warning:!0,cityName:"定位失败",searchList:[]}},computed:u({},Object(c["c"])(["cityInfo"])),mounted:function(){this.initData()},methods:u({},Object(c["b"])(["getFoodAddress","getCityInfo"]),{initData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["q"])();case 2:e=t.sent,200===e.status&&(this.cityName=e.data.name,this.getCityInfo(e.data));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSearch:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.cityInfo.id,t.next=3,Object(o["v"])(e,this.address);case 3:r=t.sent,r.data.length&&(this.warning=!1,this.searchList=r.data);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goAdd:function(t){this.getFoodAddress({address:t}),this.$router.go(-1)}})},h=l,p=(r("be99"),r("2877")),b=Object(p["a"])(h,s,n,!1,null,"e3be6c34",null);e["default"]=b.exports},"24bb":function(t,e,r){},be99:function(t,e,r){"use strict";var s=r("24bb"),n=r.n(s);n.a}}]);
//# sourceMappingURL=chunk-4133b139.84f1ef12.js.map