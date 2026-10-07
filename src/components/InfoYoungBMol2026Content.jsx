import { Link } from "react-router-dom";

import EventStatusChip from "./EventStatusChip";
import { YOUNG_BMOL_2026_END, getClosedEventStatus } from "../data/events";

import "../styles/applyhere-youngbmol2026.css";
import "../styles/info-youngbmol2026.css";

import bmolLogoLisbon from "../assets/bmol-logo.png";

export default function InfoYoungBMol2026Content() {
    const status = getClosedEventStatus(YOUNG_BMOL_2026_END);

    return (
        <main>
            {/* ================= TOP ================= */}

            <section className="applyhere-hero info2026-hero">
                <EventStatusChip variant={status.variant}>
                    {status.label}
                </EventStatusChip>

                <img
                    src={bmolLogoLisbon}
                    alt="Young BMol 2026 Lisbon"
                    className="info2026-logo"
                />

                <p className="applyhere-date-text">
                    Young BMol 2026 &middot; <strong>16th &ndash; 21st November 2026</strong> &middot; Lisbon, Portugal
                </p>
            </section>

            {/* ================= LISBON ================= */}

            <section className="applyhere-lisbon-section info2026-lisbon-section">
                <div className="applyhere-lisbon-card info2026-card">
                    <h2>
                        YOUNG BMol 2026
                        <br />
                        LISBON
                    </h2>

                    <p>
                        10th edition of Young Biologists Matter Bio conference, which will take place in Lisbon, Portugal from 16th to 21st November 2026. Don&apos;t miss this opportunity to connect with young scientists from around the world, share ideas, and experience an unforgettable congress.
                    </p>

                    <Link
                        to="/young-bmol-2026/sponsors"
                        className="info2026-button"
                    >
                        Our Sponsors
                    </Link>
                </div>
            </section>
        </main>
    );
}
