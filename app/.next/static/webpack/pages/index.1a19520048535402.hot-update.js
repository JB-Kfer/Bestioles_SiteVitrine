"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Carousel(param) {\n    let { children: slides , autoSlide =false , autoSlideInterval =7000  } = param;\n    _s();\n    const [curr, setCurr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const prev = ()=>setCurr((curr)=>curr === 0 ? slides.length - 1 : curr - 1);\n    const next = ()=>setCurr((curr)=>curr === slides.length - 1 ? 0 : curr + 1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!autoSlide) return;\n        const slideInterval = setInterval(next, autoSlideInterval);\n        return ()=>clearInterval(slideInterval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden relative z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex transition-transform ease-out duration-500\",\n                style: {\n                    transform: \"translateX(-\".concat(curr * 100, \"%)\")\n                },\n                children: slides\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 flex items-center justify-between p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: prev,\n                        className: \"p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-bestiolegreen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_2__.ChevronLeft, {\n                            size: 40\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: next,\n                        className: \"p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-bestiolegreen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_2__.ChevronRight, {\n                            size: 40\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center rounded-lg gap-2\",\n                    children: slides.map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\\n              opacity-0 transition-opacity rounded-lg  bg-white\\n              \".concat(curr === i ? \"p-2\" : \"bg-opacity-50\", \"\\n            \")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jbgki\\\\source\\\\repos\\\\Bestioles\\\\Bestioles_SiteVitrine\\\\app\\\\components\\\\Carousel.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Carousel, \"gWXkG9yR6KANghhymC7ZEtLY3KY=\");\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUEyQztBQUNjO0FBRTFDLFNBQVNJLFNBQVMsS0FJaEMsRUFBRTtRQUo4QixFQUMvQkMsVUFBVUMsT0FBTSxFQUNoQkMsV0FBWSxLQUFLLEdBQ2pCQyxtQkFBb0IsS0FBSSxFQUN6QixHQUpnQzs7SUFLL0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1XLE9BQU8sSUFDWEQsUUFBUSxDQUFDRCxPQUFVQSxTQUFTLElBQUlILE9BQU9NLE1BQU0sR0FBRyxJQUFJSCxPQUFPLENBQUM7SUFDOUQsTUFBTUksT0FBTyxJQUNYSCxRQUFRLENBQUNELE9BQVVBLFNBQVNILE9BQU9NLE1BQU0sR0FBRyxJQUFJLElBQUlILE9BQU8sQ0FBQztJQUU5RFIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ00sV0FBVztRQUNoQixNQUFNTyxnQkFBZ0JDLFlBQVlGLE1BQU1MO1FBQ3hDLE9BQU8sSUFBTVEsY0FBY0Y7SUFDN0IsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFDQ0MsV0FBVTtnQkFDVkMsT0FBTztvQkFBRUMsV0FBVyxlQUEwQixPQUFYWCxPQUFPLEtBQUk7Z0JBQUk7MEJBRWpESDs7Ozs7OzBCQUVILDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUNDQyxTQUFTWDt3QkFDVE8sV0FBVTtrQ0FFViw0RUFBQ2hCLHNEQUFXQTs0QkFBQ3FCLE1BQU07Ozs7Ozs7Ozs7O2tDQUVyQiw4REFBQ0Y7d0JBQ0NDLFNBQVNUO3dCQUNUSyxXQUFVO2tDQUVaLDRFQUFDZix1REFBWUE7NEJBQUNvQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEIsOERBQUNOO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDWlosT0FBT2tCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFDZCw4REFBQ1Q7NEJBQ0NDLFdBQVcsb0ZBRTRCLE9BQXJDVCxTQUFTaUIsSUFBSSxRQUFRLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyRCxDQUFDO0dBdER1QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/MjdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKHtcclxuICBjaGlsZHJlbjogc2xpZGVzLFxyXG4gIGF1dG9TbGlkZSA9IGZhbHNlLFxyXG4gIGF1dG9TbGlkZUludGVydmFsID0gNzAwMCxcclxufSkge1xyXG4gIGNvbnN0IFtjdXJyLCBzZXRDdXJyXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIGNvbnN0IHByZXYgPSAoKSA9PlxyXG4gICAgc2V0Q3VycigoY3VycikgPT4gKGN1cnIgPT09IDAgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IGN1cnIgLSAxKSlcclxuICBjb25zdCBuZXh0ID0gKCkgPT5cclxuICAgIHNldEN1cnIoKGN1cnIpID0+IChjdXJyID09PSBzbGlkZXMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyICsgMSkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWF1dG9TbGlkZSkgcmV0dXJuXHJcbiAgICBjb25zdCBzbGlkZUludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dCwgYXV0b1NsaWRlSW50ZXJ2YWwpXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChzbGlkZUludGVydmFsKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSB6LTBcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggdHJhbnNpdGlvbi10cmFuc2Zvcm0gZWFzZS1vdXQgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2N1cnIgKiAxMDB9JSlgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7c2xpZGVzfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTRcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcmV2fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0xIHJvdW5kZWQtZnVsbCBzaGFkb3cgYmctd2hpdGUvODAgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1iZXN0aW9sZWdyZWVuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2hldnJvbkxlZnQgc2l6ZT17NDB9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17bmV4dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSByb3VuZGVkLWZ1bGwgc2hhZG93IGJnLXdoaXRlLzgwIHRleHQtZ3JheS04MDAgaG92ZXI6YmctYmVzdGlvbGVncmVlblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDxDaGV2cm9uUmlnaHQgc2l6ZT17NDB9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGdhcC0yXCI+XHJcbiAgICAgICAgICB7c2xpZGVzLm1hcCgoXywgaSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgb3BhY2l0eS0wIHRyYW5zaXRpb24tb3BhY2l0eSByb3VuZGVkLWxnICBiZy13aGl0ZVxyXG4gICAgICAgICAgICAgICR7Y3VyciA9PT0gaSA/IFwicC0yXCIgOiBcImJnLW9wYWNpdHktNTBcIn1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNoZXZyb25MZWZ0IiwiQ2hldnJvblJpZ2h0IiwiQ2Fyb3VzZWwiLCJjaGlsZHJlbiIsInNsaWRlcyIsImF1dG9TbGlkZSIsImF1dG9TbGlkZUludGVydmFsIiwiY3VyciIsInNldEN1cnIiLCJwcmV2IiwibGVuZ3RoIiwibmV4dCIsInNsaWRlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaXplIiwibWFwIiwiXyIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Carousel.js\n"));

/***/ })

});