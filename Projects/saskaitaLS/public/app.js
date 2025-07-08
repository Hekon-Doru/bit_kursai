/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_InvoiceApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/InvoiceApp.js */ "./src/app/InvoiceApp.js");
// /src/app.js


document.addEventListener('DOMContentLoaded', function () {
  var app = new _app_InvoiceApp_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
});

/***/ }),

/***/ "./src/app/InvoiceApp.js":
/*!*******************************!*\
  !*** ./src/app/InvoiceApp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InvoiceApp)
/* harmony export */ });
/* harmony import */ var _classes_Invoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Invoice.js */ "./src/classes/Invoice.js");
/* harmony import */ var _classes_Sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/Sidebar.js */ "./src/classes/Sidebar.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// /src/app/InvoiceApp.js



var InvoiceApp = /*#__PURE__*/function () {
  function InvoiceApp() {
    _classCallCheck(this, InvoiceApp);
    this.invoices = JSON.parse(localStorage.getItem('invoices')) || [];
    this.sidebar = new _classes_Sidebar_js__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.container = document.getElementById('invoice-display');
    this.init();
  }
  return _createClass(InvoiceApp, [{
    key: "init",
    value: function init() {
      this.sidebar.render(this.invoices);
      if (this.invoices.length > 0) {
        this.renderInvoice(0);
      }
    }
  }, {
    key: "fetchInvoiceFromAPI",
    value: function () {
      var _fetchInvoiceFromAPI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return fetch('https://in3.dev/inv/');
            case 1:
              response = _context.v;
              _context.n = 2;
              return response.json();
            case 2:
              data = _context.v;
              return _context.a(2, data);
            case 3:
              _context.p = 3;
              _t = _context.v;
              console.error("Klaida gaunant sąskaitą iš API:", _t);
            case 4:
              return _context.a(2);
          }
        }, _callee, null, [[0, 3]]);
      }));
      function fetchInvoiceFromAPI() {
        return _fetchInvoiceFromAPI.apply(this, arguments);
      }
      return fetchInvoiceFromAPI;
    }()
  }, {
    key: "addInvoice",
    value: function addInvoice(invoiceData) {
      this.invoices.push(invoiceData);
      this.saveInvoicesToLocalStorage();
      this.sidebar.render(this.invoices, this.invoices.length - 1);
      this.renderInvoice(this.invoices.length - 1);
    }
  }, {
    key: "deleteInvoice",
    value: function deleteInvoice(index) {
      this.invoices.splice(index, 1);
      this.saveInvoicesToLocalStorage();
      this.sidebar.render(this.invoices, 0);
      if (this.invoices.length > 0) {
        this.renderInvoice(0);
      } else {
        this.container.innerHTML = '';
      }
    }
  }, {
    key: "renderInvoice",
    value: function renderInvoice(index) {
      var invoice = new _classes_Invoice_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.invoices[index], index, this);
      invoice.renderDisplay(this.container);
    }
  }, {
    key: "saveInvoicesToLocalStorage",
    value: function saveInvoicesToLocalStorage() {
      localStorage.setItem('invoices', JSON.stringify(this.invoices));
    }
  }]);
}();


/***/ }),

/***/ "./src/classes/Invoice.js":
/*!********************************!*\
  !*** ./src/classes/Invoice.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Invoice)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// /src/classes/Invoice.js
var Invoice = /*#__PURE__*/function () {
  function Invoice(data, index, app) {
    _classCallCheck(this, Invoice);
    this.data = data;
    this.index = index;
    this.app = app;
  }
  return _createClass(Invoice, [{
    key: "renderDisplay",
    value: function renderDisplay(container) {
      var div = document.createElement('div');
      div.className = 'invoice-card';
      var data = this.data;
      div.innerHTML = "\n      <h2>S\u0105skaita #<span>".concat(data.number, "</span></h2>\n      <p>I\u0161ra\u0161yta: <span>").concat(data.date, "</span></p>\n      <p>Apmok\u0117ti iki: <span>").concat(data.due_date, "</span></p>\n      <div class=\"seller-buyer-wrapper\">\n        <div class=\"seller-buyer-block\">\n          <h3>Pardav\u0117jas</h3>\n          <p>").concat(data.company.seller.name, "</p>\n          <p>Kodas: ").concat(data.company.seller.code, "</p>\n          <p>PVM: ").concat(data.company.seller.vat, "</p>\n          <p>Adresas: ").concat(data.company.seller.address, "</p>\n          <p>El. pa\u0161tas: ").concat(data.company.seller.email, "</p>\n          <p>Tel: ").concat(data.company.seller.phone, "</p>\n        </div>\n        <div class=\"seller-buyer-block\">\n          <h3>Pirk\u0117jas</h3>\n          <p>").concat(data.company.buyer.name, "</p>\n          <p>Kodas: ").concat(data.company.buyer.code, "</p>\n          <p>PVM: ").concat(data.company.buyer.vat, "</p>\n          <p>Adresas: ").concat(data.company.buyer.address, "</p>\n          <p>El. pa\u0161tas: ").concat(data.company.buyer.email, "</p>\n          <p>Tel: ").concat(data.company.buyer.phone, "</p>\n        </div>\n      </div>\n      <h3>Prek\u0117s</h3>\n      <div class=\"products-table-wrapper\"></div>\n      <div class=\"invoice-totals\"></div>\n    ");
      var productsTable = this.renderProductsTable(data.items);
      div.querySelector('.products-table-wrapper').appendChild(productsTable);

      // Sukuriame totals div atskirai nuo lentelės
      var totalsDiv = div.querySelector('.invoice-totals');
      var _this$calculateTotals = this.calculateTotals(data.items, data.shippingPrice),
        viso = _this$calculateTotals.viso,
        pvm = _this$calculateTotals.pvm,
        isViso = _this$calculateTotals.isViso;
      totalsDiv.innerHTML = "\n      <p>Pristatymas: \u20AC".concat(parseFloat(data.shippingPrice).toFixed(2), "</p>\n      <p>Preki\u0173 suma: \u20AC").concat(viso.toFixed(2), "</p>\n      <p>PVM suma: \u20AC").concat(pvm.toFixed(2), "</p>\n      <p>I\u0161 viso: \u20AC").concat((isViso + parseFloat(data.shippingPrice)).toFixed(2), "</p>\n    ");
      container.innerHTML = '';
      container.appendChild(div);
    }
  }, {
    key: "renderProductsTable",
    value: function renderProductsTable(items) {
      var table = document.createElement('table');
      table.classList.add('products-table');
      var thead = document.createElement('thead');
      thead.innerHTML = "\n      <tr>\n        <th>Prek\u0117</th>\n        <th>Kiekis</th>\n        <th>Kaina (\u20AC)</th>\n        <th>Nuolaida</th>\n        <th>Kaina su nuolaida (\u20AC)</th>\n        <th>PVM (\u20AC)</th>\n        <th>I\u0161 viso su PVM (\u20AC)</th>\n      </tr>\n    ";
      table.appendChild(thead);
      var tbody = document.createElement('tbody');
      items.forEach(function (item) {
        var discountText = '-';
        if (item.discount && typeof item.discount.value !== 'undefined') {
          discountText = item.discount.value;
          if (item.discount.type === "percentage") discountText += "%";
        }
        var totalSum = parseFloat(item.price);
        var discount = item.discount ? item.discount.value : 0;
        var discountedSum = totalSum;
        if (item.discount && item.discount.type === "percentage") {
          discountedSum = totalSum - totalSum * (discount / 100);
        } else if (item.discount && item.discount.type === "fixed") {
          discountedSum = totalSum - discount;
        }
        var taxesAfter = discountedSum * 0.21;
        var totalWithTax = discountedSum + taxesAfter;
        var tr = document.createElement('tr');
        tr.innerHTML = "\n        <td>".concat(item.description, "</td>\n        <td>").concat(item.quantity, "</td>\n        <td>").concat(totalSum.toFixed(2), "</td>\n        <td>").concat(discountText, "</td>\n        <td>").concat(discountedSum.toFixed(2), "</td>\n        <td>").concat(taxesAfter.toFixed(2), "</td>\n        <td>").concat(totalWithTax.toFixed(2), "</td>\n      ");
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      return table;
    }
  }, {
    key: "calculateTotals",
    value: function calculateTotals(items, shippingPrice) {
      var viso = 0;
      var pvm = 0;
      var isViso = 0;
      items.forEach(function (item) {
        var totalSum = parseFloat(item.price);
        var discount = item.discount ? item.discount.value : 0;
        var discountedSum = totalSum;
        if (item.discount && item.discount.type === "percentage") {
          discountedSum = totalSum - totalSum * (discount / 100);
        } else if (item.discount && item.discount.type === "fixed") {
          discountedSum = totalSum - discount;
        }
        var taxesAfter = discountedSum * 0.21;
        var totalWithTax = discountedSum + taxesAfter;
        viso += discountedSum;
        pvm += taxesAfter;
        isViso += totalWithTax;
      });
      return {
        viso: viso,
        pvm: pvm,
        isViso: isViso
      };
    }
  }]);
}();


/***/ }),

/***/ "./src/classes/Sidebar.js":
/*!********************************!*\
  !*** ./src/classes/Sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// /src/classes/Sidebar.js
var Sidebar = /*#__PURE__*/function () {
  function Sidebar(app) {
    _classCallCheck(this, Sidebar);
    this.app = app;
    this.container = document.getElementById('invoice-list');
  }
  return _createClass(Sidebar, [{
    key: "render",
    value: function render(invoices) {
      var _this = this;
      var activeIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.container.innerHTML = '';

      // Pridedame „Gauti sąskaitą“ mygtuką
      var fetchButton = document.createElement('button');
      fetchButton.className = 'fetch-btn';
      fetchButton.textContent = 'Gauti sąskaitą';
      fetchButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var newInvoice;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.app.fetchInvoiceFromAPI();
            case 1:
              newInvoice = _context.v;
              if (newInvoice) {
                _this.app.addInvoice(newInvoice);
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      })));
      this.container.appendChild(fetchButton);

      // Atvaizduojame visas sąskaitas
      invoices.forEach(function (invoiceData, index) {
        var btn = document.createElement('button');
        btn.className = 'invoice-sidebar-btn';
        if (index === activeIndex) btn.classList.add('active');
        var spanNumber = document.createElement('span');
        spanNumber.textContent = invoiceData.number;
        var delBtn = document.createElement('button');
        delBtn.className = 'invoice-delete-btn';
        delBtn.textContent = '×';
        delBtn.title = 'Ištrinti sąskaitą';
        delBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          _this.app.deleteInvoice(index);
        });
        btn.appendChild(spanNumber);
        btn.appendChild(delBtn);
        btn.addEventListener('click', function () {
          _this.app.renderInvoice(index);
          _this.render(_this.app.invoices, index);
        });
        _this.container.appendChild(btn);
      });
    }
  }]);
}();


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