import { Link } from "react-router-dom";

import "../styles/header.css";

import logo from "../assets/logo-youngbm.png";

export default function Header() {

    return (

        <header className="top-header">

            <Link to="/" className="top-logo">

                <img
                    src={logo}
                    alt="Young BM Network"
                    className="top-logo-image"
                />

                <span className="logo-text">
                    Young BM Network
                </span>

            </Link>

        </header>

    );

}