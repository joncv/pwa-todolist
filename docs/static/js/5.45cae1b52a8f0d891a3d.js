webpackJsonp([5],{441:function(t,e,o){function r(t){o(472)}var a=o(36)(o(450),o(483),r,"data-v-73056941",null);t.exports=a.exports},450:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(57),a=o.n(r),s=o(58);e.default={name:"detail",data:function(){return{currentTodo:null,todoContent:"",todoType:""}},methods:a()({},o.i(s.b)("appShell/appHeader",["setAppHeader"]),o.i(s.b)("appShell/appBottomNavigator",["hideBottomNav"]),o.i(s.b)("appShell/appSnackbar",["showSnackbar"]),o.i(s.b)("todos",["setTodo","setTodoStatus"])),computed:a()({},o.i(s.a)("todo",["todos"]),{cardTitle:function(){switch(this.todoType){case"ImpEmg":return"重要-紧急";case"ImpNotEmg":return"重要-不紧急";case"NotImpEmg":return"不重要-紧急";case"NotImpNotEmg":return"不重要-不紧急";default:return"Error: type not found"}},color:function(){switch(this.todoType){case"ImpEmg":return"red";case"ImpNotEmg":return"green";case"NotImpEmg":return"orange";case"NotImpNotEmg":return"blue";default:return"red"}}}),activated:function(){var t=this.$route.params.id;t&&(this.currentTodo=this.todos.get(t))?(this.currentTodo=this.todos.get(t),this.todoType=this.currentTodo.get("type"),this.todoContent=this.currentTodo.get("content")):(this.showSnackbar({type:"error",msg:"参数错误"}),this.$router.go(-1)),this.setAppHeader({show:!0,title:"查看待办事项",showMenu:!1,showBack:!0,showLogo:!1,needBackConfirm:!1,actions:[{icon:"edit",route:{name:"edit",params:{type:"edit",id:t}}}]}),this.hideBottomNav()}}},464:function(t,e,o){e=t.exports=o(439)(!0),e.push([t.i,".card-title[data-v-73056941]{color:#fff}","",{version:3,sources:["E:/PWA/pwa-todolist/src/pages/Detail.vue"],names:[],mappings:"AACA,6BACI,UAAY,CACf",file:"Detail.vue",sourcesContent:["\n.card-title[data-v-73056941] {\r\n    color: #fff;\n}\r\n\r\n"],sourceRoot:""}])},472:function(t,e,o){var r=o(464);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);o(440)("5a1653ea",r,!0)},483:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pa-2",attrs:{fluid:""}},[o("v-card",[o("v-card-title",{staticClass:"card-title",class:t.color},[t._v("\n            "+t._s(t.cardTitle)+"\n        ")]),t._v(" "),o("v-card-text",{staticClass:"text-xs-left",domProps:{innerHTML:t._s(t.todoContent)}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.45cae1b52a8f0d891a3d.js.map