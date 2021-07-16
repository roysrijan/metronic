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

/***/ "./resources/assets/core/js/custom/documentation/general/draggable/cards.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/draggable/cards.js ***!
  \**********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDraggableCards = function () {\n  // Private functions\n  var exampleCards = function exampleCards() {\n    var containers = document.querySelectorAll('.draggable-zone');\n\n    if (containers.length === 0) {\n      return false;\n    }\n\n    var swappable = new Sortable[\"default\"](containers, {\n      draggable: '.draggable',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleCards();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableCards.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kcmFnZ2FibGUvY2FyZHMuanM/ZWY5MyJdLCJuYW1lcyI6WyJLVERyYWdnYWJsZUNhcmRzIiwiZXhhbXBsZUNhcmRzIiwiY29udGFpbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInN3YXBwYWJsZSIsIlNvcnRhYmxlIiwiZHJhZ2dhYmxlIiwiaGFuZGxlIiwibWlycm9yIiwiYXBwZW5kVG8iLCJjb25zdHJhaW5EaW1lbnNpb25zIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBVztBQUM5QjtBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVc7QUFDMUIsUUFBSUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFqQjs7QUFFQSxRQUFJRixVQUFVLENBQUNHLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBSUMsU0FBUyxHQUFHLElBQUlDLFFBQVEsV0FBWixDQUFxQkwsVUFBckIsRUFBaUM7QUFDN0NNLGVBQVMsRUFBRSxZQURrQztBQUU3Q0MsWUFBTSxFQUFFLDhCQUZxQztBQUc3Q0MsWUFBTSxFQUFFO0FBQ0o7QUFDQUMsZ0JBQVEsRUFBRSxNQUZOO0FBR0pDLDJCQUFtQixFQUFFO0FBSGpCO0FBSHFDLEtBQWpDLENBQWhCO0FBU0gsR0FoQkQ7O0FBa0JBLFNBQU87QUFDSDtBQUNBQyxRQUFJLEVBQUUsZ0JBQVc7QUFDYlosa0JBQVk7QUFDZjtBQUpFLEdBQVA7QUFNSCxDQTFCc0IsRUFBdkIsQyxDQTRCQTs7O0FBQ0FhLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ2Ysa0JBQWdCLENBQUNhLElBQWpCO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2RyYWdnYWJsZS9jYXJkcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1REcmFnZ2FibGVDYXJkcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQ2FyZHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtem9uZScpO1xyXG5cclxuICAgICAgICBpZiAoY29udGFpbmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHN3YXBwYWJsZSA9IG5ldyBTb3J0YWJsZS5kZWZhdWx0KGNvbnRhaW5lcnMsIHtcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiAnLmRyYWdnYWJsZScsXHJcbiAgICAgICAgICAgIGhhbmRsZTogJy5kcmFnZ2FibGUgLmRyYWdnYWJsZS1oYW5kbGUnLFxyXG4gICAgICAgICAgICBtaXJyb3I6IHtcclxuICAgICAgICAgICAgICAgIC8vYXBwZW5kVG86IHNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdib2R5JyxcclxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbkRpbWVuc2lvbnM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQ2FyZHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1REcmFnZ2FibGVDYXJkcy5pbml0KCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/draggable/cards.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/draggable/cards.js"]();
/******/ 	
/******/ })()
;