import { API, useApi } from "../../api/client";
import { Loadable } from "../PageState";
import BlockHeading from "./BlockHeading";

import "../../styles/sponsors-youngbmol2026.css";

const TIERS = [
    { id: "gold", title: "Golden Sponsors" },
    { id: "silver", title: "Silver Sponsors" },
    { id: "bronze", title: "Bronze Sponsors" }
];

function SponsorCard({ sponsor }) {
    const name = sponsor.website_url ? (
        <a href={sponsor.website_url} target="_blank" rel="noopener noreferrer">
            {sponsor.name}
        </a>
    ) : (
        sponsor.name
    );

    return (
        <article className="sponsor-card">
            <div className="sponsor-logo-container">
                {sponsor.logo ? (
                    <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className={`sponsor-logo sponsor-logo--${sponsor.size}`}
                        loading="lazy"
                    />
                ) : (
                    <span className="sponsor-logo-placeholder">{sponsor.name}</span>
                )}
            </div>

            <h2>{name}</h2>
        </article>
    );
}

export default function SponsorsBlock({ section }) {
    // The section may name an edition; otherwise the current congress.
    const { data, loading, error } = useApi(API.sponsorsOf(section?.event?.slug));

    const sponsors = data?.sponsors ?? [];
    const eventName = data?.event?.name;

    const tiers = TIERS.map((tier) => ({
        ...tier,
        sponsors: sponsors.filter((sponsor) => sponsor.tier === tier.id)
    })).filter((tier) => tier.sponsors.length > 0);

    const untiered = sponsors.filter((sponsor) => !sponsor.tier);

    return (
        <div className="sponsors-block">
            <BlockHeading section={section} eyebrow={eventName} />

            <Loadable loading={loading} error={error} compact>
                {sponsors.length === 0 && data && (
                    <p className="sponsors-empty">
                        Sponsors and partners{eventName ? ` of ${eventName}` : ""} will be announced soon.
                        Interested in supporting the congress? Get in touch with us through the Contact page.
                    </p>
                )}

                {tiers.map((tier) => (
                    <section
                        key={tier.id}
                        className={`sponsors-tier sponsors-tier--${tier.id}`}
                        aria-labelledby={`sponsors-tier-${tier.id}`}
                    >
                        <header className="sponsors-tier-header">
                            <span className="sponsors-tier-medal" aria-hidden="true" />
                            <h2 id={`sponsors-tier-${tier.id}`}>{tier.title}</h2>
                        </header>

                        <div className="sponsors-grid">
                            {tier.sponsors.map((sponsor) => (
                                <SponsorCard sponsor={sponsor} key={sponsor.id} />
                            ))}
                        </div>
                    </section>
                ))}

                {untiered.length > 0 && (
                    <section
                        className="sponsors-grid"
                        aria-label={eventName ? `${eventName} sponsors and partners` : "Sponsors and partners"}
                    >
                        {untiered.map((sponsor) => (
                            <SponsorCard sponsor={sponsor} key={sponsor.id} />
                        ))}
                    </section>
                )}
            </Loadable>
        </div>
    );
}
