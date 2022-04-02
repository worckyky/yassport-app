exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 6748:
/***/ ((module) => {

// Exports
module.exports = {
	"goBack": "go-back_goBack__ZDoh9"
};


/***/ }),

/***/ 2205:
/***/ ((module) => {

// Exports
module.exports = {
	"resizerButton": "resizer_resizerButton__6knT5",
	"resizerImage": "resizer_resizerImage__VeHYg",
	"ant-modal": "resizer_ant-modal____gtP"
};


/***/ }),

/***/ 7704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ go_back)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/go-back/go-back.module.scss
var go_back_module = __webpack_require__(6748);
var go_back_module_default = /*#__PURE__*/__webpack_require__.n(go_back_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/app-icons/app-icon-arrowLeft.tsx

const AppIconArrowLeft = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#clip0_185_31167)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M5.28955 14.793C4.89903 15.1835 4.89903 15.8166 5.28955 16.2072L11.6535 22.5711C12.044 22.9617 12.6772 22.9617 13.0677 22.5711C13.4583 22.1806 13.4583 21.5474 13.0677 21.1569L7.41087 15.5001L13.0677 9.84321C13.4582 9.45268 13.4582 8.81952 13.0677 8.42899C12.6772 8.03847 12.044 8.03847 11.6535 8.42899L5.28955 14.793ZM27.0034 14.5001L5.99666 14.5001L5.99666 16.5001L27.0034 16.5001L27.0034 14.5001Z",
                    fill: "#818181"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_185_31167",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "24",
                        height: "15",
                        fill: "white",
                        transform: "translate(28 23) rotate(180)"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const app_icon_arrowLeft = (AppIconArrowLeft);

;// CONCATENATED MODULE: ./src/components/go-back/go-back.tsx




const GoBack = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (go_back_module_default()).goBack,
        onClick: ()=>router.back()
        ,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(app_icon_arrowLeft, {}),
            " ",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Go back"
            })
        ]
    });
};
/* harmony default export */ const go_back = (GoBack);


/***/ }),

/***/ 4399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ resizer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./src/components/resizer/resizer.module.scss
var resizer_module = __webpack_require__(2205);
var resizer_module_default = /*#__PURE__*/__webpack_require__.n(resizer_module);
;// CONCATENATED MODULE: ./src/components/app-icons/app-icon-resize.tsx

const AppIconResize = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M4 4V13H6V7.437L14.563 16L6 24.563V19H4V28H13V26H7.437L16 17.437L24.563 26H19V28H28V19H26V24.563L17.437 16L26 7.437V13H28V4H19V6H24.563L16 14.563L7.437 6H13V4H4Z",
            fill: "#818181"
        })
    });
};
/* harmony default export */ const app_icon_resize = (AppIconResize);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/app-icons/app-icon-closeModal.tsx

const AppIconCloseModal = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "56",
        height: "56",
        viewBox: "0 0 56 56",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 0H56V56H11C4.92487 56 0 51.0751 0 45V0Z",
                fill: "white",
                fillOpacity: "0.6"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M29.4695 28.0041L37.7595 19.7141C37.9234 19.5228 38.009 19.2767 37.9993 19.025C37.9895 18.7734 37.8852 18.5346 37.7071 18.3565C37.529 18.1784 37.2903 18.0741 37.0386 18.0644C36.7869 18.0547 36.5408 18.1403 36.3495 18.3041L28.0595 26.5941L19.7695 18.2941C19.5812 18.1058 19.3258 18 19.0595 18C18.7932 18 18.5378 18.1058 18.3495 18.2941C18.1612 18.4824 18.0555 18.7378 18.0555 19.0041C18.0555 19.2704 18.1612 19.5258 18.3495 19.7141L26.6495 28.0041L18.3495 36.2941C18.2449 36.3837 18.1598 36.4941 18.0998 36.6181C18.0398 36.7422 18.0061 36.8773 18.0007 37.015C17.9954 37.1528 18.0186 37.2901 18.0689 37.4184C18.1192 37.5467 18.1954 37.6633 18.2929 37.7607C18.3903 37.8582 18.5069 37.9345 18.6352 37.9847C18.7635 38.035 18.9009 38.0582 19.0386 38.0529C19.1763 38.0476 19.3114 38.0138 19.4355 37.9538C19.5596 37.8938 19.6699 37.8088 19.7595 37.7041L28.0595 29.4141L36.3495 37.7041C36.5408 37.8679 36.7869 37.9535 37.0386 37.9438C37.2903 37.9341 37.529 37.8297 37.7071 37.6517C37.8852 37.4736 37.9895 37.2348 37.9993 36.9831C38.009 36.7315 37.9234 36.4854 37.7595 36.2941L29.4695 28.0041Z",
                fill: "black"
            })
        ]
    });
};
/* harmony default export */ const app_icon_closeModal = (AppIconCloseModal);

;// CONCATENATED MODULE: ./src/components/resizer/resizer.tsx







const cn = external_classnames_default().bind((resizer_module_default()));
const Resizer = ({ img , extraStyles  })=>{
    const { 0: visible , 1: setVisible  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: cn((resizer_module_default()).resizerButton, extraStyles),
                onClick: ()=>setVisible(true)
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(app_icon_resize, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Modal, {
                centered: true,
                visible: visible,
                onCancel: ()=>setVisible(false)
                ,
                width: "100%",
                footer: null,
                closeIcon: /*#__PURE__*/ jsx_runtime_.jsx(app_icon_closeModal, {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: (resizer_module_default()).resizerImage,
                    src: img
                })
            })
        ]
    });
};
/* harmony default export */ const resizer = (Resizer);


/***/ })

};
;