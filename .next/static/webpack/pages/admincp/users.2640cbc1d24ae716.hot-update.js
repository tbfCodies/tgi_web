"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admincp/users",{

/***/ "./src/components/Admin/RolesList.js":
/*!*******************************************!*\
  !*** ./src/components/Admin/RolesList.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AdminLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminLayout */ \"./src/components/Admin/AdminLayout.js\");\n/* harmony import */ var _RolesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RolesList */ \"./src/components/Admin/RolesList.js\");\n/* harmony import */ var _RolesForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RolesForm */ \"./src/components/Admin/RolesForm.js\");\n/* harmony import */ var _assets_styles_Admin_RolesPage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/styles/Admin/RolesPage.module.css */ \"./src/assets/styles/Admin/RolesPage.module.css\");\n/* harmony import */ var _assets_styles_Admin_RolesPage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_Admin_RolesPage_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RolesPage = ()=>{\n    _s();\n    const [roles, setRoles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedRole, setSelectedRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [showRoleForm, setShowRoleForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Fetching roles...\");\n        fetchRoles();\n    }, []);\n    const fetchRoles = async ()=>{\n        console.log(\"Starting fetchRoles function\");\n        try {\n            const response = await fetch(\"/api/roles\");\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            const data = await response.json();\n            console.log(\"Fetched roles:\", data);\n            setRoles(data);\n        } catch (error) {\n            console.error(\"Failed to fetch roles:\", error);\n        }\n        console.log(\"fetchRoles function completed\");\n    };\n    const handleEdit = (role)=>{\n        console.log(\"handleEdit called with role:\", role);\n        setSelectedRole(role);\n        setShowRoleForm(true);\n    };\n    const handleDelete = (roleId)=>{\n        console.log(\"handleDelete called with roleId:\", roleId);\n    // Implementera borttagning av roll här\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AdminLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        currentUser: {\n            name: \"Admin\"\n        },\n        showAppealsBar: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_assets_styles_Admin_RolesPage_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Manage Roles and Permissions\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Admin/RolesList.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_assets_styles_Admin_RolesPage_module_css__WEBPACK_IMPORTED_MODULE_5___default().createRoleButton),\n                        onClick: ()=>{\n                            console.log(\"Create Role button clicked\");\n                            setShowRoleForm(true);\n                        },\n                        children: \"Create Role\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Admin/RolesList.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Admin/RolesList.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RolesList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                roles: roles,\n                onEdit: (role)=>{\n                    console.log(\"RoleList onEdit called with role:\", role);\n                    handleEdit(role);\n                },\n                onDelete: (roleId)=>{\n                    console.log(\"RoleList onDelete called with roleId:\", roleId);\n                    handleDelete(roleId);\n                }\n            }, void 0, false, {\n                fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Admin/RolesList.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            showRoleForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RolesForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                role: selectedRole,\n                onSave: ()=>{\n                    console.log(\"RoleForm onSave called\");\n                    setShowRoleForm(false);\n                    fetchRoles(); // Reload roles after save\n                },\n                onCancel: ()=>{\n                    console.log(\"RoleForm onCancel called\");\n                    setShowRoleForm(false);\n                }\n            }, void 0, false, {\n                fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Admin/RolesList.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/goldyiron/frontend/landing-tgi/src/components/Admin/RolesList.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RolesPage, \"HYdEZjJgZ2yPkEYn4AvKKGWIMQo=\");\n_c = RolesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RolesPage);\nvar _c;\n$RefreshReg$(_c, \"RolesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZG1pbi9Sb2xlc0xpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDTDtBQUNBO0FBQ2lDO0FBRXBFLE1BQU1PLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRWpEQyxnREFBU0EsQ0FBQztRQUNSWSxRQUFRQyxHQUFHLENBQUM7UUFDWkM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxhQUFhO1FBQ2pCRixRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFJO1lBQ0YsTUFBTUUsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7WUFDaENSLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JNO1lBQzlCWixTQUFTWTtRQUNYLEVBQUUsT0FBT0UsT0FBTztZQUNkVCxRQUFRUyxLQUFLLENBQUMsMEJBQTBCQTtRQUMxQztRQUNBVCxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBLE1BQU1TLGFBQWEsQ0FBQ0M7UUFDbEJYLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NVO1FBQzVDZCxnQkFBZ0JjO1FBQ2hCWixnQkFBZ0I7SUFDbEI7SUFFQSxNQUFNYSxlQUFlLENBQUNDO1FBQ3BCYixRQUFRQyxHQUFHLENBQUMsb0NBQW9DWTtJQUNoRCx1Q0FBdUM7SUFDekM7SUFFQSxxQkFDRSw4REFBQ3hCLG9EQUFXQTtRQUNWeUIsYUFBYTtZQUFFQyxNQUFNO1FBQVE7UUFDN0JDLGdCQUFnQjs7MEJBRWhCLDhEQUFDQztnQkFBSUMsV0FBVzFCLHlGQUFhOztrQ0FDM0IsOERBQUM0QjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFDQ0gsV0FBVzFCLG1HQUF1Qjt3QkFDbEMrQixTQUFTOzRCQUNQdkIsUUFBUUMsR0FBRyxDQUFDOzRCQUNaRixnQkFBZ0I7d0JBQ2xCO2tDQUNEOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNULGtEQUFRQTtnQkFDUEksT0FBT0E7Z0JBQ1A4QixRQUFRLENBQUNiO29CQUNQWCxRQUFRQyxHQUFHLENBQUMscUNBQXFDVTtvQkFDakRELFdBQVdDO2dCQUNiO2dCQUNBYyxVQUFVLENBQUNaO29CQUNUYixRQUFRQyxHQUFHLENBQUMseUNBQXlDWTtvQkFDckRELGFBQWFDO2dCQUNmOzs7Ozs7WUFFRGYsOEJBQ0MsOERBQUNQLGtEQUFRQTtnQkFDUG9CLE1BQU1mO2dCQUNOOEIsUUFBUTtvQkFDTjFCLFFBQVFDLEdBQUcsQ0FBQztvQkFDWkYsZ0JBQWdCO29CQUNoQkcsY0FBYywwQkFBMEI7Z0JBQzFDO2dCQUNBeUIsVUFBVTtvQkFDUjNCLFFBQVFDLEdBQUcsQ0FBQztvQkFDWkYsZ0JBQWdCO2dCQUNsQjs7Ozs7Ozs7Ozs7O0FBS1Y7R0FqRk1OO0tBQUFBO0FBbUZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkbWluL1JvbGVzTGlzdC5qcz8yZDM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJy4vQWRtaW5MYXlvdXQnO1xuaW1wb3J0IFJvbGVMaXN0IGZyb20gJy4vUm9sZXNMaXN0JztcbmltcG9ydCBSb2xlRm9ybSBmcm9tICcuL1JvbGVzRm9ybSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2Fzc2V0cy9zdHlsZXMvQWRtaW4vUm9sZXNQYWdlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBSb2xlc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtyb2xlcywgc2V0Um9sZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VsZWN0ZWRSb2xlLCBzZXRTZWxlY3RlZFJvbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaG93Um9sZUZvcm0sIHNldFNob3dSb2xlRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgcm9sZXMuLi4nKTtcbiAgICBmZXRjaFJvbGVzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFJvbGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTdGFydGluZyBmZXRjaFJvbGVzIGZ1bmN0aW9uJyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcm9sZXMnKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygnRmV0Y2hlZCByb2xlczonLCBkYXRhKTtcbiAgICAgIHNldFJvbGVzKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcm9sZXM6JywgZXJyb3IpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZmV0Y2hSb2xlcyBmdW5jdGlvbiBjb21wbGV0ZWQnKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFZGl0ID0gKHJvbGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlRWRpdCBjYWxsZWQgd2l0aCByb2xlOicsIHJvbGUpO1xuICAgIHNldFNlbGVjdGVkUm9sZShyb2xlKTtcbiAgICBzZXRTaG93Um9sZUZvcm0odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKHJvbGVJZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVEZWxldGUgY2FsbGVkIHdpdGggcm9sZUlkOicsIHJvbGVJZCk7XG4gICAgLy8gSW1wbGVtZW50ZXJhIGJvcnR0YWduaW5nIGF2IHJvbGwgaMOkclxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFkbWluTGF5b3V0XG4gICAgICBjdXJyZW50VXNlcj17eyBuYW1lOiAnQWRtaW4nIH19XG4gICAgICBzaG93QXBwZWFsc0Jhcj17ZmFsc2V9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8aDE+TWFuYWdlIFJvbGVzIGFuZCBQZXJtaXNzaW9uczwvaDE+XG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlUm9sZUJ1dHRvbn0gXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZSBSb2xlIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgICAgICBzZXRTaG93Um9sZUZvcm0odHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENyZWF0ZSBSb2xlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Um9sZUxpc3RcbiAgICAgICAgcm9sZXM9e3JvbGVzfVxuICAgICAgICBvbkVkaXQ9eyhyb2xlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1JvbGVMaXN0IG9uRWRpdCBjYWxsZWQgd2l0aCByb2xlOicsIHJvbGUpO1xuICAgICAgICAgIGhhbmRsZUVkaXQocm9sZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uRGVsZXRlPXsocm9sZUlkKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1JvbGVMaXN0IG9uRGVsZXRlIGNhbGxlZCB3aXRoIHJvbGVJZDonLCByb2xlSWQpO1xuICAgICAgICAgIGhhbmRsZURlbGV0ZShyb2xlSWQpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHtzaG93Um9sZUZvcm0gJiYgKFxuICAgICAgICA8Um9sZUZvcm1cbiAgICAgICAgICByb2xlPXtzZWxlY3RlZFJvbGV9XG4gICAgICAgICAgb25TYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUm9sZUZvcm0gb25TYXZlIGNhbGxlZCcpO1xuICAgICAgICAgICAgc2V0U2hvd1JvbGVGb3JtKGZhbHNlKTtcbiAgICAgICAgICAgIGZldGNoUm9sZXMoKTsgLy8gUmVsb2FkIHJvbGVzIGFmdGVyIHNhdmVcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUm9sZUZvcm0gb25DYW5jZWwgY2FsbGVkJyk7XG4gICAgICAgICAgICBzZXRTaG93Um9sZUZvcm0oZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQWRtaW5MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlc1BhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFkbWluTGF5b3V0IiwiUm9sZUxpc3QiLCJSb2xlRm9ybSIsInN0eWxlcyIsIlJvbGVzUGFnZSIsInJvbGVzIiwic2V0Um9sZXMiLCJzZWxlY3RlZFJvbGUiLCJzZXRTZWxlY3RlZFJvbGUiLCJzaG93Um9sZUZvcm0iLCJzZXRTaG93Um9sZUZvcm0iLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hSb2xlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImhhbmRsZUVkaXQiLCJyb2xlIiwiaGFuZGxlRGVsZXRlIiwicm9sZUlkIiwiY3VycmVudFVzZXIiLCJuYW1lIiwic2hvd0FwcGVhbHNCYXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJoMSIsImJ1dHRvbiIsImNyZWF0ZVJvbGVCdXR0b24iLCJvbkNsaWNrIiwib25FZGl0Iiwib25EZWxldGUiLCJvblNhdmUiLCJvbkNhbmNlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Admin/RolesList.js\n"));

/***/ })

});