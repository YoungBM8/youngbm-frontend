import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);

    function toggleDropdown(name) {
        setOpenDropdown((current) =>
            current === name ? null : name
        );
    }

    function closeDropdown() {
        setOpenDropdown(null);
    }

    function handleDropdownKeyDown(event, name) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleDropdown(name);
        }
    }

    return (
        <nav className="main-navbar">
            <ul className="main-nav-links">

                {/* HOME */}
                <li>
                    <Link to="/" onClick={closeDropdown}>
                        Home
                    </Link>
                </li>

                {/* YOUNG BMOL 2026 */}
                <li
                    className={`dropdown ${
                        openDropdown === "bmol" ? "open" : ""
                    }`}
                >
                    <span
                        className="dropdown-title"
                        onClick={() => toggleDropdown("bmol")}
                        onKeyDown={(event) =>
                            handleDropdownKeyDown(event, "bmol")
                        }
                        role="button"
                        tabIndex={0}
                    >
                        Young BMol 2026
                    </span>

                    <ul className="dropdown-menu">
                        <li>
                            <Link
                                to="/young-bmol/apply-here"
                                onClick={closeDropdown}
                            >
                                Apply Here
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/young-bmol/application-process"
                                onClick={closeDropdown}
                            >
                                Application process
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/young-bmol/volunteer-zone"
                                onClick={closeDropdown}
                            >
                                Volunteer zone
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/young-bmol/sponsors"
                                onClick={closeDropdown}
                            >
                                Sponsors
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* YOUNG BM SEMINAR */}
                <li
                    className={`dropdown ${
                        openDropdown === "seminar" ? "open" : ""
                    }`}
                >
                    <span
                        className="dropdown-title"
                        onClick={() => toggleDropdown("seminar")}
                        onKeyDown={(event) =>
                            handleDropdownKeyDown(event, "seminar")
                        }
                        role="button"
                        tabIndex={0}
                    >
                        Young BM Seminar
                    </span>

                    <ul className="dropdown-menu seminar-dropdown-menu">
                        <li>
                            <Link
                                to="/seminar/apply-here"
                                onClick={closeDropdown}
                            >
                                Apply Here
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/seminar/speakers"
                                onClick={closeDropdown}
                            >
                                Speakers
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* FAQ */}
                <li>
                    <Link to="/faq" onClick={closeDropdown}>
                        FAQ
                    </Link>
                </li>

                {/* ABOUT */}
                <li
                    className={`dropdown ${
                        openDropdown === "about" ? "open" : ""
                    }`}
                >
                    <span
                        className="dropdown-title"
                        onClick={() => toggleDropdown("about")}
                        onKeyDown={(event) =>
                            handleDropdownKeyDown(event, "about")
                        }
                        role="button"
                        tabIndex={0}
                    >
                        About
                    </span>

                    <ul className="dropdown-menu about-dropdown-menu">
                        <li>
                            <Link
                                to="/about/our-congress"
                                onClick={closeDropdown}
                            >
                                About our Congress
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about/academic-part"
                                onClick={closeDropdown}
                            >
                                Academic part
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about/social-part"
                                onClick={closeDropdown}
                            >
                                Social part
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about/participant-profile"
                                onClick={closeDropdown}
                            >
                                Participant profile
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about/history-of-young-bm"
                                onClick={closeDropdown}
                            >
                                History of Young BM
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* OUR NETWORK */}
                <li
                    className={`dropdown ${
                        openDropdown === "network" ? "open" : ""
                    }`}
                >
                    <span
                        className="dropdown-title"
                        onClick={() => toggleDropdown("network")}
                        onKeyDown={(event) =>
                            handleDropdownKeyDown(event, "network")
                        }
                        role="button"
                        tabIndex={0}
                    >
                        Our Network
                    </span>

                    <ul className="dropdown-menu network-dropdown-menu">
                        <li>
                            <Link
                                to="/our-network/board-2026"
                                onClick={closeDropdown}
                            >
                                Board 2026
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/our-network/collaborators-partners"
                                onClick={closeDropdown}
                            >
                                Collaborators &amp; Partners
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/our-network/student-organizations"
                                onClick={closeDropdown}
                            >
                                Student Organizations
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* CONTACT */}
                <li>
                    <Link to="/contact" onClick={closeDropdown}>
                        Contact
                    </Link>
                </li>

            </ul>
        </nav>
    );
}