webpackJsonp([0],{443:function(t,e,o){function n(t){o(474)}var a=o(36)(o(452),o(485),n,"data-v-c1a62de4",null);t.exports=a.exports},447:function(t,e,o){"use strict";o.d(e,"c",function(){return n}),o.d(e,"b",function(){return a}),o.d(e,"a",function(){return s});var n=function(t){return/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(t)},a=function(t){return t.replace(/\s/g,"")},s=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in e)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[o]:("00"+e[o]).substr((""+e[o]).length)));return t}},448:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["show"],methods:{closeAppMask:function(){this.$emit("close-mask")}}}},449:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(57),a=o.n(n),s=o(447),i=o(58);e.default={data:function(){return{}},props:{title:{required:!0,type:String},color:{required:!0,type:String},data:{required:!0,type:Array}},methods:a()({},o.i(i.b)("todo",["setTodoStatus"]),{onSwipeUp:function(){console.log("onSwipeUp")},onPanRightStart:function(t){console.log("onPanRightStart"),t.get("status")||(this.$refs["list-"+t.id][0].style.border="1px dashed rgba(0,0,0,0.2)",this.$refs["list-"+t.id][0].style.fontWeight="bold")},onPanLeftStart:function(t){t.get("status")&&(this.$refs["list-"+t.id][0].style.border="1px dashed rgba(0,0,0,0.2)"),this.$refs["list-"+t.id][0].style.fontWeight="bold"},onPanEnd:function(t){console.log("panend"),this.$refs["list-"+t.id][0].style.border="",this.$refs["list-"+t.id][0].style.fontWeight=""},editTodo:function(t){console.log("edit todo"),console.log(t.id),this.$router.push({name:"edit",params:{type:"edit",id:t.id}})},readTodoDetail:function(t){console.log("read todo detail"),console.log(t),this.$emit("previewTodo",t.id)},toggleTodoStatus:function(t){this.setTodoStatus({id:t.id,status:!t.get("status")})},setTodoDone:function(t){t.get("status")||this.setTodoStatus({id:t.id,status:!0})},setTodoUnDone:function(t){t.get("status")&&this.setTodoStatus({id:t.id,status:!1})},getUpdatedTime:function(t){return new Date(t.updatedAt).format("yyyy-MM-dd hh:mm:ss")}}),created:function(){Date.prototype.format=s.a}}},452:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(457),a=o.n(n),s=o(57),i=o.n(s),r=o(479),d=o.n(r),c=o(478),l=(o.n(c),o(58)),p=o(121),u=o(168);e.default={name:"todo",components:{ListBlock:d.a},data:function(){return{done:!1}},computed:i()({},o.i(l.a)("todo",["todos"]),{ImpEmg:function(){return this.filterTodos("ImpEmg")},ImpNotEmg:function(){return this.filterTodos("ImpNotEmg")},NotImpEmg:function(){return this.filterTodos("NotImpEmg")},NotImpNotEmg:function(){return this.filterTodos("NotImpNotEmg")}}),methods:i()({},o.i(l.b)("appShell/appHeader",["setAppHeader"]),o.i(l.b)("appShell/appBottomNavigator",["showBottomNav"]),o.i(l.b)("appShell/appSnackbar",["showSnackbar"]),o.i(l.b)("todo",["initTodos","setTodoStatus"]),{edit:function(){console.log("list clicked")},previewTodo:function(t){console.log(t),this.maskShow=!0,this.$router.push({name:"detail",params:{type:"edit",id:t}})},filterTodos:function(t){return this.todos?{done:[].concat(a()(this.todos.values())).filter(function(e){return e.get("type")===t&&!0===e.get("status")}).sort(function(t,e){return e.updatedAt-t.updatedAt}),undone:[].concat(a()(this.todos.values())).filter(function(e){return e.get("type")===t&&!1===e.get("status")}).sort(function(t,e){return e.updatedAt-t.updatedAt})}:{}}}),activated:function(){console.log("activating page"),this.setAppHeader({title:"待办事项",show:!0,showMenu:!0,showBack:!1,actions:[{icon:"add",route:{name:"edit",params:{type:"add",id:""}}}]}),this.showBottomNav()},created:function(){var t=this;p.a.$on("app-bottom-navigator:click-nav",function(e){"done"===e.name?t.done=!0:t.done=!1}),o.i(u.b)().then(function(e){console.log(e),t.initTodos(e)},function(e){t.showSnackbar({type:"error",msg:o.i(u.c)(e.code)}),console.log(e)})}}},456:function(t,e,o){t.exports={default:o(458),__esModule:!0}},457:function(t,e,o){"use strict";e.__esModule=!0;var n=o(456),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return(0,a.default)(t)}},458:function(t,e,o){o(123),o(460),t.exports=o(30).Array.from},459:function(t,e,o){"use strict";var n=o(31),a=o(122);t.exports=function(t,e,o){e in t?n.f(t,e,a(0,o)):t[e]=o}},460:function(t,e,o){"use strict";var n=o(48),a=o(49),s=o(81),i=o(171),r=o(170),d=o(80),c=o(459),l=o(173);a(a.S+a.F*!o(172)(function(t){Array.from(t)}),"Array",{from:function(t){var e,o,a,p,u=s(t),A="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,g=void 0!==v,h=0,m=l(u);if(g&&(v=n(v,f>2?arguments[2]:void 0,2)),void 0==m||A==Array&&r(m))for(e=d(u.length),o=new A(e);e>h;h++)c(o,h,g?v(u[h],h):u[h]);else for(p=m.call(u),o=new A;!(a=p.next()).done;h++)c(o,h,g?i(p,v,[a.value,h],!0):a.value);return o.length=h,o}})},461:function(t,e,o){e=t.exports=o(439)(!0),e.push([t.i,".list-content[data-v-089998db]{max-height:90px;margin-right:10px;margin-bottom:0;text-align:left;display:-webkit-box;display:-moz-box;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:3;font-size:16px}.list-time[data-v-089998db]{color:#ccc;text-align:left;display:block}.swipeRight[data-v-089998db]{border:1px solid red}.del[data-v-089998db]{text-decoration:line-through;color:#888}","",{version:3,sources:["E:/PWA/pwa-todolist/src/components/ListBlock.vue"],names:[],mappings:"AACA,+BACI,gBAAiB,AACjB,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,oBAAqB,AACrB,iBAAkB,AAClB,gBAAiB,AACjB,uBAAwB,AACxB,qBAAsB,AACtB,4BAA6B,AAC7B,qBAAsB,AACtB,cAAgB,CACnB,AACD,4BACI,WAAY,AACZ,gBAAiB,AACjB,aAAe,CAClB,AACD,6BACI,oBAAsB,CACzB,AACD,sBACI,6BAA8B,AAC9B,UAAY,CACf",file:"ListBlock.vue",sourcesContent:["\n.list-content[data-v-089998db] {\r\n    max-height: 90px;\r\n    margin-right: 10px;\r\n    margin-bottom: 0;\r\n    text-align: left;\r\n    display: -webkit-box;\r\n    display: -moz-box;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    word-break: break-all;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-line-clamp: 3;\r\n    font-size: 16px;\n}\n.list-time[data-v-089998db] {\r\n    color: #ccc;\r\n    text-align: left;\r\n    display: block;\n}\n.swipeRight[data-v-089998db] {\r\n    border: 1px solid red;\n}\n.del[data-v-089998db] {\r\n    text-decoration: line-through;\r\n    color: #888;\n}\r\n\r\n"],sourceRoot:""}])},466:function(t,e,o){e=t.exports=o(439)(!0),e.push([t.i,".b[data-v-c1a62de4]{border:1px solid red}.card-position[data-v-c1a62de4]{position:fixed;top:0;left:0;width:100%;padding:70px 20px 80px;z-index:9999}.card-content[data-v-c1a62de4]{background-color:#fff;overflow-y:scroll;opacity:1;color:#000}.card-mask[data-v-c1a62de4]{padding:50px}","",{version:3,sources:["E:/PWA/pwa-todolist/src/pages/List.vue"],names:[],mappings:"AACA,oBACI,oBAAsB,CACzB,AACD,gCACI,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,uBAA6B,AAC7B,YAAc,CACjB,AACD,+BACI,sBAAuB,AACvB,kBAAmB,AACnB,UAAW,AACX,UAAY,CACf,AACD,4BACI,YAAc,CACjB",file:"List.vue",sourcesContent:["\n.b[data-v-c1a62de4] {\r\n    border: 1px solid red;\n}\n.card-position[data-v-c1a62de4] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 70px 20px 80px 20px;\r\n    z-index: 9999;\n}\n.card-content[data-v-c1a62de4] {\r\n    background-color: #fff;\r\n    overflow-y: scroll;\r\n    opacity: 1;\r\n    color: #000;\n}\n.card-mask[data-v-c1a62de4] {\r\n    padding: 50px;\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*.scroll{\r\n    overflow-y: scroll;\r\n}*/\r\n\r\n"],sourceRoot:""}])},467:function(t,e,o){e=t.exports=o(439)(!0),e.push([t.i,".app-mask-wrapper[data-v-c5d8860e]{width:100%;height:100%;z-index:999;background:#000;opacity:.5;position:fixed;top:0;left:0}.app-mask-wrapper.fade-enter[data-v-c5d8860e],.app-mask-wrapper.fade-leave-active[data-v-c5d8860e]{opacity:0;transition:opacity .5s}.app-mask-wrapper.fade-enter-active[data-v-c5d8860e],.app-mask-wrapper.fade-leave[data-v-c5d8860e]{transition:opacity .5s}","",{version:3,sources:["E:/PWA/pwa-todolist/src/components/AppMask.vue"],names:[],mappings:"AACA,mCACE,WAAY,AACZ,YAAa,AACb,YAAa,AACb,gBAAiB,AACjB,WAAa,AACb,eAAgB,AAChB,MAAO,AACP,MAAQ,CACT,AACD,mGAEE,UAAW,AACX,sBAAyB,CAC1B,AACD,mGAEE,sBAAyB,CAC1B",file:"AppMask.vue",sourcesContent:["\n.app-mask-wrapper[data-v-c5d8860e] {\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background: #000;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.app-mask-wrapper.fade-enter[data-v-c5d8860e],\n.app-mask-wrapper.fade-leave-active[data-v-c5d8860e] {\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n.app-mask-wrapper.fade-leave[data-v-c5d8860e],\n.app-mask-wrapper.fade-enter-active[data-v-c5d8860e] {\n  transition: opacity 0.5s;\n}"],sourceRoot:""}])},469:function(t,e,o){var n=o(461);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(440)("4858c706",n,!0)},474:function(t,e,o){var n=o(466);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(440)("485df440",n,!0)},475:function(t,e,o){var n=o(467);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(440)("d487519c",n,!0)},478:function(t,e,o){function n(t){o(475)}var a=o(36)(o(448),o(486),n,"data-v-c5d8860e",null);t.exports=a.exports},479:function(t,e,o){function n(t){o(469)}var a=o(36)(o(449),o(480),n,"data-v-089998db",null);t.exports=a.exports},480:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-card",{attrs:{flat:"",tile:""}},[o("v-card-title",{class:[t.color+"--text","text--"+t.color+"-1"]},[t._v("\n            "+t._s(t.title)+" ("+t._s(t.data.length)+")\n        ")]),t._v(" "),o("v-card-text",{staticClass:"pa-0"},t._l(t.data,function(e){return o("v-container",{key:e.id,ref:"list-"+e.id,refInFor:!0,staticClass:"pa-0 pl-3 pr-3",attrs:{fluid:""}},[o("v-layout",[o("v-flex",{staticClass:"pa-0",attrs:{xs1:""}},[o("v-btn",{staticClass:"pa-0 ma-0",class:[t.color+"--text"],attrs:{icon:"",dark:"",block:""},nativeOn:{click:function(o){t.toggleTodoStatus(e)}}},[o("v-icon",[t._v(" "+t._s(e.get("status")?"check_box":"check_box_outline_blank")+" ")])],1)],1),t._v(" "),o("v-flex",{staticClass:"pa-0 pr-2 pt-2",attrs:{xs10:""}},[o("v-touch",{attrs:{options:{touchAction:"pan-y"},"swipe-options":{velocity:.2,threshold:5}},on:{swipeleft:function(o){e.get("status")&&t.setTodoUnDone(e)},swiperight:function(o){t.setTodoDone(e)},press:function(o){t.deleteTodo(e)},tap:function(o){t.readTodoDetail(e)},panright:function(o){t.onPanRightStart(e)},panleft:function(o){t.onPanLeftStart(e)},panend:function(o){t.onPanEnd(e)}}},[o("p",{staticClass:"list-content",class:{del:e.get("status")},domProps:{innerHTML:t._s(e.get("content"))}}),t._v(" "),o("span",{staticClass:"list-time"},[t._v("更新时间： "+t._s(t.getUpdatedTime(e)))])])],1),t._v(" "),o("v-flex",{staticClass:"pa-0",attrs:{xs1:""}},[o("v-btn",{staticClass:"pa-0 ma-0",attrs:{icon:""},nativeOn:{click:function(o){t.editTodo(e)}}},[o("v-icon",[t._v("edit")])],1)],1)],1)],1)}))],1)],1)},staticRenderFns:[]}},485:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("v-layout",{staticClass:"scroll",attrs:{"justify-center":"",wrap:""}},[o("v-flex",{attrs:{xs12:"",lg3:""}},[o("ListBlock",{attrs:{title:"重要-紧急",data:t.done?t.ImpEmg.done:t.ImpEmg.undone,color:"red"},on:{previewTodo:t.previewTodo}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",lg3:""}},[o("ListBlock",{attrs:{title:"重要-不紧急",data:t.done?t.ImpNotEmg.done:t.ImpNotEmg.undone,color:"green"},on:{previewTodo:t.previewTodo}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",lg3:""}},[o("ListBlock",{attrs:{title:"不重要-紧急",data:t.done?t.NotImpEmg.done:t.NotImpEmg.undone,color:"orange"},on:{previewTodo:t.previewTodo}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",lg3:""}},[o("ListBlock",{attrs:{title:"不重要-不紧急",data:t.done?t.NotImpNotEmg.done:t.NotImpNotEmg.undone,color:"blue"},on:{previewTodo:t.previewTodo}})],1)],1)],1)},staticRenderFns:[]}},486:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],key:"mask",class:[{"app-mask-show":t.show},"app-mask-wrapper"],on:{click:function(e){e.stopPropagation(),t.closeAppMask(e)}}})])},staticRenderFns:[]}}});
//# sourceMappingURL=0.20d18564b27c7cf00d13.js.map