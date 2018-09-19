/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: soma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n// 3.1\n// const arr = [1, 2, 3, 4, 5];\n// const teste = arr.map(item => item + 10);\n// console.log(teste);\n// 3.2 \n// Dica: Utilize uma constante pra function\n// const usuario = { nome: 'Diego', idade: 23 };\n// const mostraIdade = () => console.log(usuario.idade)\n// mostraIdade(usuario);\n// 3.3\n// Dica: Utilize uma constante pra function\n// const nome = \"pedro\";\n// const idade = 23;\n// const mostraUsuario = (nome = 'Diego', idade = 18) => (console.log({ nome, idade }));\n// mostraUsuario(nome, idade);\n// mostraUsuario(nome);\n// 3.4\n// const promise = () => new Promise( (resolve, reject) => resolve())\n// console.log(promise);\n// const empresa = {\n//   nome: 'Rocketseat',\n//   endereco: {\n//     cidade: 'Rio do Sul',\n//     estado: 'SC',\n//   }\n// };\n// const {nome, endereco: {cidade, estado}} = empresa\n// console.log(nome); // Rocketseat\n// console.log(cidade); // Rio do Sul\n// console.log(estado); // SC\n// function mostraInfo({nome, idade}) {\n//   console.log(`${nome} tem ${idade} anos.`);\n// }\n// mostraInfo({ nome: 'Diego', idade: 23 })\n// const arr = [1, 2, 3, 4, 5, 6]\n// const [x, ...y] = arr\n// console.log(x);\n// console.log(y);\n// const soma = (...params) => params.reduce((total, next) => total + next)\n// console.log(soma(1, 2, 3, 4, 5, 6)); // 21\n// console.log(soma(1, 2)); // 3\n// const usuario = {\n//   nome: 'Diego',\n//   idade: 23,\n//   endereco: {\n//     cidade: 'Rio do Sul',\n//     uf: 'SC',\n//     pais: 'Brasil',\n//   }\n// };\n// const usuario2 = {...usuario, nome: 'Gabriel'}\n// const usuario3 = {...usuario, nome: 'Lontras'}\n// console.log(usuario2);\n// console.log(usuario3);\n// const usuario = 'Diego';\n// const idade = 23;\n// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');\n// console.log(`O usuário ${usuario} possui ${idade} anos`);\n// const nome = 'Diego';\n// const usuario1 = {\n//   nome,\n//   idade,\n//   cidade: 'Rio do Sul',\n// };\n// console.log(usuario1);\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(1, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });