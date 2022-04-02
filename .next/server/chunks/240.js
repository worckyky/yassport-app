"use strict";
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 8240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x5": () => (/* binding */ selectResults),
/* harmony export */   "eo": () => (/* binding */ selectColumns),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports resultsSlice, takeResults, selectResultsId */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    results: [
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        },
        {
            place: 1,
            startNumber: '#4324',
            name: 'Anatoliy Mitroshin',
            result: '32 : 15',
            id: 12313
        }
    ],
    selectedResult: {},
    columns: [
        {
            title: '🎖 Place',
            dataIndex: 'place',
            key: 'place',
            width: 100
        },
        {
            title: '⏱ Start number',
            dataIndex: 'startNumber',
            key: 'startNumber',
            width: 150
        },
        {
            title: '👦 Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '🏆 Result',
            dataIndex: 'result',
            key: 'result',
            width: 150
        }
    ]
};
const resultsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'results',
    initialState,
    reducers: {
        takeResults: (state, action)=>{
            state.selectedResult = state.results.find((elem)=>elem.id == +action.payload
            );
        },
        takeResultByName: (state, action)=>{
            state.results = state.results.filter((results)=>results.name !== action.payload
            );
        }
    }
});
const { takeResults ,  } = resultsSlice.actions;
const selectResults = (state)=>state.results.results
;
const selectColumns = (state)=>state.results.columns
;
const selectResultsId = (state)=>state.results.selectedResult
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resultsSlice.reducer);


/***/ })

};
;