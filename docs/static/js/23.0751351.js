(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{626:function(e,n,t){"use strict";t.r(n);var a={name:"component-exhibition",components:{"firm-demo0":(Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e})({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("u-table",{attrs:{data:e.tableData,"pagination-show":!0,total:e.pageForm.total,"page-size":e.pageForm.pageSize,"current-page":e.pageForm.currentPage,"max-height":e.height},on:{handlePageSize:e.handlePageSize}},[t("u-table-column",{attrs:{prop:"name",label:"名字",width:"180"}}),e._v(" "),t("u-table-column",{attrs:{prop:"sex",label:"性别",width:"180"}}),e._v(" "),t("u-table-column",{attrs:{prop:"age",label:"年龄"}})],1)]],2)},staticRenderFns:[]},{data:function(){return{height:300,pageForm:{total:1e3,pageSize:10,currentPage:1},tableData:[{sex:"男",name:"王小虎",age:"15"},{sex:"女",name:"王小明",age:"15"},{sex:"女",name:"王小丽",age:"15"},{sex:"未知",name:"王小狗",age:"15"},{sex:"未知",name:"王小狗",age:"15"},{sex:"未知",name:"王小狗",age:"15"},{sex:"未知",name:"王小狗",age:"15"},{sex:"未知",name:"王小狗",age:"15"}]}},methods:{handlePageSize:function(e){var n=e.page,t=e.size;console.log(n,t)}}})}},i=t(34),s=Object(i.a)(a,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",[this._m(0),this._m(1),this._m(2),n("div",[this._m(3),n("template",{slot:"source"},[n("firm-demo0")],1),n("template",{slot:"highlight"},[this._m(4)])],2)])}),[function(){var e=this.$createElement,n=this._self._c||e;return n("h3",{attrs:{id:"dai-fen-ye-de-biao-ge"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dai-fen-ye-de-biao-ge"}},[this._v("¶")]),this._v(" 带分页的表格")])},function(){var e=this.$createElement,n=this._self._c||e;return n("blockquote",[n("p",[this._v("使用了分页，在动态设置高度时请注意, 下面的这个解释很多，如果对你无用。你可以跳过这个图，看下面的实例部分")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",[n("code",{staticClass:"language-javascript"},[this._v("// 你加了分页 我里面会延迟去设置高度，因为我要计算分页的高度，此时分页还没出来 我得mounted后去计算，所以你在mounted去计算高度 是有问题的     你可以不使用分页组件（隐藏掉）就没问题了\n// ，使用分页组件  请 settimeout下再去设置高度\n  mounted () {\n        // 不使用分页  下面的这个计算是（假装给个示例）。请结合自己情况去计算，\n        // 比如我一个页面有头部，表单高级搜索等盒子，那么我这里就这样计算 : 表格高度 =  浏览器的窗口高度 - 我的头部盒子高度 - 表单高级搜索高度\n        // this.height = 浏览器的窗口高度  - (this.$refs.goodsIndex.offsetHeight - this.$refs.OrderSearch.offsetHeight)\n        this.height = window.innerHeight - 50\n        // 使用分页你得这样去计算高度。加个延迟\n        setTimeout(() => {\n            // 比如我一个页面有头部，表单高级搜索等盒子，那么我这里就这样计算 : 表格高度 =  浏览器的窗口高度 - 我的头部盒子高度 - 表单高级搜索高度\n           // this.height = 浏览器的窗口高度  - (this.$refs.goodsIndex.offsetHeight - this.$refs.OrderSearch.offsetHeight)\n           this.height = window.innerHeight - 50\n        })，\n\n\n        // 有了这个是是不是可以实现拖动浏览器宽度去，更新表格高度啦？做响应式  如\n        // 监听窗口变化， 这个代码写app.vue入口里面\n          window.onresize = () => {\n            obj = {\n              h: window.innerHeight,\n              w: window.innerWidth\n            }\n            // SETscreen就是vuex中的Mutation中的方法\n            this.SETscreen(obj) // 然后把这个存到vuex中。如果页面中有表格就去监听这个变化\n          }\n    },\n      // 监听窗户高度变化，假如这个是我某个页面使用了表格\n       watch: {\n         // 获取vuex中的screenObj对象，进行监听\n         screenObj (val) {\n            // 下面的这个计算是（假装给个示例）\n            // 比如我一个页面有头部，表单高级搜索等盒子，那么我这里就这样计算 : 表格高度 =  浏览器的窗口高度 - 我的头部盒子高度 - 表单高级搜索高度\n            // this.height = 浏览器的窗口高度  - (this.$refs.goodsIndex.offsetHeight - this.$refs.OrderSearch.offsetHeight)\n            this.height = window.innerHeight - 50\n         }\n       }\n")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("p",[this._v("当"),n("code",[this._v("u-table")]),this._v("元素中注入"),n("code",[this._v("data")]),this._v("对象数组后，给定一个pagination-show为true就可以显示分页啦，分页的属性呢跟element的分页一样，直接把属性配置在u-table就好啦。更多分页属性请看文档api吧。")])])},function(){var e=this.$createElement,n=this._self._c||e;return n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[this._v("  <template>\n    <u-table\n      :data=\"tableData\"\n      :pagination-show=\"true\"\n      :total=\"pageForm.total\"\n      :page-size=\"pageForm.pageSize\"\n      :current-page=\"pageForm.currentPage\"\n      @handlePageSize=\"handlePageSize\"\n      :max-height=\"height\">\n      <u-table-column\n        prop=\"name\"\n        label=\"名字\"\n        width=\"180\">\n      </u-table-column>\n      <u-table-column\n        prop=\"sex\"\n        label=\"性别\"\n        width=\"180\">\n      </u-table-column>\n      <u-table-column\n        prop=\"age\"\n        label=\"年龄\">\n      </u-table-column>\n    </u-table>\n  </template>\n\n  <script>\n    export default {\n      data() {\n        return {\n         height: 300,\n         pageForm: {\n              total: 1000,\n              pageSize: 10,\n              currentPage: 1\n          },\n          tableData: [{\n            sex: '男',\n            name: '王小虎',\n            age: '15'\n          }, {\n            sex: '女',\n            name: '王小明',\n            age: '15'\n          }, {\n            sex: '女',\n            name: '王小丽',\n            age: '15'\n          }, {\n            sex: '未知',\n            name: '王小狗',\n            age: '15'\n          }, {\n           sex: '未知',\n           name: '王小狗',\n           age: '15'\n         }, {\n             sex: '未知',\n             name: '王小狗',\n             age: '15'\n           }, {\n             sex: '未知',\n             name: '王小狗',\n             age: '15'\n           }, {\n             sex: '未知',\n             name: '王小狗',\n             age: '15'\n           }]\n        }\n      },\n      methods: {\n        // 分页事件\n        handlePageSize ({page, size}) {\n            console.log(page, size)\n        }\n      }\n    }\n  <\/script>\n")])])}],!1,null,null,null);n.default=s.exports}}]);