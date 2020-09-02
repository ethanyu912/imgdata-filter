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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/test/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/filter/1977.ts":
/*!****************************!*\
  !*** ./src/filter/1977.ts ***!
  \****************************/
/*! exports provided: filter1977 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter1977\", function() { return filter1977; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filter1977 = function filter1977(imgData) {\n  // sepia(.5)\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: 0.5\n  }); // hue-rotate(-30deg)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.3\n  }); // saturate(1.4)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.4\n  });\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/1977.ts?");

/***/ }),

/***/ "./src/filter/aden.ts":
/*!****************************!*\
  !*** ./src/filter/aden.ts ***!
  \****************************/
/*! exports provided: filterAden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterAden\", function() { return filterAden; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterAden = function filterAden(canvas, context, imgData) {\n  // sepia(.2)\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: 0.2\n  }); // brightness(1.15)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.15\n  }); // saturate(1.4)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.4\n  }); // clear context\n\n  context.clearRect(0, 0, canvas.width, canvas.height);\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height); // mix-blend-mode: multiply\n\n  context.globalCompositeOperation = 'multiply'; // background: rgba(125, 105, 24, .1)\n\n  gradient.addColorStop(0, 'rgba(125, 105, 24, .1)');\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .1)');\n  context.fillStyle = gradient; // put image before fillRect\n\n  context.putImageData(imgData, 0, 0);\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/aden.ts?");

/***/ }),

/***/ "./src/filter/amaro.ts":
/*!*****************************!*\
  !*** ./src/filter/amaro.ts ***!
  \*****************************/
/*! exports provided: filterAmaro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterAmaro\", function() { return filterAmaro; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterAmaro = function filterAmaro(canvas, context, imgData) {\n  // sepia(.35)\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .35\n  }); // contrast(1.1)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.1\n  }); // brightness(1.2)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.2\n  }); // saturate(1.3)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.3\n  }); // context.clearRect(0, 0, canvas.width, canvas.height);\n\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height); // mix-blend-mode: overlay\n\n  context.globalCompositeOperation = 'overlay'; // background: rgba(125, 105, 24, .2)\n\n  gradient.addColorStop(0, 'rgba(125, 105, 24, .2)');\n  context.fillStyle = gradient; // put image before fillRect\n\n  context.putImageData(imgData, 0, 0);\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/amaro.ts?");

/***/ }),

/***/ "./src/filter/ashby.ts":
/*!*****************************!*\
  !*** ./src/filter/ashby.ts ***!
  \*****************************/
/*! exports provided: filterAshby */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterAshby\", function() { return filterAshby; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterAshby = function filterAshby(canvas, context, imgData) {\n  // sepia(.5)\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: 0.5\n  }); // contrast(1.2)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.2\n  }); //saturate(1.8)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saturate(imgData, {\n    amount: 1.8\n  }); // clear context\n\n  context.clearRect(0, 0, canvas.width, canvas.height);\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height); // mix-blend-mode: overlay\n\n  context.globalCompositeOperation = 'lighten'; // background: rgba(125, 105, 24, .35)\n\n  gradient.addColorStop(0, 'rgba(125, 105, 24, .35)');\n  gradient.addColorStop(1, 'rgba(125, 105, 24, .35)');\n  context.fillStyle = gradient; // put image before fillRect\n\n  context.putImageData(imgData, 0, 0);\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/ashby.ts?");

/***/ }),

/***/ "./src/filter/brannan.ts":
/*!*******************************!*\
  !*** ./src/filter/brannan.ts ***!
  \*******************************/
/*! exports provided: filterBrannan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterBrannan\", function() { return filterBrannan; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterBrannan = function filterBrannan(imgData) {\n  // sepia(.4)\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .4\n  }); // contrast(1.25)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  }); // brightness(1.1)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.1\n  }); // hue-rotate(-2deg)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: -.02\n  });\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/brannan.ts?");

/***/ }),

/***/ "./src/filter/brooklyn.ts":
/*!********************************!*\
  !*** ./src/filter/brooklyn.ts ***!
  \********************************/
/*! exports provided: filterBrooklyn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterBrooklyn\", function() { return filterBrooklyn; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./src/lib/index.ts\");\n\nvar filterBrooklyn = function filterBrooklyn(canvas, context, imgData) {\n  // sepia(.25)\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sepia(imgData, {\n    amount: .25\n  }); // contrast(1.25)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contrast(imgData, {\n    amount: 1.25\n  }); // brightness(1.25)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].brightness(imgData, {\n    amount: 1.25\n  }); // hue-rotate(5deg)\n\n  _lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hueRotate(imgData, {\n    amount: .05\n  }); // clear context\n\n  context.clearRect(0, 0, canvas.width, canvas.height);\n  var gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height); // mix-blend-mode: overlay\n\n  context.globalCompositeOperation = 'overlay'; // background: rgba(127, 187, 227, .2)\n  // gradient.addColorStop(0, 'rgba(127, 187, 227, .2)');\n  // gradient.addColorStop(1, 'rgba(127, 187, 227, .2)');\n\n  context.fillStyle = gradient; // put image before fillRect\n\n  context.putImageData(imgData, 0, 0);\n  context.fillRect(0, 0, canvas.width, canvas.height);\n  return imgData;\n};\n\n//# sourceURL=webpack:///./src/filter/brooklyn.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: filter1977, filterAden, filterAmaro, filterAshby, filterBrannan, filterBrooklyn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filter_1977__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter/1977 */ \"./src/filter/1977.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter1977\", function() { return _filter_1977__WEBPACK_IMPORTED_MODULE_0__[\"filter1977\"]; });\n\n/* harmony import */ var _filter_aden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter/aden */ \"./src/filter/aden.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterAden\", function() { return _filter_aden__WEBPACK_IMPORTED_MODULE_1__[\"filterAden\"]; });\n\n/* harmony import */ var _filter_amaro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/amaro */ \"./src/filter/amaro.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterAmaro\", function() { return _filter_amaro__WEBPACK_IMPORTED_MODULE_2__[\"filterAmaro\"]; });\n\n/* harmony import */ var _filter_ashby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/ashby */ \"./src/filter/ashby.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterAshby\", function() { return _filter_ashby__WEBPACK_IMPORTED_MODULE_3__[\"filterAshby\"]; });\n\n/* harmony import */ var _filter_brannan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter/brannan */ \"./src/filter/brannan.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterBrannan\", function() { return _filter_brannan__WEBPACK_IMPORTED_MODULE_4__[\"filterBrannan\"]; });\n\n/* harmony import */ var _filter_brooklyn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/brooklyn */ \"./src/filter/brooklyn.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterBrooklyn\", function() { return _filter_brooklyn__WEBPACK_IMPORTED_MODULE_5__[\"filterBrooklyn\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.ts?");

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

/***/ }),

/***/ "./src/test/index.js":
/*!***************************!*\
  !*** ./src/test/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.ts\");\n\n\nconst origin = document.getElementById('image-origin');\nconst img = new Image();\n\nwindow.onload = () => {\n    img.addEventListener('load', imgOnload, false);\n    img.src = './image/instagram.jpg';\n    origin.src = img.src;\n}\n\nfunction imgOnload() {\n    drawFiler('1977');\n    drawFiler('aden');\n    drawFiler('amaro');\n    drawFiler('ashby');\n    drawFiler('brannan');\n    drawFiler('brooklyn');\n}\n\nfunction drawFiler(id) {\n    const canvas = document.getElementById(id);\n    canvas.width = origin.width;\n    canvas.height = origin.height;\n\n    let context = canvas.getContext('2d');\n    context.drawImage(img,\n        0,\n        0,\n        img.width,\n        img.height,\n        0,\n        0,\n        canvas.width,\n        canvas.height\n    );\n\n    let imgData = context.getImageData(0, 0, canvas.width, canvas.height);\n\n    switch (id) {\n        case '1977':\n            imgData = Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"filter1977\"])(imgData);\n            context.putImageData(imgData, 0, 0);\n            break;\n        case 'aden':\n            Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"filterAden\"])(canvas, context, imgData);\n            break;\n        case 'amaro':\n            Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"filterAmaro\"])(canvas, context, imgData);\n            break;\n        case 'ashby':\n            Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"filterAshby\"])(canvas, context, imgData);\n            break;\n        case 'brannan':\n            imgData = Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"filterBrannan\"])(imgData);\n            context.putImageData(imgData, 0, 0);\n            break;\n        case 'brooklyn':\n            Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"filterBrooklyn\"])(canvas, context, imgData);\n            break;\n        case '1977':\n            // imgData = filter1977(imgData);\n            break;\n\n        default:\n            break;\n    }\n    // context.putImageData(imgData, 0, 0);\n}\n\n//# sourceURL=webpack:///./src/test/index.js?");

/***/ })

/******/ });