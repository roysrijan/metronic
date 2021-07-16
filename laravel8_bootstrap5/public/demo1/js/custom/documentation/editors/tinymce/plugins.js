/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js ***!
  \**********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsTinyMCEPlugins = function () {\n  // Private functions\n  var examplePlugins = function examplePlugins() {\n    tinymce.init({\n      selector: '#kt_docs_tinymce_plugins',\n      toolbar: 'advlist | autolink | link image | lists charmap | print preview',\n      plugins: 'advlist autolink link image lists charmap print preview'\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      examplePlugins();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEPlugins.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL3BsdWdpbnMuanM/NTBjNCJdLCJuYW1lcyI6WyJLVEZvcm1zVGlueU1DRVBsdWdpbnMiLCJleGFtcGxlUGx1Z2lucyIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJ0b29sYmFyIiwicGx1Z2lucyIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEscUJBQXFCLEdBQUcsWUFBVztBQUNuQztBQUNBLE1BQUlDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBVztBQUM1QkMsV0FBTyxDQUFDQyxJQUFSLENBQWE7QUFDVEMsY0FBUSxFQUFFLDBCQUREO0FBRVRDLGFBQU8sRUFBRSxpRUFGQTtBQUdUQyxhQUFPLEVBQUc7QUFIRCxLQUFiO0FBS0gsR0FORDs7QUFRQSxTQUFPO0FBQ0g7QUFDQUgsUUFBSSxFQUFFLGdCQUFXO0FBQ2JGLG9CQUFjO0FBQ2pCO0FBSkUsR0FBUDtBQU1ILENBaEIyQixFQUE1QixDLENBa0JBOzs7QUFDQU0sTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDUix1QkFBcUIsQ0FBQ0csSUFBdEI7QUFDSCxDQUZEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvdGlueW1jZS9wbHVnaW5zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZvcm1zVGlueU1DRVBsdWdpbnMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZVBsdWdpbnMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aW55bWNlLmluaXQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJyNrdF9kb2NzX3RpbnltY2VfcGx1Z2lucycsXHJcbiAgICAgICAgICAgIHRvb2xiYXI6ICdhZHZsaXN0IHwgYXV0b2xpbmsgfCBsaW5rIGltYWdlIHwgbGlzdHMgY2hhcm1hcCB8IHByaW50IHByZXZpZXcnLFxyXG4gICAgICAgICAgICBwbHVnaW5zIDogJ2Fkdmxpc3QgYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBjaGFybWFwIHByaW50IHByZXZpZXcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVQbHVnaW5zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtURm9ybXNUaW55TUNFUGx1Z2lucy5pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js"]();
/******/ 	
/******/ })()
;