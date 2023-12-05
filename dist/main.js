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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   populateTask: () => (/* binding */ populateTask)\n/* harmony export */ });\nclass Task{\r\n  constructor(title,date,priority){\r\n      this.title = title;\r\n      this.date = date;\r\n      this.priority = priority;\r\n      this.completed = false;\r\n  }\r\n  toggleCompleted() {\r\n      this.completed === false\r\n        ? (this.completed = true)\r\n        : (this.completed = false);\r\n      if (this.completed === true)\r\n        this.completedDate = new Date().toLocaleString(navigator.languages[0], {\r\n          year: \"numeric\",\r\n          month: \"short\",\r\n          day: \"2-digit\"\r\n        });\r\n        if (this.completed === false) this.completedDate = \"\";\r\n\r\n      return this;\r\n\r\n\r\n  }\r\n  togglePriority() {\r\n      this.priority === false ? (this.priority = true) : (this.priority = false);\r\n      return this;\r\n    }\r\n}\r\n\r\n\r\nfunction populateTask(projectInstance) {\r\nlet latesttask = projectInstance.tasks.length-1;\r\nconst refreshdiv = document.querySelector(\".refreshdiv\");\r\nlet task = document.createElement(\"div\");\r\ntask.classList.add(\"taskstyle\");\r\n\r\nlet taskdesc = document.createElement(\"h1\");\r\ntaskdesc.textContent = projectInstance.tasks[latesttask].title; \r\n\r\nlet taskdate = document.createElement(\"p\"); \r\ntaskdate.textContent = projectInstance.tasks[latesttask].date; \r\n\r\nlet taskPriority = document.createElement(\"p\"); \r\ntaskPriority.textContent = projectInstance.tasks[latesttask].priority; \r\n\r\ntask.appendChild(taskdesc);\r\ntask.appendChild(taskdate);\r\ntask.appendChild(taskPriority);\r\n\r\nrefreshdiv.appendChild(task);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/Tasks.js?");

/***/ }),

/***/ "./src/dom-manip.js":
/*!**************************!*\
  !*** ./src/dom-manip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleButtonClick: () => (/* binding */ handleButtonClick)\n/* harmony export */ });\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks */ \"./src/Tasks.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\r\n\r\n\r\n\r\nfunction displayAlltasks(){\r\n\r\n}\r\nfunction clearTask(){\r\n\r\n}\r\nfunction clearProject(){\r\n\r\n}\r\nfunction editTask(){\r\n    \r\n}\r\n\r\nfunction handleButtonClick(){\r\nconst modal = document.querySelector(\".modal\");\r\nconst addproject = document.querySelector(\".addproject\");\r\nconst cancelproject = document.querySelector(\".cancelproject\");\r\nconst btnsubmit = document.querySelector(\".btnsubmit\");\r\nconst projectname = document.querySelector(\"#projectname\");\r\nconst projectdesc = document.querySelector(\"#projectdesc\");\r\nconst taskbutton = document.querySelector(\".addtask\");\r\nconst taskmodal = document.querySelector(\".taskmodal\");\r\nconst taskcancel = document.querySelector(\"#taskcancel\");\r\nconst taskdesc = document.querySelector(\"#taskdesc\");\r\nconst priority = document.querySelector(\"#priority\");\r\nconst date = document.querySelector(\"#date\");\r\nconst taskadd = document.querySelector(\"#taskadd\");\r\n\r\n//PROJECTS---------------------------------------------\r\naddproject.addEventListener(\"click\",()=>{\r\n    modal.showModal();\r\n})    \r\ncancelproject.addEventListener(\"click\",()=>{\r\n    modal.close();\r\n    projectdesc.value = \"\";\r\n    projectname.value = \"\";\r\n})\r\nbtnsubmit.addEventListener(\"click\", ()=>{\r\nlet projectname1 = projectname.value;\r\nlet projectdesc1 = projectdesc.value;\r\nprojectdesc.value = \"\";\r\nprojectname.value = \"\";\r\nmodal.close();\r\n(0,_projects__WEBPACK_IMPORTED_MODULE_1__.ajouterproject)(projectname1,projectdesc1);\r\nconsole.log(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray);\r\n});\r\n\r\n//TASKS---------------------------------------------------\r\ntaskbutton.addEventListener(\"click\",()=>{\r\n    taskmodal.showModal();\r\n\r\n});\r\ntaskcancel.addEventListener(\"click\",()=>{\r\n    taskmodal.close();\r\n    taskdesc.value = \"\";\r\n    priority.value = \"default\";\r\n    date.value = \"\"; \r\n})\r\n\r\ntaskadd.addEventListener(\"click\", () => {\r\n    const selectedProjectElement = document.querySelector('.projetstyle.selected');\r\n    const projectId = selectedProjectElement.getAttribute('project-id');\r\n    const selectedProjectInstance = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getSelectedProjectId)(parseInt(projectId));\r\n    let taskdesc1 = taskdesc.value;\r\n    let date1 = date.value;\r\n    let priority1 = priority.value;\r\n    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.addTasktoProject)(taskdesc1, date1,priority1, selectedProjectInstance);\r\n    console.log(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray);\r\n    (0,_Tasks__WEBPACK_IMPORTED_MODULE_0__.populateTask)(selectedProjectInstance);  \r\n    taskdesc.value = \"\";\r\n    date.value =\"\"\r\n    priority.value = \"\";\r\n    taskmodal.close();\r\n\r\n})\r\n\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/dom-manip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip */ \"./src/dom-manip.js\");\n\r\n(0,_dom_manip__WEBPACK_IMPORTED_MODULE_0__.handleButtonClick)();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTasktoProject: () => (/* binding */ addTasktoProject),\n/* harmony export */   ajouterproject: () => (/* binding */ ajouterproject),\n/* harmony export */   getSelectedProjectId: () => (/* binding */ getSelectedProjectId),\n/* harmony export */   latestproject: () => (/* binding */ latestproject),\n/* harmony export */   populateProject: () => (/* binding */ populateProject),\n/* harmony export */   projectsArray: () => (/* binding */ projectsArray)\n/* harmony export */ });\n/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks */ \"./src/Tasks.js\");\n\r\n\r\nclass Project{\r\n    static id = 1;\r\n    constructor(title,desc){\r\n\r\n            this.title = title;\r\n            this.desc = desc;\r\n            this.tasks = [];\r\n            this.id = Project.id++;\r\n        }\r\n                   \r\n\r\n}\r\nlet projectsArray = [];\r\nlet latestproject;\r\n    \r\nfunction ajouterproject(title, desc) {\r\n    const newproject = new Project(title, desc);\r\n    projectsArray.push(newproject);\r\n    latestproject = newproject;\r\n    populateProject();\r\n}\r\n\r\nfunction populateProject() {\r\n    const projectsdiv = document.querySelector(\".projectsdiv\");\r\n    let proji = document.createElement(\"div\");\r\n    proji.classList.add(\"projetstyle\");\r\n    proji.setAttribute('project-id', latestproject.id);\r\n    let titre = document.createElement(\"h1\");\r\n    titre.textContent = `${latestproject.title}`\r\n    proji.appendChild(titre);\r\n    let descri = document.createElement(\"p\");\r\n    descri.textContent = `${latestproject.desc}`;\r\n    proji.appendChild(descri);\r\n    proji.addEventListener(\"click\", () => {\r\n      const allProjects = document.querySelectorAll('.projetstyle');\r\n      allProjects.forEach(project => {\r\n        project.classList.remove(\"selected\");\r\n    });\r\n    proji.classList.add(\"selected\");\r\n      console.log(proji);\r\n  });\r\n          \r\n   projectsdiv.appendChild(proji);\r\n        \r\n}\r\n\r\nfunction getSelectedProjectId(projectId) {\r\n    const projectInstance = projectsArray.find(function (project) {\r\n      return project.id === projectId;\r\n    });\r\n  \r\n    return projectInstance;\r\n  }\r\n  \r\n\r\n\r\n  \r\n  \r\n\r\n\r\n  \r\n\r\nfunction addTasktoProject(taskTitle, taskDate, taskPriority, projectId) {\r\n    const newtask = new _Tasks__WEBPACK_IMPORTED_MODULE_0__.Task(taskTitle, taskDate, taskPriority);\r\n      projectId.tasks.push(newtask);}\r\n        \r\n      \r\n    \r\n    \r\n    \r\n        \r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

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