/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Frame'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './LS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Main = /*#__PURE__*/function (_LS) {
  function Main() {
    _classCallCheck(this, Main);
    return _callSuper(this, Main, arguments);
  }
  _inherits(Main, _LS);
  return _createClass(Main, null, [{
    key: "init",
    value: function init() {
      this.storageInit({
        key: 'niceArt'
      });
      if (document.querySelector('[data-create]')) {
        this.initCreate();
      } else if (document.querySelector('[data-read]')) {
        this.initRead();
      } else if (document.querySelector('[data-delete]')) {
        this.initDelete();
      } else if (document.querySelector('[data-edit]')) {
        this.initEdit();
      } else if (document.querySelector('[data-show]')) {
        this.initShow();
      }
    }
  }, {
    key: "initShow",
    value: function initShow() {
      var frames = this.read();
      var id = window.location.hash.slice(1); // id paemimas is hastago
      var frameToShow = frames.find(function (f) {
        return f.id == id;
      });
      if (!frameToShow) {
        window.location.href = 'read.html'; // puslapio redirectas
      }
      var f = document.querySelector('[data-frame]');
      var frame = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './Frame'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(24, frameToShow.frame, f, 'view');
      frame.addBorders('transparent', 1);
    }
  }, {
    key: "initDelete",
    value: function initDelete() {
      var _this = this;
      var frames = this.read();
      var id = window.location.hash.slice(1); // id paemimas is hastago
      var frame = frames.find(function (f) {
        return f.id == id;
      });
      if (!frame) {
        window.location.href = 'read.html'; // puslapio redirectas
      }
      document.querySelector('[data-art-title]').innerText = frame.title;
      var destroyButton = document.querySelector('[data-destroy]');
      destroyButton.addEventListener('click', function (_) {
        _this.destroy(frame.id);
        window.location.href = 'read.html';
      });
    }
  }, {
    key: "initRead",
    value: function initRead() {
      var frames = this.read();
      var template = document.querySelector('template');
      var listEl = document.querySelector('[data-list]');
      frames.forEach(function (activeFrame) {
        var clone = template.content.cloneNode(true);
        clone.querySelector('[data-title]').textContent = activeFrame.title;
        clone.querySelector('[data-edit]').setAttribute('href', 'edit.html#' + activeFrame.id);
        clone.querySelector('[data-delete]').setAttribute('href', 'delete.html#' + activeFrame.id);
        clone.querySelector('[data-show]').setAttribute('href', 'show.html#' + activeFrame.id);
        var f = clone.querySelector('[data-frame]');
        var frame = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './Frame'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(4, activeFrame.frame, f, 'view');
        frame.addBorders('gray', 1);
        listEl.appendChild(clone);
      });
    }
  }, {
    key: "initEdit",
    value: function initEdit() {
      var _this2 = this;
      var frames = this.read();
      var id = window.location.hash.slice(1); // id paemimas is hastago
      var frameToEdit = frames.find(function (f) {
        return f.id == id;
      });
      if (!frameToEdit) {
        window.location.href = 'read.html'; // puslapio redirectas
      }
      var f = document.querySelector('[data-edit-frame]');
      var colorInput = document.querySelector('[type="color"]');
      var titleInput = document.querySelector('input[data-title]');
      var saveButton = document.querySelector('button[data-save]');
      var clear = document.querySelector('button[data-clear]');
      titleInput.value = frameToEdit.title;
      var frame = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './Frame'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(10, frameToEdit.frame, f, 'edit');
      frame.addBorders('gray', 1);
      frame.setActiveColor(colorInput.value);
      colorInput.addEventListener('change', function (e) {
        frame.setActiveColor(e.target.value);
      });
      clear.addEventListener('click', function (_) {
        frame.reset();
      });
      saveButton.addEventListener('click', function (_) {
        _this2.update(frameToEdit.id, {
          frame: frame["export"](),
          title: titleInput.value
        });
        window.location.href = 'read.html';
      });
    }
  }, {
    key: "initCreate",
    value: function initCreate() {
      var _this3 = this;
      var f = document.querySelector('[data-create-frame]');
      var colorInput = document.querySelector('[type="color"]');
      var titleInput = document.querySelector('input[data-title]');
      var saveButton = document.querySelector('button[data-save]');
      var clear = document.querySelector('button[data-clear]');
      var aiButton = document.querySelector('button[data-ai]');
      var frame = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './Frame'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(10, 20, f, 'create');
      frame.addBorders('gray', 1);
      frame.setActiveColor(colorInput.value);
      colorInput.addEventListener('change', function (e) {
        frame.setActiveColor(e.target.value);
      });
      clear.addEventListener('click', function (_) {
        frame.reset();
      });
      aiButton.addEventListener('click', function (_) {
        frame.ai();
      });
      saveButton.addEventListener('click', function (_) {
        _this3.store({
          frame: frame["export"](),
          title: titleInput.value
        });
        colorInput.value = '#000000';
        frame.reset();
        titleInput.value = '';
      });
    }
  }]);
}(Object(function webpackMissingModule() { var e = new Error("Cannot find module './LS'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/Main.js");
console.log('Labas Projektai');

_Main__WEBPACK_IMPORTED_MODULE_0__["default"].init();

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/app": 0,
/******/ 			"public/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproject"] = self["webpackChunkproject"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;