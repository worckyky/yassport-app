"use strict";
(() => {
var exports = {};
exports.id = 631;
exports.ids = [631];
exports.modules = {

/***/ 1088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_helpers_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1305);

const getServerSideProps = async ()=>{
    return {
        redirect: {
            destination: (0,_src_helpers_routes__WEBPACK_IMPORTED_MODULE_0__/* .linkTo */ .k)('home'),
            permanent: true
        }
    };
};
const IndexPage = ()=>null
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);


/***/ }),

/***/ 1305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ linkTo)
/* harmony export */ });
/* unused harmony export routeNames */
const routeNames = {
    home: '/',
    notFound: '/404'
};
const linkTo = (routeKey, params)=>{
    const routePath = routeNames[routeKey];
    return params ? routePath(params) : routePath;
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1088));
module.exports = __webpack_exports__;

})();