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

/***/ "./resources/assets/demo2/js/custom/account/api-keys/api-keys.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/demo2/js/custom/account/api-keys/api-keys.js ***!
  \***********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountAPIKeys = function () {\n  // Private functions\n  var initLicenceCopy = function initLicenceCopy() {\n    KTUtil.each(document.querySelectorAll('#kt_api_keys_table [data-action=\"copy\"]'), function (button) {\n      var tr = button.closest('tr');\n      var license = KTUtil.find(tr, '[data-bs-target=\"license\"]');\n      var clipboard = new ClipboardJS(button, {\n        target: license,\n        text: function text() {\n          return license.innerHTML;\n        }\n      });\n      clipboard.on('success', function (e) {\n        // Icons\n        var svgIcon = button.querySelector('.svg-icon');\n        var checkIcon = button.querySelector('.bi.bi-check'); // exit if check icon is already shown\n\n        if (checkIcon) {\n          return;\n        } // Create check icon\n\n\n        checkIcon = document.createElement('i');\n        checkIcon.classList.add('bi');\n        checkIcon.classList.add('bi-check');\n        checkIcon.classList.add('fs-2x'); // Append check icon\n\n        button.appendChild(checkIcon); // Highlight target\n\n        license.classList.add('text-success'); // Hide copy icon\n\n        svgIcon.classList.add('d-none'); // Set 3 seconds timeout to hide the check icon and show copy icon back\n\n        setTimeout(function () {\n          // Remove check icon\n          svgIcon.classList.remove('d-none'); // Show check icon back\n\n          button.removeChild(checkIcon); // Remove highlight\n\n          license.classList.remove('text-success');\n        }, 3000);\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initLicenceCopy();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountAPIKeys.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2RlbW8yL2pzL2N1c3RvbS9hY2NvdW50L2FwaS1rZXlzL2FwaS1rZXlzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGdCQUFnQixHQUFHLFlBQVk7QUFDL0I7QUFDQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVc7QUFDN0JDLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLHlDQUExQixDQUFaLEVBQWtGLFVBQVNDLE1BQVQsRUFBaUI7QUFDL0YsVUFBSUMsRUFBRSxHQUFHRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxJQUFmLENBQVQ7QUFDQSxVQUFJQyxPQUFPLEdBQUdQLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZSCxFQUFaLEVBQWdCLDRCQUFoQixDQUFkO0FBRUEsVUFBSUksU0FBUyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JOLE1BQWhCLEVBQXdCO0FBQ3BDTyxRQUFBQSxNQUFNLEVBQUVKLE9BRDRCO0FBRXBDSyxRQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYixpQkFBT0wsT0FBTyxDQUFDTSxTQUFmO0FBQ0g7QUFKbUMsT0FBeEIsQ0FBaEI7QUFPQUosTUFBQUEsU0FBUyxDQUFDSyxFQUFWLENBQWEsU0FBYixFQUF3QixVQUFTQyxDQUFULEVBQVk7QUFDaEM7QUFDQSxZQUFJQyxPQUFPLEdBQUdaLE1BQU0sQ0FBQ2EsYUFBUCxDQUFxQixXQUFyQixDQUFkO0FBQ0EsWUFBSUMsU0FBUyxHQUFHZCxNQUFNLENBQUNhLGFBQVAsQ0FBcUIsY0FBckIsQ0FBaEIsQ0FIZ0MsQ0FLaEM7O0FBQ0EsWUFBSUMsU0FBSixFQUFlO0FBQ1o7QUFDRixTQVIrQixDQVVoQzs7O0FBQ0FBLFFBQUFBLFNBQVMsR0FBR2hCLFFBQVEsQ0FBQ2lCLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBWjtBQUNBRCxRQUFBQSxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLElBQXhCO0FBQ0FILFFBQUFBLFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBeEI7QUFDQUgsUUFBQUEsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixPQUF4QixFQWRnQyxDQWdCaEM7O0FBQ0FqQixRQUFBQSxNQUFNLENBQUNrQixXQUFQLENBQW1CSixTQUFuQixFQWpCZ0MsQ0FtQmhDOztBQUNBWCxRQUFBQSxPQUFPLENBQUNhLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGNBQXRCLEVBcEJnQyxDQXNCaEM7O0FBQ0FMLFFBQUFBLE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEIsRUF2QmdDLENBeUJoQzs7QUFDQUUsUUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEI7QUFDQVAsVUFBQUEsT0FBTyxDQUFDSSxTQUFSLENBQWtCSSxNQUFsQixDQUF5QixRQUF6QixFQUZrQixDQUdsQjs7QUFDQXBCLFVBQUFBLE1BQU0sQ0FBQ3FCLFdBQVAsQ0FBbUJQLFNBQW5CLEVBSmtCLENBTWxCOztBQUNBWCxVQUFBQSxPQUFPLENBQUNhLFNBQVIsQ0FBa0JJLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0gsU0FSUyxFQVFQLElBUk8sQ0FBVjtBQVNILE9BbkNEO0FBb0NILEtBL0NEO0FBZ0RILEdBakRELENBRitCLENBcUQvQjs7O0FBQ0EsU0FBTztBQUNIRSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDNCLE1BQUFBLGVBQWU7QUFDbEI7QUFIRSxHQUFQO0FBS0gsQ0EzRHNCLEVBQXZCLEMsQ0E2REE7OztBQUNBQyxNQUFNLENBQUMyQixrQkFBUCxDQUEwQixZQUFXO0FBQ2pDN0IsRUFBQUEsZ0JBQWdCLENBQUM0QixJQUFqQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2RlbW8yL2pzL2N1c3RvbS9hY2NvdW50L2FwaS1rZXlzL2FwaS1rZXlzLmpzP2I5MzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEFjY291bnRBUElLZXlzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBpbml0TGljZW5jZUNvcHkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBLVFV0aWwuZWFjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcja3RfYXBpX2tleXNfdGFibGUgW2RhdGEtYWN0aW9uPVwiY29weVwiXScpLCBmdW5jdGlvbihidXR0b24pIHtcclxuICAgICAgICAgICAgdmFyIHRyID0gYnV0dG9uLmNsb3Nlc3QoJ3RyJyk7XHJcbiAgICAgICAgICAgIHZhciBsaWNlbnNlID0gS1RVdGlsLmZpbmQodHIsICdbZGF0YS1icy10YXJnZXQ9XCJsaWNlbnNlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZEpTKGJ1dHRvbiwge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBsaWNlbnNlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpY2Vuc2UuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJY29uc1xyXG4gICAgICAgICAgICAgICAgdmFyIHN2Z0ljb24gPSBidXR0b24ucXVlcnlTZWxlY3RvcignLnN2Zy1pY29uJyk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrSWNvbiA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuYmkuYmktY2hlY2snKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gZXhpdCBpZiBjaGVjayBpY29uIGlzIGFscmVhZHkgc2hvd25cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0ljb24pIHtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybjsgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBjaGVjayBpY29uXHJcbiAgICAgICAgICAgICAgICBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja0ljb24uY2xhc3NMaXN0LmFkZCgnYmknKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdiaS1jaGVjaycpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2ZzLTJ4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIGNoZWNrIGljb25cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjaGVja0ljb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCB0YXJnZXRcclxuICAgICAgICAgICAgICAgIGxpY2Vuc2UuY2xhc3NMaXN0LmFkZCgndGV4dC1zdWNjZXNzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSGlkZSBjb3B5IGljb25cclxuICAgICAgICAgICAgICAgIHN2Z0ljb24uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IDMgc2Vjb25kcyB0aW1lb3V0IHRvIGhpZGUgdGhlIGNoZWNrIGljb24gYW5kIHNob3cgY29weSBpY29uIGJhY2tcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNoZWNrIGljb25cclxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgY2hlY2sgaWNvbiBiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNoaWxkKGNoZWNrSWNvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBoaWdobGlnaHRcclxuICAgICAgICAgICAgICAgICAgICBsaWNlbnNlLmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1YmxpYyBtZXRob2RzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5pdExpY2VuY2VDb3B5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RBY2NvdW50QVBJS2V5cy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RBY2NvdW50QVBJS2V5cyIsImluaXRMaWNlbmNlQ29weSIsIktUVXRpbCIsImVhY2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJ0ciIsImNsb3Nlc3QiLCJsaWNlbnNlIiwiZmluZCIsImNsaXBib2FyZCIsIkNsaXBib2FyZEpTIiwidGFyZ2V0IiwidGV4dCIsImlubmVySFRNTCIsIm9uIiwiZSIsInN2Z0ljb24iLCJxdWVyeVNlbGVjdG9yIiwiY2hlY2tJY29uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/demo2/js/custom/account/api-keys/api-keys.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/demo2/js/custom/account/api-keys/api-keys.js"]();
/******/ 	
/******/ })()
;