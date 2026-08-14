import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
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

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li className="dropdown">
                        <span className="dropdown-title">
                            Young BMol 2026
                        </span>

                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/young-bmol/apply-here">
                                    Apply Here
                                </Link>
                            </li>

                            <li>
                                <Link to="/young-bmol/application-process">
                                    Application process
                                </Link>
                            </li>

                            <li>
                                <Link to="/young-bmol/volunteer-zone">
                                    Volunteer zone
                                </Link>
                            </li>

                            <li>
                                <Link to="/young-bmol/sponsors">
                                    Sponsors
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <span className="dropdown-title">
                            Young BM Seminar
                        </span>

                        <ul className="dropdown-menu seminar-dropdown-menu">
                            <li>
                                <Link to="/seminar/apply-here">
                                    Apply Here
                                </Link>
                            </li>

                            <li>
                                <Link to="/seminar/speakers">
                                    Speakers
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>

                    <li className="dropdown">
                        <span className="dropdown-title">
                            About
                        </span>

                        <ul className="dropdown-menu about-dropdown-menu">
                            <li>
                                <Link to="/about/our-congress">
                                    About our Congress
                                </Link>
                            </li>

                            <li>
                                <Link to="/about/academic-part">
                                    Academic part
                                </Link>
                            </li>

                            <li>
                                <Link to="/about/social-part">
                                    Social part
                                </Link>
                            </li>

                            <li>
                                <Link to="/about/participant-profile">
                                    Participant profile
                                </Link>
                            </li>

                            <li>
                                <Link to="/about/history-of-young-bm">
                                    History of Young BM
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <span className="dropdown-title">
                            Our Network
                        </span>

                        <ul className="dropdown-menu network-dropdown-menu">
                            <li>
                                <Link to="/our-network/board-2026">
                                    Board 2026
                                </Link>
                            </li>

                            <li>
                                <Link to="/our-network/collaborators-partners">
                                    Collaborators &amp; Partners
                                </Link>
                            </li>

                            <li>
                                <Link to="/our-network/student-organizations">
                                    Student Organizations
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>

            </div>


            {/* ================= MOBILE NAVBAR ================= */}

            <div className="mobile-navbar">

                <div className="mobile-navbar-top">

                    <span className="mobile-navbar-title">
                        Young BM Network
                    </span>

                    <button
                        className={`mobile-menu-button ${
                            mobileOpen ? "active" : ""
                        }`}
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

                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>


                        {/* YOUNG BMOL */}

                        <div className="mobile-dropdown">

                            <button
                                onClick={() =>
                                    toggleDropdown("bmol")
                                }
                            >
                                <span>Young BMol 2026</span>
                                <span className="mobile-arrow">
                                    {openDropdown === "bmol"
                                        ? "−"
                                        : "+"}
                                </span>
                            </button>

                            {openDropdown === "bmol" && (
                                <div className="mobile-submenu">

                                    <Link
                                        to="/young-bmol/apply-here"
                                        onClick={closeMobileMenu}
                                    >
                                        Apply Here
                                    </Link>

                                    <Link
                                        to="/young-bmol/application-process"
                                        onClick={closeMobileMenu}
                                    >
                                        Application process
                                    </Link>

                                    <Link
                                        to="/young-bmol/volunteer-zone"
                                        onClick={closeMobileMenu}
                                    >
                                        Volunteer zone
                                    </Link>

                                    <Link
                                        to="/young-bmol/sponsors"
                                        onClick={closeMobileMenu}
                                    >
                                        Sponsors
                                    </Link>

                                </div>
                            )}

                        </div>


                        {/* SEMINAR */}

                        <div className="mobile-dropdown">

                            <button
                                onClick={() =>
                                    toggleDropdown("seminar")
                                }
                            >
                                <span>Young BM Seminar</span>
                                <span className="mobile-arrow">
                                    {openDropdown === "seminar"
                                        ? "−"
                                        : "+"}
                                </span>
                            </button>

                            {openDropdown === "seminar" && (
                                <div className="mobile-submenu">

                                    <Link
                                        to="/seminar/apply-here"
                                        onClick={closeMobileMenu}
                                    >
                                        Apply Here
                                    </Link>

                                    <Link
                                        to="/seminar/speakers"
                                        onClick={closeMobileMenu}
                                    >
                                        Speakers
                                    </Link>

                                </div>
                            )}

                        </div>


                        {/* FAQ */}

                        <Link
                            to="/faq"
                            onClick={closeMobileMenu}
                        >
                            FAQ
                        </Link>


                        {/* ABOUT */}

                        <div className="mobile-dropdown">

                            <button
                                onClick={() =>
                                    toggleDropdown("about")
                                }
                            >
                                <span>About</span>
                                <span className="mobile-arrow">
                                    {openDropdown === "about"
                                        ? "−"
                                        : "+"}
                                </span>
                            </button>

                            {openDropdown === "about" && (
                                <div className="mobile-submenu">

                                    <Link
                                        to="/about/our-congress"
                                        onClick={closeMobileMenu}
                                    >
                                        About our Congress
                                    </Link>

                                    <Link
                                        to="/about/academic-part"
                                        onClick={closeMobileMenu}
                                    >
                                        Academic part
                                    </Link>

                                    <Link
                                        to="/about/social-part"
                                        onClick={closeMobileMenu}
                                    >
                                        Social part
                                    </Link>

                                    <Link
                                        to="/about/participant-profile"
                                        onClick={closeMobileMenu}
                                    >
                                        Participant profile
                                    </Link>

                                    <Link
                                        to="/about/history-of-young-bm"
                                        onClick={closeMobileMenu}
                                    >
                                        History of Young BM
                                    </Link>

                                </div>
                            )}

                        </div>


                        {/* OUR NETWORK */}

                        <div className="mobile-dropdown">

                            <button
                                onClick={() =>
                                    toggleDropdown("network")
                                }
                            >
                                <span>Our Network</span>
                                <span className="mobile-arrow">
                                    {openDropdown === "network"
                                        ? "−"
                                        : "+"}
                                </span>
                            </button>

                            {openDropdown === "network" && (
                                <div className="mobile-submenu">

                                    <Link
                                        to="/our-network/board-2026"
                                        onClick={closeMobileMenu}
                                    >
                                        Board 2026
                                    </Link>

                                    <Link
                                        to="/our-network/collaborators-partners"
                                        onClick={closeMobileMenu}
                                    >
                                        Collaborators &amp; Partners
                                    </Link>

                                    <Link
                                        to="/our-network/student-organizations"
                                        onClick={closeMobileMenu}
                                    >
                                        Student Organizations
                                    </Link>

                                </div>
                            )}

                        </div>


                        {/* CONTACT */}

                        <Link
                            to="/contact"
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </Link>

                    </div>
                )}

            </div>

        </nav>
    );
}