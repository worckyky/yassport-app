"use strict";
exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 7749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iL": () => (/* binding */ selectProtocol),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export protocolSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    id: '',
    result: {
        place: 1,
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        startNumber: '#4324',
        name: 'Anatoliy Mitroshin',
        result: '32 : 15',
        id: 12313
    },
    medal: {
        type: 'Running',
        img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
        id: 314141,
        distance: '42.2 km',
        name: 'RZD Golden Ring Ultra-Trail',
        year: '2022',
        location: 'Russia - Kazan'
    },
    protocol: [
        {
            split: '🥇 1',
            time: '32 : 15'
        },
        {
            split: '🥇 1',
            time: '32 : 15'
        },
        {
            split: '🥇 1',
            time: '32 : 15'
        },
        {
            split: '🥇 1',
            time: '32 : 15'
        },
        {
            split: '🥇 1',
            time: '32 : 15'
        },
        {
            split: '🥇 1',
            time: '32 : 15'
        },
        {
            split: '🥇 1',
            time: '32 : 15'
        }, 
    ],
    columns: [
        {
            title: 'Split',
            dataIndex: 'split',
            key: 'split'
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time'
        }
    ]
};
const protocolSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'protocol',
    initialState,
    reducers: {}
});
// export const {
//
// } = protocolSlice.actions;
const selectProtocol = (state)=>state
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (protocolSlice.reducer);


/***/ })

};
;