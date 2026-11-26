import { API, useApi, usePage } from "../api/client";
import { Loadable } from "./PageState";
import { SectionLink } from "./PageSections";
import RichText from "./RichText";

import "../styles/aboutourcongress.css";

function EditionLogo({ event }) {
    if (!event.logo) {
        return null;
    }

    return (
        <img
            src={event.logo}
            alt={event.name}
            className={event.logo_round ? "about-logo about-logo--round" : "about-logo"}
            style={{ width: event.logo_width }}
            loading="lazy"
        />
    );
}

/**
 * The About page design has five logo slots: two columns with a top pair and a
 * bottom pair each, plus a pair under the text. Editions are poured into those
 * slots in chronological order; the sizes come from each edition's settings.
 */
function splitLogos(events) {
    return {
        leftTop: [events[0], events[2]].filter(Boolean),
        rightTop: [events[1], events[3]].filter(Boolean),
        leftBottom: events.slice(4, 6),
        rightBottom: events.slice(6, 8),
        center: events.slice(8)
    };
}

export default function AboutOurCongressContent() {
    const { data: page, loading, error } = usePage("about-congress");
    const { data: events } = useApi(API.events);

    const logos = splitLogos((events ?? []).filter((event) => event.show_logo_in_about && event.logo));

    const sections = page?.sections ?? [];
    const cards = sections.filter((section) => section.kind === "card");
    const ctas = sections.filter((section) => section.kind === "cta");

    return (
        <>
            <section className="about-hero">
                <h1>{page?.title ?? "Young BM Congress"}</h1>

                <div className="about-hero-layout">

                    <div className="about-logos-column left">
                        {logos.leftTop.map((event) => <EditionLogo event={event} key={event.id} />)}

                        {logos.leftBottom.length > 0 && (
                            <div className="about-left-bottom">
                                {logos.leftBottom.map((event) => <EditionLogo event={event} key={event.id} />)}
                            </div>
                        )}
                    </div>

                    <div className="about-text-center">
                        <Loadable loading={loading} error={error} compact>
                            <RichText html={page?.intro} />
                        </Loadable>

                        {logos.center.length > 0 && (
                            <div className="about-bottom-logos">
                                {logos.center.map((event) => <EditionLogo event={event} key={event.id} />)}
                            </div>
                        )}
                    </div>

                    <div className="about-logos-column right">
                        {logos.rightTop.map((event) => <EditionLogo event={event} key={event.id} />)}

                        {logos.rightBottom.length > 0 && (
                            <div className="about-right-bottom">
                                {logos.rightBottom.map((event) => <EditionLogo event={event} key={event.id} />)}
                            </div>
                        )}
                    </div>

                </div>
            </section>

            {cards.length > 0 && (
                <section className="about-structure">
                    {page?.subtitle && <h2>{page.subtitle}</h2>}

                    <div className="structure-cards">
                        {cards.map((section) => (
                            <div className="structure-card" key={section.id}>
                                <h3>{section.title}</h3>
                                <RichText html={section.body} />
                                <SectionLink section={section} className="" />
                            </div>
                        ))}
                    </div>

                    <div className="about-divider"></div>
                </section>
            )}

            {ctas.map((section) => (
                <section className="about-collaborate-section" key={section.id}>
                    <div className="about-collaborate-box">
                        <h3>{section.title}</h3>
                        <RichText html={section.body} />
                        <SectionLink section={section} className="" />
                    </div>
                </section>
            ))}
        </>
    );
}
