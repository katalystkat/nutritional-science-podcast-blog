"use strict";
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 4276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/navItem.js


const NavItem = ({ text , href , active  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: text
    });
};
/* harmony default export */ const navItem = (NavItem);

;// CONCATENATED MODULE: ./components/navBar.jsx




// import Logo from "./Logo";

const MENU_LIST = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "About",
        href: "/about"
    },
    {
        text: "Contact",
        href: "/contact"
    },
    {
        text: "Shop",
        href: "/shop"
    }
];
const NavBar = ()=>{
    const [navActive, setNavActive] = (0,external_react_.useState)(null);
    const [activeIdx, setActiveIdx] = (0,external_react_.useState)(-1);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: `nav`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "logo",
                        children: "KatalystKat"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>setNavActive(!navActive),
                    className: `nav_menu-bar`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${navActive ? "active" : ""} nav_menu-list`,
                    children: MENU_LIST.map((menu, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>{
                                setActiveIdx(idx);
                                setNavActive(false);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(navItem, {
                                active: activeIdx === idx,
                                ...menu
                            })
                        }, menu.text))
                })
            ]
        })
    });
};
/* harmony default export */ const navBar = (NavBar);


/***/ })

};
;