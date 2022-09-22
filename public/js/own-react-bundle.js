/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/createElement.js":
/*!******************************!*\
  !*** ./lib/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\n/**\n *\n * @param {HTMLElement} element\n * @param {object} props\n * @param {object} state\n * @returns {HTMLElement}\n */\nconst createElement = ({\n  element,\n  props,\n  state,\n  children,\n  parentElement,\n}) => {\n  // create a new element\n  const _htmlElement = document?.createElement(element);\n\n  // add the props to the element\n  Object.keys(props)?.map((propName) => {\n    if (propName.includes(\"on\")) {\n      // if prop is of event type then add event listener\n      _htmlElement.addEventListener(propName.slice(2), props[propName]);\n    }\n    if (propName.toLowerCase() === \"classname\" || propName === \"class\") {\n      // if prop is className\n      _htmlElement.setAttribute(\"class\", props[propName]);\n    }\n    // rest other propNames\n    _htmlElement?.setAttribute(propName, props[propName]);\n  });\n\n  // store the state in the element\n  _htmlElement.state = {};\n  _htmlElement.state = {\n    ...state,\n  };\n\n  // append child to parent element if parent element is passed as _htmlElement\n  if (parentElement && parentElement instanceof HTMLElement) {\n    parentElement.appendChild(_htmlElement);\n  }\n\n  // add the children to the element\n  if (\n    (typeof children === \"string\") |\n    (typeof children === \"number\") |\n    (typeof children === \"boolean\") |\n    (typeof children === \"undefined\") |\n    (children === null)\n  ) {\n    _htmlElement.innerHTML = children;\n  } else {\n    children?.map((child) => {\n      createElement({\n        element: child?.element,\n        props: child?.props,\n        state: child?.state,\n        children: child?.children,\n        parentElement: _htmlElement,\n      });\n    });\n  }\n\n  // return the most top-level element\n  return _htmlElement;\n};\n\n// createElement(\"div\", { id: \"root\", onclick: () => alert(\"Clicked\") }, {});\n\n\n//# sourceURL=webpack://own-react-lib/./lib/createElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* reexport safe */ _lib_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)\n/* harmony export */ });\n/* harmony import */ var _lib_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/createElement */ \"./lib/createElement.js\");\n\n\n(function createDOMNode() {\n  const root = document.body;\n  function handleOnClick() {\n    alert(\"Clicked\");\n  }\n  (0,_lib_createElement__WEBPACK_IMPORTED_MODULE_0__.createElement)({\n    // elementType\n    element: \"div\",\n    // props\n    props: { id: \"root\", className: \"root\", onclick: handleOnClick },\n    state: {\n      // state\n      name: \"John Doe\",\n    },\n    children: [\n      // children\n      {\n        element: \"pre\", // elementType\n        props: {\n          // props\n          className: \"heading\",\n        },\n        state: {\n          // state\n          name: \"John Doe's child\",\n        },\n        children: [\n          // children\n          {\n            // elementType\n            element: \"h1\",\n            props: {\n              // props\n              className: \"heading\",\n            },\n            state: {\n              // state\n              name: \"John Doe's child\",\n            },\n            // children\n            children: \"This is compiled under webpack\",\n          },\n        ],\n      },\n    ],\n    parentElement: root,\n  });\n})();\n\n\n\n//# sourceURL=webpack://own-react-lib/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;