exports.id = 177;
exports.ids = [177];
exports.modules = {

/***/ 1177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// UNUSED EXPORTS: siteTitle

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(6834);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(5855);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/NavbarBlog.js




function NavbarBlog() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: "PORTFOLIO"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: "ABOUT"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: "RESUME"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: "CONTACT"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/blog",
      children: "BLOG"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "http://todaystilts.jakearmijo.com/",
      children: "Today's Tilts"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "https://github.com/jakearmijo",
      children: "GITHUB"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "https://www.linkedin.com/in/jake-armijo/",
      children: "LINKEDIN"
    })]
  });
}

/* harmony default export */ const components_NavbarBlog = (NavbarBlog);
// EXTERNAL MODULE: ./public/images/index.js + 40 modules
var public_images = __webpack_require__(7334);
// EXTERNAL MODULE: ./lib/utils/index.js
var utils = __webpack_require__(7824);
;// CONCATENATED MODULE: ./components/layout.js











const layout_name = "Jake Armijo";
const siteTitle = "Armijo - Blog";
function Layout({
  children,
  home
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (layout_module_default()).container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: layout_name,
        content: siteTitle
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_NavbarBlog, {}), /*#__PURE__*/jsx_runtime_.jsx("header", {
      className: (layout_module_default()).header,
      children: home ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          loader: utils/* myImageLoader */.VA,
          src: public_images/* JakeMijLogo */.mm,
          className: `${(layout_module_default()).headerHomeImage} ${(utils_module_default()).borderCircle}`,
          alt: layout_name,
          width: "800",
          height: "600"
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              loader: utils/* myImageLoader */.VA,
              src: public_images/* JakeMijLogo */.mm,
              className: `${(layout_module_default()).headerImage} ${(utils_module_default()).borderCircle}`,
              alt: layout_name,
              width: "800",
              height: "600"
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "blogIntroDiv",
      children: children
    }), !home && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (layout_module_default()).backToHome,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/blog",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
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