"use strict";
exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 4289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KL": () => (/* binding */ takeMedal),
/* harmony export */   "y0": () => (/* binding */ selectMedals),
/* harmony export */   "HS": () => (/* binding */ selectMedalById),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export medalSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    medals: [
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        },
        {
            type: 'Running',
            img: 'https://yassport.org/storage/media/2022/01/DH4n8xVEaRg7R0mWdJ7RuMQTYm0lU8CckgphU3Xo.gif',
            id: 314141,
            distance: '42.2 km',
            name: 'RZD Golden Ring Ultra-Trail',
            year: '2022',
            location: 'Russia - Kazan'
        }
    ],
    selectedMedal: {}
};
const medalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'medal',
    initialState,
    reducers: {
        takeMedal: (state, action)=>{
            state.selectedMedal = state.medals.find((elem)=>elem.id == +action.payload
            );
        }
    }
});
const { takeMedal ,  } = medalSlice.actions;
const selectMedals = (state)=>state.medal.medals
;
const selectMedalById = (state)=>state.medal.selectedMedal
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (medalSlice.reducer);


/***/ })

};
;