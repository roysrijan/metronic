(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-376acca9"],{6261:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[s("div",{staticClass:"alert-icon"},[s("span",{staticClass:"svg-icon svg-icon-lg"},[s("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),s("div",{staticClass:"alert-text"},[s("b",[e._v("Form Select")]),e._v(" Bootstrap custom <select> using custom styles. Optionally specify options based on an array, array of objects, or an object. "),s("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/form-select",target:"_blank"}},[e._v(" See documentation. ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("KTCodePreview",{attrs:{title:"Form Select"},scopedSlots:e._u([{key:"preview",fn:function(){return[s("p",[e._v(" Generate your select options by passing an array or object to the "),s("code",[e._v("options")]),e._v(" props: ")]),s("div",[s("b-form-select",{attrs:{options:e.code1.options},model:{value:e.code1.selected1,callback:function(t){e.$set(e.code1,"selected1",t)},expression:"code1.selected1"}}),s("b-form-select",{staticClass:"mt-3",attrs:{options:e.code1.options,size:"sm"},model:{value:e.code1.selected2,callback:function(t){e.$set(e.code1,"selected2",t)},expression:"code1.selected2"}}),s("div",{staticClass:"mt-3"},[s("p",[e._v(" Selected: "),s("strong",[e._v(e._s(e.code1.selected1))])]),s("p",[e._v(" Selected: "),s("strong",[e._v(e._s(e.code1.selected2))])])])],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code1.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code1.js)+" ")]},proxy:!0}])}),s("KTCodePreview",{attrs:{title:"Options and optgroups"},scopedSlots:e._u([{key:"preview",fn:function(){return[s("div",[s("b-form-select",{staticClass:"mb-3",model:{value:e.code2.selected,callback:function(t){e.$set(e.code2,"selected",t)},expression:"code2.selected"}},[s("option",{domProps:{value:null}},[e._v("Please select an option")]),s("option",{attrs:{value:"a"}},[e._v("Option A")]),s("option",{attrs:{value:"b",disabled:""}},[e._v("Option B (disabled)")]),s("optgroup",{attrs:{label:"Grouped Options"}},[s("option",{domProps:{value:{C:"3PO"}}},[e._v("Option with object value")]),s("option",{domProps:{value:{R:"2D2"}}},[e._v("Another option with object value")])])]),s("div",{staticClass:"mt-2"},[e._v(" Selected: "),s("strong",[e._v(e._s(e.code2.selected))])])],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code2.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code2.js)+" ")]},proxy:!0}])})],1),s("div",{staticClass:"col-md-6"},[s("KTCodePreview",{attrs:{title:"Changing the option field names"},scopedSlots:e._u([{key:"preview",fn:function(){return[s("p",[e._v(" If you want to customize the field property names (for example using "),s("code",[e._v("name")]),e._v(" field for display "),s("code",[e._v("text")]),e._v(") you can easily change them by setting the "),s("code",[e._v("text-field")]),e._v(", "),s("code",[e._v("html-field")]),e._v(", "),s("code",[e._v("value-field")]),e._v(", and "),s("code",[e._v("disabled-field")]),e._v(" props to a string that contains the property name you would like to use: ")]),s("div",[s("b-form-select",{staticClass:"mb-3",attrs:{options:e.code3.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:e.code3.selected,callback:function(t){e.$set(e.code3,"selected",t)},expression:"code3.selected"}}),s("div",{staticClass:"mt-3"},[e._v(" Selected: "),s("strong",[e._v(e._s(e.code3.selected))])])],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code3.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code3.js)+" ")]},proxy:!0}])}),s("KTCodePreview",{attrs:{title:"Value in single mode"},scopedSlots:e._u([{key:"preview",fn:function(){return[s("p",[e._v(" In non "),s("code",[e._v("multiple")]),e._v(" mode, "),s("code",[e._v("<b-form-select>")]),e._v(" returns the a single "),s("code",[e._v("value")]),e._v(" of the currently selected option. ")]),s("div",[s("b-form-select",{attrs:{options:e.code4.options},model:{value:e.code4.selected,callback:function(t){e.$set(e.code4,"selected",t)},expression:"code4.selected"}}),s("div",{staticClass:"mt-3"},[e._v(" Selected: "),s("strong",[e._v(e._s(e.code4.selected))])])],1)]},proxy:!0},{key:"html",fn:function(){return[e._v(" "+e._s(e.code4.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[e._v(" "+e._s(e.code4.js)+" ")]},proxy:!0}])})],1)])],1)},a=[],l=s("d968"),n=s("0bce"),i={data:function(){return{code1:{html:'<div>\n    <b-form-select v-model="selected" :options="options"></b-form-select>\n    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>\n\n    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>\n  </div>',js:"export default {\n    data() {\n      return {\n        selected: null,\n        options: [\n          { value: null, text: 'Please select an option' },\n          { value: 'a', text: 'This is First option' },\n          { value: 'b', text: 'Selected Option' },\n          { value: { C: '3PO' }, text: 'This is an option with object value' },\n          { value: 'd', text: 'This one is disabled', disabled: true }\n        ]\n      }\n    }\n  }",selected1:null,selected2:null,options:[{value:null,text:"Please select an option"},{value:"a",text:"This is First option"},{value:"b",text:"Selected Option"},{value:{C:"3PO"},text:"This is an option with object value"},{value:"d",text:"This one is disabled",disabled:!0}]},code2:{html:'<div>\n    <b-form-select v-model="selected" class="mb-3">\n      <option :value="null">Please select an option</option>\n      <option value="a">Option A</option>\n      <option value="b" disabled>Option B (disabled)</option>\n      <optgroup label="Grouped Options">\n        <option :value="{ C: \'3PO\' }">Option with object value</option>\n        <option :value="{ R: \'2D2\' }">Another option with object value</option>\n      </optgroup>\n    </b-form-select>\n\n    <div class="mt-2">Selected: <strong>{{ selected }}</strong></div>\n  </div>',js:"export default {\n    data() {\n      return {\n        selected: null\n      }\n    }\n  }"},code3:{html:'<div>\n    <b-form-select\n      v-model="selected"\n      :options="options"\n      class="mb-3"\n      value-field="item"\n      text-field="name"\n      disabled-field="notEnabled"\n    ></b-form-select>\n    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>\n  </div>',js:"export default {\n    data() {\n      return {\n        selected: 'A',\n        options: [\n          { item: 'A', name: 'Option A' },\n          { item: 'B', name: 'Option B' },\n          { item: 'D', name: 'Option C', notEnabled: true },\n          { item: { d: 1 }, name: 'Option D' },\n        ]\n      }\n    }\n  }",selected:"A",options:[{item:"A",name:"Option A"},{item:"B",name:"Option B"},{item:"D",name:"Option C",notEnabled:!0},{item:{d:1},name:"Option D"}]},code4:{html:'<div>\n    <b-form-select v-model="selected" :options="options"></b-form-select>\n    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>\n  </div>',js:"export default {\n    data() {\n      return {\n        selected: null,\n        options: [\n          { value: null, text: 'Please select some item' },\n          { value: 'a', text: 'This is First option' },\n          { value: 'b', text: 'Default Selected Option' },\n          { value: 'c', text: 'This is another option' },\n          { value: 'd', text: 'This one is disabled', disabled: true },\n        ]\n      }\n    }\n  }",selected:null,options:[{value:null,text:"Please select some item"},{value:"a",text:"This is First option"},{value:"b",text:"Default Selected Option"},{value:"c",text:"This is another option"},{value:"d",text:"This one is disabled",disabled:!0}]}}},components:{KTCodePreview:l["a"]},mounted:function(){this.$store.dispatch(n["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Form Select"}])}},c=i,d=s("a6c2"),r=Object(d["a"])(c,o,a,!1,null,null,null);t["default"]=r.exports},d968:function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("KTCard",{ref:"preview",attrs:{title:e.title,example:!0},scopedSlots:e._u([e.hasTitleSlot?{key:"title",fn:function(){return[s("h3",{staticClass:"card-title"},[e._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[s("div",{staticClass:"example-tools justify-content-center"},[s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),s("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"example-code mb-5"},[e.hasGeneralCode||e.hasSingleCodeType?e._e():s("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[e.hasHtmlCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:e.setActiveTab}},[e._v(" HTML ")])]):e._e(),e.hasJsCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:e.setActiveTab}},[e._v(" JS ")])]):e._e(),e.hasScssCode?s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:e.setActiveTab}},[e._v(" SCSS ")])]):e._e()]),e.hasGeneralCode?s("div",[e._t("code")],2):e._e(),e.hasGeneralCode||e.hasSingleCodeType?e._e():s("div",[s("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[s("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[e._t("html")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[e._t("js")],2)],1),s("b-tab",{staticClass:"example-highlight"},[s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[e._t("scss")],2)],1)],1)],1),e.hasSingleCodeType?s("div",{staticClass:"example-highlight"},[e.hasHtmlCode?s("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[e._t("html")],2):e._e(),e.hasJsCode?s("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[e._t("js")],2):e._e(),e.hasScssCode?s("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[e._t("scss")],2):e._e()],1):e._e()]),e._t("preview")]},proxy:!0}],null,!0)})},a=[],l=(s("46d4"),s("dddc"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card card-custom gutter-b",class:e.classes},[e.hasTitleSlot||e.title?s("div",{staticClass:"card-header",class:e.headClass},[s("div",{staticClass:"card-title"},[e.hasTitleSlot?e._t("title"):e._e(),e.hasTitleSlot?e._e():s("h3",{staticClass:"card-label"},[e._v(" "+e._s(e.title)+" ")])],2),s("div",{staticClass:"card-toolbar"},[e._t("toolbar")],2)]):e._e(),s("div",{staticClass:"card-body",class:{bodyClass:e.bodyClass,"body-fit":e.bodyFit,"body-fluid":e.bodyFluid}},[e._t("body")],2),e.hasFootSlot?s("div",{staticClass:"card-footer"},[e._t("foot")],2):e._e()])}),n=[],i={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var e={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return e[this.headSizeClass]=this.headSizeClass,this.cardClass&&(e[this.cardClass]=!0),e},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},c=i,d=s("a6c2"),r=Object(d["a"])(c,l,n,!1,null,null,null),u=r.exports,p=s("b2e9"),v={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:u},mounted:function(){var e=this;this.$nextTick((function(){p["a"].init([e.$el]);var t=e.$el.querySelectorAll(".hljs");t.forEach((function(e){e.classList.add("language-".concat(e.classList[1])),e.classList.remove("hljs")}))}))},methods:{setActiveTab:function(e){for(var t=e.target.closest('[role="tablist"]'),s=t.querySelectorAll('[data-toggle="tab"]'),o=0;o<s.length;o++)s[o].classList.remove("active");e.target.classList.add("active"),this.tabIndex=parseInt(e.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var e=this,t=0;return["html","js","scss"].forEach((function(s){e.$slots.hasOwnProperty(s)&&t++})),1===t},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},h=v,m=Object(d["a"])(h,o,a,!1,null,null,null);t["a"]=m.exports}}]);
//# sourceMappingURL=chunk-376acca9.8e30ee8c.js.map