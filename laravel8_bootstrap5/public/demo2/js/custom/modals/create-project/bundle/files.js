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

/***/ "./resources/assets/demo2/js/custom/modals/create-project/bundle/files.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/demo2/js/custom/modals/create-project/bundle/files.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval(" // Class definition\n\nvar KTModalCreateProjectFiles = function () {\n  // Variables\n  var nextButton;\n  var previousButton;\n  var form;\n  var stepper; // Private functions\n\n  var initForm = function initForm() {\n    // Project logo\n    // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage\n    var myDropzone = new Dropzone(\"#kt_modal_create_project_files_upload\", {\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    });\n  };\n\n  var handleForm = function handleForm() {\n    nextButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Disable button to avoid multiple click \n\n      nextButton.disabled = true; // Show loading indication\n\n      nextButton.setAttribute('data-kt-indicator', 'on'); // Simulate form submission\n\n      setTimeout(function () {\n        // Hide loading indication\n        nextButton.removeAttribute('data-kt-indicator'); // Enable button\n\n        nextButton.disabled = false; // form submit\n\n        form.submit(); // Go to next step\n\n        stepper.goNext();\n      }, 1500);\n    });\n    previousButton.addEventListener('click', function () {\n      stepper.goPrevious();\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      form = KTModalCreateProject.getForm();\n      stepper = KTModalCreateProject.getStepperObj();\n      nextButton = document.querySelector('[data-kt-element=\"files-next\"]');\n      previousButton = document.querySelector('[data-kt-element=\"files-previous\"]');\n      initForm();\n      handleForm();\n    }\n  };\n}(); // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTModalCreateProjectFiles;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2RlbW8yL2pzL2N1c3RvbS9tb2RhbHMvY3JlYXRlLXByb2plY3QvYnVuZGxlL2ZpbGVzLmpzP2VmZmMiXSwibmFtZXMiOlsiS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcyIsIm5leHRCdXR0b24iLCJwcmV2aW91c0J1dHRvbiIsImZvcm0iLCJzdGVwcGVyIiwiaW5pdEZvcm0iLCJteURyb3B6b25lIiwiRHJvcHpvbmUiLCJ1cmwiLCJwYXJhbU5hbWUiLCJtYXhGaWxlcyIsIm1heEZpbGVzaXplIiwiYWRkUmVtb3ZlTGlua3MiLCJhY2NlcHQiLCJmaWxlIiwiZG9uZSIsIm5hbWUiLCJoYW5kbGVGb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVkIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsInN1Ym1pdCIsImdvTmV4dCIsImdvUHJldmlvdXMiLCJpbml0IiwiS1RNb2RhbENyZWF0ZVByb2plY3QiLCJnZXRGb3JtIiwiZ2V0U3RlcHBlck9iaiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHlCQUF5QixHQUFHLFlBQVk7QUFDM0M7QUFDQSxNQUFJQyxVQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxPQUFKLENBTDJDLENBTzNDOztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVc7QUFDekI7QUFDQTtBQUNBLFFBQUlDLFVBQVUsR0FBRyxJQUFJQyxRQUFKLENBQWEsdUNBQWIsRUFBc0Q7QUFDdEVDLFNBQUcsRUFBRSx5Q0FEaUU7QUFDdEI7QUFDdkNDLGVBQVMsRUFBRSxNQUZrRDtBQUUxQztBQUNuQkMsY0FBUSxFQUFFLEVBSG1EO0FBSTdEQyxpQkFBVyxFQUFFLEVBSmdEO0FBSTVDO0FBQ2pCQyxvQkFBYyxFQUFFLElBTDZDO0FBTTdEQyxZQUFNLEVBQUUsZ0JBQVNDLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUN6QixZQUFJRCxJQUFJLENBQUNFLElBQUwsSUFBYSxrQkFBakIsRUFBcUM7QUFDakNELGNBQUksQ0FBQyxrQkFBRCxDQUFKO0FBQ0gsU0FGRCxNQUVPO0FBQ0hBLGNBQUk7QUFDUDtBQUNKO0FBWjRELEtBQXRELENBQWpCO0FBY0EsR0FqQkQ7O0FBbUJBLE1BQUlFLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDM0JoQixjQUFVLENBQUNpQixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFVQyxDQUFWLEVBQWE7QUFDakQ7QUFDQUEsT0FBQyxDQUFDQyxjQUFGLEdBRmlELENBSWpEOztBQUNBbkIsZ0JBQVUsQ0FBQ29CLFFBQVgsR0FBc0IsSUFBdEIsQ0FMaUQsQ0FPakQ7O0FBQ0FwQixnQkFBVSxDQUFDcUIsWUFBWCxDQUF3QixtQkFBeEIsRUFBNkMsSUFBN0MsRUFSaUQsQ0FVakQ7O0FBQ0FDLGdCQUFVLENBQUMsWUFBVztBQUNyQjtBQUNBdEIsa0JBQVUsQ0FBQ3VCLGVBQVgsQ0FBMkIsbUJBQTNCLEVBRnFCLENBSXJCOztBQUNBdkIsa0JBQVUsQ0FBQ29CLFFBQVgsR0FBc0IsS0FBdEIsQ0FMcUIsQ0FPckI7O0FBQ0FsQixZQUFJLENBQUNzQixNQUFMLEdBUnFCLENBVXJCOztBQUNBckIsZUFBTyxDQUFDc0IsTUFBUjtBQUNBLE9BWlMsRUFZUCxJQVpPLENBQVY7QUFhQSxLQXhCRDtBQTBCQXhCLGtCQUFjLENBQUNnQixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFZO0FBQ3BEZCxhQUFPLENBQUN1QixVQUFSO0FBQ0EsS0FGRDtBQUdBLEdBOUJEOztBQWdDQSxTQUFPO0FBQ047QUFDQUMsUUFBSSxFQUFFLGdCQUFZO0FBQ2pCekIsVUFBSSxHQUFHMEIsb0JBQW9CLENBQUNDLE9BQXJCLEVBQVA7QUFDQTFCLGFBQU8sR0FBR3lCLG9CQUFvQixDQUFDRSxhQUFyQixFQUFWO0FBQ0E5QixnQkFBVSxHQUFHK0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdDQUF2QixDQUFiO0FBQ0EvQixvQkFBYyxHQUFHOEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9DQUF2QixDQUFqQjtBQUVBNUIsY0FBUTtBQUNSWSxnQkFBVTtBQUNWO0FBVkssR0FBUDtBQVlBLENBdkUrQixFQUFoQyxDLENBeUVBOzs7QUFDQSxJQUFJLFNBQWlDLE9BQU9pQixNQUFNLENBQUNDLE9BQWQsS0FBMEIsV0FBL0QsRUFBNEU7QUFDM0VELFFBQU0sQ0FBQ0MsT0FBUCxHQUFpQm5DLHlCQUFqQjtBQUNBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2Fzc2V0cy9kZW1vMi9qcy9jdXN0b20vbW9kYWxzL2NyZWF0ZS1wcm9qZWN0L2J1bmRsZS9maWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHQvLyBWYXJpYWJsZXNcclxuXHR2YXIgbmV4dEJ1dHRvbjtcclxuXHR2YXIgcHJldmlvdXNCdXR0b247XHJcblx0dmFyIGZvcm07XHJcblx0dmFyIHN0ZXBwZXI7XHJcblxyXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblx0dmFyIGluaXRGb3JtID0gZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBQcm9qZWN0IGxvZ29cclxuXHRcdC8vIEZvciBtb3JlIGluZm8gYWJvdXQgRHJvcHpvbmUgcGx1Z2luIHZpc2l0OiAgaHR0cHM6Ly93d3cuZHJvcHpvbmVqcy5jb20vI3VzYWdlXHJcblx0XHR2YXIgbXlEcm9wem9uZSA9IG5ldyBEcm9wem9uZShcIiNrdF9tb2RhbF9jcmVhdGVfcHJvamVjdF9maWxlc191cGxvYWRcIiwgeyBcclxuXHRcdFx0dXJsOiBcImh0dHBzOi8va2VlbnRoZW1lcy5jb20vc2NyaXB0cy92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXHJcbiAgICAgICAgICAgIHBhcmFtTmFtZTogXCJmaWxlXCIsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXHJcbiAgICAgICAgICAgIG1heEZpbGVzOiAxMCxcclxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwLCAvLyBNQlxyXG4gICAgICAgICAgICBhZGRSZW1vdmVMaW5rczogdHJ1ZSxcclxuICAgICAgICAgICAgYWNjZXB0OiBmdW5jdGlvbihmaWxlLCBkb25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5uYW1lID09IFwianVzdGluYmllYmVyLmpwZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZShcIk5haGEsIHlvdSBkb24ndC5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cdFx0fSk7ICBcclxuXHR9XHJcblxyXG5cdHZhciBoYW5kbGVGb3JtID0gZnVuY3Rpb24oKSB7XHJcblx0XHRuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0Ly8gUHJldmVudCBkZWZhdWx0IGJ1dHRvbiBhY3Rpb25cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Ly8gRGlzYWJsZSBidXR0b24gdG8gYXZvaWQgbXVsdGlwbGUgY2xpY2sgXHJcblx0XHRcdG5leHRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0Ly8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cclxuXHRcdFx0bmV4dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XHJcblxyXG5cdFx0XHQvLyBTaW11bGF0ZSBmb3JtIHN1Ym1pc3Npb25cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBIaWRlIGxvYWRpbmcgaW5kaWNhdGlvblxyXG5cdFx0XHRcdG5leHRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xyXG5cclxuXHRcdFx0XHQvLyBFbmFibGUgYnV0dG9uXHJcblx0XHRcdFx0bmV4dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIGZvcm0gc3VibWl0XHJcblx0XHRcdFx0Zm9ybS5zdWJtaXQoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBHbyB0byBuZXh0IHN0ZXBcclxuXHRcdFx0XHRzdGVwcGVyLmdvTmV4dCgpO1xyXG5cdFx0XHR9LCAxNTAwKTsgXHRcdFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cHJldmlvdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHN0ZXBwZXIuZ29QcmV2aW91cygpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Ly8gUHVibGljIGZ1bmN0aW9uc1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRmb3JtID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0Rm9ybSgpO1xyXG5cdFx0XHRzdGVwcGVyID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0U3RlcHBlck9iaigpO1xyXG5cdFx0XHRuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cImZpbGVzLW5leHRcIl0nKTtcclxuXHRcdFx0cHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiZmlsZXMtcHJldmlvdXNcIl0nKTtcclxuXHJcblx0XHRcdGluaXRGb3JtKCk7XHJcblx0XHRcdGhhbmRsZUZvcm0oKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBXZWJwYWNrIHN1cHBvcnRcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRtb2R1bGUuZXhwb3J0cyA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0RmlsZXM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/demo2/js/custom/modals/create-project/bundle/files.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/demo2/js/custom/modals/create-project/bundle/files.js");
/******/ 	
/******/ })()
;