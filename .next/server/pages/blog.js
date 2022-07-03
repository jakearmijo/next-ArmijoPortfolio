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
// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__(1234);
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

const StyledDefaultButton = (external_styled_components_default()).button`
  border-color: #000000;
  color: #000000;
  display: inline-flex;

`;
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./UI/atoms/ButtonDefault/ButtonDefault.js




const ButtonDefault = ({
  title
}) => /*#__PURE__*/jsx_runtime_.jsx("div", {
  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
    textalign: "center",
    children: /*#__PURE__*/jsx_runtime_.jsx(StyledDefaultButton, {
      children: title
    })
  })
});

/* harmony default export */ const ButtonDefault_ButtonDefault = (ButtonDefault);
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
        children: "Armijo Algorithm - Blog"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Navbar/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: `${(utils_module_default()).headingMd} ${(utils_module_default()).padding1px}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(utils_module_default()).nextLastPostBlog}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx(ButtonDefault_ButtonDefault, {
          title: lastPostBtn
        }), /*#__PURE__*/jsx_runtime_.jsx(ButtonDefault_ButtonDefault, {
          title: tableOfContents
        }), /*#__PURE__*/jsx_runtime_.jsx(ButtonDefault_ButtonDefault, {
          title: nextPostBtn
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "blogIntroDiv",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Hello User, Welcome to the grid... I mean my blog!"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Welcome to my page and thank you for stopping in for a visit. Today's date is 4/20/21 and it will now also be this page's birthday. I really am just looking for a playground to spend some time practicing things while continuing to increase my confidence with coding. If you read the About Me Section you know that I am a boot camp graduate and career switcher. I have been working at a startup for the past few months and want to continue to develop my skill set. I came from the construction industry where I was a project manager/cost estimator. Growing up I played a ton of hockey. I now sub hockey with some competitive video games such as League of Legends and Fortnite. You can find me on Twitch, YouTube, Twitter, Instagram, and discord at FreakyMeasures. I have a beautiful wife and baby girl (Alex and Charlotte). I have 2 dogs. Bodhisattva is a beagle terrier mix and Winifred is a Yorkie Chihuahua mix. My developer career is still young and I am very excited to see what the future hold. I hope we can connect sometime feel free to reach out via the form on the main page, LinkedIn, or any other media you wish. Again welcome to my page and thank you for stopping by!"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["Sincerly,", ' ', "Jake Armijo"]
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {})]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx(ButtonDefault_ButtonDefault, {
          title: backtoHome
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Blog - Table of Contents"
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: (utils_module_default()).list,
        children: allPostsData.map(({
          id,
          date,
          title
        }, idx) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/blog/posts/${id}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (utils_module_default()).listItem,
            children: ["#", idx + 1, /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
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
var __webpack_exports__ = __webpack_require__.X(0, [664,89,445,234], () => (__webpack_exec__(8854)));
module.exports = __webpack_exports__;

})();