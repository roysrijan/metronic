(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225e02"],{e5ea:function(t,o,n){"use strict";n.r(o);var a=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[n("div",{staticClass:"alert-icon"},[n("span",{staticClass:"svg-icon svg-icon-lg"},[n("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),n("div",{staticClass:"alert-text"},[n("b",[t._v("Tooltips")]),t._v(" The "),n("code",[t._v("v-tooltip")]),t._v(" component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a "),n("code",[t._v("v-model")]),t._v(". When activated, tooltips display a text label identifying an element, such as a description of its function. "),n("a",{staticClass:"font-weight-bold",attrs:{href:"https://vuetifyjs.com/en/components/tooltips",target:"_blank"}},[t._v(" See documentation. ")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("KTCodePreview",{attrs:{title:"Alignment"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" A tooltip can be aligned to any of the four sides of the activator element ")]),n("div",{staticClass:"text-center"},[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[n("v-btn",t._g({staticClass:"mr-4",attrs:{color:"primary",dark:""}},a),[t._v("Left")])]}}])},[n("span",[t._v("Left tooltip")])]),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[n("v-btn",t._g({staticClass:"mr-4",attrs:{color:"primary",dark:""}},a),[t._v("Top")])]}}])},[n("span",[t._v("Top tooltip")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[n("v-btn",t._g({staticClass:"mr-4",attrs:{color:"primary",dark:""}},a),[t._v("Bottom")])]}}])},[n("span",[t._v("Bottom tooltip")])]),n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[n("v-btn",t._g({staticClass:"mr-4",attrs:{color:"primary",dark:""}},a),[t._v("Right")])]}}])},[n("span",[t._v("Right tooltip")])])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])})],1),n("div",{staticClass:"col-md-6"},[n("KTCodePreview",{attrs:{title:"Visibility"},scopedSlots:t._u([{key:"preview",fn:function(){return[n("p",[t._v(" Tooltip visibility can be programmatically changed using "),n("code",[t._v("v-model")]),t._v(". ")]),n("v-container",{staticClass:"text-center",attrs:{fluid:""}},[n("v-row",{staticClass:"flex",attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{on:{click:function(o){t.show=!t.show}}},[t._v("toggle")])],1),n("v-col",{staticClass:"mt-12",attrs:{cols:"12"}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on;return[n("v-btn",t._g({attrs:{icon:""}},a),[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-cart")])],1)]}}]),model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[n("span",[t._v("Programmatic tooltip")])])],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code2.js)+" ")]},proxy:!0}])})],1)])],1)},e=[],s=n("d968"),i=n("0bce"),l={data:function(){return{code1:{html:' <div class="text-center">\n  <v-tooltip left>\n    <template v-slot:activator="{ on }">\n      <v-btn color="primary" dark v-on="on">Left</v-btn>\n    </template>\n    <span>Left tooltip</span>\n  </v-tooltip>\n\n  <v-tooltip top>\n    <template v-slot:activator="{ on }">\n      <v-btn color="primary" dark v-on="on">Top</v-btn>\n    </template>\n    <span>Top tooltip</span>\n  </v-tooltip>\n\n  <v-tooltip bottom>\n    <template v-slot:activator="{ on }">\n      <v-btn color="primary" dark v-on="on">Bottom</v-btn>\n    </template>\n    <span>Bottom tooltip</span>\n  </v-tooltip>\n\n  <v-tooltip right>\n    <template v-slot:activator="{ on }">\n      <v-btn color="primary" dark v-on="on">Right</v-btn>\n    </template>\n    <span>Right tooltip</span>\n  </v-tooltip>\n</div>'},code2:{html:'<v-container fluid class="text-center">\n  <v-row\n    class="flex"\n    justify="space-between"\n  >\n    <v-col cols="12">\n      <v-btn @click="show = !show">toggle</v-btn>\n    </v-col>\n\n    <v-col cols="12" class="mt-12">\n      <v-tooltip v-model="show" top>\n        <template v-slot:activator="{ on }">\n          <v-btn icon v-on="on">\n            <v-icon color="grey lighten-1">mdi-cart</v-icon>\n          </v-btn>\n        </template>\n        <span>Programmatic tooltip</span>\n      </v-tooltip>\n    </v-col>\n  </v-row>\n</v-container>',js:"export default {\n  data () {\n    return {\n      show: false,\n    }\n  },\n}"},show:!1}},components:{KTCodePreview:s["a"]},mounted:function(){this.$store.dispatch(i["a"],[{title:"Vuetify",route:"alerts"},{title:"Tooltips"}])}},r=l,c=n("a6c2"),v=n("411c"),p=n.n(v),d=n("9c46d"),m=n("1fb1"),u=n("f56c"),f=n("b503"),h=n("e614"),_=n("dc05"),g=Object(c["a"])(r,a,e,!1,null,null,null);o["default"]=g.exports;p()(g,{VBtn:d["a"],VCol:m["a"],VContainer:u["a"],VIcon:f["a"],VRow:h["a"],VTooltip:_["a"]})}}]);
//# sourceMappingURL=chunk-2d225e02.fa54fcf6.js.map