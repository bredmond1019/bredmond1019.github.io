/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation.jsx");
/* harmony import */ var _components_LandingPage_Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LandingPage/Landing */ "./src/components/LandingPage/Landing.jsx");
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Blog */ "./src/components/Blog.jsx");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Projects */ "./src/components/Projects.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


 // import AboutPage from "./components/AboutPage";







function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Navigation__WEBPACK_IMPORTED_MODULE_0__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
        path: "/",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_LandingPage_Landing__WEBPACK_IMPORTED_MODULE_1__.default, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
        path: "/blog",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Blog__WEBPACK_IMPORTED_MODULE_2__.default, {})
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Blog.jsx":
/*!*********************************!*\
  !*** ./src/components/Blog.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_puppy_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../images/puppy.jpeg */ "./src/images/puppy.jpeg");
/* harmony import */ var _images_blog_page_blue_green_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../images/blog_page/blue_green.jpeg */ "./src/images/blog_page/blue_green.jpeg");
/* harmony import */ var _images_blog_page_mountain3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/blog_page/mountain3.jpeg */ "./src/images/blog_page/mountain3.jpeg");
/* harmony import */ var _images_blog_page_purple_triangle_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/blog_page/purple_triangle.jpeg */ "./src/images/blog_page/purple_triangle.jpeg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function Blog() {
  var blogArticles = [{
    title: "From Teacher of Many to Teacher of One",
    image: _images_blog_page_mountain3_jpeg__WEBPACK_IMPORTED_MODULE_2__,
    link: "https://dev.to/bredmond1019/from-teacher-of-many-to-teacher-of-one-tips-on-how-to-be-a-self-taught-194p",
    description: "A Teacher's Tips on Being a Self-Taught Learner"
  }, {
    title: "Flask API Basics",
    image: _images_blog_page_blue_green_jpeg__WEBPACK_IMPORTED_MODULE_1__,
    link: "",
    description: "React, GraphQL, Flask App -- Part 1"
  }, {
    title: "Flask Application Factory",
    image: _images_blog_page_purple_triangle_jpeg__WEBPACK_IMPORTED_MODULE_3__,
    link: "",
    description: "React, GraphQL, Flask App -- Part 2"
  }, {
    title: "Flask & GraphQL",
    image: _images_blog_page_mountain3_jpeg__WEBPACK_IMPORTED_MODULE_2__,
    link: "",
    description: "React, GraphQL, Flask App -- Part 3"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "blog-page-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "blog-main-page",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "blog-main-title-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "blog-main-title",
          children: "Welcome to my blog"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "blog-articles-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "blog-articles-info-wrapper",
          children: blogArticles.map(function (article, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "blog-article-box-wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "blog-article-image-wrapper",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: article.image,
                  alt: "",
                  className: "blog-article-image"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                className: "blog-link",
                href: article.link,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "blog-info-wrapper",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
                    className: "blog-article-title",
                    children: article.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    className: "blog-article-description",
                    children: article.description
                  })]
                })
              })]
            });
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "side-panel"
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "./src/components/LandingPage/About.jsx":
/*!**********************************************!*\
  !*** ./src/components/LandingPage/About.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _images_Brandon3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../images/Brandon3.jpg */ "./src/images/Brandon3.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function About() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    id: "about",
    className: "about-section",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      className: "about-title",
      children: "About Me"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "about-content-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "about-image-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: _images_Brandon3_jpg__WEBPACK_IMPORTED_MODULE_1__,
          className: "about-img",
          alt: ""
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "about-info-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "about-info-text",
          children: "Hello, my name is Brandon Redmond and welcome to my blog! I am a Full Stack Software Developer based out of New York City."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "about-info-text",
          children: "I am a web developer with a passion for learning and teaching. I used to teach high school Computer Science and Mathematics for about 6 years, until the end of 2020 when I decided to make a change and persue a career as a Full Stack Web Developer."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "about-info-text",
          children: "I first started learning how to code while I was getting my Master's degree in Mathematics. Seeing the way the world was rapidly evolving, I knew that coding was going to be a crucial skill to have. After learning the basics and having completed my master's, I decided to speak with my principal and create a Computer Science Department in our school and become the full-time Computer Science Teacher. I taught students the fundamentals of development using Python, PyGame, and Python Turtle. Eventually I taught kids how to build basic web apps using HTML, CSS, and Flask."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "about-info-text",
          children: "Teaching was an amazing job and I'm so happy to have spent as much time as I did teaching kids -- I'll never forget it. But deep down, I knew that I wasn't going to be in the classroom forever. I've learned a lot of valuable skills as a classroom teacher that I am excited to carry with me into my career as a software developer, including:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ol", {
          className: "about-info-text-list",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
            className: "about-info-text info-list-item",
            children: "problem solver"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
            className: "about-info-text info-list-item",
            children: "time management"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
            className: "about-info-text info-list-item",
            children: "interpersonal relationships"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
            className: "about-info-text info-list-item",
            children: "Adaptable in a fast paced environment"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
            className: "about-info-text info-list-item",
            children: "excellent communuication"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
            className: "about-info-text info-list-item",
            children: "organization"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
            className: "about-info-text info-list-item",
            children: "patience"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "about-info"
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/components/LandingPage/Contact_Info.jsx":
/*!*****************************************************!*\
  !*** ./src/components/LandingPage/Contact_Info.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _images_contact_info_profile_pic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../images/contact_info/profile_pic.png */ "./src/images/contact_info/profile_pic.png");
/* harmony import */ var _images_contact_info_github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../images/contact_info/github.svg */ "./src/images/contact_info/github.svg");
/* harmony import */ var _images_contact_info_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../images/contact_info/linkedin.svg */ "./src/images/contact_info/linkedin.svg");
/* harmony import */ var _images_contact_info_insta_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../images/contact_info/insta.svg */ "./src/images/contact_info/insta.svg");
/* harmony import */ var _images_contact_info_email_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../images/contact_info/email.svg */ "./src/images/contact_info/email.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function Contact_Info() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "contact-info-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "contact-title-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        className: "contact-title",
        children: "Get In Touch"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
        className: "contact-title-subtext",
        children: "Take a look at my git hub Or Find me on Social Media"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
        className: "contact-title-subtext"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "profile-pic-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
        src: _images_contact_info_profile_pic_png__WEBPACK_IMPORTED_MODULE_1__,
        alt: "",
        className: "profile-pic"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "info-icons",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
        href: "https://github.com/bredmond1019",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: _images_contact_info_github_svg__WEBPACK_IMPORTED_MODULE_2__,
          alt: "",
          className: "info-icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
        href: "https://www.linkedin.com/in/bredmond1019/",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: _images_contact_info_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__,
          alt: "",
          className: "info-icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
        href: "https://www.instagram.com/urbanlumberjack19/",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: _images_contact_info_insta_svg__WEBPACK_IMPORTED_MODULE_4__,
          alt: "",
          className: "info-icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
        href: "mailto:bredmond1019@gmail.com",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: _images_contact_info_email_svg__WEBPACK_IMPORTED_MODULE_5__,
          alt: "",
          className: "info-icon"
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact_Info);

/***/ }),

/***/ "./src/components/LandingPage/Landing.jsx":
/*!************************************************!*\
  !*** ./src/components/LandingPage/Landing.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Landing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Contact_Info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact_Info */ "./src/components/LandingPage/Contact_Info.jsx");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About */ "./src/components/LandingPage/About.jsx");
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timeline */ "./src/components/LandingPage/Timeline.jsx");
/* harmony import */ var _TechStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TechStack */ "./src/components/LandingPage/TechStack.jsx");
/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Portfolio */ "./src/components/Portfolio.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function Landing() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      id: "home",
      className: "landing-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "landing-page",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          className: "landing-title",
          children: "Brandon Redmond"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "landing-subtitle-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "landing-subtitle ",
            children: "Software Developer."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "landing-subtitle ",
            children: "Language Enthusiast."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            className: "landing-subtitle ",
            children: "Dog Lover."
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      id: "about-section",
      className: "about-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_TechStack__WEBPACK_IMPORTED_MODULE_4__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Portfolio__WEBPACK_IMPORTED_MODULE_5__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_About__WEBPACK_IMPORTED_MODULE_2__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Timeline__WEBPACK_IMPORTED_MODULE_3__.default, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Contact_Info__WEBPACK_IMPORTED_MODULE_1__.default, {})]
  });
}

/***/ }),

/***/ "./src/components/LandingPage/TechStack.jsx":
/*!**************************************************!*\
  !*** ./src/components/LandingPage/TechStack.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _images_tech_stack_Python_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../images/tech_stack/Python.svg */ "./src/images/tech_stack/Python.svg");
/* harmony import */ var _images_tech_stack_JS_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../images/tech_stack/JS.svg */ "./src/images/tech_stack/JS.svg");
/* harmony import */ var _images_tech_stack_Flask_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../images/tech_stack/Flask.svg */ "./src/images/tech_stack/Flask.svg");
/* harmony import */ var _images_tech_stack_React_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../images/tech_stack/React.svg */ "./src/images/tech_stack/React.svg");
/* harmony import */ var _images_tech_stack_GraphQL_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../images/tech_stack/GraphQL.svg */ "./src/images/tech_stack/GraphQL.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function TechStack() {
  var techStack = [{
    name: "python",
    image: _images_tech_stack_Python_svg__WEBPACK_IMPORTED_MODULE_1__
  }, {
    name: "flask",
    image: _images_tech_stack_Flask_svg__WEBPACK_IMPORTED_MODULE_3__
  }, {
    name: "graphql",
    image: _images_tech_stack_GraphQL_svg__WEBPACK_IMPORTED_MODULE_5__
  }, {
    name: "react",
    image: _images_tech_stack_React_svg__WEBPACK_IMPORTED_MODULE_4__
  }, {
    name: "javascript",
    image: _images_tech_stack_JS_svg__WEBPACK_IMPORTED_MODULE_2__
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "tech-stack",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "tech-stack-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
        className: "tech-stack-title",
        children: "My Tech Stack"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
        className: "tech-stack-subtitle",
        children: "These are the technologies I use most often"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "icon-wrapper",
      children: techStack.map(function (skill, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "".concat(skill.name, " icon-container"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "icon-title-wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
              className: "icon-title",
              children: skill.name
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "icon-img-container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              src: skill.image,
              className: "".concat(skill.name, "-img icon-img"),
              alt: ""
            })
          })]
        }, i);
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TechStack);

/***/ }),

/***/ "./src/components/LandingPage/Timeline.jsx":
/*!*************************************************!*\
  !*** ./src/components/LandingPage/Timeline.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _images_time_line_math1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../images/time_line/math1.jpg */ "./src/images/time_line/math1.jpg");
/* harmony import */ var _images_time_line_math_masters_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../images/time_line/math_masters.jpg */ "./src/images/time_line/math_masters.jpg");
/* harmony import */ var _images_time_line_classroom_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../images/time_line/classroom.jpg */ "./src/images/time_line/classroom.jpg");
/* harmony import */ var _images_time_line_uber_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../images/time_line/uber.svg */ "./src/images/time_line/uber.svg");
/* harmony import */ var _images_time_line_software_developer_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../images/time_line/software_developer.png */ "./src/images/time_line/software_developer.png");
/* harmony import */ var _images_time_line_math_teacher2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../images/time_line/math_teacher2.jpg */ "./src/images/time_line/math_teacher2.jpg");
/* harmony import */ var _images_time_line_mountain2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../images/time_line/mountain2.jpg */ "./src/images/time_line/mountain2.jpg");
/* harmony import */ var _images_time_line_mfa_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../images/time_line/mfa.png */ "./src/images/time_line/mfa.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












function Timeline() {
  var timeLineItems = [{
    image: _images_time_line_math1_jpg__WEBPACK_IMPORTED_MODULE_1__,
    date: "2006 - 2010",
    title: "Dual Bachelor's Degree: Mathematics & Education"
  }, {
    image: _images_time_line_math_teacher2_jpg__WEBPACK_IMPORTED_MODULE_6__,
    date: "2011 - 2013",
    title: "High School Mathematics Teacher"
  }, {
    image: _images_time_line_uber_svg__WEBPACK_IMPORTED_MODULE_4__,
    date: "2013 - 2014",
    title: "Uber Technologies - Operations: Driver Side"
  }, {
    image: _images_time_line_classroom_jpg__WEBPACK_IMPORTED_MODULE_3__,
    date: "2014 - 2020",
    title: "High School Computer Science & Mathematics Teacher"
  }, {
    image: _images_time_line_math_masters_jpg__WEBPACK_IMPORTED_MODULE_2__,
    date: "2015 - 2017",
    title: "Master's Degree in Mathematics"
  }, {
    image: _images_time_line_mfa_png__WEBPACK_IMPORTED_MODULE_8__,
    date: "2017-2020",
    title: "Math For America Master Teacher"
  }, {
    image: _images_time_line_software_developer_png__WEBPACK_IMPORTED_MODULE_5__,
    date: "2020 - Present",
    title: "Software Developer"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "timeline",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "timeline-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
        className: "timeline-title",
        children: "Education and Experience"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
        className: "timeline-subtitle",
        children: "My Professional Story"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "timeline-items-wrapper",
      children: [timeLineItems.map(function (item, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "timeline-item-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "timeline-image-container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
              src: item.image,
              alt: "",
              className: "timeline-image"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "tile ",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "tile-body",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "tile-grow",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
                  className: "tile-title",
                  children: item.date
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
                  className: "tile-detail",
                  children: item.title
                })]
              })
            })
          })]
        });
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "final-image-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "image-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            src: _images_time_line_mountain2_jpg__WEBPACK_IMPORTED_MODULE_7__,
            alt: "",
            className: "timeline-image"
          })
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);

/***/ }),

/***/ "./src/components/Navigation.jsx":
/*!***************************************!*\
  !*** ./src/components/Navigation.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-hash-link */ "./node_modules/react-router-hash-link/dist/react-router-hash-link.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Navigation = function Navigation(props) {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    id: "navbar-container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      id: "navbar",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
        collapseOnSelect: true,
        fixed: "top",
        expand: "sm" // bg="primary"
        // variant="dark"
        ,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Toggle, {
            "aria-controls": "responsive-navbar-nav"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Collapse, {
            id: "responsive-navbar-nav",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Brand, {
              as: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
              to: "/"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
              className: "justify-content-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Link, {
                as: react_router_hash_link__WEBPACK_IMPORTED_MODULE_7__.NavHashLink,
                to: "/#home",
                children: "Home"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Link, {
                as: react_router_hash_link__WEBPACK_IMPORTED_MODULE_7__.NavHashLink,
                to: "#portfolio",
                children: "Portfolio"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Link, {
                as: react_router_hash_link__WEBPACK_IMPORTED_MODULE_7__.NavHashLink,
                to: "/#about",
                children: "About"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Link, {
                as: react_router_hash_link__WEBPACK_IMPORTED_MODULE_7__.NavHashLink,
                to: "/blog",
                children: "Blog"
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

/***/ }),

/***/ "./src/components/Portfolio.jsx":
/*!**************************************!*\
  !*** ./src/components/Portfolio.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ "./src/components/Projects.jsx");
/* harmony import */ var _images_Fala_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../images/Fala.png */ "./src/images/Fala.png");
/* harmony import */ var _images_Climbr_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../images/Climbr.png */ "./src/images/Climbr.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function Portfolio() {
  var projectsList = [{
    title: "Fala",
    description: "A Portuguese Vocab Review Application",
    image: _images_Fala_png__WEBPACK_IMPORTED_MODULE_2__,
    link: ""
  }, {
    title: "Climbr",
    description: "A Social Network for Climbr and Outdoor Enthusiasts",
    image: _images_Climbr_png__WEBPACK_IMPORTED_MODULE_3__,
    link: ""
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    id: "portfolio",
    className: "portfolio-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "portfolio-title-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        className: "portfolio-title",
        children: "Portfolio"
      })
    }), projectsList.map(function (project, i) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Projects__WEBPACK_IMPORTED_MODULE_1__.default, {
        project: project
      });
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

/***/ }),

/***/ "./src/components/Projects.jsx":
/*!*************************************!*\
  !*** ./src/components/Projects.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Projects(_ref) {
  var project = _ref.project;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "project-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "project-image-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: project.image,
        alt: "",
        className: "project-image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "project-info-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
        className: "project-title",
        children: project.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "project-info",
        children: project.description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: project.link,
        className: "project-link",
        children: "Check it out on Github"
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var _Scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scss/app.scss */ "./src/Scss/app.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





react_dom__WEBPACK_IMPORTED_MODULE_0__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__.default, {})
}), document.getElementById("root"));

/***/ }),

/***/ "./src/Scss/app.scss":
/*!***************************!*\
  !*** ./src/Scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/Brandon3.jpg":
/*!*********************************!*\
  !*** ./src/images/Brandon3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df1304b5fb7597728605.jpg";

/***/ }),

/***/ "./src/images/Climbr.png":
/*!*******************************!*\
  !*** ./src/images/Climbr.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24ba404d814773927080.png";

/***/ }),

/***/ "./src/images/Fala.png":
/*!*****************************!*\
  !*** ./src/images/Fala.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfa188fb303064f620fd.png";

/***/ }),

/***/ "./src/images/blog_page/blue_green.jpeg":
/*!**********************************************!*\
  !*** ./src/images/blog_page/blue_green.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b483838054b2374f26e.jpeg";

/***/ }),

/***/ "./src/images/blog_page/mountain3.jpeg":
/*!*********************************************!*\
  !*** ./src/images/blog_page/mountain3.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e65e0ce9df63678ce001.jpeg";

/***/ }),

/***/ "./src/images/blog_page/purple_triangle.jpeg":
/*!***************************************************!*\
  !*** ./src/images/blog_page/purple_triangle.jpeg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ecdcf870260d7071550.jpeg";

/***/ }),

/***/ "./src/images/contact_info/email.svg":
/*!*******************************************!*\
  !*** ./src/images/contact_info/email.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3510fcc025b9870ee457.svg";

/***/ }),

/***/ "./src/images/contact_info/github.svg":
/*!********************************************!*\
  !*** ./src/images/contact_info/github.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c20f38ca39f02acf75d1.svg";

/***/ }),

/***/ "./src/images/contact_info/insta.svg":
/*!*******************************************!*\
  !*** ./src/images/contact_info/insta.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d37acdd3974dacaf3e48.svg";

/***/ }),

/***/ "./src/images/contact_info/linkedin.svg":
/*!**********************************************!*\
  !*** ./src/images/contact_info/linkedin.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61fa9fc6c830b32da553.svg";

/***/ }),

/***/ "./src/images/contact_info/profile_pic.png":
/*!*************************************************!*\
  !*** ./src/images/contact_info/profile_pic.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e293ba9ecb27689d946.png";

/***/ }),

/***/ "./src/images/puppy.jpeg":
/*!*******************************!*\
  !*** ./src/images/puppy.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d057cd8d746b9a0d08c8.jpeg";

/***/ }),

/***/ "./src/images/tech_stack/Flask.svg":
/*!*****************************************!*\
  !*** ./src/images/tech_stack/Flask.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ad55a4c33628c7e68b6.svg";

/***/ }),

/***/ "./src/images/tech_stack/GraphQL.svg":
/*!*******************************************!*\
  !*** ./src/images/tech_stack/GraphQL.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61116f4fcb1318abddc3.svg";

/***/ }),

/***/ "./src/images/tech_stack/JS.svg":
/*!**************************************!*\
  !*** ./src/images/tech_stack/JS.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffcf56dc5498f7bbbec8.svg";

/***/ }),

/***/ "./src/images/tech_stack/Python.svg":
/*!******************************************!*\
  !*** ./src/images/tech_stack/Python.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a8b2999db46fb931134.svg";

/***/ }),

/***/ "./src/images/tech_stack/React.svg":
/*!*****************************************!*\
  !*** ./src/images/tech_stack/React.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1484e295933af0e748d.svg";

/***/ }),

/***/ "./src/images/time_line/classroom.jpg":
/*!********************************************!*\
  !*** ./src/images/time_line/classroom.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63005c8ceb1189c6527f.jpg";

/***/ }),

/***/ "./src/images/time_line/math1.jpg":
/*!****************************************!*\
  !*** ./src/images/time_line/math1.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcf297006ff0987375c2.jpg";

/***/ }),

/***/ "./src/images/time_line/math_masters.jpg":
/*!***********************************************!*\
  !*** ./src/images/time_line/math_masters.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "731f5da4472f55c44549.jpg";

/***/ }),

/***/ "./src/images/time_line/math_teacher2.jpg":
/*!************************************************!*\
  !*** ./src/images/time_line/math_teacher2.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "088da5e35a5627879199.jpg";

/***/ }),

/***/ "./src/images/time_line/mfa.png":
/*!**************************************!*\
  !*** ./src/images/time_line/mfa.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c7b1b23a83fdb49d4af.png";

/***/ }),

/***/ "./src/images/time_line/mountain2.jpg":
/*!********************************************!*\
  !*** ./src/images/time_line/mountain2.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae77e5eb7355508ac460.jpg";

/***/ }),

/***/ "./src/images/time_line/software_developer.png":
/*!*****************************************************!*\
  !*** ./src/images/time_line/software_developer.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aeb3a003d88f6374420b.png";

/***/ }),

/***/ "./src/images/time_line/uber.svg":
/*!***************************************!*\
  !*** ./src/images/time_line/uber.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "599c862c77c9eb279c5e.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
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
/******/ 			"main": 0
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
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_app"] = self["webpackChunkwebpack_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_css_bootstrap_min_css-node_modules_react-bootstrap_esm_Co-9ea715"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map