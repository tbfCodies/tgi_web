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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_styles_DiscordWidget_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/styles/DiscordWidget.module.css */ \"./src/assets/styles/DiscordWidget.module.css\");\n/* harmony import */ var _assets_styles_DiscordWidget_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_DiscordWidget_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst DiscordWidget = ()=>{\n    _s();\n    const [onlineCount, setOnlineCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchDiscordData = async ()=>{\n            try {\n                const response = await fetch(\"https://discord.com/api/guilds/445694480205742083/widget.json\");\n                const data = await response.json();\n                setOnlineCount(data.presence_count);\n            } catch (error) {\n                console.error(\"Error fetching Discord widget data:\", error);\n            }\n        };\n        fetchDiscordData();\n    }, []);\n    const handleJoinClick = ()=>{\n        window.open(\"https://discord.gg/rB9WkcQUqu\", \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assets_styles_DiscordWidget_module_css__WEBPACK_IMPORTED_MODULE_2___default().discordWidget),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Discord Status\"\n            }, void 0, false, {\n                fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Discord/DiscordWidget.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"discord\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                    src: \"https://discord.com/widget?id=445694480205742083&theme=dark\",\n                    sandbox: \"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts\",\n                    title: \"Discord Widget\"\n                }, void 0, false, {\n                    fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Discord/DiscordWidget.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Discord/DiscordWidget.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Discord/DiscordWidget.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DiscordWidget, \"eGjOf0nPMjw7DQwe4/BK8++McSI=\");\n_c = DiscordWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiscordWidget);\nvar _c;\n$RefreshReg$(_c, \"DiscordWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EaXNjb3JkL0Rpc2NvcmRXaWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBQ2U7QUFFbEUsTUFBTUksZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFFL0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssbUJBQW1CO1lBQ3ZCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQjtnQkFFRixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDTCxlQUFlSSxLQUFLRSxjQUFjO1lBQ3BDLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHVDQUF1Q0E7WUFDdkQ7UUFDRjtRQUVBTjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1RLGtCQUFrQjtRQUN0QkMsT0FBT0MsSUFBSSxDQUFDLGlDQUFpQztJQUMvQztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXaEIsOEZBQW9COzswQkFDbEMsOERBQUNrQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDSDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0c7b0JBQ0NDLEtBQUk7b0JBQ0pDLFNBQVE7b0JBQ1JDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBbkNNckI7S0FBQUE7QUFxQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGlzY29yZC9EaXNjb3JkV2lkZ2V0LmpzPzA5M2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Fzc2V0cy9zdHlsZXMvRGlzY29yZFdpZGdldC5tb2R1bGUuY3NzJztcblxuY29uc3QgRGlzY29yZFdpZGdldCA9ICgpID0+IHtcbiAgY29uc3QgW29ubGluZUNvdW50LCBzZXRPbmxpbmVDb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGlzY29yZERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICdodHRwczovL2Rpc2NvcmQuY29tL2FwaS9ndWlsZHMvNDQ1Njk0NDgwMjA1NzQyMDgzL3dpZGdldC5qc29uJ1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRPbmxpbmVDb3VudChkYXRhLnByZXNlbmNlX2NvdW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIERpc2NvcmQgd2lkZ2V0IGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERpc2NvcmREYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVKb2luQ2xpY2sgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZGlzY29yZC5nZy9yQjlXa2NRVXF1JywgJ19ibGFuaycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXNjb3JkV2lkZ2V0fT5cbiAgICAgIDxoMj5EaXNjb3JkIFN0YXR1czwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvcmRcIj5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vZGlzY29yZC5jb20vd2lkZ2V0P2lkPTQ0NTY5NDQ4MDIwNTc0MjA4MyZ0aGVtZT1kYXJrXCJcbiAgICAgICAgICBzYW5kYm94PVwiYWxsb3ctcG9wdXBzIGFsbG93LXBvcHVwcy10by1lc2NhcGUtc2FuZGJveCBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcbiAgICAgICAgICB0aXRsZT1cIkRpc2NvcmQgV2lkZ2V0XCJcbiAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNjb3JkV2lkZ2V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJEaXNjb3JkV2lkZ2V0Iiwib25saW5lQ291bnQiLCJzZXRPbmxpbmVDb3VudCIsImZldGNoRGlzY29yZERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcmVzZW5jZV9jb3VudCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUpvaW5DbGljayIsIndpbmRvdyIsIm9wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJkaXNjb3JkV2lkZ2V0IiwiaDIiLCJpZnJhbWUiLCJzcmMiLCJzYW5kYm94IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Discord/DiscordWidget.js\n"));

/***/ })

});