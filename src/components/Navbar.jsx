import { useState } from "react";

import { useSite } from "../context/useSite";
import MenuLink from "./MenuLink";

import "../styles/navbar.css";

export default function Navbar() {
    const { menus, settings } = useSite();

    const items = menus.main;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    return (
        <nav className="main-navbar">

            {/* ================= DESKTOP NAVBAR ================= */}

            <div className="desktop-navbar">

                <ul className="main-nav-links">

                    {items.map((item) =>
                        item.children?.length ? (
                            <li className="dropdown" key={item.id}>
                                <MenuLink item={item} className="dropdown-title" />

                                <ul className="dropdown-menu">
                                    {item.note && (
                                        <li className="dropdown-type" aria-hidden="true">
                                            {item.note}
                                        </li>
                                    )}

                                    {item.children.map((child) => (
                                        <li key={child.id}>
                                            <MenuLink item={child} />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li key={item.id}>
                                <MenuLink item={item} />
                            </li>
                        )
                    )}

                </ul>

            </div>


            {/* ================= MOBILE NAVBAR ================= */}

            <div className="mobile-navbar">

                <div className="mobile-navbar-top">

                    <span className="mobile-navbar-title">
                        {settings?.site_name ?? "Young BM Network"}
                    </span>

                    <button
                        className={`mobile-menu-button ${mobileOpen ? "active" : ""}`}
                        onClick={() => {
                            setMobileOpen(!mobileOpen);
                            setOpenDropdown(null);
                        }}
                        aria-label="Open navigation menu"
                        aria-expanded={mobileOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>


                {mobileOpen && (
                    <div className="mobile-menu">

                        {items.map((item) =>
                            item.children?.length ? (
                                <div className="mobile-dropdown" key={item.id}>

                                    <button
                                        onClick={() => toggleDropdown(item.id)}
                                        aria-expanded={openDropdown === item.id}
                                    >
                                        <span>{item.label}</span>
                                        <span className="mobile-arrow">
                                            {openDropdown === item.id ? "−" : "+"}
                                        </span>
                                    </button>

                                    {openDropdown === item.id && (
                                        <div className="mobile-submenu">
                                            {item.note && (
                                                <span className="mobile-submenu-type">{item.note}</span>
                                            )}

                                            {item.children.map((child) => (
                                                <MenuLink
                                                    item={child}
                                                    key={child.id}
                                                    onClick={closeMobileMenu}
                                                />
                                            ))}
                                        </div>
                                    )}

                                </div>
                            ) : (
                                <MenuLink
                                    item={item}
                                    key={item.id}
                                    onClick={closeMobileMenu}
                                />
                            )
                        )}

                    </div>
                )}

            </div>

        </nav>
    );
}
