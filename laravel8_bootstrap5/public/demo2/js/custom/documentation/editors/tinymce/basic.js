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

/***/ "./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js ***!
  \********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsTinyMCEBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var options = {\n      selector: '#kt_docs_tinymce_basic'\n    };\n\n    if (KTApp.isDarkMode()) {\n      options['skin'] = 'oxide-dark';\n      options['content_css'] = 'dark';\n    }\n\n    tinymce.init(options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL2Jhc2ljLmpzPzNhNWMiXSwibmFtZXMiOlsiS1RGb3Jtc1RpbnlNQ0VCYXNpYyIsImV4YW1wbGVCYXNpYyIsIm9wdGlvbnMiLCJzZWxlY3RvciIsIktUQXBwIiwiaXNEYXJrTW9kZSIsInRpbnltY2UiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxtQkFBbUIsR0FBRyxZQUFXO0FBQ2pDO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVztBQUMxQixRQUFJQyxPQUFPLEdBQUc7QUFBQ0MsY0FBUSxFQUFFO0FBQVgsS0FBZDs7QUFFQSxRQUFJQyxLQUFLLENBQUNDLFVBQU4sRUFBSixFQUF3QjtBQUNwQkgsYUFBTyxDQUFDLE1BQUQsQ0FBUCxHQUFrQixZQUFsQjtBQUNBQSxhQUFPLENBQUMsYUFBRCxDQUFQLEdBQXlCLE1BQXpCO0FBQ0g7O0FBRURJLFdBQU8sQ0FBQ0MsSUFBUixDQUFhTCxPQUFiO0FBQ0gsR0FURDs7QUFXQSxTQUFPO0FBQ0g7QUFDQUssUUFBSSxFQUFFLGdCQUFXO0FBQ2JOLGtCQUFZO0FBQ2Y7QUFKRSxHQUFQO0FBTUgsQ0FuQnlCLEVBQTFCLEMsQ0FxQkE7OztBQUNBTyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNULHFCQUFtQixDQUFDTyxJQUFwQjtBQUNILENBRkQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL2Jhc2ljLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1zVGlueU1DRUJhc2ljID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUJhc2ljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge3NlbGVjdG9yOiAnI2t0X2RvY3NfdGlueW1jZV9iYXNpYyd9O1xuXG4gICAgICAgIGlmIChLVEFwcC5pc0RhcmtNb2RlKCkpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbJ3NraW4nXSA9ICdveGlkZS1kYXJrJztcbiAgICAgICAgICAgIG9wdGlvbnNbJ2NvbnRlbnRfY3NzJ10gPSAnZGFyayc7XG4gICAgICAgIH1cblxuICAgICAgICB0aW55bWNlLmluaXQob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVCYXNpYygpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RGb3Jtc1RpbnlNQ0VCYXNpYy5pbml0KCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/tinymce/basic.js"]();
/******/ 	
/******/ })()
;