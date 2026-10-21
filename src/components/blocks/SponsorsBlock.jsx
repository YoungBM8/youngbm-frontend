import { API, useApi } from "../../api/client";
import { Loadable } from "../PageState";
import BlockHeading from "./BlockHeading";

import "../../styles/sponsors-youngbmol2026.css";

export default function SponsorsBlock({ section }) {
    // The section may name an edition; otherwise the current one (with fallback).
    const { data, loading, error } = useApi(API.sponsorsOf(section?.event?.slug));

    const sponsors = data?.sponsors ?? [];
    const eventName = data?.event?.name;

    return (
        <div className="sponsors-block">
            <BlockHeading section={section} eyebrow={eventName} />

            <Loadable loading={loading} error={error} compact>
                <section
                    className="sponsors-grid"
                    aria-label={eventName ? `${eventName} sponsors and partners` : "Sponsors and partners"}
                >
                    {sponsors.map((sponsor) => (
                        <article className="sponsor-card" key={sponsor.id}>
                            <div className="sponsor-logo-container">
                                {sponsor.logo && (
                                    <img
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} logo`}
                                        className={`sponsor-logo sponsor-logo--${sponsor.size}`}
                                        loading="lazy"
                                    />
                                )}
                            </div>

                            <h2>
                                {sponsor.website_url ? (
                                    <a href={sponsor.website_url} target="_blank" rel="noopener noreferrer">
                                        {sponsor.name}
                                    </a>
                                ) : (
                                    sponsor.name
                                )}
                            </h2>
                        </article>
                    ))}
                </section>
            </Loadable>
        </div>
    );
}
