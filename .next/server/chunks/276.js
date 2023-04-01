exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 475:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "navbar_nav__cJfdS",
	"inactive": "navbar_inactive__aPG82",
	"logo": "navbar_logo__LTPlN",
	"borderCircle": "navbar_borderCircle__JTBu_",
	"nav_menu_list": "navbar_nav_menu_list__EkbJY",
	"nav_menu_item": "navbar_nav_menu_item__45nwJ",
	"nav_menu_list_mobile": "navbar_nav_menu_list_mobile__3fMiT",
	"nav_menu_bar": "navbar_nav_menu_bar__l_9Ud",
	"active": "navbar_active___1We2"
};


/***/ }),

/***/ 4276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
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

// EXTERNAL MODULE: ./components/navbar.module.css
var navbar_module = __webpack_require__(475);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./components/navBar.jsx






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
    //   { text: "Shop", href: "/shop" },
    {
        text: "Archive",
        href: "/archives"
    }
];
const NavBar = ()=>{
    const [navActive, setNavActive] = (0,external_react_.useState)(false);
    const [activeIdx, setActiveIdx] = (0,external_react_.useState)(-1);
    const toggleNav = ()=>setNavActive(!navActive);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: (navbar_module_default()).nav,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/images/logo.png",
                        className: (navbar_module_default()).borderCircle,
                        height: 72,
                        width: 72,
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(navbar_module_default()).nav_menu_bar} ${navActive ? (navbar_module_default()).active : ""}`,
                    onClick: toggleNav,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(navbar_module_default()).nav_menu_list_mobile} ${navActive ? (navbar_module_default()).active : ""}`,
                    children: navActive && MENU_LIST.map((menu, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>{
                                setActiveIdx(idx);
                                setNavActive(false);
                            },
                            className: `${(navbar_module_default()).nav_menu_item} ${activeIdx === idx ? (navbar_module_default()).active : ""}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(navItem, {
                                active: activeIdx === idx,
                                ...menu
                            })
                        }, menu.text))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(navbar_module_default()).nav_menu_list}`,
                    children: MENU_LIST.map((menu, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>setActiveIdx(idx),
                            //   className={`${styles.nav_menu-item} nav`}
                            className: `${(navbar_module_default()).nav_menu_item} ${activeIdx === idx ? (navbar_module_default()).active : ""}`,
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