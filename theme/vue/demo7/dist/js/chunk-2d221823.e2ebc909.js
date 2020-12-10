(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221823"],{cb3a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"alert alert-custom alert-white alert-shadow gutter-b",attrs:{role:"alert"}},[a("div",{staticClass:"alert-icon alert-icon-top"},[a("span",{staticClass:"svg-icon svg-icon-3x svg-icon-primary mt-4"},[a("inline-svg",{attrs:{src:"media/svg/icons/Tools/Tools.svg"}})],1)]),e._m(0)]),a("div",{staticClass:"card card-custom gutter-b"},[a("div",{staticClass:"card-header card-header-tabs-line"},[a("ul",{ref:"builder-tab",staticClass:"nav nav-dark nav-bold nav-tabs nav-tabs-line",attrs:{role:"tablist"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Page ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Header ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Content ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"3","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Aside ")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"4","data-toggle":"tab",href:"#",role:"tab"},on:{click:e.setActiveTab}},[e._v(" Footer ")])])])]),a("form",{staticClass:"form",on:{submit:function(t){return e.submit(t)}}},[a("div",{staticClass:"card-body"},[a("b-tabs",{staticClass:"hide-tabs",model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[a("b-tab",{attrs:{active:""}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Page Loader: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.loader.type,expression:"config.loader.type"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.loader,"type",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"false"}},[e._v(" Disabled ")]),a("option",{attrs:{value:"spinner-logo",selected:"selected"}},[e._v(" Spinner & Logo ")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select page loading indicator. ")])])])]),a("b-tab",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Desktop Fixed Header: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.header.self.fixed.desktop,expression:"config.header.self.fixed.desktop"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.header.self.fixed.desktop)?e._i(e.config.header.self.fixed.desktop,"true")>-1:e.config.header.self.fixed.desktop},on:{change:function(t){var a=e.config.header.self.fixed.desktop,s=t.target,i=!!s.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);s.checked?o<0&&e.$set(e.config.header.self.fixed,"desktop",a.concat([l])):o>-1&&e.$set(e.config.header.self.fixed,"desktop",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.header.self.fixed,"desktop",i)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Enable fixed header for desktop mode ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Mobile Fixed Header: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.header.self.fixed.mobile,expression:"config.header.self.fixed.mobile"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.header.self.fixed.mobile)?e._i(e.config.header.self.fixed.mobile,"true")>-1:e.config.header.self.fixed.mobile},on:{change:function(t){var a=e.config.header.self.fixed.mobile,s=t.target,i=!!s.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);s.checked?o<0&&e.$set(e.config.header.self.fixed,"mobile",a.concat([l])):o>-1&&e.$set(e.config.header.self.fixed,"mobile",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.header.self.fixed,"mobile",i)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Enable fixed header for mobile mode ")])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v(" Header Width: ")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.header.self.width,expression:"config.header.self.width"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.header.self,"width",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"fluid",selected:""}},[e._v("Fluid")]),a("option",{attrs:{value:"fixed"}},[e._v("Fixed")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select header width type. ")])])])]),a("b-tab",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Width:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.content.width,expression:"config.content.width"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.content,"width",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"fluid"}},[e._v("Fluid")]),a("option",{attrs:{value:"fixed",selected:""}},[e._v("Fixed")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select layout width type. ")])])])]),a("b-tab",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Display:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("span",{staticClass:"switch switch-icon"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.config.aside.self.display,expression:"config.aside.self.display"}],attrs:{type:"checkbox",value:"true",checked:""},domProps:{checked:Array.isArray(e.config.aside.self.display)?e._i(e.config.aside.self.display,"true")>-1:e.config.aside.self.display},on:{change:function(t){var a=e.config.aside.self.display,s=t.target,i=!!s.checked;if(Array.isArray(a)){var l="true",o=e._i(a,l);s.checked?o<0&&e.$set(e.config.aside.self,"display",a.concat([l])):o>-1&&e.$set(e.config.aside.self,"display",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.config.aside.self,"display",i)}}}),a("span")])]),a("div",{staticClass:"form-text text-muted"},[e._v("Display aside")])])])]),a("b-tab",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-lg-3 col-form-label"},[e._v("Width:")]),a("div",{staticClass:"col-lg-9 col-xl-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.config.footer.width,expression:"config.footer.width"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.config.footer,"width",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"fluid",selected:""}},[e._v("Fluid")]),a("option",{attrs:{value:"fixed"}},[e._v("Fixed")])]),a("div",{staticClass:"form-text text-muted"},[e._v(" Select layout width type. ")])])])])],1)],1),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3"}),a("div",{staticClass:"col-lg-9"},[e._m(1),e._v(" "),a("button",{staticClass:"btn btn-clean font-weight-bold",on:{click:function(t){return e.reset(t)}}},[a("i",{staticClass:"la la-recycle"}),e._v(" Reset ")])])])])])]),a("div",{staticClass:"card card-custom gutter-b"},[e._m(2),a("div",{staticClass:"card-body"},[a("div",{staticClass:"example mb-10"},[e._m(3),a("div",{staticClass:"example-code"},[a("div",{staticClass:"example-code"},[a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy"}),a("div",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-json",attrs:{lang:"json"}},[e._v(" "+e._s(e.config)+" ")])],1)])])])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"alert-text"},[a("p",[e._v(" The layout builder helps to configure the layout with preferred options and preview it in real time. The configured layout options will be saved until you change or reset them. To use the layout builder choose the layout options and click the "),a("code",[e._v("Preview")]),e._v(" button to preview the changes. ")]),a("p",[a("span",{staticClass:"label label-inline label-pill label-info label-rounded mr-2"},[e._v(" INFO: ")]),e._v(" Some pages from the "),a("code",[e._v("html")]),e._v(" version might not exist in the "),a("code",[e._v("vue")]),e._v(". But the CSS styles from "),a("code",[e._v("html")]),e._v(" version already integrated into the "),a("code",[e._v("vue")]),e._v(". All the components from the "),a("code",[e._v("html")]),e._v(" version are static and non-working components. You can copy the component HTML from the "),a("code",[e._v("html")]),e._v(" version, and paste it in the "),a("code",[e._v("vue")]),e._v(" component to get the same style. The actual functionality and implementation need to be done by the customer because every application has its own business requirements. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"btn btn-primary font-weight-bold",attrs:{type:"submit"}},[a("i",{staticClass:"la la-eye"}),e._v(" Preview ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-title"},[a("h3",{staticClass:"card-label"},[e._v("Generated Config")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" Use for layout config in "),a("code",[e._v("/src/core/config/layout.config.json")])])}],l=(a("46d4"),a("dddc"),a("2e1a")),o=a("94ea"),c=a("0bce"),r={name:"builder",components:{},data:function(){return{tabIndex:0}},computed:Object(l["a"])(Object(l["a"])({},Object(o["b"])(["layoutConfig"])),{},{config:function(){return this.layoutConfig()}}),mounted:function(){var e=this;this.setActivePreviousTab(),this.$store.dispatch(c["a"],[{title:"Layout Builder"}]),this.$nextTick((function(){var t=e.$el.querySelectorAll(".hljs");t.forEach((function(e){e.classList.remove("hljs"),e.classList.add("language-".concat(e.classList[1]))}))}))},destroyed:function(){localStorage.removeItem("builderTab")},methods:{reset:function(e){e.preventDefault(),localStorage.removeItem("config"),window.location.reload()},setActivePreviousTab:function(){this.tabIndex=parseInt(localStorage.getItem("builderTab"))||0;for(var e=this.$refs["builder-tab"].querySelectorAll(".nav-link"),t=0;t<e.length;t++)e[t].classList.remove("active");this.$refs["builder-tab"].querySelector('[data-tab="'.concat(this.tabIndex,'"]')).classList.add("active")},setActiveTab:function(e){for(var t=e.target.closest('[role="tablist"]'),a=t.querySelectorAll(".nav-link"),s=0;s<a.length;s++)a[s].classList.remove("active");this.tabIndex=parseInt(e.target.getAttribute("data-tab")),e.target.classList.add("active"),localStorage.setItem("builderTab",this.tabIndex)},submit:function(e){e.preventDefault(),localStorage.setItem("config",JSON.stringify(this.config)),window.location.reload()}}},n=r,d=a("a6c2"),v=Object(d["a"])(n,s,i,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d221823.e2ebc909.js.map