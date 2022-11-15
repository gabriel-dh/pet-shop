/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("let loginForm = document.querySelector('.header .login-form');\r\n\r\ndocument.querySelector('#login-btn').onclick = () =>{\r\n    loginForm.classList.toggle('active');\r\n    navbar.classList.remove('active');\r\n}\r\n\r\nlet navbar = document.querySelector('.header .navbar');\r\n\r\ndocument.querySelector('#menu-btn').onclick = () =>{\r\n    navbar.classList.toggle('active');    \r\n    loginForm.classList.remove('active');\r\n}\r\n\r\nwindow.onscroll = () =>{\r\n    loginForm.classList.remove('active');\r\n    navbar.classList.remove('active');\r\n\r\n    if(window.scrollY > 0){\r\n        document.querySelector('.header').classList.add('active');\r\n    }else{\r\n        document.querySelector('.header').classList.remove('active');\r\n    }\r\n}\r\n\r\nwindow.onload = () =>{\r\n    if(window.scrollY > 0){\r\n        document.querySelector('.header').classList.add('active');\r\n    }else{\r\n        document.querySelector('.header').classList.remove('active');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;