exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 3445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* unused harmony export siteTitle */
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6834);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5855);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1234);
/* harmony import */ var _public_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4864);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7824);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);











const name = "Jake Armijo";
const siteTitle = "Armijo - Blog";
function Layout({
  children,
  home
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        name: name,
        content: siteTitle
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("header", {
      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),
      children: home ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
          loader: _lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .myImageLoader */ .VA,
          src: _public_images__WEBPACK_IMPORTED_MODULE_4__/* .JakeMijLogo */ .mm,
          className: `${(_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerHomeImage)} ${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().borderCircle)}`,
          alt: name,
          width: "800",
          height: "600"
        })
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
              loader: _lib_utils__WEBPACK_IMPORTED_MODULE_5__/* .myImageLoader */ .VA,
              src: _public_images__WEBPACK_IMPORTED_MODULE_4__/* .JakeMijLogo */ .mm,
              className: `${(_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().headerImage)} ${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default().borderCircle)}`,
              alt: name,
              width: "800",
              height: "600"
            })
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("main", {
      children: children
    }), !home && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_7___default().backToHome),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/blog",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          children: "\u2190 Back to Blog"
        })
      })
    })]
  });
}

/***/ }),

/***/ 6834:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "layout_container__2t4v2",
	"header": "layout_header__2rhWq",
	"headerImage": "layout_headerImage__2h5On",
	"headerHomeImage": "layout_headerHomeImage__3qo1_",
	"backToHome": "layout_backToHome__1vZsp"
};


/***/ }),

/***/ 5855:
/***/ ((module) => {

// Exports
module.exports = {
	"borderCircle": "utils_borderCircle__13qdJ",
	"colorInherit": "utils_colorInherit__3Gudf",
	"padding1px": "utils_padding1px__oCny8",
	"list": "utils_list__S7_pe",
	"listItem": "utils_listItem__2eJpJ",
	"lightText": "utils_lightText__12Ckm",
	"nextLastPostBlog": "utils_nextLastPostBlog__3HDNY"
};


/***/ })

};
;