webpackJsonp([0,1],{56:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Task",data:function(){return{date:"",totalTime:"",comment:""}},methods:{save:function(){var t={name:"Armin",avatar:"https://avatars0.githubusercontent.com/u/10386102?v=3&s=460",date:this.date,totalTime:this.totalTime,comment:this.comment};this.$store.dispatch("save",t),this.$store.dispatch("addTotalTime",this.totalTime),this.$router.go(-1)}}}},112:function(t,e,a){var c,o;c=a(56);var s=a(117);o=c=c||{},"object"!=typeof c.default&&"function"!=typeof c.default||(o=c=c.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=c},117:function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._c("div",{staticClass:"form-horizontal"},[t._c("div",{staticClass:"form-group"},[t._c("div",{staticClass:"col-sm-6"},[t._c("label",[t._v("日期")]),t._v(" "),t._c("div",[t._c("el-date-picker",{attrs:{type:"date",placeholder:"Date",format:"yyyy-MM-dd"},model:{value:t.date,callback:function(e){t.date=e}}})],1)]),t._v(" "),t._c("div",{staticClass:"col-sm-6"},[t._c("label",[t._v("时间")]),t._v(" "),t._c("el-input",{attrs:{type:"number",placeholder:"Hours"},model:{value:t.totalTime,callback:function(e){t.totalTime=e}}})],1)]),t._v(" "),t._c("div",{staticClass:"form-group"},[t._c("div",{staticClass:"col-sm-12"},[t._c("label",[t._v("备注")]),t._v(" "),t._c("el-input",{attrs:{placeholder:"Comment"},model:{value:t.comment,callback:function(e){t.comment=e}}})],1)]),t._v(" "),t._c("el-button",{attrs:{type:"primary"},on:{click:function(e){t.save()}}},[t._v("保存")]),t._v(" "),t._c("router-link",{attrs:{to:"/time-entries"}},[t._c("el-button",{attrs:{type:"danger"}},[t._v("取消")])],1),t._v(" "),t._c("hr")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.78f6a1f94375d78e6248.js.map