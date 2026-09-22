import "../styles/applyhere-youngbmol2026.css";

import bmolLogo from "../assets/2027Tirana.png";
import arrow from "../assets/arrow.png";

export default function ApplyHereHero() {
    return (
        <section className="applyhere-hero">

            <div className="applyhere-hero-inner">

                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSefi9psrloGLxER9lP_KJWOxAvUokhZLwvlRfZL6zzOR_dExA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="applyhere-apply-button"
                >
                    APPLY HERE!
                </a>

                <img
                    src={arrow}
                    alt=""
                    className="applyhere-arrow-img"
                />

                <img
                    src={bmolLogo}
                    alt="Young BMEco 2027 Tirana"
                    className="applyhere-bmol-logo"
                />

            </div>

            <p className="applyhere-date-text">
                Young BMEco 2027 will take part from <strong>3-7th of March 2027</strong> in Tirana, Albania.
            </p>

        </section>
    );
}