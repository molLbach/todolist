/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Tasks.js":
/*!**********************!*\
  !*** ./src/Tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\r\n    constructor(title,date,priority,desc){\r\n        this.title = title;\r\n        this.date = date;\r\n        this.priority = priority;\r\n        this.desc = desc;\r\n        this.completed = false;\r\n    }\r\n    toggleCompleted() {\r\n        this.completed === false\r\n          ? (this.completed = true)\r\n          : (this.completed = false);\r\n    \r\n        if (this.completed === true)\r\n          this.completedDate = new Date().toLocaleString(navigator.languages[0], {\r\n            year: \"numeric\",\r\n            month: \"short\",\r\n            day: \"2-digit\"\r\n          });\r\n          if (this.completed === false) this.completedDate = \"\";\r\n\r\n        return this;\r\n\r\n\r\n    }\r\n    togglePriority() {\r\n        this.priority === false ? (this.priority = true) : (this.priority = false);\r\n        return this;\r\n      }\r\n}\r\n\r\n\r\n    \r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/Tasks.js?");

/***/ }),

/***/ "./src/dom-manip.js":
/*!**************************!*\
  !*** ./src/dom-manip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleButtonClick: () => (/* binding */ handleButtonClick)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\r\n\r\n\r\nfunction displayAlltasks(){\r\n\r\n}\r\nfunction clearTask(){\r\n\r\n}\r\nfunction clearProject(){\r\n\r\n}\r\nfunction editTask(){\r\n    \r\n}\r\n\r\nfunction handleButtonClick(){\r\nconst modal = document.querySelector(\".modal\");\r\nconst addproject = document.querySelector(\".addproject\");\r\nconst cancelproject = document.querySelector(\".cancelproject\");\r\nconst btnsubmit = document.querySelector(\".btnsubmit\");\r\nconst projectname = document.querySelector(\"#projectname\");\r\nconst projectdesc = document.querySelector(\"#projectdesc\");\r\nconst taskbutton = document.querySelector(\".addtask\");\r\nconst taskmodal = document.querySelector(\".taskmodal\");\r\nconst taskcancel = document.querySelector(\"#taskcancel\");\r\nconst taskdesc = document.querySelector(\"#taskdesc\");\r\nconst priority = document.querySelector(\"#priority\");\r\nconst date = document.querySelector(\"#date\");\r\nconst taskadd = document.querySelector(\"#taskadd\")\r\n\r\naddproject.addEventListener(\"click\",()=>{\r\n    modal.showModal();\r\n})    \r\ncancelproject.addEventListener(\"click\",()=>{\r\n    modal.close();\r\n    projectdesc.value = \"\";\r\n    projectname.value = \"\";\r\n})\r\nbtnsubmit.addEventListener(\"click\", ()=>{\r\nlet projectname1 = projectname.value;\r\nlet projectdesc1 = projectdesc.value;\r\nprojectdesc.value = \"\";\r\nprojectname.value = \"\";\r\nmodal.close();\r\n(0,_projects__WEBPACK_IMPORTED_MODULE_0__.ajouterproject)(projectname1,projectdesc1);\r\n(0,_projects__WEBPACK_IMPORTED_MODULE_0__.populateProject)();\r\n\r\n});\r\n\r\n\r\ntaskbutton.addEventListener(\"click\",()=>{\r\n    taskmodal.showModal();\r\n\r\n});\r\ntaskcancel.addEventListener(\"click\",()=>{\r\n    taskmodal.close();\r\n    taskdesc.value = \"\";\r\n    priority.value = \"default\";\r\n    date.value = \"\"; \r\n})\r\n\r\ntaskadd.addEventListener(\"click\",()=>{\r\n    \r\n    taskmodal.close();\r\n    taskdesc.value = \"\";\r\n    priority.value = \"default\";\r\n    date.value = \"\";\r\n     \r\n\r\n})\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/dom-manip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip */ \"./src/dom-manip.js\");\n\r\n(0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.handleButtonClick)();\r\n/* import {addTask} from \"./Tasks.js\";\r\n\r\nlet todo1 = new addTask(\"asdasd\",\"asdasd\",\"asdasd\",\"asdd\");\r\nconsole.log(todo1);\r\n */\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ajouterproject: () => (/* binding */ ajouterproject),\n/* harmony export */   latestproject: () => (/* binding */ latestproject),\n/* harmony export */   populateProject: () => (/* binding */ populateProject),\n/* harmony export */   projectsArray: () => (/* binding */ projectsArray)\n/* harmony export */ });\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks */ \"./src/Tasks.js\");\n\r\n\r\nclass Project{\r\n    constructor(title,desc){\r\n            this.title = title;\r\n            this.desc = desc;\r\n            this.tasks = [];\r\n            }\r\n}\r\nlet projectsArray = [];\r\nlet latestproject;\r\n    \r\nfunction ajouterproject(title,desc) {\r\n    const newproject = new Project(title,desc);\r\n    projectsArray.push(newproject);\r\n    latestproject = newproject;\r\n}\r\nfunction populateProject(){\r\n    const projectsdiv = document.querySelector(\".projectsdiv\");\r\n    let proji = document.createElement(\"div\");\r\n    proji.classList.add(\"projetstyle\");\r\n    let titre = document.createElement(\"h1\");\r\n    titre.textContent = `${latestproject.title}`\r\n    proji.appendChild(titre);\r\n    let descri = document.createElement(\"p\");\r\n    descri.textContent = `${latestproject.desc}`;\r\n    proji.appendChild(descri);\r\n    projectsdiv.appendChild(proji);\r\n\r\n}\r\n\r\nfunction addTasktoProject(taskTitle,taskDate,taskPriority,TaskDesc){\r\n    const newtask = new _Tasks__WEBPACK_IMPORTED_MODULE_0__.Task(taskTitle,taskDate,taskPriority,TaskDesc);\r\n    latestproject.tasks.push(newtask);\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;