import { useSite } from "../context/useSite";
import { LoadingState } from "./PageState";

import "../styles/applyhere-youngbmol2026.css";

import arrow from "../assets/arrow-tirana.png";

export default function ApplyHereHero() {
    const { current, loading } = useSite();

    const congress = current.congress;

    if (loading && !congress) {
        return (
            <section className="applyhere-hero">
                <LoadingState compact />
            </section>
        );
    }

    if (!congress) {
        return (
            <section className="applyhere-hero">
                <p className="applyhere-date-text">
                    The next edition will be announced soon.
                </p>
            </section>
        );
    }

    const canApply = congress.applications_open && congress.application_form_url;

    const location = [congress.city, congress.country].filter(Boolean).join(", ");

    return (
        <section className="applyhere-hero">

            <div className="applyhere-hero-inner">

                {canApply && (
                    <>
                        <a
                            href={congress.application_form_url}
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
                    </>
                )}

                {congress.logo && (
                    <img
                        src={congress.logo}
                        alt={congress.name}
                        className="applyhere-bmol-logo"
                    />
                )}

            </div>

            <p className="applyhere-date-text">
                {congress.apply_tagline ? (
                    congress.apply_tagline
                ) : (
                    <>
                        {congress.name} will take part from{" "}
                        <strong>{congress.display_dates}</strong>
                        {location ? ` in ${location}.` : "."}
                    </>
                )}
            </p>

        </section>
    );
}
