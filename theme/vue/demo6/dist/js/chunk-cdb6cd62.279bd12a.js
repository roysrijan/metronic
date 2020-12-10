(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cdb6cd62"],{"1f4f":function(t,e,a){"use strict";a("a9e3");var s=a("2e1a"),n=(a("8b37"),a("80d2")),i=a("7560"),l=a("58df");e["a"]=Object(l["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"411c":function(t,e){t.exports=function(t,e){var a="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var s in"function"===typeof t.exports&&(a.components=t.exports.options.components),a.components=a.components||{},e)a.components[s]=a.components[s]||e[s]}},"58df":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var s=a("e832");function n(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return s["default"].extend({mixins:e})}},7560:function(t,e,a){"use strict";a.d(e,"b",(function(){return l}));var s=a("2e1a"),n=a("e832"),i=n["default"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function l(t){var e=Object(s["a"])(Object(s["a"])({},t.props),t.injections),a=i.options.computed.isDark.call(e);return i.options.computed.themeClasses.call({isDark:a})}e["a"]=i},"8b37":function(t,e,a){},a740:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[a("div",{staticClass:"alert-icon"},[a("span",{staticClass:"svg-icon svg-icon-lg"},[a("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),a("div",{staticClass:"alert-text"},[a("b",[t._v("Simple tables")]),t._v(" The "),a("code",[t._v("v-simple-table")]),t._v(" component is a simple wrapper component around the "),a("code",[t._v("<table>")]),t._v(" element. Inside the component you can use all the regular table elements such as "),a("code",[t._v("<thead>")]),t._v(", "),a("code",[t._v("<tbody>")]),t._v(", "),a("code",[t._v("<tr>")]),t._v(", etc. "),a("a",{staticClass:"font-weight-bold",attrs:{href:"https://vuetifyjs.com/en/components/simple-tables",target:"_blank"}},[t._v(" See documentation. ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("KTCodePreview",{attrs:{title:"Fixed height and fixed header"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" Use the "),a("code",[t._v("fixed-header")]),t._v(" prop together with the "),a("code",[t._v("height")]),t._v(" prop to fix the header to the top of the table. ")]),a("v-simple-table",{attrs:{"fixed-header":"",height:"300px"},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),a("th",{staticClass:"text-left"},[t._v("Calories")])])]),a("tbody",t._l(t.code1.desserts,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.calories))])])})),0)]},proxy:!0}])})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code1.js)+" ")]},proxy:!0}])})],1),a("div",{staticClass:"col-md-6"},[a("KTCodePreview",{attrs:{title:"Dense"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),a("th",{staticClass:"text-left"},[t._v("Calories")])])]),a("tbody",t._l(t.code2.desserts,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.calories))])])})),0)]},proxy:!0}])})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code2.js)+" ")]},proxy:!0}])})],1)])],1)},n=[],i=a("d968"),l=a("0bce"),o={data:function(){return{code1:{html:'<v-simple-table fixed-header height="300px">\n  <template v-slot:default>\n    <thead>\n      <tr>\n        <th class="text-left">Name</th>\n        <th class="text-left">Calories</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for="item in desserts" :key="item.name">\n        <td>{{ item.name }}</td>\n        <td>{{ item.calories }}</td>\n      </tr>\n    </tbody>\n  </template>\n</v-simple-table>',js:"export default {\n  data () {\n    return {\n      desserts: [\n        {\n          name: 'Frozen Yogurt',\n          calories: 159,\n        },\n        {\n          name: 'Ice cream sandwich',\n          calories: 237,\n        },\n        {\n          name: 'Eclair',\n          calories: 262,\n        },\n        {\n          name: 'Cupcake',\n          calories: 305,\n        },\n        {\n          name: 'Gingerbread',\n          calories: 356,\n        },\n        {\n          name: 'Jelly bean',\n          calories: 375,\n        },\n        {\n          name: 'Lollipop',\n          calories: 392,\n        },\n        {\n          name: 'Honeycomb',\n          calories: 408,\n        },\n        {\n          name: 'Donut',\n          calories: 452,\n        },\n        {\n          name: 'KitKat',\n          calories: 518,\n        },\n      ],\n    }\n  },\n}",desserts:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]},code2:{html:'<v-simple-table dense>\n  <template v-slot:default>\n    <thead>\n      <tr>\n        <th class="text-left">Name</th>\n        <th class="text-left">Calories</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for="item in desserts" :key="item.name">\n        <td>{{ item.name }}</td>\n        <td>{{ item.calories }}</td>\n      </tr>\n    </tbody>\n  </template>\n</v-simple-table>',js:"export default {\n  data () {\n    return {\n      desserts: [\n        {\n          name: 'Frozen Yogurt',\n          calories: 159,\n        },\n        {\n          name: 'Ice cream sandwich',\n          calories: 237,\n        },\n        {\n          name: 'Eclair',\n          calories: 262,\n        },\n        {\n          name: 'Cupcake',\n          calories: 305,\n        },\n        {\n          name: 'Gingerbread',\n          calories: 356,\n        },\n        {\n          name: 'Jelly bean',\n          calories: 375,\n        },\n        {\n          name: 'Lollipop',\n          calories: 392,\n        },\n        {\n          name: 'Honeycomb',\n          calories: 408,\n        },\n        {\n          name: 'Donut',\n          calories: 452,\n        },\n        {\n          name: 'KitKat',\n          calories: 518,\n        },\n      ],\n    }\n  },\n}",desserts:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]}}},components:{KTCodePreview:i["a"]},mounted:function(){this.$store.dispatch(l["a"],[{title:"Vuetify",route:"alerts"},{title:"Tables",route:"simple-tables"},{title:"Simple Tables"}])}},r=o,c=a("a6c2"),d=a("411c"),h=a.n(d),u=a("1f4f"),m=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=m.exports;h()(m,{VSimpleTable:u["a"]})},d968:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[a("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[a("div",{staticClass:"example-tools justify-content-center"},[a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():a("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?a("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():a("div",[a("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?a("div",{staticClass:"example-highlight"},[t.hasHtmlCode?a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},n=[],i=(a("4160"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?a("div",{staticClass:"card-header",class:t.headClass},[a("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():a("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),a("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),a("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?a("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),l=[],o={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=o,c=a("a6c2"),d=Object(c["a"])(r,i,l,!1,null,null,null),h=d.exports,u=a("b2e9"),m={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:h},mounted:function(){var t=this;this.$nextTick((function(){u["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),a=e.querySelectorAll('[data-toggle="tab"]'),s=0;s<a.length;s++)a[s].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(a){t.$slots.hasOwnProperty(a)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},p=m,f=Object(c["a"])(p,s,n,!1,null,null,null);e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-cdb6cd62.279bd12a.js.map