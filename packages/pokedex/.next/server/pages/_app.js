"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _store_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Alex\\\\Web Developer\\\\Projects\\\\LernaRepoEx\\\\packages\\\\pokedex\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Alex\\\\Web Developer\\\\Projects\\\\LernaRepoEx\\\\packages\\\\pokedex\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNrQztBQUNJO0FBRXRDLE1BQU1FLE1BQU0sQ0FBQyxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxHQUFLO0lBQ2hELHFCQUNFLDhEQUFDSCxpREFBUUE7UUFBQ0QsT0FBT0Esb0RBQUtBO2tCQUNwQiw0RUFBQ0c7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdoQztBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZWRleC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbInN0b3JlIiwiUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"pokemonsSlice\": () => (/* binding */ pokemonsSlice),\n/* harmony export */   \"selectedPokemonSlice\": () => (/* binding */ selectedPokemonSlice),\n/* harmony export */   \"setData\": () => (/* binding */ setData),\n/* harmony export */   \"setLoading\": () => (/* binding */ setLoading),\n/* harmony export */   \"setSelected\": () => (/* binding */ setSelected)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    pokemons: []\n};\nconst pokemonsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"pokemons\",\n    initialState,\n    reducers: {\n        setData: (state, action)=>{\n            state.pokemons = action.payload;\n        }\n    }\n});\nconst initialSelectedState = {\n    selectedPokemon: undefined,\n    loading: false\n};\nconst selectedPokemonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"selectedPokemon\",\n    initialState: initialSelectedState,\n    reducers: {\n        setSelected: (state, action)=>{\n            state.selectedPokemon = action.payload;\n            state.loading = false;\n        },\n        setLoading: (state, action)=>{\n            state.loading = true;\n        }\n    }\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        pokemons: pokemonsSlice.reducer,\n        selectedPokemon: selectedPokemonSlice.reducer\n    }\n});\nconst { setData  } = pokemonsSlice.actions;\nconst { setSelected , setLoading  } = selectedPokemonSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRTtBQU90RSxNQUFNRSxlQUE4QjtJQUFFQyxVQUFVLEVBQUU7QUFBQztBQUU1QyxNQUFNQyxnQkFBZ0JILDZEQUFXQSxDQUFDO0lBQ3ZDSSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDUkMsU0FBUyxDQUFDQyxPQUFzQkMsU0FBVztZQUN6Q0QsTUFBTUwsUUFBUSxHQUFHTSxPQUFPQyxPQUFPO1FBQ2pDO0lBQ0Y7QUFDRixHQUFHO0FBT0gsTUFBTUMsdUJBQTZDO0lBQUVDLGlCQUFpQkM7SUFBV0MsU0FBUyxLQUFLO0FBQUM7QUFFekYsTUFBTUMsdUJBQXVCZCw2REFBV0EsQ0FBQztJQUM5Q0ksTUFBTTtJQUNOSCxjQUFjUztJQUNkTCxVQUFVO1FBQ1JVLGFBQWEsQ0FBQ1IsT0FBNkJDLFNBQVc7WUFDcERELE1BQU1JLGVBQWUsR0FBR0gsT0FBT0MsT0FBTztZQUN0Q0YsTUFBTU0sT0FBTyxHQUFHLEtBQUs7UUFDdkI7UUFDQUcsWUFBWSxDQUFDVCxPQUE2QkMsU0FBVztZQUNuREQsTUFBTU0sT0FBTyxHQUFHLElBQUk7UUFDdEI7SUFDRjtBQUNGLEdBQUc7QUFFSCxNQUFNSSxRQUFRbEIsZ0VBQWNBLENBQUM7SUFDM0JtQixTQUFTO1FBQ1BoQixVQUFVQyxjQUFjZSxPQUFPO1FBQy9CUCxpQkFBaUJHLHFCQUFxQkksT0FBTztJQUMvQztBQUNGO0FBRU8sTUFBTSxFQUFFWixRQUFPLEVBQUUsR0FBR0gsY0FBY2dCLE9BQU8sQ0FBQztBQUMxQyxNQUFNLEVBQUVKLFlBQVcsRUFBRUMsV0FBVSxFQUFFLEdBQUdGLHFCQUFxQkssT0FBTyxDQUFDO0FBRXhFLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9rZWRleC8uL3N0b3JlL3N0b3JlLnRzPzEyZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGNyZWF0ZVNsaWNlLCBBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBQb2tlbW9uLCBQb2tlbW9uQVBJRGF0YSB9IGZyb20gJ3V0aWxzL2ludGVyZmFjZXMvdHlwZXMnXHJcblxyXG5pbnRlcmZhY2UgUG9rZW1vbnNTdGF0ZSB7XHJcbiAgcG9rZW1vbnM6IFBva2Vtb25BUElEYXRhW11cclxufVxyXG4gXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogUG9rZW1vbnNTdGF0ZSA9IHsgcG9rZW1vbnM6IFtdIH07XHJcblxyXG5leHBvcnQgY29uc3QgcG9rZW1vbnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAncG9rZW1vbnMnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0RGF0YTogKHN0YXRlOiBQb2tlbW9uc1N0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucG9rZW1vbnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0ZWRQb2tlbW9uU3RhdGUge1xyXG4gIHNlbGVjdGVkUG9rZW1vbj86IFBva2Vtb25cclxuICBsb2FkaW5nOiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTZWxlY3RlZFN0YXRlOiBTZWxlY3RlZFBva2Vtb25TdGF0ZSA9IHsgc2VsZWN0ZWRQb2tlbW9uOiB1bmRlZmluZWQsIGxvYWRpbmc6IGZhbHNlIH07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRQb2tlbW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3NlbGVjdGVkUG9rZW1vbicsXHJcbiAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU2VsZWN0ZWRTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0U2VsZWN0ZWQ6IChzdGF0ZTogU2VsZWN0ZWRQb2tlbW9uU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5zZWxlY3RlZFBva2Vtb24gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcclxuICAgIH0sXHJcbiAgICBzZXRMb2FkaW5nOiAoc3RhdGU6IFNlbGVjdGVkUG9rZW1vblN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUubG9hZGluZyA9IHRydWU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgcG9rZW1vbnM6IHBva2Vtb25zU2xpY2UucmVkdWNlcixcclxuICAgIHNlbGVjdGVkUG9rZW1vbjogc2VsZWN0ZWRQb2tlbW9uU2xpY2UucmVkdWNlcixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldERhdGEgfSA9IHBva2Vtb25zU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IHsgc2V0U2VsZWN0ZWQsIHNldExvYWRpbmcgfSA9IHNlbGVjdGVkUG9rZW1vblNsaWNlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJwb2tlbW9ucyIsInBva2Vtb25zU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXREYXRhIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiaW5pdGlhbFNlbGVjdGVkU3RhdGUiLCJzZWxlY3RlZFBva2Vtb24iLCJ1bmRlZmluZWQiLCJsb2FkaW5nIiwic2VsZWN0ZWRQb2tlbW9uU2xpY2UiLCJzZXRTZWxlY3RlZCIsInNldExvYWRpbmciLCJzdG9yZSIsInJlZHVjZXIiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();