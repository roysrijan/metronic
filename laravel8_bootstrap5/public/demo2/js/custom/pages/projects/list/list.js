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

/***/ "./resources/assets/demo2/js/custom/pages/projects/list/list.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/demo2/js/custom/pages/projects/list/list.js ***!
  \**********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTProjectList = function () {\n  var initChart = function initChart() {\n    // init chart\n    var element = document.getElementById(\"kt_project_list_chart\");\n\n    if (!element) {\n      return;\n    }\n\n    var config = {\n      type: 'doughnut',\n      data: {\n        datasets: [{\n          data: [30, 45, 25],\n          backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']\n        }],\n        labels: ['Active', 'Completed', 'Yet to start']\n      },\n      options: {\n        chart: {\n          fontFamily: 'inherit'\n        },\n        cutout: '75%',\n        cutoutPercentage: 65,\n        responsive: true,\n        maintainAspectRatio: false,\n        title: {\n          display: false\n        },\n        animation: {\n          animateScale: true,\n          animateRotate: true\n        },\n        tooltips: {\n          enabled: true,\n          intersect: false,\n          mode: 'nearest',\n          bodySpacing: 5,\n          yPadding: 10,\n          xPadding: 10,\n          caretPadding: 0,\n          displayColors: false,\n          backgroundColor: '#20D489',\n          titleFontColor: '#ffffff',\n          cornerRadius: 4,\n          footerSpacing: 0,\n          titleSpacing: 0\n        },\n        plugins: {\n          legend: {\n            display: false\n          }\n        }\n      }\n    };\n    var ctx = element.getContext('2d');\n    var myDoughnut = new Chart(ctx, config);\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initChart();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2RlbW8yL2pzL2N1c3RvbS9wYWdlcy9wcm9qZWN0cy9saXN0L2xpc3QuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsYUFBYSxHQUFHLFlBQVk7QUFDNUIsTUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBWTtBQUN4QjtBQUNBLFFBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLHVCQUF4QixDQUFkOztBQUVBLFFBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1Y7QUFDSDs7QUFFRCxRQUFJRyxNQUFNLEdBQUc7QUFDVEMsTUFBQUEsSUFBSSxFQUFFLFVBREc7QUFFVEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLFFBQUFBLFFBQVEsRUFBRSxDQUFDO0FBQ1BELFVBQUFBLElBQUksRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxDQURDO0FBRVBFLFVBQUFBLGVBQWUsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCO0FBRlYsU0FBRCxDQURSO0FBS0ZDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLFFBQUQsRUFBVyxXQUFYLEVBQXdCLGNBQXhCO0FBTE4sT0FGRztBQVNUQyxNQUFBQSxPQUFPLEVBQUU7QUFDTEMsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFVBQVUsRUFBRTtBQURULFNBREY7QUFJTEMsUUFBQUEsTUFBTSxFQUFFLEtBSkg7QUFLTEMsUUFBQUEsZ0JBQWdCLEVBQUUsRUFMYjtBQU1MQyxRQUFBQSxVQUFVLEVBQUUsSUFOUDtBQU9MQyxRQUFBQSxtQkFBbUIsRUFBRSxLQVBoQjtBQVFMQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsT0FBTyxFQUFFO0FBRE4sU0FSRjtBQVdMQyxRQUFBQSxTQUFTLEVBQUU7QUFDUEMsVUFBQUEsWUFBWSxFQUFFLElBRFA7QUFFUEMsVUFBQUEsYUFBYSxFQUFFO0FBRlIsU0FYTjtBQWVMQyxRQUFBQSxRQUFRLEVBQUU7QUFDTkMsVUFBQUEsT0FBTyxFQUFFLElBREg7QUFFTkMsVUFBQUEsU0FBUyxFQUFFLEtBRkw7QUFHTkMsVUFBQUEsSUFBSSxFQUFFLFNBSEE7QUFJTkMsVUFBQUEsV0FBVyxFQUFFLENBSlA7QUFLTkMsVUFBQUEsUUFBUSxFQUFFLEVBTEo7QUFNTkMsVUFBQUEsUUFBUSxFQUFFLEVBTko7QUFPTkMsVUFBQUEsWUFBWSxFQUFFLENBUFI7QUFRTkMsVUFBQUEsYUFBYSxFQUFFLEtBUlQ7QUFTTnRCLFVBQUFBLGVBQWUsRUFBRSxTQVRYO0FBVU51QixVQUFBQSxjQUFjLEVBQUUsU0FWVjtBQVdOQyxVQUFBQSxZQUFZLEVBQUUsQ0FYUjtBQVlOQyxVQUFBQSxhQUFhLEVBQUUsQ0FaVDtBQWFOQyxVQUFBQSxZQUFZLEVBQUU7QUFiUixTQWZMO0FBOEJMQyxRQUFBQSxPQUFPLEVBQUU7QUFDTEMsVUFBQUEsTUFBTSxFQUFFO0FBQ0psQixZQUFBQSxPQUFPLEVBQUU7QUFETDtBQURIO0FBOUJKO0FBVEEsS0FBYjtBQStDQSxRQUFJbUIsR0FBRyxHQUFHcEMsT0FBTyxDQUFDcUMsVUFBUixDQUFtQixJQUFuQixDQUFWO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLElBQUlDLEtBQUosQ0FBVUgsR0FBVixFQUFlakMsTUFBZixDQUFqQjtBQUNILEdBekRELENBRDRCLENBNEQ1Qjs7O0FBQ0EsU0FBTztBQUNIcUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2R6QyxNQUFBQSxTQUFTO0FBQ1o7QUFIRSxHQUFQO0FBS0gsQ0FsRW1CLEVBQXBCLEMsQ0FvRUE7OztBQUNBMEMsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDNUMsRUFBQUEsYUFBYSxDQUFDMEMsSUFBZDtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2RlbW8yL2pzL2N1c3RvbS9wYWdlcy9wcm9qZWN0cy9saXN0L2xpc3QuanM/NWE4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUUHJvamVjdExpc3QgPSBmdW5jdGlvbiAoKSB7ICAgIFxyXG4gICAgdmFyIGluaXRDaGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBpbml0IGNoYXJ0XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X3Byb2plY3RfbGlzdF9jaGFydFwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDUsIDI1XSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnIzAwQTNGRicsICcjNTBDRDg5JywgJyNFNEU2RUYnXVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnQWN0aXZlJywgJ0NvbXBsZXRlZCcsICdZZXQgdG8gc3RhcnQnXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGN1dG91dDogJzc1JScsXHJcbiAgICAgICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA2NSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlU2NhbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVJvdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICduZWFyZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBib2R5U3BhY2luZzogNSxcclxuICAgICAgICAgICAgICAgICAgICB5UGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgeFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjBENDg5JyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUZvbnRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcm5lclJhZGl1czogNCxcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXJTcGFjaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU3BhY2luZzogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGN0eCA9IGVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgbXlEb3VnaG51dCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbml0Q2hhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVFByb2plY3RMaXN0LmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVFByb2plY3RMaXN0IiwiaW5pdENoYXJ0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJ0eXBlIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWxzIiwib3B0aW9ucyIsImNoYXJ0IiwiZm9udEZhbWlseSIsImN1dG91dCIsImN1dG91dFBlcmNlbnRhZ2UiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRpdGxlIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImFuaW1hdGVTY2FsZSIsImFuaW1hdGVSb3RhdGUiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJpbnRlcnNlY3QiLCJtb2RlIiwiYm9keVNwYWNpbmciLCJ5UGFkZGluZyIsInhQYWRkaW5nIiwiY2FyZXRQYWRkaW5nIiwiZGlzcGxheUNvbG9ycyIsInRpdGxlRm9udENvbG9yIiwiY29ybmVyUmFkaXVzIiwiZm9vdGVyU3BhY2luZyIsInRpdGxlU3BhY2luZyIsInBsdWdpbnMiLCJsZWdlbmQiLCJjdHgiLCJnZXRDb250ZXh0IiwibXlEb3VnaG51dCIsIkNoYXJ0IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/demo2/js/custom/pages/projects/list/list.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/demo2/js/custom/pages/projects/list/list.js"]();
/******/ 	
/******/ })()
;