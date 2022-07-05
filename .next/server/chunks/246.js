exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 1234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3783);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Navbar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_0__.Link, {
      to: "projects",
      activeClass: "active",
      spy: true,
      smooth: true,
      children: "PORTFOLIO"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_0__.Link, {
      to: "aboutMe",
      activeClass: "active",
      spy: true,
      smooth: true,
      children: "ABOUT"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_0__.Link, {
      to: "resume",
      activeClass: "active",
      spy: true,
      smooth: true,
      children: "RESUME"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_0__.Link, {
      to: "contactTitle",
      activeClass: "active",
      spy: true,
      smooth: true,
      children: "CONTACT"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      target: "_blank",
      href: "https:/jakearmijo.com/blog",
      children: "BLOG"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      target: "_blank",
      href: "https://github.com/jakearmijo",
      children: "GITHUB"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      target: "_blank",
      href: "https://www.linkedin.com/in/jake-armijo/",
      children: "LINKEDIN"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ 7824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VA": () => (/* binding */ myImageLoader),
/* harmony export */   "ld": () => (/* binding */ getSortedPostsData),
/* harmony export */   "Le": () => (/* binding */ getAllPostIds),
/* harmony export */   "AU": () => (/* binding */ getPostData)
/* harmony export */ });
/* unused harmony exports ensureString, ensureNumeric, ensureArray, ensureObject */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9064);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2381);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1551);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ensureString = function ensureString(string) {
  return string ? "".concat(string) : '';
};

var ensureNumeric = function ensureNumeric(string) {
  return Number(ensureString(string).replace(/[^0-9.]/gi, ''));
};

var ensureArray = function ensureArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return !array ? [] : Array.isArray(array) ? array : [array];
};

var ensureObject = function ensureObject(object) {
  return object || {};
};

const myImageLoader = ({
  src,
  width
}) => {
  return `https://jakearmijo.com/${src}?w=${width}`;
};

function getSortedPostsData() {
  // Get file names under /posts
  const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'blogposts');
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
  const allPostsData = ensureArray(fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, ''); // Read markdown file as string

    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Combine the data with the id

    return _objectSpread({
      id
    }, matterResult.data);
  })); // Sort posts by date

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

function getAllPostIds() {
  const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'blogposts');
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

async function getPostData(id) {
  const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'blogposts');
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents); // Use remark to convert markdown into HTML string

  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use((remark_html__WEBPACK_IMPORTED_MODULE_4___default())).process(matterResult.content);
  const contentHtml = processedContent.toString(); // Combine the data with the id and contentHtml

  return _objectSpread({
    id,
    contentHtml
  }, matterResult.data);
}



/***/ }),

/***/ 4864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LI": () => (/* reexport */ Bootstrap_Logo),
  "hO": () => (/* reexport */ CSSLogo),
  "ac": () => (/* reexport */ Chai_Logo),
  "UW": () => (/* reexport */ download),
  "A4": () => (/* reexport */ ExpressLogo),
  "Ki": () => (/* reexport */ externallink2),
  "c8": () => (/* reexport */ GitHubLogo),
  "jV": () => (/* reexport */ GitLogo),
  "TQ": () => (/* reexport */ github3),
  "B6": () => (/* reexport */ HTMLLogo),
  "RB": () => (/* reexport */ HerokuLogo),
  "Rs": () => (/* reexport */ JDBCars),
  "mm": () => (/* reexport */ JAKEMIJUPDATE),
  "Xn": () => (/* reexport */ Javascript_Logo),
  "IZ": () => (/* reexport */ LinkedIn),
  "cY": () => (/* reexport */ MochaLogo),
  "IJ": () => (/* reexport */ NodeLogo),
  "yy": () => (/* reexport */ NpmLogo),
  "Xv": () => (/* reexport */ Phutbol),
  "r4": () => (/* reexport */ PostgresLogo),
  "sg": () => (/* reexport */ Postico_logo),
  "ie": () => (/* reexport */ Postman_Logo),
  "vD": () => (/* reexport */ Python_Logo),
  "VK": () => (/* reexport */ ReactLogo),
  "xt": () => (/* reexport */ ReduxLogo),
  "hb": () => (/* reexport */ sendit),
  "AR": () => (/* reexport */ SequelizeLogo),
  "RF": () => (/* reexport */ SocketIO),
  "R5": () => (/* reexport */ StackAWat_BTPA),
  "ff": () => (/* reexport */ styled_components),
  "o0": () => (/* reexport */ TravisCILogo),
  "wD": () => (/* reexport */ VSCODE_logo),
  "nk": () => (/* reexport */ video),
  "iw": () => (/* reexport */ viewfile),
  "Go": () => (/* reexport */ WebpackLogo)
});

;// CONCATENATED MODULE: ./public/images/ReactLogo.png
/* harmony default export */ const ReactLogo = ({"src":"/_next/static/image/public/images/ReactLogo.20adfb35ae6a6e5817bf08950d874196.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUAzP8AzP8AzP9MaXEAzP8AzP8AzP8AzP8AzP8AzP8AzP8Ay/+7scr0AAAADHRSTlNKaD4ACBUmeY1bm6vWt8iOAAAACXBIWXMAAIppAACKaQGxZbMyAAAAMklEQVQImU3LMQIAIAjDwJSiIv7/vy4OzrngZAzSOKY0w3hrLckQ1V0BUOcUvLR//PYLIpEA91W46uUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/ReduxLogo.png
/* harmony default export */ const ReduxLogo = ({"src":"/_next/static/image/public/images/ReduxLogo.b3b939c66aecf7d53967bcf65003f7db.png","height":512,"width":537,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEV1Sbt1Sbt1SbtMaXF1Sbt1Sbt1Sbt1Sbt1Sbt1SbsPwFjbAAAACnRSTlNxRiMAf1eREgGrglz/xwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUCJkVxscRwDAMBLG9QErqv2GP8QI32lUucZOeEKkzfxCaHhiSVWme/AJrz/oshjH4AyCPANjKU1++AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/HTMLLogo.png
/* harmony default export */ const HTMLLogo = ({"src":"/_next/static/image/public/images/HTMLLogo.e11e389db552bc363341dc1ce72b3122.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXHrf17iPBBUFAPXCQDgSSLjLgLaLxXhLAMAAADrhmfpo4/pViYAAABMCAAAAABfDADvdFN8LBjjUiz+iFzpSyLqwLTtfFbzZjz4vaP6yLLlnYvIrUECAAAAF3RSTlMA+FV4HxRCCTRX/fy9OnsOZfco2/Rz/dFHepEAAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVAiZFctJAsAQEADBRjBD9g3J//+ZOHVdGhZVnQB2t87OA1fdzmoB+96tCBBSbmkAxOTHdPijlDH2LQb5+wFURwI0dNhXCgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/CSSLogo.png
/* harmony default export */ const CSSLogo = ({"src":"/_next/static/image/public/images/CSSLogo.409b3a09bb70c51542f88259f1dae14a.png","height":951,"width":851,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAYFBMVEUFfMVgpM55vOEYgcAAg80AbrkBeMIAdL7M7PsAdsEFeb8Cd70BdLsAc74AdLuNu9gAdLsAdrzK2uQ9ode65fkBdbwih8SGyetuxe4prexjw/Fgsd1kst1LtuoureoAjddl7PiHAAAAFnRSTlP9/f7+/v7r/f3Kp2x+udv8kxf3/v0pMea5kQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUCJkFwQcCgCAMBLCDAmXVbcH9/1+aILBnOGBQc52Hg+hoYwOyJxt7wERm3XpC1aXFR1CY7vfLmItwqvsPUCgCzUEdrYMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/styled-components.png
/* harmony default export */ const styled_components = ({"src":"/_next/static/image/public/images/styled-components.9f40fb1594a4cc87e1e9d844dd0d1e81.png","height":318,"width":318,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVJSUpPTktMaXFNSkxKSkpKSkr0uFbeeb3Yd5T7xUnnnGv/4A9JSUl1K/coAAAADXRSTlMtGgAPPkdKJ4XbwRdap0QDrwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUCJkdyUEOwCAQw0An2YUW+v/3VuCTpYFIUprYntMg9noEKOMdDpfsS3UeVA0Yuk58PxkoALTpdbsmAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/Bootstrap-Logo.png
/* harmony default export */ const Bootstrap_Logo = ({"src":"/_next/static/image/public/images/Bootstrap-Logo.f11d8f43bf2f8b51d2ed84ed5c47347b.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXFeRoJWPnxMMXR7Z5hWPXxWPXw6HWZdRYGgkrXIq/D6AAAACXRSTlMADxhE+ZB4PqRYRIUyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVQImUXKsREAMAjDQAwGwv4L52KKqPpCZj/vdiHJXMwcocjSEhGBJwAubBcQ2gBtpTTd8gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/NodeLogo.png
/* harmony default export */ const NodeLogo = ({"src":"/_next/static/image/public/images/NodeLogo.d980d9636ace07ad3ddecb0d34864181.png","height":1472,"width":2400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEVMaXEzNTNSnkIyMDIvKDAyMjJAjD00NzNBkjk/mDQyMjIzNDOtDbTHAAAADHRSTlMAeEubCGKSkrDMv4c0CIuvAAAACXBIWXMAAA4sAAAOLAH5m+4QAAAAKklEQVQImWNgAAFGFgYGZlY2NkYuRnYGRlZODmZmdkaQBBMTCwMLhAEkAQmYAGINfl2rAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/ExpressLogo.png
/* harmony default export */ const ExpressLogo = ({"src":"/_next/static/image/public/images/ExpressLogo.915b89629a5fefdb6ca0f22f24e60112.png","height":844,"width":1380,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEUxMTExMTExMTFUgJKBAAAAA3RSTlMBFTTttbxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGElEQVQImWNggANGMGBgYGQCA0aEDAwAAAIlABWKw9jRAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/SequelizeLogo.png
/* harmony default export */ const SequelizeLogo = ({"src":"/_next/static/image/public/images/SequelizeLogo.8c389dc392d00f76753bd7b16a0c93a4.png","height":2775,"width":2400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAY1BMVEVMaXEiYJIwO2QvO2QCr/AAs/QKm9cEq+oUi8kffcEkd7wjdbgAs/IDr+8LntwBs/QsR3MiYZMvP2ovP2kiaqIuQmwrV40wOF4pUoEjcbAjeLwoXJMhgMcEre4ddrIfe74fbaMP6oycAAAAHnRSTlMA/vTfdcfU2P3H6rlM6+pFuLvASvnGu3jW0FDWf83YhYbyAAAACXBIWXMAABBkAAAQZAEDacr1AAAAPklEQVQImQXBBxKAIBAAsaUeRcXeB/z/K00AKxboXC/iCkGG4L0i5Rq+UZNiW9VkaPmq56y5Y9zNtgDvc8APRJkCkvjhiUQAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/PostgresLogo.png
/* harmony default export */ const PostgresLogo = ({"src":"/_next/static/image/public/images/PostgresLogo.87519c30dc526237793353fb7a8c7247.png","height":829,"width":999,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEVMaXFTZXeKnK9TbYdoiqtRc5ZaeZg/IAVaWFhYZnUAAABcdpFteYaBkaF7hY5Nd6JVfKNBbJj+2/02AAAAD3RSTlMAVNaB/OrYDSE4BL90yo4lO+luAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVQImR2KRw4AIAyAcNbd+v/POk6QACBSBMClnHIBgprGJ9Wi+tfamHv9idovDxszARNUDSWkAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/SocketIO.png
/* harmony default export */ const SocketIO = ({"src":"/_next/static/image/public/images/SocketIO.07be0531efc928c7278d4b06d05d9aec.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUAAAAaGhqkpKSfn58bGxv9/f1eXl5cXFxMaXFJSUnw8PCFhYUfHx8ZGRn////W1tbIyMid4mvtAAAADnRSTlMWlv79lvrc3ADa9/6WlV2XtF8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA7SURBVAiZFctBFgARDETBjwRhpuP+p/XsalNMrA9jQqR0Akq6t5XGkOqW+sOuD3+u5p4F4kgZMPnG6xdI3QIPcVhr/AAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/GitLogo.png
/* harmony default export */ const GitLogo = ({"src":"/_next/static/image/public/images/GitLogo.5866a6cff0d873cc3e62526694b65b50.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXHeSzXeSzXdSzXeSzXdSzXdSzXdSzXdSzbdSzXeSzVIdzF6AAAACnRSTlMAv7Rjq9156ok6kC6DFAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUCJkti8ENwEAIwxw4uDb7D1yBmo8jWQaQ2PXjMzzO1wFhK/NqT3RpVOcoiKrln38dBADClIJtqwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/GitHubLogo.png
/* harmony default export */ const GitHubLogo = ({"src":"/_next/static/image/public/images/GitHubLogo.c8007a9fb185cb152ee65d4f3057b51f.png","height":512,"width":524,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRP6ccTMAAAAC3RSTlMCGOi3n/cu1UxrcHEwYiEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA1SURBVAiZLca5AcAwDAOxE6nHtvbfN01QASKr3BCjKk2TIgKLTYC3f+7iuXAk2hnUHmgHPnwf9gDqovmgOgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/NpmLogo.png
/* harmony default export */ const NpmLogo = ({"src":"/_next/static/image/public/images/NpmLogo.5904c46fdce9a3192c3bfa3be7b52a90.png","height":1600,"width":1600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEXXHx/XDw/cKyvUAQHWBgbWBwfSAADgSEjdNDTlY2PztLTpenreOjrOjRy9AAAACXRSTlMBf39ZWVdeybYdDxaGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAK0lEQVQImWNgwACMTCDIxMjAzQWCXJwMnJzcXJzcnDwMLMwc7GysLMyYmgAc8gDXSuVqwwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/WebpackLogo.png
/* harmony default export */ const WebpackLogo = ({"src":"/_next/static/image/public/images/WebpackLogo.855c92f49fddc8ca5d72c2eadf9b06db.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXGh3v1RvvZYwfhsptXD6/5kxfgynu1awPbF6Pus4v6b3v+85Pq86f7Z5vNXm9CR2v6P2P2Kud6t0OqHt92+ZtyRAAAAE3RSTlMAwCQl/vczCRf+5JX33/7+eHz8+SR4dwAAAAlwSFlzAAALiQAAC4kBN8nLrQAAAD1JREFUCJkly0sSgCAMwNAAraXIR633P6vDmPULQDnY2a1+ViC5LG8VG1PW1IyN9wnRAqlHRKtgV/8x5L1/PEkBvSN/4IoAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/HerokuLogo.png
/* harmony default export */ const HerokuLogo = ({"src":"/_next/static/image/public/images/HerokuLogo.7f145d38418eab89ceb3b55b9f2d1bab.png","height":512,"width":328,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAIVBMVEVpZKdkX6RwbKtqZahnYqZoZKeVkcFWUZzJx997drKysNLlajUmAAAACXRSTlP+YP7wTGv+cf5+N3ezAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImQXBgQEAIAjDsG4IDv8/2IRatiD7DMkD7BgPMSwDkq5onT4fEIUAneuQ6gQAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/TravisCILogo.png
/* harmony default export */ const TravisCILogo = ({"src":"/_next/static/image/public/images/TravisCILogo.0d38acf1fdcab1a340c5c4a947451c0f.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXFSRjxvHyVcV05xJSqhmmpiUkVlYFURAABDICChm2y3tHx0aVqbjmVrXEWQe1qPjGOGh16VkmmTfVp1U0uGc1etn2+GSUWIYFa3snovR2krAAAAE3RSTlMAcJWo2Wb9/A9ccdDJsvjTDSPdz1nTBwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUCJljYEAAQV5+LhAtwC0mLMnKwMDAKszHJirEwMDAycbOzs7MwMDAwSMhLsIIUsTJwsLEgdAMADrfAYfftNtpAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/Javascript-Logo.png
/* harmony default export */ const Javascript_Logo = ({"src":"/_next/static/image/public/images/Javascript-Logo.3d09f2e45b9c5f40efb8ad7544a87f1b.png","height":600,"width":600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX/yif/yif/yif/yif/yif/yif/yif/yif/yij/ySf/ySf/yif+yij/yidxzKBqAAAADXRSTlME4+wj03wejxi+KV2o2HRijgAAAAlwSFlzAAFxGAABcRgB7MGwCAAAADhJREFUCJk9yUkOwCAMxVD/DA0EuP91K7roW1ky/MIk0wA71wM6ptAXM1f4XVWZDYqctR2Gt7fzAiNUASb3NN32AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/Python-Logo.png
/* harmony default export */ const Python_Logo = ({"src":"/_next/static/image/public/images/Python-Logo.475c5ac4b8ffc147b24ccd0987932906.png","height":512,"width":514,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXE3dqv/zz7/0D41c6f/2kk0cKSeonX/zz7/zz43ebA7dKE6cJv/1UL/yzr+yTg3cJ7+z0D10Ur500lWfIowaZzfzFs2c6b/1kVbS5jCAAAAF3RSTlMA54Sbk+PoE/7jfb7c6AN66r3E4KrkqqVRjbkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVAiZFctJEoAgDADBQZYkAu4a/v9Si2MfGliDJwBJ1Q+ZDsXfK+JeWntM8fLlu6uSah7dbAHJ44wy26K2b/xTgAJTxD3/KAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/VSCODE-logo.png
/* harmony default export */ const VSCODE_logo = ({"src":"/_next/static/image/public/images/VSCODE-logo.332d9b7dc873badbbcbaca183ab609f1.png","height":2412,"width":2400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUAecsAeMtMaXEAeMsAeMsAeMsAeMsAeMsAecsAecsAecsAeMuEyd9mAAAADHRSTlP+iQDeLppf0xlF6XHlcwyRAAAACXBIWXMAAA4+AAAOPgHPcT1TAAAALklEQVQImU2LyQ0AIAzD3BvYf2BUHhV+RXKMNlLJXqpCc1wwwALE/zFqzi+PygsWjwCfYIFxhgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/Postman-Logo.png
/* harmony default export */ const Postman_Logo = ({"src":"/_next/static/image/public/images/Postman-Logo.185873cd9bcbaee27b26679186e7b6b4.png","height":301,"width":301,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX9bDX9azT9il79hFb9aTD8VBX8azT9bDVMaXH9aDD9bTb+0L/8bDT+7+n8bDX9sZX+0cH9dkP8ZSv9m3X9dUKFVinkAAAAEnRSTlP96/L+lyAT1ACw6f4w/jD39+cdLhwUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVQImRXFWxaAIAhAwauCgD0sdP9r7TQ/g99RRqhzArmqEv9PEwq5rpbGyH2sxIg9a4Kg706wjquYSfcPT7MCMv7rH+kAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/Postico-logo.png
/* harmony default export */ const Postico_logo = ({"src":"/_next/static/image/public/images/Postico-logo.9450bd3752355c488e5169b7307aae0c.png","height":256,"width":256,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXESxvun0fq03fwEj/IdaNwYWdj///8QVs0SwvkAzPzZ7f0N0PwdbfGM1/zh9P5mqPYUwfrI5P0YaewwiPImzfs/xfqEw/ls3/1I1vzlpxaKAAAADXRSTlMAbPz5e3mI+zkvePl4P/duSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUCJkVy0kSgCAMAMEBAgkqq/v/P2rZ9wbytmQAN97ndJBHDdqujFSdTasgXrWtt2B9Bt8Pg1hK2ePfLCWDD1OKAjlMz0eWAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/MochaLogo.png
/* harmony default export */ const MochaLogo = ({"src":"/_next/static/image/public/images/MochaLogo.6bd81cbb6cab45bef08d641e3d0c2b97.png","height":512,"width":450,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAKlBMVEVTGgChgmikhm2skXuKY0OefmObeV6Ub1Kde2CUcFOIYECTb1KaeFyRbU9ljELgAAAADHRSTlMD/v7+/NmAUutY+1bfZph4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVQImS3LQQ6AMAzEQGeTthQ2//8uquBqjYF5TWANt8fGXVltlJlSEFKEAvddp3/u4f9eKDcBREj+nAwAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/Chai-Logo.png
/* harmony default export */ const Chai_Logo = ({"src":"/_next/static/image/public/images/Chai-Logo.9bd4bf1b3c20be74c2384e3d9aa8168f.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXH49evesbDNf3jmxsKpHR7JdXPku63szb3erqzOhoejDhPiurOFAADhu7rcrazOhYPx5+XcpZfs2Nbt3NosIqN5AAAAEXRSTlMA+/ta9yBKp/2VURmEE/SF9n5+0KEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVAiZTYu5EQAgDMMMBBL+d/9ZuVTgRipk4K1GzspA07YEoG+yJwIoNIxRCbJEnEae2X/fCynBARnYl+9CAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/JAKEMIJUPDATE.svg
/* harmony default export */ const JAKEMIJUPDATE = ({"src":"/_next/static/image/public/images/JAKEMIJUPDATE.26fe3eb92629b31f98ee50e930a2b37a.svg","height":640,"width":1056});
;// CONCATENATED MODULE: ./public/images/sendit.png
/* harmony default export */ const sendit = ({"src":"/_next/static/image/public/images/sendit.babfbed50e2e0e0f708fdcd7802c5520.png","height":900,"width":980,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAMFBMVEVMaXECAgIHBwcGBgYPDw8EBAQDAwMEBAQSEhIDAwMBAQEBAQEBAQECAgIBAQEAAADyUZnAAAAAD3RSTlMAxDguHE2NQAdtl9m5fesP5Us8AAAACXBIWXMAARlAAAEZQAGA43XUAAAANklEQVQImR3LtxHAMBDEQLyjleb671YikWwEOI13X2vLgHhkWlBSM00YMZvUCehWK0lP9//4ACTgASbDxDSyAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/LinkedIn.png
/* harmony default export */ const LinkedIn = ({"src":"/_next/static/image/public/images/LinkedIn.4d2a90593952f33b05392bf29e0feec9.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUAe7WNxN4AeLMAerQAdLFQpcwxlMO52+sYiLyu1efj8fdBBfjJAAAAA3RSTlPx/vqZJwoIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVQImU3LMQ7AIBADQUdrm4P/PxjRpZtmJAwgMbENcr+mD9nrnFrOWtn5gWmn85qN0QUo+gEwagFGcAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/Phutbol.svg
/* harmony default export */ const Phutbol = ({"src":"/_next/static/image/public/images/Phutbol.b22ed22da1f184479abeef8f0a5db037.svg","height":5000,"width":8889});
;// CONCATENATED MODULE: ./public/images/externallink2.png
/* harmony default export */ const externallink2 = ({"src":"/_next/static/image/public/images/externallink2.e50d51db5d2af5e2370d1324518b180b.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAABReBoRAAAACXRSTlMbD5cAwSuKq+ubcTTDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVQImR2LQQ7AMAyDsB23+/+Lt+yGEBCBUND4dB6Bk95hodOu0W3Ob5SYjW2P2J1vfwEXaACaTJ0xzAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/github3.png
/* harmony default export */ const github3 = ({"src":"/_next/static/image/public/images/github3.6ea8abefdc3f62e822174c9a41766a2f.png","height":52,"width":52,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABekdSWAAAAEXRSTlP+0W+FJkKWAKyjE0++3jiyDezm1k4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA6SURBVAiZBcGJAcAwCMQwkwAH+br/tpXQmlXpYvWWXjnzjdNnJy0DIim/wGhyx2Wswr9ZFhnI2+yEfjzZAZX2VtsbAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/JDBCars.svg
/* harmony default export */ const JDBCars = ({"src":"/_next/static/image/public/images/JDBCars.c59d1b7c5810f612506fc59bc078dfd3.svg","height":5000,"width":8889});
;// CONCATENATED MODULE: ./public/images/video.png
/* harmony default export */ const video = ({"src":"/_next/static/image/public/images/video.5179b866bb2738c8f741560b346ee7c7.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAMVhPRAAAACnRSTlMaZGAAkkS4jpvr+ZUIRQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUCJlFi1sKACAMw7pm83H/CwuCs1+BpEJ3qEbmylEKI3DIZk/sD606fvcDGmsAu4T/OwwAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/StackAWat-BTPA.svg
/* harmony default export */ const StackAWat_BTPA = ({"src":"/_next/static/image/public/images/StackAWat-BTPA.450f4c7d2d94c80e4bacfde715e7c653.svg","height":5000,"width":8889});
;// CONCATENATED MODULE: ./public/images/viewfile.png
/* harmony default export */ const viewfile = ({"src":"/_next/static/image/public/images/viewfile.138e3f8d2b7fe399d835b1193ae80e04.png","height":968,"width":980,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUDAwMDAwMFBQVMaXEICAgGBgYEBAQEBAQHBwcHBwcLCwsDAwNAJHBRAAAADHRSTlNrXh8AEVCDRC00A6fuCuM9AAAACXBIWXMAARlAAAEZQAGA43XUAAAAN0lEQVQImR3GyQ3AMBADsZH2tN1/vwHCF2mJ57jIk6oMWGW1AoajP1s4tOBRxBy6Ck2btK9P8gEhOQDx+XgPXQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/download.png
/* harmony default export */ const download = ({"src":"/_next/static/image/public/images/download.6a488a18fbaac5d6ff616b13df4fbd74.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEX////29vb5+fkAAACNi4zNzMxNSkpMaXGEgoNvbG2bmZo/PD24t7fDwsL////m5eYAAAAAAAAHAgRcWVpfXF3Y19dtamt8eXrOzc1UUVF+e3yysLDOunWKAAAAG3RSTlPl5vIX6+mvAPTi8JHt6Nz4KC9GxNP89dbtn96MlVARAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVQImQXBBwLAIAgEsFNRwD26/f8/m4DnIgqDMcUaY7Vj2ZpLbQGEHKOHgmAuARShFRF/Jgzdj9+HA/f3u5PjH1OmApq5msWoAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/index.js





































/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;