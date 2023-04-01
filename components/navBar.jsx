import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navItem";
import styles from "./navbar.module.css";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
//   { text: "Shop", href: "/shop" },
  { text: "Archive", href: "/archives"}
];

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  const toggleNav = () => setNavActive(!navActive);

  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"/"}>
        <Image
              priority
              src="/images/logo.png"
              className={styles.borderCircle}
              height={72}
              width={72}
              alt=""
            />
          {/* <h1 className={styles.logo}>KatalystKat</h1> */}
        </Link>
        <div
          className={`${styles.nav_menu_bar} ${navActive ? styles.active : ""}`}
          onClick={toggleNav}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${styles.nav_menu_list_mobile} ${
            navActive ? styles.active : ""
          }`}
        >
          {navActive && MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
              className={`${styles.nav_menu_item} ${
                activeIdx === idx ? styles.active : ""
              }`}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        <div className={`${styles.nav_menu_list}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => setActiveIdx(idx)}
              key={menu.text}
            //   className={`${styles.nav_menu-item} nav`}
              className={`${styles.nav_menu_item} ${
                activeIdx === idx ? styles.active : ""
              }`}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
