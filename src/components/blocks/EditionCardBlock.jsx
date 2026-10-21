import { useSite } from "../../context/useSite";
import { editionLocation, editionStatus, formatEditionDates } from "../../utils/editions";
import EventStatusChip from "../EventStatusChip";
import { SectionLink } from "../PageSections";
import RichText from "../RichText";

import "../../styles/applyhere-youngbmol2026.css";
import "../../styles/info-youngbmol2026.css";

/**
 * Summary of one edition: status chip, logo and dates, then a card with the
 * section's own title, text and button. The edition comes from the section's
 * "Edition" box, or the current congress when left empty.
 */
export default function EditionCardBlock({ section }) {
    const { current } = useSite();

    const edition = section?.event || current.congress;

    if (!edition) {
        return null;
    }

    const status = editionStatus(edition);
    const location = editionLocation(edition);

    return (
        <div className="edition-card-block">
            <section className="applyhere-hero info2026-hero">
                <EventStatusChip variant={status.variant}>{status.label}</EventStatusChip>

                {edition.logo && <img src={edition.logo} alt={edition.name} className="info2026-logo" />}

                <p className="applyhere-date-text">
                    {edition.name} · <strong>{formatEditionDates(edition)}</strong>
                    {location ? ` · ${location}` : ""}
                </p>
            </section>

            {(section?.title || section?.body || section?.link_url) && (
                <section
                    className="applyhere-lisbon-section info2026-lisbon-section"
                    style={edition.hero_image ? { backgroundImage: `url(${edition.hero_image})` } : undefined}
                >
                    <div className="applyhere-lisbon-card info2026-card">
                        {section.title && <h2>{section.title}</h2>}

                        <RichText html={section.body} />

                        <SectionLink section={section} className="info2026-button" />
                    </div>
                </section>
            )}
        </div>
    );
}
