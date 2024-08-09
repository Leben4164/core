"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/recruit/page",{

/***/ "(app-pages-browser)/./components/form.tsx":
/*!*****************************!*\
  !*** ./components/form.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var pocketbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pocketbase */ \"(app-pages-browser)/./node_modules/pocketbase/dist/pocketbase.es.mjs\");\n/* harmony import */ var _numberInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./numberInput */ \"(app-pages-browser)/./components/numberInput.tsx\");\n/* harmony import */ var _nameInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nameInput */ \"(app-pages-browser)/./components/nameInput.tsx\");\n/* harmony import */ var _motivInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motivInput */ \"(app-pages-browser)/./components/motivInput.tsx\");\n/* harmony import */ var _wantInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wantInput */ \"(app-pages-browser)/./components/wantInput.tsx\");\n/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Form.module.css */ \"(app-pages-browser)/./styles/Form.module.css\");\n/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Form() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [motiv, setMotiv] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [want, setWant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const pb = new pocketbase__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"http://127.0.0.1:8090\"); // PocketBase 서버 URL로 변경하세요\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const data = {\n                numberAndName: number + \" \" + name,\n                motiv: motiv,\n                want: want\n            };\n            await pb.collection(\"information\").create(data); // 'your_collection_name'을 실제 컬렉션 이름으로 변경하세요\n            console.log(\"데이터 저장 성공:\", data);\n            alert(\"제출되었습니다.\");\n            _nameInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n        } catch (error) {\n            console.error(\"데이터 저장 실패:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_7___default().formContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_numberInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                value: number,\n                onChange: setNumber\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SAMSUNG\\\\Documents\\\\core\\\\core\\\\components\\\\form.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nameInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                value: name,\n                onChange: setName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SAMSUNG\\\\Documents\\\\core\\\\core\\\\components\\\\form.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_motivInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                value: motiv,\n                onChange: setMotiv\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SAMSUNG\\\\Documents\\\\core\\\\core\\\\components\\\\form.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_wantInput__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                value: want,\n                onChange: setWant\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SAMSUNG\\\\Documents\\\\core\\\\core\\\\components\\\\form.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SAMSUNG\\\\Documents\\\\core\\\\core\\\\components\\\\form.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_7___default().button),\n                onClick: handleSubmit,\n                children: \"제출\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SAMSUNG\\\\Documents\\\\core\\\\core\\\\components\\\\form.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\SAMSUNG\\\\Documents\\\\core\\\\core\\\\components\\\\form.tsx\",\n        lineNumber: 37,\n        columnNumber: 7\n    }, this);\n}\n_s(Form, \"/DLLf+Kc4Xy3EQ09zt5FLpen69M=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNHO0FBQ0k7QUFDSjtBQUNFO0FBQ0Y7QUFDVztBQUVoQyxTQUFTTzs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNZLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1nQixLQUFLLElBQUlmLGtEQUFVQSxDQUFDLDBCQUEwQiwyQkFBMkI7SUFFL0UsTUFBTWdCLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNBLE1BQU1DLE9BQU87Z0JBQ1RDLGVBQWdCYixTQUFTLE1BQU1FO2dCQUMvQkUsT0FBT0E7Z0JBQ1BFLE1BQU1BO1lBQ1Y7WUFDQSxNQUFNRSxHQUFHTSxVQUFVLENBQUMsZUFBZUMsTUFBTSxDQUFDSCxPQUFPLDRDQUE0QztZQUM3RkksUUFBUUMsR0FBRyxDQUFDLGNBQWNMO1lBQzFCTSxNQUFNO1lBQ052QixrREFBU0E7UUFDYixFQUFFLE9BQU93QixPQUFPO1lBQ1pILFFBQVFHLEtBQUssQ0FBQyxjQUFjQTtRQUNoQztJQUNKO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVd2Qiw4RUFBb0I7OzBCQUNsQyw4REFBQ0osb0RBQVdBO2dCQUFDNkIsT0FBT3ZCO2dCQUFRd0IsVUFBVXZCOzs7Ozs7MEJBQ3RDLDhEQUFDTixrREFBU0E7Z0JBQUM0QixPQUFPckI7Z0JBQU1zQixVQUFVckI7Ozs7OzswQkFDbEMsOERBQUNQLG1EQUFVQTtnQkFBQzJCLE9BQU9uQjtnQkFBT29CLFVBQVVuQjs7Ozs7OzBCQUNwQyw4REFBQ1Isa0RBQVNBO2dCQUFDMEIsT0FBT2pCO2dCQUFNa0IsVUFBVWpCOzs7Ozs7MEJBQ2xDLDhEQUFDa0I7Ozs7OzBCQUNELDhEQUFDQztnQkFBT0wsV0FBV3ZCLHVFQUFhO2dCQUFFNkIsU0FBU2xCOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHakU7R0FuQ3dCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Zvcm0udHN4PzhlZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb2NrZXRCYXNlIGZyb20gJ3BvY2tldGJhc2UnO1xyXG5pbXBvcnQgTnVtYmVySW5wdXQgZnJvbSBcIi4vbnVtYmVySW5wdXRcIjtcclxuaW1wb3J0IE5hbWVJbnB1dCBmcm9tIFwiLi9uYW1lSW5wdXRcIjtcclxuaW1wb3J0IE1vdGl2SW5wdXQgZnJvbSBcIi4vbW90aXZJbnB1dFwiO1xyXG5pbXBvcnQgV2FudElucHV0IGZyb20gXCIuL3dhbnRJbnB1dFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcclxuICAgIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW21vdGl2LCBzZXRNb3Rpdl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt3YW50LCBzZXRXYW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IHBiID0gbmV3IFBvY2tldEJhc2UoJ2h0dHA6Ly8xMjcuMC4wLjE6ODA5MCcpOyAvLyBQb2NrZXRCYXNlIOyEnOuyhCBVUkzroZwg67OA6rK97ZWY7IS47JqUXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIG51bWJlckFuZE5hbWUgOiBudW1iZXIgKyBcIiBcIiArIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBtb3RpdjogbW90aXYsXHJcbiAgICAgICAgICAgICAgICB3YW50OiB3YW50LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBhd2FpdCBwYi5jb2xsZWN0aW9uKCdpbmZvcm1hdGlvbicpLmNyZWF0ZShkYXRhKTsgLy8gJ3lvdXJfY29sbGVjdGlvbl9uYW1lJ+ydhCDsi6TsoJwg7Lus66CJ7IWYIOydtOumhOycvOuhnCDrs4Dqsr3tlZjshLjsmpRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLrjbDsnbTthLAg7KCA7J6lIOyEseqztTpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi7KCc7Lac65CY7JeI7Iq164uI64ukLlwiKVxyXG4gICAgICAgICAgICBOYW1lSW5wdXRcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi642w7J207YSwIOyggOyepSDsi6TtjKg6XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPE51bWJlcklucHV0IHZhbHVlPXtudW1iZXJ9IG9uQ2hhbmdlPXtzZXROdW1iZXJ9IC8+XHJcbiAgICAgICAgPE5hbWVJbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e3NldE5hbWV9IC8+XHJcbiAgICAgICAgPE1vdGl2SW5wdXQgdmFsdWU9e21vdGl2fSBvbkNoYW5nZT17c2V0TW90aXZ9IC8+XHJcbiAgICAgICAgPFdhbnRJbnB1dCB2YWx1ZT17d2FudH0gb25DaGFuZ2U9e3NldFdhbnR9IC8+XHJcbiAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PuygnOy2nDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQb2NrZXRCYXNlIiwiTnVtYmVySW5wdXQiLCJOYW1lSW5wdXQiLCJNb3RpdklucHV0IiwiV2FudElucHV0Iiwic3R5bGVzIiwiRm9ybSIsIm51bWJlciIsInNldE51bWJlciIsIm5hbWUiLCJzZXROYW1lIiwibW90aXYiLCJzZXRNb3RpdiIsIndhbnQiLCJzZXRXYW50IiwicGIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwibnVtYmVyQW5kTmFtZSIsImNvbGxlY3Rpb24iLCJjcmVhdGUiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm1Db250YWluZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/form.tsx\n"));

/***/ })

});