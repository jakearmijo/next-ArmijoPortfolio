(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{3445:function(A,e,t){"use strict";t.d(e,{Z:function(){return u}});var a=t(9008),i=t(4608),n=t.n(i),c=t(5080),r=t.n(c),g=t(1664),o=t(7831),s=t(5893),l="Jake Armijo";function u(A){var e=A.children,t=A.home;return(0,s.jsxs)("div",{className:n().container,children:[(0,s.jsxs)(a.default,{children:[(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("meta",{name:"description",content:"Jake Armijo dot com"}),(0,s.jsx)("meta",{name:"og:title",content:"Jake Armijo dot com"})]}),(0,s.jsx)("header",{className:n().header,children:t?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("img",{src:o.mm,className:"".concat(n().headerHomeImage," ").concat(r().borderCircle),alt:l})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(g.default,{href:"/",children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:o.mm,className:"".concat(n().headerImage," ").concat(r().borderCircle),alt:l})})})})}),(0,s.jsx)("main",{children:e}),!t&&(0,s.jsx)("div",{className:n().backToHome,children:(0,s.jsx)(g.default,{href:"/blog",children:(0,s.jsx)("a",{children:"\u2190 Back to Blog"})})})]})}},2167:function(A,e,t){"use strict";var a=t(3848);e.default=void 0;var i,n=(i=t(7294))&&i.__esModule?i:{default:i},c=t(1063),r=t(4651),g=t(7426);var o={};function s(A,e,t,a){if(A&&c.isLocalURL(e)){A.prefetch(e,t,a).catch((function(A){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:A&&A.locale;o[e+"%"+t+(i?"%"+i:"")]=!0}}var l=function(A){var e,t=!1!==A.prefetch,i=r.useRouter(),l=n.default.useMemo((function(){var e=c.resolveHref(i,A.href,!0),t=a(e,2),n=t[0],r=t[1];return{href:n,as:A.as?c.resolveHref(i,A.as):r||n}}),[i,A.href,A.as]),u=l.href,d=l.as,b=A.children,f=A.replace,h=A.shallow,M=A.scroll,E=A.locale;"string"===typeof b&&(b=n.default.createElement("a",null,b));var m=(e=n.default.Children.only(b))&&"object"===typeof e&&e.ref,U=g.useIntersection({rootMargin:"200px"}),w=a(U,2),B=w[0],R=w[1],p=n.default.useCallback((function(A){B(A),m&&("function"===typeof m?m(A):"object"===typeof m&&(m.current=A))}),[m,B]);n.default.useEffect((function(){var A=R&&t&&c.isLocalURL(u),e="undefined"!==typeof E?E:i&&i.locale,a=o[u+"%"+d+(e?"%"+e:"")];A&&!a&&s(i,u,d,{locale:e})}),[d,u,R,E,t,i]);var C={ref:p,onClick:function(A){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(A),A.defaultPrevented||function(A,e,t,a,i,n,r,g){("A"!==A.currentTarget.nodeName||!function(A){var e=A.currentTarget.target;return e&&"_self"!==e||A.metaKey||A.ctrlKey||A.shiftKey||A.altKey||A.nativeEvent&&2===A.nativeEvent.which}(A)&&c.isLocalURL(t))&&(A.preventDefault(),null==r&&a.indexOf("#")>=0&&(r=!1),e[i?"replace":"push"](t,a,{shallow:n,locale:g,scroll:r}))}(A,i,u,d,f,h,M,E)},onMouseEnter:function(A){c.isLocalURL(u)&&(e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(A),s(i,u,d,{priority:!0}))}};if(A.passHref||"a"===e.type&&!("href"in e.props)){var S="undefined"!==typeof E?E:i&&i.locale,D=i&&i.isLocaleDomain&&c.getDomainLocale(d,S,i&&i.locales,i&&i.domainLocales);C.href=D||c.addBasePath(c.addLocale(d,S,i&&i.defaultLocale))}return n.default.cloneElement(e,C)};e.default=l},7426:function(A,e,t){"use strict";var a=t(3848);Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(A){var e=A.rootMargin,t=A.disabled||!c,g=i.useRef(),o=i.useState(!1),s=a(o,2),l=s[0],u=s[1],d=i.useCallback((function(A){g.current&&(g.current(),g.current=void 0),t||l||A&&A.tagName&&(g.current=function(A,e,t){var a=function(A){var e=A.rootMargin||"",t=r.get(e);if(t)return t;var a=new Map,i=new IntersectionObserver((function(A){A.forEach((function(A){var e=a.get(A.target),t=A.isIntersecting||A.intersectionRatio>0;e&&t&&e(t)}))}),A);return r.set(e,t={id:e,observer:i,elements:a}),t}(t),i=a.id,n=a.observer,c=a.elements;return c.set(A,e),n.observe(A),function(){c.delete(A),n.unobserve(A),0===c.size&&(n.disconnect(),r.delete(i))}}(A,(function(A){return A&&u(A)}),{rootMargin:e}))}),[t,e,l]);return i.useEffect((function(){if(!c&&!l){var A=n.requestIdleCallback((function(){return u(!0)}));return function(){return n.cancelIdleCallback(A)}}}),[l]),[d,l]};var i=t(7294),n=t(3447),c="undefined"!==typeof IntersectionObserver;var r=new Map},650:function(A,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return c},default:function(){return r}});var a=t(9008),i=t(5893);var n=t(3445),c=!0;function r(A){var e=A.postData;return(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(a.default,{children:(0,i.jsx)("title",{children:e.title})}),(0,i.jsx)("div",{className:"blogIntroDiv",dangerouslySetInnerHTML:{__html:e.contentHtml}})]})}},7831:function(A,e,t){"use strict";t.d(e,{LI:function(){return g},hO:function(){return c},ac:function(){return S},A4:function(){return s},c8:function(){return f},jV:function(){return b},B6:function(){return n},RB:function(){return E},mm:function(){return D},Xn:function(){return U},IZ:function(){return I},cY:function(){return C},IJ:function(){return o},yy:function(){return h},r4:function(){return u},sg:function(){return p},ie:function(){return R},vD:function(){return w},VK:function(){return a},xt:function(){return i},hb:function(){return V},AR:function(){return l},RF:function(){return d},ff:function(){return r},o0:function(){return m},wD:function(){return B},Go:function(){return M}});var a={src:"/_next/static/image/public/images/ReactLogo.20adfb35ae6a6e5817bf08950d874196.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUAzP8AzP8AzP9MaXEAzP8AzP8AzP8AzP8AzP8AzP8AzP8Ay/+7scr0AAAADHRSTlNKaD4ACBUmeY1bm6vWt8iOAAAACXBIWXMAAIppAACKaQGxZbMyAAAAMklEQVQImU3LMQIAIAjDwJSiIv7/vy4OzrngZAzSOKY0w3hrLckQ1V0BUOcUvLR//PYLIpEA91W46uUAAAAASUVORK5CYII="},i={src:"/_next/static/image/public/images/ReduxLogo.b3b939c66aecf7d53967bcf65003f7db.png",height:512,width:537,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEV1Sbt1Sbt1SbtMaXF1Sbt1Sbt1Sbt1Sbt1Sbt1SbsPwFjbAAAACnRSTlNxRiMAf1eREgGrglz/xwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUCJkVxscRwDAMBLG9QErqv2GP8QI32lUucZOeEKkzfxCaHhiSVWme/AJrz/oshjH4AyCPANjKU1++AAAAAElFTkSuQmCC"},n={src:"/_next/static/image/public/images/HTMLLogo.e11e389db552bc363341dc1ce72b3122.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXHrf17iPBBUFAPXCQDgSSLjLgLaLxXhLAMAAADrhmfpo4/pViYAAABMCAAAAABfDADvdFN8LBjjUiz+iFzpSyLqwLTtfFbzZjz4vaP6yLLlnYvIrUECAAAAF3RSTlMA+FV4HxRCCTRX/fy9OnsOZfco2/Rz/dFHepEAAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVAiZFctJAsAQEADBRjBD9g3J//+ZOHVdGhZVnQB2t87OA1fdzmoB+96tCBBSbmkAxOTHdPijlDH2LQb5+wFURwI0dNhXCgAAAABJRU5ErkJggg=="},c={src:"/_next/static/image/public/images/CSSLogo.409b3a09bb70c51542f88259f1dae14a.png",height:951,width:851,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAZlBMVEUAdL4AcbqKv94Dd8AAbrkBeMJgpM7M7PsAf8oBe8YCd70Bd70BdLsAeMUAdLtyueB/v+IAdrzK2uQ9ode65fkBdbwYgsFuxe4AhM4prexjw/Fgsd0sjMaFz/Nkst0ureoAjddLtuqUzZx+AAAAFnRSTlP9wP2x/uv9/fz8bJt+ztv+/hf3/v0pvgZrlQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUCJkFwQcCgCAMBLBjlimCWtzj/580gYGGcx4D22PfVohTFro8lOaRukFkO809I3GT9CkE8P28ETUI5LT8Wu4DA3Wvq9sAAAAASUVORK5CYII="},r={src:"/_next/static/image/public/images/styled-components.9f40fb1594a4cc87e1e9d844dd0d1e81.png",height:318,width:318,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEVJSUpPTktMaXFNSkxKSkpKSkr0uFbeeb3Yd5T7xUnnnGv/4A9JSUl1K/coAAAADXRSTlMtGgAPPkdKJ4XbwRdap0QDrwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUCJkdyUEOwCAQw0An2YUW+v/3VuCTpYFIUprYntMg9noEKOMdDpfsS3UeVA0Yuk58PxkoALTpdbsmAAAAAElFTkSuQmCC"},g={src:"/_next/static/image/public/images/Bootstrap-Logo.f11d8f43bf2f8b51d2ed84ed5c47347b.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXFeRoJWPnxMMXR7Z5hWPXxWPXw6HWZdRYGgkrXIq/D6AAAACXRSTlMADxhE+ZB4PqRYRIUyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVQImUXKsREAMAjDQAwGwv4L52KKqPpCZj/vdiHJXMwcocjSEhGBJwAubBcQ2gBtpTTd8gAAAABJRU5ErkJggg=="},o={src:"/_next/static/image/public/images/NodeLogo.d980d9636ace07ad3ddecb0d34864181.png",height:1472,width:2400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEVMaXEzNTNSnkIyMDIvKDAyMjJAjD00NzNBkjk/mDQyMjIzNDOtDbTHAAAADHRSTlMAeEubCGKSkrDMv4c0CIuvAAAACXBIWXMAAA4sAAAOLAH5m+4QAAAAKklEQVQImWNgAAFGFgYGZlY2NkYuRnYGRlZODmZmdkaQBBMTCwMLhAEkAQmYAGINfl2rAAAAAElFTkSuQmCC"},s={src:"/_next/static/image/public/images/ExpressLogo.915b89629a5fefdb6ca0f22f24e60112.png",height:844,width:1380,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEUxMTExMTExMTFUgJKBAAAAA3RSTlMBFTTttbxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGElEQVQImWNggANGMGBgYGQCA0aEDAwAAAIlABWKw9jRAAAAAElFTkSuQmCC"},l={src:"/_next/static/image/public/images/SequelizeLogo.8c389dc392d00f76753bd7b16a0c93a4.png",height:2775,width:2400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAY1BMVEVMaXEiYJIwO2QvO2QCr/AAs/QKm9cEq+oUi8kffcEkd7wjdbgAs/IDr+8LntwBs/QsR3MiYZMvP2ovP2kiaqIuQmwrV40wOF4pUoEjcbAjeLwoXJMhgMcEre4ddrIfe74fbaMP6oycAAAAHnRSTlMA/vTfdcfU2P3H6rlM6+pFuLvASvnGu3jW0FDWf83YhYbyAAAACXBIWXMAABBkAAAQZAEDacr1AAAAPklEQVQImQXBBxKAIBAAsaUeRcXeB/z/K00AKxboXC/iCkGG4L0i5Rq+UZNiW9VkaPmq56y5Y9zNtgDvc8APRJkCkvjhiUQAAAAASUVORK5CYII="},u={src:"/_next/static/image/public/images/PostgresLogo.87519c30dc526237793353fb7a8c7247.png",height:829,width:999,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEVMaXFTZXeKnK9TbYdoiqtRc5ZaeZg/IAVaWFhYZnUAAABcdpFteYaBkaF7hY5Nd6JVfKNBbJj+2/02AAAAD3RSTlMAVNaB/OrYDSE4BL90yo4lO+luAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVQImR2KRw4AIAyAcNbd+v/POk6QACBSBMClnHIBgprGJ9Wi+tfamHv9idovDxszARNUDSWkAAAAAElFTkSuQmCC"},d={src:"/_next/static/image/public/images/SocketIO.07be0531efc928c7278d4b06d05d9aec.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUAAAAbGxtcXFxMaXFJSUn9/f1eXl6fn5+FhYXw8PCkpKQZGRkfHx/////W1tbIyMi2UwVmAAAADXRSTlMWltwA2vrc/f73/pWWE1UqygAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUCJkVy0kSACEIBMFCwW2m8f+/NbjlJenYaEYHT+k6WEbMnUaTzpJGYZ3Cl3tGpIFfKR06f6v+AD1KAbzAErrgAAAAAElFTkSuQmCC"},b={src:"/_next/static/image/public/images/GitLogo.5866a6cff0d873cc3e62526694b65b50.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXHeSzXeSzXdSzXeSzXdSzXdSzXdSzXdSzbdSzXeSzVIdzF6AAAACnRSTlMAv7Rjq9156ok6kC6DFAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUCJkti8ENwEAIwxw4uDb7D1yBmo8jWQaQ2PXjMzzO1wFhK/NqT3RpVOcoiKrln38dBADClIJtqwAAAABJRU5ErkJggg=="},f={src:"/_next/static/image/public/images/GitHubLogo.c8007a9fb185cb152ee65d4f3057b51f.png",height:512,width:524,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRMVFRNGhiN9AAAADHRSTlMCuRj36S6d3Uyia3D/MMZVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVQImS3GOQLAQAgDsbGBZQ/+/940USXwiVCBlRHZxUls1MwCePPnDuoLO5PSMjEbSkabDyIwAPdESGvBAAAAAElFTkSuQmCC"},h={src:"/_next/static/image/public/images/NpmLogo.5904c46fdce9a3192c3bfa3be7b52a90.png",height:1600,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEXXHx/XDw/cKyvUAQHWBgbWBwfSAADgSEjdNDTlY2PztLTpenreOjrOjRy9AAAACXRSTlMBf39ZWVdeybYdDxaGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAK0lEQVQImWNgwACMTCDIxMjAzQWCXJwMnJzcXJzcnDwMLMwc7GysLMyYmgAc8gDXSuVqwwAAAABJRU5ErkJggg=="},M={src:"/_next/static/image/public/images/WebpackLogo.855c92f49fddc8ca5d72c2eadf9b06db.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXGh3v1RvvZYwfhsptXD6/5kxfgynu1awPbF6Pus4v6b3v+85Pq86f7Z5vNXm9CR2v6P2P2Kud6t0OqHt92+ZtyRAAAAE3RSTlMAwCQl/vczCRf+5JX33/7+eHz8+SR4dwAAAAlwSFlzAAALiQAAC4kBN8nLrQAAAD1JREFUCJkly0sSgCAMwNAAraXIR633P6vDmPULQDnY2a1+ViC5LG8VG1PW1IyN9wnRAqlHRKtgV/8x5L1/PEkBvSN/4IoAAAAASUVORK5CYII="},E={src:"/_next/static/image/public/images/HerokuLogo.7f145d38418eab89ceb3b55b9f2d1bab.png",height:512,width:328,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAIVBMVEVpZKdkX6RwbKtqZahnYqZoZKeVkcFWUZzJx997drKysNLlajUmAAAACXRSTlP+YP7wTGv+cf5+N3ezAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImQXBgQEAIAjDsG4IDv8/2IRatiD7DMkD7BgPMSwDkq5onT4fEIUAneuQ6gQAAAAASUVORK5CYII="},m={src:"/_next/static/image/public/images/TravisCILogo.0d38acf1fdcab1a340c5c4a947451c0f.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXFSRjxvHyVcV05xJSqhmmpiUkVlYFURAABDICChm2y3tHx0aVqbjmVrXEWQe1qPjGOGh16VkmmTfVp1U0uGc1etn2+GSUWIYFa3snovR2krAAAAE3RSTlMAcJWo2Wb9/A9ccdDJsvjTDSPdz1nTBwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUCJljYEAAQV5+LhAtwC0mLMnKwMDAKszHJirEwMDAycbOzs7MwMDAwSMhLsIIUsTJwsLEgdAMADrfAYfftNtpAAAAAElFTkSuQmCC"},U={src:"/_next/static/image/public/images/Javascript-Logo.3d09f2e45b9c5f40efb8ad7544a87f1b.png",height:600,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX/yif/yif/yif/yif/yif/yif/yif/yif/yij/ySf/ySf/yif+yij/yidxzKBqAAAADXRSTlME4+wj03wejxi+KV2o2HRijgAAAAlwSFlzAAFxGAABcRgB7MGwCAAAADhJREFUCJk9yUkOwCAMxVD/DA0EuP91K7roW1ky/MIk0wA71wM6ptAXM1f4XVWZDYqctR2Gt7fzAiNUASb3NN32AAAAAElFTkSuQmCC"},w={src:"/_next/static/image/public/images/Python-Logo.475c5ac4b8ffc147b24ccd0987932906.png",height:512,width:514,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXE3dqv/zz7/0D41c6f/2kk0cKSeonX/zz7/zz43ebA7dKE6cJv/1UL/yzr+yTg3cJ7+z0D10Ur500lWfIowaZzfzFs2c6b/1kVbS5jCAAAAF3RSTlMA54Sbk+PoE/7jfb7c6AN66r3E4KrkqqVRjbkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVAiZFctJEoAgDADBQZYkAu4a/v9Si2MfGliDJwBJ1Q+ZDsXfK+JeWntM8fLlu6uSah7dbAHJ44wy26K2b/xTgAJTxD3/KAAAAABJRU5ErkJggg=="},B={src:"/_next/static/image/public/images/VSCODE-logo.332d9b7dc873badbbcbaca183ab609f1.png",height:2412,width:2400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUAecsAeMtMaXEAeMsAeMsAeMsAeMsAeMsAecsAecsAecsAeMuEyd9mAAAADHRSTlP+iQDeLppf0xlF6XHlcwyRAAAACXBIWXMAAA4+AAAOPgHPcT1TAAAALklEQVQImU2LyQ0AIAzD3BvYf2BUHhV+RXKMNlLJXqpCc1wwwALE/zFqzi+PygsWjwCfYIFxhgAAAABJRU5ErkJggg=="},R={src:"/_next/static/image/public/images/Postman-Logo.185873cd9bcbaee27b26679186e7b6b4.png",height:301,width:301,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX9bDX8bDT9azT9il79aTD8VBX8azT9bDVMaXH9aDD9hFb9bTb+0L/+7+n9sZX+0cH9dkP8ZSv9m3X9dUIMVUyRAAAAEXRSTlP9MOvylyAT1ACw/un+/vf35yMkQYkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVAiZFcVBFoAgCEDBr4KAVobe/669ZjN4iTpDnQLkbkr8ryFUct8jjZnn2okR52kJgr4nwTquYibdP0qnAh0OW96eAAAAAElFTkSuQmCC"},p={src:"/_next/static/image/public/images/Postico-logo.9450bd3752355c488e5169b7307aae0c.png",height:256,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXESxvun0fq03fwEj/IdaNwYWdj///8QVs0SwvkAzPzZ7f0N0PwdbfGM1/zh9P5mqPYUwfrI5P0YaewwiPImzfs/xfqEw/ls3/1I1vzlpxaKAAAADXRSTlMAbPz5e3mI+zkvePl4P/duSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUCJkVy0kSgCAMAMEBAgkqq/v/P2rZ9wbytmQAN97ndJBHDdqujFSdTasgXrWtt2B9Bt8Pg1hK2ePfLCWDD1OKAjlMz0eWAAAAAElFTkSuQmCC"},C={src:"/_next/static/image/public/images/MochaLogo.6bd81cbb6cab45bef08d641e3d0c2b97.png",height:512,width:450,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAALVBMVEVTGgChgmikhm2KY0OskXubeV6Ub1KefmOefWOde2CUcFOTb1KaeFyRbE6SbVAZbL/9AAAADHRSTlMD/v78/oBS2NvrWFYTQVkyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVQImS3LWQqAQAxEwZdOZlE7c//jiuBvQQHjGsBcPt437qxso6qSgpAiFPhkfj6X2/vhfy8o8QFGhosllQAAAABJRU5ErkJggg=="},S={src:"/_next/static/image/public/images/Chai-Logo.9bd4bf1b3c20be74c2384e3d9aa8168f.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXH49evesbDNf3jmxsKpHR7JdXPku63szb3erqzOhoejDhPiurOFAADhu7rcrazOhYPx5+XcpZfs2Nbt3NosIqN5AAAAEXRSTlMA+/ta9yBKp/2VURmEE/SF9n5+0KEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVAiZTYu5EQAgDMMMBBL+d/9ZuVTgRipk4K1GzspA07YEoG+yJwIoNIxRCbJEnEae2X/fCynBARnYl+9CAAAAAElFTkSuQmCC"},D={src:"/_next/static/image/public/images/JAKEMIJUPDATE.26fe3eb92629b31f98ee50e930a2b37a.svg",height:640,width:1056},V={src:"/_next/static/image/public/images/sendit.babfbed50e2e0e0f708fdcd7802c5520.png",height:900,width:980,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAMFBMVEVMaXECAgIHBwcGBgYFBQUSEhIDAwMEBAQDAwMBAQECAgIBAQELCwsBAQEBAQEAAAAxeN/0AAAAD3RSTlMAxDguShqNQHiXXtkguevTXkBIAAAACXBIWXMAARlAAAEZQAGA43XUAAAANElEQVQImR2LVwoAMAyFTDrSybv/bTv8EQTh0+bXmDIgbZk6ZKmaxiutSkGCsNwLy4v7PQ4iTQEd8XTDPAAAAABJRU5ErkJggg=="},I={src:"/_next/static/image/public/images/LinkedIn.4d2a90593952f33b05392bf29e0feec9.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAe7WNxN4AerQAdLFQpcwxlMO52+sYiLyu1efj8fdyLAQzAAAAAnRSTlPx/iExwt8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVAiZTcuxEQAhEAMx/9rmoP+GGbLPlEjCABIT2yD3a/qQvc6p5ayVnR+Ydjqv2RhdIL0A9cYoRnsAAAAASUVORK5CYII="}},4717:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return t(650)}])},4608:function(A){A.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerImage:"layout_headerImage__2h5On",headerHomeImage:"layout_headerHomeImage__3qo1_",backToHome:"layout_backToHome__1vZsp"}},5080:function(A){A.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm",nextLastPostBlog:"utils_nextLastPostBlog__3HDNY"}},9008:function(A,e,t){A.exports=t(639)},1664:function(A,e,t){A.exports=t(2167)}},function(A){A.O(0,[774,888,179],(function(){return e=4717,A(A.s=e);var e}));var e=A.O();_N_E=e}]);