exports.id = 859;
exports.ids = [859];
exports.modules = {

/***/ 5941:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "button_btn__EuPxb",
	"btnPrimary": "button_btnPrimary__5pc5N",
	"btnSecondary": "button_btnSecondary__b8_Sg",
	"btnOutlinePrimary": "button_btnOutlinePrimary__mhrqi",
	"btnNormal": "button_btnNormal__UMlxn",
	"btnBig": "button_btnBig__NdQcw",
	"btnWidthFull": "button_btnWidthFull__8ceEi",
	"btnWidthDefault": "button_btnWidthDefault__Rft7t"
};


/***/ }),

/***/ 4031:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__ZK5Q_",
	"footerLogo": "footer_footerLogo__vRmbZ",
	"footerLinks": "footer_footerLinks__5_D_D",
	"footerLink": "footer_footerLink__QtYIH"
};


/***/ }),

/***/ 699:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__3o0p0",
	"headerBtnText": "header_headerBtnText__XsupI",
	"headerLoginIcon": "header_headerLoginIcon__C3xNU",
	"headerBack": "header_headerBack__B8KWc"
};


/***/ }),

/***/ 2152:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "link_link__eO8iL"
};


/***/ }),

/***/ 9417:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "page-layout_layout__JD6St"
};


/***/ }),

/***/ 449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5941);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const cn = classnames__WEBPACK_IMPORTED_MODULE_2___default().bind((_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));
const Button = ({ onClick , children , type ='field-primary' , size ='normal' , width ='default' , extraStyles , btnType ='button'  })=>{
    const mapStyles = ()=>{
        return {
            [(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btnPrimary)]: type === 'field-primary',
            [(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btnSecondary)]: type === 'outline-second',
            [(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btnOutlinePrimary)]: type === 'outline-primary',
            [(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btnBig)]: size === 'big',
            [(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btnNormal)]: size === 'normal',
            [(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btnWidthDefault)]: width === 'default',
            [(_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btnWidthFull)]: width === 'full'
        };
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: btnType,
        className: cn((_button_module_scss__WEBPACK_IMPORTED_MODULE_3___default().btn), mapStyles(), extraStyles),
        onClick: onClick,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4031);
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _pageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5625);
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1899);





const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pageLayout_PageLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footerLogo),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: '/img/header/yass-logo.png',
                        width: 200,
                        height: 28
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: "\xa9 2022 Yassport, Inc."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footerLinks),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            href: '#',
                            extraClass: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footerLink),
                            children: "Terms of Service"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            href: '#',
                            extraClass: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footerLink),
                            children: "Privacy Policy"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_link_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            href: '#',
                            extraClass: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footerLink),
                            children: "support@yassport.org"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 6538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/header/header.module.scss
var header_module = __webpack_require__(699);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__(449);
;// CONCATENATED MODULE: ./src/components/app-icons/app-icon-login.tsx

const AppIconLogin = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12.2273 1.92188C8.65311 1.9125 5.5078 3.76173 3.71014 6.55548C3.63046 6.6797 3.71952 6.84376 3.86717 6.84376H5.51483C5.62733 6.84376 5.7328 6.79454 5.80311 6.70782C5.96717 6.5086 6.14295 6.31641 6.32811 6.1336C7.09217 5.37188 7.98045 4.77188 8.96951 4.35469C9.99139 3.92344 11.0789 3.70313 12.2015 3.70313C13.3242 3.70313 14.4117 3.9211 15.4336 4.35469C16.4226 4.77188 17.3109 5.37188 18.075 6.1336C18.839 6.89532 19.4367 7.7836 19.8562 8.77032C20.2898 9.7922 20.5078 10.8774 20.5078 12C20.5078 13.1227 20.2875 14.2078 19.8562 15.2297C19.439 16.2164 18.839 17.1047 18.075 17.8664C17.3109 18.6281 16.4226 19.2281 15.4336 19.6453C14.4109 20.0773 13.3117 20.2989 12.2015 20.2969C11.0789 20.2969 9.99139 20.0766 8.96951 19.6453C7.98239 19.2286 7.08539 18.6245 6.32811 17.8664C6.14295 17.6813 5.96952 17.4891 5.80311 17.2922C5.7328 17.2055 5.62498 17.1563 5.51483 17.1563H3.86717C3.71952 17.1563 3.62811 17.3203 3.71014 17.4445C5.50545 20.2313 8.6367 22.0781 12.2015 22.0781C17.7375 22.0781 22.2328 17.6227 22.289 12.1031C22.3453 6.49454 17.8429 1.93594 12.2273 1.92188ZM9.25826 14.625V12.8438H1.8989C1.79577 12.8438 1.7114 12.7594 1.7114 12.6563V11.3438C1.7114 11.2406 1.79577 11.1563 1.8989 11.1563H9.25826V9.37501C9.25826 9.21798 9.44107 9.12892 9.56295 9.22736L12.8887 11.8524C12.9111 11.8699 12.9293 11.8923 12.9417 11.9179C12.9542 11.9435 12.9607 11.9716 12.9607 12C12.9607 12.0285 12.9542 12.0566 12.9417 12.0821C12.9293 12.1077 12.9111 12.1301 12.8887 12.1477L9.56295 14.7727C9.44107 14.8688 9.25826 14.782 9.25826 14.625Z",
            fill: "#17144B"
        })
    });
};
/* harmony default export */ const app_icon_login = (AppIconLogin);

// EXTERNAL MODULE: ./src/helpers/device-helper.ts
var device_helper = __webpack_require__(7802);
;// CONCATENATED MODULE: ./src/components/app-icons/logo/app-mobile-logo.tsx

const AppMobileLogo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "82",
        height: "32",
        viewBox: "0 0 82 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.0562 5.33333C17.5798 5.33333 18.7225 6.47629 18.7225 7.99985C18.7225 10.4755 15.8657 11.6184 14.1518 9.9043C12.4376 8.19015 13.5803 5.33333 16.0562 5.33333V5.33333Z",
                fill: "#FFB02A"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.5757 11.1194C9.3433 10.3518 10.5878 10.3518 11.3554 11.1194L15.9028 15.6666L20.3789 11.1904C21.1465 10.4228 22.391 10.4228 23.1586 11.1904C23.9262 11.958 23.9262 13.2025 23.1586 13.9704L17.9641 19.1647V24.7421C17.9641 25.8051 17.1025 26.6667 16.0396 26.6667C14.9763 26.6667 14.1147 25.8051 14.1147 24.7421V19.4379L8.5757 13.8991C7.8081 13.1315 7.8081 11.887 8.5757 11.1194Z",
                fill: "#121248"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "0.5",
                y: "0.5",
                width: "31",
                height: "31",
                rx: "15.5",
                stroke: "#121248"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "40.5",
                y: "7.5",
                width: "40.9097",
                height: "17.4",
                rx: "4.5",
                fill: "#17144B"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M51.924 16.068C52.396 16.156 52.796 16.396 53.124 16.788C53.452 17.18 53.616 17.636 53.616 18.156C53.616 18.58 53.508 18.964 53.292 19.308C53.084 19.644 52.776 19.912 52.368 20.112C51.96 20.304 51.472 20.4 50.904 20.4H48V12.012H50.82C51.668 12.012 52.312 12.208 52.752 12.6C53.2 12.992 53.424 13.5 53.424 14.124C53.424 14.644 53.284 15.068 53.004 15.396C52.724 15.716 52.364 15.94 51.924 16.068ZM48.84 15.72H50.796C51.364 15.72 51.8 15.588 52.104 15.324C52.416 15.052 52.572 14.68 52.572 14.208C52.572 13.744 52.416 13.38 52.104 13.116C51.8 12.852 51.352 12.72 50.76 12.72H48.84V15.72ZM50.844 19.692C51.452 19.692 51.924 19.548 52.26 19.26C52.604 18.972 52.776 18.576 52.776 18.072C52.776 17.568 52.596 17.168 52.236 16.872C51.884 16.568 51.408 16.416 50.808 16.416H48.84V19.692H50.844Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M56.0002 12.696V15.828H59.1802V16.524H56.0002V19.704H59.5402V20.4H55.1602V12H59.5402V12.696H56.0002Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M66.1033 12.012V12.708H63.7753V20.4H62.9353V12.708H60.5953V12.012H66.1033Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M72.2897 18.408H68.4737L67.7417 20.4H66.8537L69.9137 12.12H70.8617L73.9097 20.4H73.0217L72.2897 18.408ZM72.0377 17.712L70.3817 13.176L68.7257 17.712H72.0377Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                x: "40.5",
                y: "7.5",
                width: "40.9097",
                height: "17.4",
                rx: "4.5",
                stroke: "#17144B"
            })
        ]
    });
};
/* harmony default export */ const app_mobile_logo = (AppMobileLogo);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/header/header.tsx








const Header = ()=>{
    const device = (0,device_helper/* useWindowSize */.i)();
    const condition = [
        device_helper/* EDeviceType.MOBILE */.D.MOBILE,
        device_helper/* EDeviceType.TABLET */.D.TABLET
    ].includes(device);
    const router = (0,router_.useRouter)();
    const onRegister = ()=>{
        router.push(`/registration`);
    };
    const onMain = ()=>{
        router.push(`/`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (header_module_default()).headerBack,
                onClick: onMain,
                children: condition ? /*#__PURE__*/ jsx_runtime_.jsx(app_mobile_logo, {}) : /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: '/img/header/yass-logo.png',
                    width: 200,
                    height: 28
                })
            }),
            device === device_helper/* EDeviceType.MOBILE */.D.MOBILE ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (header_module_default()).headerLoginIcon,
                onClick: onRegister,
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx(app_icon_login, {})
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(button_button/* default */.Z, {
                onClick: onRegister,
                type: 'outline-second',
                size: "normal",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(app_icon_login, {}),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (header_module_default()).headerBtnText,
                        children: "Sign in / Register"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header = (Header);


/***/ }),

/***/ 1899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2152);
/* harmony import */ var _link_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_link_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const cn = classnames__WEBPACK_IMPORTED_MODULE_2___default().bind((_link_module_scss__WEBPACK_IMPORTED_MODULE_3___default()));
const Link = ({ href ='#' , extraClass , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: cn((_link_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link), extraClass),
        href: href,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 5625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9417);
/* harmony import */ var _page_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_layout_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const PageLayout = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_page_layout_module_scss__WEBPACK_IMPORTED_MODULE_2___default().layout),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageLayout);


/***/ }),

/***/ 7802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ EDeviceType),
/* harmony export */   "i": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var EDeviceType;
(function(EDeviceType) {
    EDeviceType["LARGE_DESKTOP"] = "LARGE_DESKTOP";
    EDeviceType["DESKTOP"] = "DESKTOP";
    EDeviceType["TABLET"] = "TABLET";
    EDeviceType["MOBILE"] = "MOBILE";
})(EDeviceType || (EDeviceType = {}));
const useWindowSize = ()=>{
    const { 0: windowSize , 1: setWindowSize  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        width: null,
        height: null
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (false) {}
    }, []);
    const { width  } = windowSize;
    if (width) {
        if (width >= 1024) {
            return EDeviceType.LARGE_DESKTOP;
        }
        if (width < 1024 && width >= 768) {
            return EDeviceType.DESKTOP;
        }
        if (width < 768 && width >= 375) {
            return EDeviceType.TABLET;
        }
        if (width < 375) {
            return EDeviceType.MOBILE;
        }
    }
};


/***/ })

};
;