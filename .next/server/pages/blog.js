"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 8854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(3445);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(5855);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_namespaceObject);
;// CONCATENATED MODULE: ./UI/atoms/ButtonDefault/ButtonDefault.style.js

const ButtonDefault_style_StyledDefaultButton = (external_styled_components_default()).button`
  border-color: #000000;
  color: #000000;
  display: inline-flex;

`;
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./UI/atoms/ButtonDefault/ButtonDefault.js




const ButtonDefault = ({
  title
}) => /*#__PURE__*/_jsx("div", {
  children: /*#__PURE__*/_jsx("div", {
    textalign: "center",
    children: /*#__PURE__*/_jsx(StyledDefaultButton, {
      children: title
    })
  })
});

/* harmony default export */ const ButtonDefault_ButtonDefault = ((/* unused pure expression or super */ null && (ButtonDefault)));
;// CONCATENATED MODULE: ./UI/atoms/ButtonDefault/index.js

;// CONCATENATED MODULE: ./UI/index.js


// EXTERNAL MODULE: ./lib/utils/index.js
var utils = __webpack_require__(7824);
;// CONCATENATED MODULE: ./pages/blog/index.js








async function getStaticProps() {
  const allPostsData = (0,utils/* getSortedPostsData */.ld)();
  return {
    props: {
      allPostsData
    }
  };
}
function Post({
  allPostsData
}) {
  const lastPostBtn = 'Last Post';
  const nextPostBtn = 'Next Post';
  const backtoHome = 'Back to Home Page';
  const tableOfContents = 'Table Of Contents';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    home: true,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "The Mij Blog"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: `${(utils_module_default()).headingMd} ${(utils_module_default()).padding1px}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(utils_module_default()).nextLastPostBlog}`
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "blogIntroDiv",
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: "Hello User, Welcome to the grid..."
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "__________________________________________"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Table of Contents"
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: (utils_module_default()).list,
        children: allPostsData.map(({
          id,
          date,
          title
        }, idx) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/blog/${id}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (utils_module_default()).listItem,
            children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "Post Title:"
            }), " ", title, /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "Post Date:"
            }), " ", date, /*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: "_______________________"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          }, id)
        }, idx))
      })]
    })]
  });
}

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 9064:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3783:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2381:
/***/ ((module) => {

module.exports = require("remark");

/***/ }),

/***/ 1551:
/***/ ((module) => {

module.exports = require("remark-html");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,246,445], () => (__webpack_exec__(8854)));
module.exports = __webpack_exports__;

})();