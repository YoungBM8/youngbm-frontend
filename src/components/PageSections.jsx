import { Link } from "react-router-dom";

import { isExternalHref } from "../utils/links";
import { isComponentSection } from "../utils/sections";
import ComponentSection from "./ComponentSection";
import RichText from "./RichText";

import "../styles/custompage.css";

export function SectionLink({ section, className = "custom-page-button" }) {
    if (!section.link_url) {
        return null;
    }

    const label = section.link_label || "Read more";

    if (isExternalHref(section.link_url)) {
        return (
            <a href={section.link_url} className={className} target="_blank" rel="noopener noreferrer">
                {label}
            </a>
        );
    }

    return (
        <Link to={section.link_url} className={className}>
            {label}
        </Link>
    );
}

function CardGrid({ cards }) {
    return (
        <section className="custom-page-cards">
            {cards.map((card) => (
                <article className="custom-page-card" key={card.id}>
                    {card.image && <img src={card.image} alt={card.title || ""} loading="lazy" />}
                    {card.title && <h2>{card.title}</h2>}
                    <RichText html={card.body} />
                    <SectionLink section={card} />
                </article>
            ))}
        </section>
    );
}

function Block({ section }) {
    return (
        <section
            className={`custom-page-block custom-page-block--${section.theme} custom-page-block--${section.layout}`}
        >
            {section.image && (
                <figure className="custom-page-block-image">
                    <img src={section.image} alt={section.title || ""} loading="lazy" />
                    {section.image_caption && <figcaption>{section.image_caption}</figcaption>}
                </figure>
            )}

            <div className="custom-page-block-text">
                {section.title && <h2>{section.title}</h2>}
                <RichText html={section.body} />
                <SectionLink section={section} />
            </div>
        </section>
    );
}

function Cta({ section }) {
    return (
        <section className="custom-page-cta">
            {section.title && <h2>{section.title}</h2>}
            <RichText html={section.body} />
            <SectionLink section={section} />
        </section>
    );
}

/**
 * Renders page sections in order: generic designs for text blocks, card grids
 * and call-to-action boxes, and the reusable blocks for component sections.
 */
export default function PageSections({ sections }) {
    const groups = [];

    for (const section of sections ?? []) {
        const last = groups[groups.length - 1];

        if (section.kind === "card") {
            if (last?.kind === "cards") {
                last.items.push(section);
            } else {
                groups.push({ kind: "cards", key: `cards-${section.id}`, items: [section] });
            }
        } else if (isComponentSection(section)) {
            groups.push({ kind: "component", key: section.id, section });
        } else {
            groups.push({ kind: section.kind, key: section.id, section });
        }
    }

    return groups.map((group) => {
        switch (group.kind) {
            case "cards":
                return <CardGrid cards={group.items} key={group.key} />;
            case "component":
                return <ComponentSection section={group.section} key={group.key} />;
            case "cta":
                return <Cta section={group.section} key={group.key} />;
            default:
                return <Block section={group.section} key={group.key} />;
        }
    });
}
