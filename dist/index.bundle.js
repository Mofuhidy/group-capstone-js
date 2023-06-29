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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --dark-color: #18075e;\n  --purple-color: #430ec7;\n  --gray-color: #e1e1ea;\n  --pink-color: #bf5197;\n  --black-color: #060211;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background: var(--dark-color);\n  font-family: \"Poppins\", sans-serif;\n  font-size: 14px;\n}\n\nheader {\n  position: relative;\n}\n\nheader .gradient {\n  position: absolute;\n  background:\n    radial-gradient(\n      circle,\n      rgba(94, 55, 186, 1) 10%,\n      rgba(24, 7, 94, 1) 70%\n    );\n  height: 600px;\n  width: 600px;\n  top: -240px;\n  left: -190px;\n  z-index: -99;\n}\n\nnav {\n  color: var(--gray-color);\n  display: flex;\n  width: 100%;\n  margin: 2% 0;\n  align-items: center;\n}\n\nnav .logo {\n  margin: 0 5%;\n}\n\n.logo .nav-logo {\n  width: 160px;\n}\n\n.nav-menu ul {\n  display: flex;\n  gap: 5px;\n  margin-top: 5px;\n}\n\n.nav-item {\n  list-style: none;\n}\n\n.nav-item a {\n  text-decoration: none;\n  color: var(--gray-color);\n  font-weight: 500;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n}\n\n.pokemons-container {\n  display: grid;\n  grid-template-columns: 300px;\n  justify-content: center;\n  column-gap: 50px;\n  row-gap: 20px;\n  margin: 50px;\n}\n\n.pokemons-container .card-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  background-color: var(--gray-color);\n  border-radius: 5px;\n  height: 400px;\n}\n\n.pokemon-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n  font-size: 16px;\n  margin-top: 5px;\n}\n\n.likes-contain {\n  display: flex;\n  justify-content: space-between;\n  width: 50px;\n  margin-left: 200px;\n  font-size: 1.1rem;\n}\n\n.btn {\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  background-color: #420ec780;\n  color: var(--gray-color);\n  padding: 10px 15px;\n  border-radius: 5px;\n  margin-top: 8px;\n}\n\n.btn:hover {\n  background-color: var(--dark-color);\n  transform: translateY(-3px);\n}\n\ni {\n  cursor: pointer;\n  font-size: 1.4rem;\n}\n\ni:hover {\n  color: #bf5197;\n  transform: translateY(-3px) scale(1.1);\n}\n\n.card-wrapper img {\n  height: 250px;\n  width: 250px;\n  object-fit: contain;\n  background-color: #bf5197ab;\n  border-radius: 4.5px;\n  padding: 15px;\n}\n\n/* display site-wrapper when done with styling modal */\n\n.modal-popup-wrapper {\n  background-color: var(--gray-color);\n  padding: 2.125rem 0;\n  width: 60%;\n  height: 92vh;\n  overflow-y: scroll;\n  margin: auto;\n  position: fixed;\n  top: 50px;\n  left: 50%;\n  transform: translate(-50%);\n  -webkit-transform: translate(-50%);\n  -moz-transform: translate(-50%);\n  -ms-transform: translate(-50%);\n  -o-transform: translate(-50%);\n  color: var(--gray-color);\n  font-size: 1.1rem;\n  border-radius: 10px;\n}\n\n.modal-inner-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  width: 95%;\n  background-color: var(--purple-color);\n  padding: 0.75rem;\n  margin: auto;\n  border-radius: 8px;\n  text-align: center;\n}\n\n.cancel-icon {\n  text-align: right;\n  font-size: 1.8rem;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.cancel-icon:hover {\n  cursor: pointer;\n}\n\n.modal-inner-wrapper .img-cancel {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.modal-inner-wrapper .img-cancel img {\n  width: 50%;\n}\n\n.modal-inner-wrapper .img-cancel span {\n  font-size: 3rem;\n  font-weight: 900;\n  color: red;\n}\n\n.modal-inner-wrapper .modal-info {\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-inner-wrapper .left,\n.modal-inner-wrapper .right {\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-inner-wrapper .left {\n  text-align: left;\n}\n\n.comment-wrapper {\n  background-color: var(--dark-color);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0.75rem;\n  color: white;\n  border-radius: 10px;\n}\n\n.comments-count {\n  font-size: 1.3rem;\n}\n\n.comments {\n  background-color: var(--purple-color);\n  overflow-y: auto;\n  height: 100px;\n  list-style: none;\n  text-align: left;\n  padding-left: 65px;\n  padding-top: 10px;\n  border-radius: 8px;\n}\n\n.add-comments {\n  width: 70%;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-bottom: 1.5rem;\n}\n\n.add-comments .p1 {\n  text-align: center;\n  font-size: 1.38rem;\n}\n\n.add-comments button {\n  padding: 0.5rem;\n  font-size: 1.2rem;\n  width: fit-content;\n  margin: auto;\n  border-radius: 0.5rem;\n  -webkit-border-radius: 0.5rem;\n  -moz-border-radius: 0.5rem;\n  -ms-border-radius: 0.5rem;\n  -o-border-radius: 0.5rem;\n  cursor: pointer;\n}\n\n.add-comments input[type=\"text\"] {\n  width: 80%;\n  height: 1.9rem;\n}\n\n.add-comments input[type=\"text\"],\n.add-comments textarea {\n  text-align: left;\n  padding-left: 0.5rem;\n  justify-content: flex-start;\n  width: 100%;\n  outline: none;\n  border: none;\n  border-radius: 6px;\n}\n\n.blur {\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n}\n\n.hide-vertical {\n  overflow-y: hidden;\n}\n\n.hide-init {\n  display: none;\n}\n\n.footer {\n  width: 100%;\n}\n\n.footer-inner-wrapper {\n  border-top: 3px solid black;\n  border-bottom: 3px solid black;\n  color: var(--gray-color);\n  padding: 3rem 2rem;\n}\n\n.footer-inner-wrapper a {\n  color: var(--gray-color);\n}\n\nh3 {\n  font-size: 1.3rem;\n}\n\n.active a {\n  text-decoration: underline;\n  color: var(--pink-color);\n  display: flex;\n}\n\n.itemLikes {\n  margin-right: 5px;\n}\n\n@media screen and (min-width: 768px) {\n  .pokemons-container {\n    display: grid;\n    grid-template-columns: 300px 300px 300px;\n    justify-content: center;\n    column-gap: 50px;\n    row-gap: 20px;\n    margin: 50px;\n  }\n\n  .nav-menu ul {\n    display: flex;\n    gap: 90px;\n    margin-top: 5px;\n  }\n\n  body {\n    font-size: 16px;\n  }\n\n  .pokemons-container .card-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    background-color: var(--gray-color);\n    border-radius: 5px;\n    height: 450px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://group-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://group-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n\n\n\nwindow.onload = () => {\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://group-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiLinks.js":
/*!*********************************!*\
  !*** ./src/modules/apiLinks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comments: () => (/* binding */ comments),\n/* harmony export */   likesAPi: () => (/* binding */ likes),\n/* harmony export */   pokeApi: () => (/* binding */ pokeApi)\n/* harmony export */ });\nconst likes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3P9ifz6JhS0AXCdTzxPo/likes/';\nconst comments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3P9ifz6JhS0AXCdTzxPo/comments/';\nconst pokeApi = 'https://pokeapi.co/api/v2/pokemon/';\n\n\n\n//# sourceURL=webpack://group-capstone/./src/modules/apiLinks.js?");

/***/ }),

/***/ "./src/modules/apiOerations.js":
/*!*************************************!*\
  !*** ./src/modules/apiOerations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPokemonData: () => (/* binding */ getPokemonData),\n/* harmony export */   getPokemonLikes: () => (/* binding */ getPokemonLikes),\n/* harmony export */   postPokemonComment: () => (/* binding */ postPokemonComment),\n/* harmony export */   postPokemonLikes: () => (/* binding */ postPokemonLikes)\n/* harmony export */ });\n/* harmony import */ var _apiLinks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiLinks.js */ \"./src/modules/apiLinks.js\");\n\n\nconst getPokemonData = async () => {\n  const data = await fetch(_apiLinks_js__WEBPACK_IMPORTED_MODULE_0__.pokeApi);\n  const jsonData = data.json();\n  return jsonData;\n};\n\nconst getPokemonLikes = async () => {\n  const data = await fetch(_apiLinks_js__WEBPACK_IMPORTED_MODULE_0__.likesAPi);\n  const jsonData = data.json();\n  return jsonData;\n};\n\nconst postPokemonLikes = async (url, id) => {\n  await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: id }), // body data type must match \"Content-Type\" header\n  });\n};\n\n// post comment\nconst postPokemonComment = async (url, id, username, comment) => {\n  const res = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n\n    body: JSON.stringify({ item_id: id, username, comment }),\n    // body data type must match \"Content-Type\" header\n\n  });\n  return res;\n};\n\n\n\n//# sourceURL=webpack://group-capstone/./src/modules/apiOerations.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsCount: () => (/* binding */ commentsCount),\n/* harmony export */   getComments: () => (/* binding */ getComments)\n/* harmony export */ });\n/* harmony import */ var _apiLinks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiLinks.js */ \"./src/modules/apiLinks.js\");\n\n\nasync function getComments(id) {\n  const url = `${_apiLinks_js__WEBPACK_IMPORTED_MODULE_0__.comments}?item_id=${id}`;\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n}\n\nasync function commentsCount(id) {\n  const data = await getComments(id);\n  return data;\n}\n\n\n\n//# sourceURL=webpack://group-capstone/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/countItems.js":
/*!***********************************!*\
  !*** ./src/modules/countItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countItems: () => (/* binding */ countItems),\n/* harmony export */   itemsCount: () => (/* binding */ itemsCount)\n/* harmony export */ });\n/* harmony import */ var _apiLinks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiLinks.js */ \"./src/modules/apiLinks.js\");\n\n\nconst countItems = (item) => {\n  const total = document.querySelector('.itemsCount');\n  total.innerHTML = `(${item})`;\n};\n\nconst itemsCount = async () => {\n  const data = await fetch(_apiLinks_js__WEBPACK_IMPORTED_MODULE_0__.pokeApi);\n  const json = await data.json();\n  return json;\n};\n\n\n\n//# sourceURL=webpack://group-capstone/./src/modules/countItems.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiOerations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiOerations.js */ \"./src/modules/apiOerations.js\");\n/* harmony import */ var _apiLinks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiLinks.js */ \"./src/modules/apiLinks.js\");\n/* harmony import */ var _countItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countItems.js */ \"./src/modules/countItems.js\");\n/* harmony import */ var _modalOperations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalOperations.js */ \"./src/modules/modalOperations.js\");\n\n\n\n\n\n// variable to be exported\nconst container = document.querySelector('.pokemons-container');\n\nconst getPokemon = async (res) => {\n  // get the likes of the items before add more likes\n  const likes = await (0,_apiOerations_js__WEBPACK_IMPORTED_MODULE_0__.getPokemonLikes)();\n\n  const pokemonCards = await Promise.all(res.map(async (item) => {\n    const result = await fetch(item.url);\n    const pokemon = await result.json();\n    return pokemon;\n  }));\n\n  const ordered = pokemonCards.slice(1, 11).sort((a, b) => (a.id > b.id ? 1 : -1));\n\n  // count all Items\n  (0,_countItems_js__WEBPACK_IMPORTED_MODULE_2__.countItems)(ordered.length);\n  ordered.forEach((pokemon) => {\n    const likeIndex = likes.findIndex((like) => {\n      const itemId = like.item_id;\n      if (typeof itemId === 'string') {\n      // The item_id is a string\n        return Number(like.item_id) === pokemon.id;\n      }\n      // Ignore or handle the item differently\n      return false;\n    });\n\n    let likeCount;\n    if (likeIndex >= 0) {\n      likeCount = likes[likeIndex].likes;\n    } else {\n      likeCount = 0;\n    }\n\n    const card = `<div class=\"card-wrapper\" id='${pokemon.id}'>\n        <img src=\"${pokemon.sprites.other.dream_world.front_default}\" alt=\"${pokemon.name} image\">\n        <div class=\"pokemon-title\"> <h3>${pokemon.name}</h3> <i class=\"fa-regular fa-heart likeBtn\" id=\"${pokemon.id}\"></i></i>\n        </div>\n\n        <div>\n          <button type=\"button\" class=\"comment-btn btn\">Comment</button>\n            <div class=\"likes-contain\"><h4 class=\"itemLikes\">${likeCount}</h4><p>likes</p>\n            </div>\n            <input type=\"hidden\" id=\"ability\" value=${pokemon.abilities[0].ability.name}>\n            <input type=\"hidden\" id=\"weight\" value=${pokemon.weight}>\n            <input type=\"hidden\" id=\"height\" value=${pokemon.height}>\n            <input type=\"hidden\" id=\"move\" value=${pokemon.moves[0].move.name}>\n      </div>`;\n    container.innerHTML += card;\n\n    // add feature like functionality\n    const likeBtns = document.querySelectorAll('.likeBtn');\n    const likeCountNums = document.querySelectorAll('.itemLikes');\n\n    likeBtns.forEach((btn, index) => {\n      btn.addEventListener('click', async (e) => {\n        await (0,_apiOerations_js__WEBPACK_IMPORTED_MODULE_0__.postPokemonLikes)(_apiLinks_js__WEBPACK_IMPORTED_MODULE_1__.likesAPi, e.target.id);\n        let likeCount = Number(likeCountNums[index].textContent);\n        likeCount += 1;\n        likeCountNums[index].textContent = likeCount.toString();\n      });\n    });\n    (0,_modalOperations_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n};\n\nconst displayPokemons = async () => {\n  const data = await (0,_apiOerations_js__WEBPACK_IMPORTED_MODULE_0__.getPokemonData)();\n  getPokemon(data.results);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPokemons);\n\n\n//# sourceURL=webpack://group-capstone/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/modalOperations.js":
/*!****************************************!*\
  !*** ./src/modules/modalOperations.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countComments.js */ \"./src/modules/countComments.js\");\n/* harmony import */ var _apiLinks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiLinks.js */ \"./src/modules/apiLinks.js\");\n/* harmony import */ var _apiOerations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiOerations.js */ \"./src/modules/apiOerations.js\");\n\n\n\n\nconst siteWrapper = document.querySelector('.site-wrapper');\nconst modalPopupWrapper = document.querySelector('.modal-popup-wrapper');\nconst body = document.querySelector('body');\n\nconst cancelPopUp = () => {\n  siteWrapper.classList.toggle('blur');\n  body.classList.toggle('hide-vertical');\n  modalPopupWrapper.classList.toggle('hide-init');\n};\n\nconst popUpFunc = async () => {\n  const commentBtn = document.querySelectorAll('.comment-btn');\n  commentBtn.forEach((el) => {\n    el.addEventListener('click', () => {\n      siteWrapper.classList.toggle('blur');\n      body.classList.toggle('hide-vertical');\n      modalPopupWrapper.classList.toggle('hide-init');\n      const currentCard = el.parentNode.parentNode;\n      const elImg = currentCard.firstElementChild;\n      const elTitle = elImg.nextElementSibling.firstElementChild;\n      const ability = elImg.nextElementSibling.nextElementSibling\n        .firstElementChild.nextElementSibling.nextElementSibling;\n      const weight = ability.nextElementSibling;\n      const height = ability.nextElementSibling.nextElementSibling;\n      const move = ability.nextElementSibling.nextElementSibling\n        .nextElementSibling;\n\n      const element = `<div class=\"modal-inner-wrapper\">\n        <span class=\"cancel-icon\">X</span>\n          <div class=\"img-cancel\">\n            <img src=\"${elImg.src}\" alt=\"${elTitle.innerHTML}\">\n          </div>\n          <div class=\"modal-title\"><h1>${elTitle.innerHTML}</h1></div>\n          <div class=\"modal-info\">\n            <div class=\"left\">\n              <span>Abilities: ${ability.value}</span>\n              <span>Move: ${move.value}</span>\n            </div>\n              <div class=\"right\">\n              <span>Height: ${height.value}</span>\n              <span>Weight: ${weight.value}</span>\n            </div>\n          </div>\n            <div class=\"comment-wrapper\">\n              <div class=\"comments-count\">\n              <span>Comments (<span class=\"comment-count\">0</span>)</span>\n              </div>\n              <ul class=\"comments\">\n              </ul>\n              <form action=\"\" class=\"add-comments\">\n                <p class=\"p1\">Add a comment</p>\n                <input type=\"text\" name=\"username\" id=\"username\" placeholder=\"Your name\" required>\n                <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"10\" placeholder=\"Your insight\" required></textarea>\n                <button type=\"button\" class=\"post-btn\">Comment</button>\n              </form>\n            </div>\n        </div>`;\n\n      const displayComments = async () => {\n        const result = await (0,_countComments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(currentCard.id);\n        const commentWrapper = document.querySelector('.comments');\n        const commentCountWrapper = document.querySelector('.comment-count');\n\n        commentWrapper.innerHTML = ''; // Clear existing comments\n\n        if (result.error && result.error.status === 400) {\n          const li = '<li>There\\'s no comment yet</li>';\n          commentWrapper.innerHTML += li;\n          commentCountWrapper.textContent = '0';\n        } else if (result) {\n          const commentCount = result.length;\n          commentCountWrapper.textContent = commentCount.toString();\n\n          result.forEach((el) => {\n            const creationDate = new Date(el.creation_date);\n            const formattedDate = `${creationDate.getDate()}/${creationDate.getMonth() + 1}/${creationDate.getFullYear()}`;\n            const li = `<li>${formattedDate} ${el.username}: ${el.comment}</li>`;\n            commentWrapper.innerHTML += li;\n          });\n        }\n      };\n\n      modalPopupWrapper.innerHTML = element;\n      const postCommentBtn = document.querySelector('.post-btn');\n\n      //   post comment\n      postCommentBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        const username = document.querySelector('#username').value;\n        const comment = document.querySelector('#comment').value;\n\n        const usernameInput = document.querySelector('#username');\n        const commentInput = document.querySelector('#comment');\n\n        if (username.trim() === '') {\n          usernameInput.reportValidity();\n          return;\n        }\n\n        if (comment.trim() === '') {\n          commentInput.reportValidity();\n          return;\n        }\n        (0,_apiOerations_js__WEBPACK_IMPORTED_MODULE_2__.postPokemonComment)(_apiLinks_js__WEBPACK_IMPORTED_MODULE_1__.comments, currentCard.id, username, comment).then((res) => {\n          if (res.ok) {\n            displayComments();\n            document.querySelector('form').reset();\n          }\n        });\n      });\n      const cancelIcon = document.querySelector('.cancel-icon');\n      cancelIcon.addEventListener('click', cancelPopUp);\n\n      displayComments();\n    });\n  });\n};\n\nconst modalOperation = () => {\n  popUpFunc();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalOperation);\n\n\n//# sourceURL=webpack://group-capstone/./src/modules/modalOperations.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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