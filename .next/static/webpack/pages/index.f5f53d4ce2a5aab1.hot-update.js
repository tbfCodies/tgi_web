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

/***/ "./src/components/Discord/DiscordWidget.js":
/*!*************************************************!*\
  !*** ./src/components/Discord/DiscordWidget.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_styles_DiscordWidget_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/styles/DiscordWidget.module.css */ \"./src/assets/styles/DiscordWidget.module.css\");\n/* harmony import */ var _assets_styles_DiscordWidget_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_DiscordWidget_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst DiscordWidget = ()=>{\n    _s();\n    const [onlineCount, setOnlineCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchDiscordData = async ()=>{\n            try {\n                const response = await fetch(\"https://discord.com/api/guilds/445694480205742083/widget.json\");\n                const data = await response.json();\n                setOnlineCount(data.presence_count);\n            } catch (error) {\n                console.error(\"Error fetching Discord widget data:\", error);\n            }\n        };\n        fetchDiscordData();\n    }, []);\n    const handleJoinClick = ()=>{\n        window.open(\"https://discord.gg/rB9WkcQUqu\", \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assets_styles_DiscordWidget_module_css__WEBPACK_IMPORTED_MODULE_2___default().discordWidget),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"discord\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                src: \"https://discord.com/widget?id=445694480205742083&theme=dark\",\n                sandbox: \"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts\",\n                title: \"Discord Widget\"\n            }, void 0, false, {\n                fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Discord/DiscordWidget.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Discord/DiscordWidget.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Discord/DiscordWidget.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DiscordWidget, \"eGjOf0nPMjw7DQwe4/BK8++McSI=\");\n_c = DiscordWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiscordWidget);\nvar _c;\n$RefreshReg$(_c, \"DiscordWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EaXNjb3JkL0Rpc2NvcmRXaWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ2U7QUFFbEUsTUFBTUksZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFFL0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssbUJBQW1CO1lBQ3ZCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQjtnQkFFRixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDTCxlQUFlSSxLQUFLRSxjQUFjO1lBQ3BDLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHVDQUF1Q0E7WUFDdkQ7UUFDRjtRQUVBTjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1RLGtCQUFrQjtRQUN0QkMsT0FBT0MsSUFBSSxDQUFDLGlDQUFpQztJQUMvQztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXaEIsOEZBQW9CO2tCQUNsQyw0RUFBQ2U7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0U7Z0JBQ0NDLEtBQUk7Z0JBQ0pDLFNBQVE7Z0JBQ1JDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0FsQ01wQjtLQUFBQTtBQW9DTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EaXNjb3JkL0Rpc2NvcmRXaWRnZXQuanM/MDkzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vYXNzZXRzL3N0eWxlcy9EaXNjb3JkV2lkZ2V0Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBEaXNjb3JkV2lkZ2V0ID0gKCkgPT4ge1xuICBjb25zdCBbb25saW5lQ291bnQsIHNldE9ubGluZUNvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEaXNjb3JkRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgJ2h0dHBzOi8vZGlzY29yZC5jb20vYXBpL2d1aWxkcy80NDU2OTQ0ODAyMDU3NDIwODMvd2lkZ2V0Lmpzb24nXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldE9ubGluZUNvdW50KGRhdGEucHJlc2VuY2VfY291bnQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgRGlzY29yZCB3aWRnZXQgZGF0YTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGlzY29yZERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUpvaW5DbGljayA9ICgpID0+IHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9kaXNjb3JkLmdnL3JCOVdrY1FVcXUnLCAnX2JsYW5rJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpc2NvcmRXaWRnZXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjb3JkXCI+XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Rpc2NvcmQuY29tL3dpZGdldD9pZD00NDU2OTQ0ODAyMDU3NDIwODMmdGhlbWU9ZGFya1wiXG4gICAgICAgICAgc2FuZGJveD1cImFsbG93LXBvcHVwcyBhbGxvdy1wb3B1cHMtdG8tZXNjYXBlLXNhbmRib3ggYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXG4gICAgICAgICAgdGl0bGU9XCJEaXNjb3JkIFdpZGdldFwiXG4gICAgICAgID48L2lmcmFtZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzY29yZFdpZGdldDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiRGlzY29yZFdpZGdldCIsIm9ubGluZUNvdW50Iiwic2V0T25saW5lQ291bnQiLCJmZXRjaERpc2NvcmREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJlc2VuY2VfY291bnQiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVKb2luQ2xpY2siLCJ3aW5kb3ciLCJvcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGlzY29yZFdpZGdldCIsImlmcmFtZSIsInNyYyIsInNhbmRib3giLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Discord/DiscordWidget.js\n"));

/***/ })

});