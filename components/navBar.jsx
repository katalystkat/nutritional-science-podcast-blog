import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
// import Logo from "./Logo";
import NavItem from "./navItem";

const MENU_LIST = [
    { text: "Home", href: "/"},
    { text: "About", href: "/about"},
    { text: "Contact", href: "/contact"},
    { text: "Shop", href: "/shop"}
];

const NavBar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
    return (
        <header>
            <nav className={`nav`}>
                <Link href={"/"}>
                        <h1 className="logo">KatalystKat</h1>
                </Link>
                <div onClick={()=> setNavActive(!navActive)}
                className={`nav_menu-bar`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav_menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                    <div
                        onClick = {() => {
                            setActiveIdx(idx);
                            setNavActive(false);
                        }}
                        key = {menu.text}
                    >
                        <NavItem active={activeIdx === idx} {...menu} />
                    </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default NavBar