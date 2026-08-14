import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    const toggleMobileDropdown = (menu) => {
        setOpenMobileDropdown((current) =>
            current === menu ? null : menu
        );
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    };

    return (
        <nav className="site-navbar">

            {/* =====================================================
                DESKTOP NAVBAR
            ===================================================== */}

            <div className="desktop-navbar">
                <ul className="desktop-nav-links">

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li className="desktop-dropdown">
                        <span className="desktop-dropdown-title">
                            Young BMol 2026
                        </span>

                        <ul className="desktop-dropdown-menu">
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

                    <li className="desktop-dropdown">
                        <span className="desktop-dropdown-title">
                            Young BM Seminar
                        </span>

                        <ul className="desktop-dropdown-menu seminar-dropdown">
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

                    <li className="desktop-dropdown">
                        <span className="desktop-dropdown-title">
                            About
                        </span>

                        <ul className="desktop-dropdown-menu about-dropdown">
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

                    <li className="desktop-dropdown">
                        <span className="desktop-dropdown-title">
                            Our Network
                        </span>

                        <ul className="desktop-dropdown-menu network-dropdown">
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


            {/* =====================================================
                MOBILE NAVBAR
            ===================================================== */}

            <div className="mobile-navbar">

                <div className="mobile-navbar-header">

                    <Link
                        to="/"
                        className="mobile-navbar-brand"
                        onClick={closeMobileMenu}
                    >
                        Young BM Network
                    </Link>

                    <button
                        type="button"
                        className={`mobile-menu-button ${
                            mobileMenuOpen ? "open" : ""
                        }`}
                        onClick={() =>
                            setMobileMenuOpen((current) => !current)
                        }
                        aria-label={
                            mobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={mobileMenuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>


                {/* =================================================
                    MOBILE MENU
                ================================================= */}

                <div
                    className={`mobile-menu ${
                        mobileMenuOpen ? "mobile-menu-open" : ""
                    }`}
                >

                    <Link
                        to="/"
                        className="mobile-main-link"
                        onClick={closeMobileMenu}
                    >
                        Home
                    </Link>


                    {/* ================= YOUNG BMOL ================= */}

                    <div className="mobile-dropdown">

                        <button
                            type="button"
                            className="mobile-dropdown-button"
                            onClick={() =>
                                toggleMobileDropdown("bmol")
                            }
                            aria-expanded={
                                openMobileDropdown === "bmol"
                            }
                        >
                            <span>Young BMol 2026</span>

                            <span
                                className={`mobile-arrow ${
                                    openMobileDropdown === "bmol"
                                        ? "arrow-open"
                                        : ""
                                }`}
                            >
                                ▾
                            </span>
                        </button>

                        <div
                            className={`mobile-submenu ${
                                openMobileDropdown === "bmol"
                                    ? "mobile-submenu-open"
                                    : ""
                            }`}
                        >
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

                    </div>


                    {/* ================= SEMINAR ================= */}

                    <div className="mobile-dropdown">

                        <button
                            type="button"
                            className="mobile-dropdown-button"
                            onClick={() =>
                                toggleMobileDropdown("seminar")
                            }
                            aria-expanded={
                                openMobileDropdown === "seminar"
                            }
                        >
                            <span>Young BM Seminar</span>

                            <span
                                className={`mobile-arrow ${
                                    openMobileDropdown === "seminar"
                                        ? "arrow-open"
                                        : ""
                                }`}
                            >
                                ▾
                            </span>
                        </button>

                        <div
                            className={`mobile-submenu ${
                                openMobileDropdown === "seminar"
                                    ? "mobile-submenu-open"
                                    : ""
                            }`}
                        >
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

                    </div>


                    {/* ================= FAQ ================= */}

                    <Link
                        to="/faq"
                        className="mobile-main-link"
                        onClick={closeMobileMenu}
                    >
                        FAQ
                    </Link>


                    {/* ================= ABOUT ================= */}

                    <div className="mobile-dropdown">

                        <button
                            type="button"
                            className="mobile-dropdown-button"
                            onClick={() =>
                                toggleMobileDropdown("about")
                            }
                            aria-expanded={
                                openMobileDropdown === "about"
                            }
                        >
                            <span>About</span>

                            <span
                                className={`mobile-arrow ${
                                    openMobileDropdown === "about"
                                        ? "arrow-open"
                                        : ""
                                }`}
                            >
                                ▾
                            </span>
                        </button>

                        <div
                            className={`mobile-submenu ${
                                openMobileDropdown === "about"
                                    ? "mobile-submenu-open"
                                    : ""
                            }`}
                        >
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

                    </div>


                    {/* ================= OUR NETWORK ================= */}

                    <div className="mobile-dropdown">

                        <button
                            type="button"
                            className="mobile-dropdown-button"
                            onClick={() =>
                                toggleMobileDropdown("network")
                            }
                            aria-expanded={
                                openMobileDropdown === "network"
                            }
                        >
                            <span>Our Network</span>

                            <span
                                className={`mobile-arrow ${
                                    openMobileDropdown === "network"
                                        ? "arrow-open"
                                        : ""
                                }`}
                            >
                                ▾
                            </span>
                        </button>

                        <div
                            className={`mobile-submenu ${
                                openMobileDropdown === "network"
                                    ? "mobile-submenu-open"
                                    : ""
                            }`}
                        >
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

                    </div>


                    {/* ================= CONTACT ================= */}

                    <Link
                        to="/contact"
                        className="mobile-main-link"
                        onClick={closeMobileMenu}
                    >
                        Contact
                    </Link>

                </div>

            </div>

        </nav>
    );
}