import { Link } from "react-router-dom";
import "../styles/desktop-navbar.css";

export default function DesktopNavbar() {
    return (
        <nav className="desktop-navbar">
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

                    <ul className="desktop-dropdown-menu">
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

                    <ul className="desktop-dropdown-menu desktop-about-menu">
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

                    <ul className="desktop-dropdown-menu desktop-network-menu">
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
        </nav>
    );
}