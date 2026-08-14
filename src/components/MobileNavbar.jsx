import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/mobile-navbar.css";

export default function MobileNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMenu = () => {
        setMenuOpen((current) => !current);
        setOpenDropdown(null);
    };

    const toggleDropdown = (name) => {
        setOpenDropdown((current) =>
            current === name ? null : name
        );
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <nav className="mobile-navbar">

            <div className="mobile-navbar-top">

                <Link
                    to="/"
                    className="mobile-navbar-title"
                    onClick={closeMenu}
                >
                    Young BM Network
                </Link>

                <button
                    type="button"
                    className={`mobile-navbar-button ${
                        menuOpen ? "open" : ""
                    }`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>

            {menuOpen && (
                <div className="mobile-navbar-menu">

                    <Link
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>


                    {/* YOUNG BMOL */}

                    <div className="mobile-menu-section">

                        <button
                            type="button"
                            onClick={() =>
                                toggleDropdown("bmol")
                            }
                        >
                            <span>Young BMol 2026</span>

                            <span
                                className={
                                    openDropdown === "bmol"
                                        ? "arrow open"
                                        : "arrow"
                                }
                            >
                                ›
                            </span>
                        </button>

                        {openDropdown === "bmol" && (
                            <div className="mobile-submenu">

                                <Link
                                    to="/young-bmol/apply-here"
                                    onClick={closeMenu}
                                >
                                    Apply Here
                                </Link>

                                <Link
                                    to="/young-bmol/application-process"
                                    onClick={closeMenu}
                                >
                                    Application process
                                </Link>

                                <Link
                                    to="/young-bmol/volunteer-zone"
                                    onClick={closeMenu}
                                >
                                    Volunteer zone
                                </Link>

                                <Link
                                    to="/young-bmol/sponsors"
                                    onClick={closeMenu}
                                >
                                    Sponsors
                                </Link>

                            </div>
                        )}

                    </div>


                    {/* SEMINAR */}

                    <div className="mobile-menu-section">

                        <button
                            type="button"
                            onClick={() =>
                                toggleDropdown("seminar")
                            }
                        >
                            <span>Young BM Seminar</span>

                            <span
                                className={
                                    openDropdown === "seminar"
                                        ? "arrow open"
                                        : "arrow"
                                }
                            >
                                ›
                            </span>
                        </button>

                        {openDropdown === "seminar" && (
                            <div className="mobile-submenu">

                                <Link
                                    to="/seminar/apply-here"
                                    onClick={closeMenu}
                                >
                                    Apply Here
                                </Link>

                                <Link
                                    to="/seminar/speakers"
                                    onClick={closeMenu}
                                >
                                    Speakers
                                </Link>

                            </div>
                        )}

                    </div>


                    {/* FAQ */}

                    <Link
                        to="/faq"
                        onClick={closeMenu}
                    >
                        FAQ
                    </Link>


                    {/* ABOUT */}

                    <div className="mobile-menu-section">

                        <button
                            type="button"
                            onClick={() =>
                                toggleDropdown("about")
                            }
                        >
                            <span>About</span>

                            <span
                                className={
                                    openDropdown === "about"
                                        ? "arrow open"
                                        : "arrow"
                                }
                            >
                                ›
                            </span>
                        </button>

                        {openDropdown === "about" && (
                            <div className="mobile-submenu">

                                <Link
                                    to="/about/our-congress"
                                    onClick={closeMenu}
                                >
                                    About our Congress
                                </Link>

                                <Link
                                    to="/about/academic-part"
                                    onClick={closeMenu}
                                >
                                    Academic part
                                </Link>

                                <Link
                                    to="/about/social-part"
                                    onClick={closeMenu}
                                >
                                    Social part
                                </Link>

                                <Link
                                    to="/about/participant-profile"
                                    onClick={closeMenu}
                                >
                                    Participant profile
                                </Link>

                                <Link
                                    to="/about/history-of-young-bm"
                                    onClick={closeMenu}
                                >
                                    History of Young BM
                                </Link>

                            </div>
                        )}

                    </div>


                    {/* OUR NETWORK */}

                    <div className="mobile-menu-section">

                        <button
                            type="button"
                            onClick={() =>
                                toggleDropdown("network")
                            }
                        >
                            <span>Our Network</span>

                            <span
                                className={
                                    openDropdown === "network"
                                        ? "arrow open"
                                        : "arrow"
                                }
                            >
                                ›
                            </span>
                        </button>

                        {openDropdown === "network" && (
                            <div className="mobile-submenu">

                                <Link
                                    to="/our-network/board-2026"
                                    onClick={closeMenu}
                                >
                                    Board 2026
                                </Link>

                                <Link
                                    to="/our-network/collaborators-partners"
                                    onClick={closeMenu}
                                >
                                    Collaborators &amp; Partners
                                </Link>

                                <Link
                                    to="/our-network/student-organizations"
                                    onClick={closeMenu}
                                >
                                    Student Organizations
                                </Link>

                            </div>
                        )}

                    </div>


                    {/* CONTACT */}

                    <Link
                        to="/contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>

                </div>
            )}

        </nav>
    );
}