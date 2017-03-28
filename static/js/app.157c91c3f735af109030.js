webpackJsonp([3,1],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(62),s=a(i),r=n(3),l=a(r),o=n(122),c=a(o),u=n(121),d=a(u),m=n(95),f=a(m),v=n(111),p=a(v),_=n(55),h=a(_),T=n(112),x=a(T),g=n(115),y=a(g);n(108),n(109),l.default.use(c.default),l.default.use(d.default),l.default.use(f.default);var b=[{path:"/",component:x.default},{path:"/home",component:x.default},{path:"/time-entries",component:y.default,children:[{path:"create-task",component:function(t){return n.e(0,function(e){var n=[e(114)];t.apply(null,n)}.bind(this))}}]}],C=new c.default({routes:b});new l.default((0,s.default)({el:"#app",router:C,store:h.default},p.default))},55:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),s=a(i),r=n(123),l=a(r);s.default.use(l.default);var o={totalTime:3,list:[{name:"user",avatar:"https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256",date:"2016-12-25",totalTime:"1",comment:"晚上过圣诞节"},{name:"Armin",avatar:"https://avatars0.githubusercontent.com/u/10386102?v=3&s=460",date:"2017-03-16",totalTime:"2",comment:"3周年纪念日"}]};e.default=new l.default.Store({state:o,mutations:{save:function(t,e){t.list.push(e),console.log(e)},addTotalTime:function(t,e){t.totalTime+=parseInt(e)},decTotalTime:function(t,e){t.totalTime-=e},deletePlan:function(t,e){t.list.splice(e,1)}},actions:{save:function(t,e){var n=t.commit;n("save",e)},addTotalTime:function(t,e){var n=t.commit;n("addTotalTime",e)},decTotalTime:function(t,e){var n=t.commit;n("decTotalTime",e)},deletePlan:function(t,e){var n=t.commit;n("deletePlan",e)}}})},56:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(113),s=a(i);e.default={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){}},components:{sidebar:s.default}}},57:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",methods:{doSwitchTab:function(){this.$root.$data.activeIndex="2"}}}},58:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{time:function(){return this.$store.state.totalTime}}}},60:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TimeEntry",computed:{plans:function(){return this.$store.state.list}},methods:{deletePlan:function(t){this.$store.dispatch("decTotalTime",this.plans[t].totalTime),this.$store.dispatch("deletePlan",t),this.$notify({title:"已删除",message:"删除任务",type:"success"})},dateFilter:function(t){return t instanceof Date&&(t=t.toLocaleDateString().replace(/\//g,"-")),t}}}},108:function(t,e){},109:function(t,e){},110:function(t,e){},111:function(t,e,n){var a=n(6)(n(56),n(116),null,null);t.exports=a.exports},112:function(t,e,n){var a=n(6)(n(57),n(119),null,null);t.exports=a.exports},113:function(t,e,n){var a=n(6)(n(58),n(118),null,null);t.exports=a.exports},115:function(t,e,n){n(110);var a=n(6)(n(60),n(117),null,null);t.exports=a.exports},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark","default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("div",{staticClass:"container"},[n("el-menu-item",{attrs:{index:"0"}},[t._v("\n          计划板 "),n("i",{staticClass:"el-icon-time"})]),t._v(" "),n("router-link",{attrs:{to:"/home"}},[n("el-menu-item",{attrs:{index:"1"}},[t._v("首页")])],1),t._v(" "),n("router-link",{attrs:{to:"/time-entries"}},[n("el-menu-item",{attrs:{index:"2"}},[t._v("计划列表")])],1)],1)]),t._v(" "),n("div",{staticClass:"container",staticStyle:{"margin-top":"2em"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[n("sidebar")],1)]),t._v(" "),n("el-col",{attrs:{span:12}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",["/time-entries/create-task"!==t.$route.path?n("router-link",{attrs:{to:"/time-entries/create-task"}},[n("el-button",{attrs:{type:"primary"}},[t._v("创建")])],1):t._e(),t._v(" "),"/time-entries/create-task"===t.$route.path?n("div",[n("h3",[t._v("创建")])]):t._e(),t._v(" "),n("hr"),t._v(" "),n("router-view"),t._v(" "),n("div",{staticClass:"time-entries"},[t.plans.length?t._e():n("p",[n("strong",[t._v("还没有任何计划")])]),t._v(" "),n("div",{staticClass:"list-group"},t._l(t.plans,function(e,a){return n("el-card",{staticClass:"box-item"},[n("el-row",[n("el-col",{attrs:{span:4}},[n("img",{staticClass:"avatar img-circle img-responsive",attrs:{src:e.avatar}}),t._v(" "),n("p",{staticClass:"text-center"},[n("strong",[t._v("\n                  "+t._s(e.name)+"\n                ")])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"text-center time-block"},[n("h3",{staticClass:"list-group-item-text total-time"},[n("i",{staticClass:"glyphicon glyphicon-time"}),t._v(" "),n("span",{staticStyle:{"line-height":"28px"}},[t._v(t._s(e.totalTime))])]),t._v(" "),n("el-tag",{attrs:{type:"primary"}},[n("i",{staticClass:"el-icon-date"}),t._v("\n                "+t._s(t.dateFilter(e.date))+"\n              ")])],1)]),t._v(" "),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"comment-section"},[n("p",[t._v(t._s(e.comment))])])]),t._v(" "),n("el-col",{attrs:{span:2}},[n("i",{staticClass:"el-icon-circle-close delete-button",on:{click:function(e){t.deletePlan(a)}}})])],1)],1)}))])],1)},staticRenderFns:[]}},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",[n("div",{slot:"header"},[t._v("\n    已有时长\n  ")]),t._v(" "),n("div",[n("h2",[t._v(t._s(t.time)+" 小时")])])])},staticRenderFns:[]}},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",[n("h1",[t._v("任务追踪")]),t._v(" "),n("router-link",{attrs:{to:"/time-entries"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.doSwitchTab()}}},[t._v("创建一个任务")])],1)],1)},staticRenderFns:[]}},124:function(t,e){}});
//# sourceMappingURL=app.157c91c3f735af109030.js.map