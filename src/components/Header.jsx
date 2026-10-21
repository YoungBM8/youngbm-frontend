import { Link } from "react-router-dom";

import { useSite } from "../context/useSite";

import "../styles/header.css";

import logo from "../assets/logo-youngbm.png";

export default function Header() {
    const { settings } = useSite();

    const siteName = settings?.site_name ?? "Young BM Network";

    return (

        <header className="top-header">

            <Link to="/" className="top-logo">

                <img
                    src={logo}
                    alt={siteName}
                    className="top-logo-image"
                />

                <span className="logo-text">
                    {siteName}
                </span>

            </Link>

        </header>

    );

}
