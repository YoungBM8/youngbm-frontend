import "../styles/applyhere-youngbmol2026.css";

import bmolLogo from "../assets/bmol-logo.png";
import arrow from "../assets/arrow.png";

export default function ApplyHereHero() {
    return (
        <section className="applyhere-hero">

            <div className="applyhere-hero-inner">

                <a
                    href="https://forms.gle/Pin6F5uzY8u4CGXW9"
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
                    alt="Young BMol 2026 Lisbon"
                    className="applyhere-bmol-logo"
                />

            </div>

            <p className="applyhere-date-text">
                Young BMol 2026 will take place in Lisbon, Portugal from{" "}
                <strong>16th-21st of November 2026.</strong>
            </p>

        </section>
    );
}