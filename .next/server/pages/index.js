module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "NTAT":
/***/ (function(module, exports) {

module.exports = require("styled-components-carousel");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// CONCATENATED MODULE: ./components/Navbar.js





function Navbar() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          id: "logo",
          children: "Armijo Algorithm"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "nav-links",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
          to: "projects",
          activeClass: "active",
          spy: true,
          smooth: true,
          children: "PORTFOLIO"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
          to: "aboutMe",
          activeClass: "active",
          spy: true,
          smooth: true,
          children: "ABOUT"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
          to: "resume",
          activeClass: "active",
          spy: true,
          smooth: true,
          children: "RESUME"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_scroll_["Link"], {
          to: "contactTitle",
          activeClass: "active",
          spy: true,
          smooth: true,
          children: "CONTACT"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          target: "_blank",
          href: "https://github.com/jakearmijo",
          children: "GITHUB"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          target: "_blank",
          href: "https://www.linkedin.com/in/jake-armijo/",
          children: "LINKEDIN"
        })]
      })]
    })
  });
}

/* harmony default export */ var components_Navbar = (Navbar);
// CONCATENATED MODULE: ./components/Hello.js


function Hello() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: "top",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "nameDiv",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        id: "helloh2",
        "data-aos-anchor": "#top",
        "data-aos-anchor-placment": "top-center",
        "data-aos-delay": "150",
        "data-aos": "fade-up-right",
        className: "aos-init-aos-animate",
        children: "Hello! My Name is"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        id: "nameh1",
        "data-aos-anchor": "#top",
        "data-aos-anchor-placment": "top-center",
        "data-aos-delay": "300",
        "data-aos": "fade-up-right",
        className: "aos-init-aos-animate",
        children: "Jake Armijo."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        id: "seh2",
        "data-aos-anchor": "#top",
        "data-aos-anchor-placment": "top-center",
        "data-aos-delay": "450",
        "data-aos": "fade-up-right",
        className: "aos-init-aos-animate",
        children: "I'm a software engineer."
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "projectButton",
      "data-aos-anchor": "#top",
      "data-aos-anchor-placment": "top-center",
      "data-aos-delay": "600",
      "data-aos": "fade-up-right",
      className: "aos-init-aos-animate",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#projects",
        children: "View Portfolio"
      })
    })]
  });
}
// EXTERNAL MODULE: external "styled-components-carousel"
var external_styled_components_carousel_ = __webpack_require__("NTAT");

// EXTERNAL MODULE: ./node_modules/keen-slider/keen-slider.min.css
var keen_slider_min = __webpack_require__("sKKC");

// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__("ogra");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/ProjectCarousel/ProjectCarousel.style.js

let imgSource = 'Family-Photo.jpeg';
const StyledIMG = external_styled_components_default.a.img`
  background-image: url(/${imgSource});
  width: 800px;
  height: 450px;
`;
// CONCATENATED MODULE: ./components/ProjectCarousel/ProjectCarousel.js


function ProjectCarousel() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledIMG, {
      children: "props.image??"
    })
  });
}
// CONCATENATED MODULE: ./components/ProjectCarousel/index.js

// CONCATENATED MODULE: ./components/Projects.js






function Projects() {
  const [sliderRef] = Object(react_["useKeenSlider"])({
    spacing: 10,
    slidesPerView: 2,
    centered: true,
    vertical: true,
    loop: true
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: "projects",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "projectsTitle",
      "data-aos": "fade-up",
      className: "aos-init aos-animate",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "Portfolio"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "phutbol",
      "data-aos": "fade-up",
      className: "aos-init aos-animate",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "projectTitle",
        children: "Phutbol"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        ref: sliderRef,
        className: "keen-slider",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "keen-slider__slide number-slide1",
          children: "1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "keen-slider__slide number-slide2",
          children: "2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "keen-slider__slide number-slide3",
          children: "3"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProjectCarousel, {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "project-description",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "p-project",
          children: "Built on Phaser with Javascript as its bones. This socket driven app gives friends and family a chance to play soccer against each other during the pandemic. An easy appealing GUI makes it seamless to set up or join a new game. At project conception, our entire team wanted to make a game. Everyone stayed energized and motivated until the end and beyond. This project offered all of us a chance to use new technologies that we had never previously ventured into. We gained Phaser experience that was not only fun but worthwhile. Phaser as the main component of the game really made it the most interesting piece of the puzzle. Socket.io is the library driving the real-time link to all the players. This had its challenges and offered the team a good chance to collaborate and pair code. We do have future plans to use Firebase for things such as a player leaderboard, profile creation, character editing, and much more. We are pleased with the product we have to offer on this day and are all on board to continue to improve this app."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "p-project p-tech",
          children: "Technologies: JavaScript, Phaser, Socket.IO, Firebase"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "projectLinks",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          href: "http://phutbol.herokuapp.com/",
          children: ["Try Demo", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "https://chrischindev.com/assets/externallink2.png"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          href: "https://github.com/2006-links-light/phutbol",
          children: ["View Code ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "https://chrischindev.com/assets/github3.png"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          href: "https://youtu.be/XtMdD3XnvXQ",
          children: ["Watch Presentation", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "https://chrischindev.com/assets/video.png"
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "stackawat",
      "data-aos": "fade-up",
      className: "aos-init aos-animate",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "projectTitle",
        children: "Stackawat"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "carousel-container"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "project-description",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "p-project",
          children: "Stackawat is a customer chatbot with IBM Watson built in 2 days. I integrated it into an existing planned guitar cable e-commerce site. This bot would allow users to inquire about products while also leading them to purchase the items. I have plans to add more features including more customer service and account/payment procedures."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "p-project p-tech",
          children: "Technologies: PostgreSQL, Sequelize, Express, Node, React, Redux, IBM Cloud, IBM Discovery, IBM Watson"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "projectLinks",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          href: "https://github.com/jakearmijo/cableBuilderFull",
          children: ["View Code ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "https://chrischindev.com/assets/github3.png"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          href: "https://youtu.be/AGeLlD0xjL0",
          children: ["Watch Presentation", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "https://chrischindev.com/assets/video.png"
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "graceshopper",
      "data-aos": "fade-up",
      className: "aos-init aos-animate",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "projectTitle",
        children: "JDB CARS"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "carousel-container"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "project-description",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "p-project",
          children: "JDB Cars is a mock e-commerce site for buying and selling vehicles. Want to sell your old beater? Want to purchase a brand new set of wheels? We can handle that. The site features cart functionality, guest and user checkout, and order history. This website was created in 1 week in an agile environment with a team of 3."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "p-project p-tech",
          children: "Technologies: PostgreSQL, Sequelize, Express, Node, React, Redux"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "projectLinks",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          href: "https://github.com/2006-gs-leo/grace-shopper",
          children: ["View Code ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "https://chrischindev.com/assets/github3.png"
          })]
        })
      })]
    })]
  });
}
// CONCATENATED MODULE: ./components/AboutMe.js


function AboutMe() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "aboutMe",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "aboutMeTitle",
        "data-aos": "fade-up",
        className: "aos-init aos-animate",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: "About Me"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "aboutMeMain",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          id: "selfpic",
          "data-aos": "fade-up",
          className: "aos-init aos-animate"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          "data-aos": "fade-up",
          id: "pIntro",
          className: "aos-init aos-animate",
          children: "[ Hello, World, ! ] My name is Jake Armijo. I am embedded with a love to create things. As a kid, I had Legos and Erector sets. As an adult, I received a degree in Applied Engineering and went into the construction field. I have been a PM and cost estimator working for the last 5 years. What I like about construction is collaborating with teams, working on a wide variety of projects, battling critical timelines, and successfully completing goals. I enjoyed what I was doing in the construction industry and it was exciting to see your hard work go from plan to product, what I found was missing was that it simply wasn\xE2\u20AC\u2122t enough. It always interested me to see how I could use technology. I researched coding, and coding boot camps leveraged a lot of free resources and I landed on joining FullStack Academy. Now it has been a challenging ride filled with peaks and valleys, but hard work always pays off! I am looking to join an innovative company where I can leverage my past experiences in project management and teamwork combined with my Bootcamp education to create new exciting things and make old ones better."
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "skillsDiv",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "techTitle",
        "data-aos": "fade-up",
        className: "aos-init aos-animate",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Technologies I've Worked With"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "skillsMain",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "techDiv aos-init aos-animate",
          id: "frontend",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "techDivTitle",
            children: "FrontEnd"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "ReactLogo.png",
              alt: "React"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "React"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "ReduxLogo.png",
              alt: "Redux"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Redux"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "HTMLLogo.png",
              alt: "HTML"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "HTML"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "CSSLogo.png",
              alt: "CSS"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "CSS"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "styled-components.png",
              alt: "Styled Components"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Styled Components"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "Bootstrap-Logo.png",
              alt: "Bootstrap"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Bootstrap"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "techDiv aos-init aos-animate",
          id: "backend",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "techDivTitle",
            children: "BackEnd"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "NodeLogo.png",
              alt: "Node"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Node"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "ExpressLogo.png",
              alt: "Express"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Express"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "SequelizeLogo.png",
              alt: "HTML"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Sequelize"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "PostgresLogo.png",
              alt: "CSS"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Postgres"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "SocketIO.png",
              alt: "Socket.io"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Socket.io"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "techDiv aos-init aos-animate",
          id: "devops",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "techDivTitle",
            children: "DevOps"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "GitLogo.png",
              alt: "Git"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Git"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "GitHubLogo.png",
              alt: "GitHub"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "GitHub"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "Npm-logo.png",
              alt: "Npm"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Npm"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "WebpackLogo.png",
              alt: "Webpack"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Webpack"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "HerokuLogo.png",
              alt: "Heroku"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Heroku"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "TravisCILogo.png",
              alt: "TravisCI"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "TravisCI"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "techDiv aos-init aos-animate",
          id: "languages",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "techDivTitle",
            children: "Languages"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "Javascript-Logo.png",
              alt: "Javascript"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Javascript"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "Python-Logo.png",
              alt: "Python"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Python"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "techDiv aos-init aos-animate",
          id: "tools",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "techDivTitle",
            children: "Tools"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "VSCODE-logo.png",
              alt: "VSCode"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "VS Code"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "Postman-Logo.png",
              alt: "Postman"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Postman"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "Postico-logo.png",
              alt: "Postico"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Postico"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "techDiv aos-init aos-animate",
          id: "testing",
          "data-aos": "fade-up",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "techDivTitle",
            children: "Testing"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "Mocha-Logo.png",
              alt: "Mocha"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Mocha"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "tech tooltip",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "Chai-Logo.png",
              alt: "Chai"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "tooltiptext",
              children: "Chai"
            })]
          })]
        })]
      })]
    })]
  });
}
// CONCATENATED MODULE: ./components/Hobbies.js


function Hobbies() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "hobbies",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        id: "hobbiesTitle",
        "data-aos": "fade-up",
        className: "aos-init aos-animate",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: "Hobbies & Interests"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "hobbiesMain",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          id: "hobbiesPics",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hobbiesIcon aos-init aos-animate",
            id: "videogames",
            "data-aos": "flip-left",
            "data-aos-anchor": "#hobbiesPics",
            "data-aos-anchor-placment": "top-center"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hobbiesIcon aos-init aos-animate",
            id: "travel",
            "data-aos": "flip-left",
            "data-aos-delay": "150",
            "data-aos-anchor": "#hobbiesPics",
            "data-aos-anchor-placment": "top-center"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hobbiesIcon aos-init aos-animate",
            id: "flyfish",
            "data-aos": "flip-left",
            "data-aos-delay": "300",
            "data-aos-anchor": "#hobbiesPics",
            "data-aos-anchor-placment": "top-center"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hobbiesIcon aos-init aos-animate",
            id: "hockey",
            "data-aos": "flip-left",
            "data-aos-delay": "450",
            "data-aos-anchor": "#hobbiesPics",
            "data-aos-anchor-placment": "top-center"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hobbiesIcon aos-init aos-animate",
            id: "tv",
            "data-aos": "flip-left",
            "data-aos-delay": "600",
            "data-aos-anchor": "#hobbiesPics",
            "data-aos-anchor-placment": "top-center"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hobbiesIcon aos-init aos-animate",
            id: "seinfeld",
            "data-aos": "flip-left",
            "data-aos-delay": "750",
            "data-aos-anchor": "#hobbiesPics",
            "data-aos-anchor-placment": "top-center"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "hobbiesIcon aos-init aos-animate",
            id: "coffee",
            "data-aos": "flip-left",
            "data-aos-delay": "1050",
            "data-aos-anchor": "#hobbiesPics",
            "data-aos-anchor-placment": "top-center"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          "data-aos": "fade-up",
          id: "p2",
          className: "aos-init aos-animate",
          children: "I love many things in this beautiful world. Besides my love for coding. I love to be creative, play video games, and travel with my family. I am a coffee and craft beer connoisseur. My nature activities include snowboarding, wakeboarding, and mostly fly fishing. I always enjoy a good hockey game. My favorite tv show is Seinfeld. These are a few of my favorite things ... \xE2\u20AC\u0153Yada yada yada.\xE2\u20AC\x9D"
        })]
      })]
    })
  });
}
// CONCATENATED MODULE: ./components/Resume.js


function Resume() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: "resume",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      id: "resumeTitle",
      "data-aos": "fade-up",
      className: "aos-init aos-animate",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "Resume"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "resumeMain",
      "data-aos": "fade-up",
      className: "aos-init aos-animate",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        id: "resumeView",
        href: "/JakeArmijoResume.pdf",
        target: "_blank",
        children: ["View Resume", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/viewfile.png"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        id: "resumeDownload",
        href: "/JakeArmijoResume.pdf",
        download: "",
        children: ["Download Resume", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/download.png"
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__("u8Nd");

// CONCATENATED MODULE: ./components/Contact.js





Object(external_emailjs_com_["init"])("user_GifAIRMYb8H5rmuXPFOY1");
function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    errors
  } = Object(external_react_hook_form_["useForm"])();
  const message = watch("Message") || "";
  const messageCharsLeft = 1500 - message.length;

  const onSubmit = data => {
    console.log(data);
    Object(external_emailjs_com_["sendForm"])("default_service", "template_tqx66ko", "#contact-form").then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
    }, function (error) {
      console.log("FAILED...", error);
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    id: "contactTitle",
    "data-aos": "fade-up",
    className: "aos-init aos-animate",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      children: "Contact"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"], {
      id: "contact-form",
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"].Group, {
        controlId: "exampleForm.ControlInput1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Label, {
          children: "Name"
        }), errors.user_name && errors.user_name.type === "required" && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          role: "alert",
          children: ["Name is required", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {})]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Control, {
          name: "user_name",
          placeholder: "Firstname & Surname",
          required: "required",
          "aria-invalid": errors.user_name ? "true" : "false",
          ref: register({
            required: true
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"].Group, {
        controlId: "exampleForm.ControlInput1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Label, {
          children: "Email address"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Control, {
          name: "email",
          placeholder: "name@example.com",
          required: "required",
          ref: register
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Form"].Group, {
        controlId: "exampleForm.ControlTextarea1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Label, {
          children: "Message"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Form"].Control, {
          as: "textarea",
          placeholder: "Message",
          name: "Message",
          rows: 5,
          required: "required",
          ref: register,
          maxLength: "1500"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "message-chars-left",
          children: messageCharsLeft
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "btn-box",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Button"], {
          variant: "primary",
          type: "submit",
          className: "btn btn-submit",
          children: ["Submit", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/sendit.png"
          })]
        })
      })]
    })]
  });
}
// CONCATENATED MODULE: ./components/Footer.js


function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("footer", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "footer-links",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "mailto:armijojake@yahoo.com"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "sendit.png"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://www.linkedin.com/in/jake-armijo/"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "LinkedIn.png"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "https://github.com/jakearmijo"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "GitHubLogo.png"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "copyright",
        children: ["\xC2\xA9 ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          id: "year",
          children: "2020"
        }), " Jake Armijo. All rights reserved."]
      })]
    })
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/DiscordWidget.js


function DiscordWidget() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("iframe", {
      src: "https://discord.com/widget?id=415495918977024001&theme=dark",
      width: "350",
      height: "500",
      allowtransparency: "true",
      frameborder: "0",
      sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    })
  });
}
// CONCATENATED MODULE: ./pages/index.js














function Home() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Armijo Algorithm"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Navbar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hello, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Projects, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AboutMe, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DiscordWidget, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hobbies, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Resume, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Contact, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
  });
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ogra":
/***/ (function(module, exports) {

module.exports = require("keen-slider/react");

/***/ }),

/***/ "sKKC":
/***/ (function(module, exports) {



/***/ }),

/***/ "u8Nd":
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });