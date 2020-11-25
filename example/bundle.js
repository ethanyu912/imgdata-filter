/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_filter_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/filter/index */ \"./src/filter/index.ts\");\n\n\nconst origin = document.getElementById('image-origin');\nconst img = new Image();\n\nwindow.onload = () => {\n    //     img.addEventListener('load', imgOnload, false);\n    //     img.src = './image/instagram.jpg';\n    //     origin.src = img.src;\n    // }\n\n    // const imgOnload = () => {\n    //     const canvasList = document.getElementsByTagName('canvas');\n    //     for (const each of canvasList) {\n    //         const id = each.getAttribute('id');\n    //         drawFilter(id);\n    //     }\n    // }\n\n    // const drawFilter = (id) => {\n    //     const canvas = document.getElementById(id);\n    //     canvas.width = origin.width;\n    //     canvas.height = origin.height;\n\n    //     const context = canvas.getContext('2d');\n    //     context.drawImage(img,\n    //         0,\n    //         0,\n    //         img.width,\n    //         img.height,\n    //         0,\n    //         0,\n    //         canvas.width,\n    //         canvas.height\n    //     );\n\n    //     let letters = id.split('-');\n    //     letters = letters.map((each) =>\n    //         each[0].toUpperCase() + each.slice(1)\n    //     );\n\n    //     const capitalized = letters.join('');\n    //     const fnName = `filter${capitalized}`;\n    //     filters[fnName](canvas, context);\n    var constraints = {\n        audio: true,\n        video: {\n            width: 414,\n            height: 240\n        }\n    };\n\n    var timer = null;\n    navigator.mediaDevices.getUserMedia(constraints)\n        .then(function (mediaStream) {\n            console.log(mediaStream)\n            var video = document.querySelector('video');\n            var canvas = document.querySelector('canvas-video');\n            var ctx = canvas.getContext('2d');\n            video.srcObject = mediaStream;\n            video.onloadedmetadata = function (e) {\n                video.play();\n\n                if (timer) {\n                    clearInterval(timer);\n                }\n                console.log(timer)\n                timer = setInterval(function (params) {\n                    ctx.drawImage(\n                        video,\n                        0,\n                        0\n                        // canvas.width,\n                        // canvas.height,\n                        // canvas.width,\n                        // canvas.height,\n                        // // (width - crop['crop_area']['w'] / factorWidth) / 2,\n                        // // (height - crop['crop_area']['h'] / factorHeight) / 2,\n                        // 0,\n                        // 0,\n                        // // crop['crop_area']['w'] / factorWidth,\n                        // // crop['crop_area']['h'] / factorHeight\n                        // canvas.width,\n                        // canvas.height\n                    );\n                }, 16);\n            };\n        })\n        .catch(function (err) {\n            console.log(err.name + \": \" + err.message);\n        }); // 总是在最后检查错误\n}\n\n//# sourceURL=webpack:///./example/index.js?");

/***/ }),

/***/ "./src/filter/1977.ts":
/*!****************************!*\
  !*** ./src/filter/1977.ts ***!
  \****************************/
/*! exports provided: filter1977 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter1977\", function() { return filter1977; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filter1977 = function filter1977(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: 0.5\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.3\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.4\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/1977.ts?");

/***/ }),

/***/ "./src/filter/aden.ts":
/*!****************************!*\
  !*** ./src/filter/aden.ts ***!
  \****************************/
/*! exports provided: filterAden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterAden\", function() { return filterAden; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterAden = function filterAden(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .1)');\n  context.globalCompositeOperation = 'multiply';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: 0.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.4\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/aden.ts?");

/***/ }),

/***/ "./src/filter/amaro.ts":
/*!*****************************!*\
  !*** ./src/filter/amaro.ts ***!
  \*****************************/
/*! exports provided: filterAmaro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterAmaro\", function() { return filterAmaro; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterAmaro = function filterAmaro(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .2)');\n  context.globalCompositeOperation = 'overlay';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.3\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/amaro.ts?");

/***/ }),

/***/ "./src/filter/ashby.ts":
/*!*****************************!*\
  !*** ./src/filter/ashby.ts ***!
  \*****************************/
/*! exports provided: filterAshby */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterAshby\", function() { return filterAshby; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterAshby = function filterAshby(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .35)');\n  context.globalCompositeOperation = 'lighten';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: 0.5\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.8\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/ashby.ts?");

/***/ }),

/***/ "./src/filter/brannan.ts":
/*!*******************************!*\
  !*** ./src/filter/brannan.ts ***!
  \*******************************/
/*! exports provided: filterBrannan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterBrannan\", function() { return filterBrannan; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterBrannan = function filterBrannan(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .4\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.02\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/brannan.ts?");

/***/ }),

/***/ "./src/filter/brooklyn.ts":
/*!********************************!*\
  !*** ./src/filter/brooklyn.ts ***!
  \********************************/
/*! exports provided: filterBrooklyn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterBrooklyn\", function() { return filterBrooklyn; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterBrooklyn = function filterBrooklyn(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(127, 187, 227, .2)');\n  context.globalCompositeOperation = 'overlay';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: .1\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/brooklyn.ts?");

/***/ }),

/***/ "./src/filter/charmes.ts":
/*!*******************************!*\
  !*** ./src/filter/charmes.ts ***!
  \*******************************/
/*! exports provided: filterCharmes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterCharmes\", function() { return filterCharmes; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterCharmes = function filterCharmes(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(0, 'rgba(125, 105, 24, .2)');\n  context.globalCompositeOperation = 'darken';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.35\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.05\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/charmes.ts?");

/***/ }),

/***/ "./src/filter/clarendon.ts":
/*!*********************************!*\
  !*** ./src/filter/clarendon.ts ***!
  \*********************************/
/*! exports provided: filterClarendon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterClarendon\", function() { return filterClarendon; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterClarendon = function filterClarendon(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(127, 187, 227, .4)');\n  context.globalCompositeOperation = 'overlay';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: .05\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/clarendon.ts?");

/***/ }),

/***/ "./src/filter/crema.ts":
/*!*****************************!*\
  !*** ./src/filter/crema.ts ***!
  \*****************************/
/*! exports provided: filterCrema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterCrema\", function() { return filterCrema; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterCrema = function filterCrema(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .2)');\n  context.globalCompositeOperation = 'multiply';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .5\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: .02\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/crema.ts?");

/***/ }),

/***/ "./src/filter/dogpatch.ts":
/*!********************************!*\
  !*** ./src/filter/dogpatch.ts ***!
  \********************************/
/*! exports provided: filterDogpatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterDogpatch\", function() { return filterDogpatch; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterDogpatch = function filterDogpatch(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.5\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/dogpatch.ts?");

/***/ }),

/***/ "./src/filter/earlybird.ts":
/*!*********************************!*\
  !*** ./src/filter/earlybird.ts ***!
  \*********************************/
/*! exports provided: filterEarlybird */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterEarlybird\", function() { return filterEarlybird; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterEarlybird = function filterEarlybird(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.5);\n  gradient.addColorStop(0, 'rgba(125, 105, 24, 0)');\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .15)');\n  context.globalCompositeOperation = 'multiply';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: .9\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.05\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/earlybird.ts?");

/***/ }),

/***/ "./src/filter/gingham.ts":
/*!*******************************!*\
  !*** ./src/filter/gingham.ts ***!
  \*******************************/
/*! exports provided: filterGingham */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterGingham\", function() { return filterGingham; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterGingham = function filterGingham(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(0, 'rgb(230, 230, 230)');\n  context.globalCompositeOperation = 'soft-light';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.1\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/gingham.ts?");

/***/ }),

/***/ "./src/filter/ginza.ts":
/*!*****************************!*\
  !*** ./src/filter/ginza.ts ***!
  \*****************************/
/*! exports provided: filterGinza */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterGinza\", function() { return filterGinza; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterGinza = function filterGinza(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(0, 'rgba(125, 105, 24, .15)');\n  context.globalCompositeOperation = 'darken';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.34\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.05\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/ginza.ts?");

/***/ }),

/***/ "./src/filter/hefe.ts":
/*!****************************!*\
  !*** ./src/filter/hefe.ts ***!
  \****************************/
/*! exports provided: filterHefe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterHefe\", function() { return filterHefe; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterHefe = function filterHefe(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.5);\n  gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');\n  gradient.addColorStop(1, 'rgba(0, 0, 0, .25)');\n  context.globalCompositeOperation = 'multiply';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .4\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.4\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.4\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.1\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/hefe.ts?");

/***/ }),

/***/ "./src/filter/helena.ts":
/*!******************************!*\
  !*** ./src/filter/helena.ts ***!
  \******************************/
/*! exports provided: filterHelena */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterHelena\", function() { return filterHelena; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterHelena = function filterHelena(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(0, 'rgba(158, 175, 30, .25)');\n  context.globalCompositeOperation = 'overlay';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .5\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.05\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.05\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.35\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/helena.ts?");

/***/ }),

/***/ "./src/filter/hudson.ts":
/*!******************************!*\
  !*** ./src/filter/hudson.ts ***!
  \******************************/
/*! exports provided: filterHudson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterHudson\", function() { return filterHudson; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterHudson = function filterHudson(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.5);\n  gradient.addColorStop(.25, 'rgba(25, 62, 167, 0)');\n  gradient.addColorStop(1, 'rgba(25, 62, 167, .25)');\n  context.globalCompositeOperation = 'multiply';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.05\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.15\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/hudson.ts?");

/***/ }),

/***/ "./src/filter/index.ts":
/*!*****************************!*\
  !*** ./src/filter/index.ts ***!
  \*****************************/
/*! exports provided: filter1977, filterAden, filterAmaro, filterAshby, filterBrannan, filterBrooklyn, filterCharmes, filterClarendon, filterCrema, filterDogpatch, filterEarlybird, filterGingham, filterGinza, filterHefe, filterHelena, filterHudson, filterInkwell, filterKelvin, filterJuno, filterLark, filterLofi, filterLudwig, filterMaven, filterMayfair, filterMoon, filterNashville, filterPerpetua, filterPoprocket, filterReyes, filterRise, filterSierra, filterSkyline, filterSlumber, filterStinson, filterSutro, filterToaster, filterValencia, filterVesper, filterWalden, filterWillow, filterXPro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _1977__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1977 */ \"./src/filter/1977.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter1977\", function() { return _1977__WEBPACK_IMPORTED_MODULE_0__[\"filter1977\"]; });\n\n/* harmony import */ var _aden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aden */ \"./src/filter/aden.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterAden\", function() { return _aden__WEBPACK_IMPORTED_MODULE_1__[\"filterAden\"]; });\n\n/* harmony import */ var _amaro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./amaro */ \"./src/filter/amaro.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterAmaro\", function() { return _amaro__WEBPACK_IMPORTED_MODULE_2__[\"filterAmaro\"]; });\n\n/* harmony import */ var _ashby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ashby */ \"./src/filter/ashby.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterAshby\", function() { return _ashby__WEBPACK_IMPORTED_MODULE_3__[\"filterAshby\"]; });\n\n/* harmony import */ var _brannan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brannan */ \"./src/filter/brannan.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterBrannan\", function() { return _brannan__WEBPACK_IMPORTED_MODULE_4__[\"filterBrannan\"]; });\n\n/* harmony import */ var _brooklyn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brooklyn */ \"./src/filter/brooklyn.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterBrooklyn\", function() { return _brooklyn__WEBPACK_IMPORTED_MODULE_5__[\"filterBrooklyn\"]; });\n\n/* harmony import */ var _charmes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charmes */ \"./src/filter/charmes.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterCharmes\", function() { return _charmes__WEBPACK_IMPORTED_MODULE_6__[\"filterCharmes\"]; });\n\n/* harmony import */ var _clarendon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clarendon */ \"./src/filter/clarendon.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterClarendon\", function() { return _clarendon__WEBPACK_IMPORTED_MODULE_7__[\"filterClarendon\"]; });\n\n/* harmony import */ var _crema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crema */ \"./src/filter/crema.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterCrema\", function() { return _crema__WEBPACK_IMPORTED_MODULE_8__[\"filterCrema\"]; });\n\n/* harmony import */ var _dogpatch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dogpatch */ \"./src/filter/dogpatch.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterDogpatch\", function() { return _dogpatch__WEBPACK_IMPORTED_MODULE_9__[\"filterDogpatch\"]; });\n\n/* harmony import */ var _earlybird__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./earlybird */ \"./src/filter/earlybird.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterEarlybird\", function() { return _earlybird__WEBPACK_IMPORTED_MODULE_10__[\"filterEarlybird\"]; });\n\n/* harmony import */ var _gingham__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gingham */ \"./src/filter/gingham.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterGingham\", function() { return _gingham__WEBPACK_IMPORTED_MODULE_11__[\"filterGingham\"]; });\n\n/* harmony import */ var _ginza__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ginza */ \"./src/filter/ginza.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterGinza\", function() { return _ginza__WEBPACK_IMPORTED_MODULE_12__[\"filterGinza\"]; });\n\n/* harmony import */ var _hefe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hefe */ \"./src/filter/hefe.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterHefe\", function() { return _hefe__WEBPACK_IMPORTED_MODULE_13__[\"filterHefe\"]; });\n\n/* harmony import */ var _helena__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helena */ \"./src/filter/helena.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterHelena\", function() { return _helena__WEBPACK_IMPORTED_MODULE_14__[\"filterHelena\"]; });\n\n/* harmony import */ var _hudson__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hudson */ \"./src/filter/hudson.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterHudson\", function() { return _hudson__WEBPACK_IMPORTED_MODULE_15__[\"filterHudson\"]; });\n\n/* harmony import */ var _inkwell__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inkwell */ \"./src/filter/inkwell.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterInkwell\", function() { return _inkwell__WEBPACK_IMPORTED_MODULE_16__[\"filterInkwell\"]; });\n\n/* harmony import */ var _kelvin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./kelvin */ \"./src/filter/kelvin.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterKelvin\", function() { return _kelvin__WEBPACK_IMPORTED_MODULE_17__[\"filterKelvin\"]; });\n\n/* harmony import */ var _juno__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./juno */ \"./src/filter/juno.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterJuno\", function() { return _juno__WEBPACK_IMPORTED_MODULE_18__[\"filterJuno\"]; });\n\n/* harmony import */ var _lark__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lark */ \"./src/filter/lark.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterLark\", function() { return _lark__WEBPACK_IMPORTED_MODULE_19__[\"filterLark\"]; });\n\n/* harmony import */ var _lofi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lofi */ \"./src/filter/lofi.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterLofi\", function() { return _lofi__WEBPACK_IMPORTED_MODULE_20__[\"filterLofi\"]; });\n\n/* harmony import */ var _ludwig__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ludwig */ \"./src/filter/ludwig.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterLudwig\", function() { return _ludwig__WEBPACK_IMPORTED_MODULE_21__[\"filterLudwig\"]; });\n\n/* harmony import */ var _maven__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./maven */ \"./src/filter/maven.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterMaven\", function() { return _maven__WEBPACK_IMPORTED_MODULE_22__[\"filterMaven\"]; });\n\n/* harmony import */ var _mayfair__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mayfair */ \"./src/filter/mayfair.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterMayfair\", function() { return _mayfair__WEBPACK_IMPORTED_MODULE_23__[\"filterMayfair\"]; });\n\n/* harmony import */ var _moon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./moon */ \"./src/filter/moon.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterMoon\", function() { return _moon__WEBPACK_IMPORTED_MODULE_24__[\"filterMoon\"]; });\n\n/* harmony import */ var _nashville__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./nashville */ \"./src/filter/nashville.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterNashville\", function() { return _nashville__WEBPACK_IMPORTED_MODULE_25__[\"filterNashville\"]; });\n\n/* harmony import */ var _perpetua__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./perpetua */ \"./src/filter/perpetua.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterPerpetua\", function() { return _perpetua__WEBPACK_IMPORTED_MODULE_26__[\"filterPerpetua\"]; });\n\n/* harmony import */ var _poprocket__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./poprocket */ \"./src/filter/poprocket.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterPoprocket\", function() { return _poprocket__WEBPACK_IMPORTED_MODULE_27__[\"filterPoprocket\"]; });\n\n/* harmony import */ var _reyes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./reyes */ \"./src/filter/reyes.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterReyes\", function() { return _reyes__WEBPACK_IMPORTED_MODULE_28__[\"filterReyes\"]; });\n\n/* harmony import */ var _rise__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rise */ \"./src/filter/rise.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterRise\", function() { return _rise__WEBPACK_IMPORTED_MODULE_29__[\"filterRise\"]; });\n\n/* harmony import */ var _sierra__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sierra */ \"./src/filter/sierra.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterSierra\", function() { return _sierra__WEBPACK_IMPORTED_MODULE_30__[\"filterSierra\"]; });\n\n/* harmony import */ var _skyline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./skyline */ \"./src/filter/skyline.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterSkyline\", function() { return _skyline__WEBPACK_IMPORTED_MODULE_31__[\"filterSkyline\"]; });\n\n/* harmony import */ var _slumber__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./slumber */ \"./src/filter/slumber.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterSlumber\", function() { return _slumber__WEBPACK_IMPORTED_MODULE_32__[\"filterSlumber\"]; });\n\n/* harmony import */ var _stinson__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./stinson */ \"./src/filter/stinson.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterStinson\", function() { return _stinson__WEBPACK_IMPORTED_MODULE_33__[\"filterStinson\"]; });\n\n/* harmony import */ var _sutro__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sutro */ \"./src/filter/sutro.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterSutro\", function() { return _sutro__WEBPACK_IMPORTED_MODULE_34__[\"filterSutro\"]; });\n\n/* harmony import */ var _toaster__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./toaster */ \"./src/filter/toaster.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterToaster\", function() { return _toaster__WEBPACK_IMPORTED_MODULE_35__[\"filterToaster\"]; });\n\n/* harmony import */ var _valencia__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./valencia */ \"./src/filter/valencia.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterValencia\", function() { return _valencia__WEBPACK_IMPORTED_MODULE_36__[\"filterValencia\"]; });\n\n/* harmony import */ var _vesper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./vesper */ \"./src/filter/vesper.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterVesper\", function() { return _vesper__WEBPACK_IMPORTED_MODULE_37__[\"filterVesper\"]; });\n\n/* harmony import */ var _walden__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./walden */ \"./src/filter/walden.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterWalden\", function() { return _walden__WEBPACK_IMPORTED_MODULE_38__[\"filterWalden\"]; });\n\n/* harmony import */ var _willow__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./willow */ \"./src/filter/willow.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterWillow\", function() { return _willow__WEBPACK_IMPORTED_MODULE_39__[\"filterWillow\"]; });\n\n/* harmony import */ var _x_pro__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./x-pro */ \"./src/filter/x-pro.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterXPro\", function() { return _x_pro__WEBPACK_IMPORTED_MODULE_40__[\"filterXPro\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/filter/index.ts?");

/***/ }),

/***/ "./src/filter/inkwell.ts":
/*!*******************************!*\
  !*** ./src/filter/inkwell.ts ***!
  \*******************************/
/*! exports provided: filterInkwell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterInkwell\", function() { return filterInkwell; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterInkwell = function filterInkwell(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: .85\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].grayscale(imgData, {\n    amount: 1\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/inkwell.ts?");

/***/ }),

/***/ "./src/filter/juno.ts":
/*!****************************!*\
  !*** ./src/filter/juno.ts ***!
  \****************************/
/*! exports provided: filterJuno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterJuno\", function() { return filterJuno; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterJuno = function filterJuno(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(0, 'rgba(127, 187, 227, .2)');\n  context.globalCompositeOperation = 'overlay';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.8\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/juno.ts?");

/***/ }),

/***/ "./src/filter/kelvin.ts":
/*!******************************!*\
  !*** ./src/filter/kelvin.ts ***!
  \******************************/
/*! exports provided: filterKelvin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterKelvin\", function() { return filterKelvin; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterKelvin = function filterKelvin(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.25);\n  gradient.addColorStop(0, 'rgba(149, 58, 0, .25)');\n  gradient.addColorStop(1, 'rgba(149, 58, 0, .55)');\n  context.globalCompositeOperation = 'overlay';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.5\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.1\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/kelvin.ts?");

/***/ }),

/***/ "./src/filter/lark.ts":
/*!****************************!*\
  !*** ./src/filter/lark.ts ***!
  \****************************/
/*! exports provided: filterLark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterLark\", function() { return filterLark; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterLark = function filterLark(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.3\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.25\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/lark.ts?");

/***/ }),

/***/ "./src/filter/lofi.ts":
/*!****************************!*\
  !*** ./src/filter/lofi.ts ***!
  \****************************/
/*! exports provided: filterLofi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterLofi\", function() { return filterLofi; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterLofi = function filterLofi(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.5\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/lofi.ts?");

/***/ }),

/***/ "./src/filter/ludwig.ts":
/*!******************************!*\
  !*** ./src/filter/ludwig.ts ***!
  \******************************/
/*! exports provided: filterLudwig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterLudwig\", function() { return filterLudwig; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterLudwig = function filterLudwig(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(0, 'rgba(125, 105, 24, .3)');\n  context.globalCompositeOperation = 'overlay';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.05\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.05\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 2\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/ludwig.ts?");

/***/ }),

/***/ "./src/filter/maven.ts":
/*!*****************************!*\
  !*** ./src/filter/maven.ts ***!
  \*****************************/
/*! exports provided: filterMaven */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterMaven\", function() { return filterMaven; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterMaven = function filterMaven(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(0, 'rgba(158, 175, 30, .25)');\n  context.globalCompositeOperation = 'darken';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.05\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.05\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.75\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/maven.ts?");

/***/ }),

/***/ "./src/filter/mayfair.ts":
/*!*******************************!*\
  !*** ./src/filter/mayfair.ts ***!
  \*******************************/
/*! exports provided: filterMayfair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterMayfair\", function() { return filterMayfair; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterMayfair = function filterMayfair(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.25);\n  gradient.addColorStop(0, 'rgba(175, 105, 24, 0)');\n  gradient.addColorStop(1, 'rgba(175, 105, 24, .4)');\n  context.globalCompositeOperation = 'multiply';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.1\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/mayfair.ts?");

/***/ }),

/***/ "./src/filter/moon.ts":
/*!****************************!*\
  !*** ./src/filter/moon.ts ***!
  \****************************/
/*! exports provided: filterMoon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterMoon\", function() { return filterMoon; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterMoon = function filterMoon(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.4\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: .95\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 0\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/moon.ts?");

/***/ }),

/***/ "./src/filter/nashville.ts":
/*!*********************************!*\
  !*** ./src/filter/nashville.ts ***!
  \*********************************/
/*! exports provided: filterNashville */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterNashville\", function() { return filterNashville; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterNashville = function filterNashville(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.25);\n  gradient.addColorStop(0, 'rgba(128, 78, 15, .5)');\n  gradient.addColorStop(1, 'rgba(128, 78, 15, .65)');\n  context.globalCompositeOperation = 'screen';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.5\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: .9\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.15\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/nashville.ts?");

/***/ }),

/***/ "./src/filter/perpetua.ts":
/*!********************************!*\
  !*** ./src/filter/perpetua.ts ***!
  \********************************/
/*! exports provided: filterPerpetua */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterPerpetua\", function() { return filterPerpetua; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterPerpetua = function filterPerpetua(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, 0, canvas.height);\n  gradient.addColorStop(0, 'rgba(0, 91, 154, .25)');\n  gradient.addColorStop(1, 'rgba(230, 193, 61, .25)');\n  context.globalCompositeOperation = 'multiply';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.1\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/perpetua.ts?");

/***/ }),

/***/ "./src/filter/poprocket.ts":
/*!*********************************!*\
  !*** ./src/filter/poprocket.ts ***!
  \*********************************/
/*! exports provided: filterPoprocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterPoprocket\", function() { return filterPoprocket; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterPoprocket = function filterPoprocket(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.25);\n  gradient.addColorStop(.4, 'rgba(206, 39, 70, .75)');\n  gradient.addColorStop(.8, 'rgba(0, 0, 0, 1)');\n  context.globalCompositeOperation = 'screen';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.5\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: .9\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.15\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/poprocket.ts?");

/***/ }),

/***/ "./src/filter/reyes.ts":
/*!*****************************!*\
  !*** ./src/filter/reyes.ts ***!
  \*****************************/
/*! exports provided: filterReyes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterReyes\", function() { return filterReyes; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterReyes = function filterReyes(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .75\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: .75\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.4\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/reyes.ts?");

/***/ }),

/***/ "./src/filter/rise.ts":
/*!****************************!*\
  !*** ./src/filter/rise.ts ***!
  \****************************/
/*! exports provided: filterRise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterRise\", function() { return filterRise; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterRise = function filterRise(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.25);\n  gradient.addColorStop(0, 'rgba(230, 193, 61, 0)');\n  gradient.addColorStop(1, 'rgba(230, 193, 61, .25)');\n  context.globalCompositeOperation = 'lighten';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: .9\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/rise.ts?");

/***/ }),

/***/ "./src/filter/sierra.ts":
/*!******************************!*\
  !*** ./src/filter/sierra.ts ***!
  \******************************/
/*! exports provided: filterSierra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterSierra\", function() { return filterSierra; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterSierra = function filterSierra(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.25);\n  gradient.addColorStop(0, 'rgba(128, 78, 15, .5)');\n  gradient.addColorStop(1, 'rgba(0, 0, 0, .65)');\n  context.globalCompositeOperation = 'screen';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.5\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: .9\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.15\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/sierra.ts?");

/***/ }),

/***/ "./src/filter/skyline.ts":
/*!*******************************!*\
  !*** ./src/filter/skyline.ts ***!
  \*******************************/
/*! exports provided: filterSkyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterSkyline\", function() { return filterSkyline; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterSkyline = function filterSkyline(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.2\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/skyline.ts?");

/***/ }),

/***/ "./src/filter/slumber.ts":
/*!*******************************!*\
  !*** ./src/filter/slumber.ts ***!
  \*******************************/
/*! exports provided: filterSlumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterSlumber\", function() { return filterSlumber; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterSlumber = function filterSlumber(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, 0, canvas.height);\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .2)');\n  context.globalCompositeOperation = 'darken';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.25\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/slumber.ts?");

/***/ }),

/***/ "./src/filter/stinson.ts":
/*!*******************************!*\
  !*** ./src/filter/stinson.ts ***!
  \*******************************/
/*! exports provided: filterStinson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterStinson\", function() { return filterStinson; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterStinson = function filterStinson(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .45)');\n  context.globalCompositeOperation = 'lighten';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.25\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/stinson.ts?");

/***/ }),

/***/ "./src/filter/sutro.ts":
/*!*****************************!*\
  !*** ./src/filter/sutro.ts ***!
  \*****************************/
/*! exports provided: filterSutro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterSutro\", function() { return filterSutro; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterSutro = function filterSutro(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.25);\n  gradient.addColorStop(.5, 'transparent');\n  gradient.addColorStop(1, 'rgba(0, 0, 0, .5)');\n  context.globalCompositeOperation = 'darken';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .4\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: .9\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.4\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.1\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/sutro.ts?");

/***/ }),

/***/ "./src/filter/toaster.ts":
/*!*******************************!*\
  !*** ./src/filter/toaster.ts ***!
  \*******************************/
/*! exports provided: filterToaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterToaster\", function() { return filterToaster; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterToaster = function filterToaster(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1);\n  gradient.addColorStop(0, 'rgb(128, 78, 15)');\n  gradient.addColorStop(1, 'rgba(0, 0, 0, .25)');\n  context.globalCompositeOperation = 'screen';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.5\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: .95\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.15\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/toaster.ts?");

/***/ }),

/***/ "./src/filter/valencia.ts":
/*!********************************!*\
  !*** ./src/filter/valencia.ts ***!
  \********************************/
/*! exports provided: filterValencia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterValencia\", function() { return filterValencia; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterValencia = function filterValencia(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(230, 193, 61, .1)');\n  context.globalCompositeOperation = 'lighten';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.1\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.1\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/valencia.ts?");

/***/ }),

/***/ "./src/filter/vesper.ts":
/*!******************************!*\
  !*** ./src/filter/vesper.ts ***!
  \******************************/
/*! exports provided: filterVesper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterVesper\", function() { return filterVesper; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterVesper = function filterVesper(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .25)');\n  context.globalCompositeOperation = 'overlay';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.15\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.3\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/vesper.ts?");

/***/ }),

/***/ "./src/filter/walden.ts":
/*!******************************!*\
  !*** ./src/filter/walden.ts ***!
  \******************************/
/*! exports provided: filterWalden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterWalden\", function() { return filterWalden; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterWalden = function filterWalden(canvas, context) {\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);\n  gradient.addColorStop(1, 'rgba(229, 240, 128, .5)');\n  context.globalCompositeOperation = 'darken';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: .8\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.4\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/walden.ts?");

/***/ }),

/***/ "./src/filter/willow.ts":
/*!******************************!*\
  !*** ./src/filter/willow.ts ***!
  \******************************/
/*! exports provided: filterWillow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterWillow\", function() { return filterWillow; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterWillow = function filterWillow(canvas, context) {\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.2\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: .85\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: .05\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .2\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/willow.ts?");

/***/ }),

/***/ "./src/filter/x-pro.ts":
/*!*****************************!*\
  !*** ./src/filter/x-pro.ts ***!
  \*****************************/
/*! exports provided: filterXPro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterXPro\", function() { return filterXPro; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterXPro = function filterXPro(canvas, context) {\n  var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.25);\n  gradient.addColorStop(0, 'rgba(0, 91, 154, .35)');\n  gradient.addColorStop(1, 'rgba(0, 0, 0, .65)');\n  context.globalCompositeOperation = 'multiply';\n  context.fillStyle = gradient;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  var imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .45\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.75\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.3\n  });\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.05\n  });\n  context.putImageData(imgData, 0, 0);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/x-pro.ts?");

/***/ }),

/***/ "./src/lib/blur.ts":
/*!*************************!*\
  !*** ./src/lib/blur.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (blur);\n\nfunction blur(imagedata) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    amount: 0\n  };\n  var i, j;\n  var data = imagedata.data;\n  var width = imagedata.width;\n  var height = imagedata.height; // let len = data.length\n\n  var amount = Math.round(opts.amount) || 0;\n  var dotIndex;\n  var gaussianDot;\n\n  if (!amount) {\n    return imagedata;\n  }\n\n  var weights = getWeights(amount);\n\n  for (j = 0; j < height; j++) {\n    for (i = 0; i < width; i++) {\n      dotIndex = i * 4 + j * 4 * width;\n      gaussianDot = getGaussianDot(i, j, weights, imagedata, amount);\n      data[dotIndex] = gaussianDot.r;\n      data[dotIndex + 1] = gaussianDot.g;\n      data[dotIndex + 2] = gaussianDot.b;\n      data[dotIndex + 3] = gaussianDot.a;\n    }\n  }\n\n  return imagedata;\n}\n\nfunction getGaussianDot(x, y, weights, imagedata, amount) {\n  var w = imagedata.width;\n  var h = imagedata.height;\n  var dotIndex = x * 4 + y * 4 * w;\n  var tempDotIndex;\n  var matrixObj = getDotMatrix(x, y, imagedata, amount, weights);\n  var dotMatrix = matrixObj.list;\n  var allWeights = matrixObj.allweights;\n  var ret = {\n    r: 0,\n    g: 0,\n    b: 0,\n    a: 0\n  };\n\n  for (var i = 0; i < dotMatrix.length; i++) {\n    tempDotIndex = dotIndex + dotMatrix[i]['x'] * 4 + dotMatrix[i]['y'] * w * 4;\n    ret.r += imagedata.data[tempDotIndex] * dotMatrix[i]['weight'] / allWeights;\n    ret.g += imagedata.data[tempDotIndex + 1] * dotMatrix[i]['weight'] / allWeights;\n    ret.b += imagedata.data[tempDotIndex + 2] * dotMatrix[i]['weight'] / allWeights;\n    ret.a += imagedata.data[tempDotIndex + 3] * dotMatrix[i]['weight'] / allWeights;\n  }\n\n  return ret;\n} // 获取已目标点为中心的半径为amount的实际weights矩阵\n\n\nfunction getDotMatrix(x, y, imagedata, amount, weights) {\n  var i, j;\n  var ret = [];\n  var allweights = 0;\n\n  for (i = -amount; i <= amount; i++) {\n    for (j = -amount; j <= amount; j++) {\n      // 将周围存在的点推入栈中\n      if (x + i >= 0 && x + i < imagedata.width && y + j >= 0 && y + j < imagedata.height) {\n        ret.push({\n          x: i,\n          y: j,\n          weight: weights[i][j]\n        });\n        allweights += weights[i][j];\n      }\n    }\n  }\n\n  return {\n    list: ret,\n    allweights: allweights\n  };\n}\n\nfunction getWeights(amount) {\n  var i, j;\n  var ret = {};\n\n  for (i = -amount; i <= amount; i++) {\n    ret[i] = {};\n\n    for (j = -amount; j <= amount; j++) {\n      ret[i][j] = gaussian(i, j, amount);\n    }\n  }\n\n  return ret;\n}\n\nfunction gaussian(x, y, deviation) {\n  var ret = Math.exp(-(x * x + y * y) / (2 * deviation * deviation)) / (2 * Math.PI * deviation * deviation);\n  return ret;\n}\n\n//# sourceURL=webpack:///./src/lib/blur.ts?");

/***/ }),

/***/ "./src/lib/brightness.ts":
/*!*******************************!*\
  !*** ./src/lib/brightness.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (brightness);\n\nfunction brightness(imagedata) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    amount: 0\n  };\n  var i = 0;\n  var data = imagedata.data;\n  var len = data.length;\n  var amount = +opts.amount || 0;\n  var r, g, b, a;\n\n  for (; i < len; i += 4) {\n    r = data[i] * amount;\n    g = data[i + 1] * amount;\n    b = data[i + 2] * amount;\n    data[i] = r;\n    data[i + 1] = g;\n    data[i + 2] = b;\n  }\n\n  return imagedata;\n}\n\n//# sourceURL=webpack:///./src/lib/brightness.ts?");

/***/ }),

/***/ "./src/lib/contrast.ts":
/*!*****************************!*\
  !*** ./src/lib/contrast.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (contrast);\n\nfunction contrast(imagedata) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    amount: 0\n  };\n  var i = 0;\n  var data = imagedata.data;\n  var len = data.length;\n  var amount = +opts.amount || 0;\n  var r, g, b;\n  var intercept = -(.5 * amount) + .5;\n\n  for (; i < len; i += 4) {\n    // r = data[i] * amount + intercept\n    // g = data[i + 1] * amount + intercept\n    // b = data[i + 2] * amount + intercept\n    r = 128 + (data[i] - 128) * amount;\n    g = 128 + (data[i + 1] - 128) * amount;\n    b = 128 + (data[i + 2] - 128) * amount;\n    data[i] = r;\n    data[i + 1] = g;\n    data[i + 2] = b;\n  }\n\n  return imagedata;\n}\n\n//# sourceURL=webpack:///./src/lib/contrast.ts?");

/***/ }),

/***/ "./src/lib/grayscale.ts":
/*!******************************!*\
  !*** ./src/lib/grayscale.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (grayscale);\n\nfunction grayscale(imagedata) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    amount: 0\n  };\n  var i = 0;\n  var data = imagedata.data;\n  var len = data.length;\n  var amount = +opts.amount || 0;\n  var compleAmount = 1 - amount;\n  var r, g, b;\n\n  for (; i < len; i += 4) {\n    r = (0.2126 + 0.7874 * compleAmount) * data[i] + (0.7152 - 0.7152 * compleAmount) * data[i + 1] + (0.0722 - 0.0722 * compleAmount) * data[i + 2];\n    g = (0.2126 - 0.2126 * compleAmount) * data[i] + (0.7152 + 0.2848 * compleAmount) * data[i + 1] + (0.0722 - 0.0722 * compleAmount) * data[i + 2];\n    b = (0.2126 - 0.2126 * compleAmount) * data[i] + (0.7152 - 0.7152 * compleAmount) * data[i + 1] + (0.0722 + 0.9278 * compleAmount) * data[i + 2];\n    data[i] = r;\n    data[i + 1] = g;\n    data[i + 2] = b;\n  }\n\n  return imagedata;\n}\n\n//# sourceURL=webpack:///./src/lib/grayscale.ts?");

/***/ }),

/***/ "./src/lib/hueRotate.ts":
/*!******************************!*\
  !*** ./src/lib/hueRotate.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (hueRotate);\n\nfunction hueRotate(imagedata) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    amount: 0\n  };\n  var i = 0;\n  var data = imagedata.data;\n  var len = data.length; // let opts = opts || { amount: 0 }\n\n  var amount = +opts.amount || 0;\n  var r, g, b, a;\n  var valueMatric = hueRotateMatrix(amount);\n\n  for (i; i < len; i += 4) {\n    r = valueMatric['a00'] * data[i] + valueMatric['a01'] * data[i + 1] + valueMatric['a02'] * data[i + 2] + 0 + 0;\n    g = valueMatric['a10'] * data[i] + valueMatric['a11'] * data[i + 1] + valueMatric['a12'] * data[i + 2] + 0 + 0;\n    b = valueMatric['a20'] * data[i] + valueMatric['a21'] * data[i + 1] + valueMatric['a22'] * data[i + 2];\n    data[i] = r;\n    data[i + 1] = g;\n    data[i + 2] = b;\n  }\n\n  return imagedata;\n}\n/**\n *\n * @param {*} value\n *\n *\n| a00 a01 a02 |    [+0.213 +0.715 +0.072]\n| a10 a11 a12 | =  [+0.213 +0.715 +0.072] +\n| a20 a21 a22 |    [+0.213 +0.715 +0.072]\n\n                        [+0.787 -0.715 -0.072]\ncos(hueRotate value) *  [-0.213 +0.285 -0.072] +\n                        [-0.213 -0.715 +0.928]\n\n                        [-0.213 -0.715+0.928]\nsin(hueRotate value) *  [+0.143 +0.140-0.283]\n                        [-0.787 +0.715+0.072]\n\n */\n\n\nfunction hueRotateMatrix(value) {\n  var a00, a01, a02, a10, a11, a12, a20, a21, a22;\n  var cosV = Math.cos(value);\n  var sinV = Math.sin(value);\n  a00 = .213 + cosV * .787 + sinV * -.213;\n  a10 = .213 + cosV * -.213 + sinV * .143;\n  a20 = .213 + cosV * -.213 + sinV * -.787;\n  a01 = .715 + cosV * -.715 + sinV * -.715;\n  a11 = .715 + cosV * .285 + sinV * .140;\n  a21 = .715 + cosV * -.715 + sinV * .715;\n  a02 = .072 + cosV * -.072 + sinV * .928;\n  a12 = .072 + cosV * -.072 + sinV * -.283;\n  a22 = .072 + cosV * .928 + sinV * .072;\n  return {\n    a00: a00,\n    a01: a01,\n    a02: a02,\n    a10: a10,\n    a11: a11,\n    a12: a12,\n    a20: a20,\n    a21: a21,\n    a22: a22\n  };\n}\n\n//# sourceURL=webpack:///./src/lib/hueRotate.ts?");

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grayscale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grayscale */ \"./src/lib/grayscale.ts\");\n/* harmony import */ var _saturate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saturate */ \"./src/lib/saturate.ts\");\n/* harmony import */ var _sepia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sepia */ \"./src/lib/sepia.ts\");\n/* harmony import */ var _hueRotate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hueRotate */ \"./src/lib/hueRotate.ts\");\n/* harmony import */ var _blur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blur */ \"./src/lib/blur.ts\");\n/* harmony import */ var _brightness__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brightness */ \"./src/lib/brightness.ts\");\n/* harmony import */ var _contrast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contrast */ \"./src/lib/contrast.ts\");\n/* harmony import */ var _opacity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./opacity */ \"./src/lib/opacity.ts\");\n/* harmony import */ var _invert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invert */ \"./src/lib/invert.ts\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  grayscale: _grayscale__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  saturate: _saturate__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  sepia: _sepia__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  hueRotate: _hueRotate__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  blur: _blur__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  brightness: _brightness__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  contrast: _contrast__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  opacity: _opacity__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  invert: _invert__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/lib/index.ts?");

/***/ }),

/***/ "./src/lib/invert.ts":
/*!***************************!*\
  !*** ./src/lib/invert.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (invert); // not consistency of css3 filter invert when amount > 1\n\nfunction invert(imagedata) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    amount: 0\n  };\n  var i = 0;\n  var data = imagedata.data;\n  var len = data.length;\n  var amount = +opts.amount || 0;\n  var r, g, b;\n  var tableValues = [+amount, 1 - amount];\n\n  for (; i < len; i += 4) {\n    r = getInterpolation(data[i] / 255, tableValues);\n    g = getInterpolation(data[i + 1] / 255, tableValues);\n    b = getInterpolation(data[i + 2] / 255, tableValues);\n    data[i] = r * 255;\n    data[i + 1] = g * 255;\n    data[i + 2] = b * 255;\n  }\n\n  return imagedata;\n}\n\nfunction getInterpolation(c, tableValues) {\n  if (c === 1) {\n    return tableValues[1];\n  }\n\n  return tableValues[0] + c * (tableValues[1] - tableValues[0]);\n}\n\n//# sourceURL=webpack:///./src/lib/invert.ts?");

/***/ }),

/***/ "./src/lib/opacity.ts":
/*!****************************!*\
  !*** ./src/lib/opacity.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (opacity);\n\nfunction opacity(imagedata) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    amount: 0\n  };\n  var i = 0;\n  var data = imagedata.data;\n  var len = data.length;\n  var amount = +opts.amount || 0;\n  var a;\n  var tableValues = [0, +amount];\n\n  for (; i < len; i += 4) {\n    a = getInterpolation(data[i + 3] / 255, tableValues);\n    data[i + 3] = a * 255;\n  }\n\n  return imagedata;\n}\n\nfunction getInterpolation(c, tableValues) {\n  if (c === 1) {\n    return tableValues[1];\n  }\n\n  return tableValues[0] + c * (tableValues[1] - tableValues[0]);\n}\n\n//# sourceURL=webpack:///./src/lib/opacity.ts?");

/***/ }),

/***/ "./src/lib/saturate.ts":
/*!*****************************!*\
  !*** ./src/lib/saturate.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (saturate);\n\nfunction saturate(imagedata) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    amount: 0\n  };\n  var i = 0;\n  var data = imagedata.data;\n  var len = data.length;\n  var amount = +opts.amount || 0;\n  var r, g, b;\n\n  for (; i < len; i += 4) {\n    r = (.213 + .787 * amount) * data[i] + (.715 - .715 * amount) * data[i + 1] + (.072 - .072 * amount) * data[i + 2];\n    g = (.213 - .213 * amount) * data[i] + (.715 + .285 * amount) * data[i + 1] + (.072 - .072 * amount) * data[i + 2];\n    b = (.213 - .213 * amount) * data[i] + (.715 - .715 * amount) * data[i + 1] + (.072 + .928 * amount) * data[i + 2];\n    data[i] = r;\n    data[i + 1] = g;\n    data[i + 2] = b;\n  }\n\n  return imagedata;\n}\n\n//# sourceURL=webpack:///./src/lib/saturate.ts?");

/***/ }),

/***/ "./src/lib/sepia.ts":
/*!**************************!*\
  !*** ./src/lib/sepia.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (sepia);\n\nfunction sepia(imagedata) {\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    amount: 0\n  };\n  var i = 0;\n  var data = imagedata.data;\n  var len = data.length;\n  var amount = +opts.amount || 0;\n  var r, g, b;\n  var compleAmount = 1 - amount;\n\n  for (; i < len; i += 4) {\n    r = (0.393 + 0.607 * compleAmount) * data[i] + (0.769 - 0.769 * compleAmount) * data[i + 1] + (0.189 - 0.189 * compleAmount) * data[i + 2];\n    g = (0.349 - 0.349 * compleAmount) * data[i] + (0.684 + 0.314 * compleAmount) * data[i + 1] + (0.168 - 0.168 * compleAmount) * data[i + 2];\n    b = (0.272 - 0.272 * compleAmount) * data[i] + (0.534 - 0.534 * compleAmount) * data[i + 1] + (0.131 + 0.869 * compleAmount) * data[i + 2];\n    data[i] = r;\n    data[i + 1] = g;\n    data[i + 2] = b;\n  }\n\n  return imagedata;\n}\n\n//# sourceURL=webpack:///./src/lib/sepia.ts?");

/***/ })

/******/ });