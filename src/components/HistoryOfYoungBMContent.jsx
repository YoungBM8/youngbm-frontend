import { usePage } from "../api/client";
import ComponentSection from "./ComponentSection";
import { Loadable } from "./PageState";
import RichText from "./RichText";
import { isComponentSection } from "../utils/sections";

import "../styles/historyofyoungbm.css";

function StoryBlock({ section, first }) {
    if (first) {
        return (
            <section className="history-bio">
                {section.image && <img src={section.image} alt="" />}

                {section.image_caption && (
                    <p className="history-bio-caption">{section.image_caption}</p>
                )}

                {section.title && <h2>{section.title}</h2>}

                <RichText html={section.body} />
            </section>
        );
    }

    return (
        <section className="history-new">
            {section.title && <h2>{section.title}</h2>}

            <div className="history-new-content">
                {section.image && (
                    <div className="history-new-logo-block">
                        <img src={section.image} alt="" />
                        {section.image_caption && <p>{section.image_caption}</p>}
                    </div>
                )}

                <RichText html={section.body} className="history-new-text" />
            </div>
        </section>
    );
}

export default function HistoryOfYoungBMContent() {
    const { data: page, loading, error } = usePage("history");

    const sections = page?.sections ?? [];
    const firstBlockId = sections.find((section) => section.kind === "block")?.id;

    return (
        <main className="history-main">
            <section className="history-hero">
                <div className="history-left">
                    <h1>{page?.title ?? "Our Story"}</h1>
                    {page?.hero_image && <img src={page.hero_image} alt="" />}
                </div>

                <div className="history-right">
                    <div className="history-right-text">
                        {page?.subtitle && <h2>{page.subtitle}</h2>}

                        <RichText html={page?.intro} />
                    </div>
                </div>
            </section>

            <Loadable loading={loading} error={error} compact>
                {sections.map((section) => {
                    if (isComponentSection(section)) {
                        return <ComponentSection section={section} key={section.id} />;
                    }

                    if (section.kind === "block") {
                        return <StoryBlock section={section} first={section.id === firstBlockId} key={section.id} />;
                    }

                    // Cards and call-to-action boxes are not part of this page's design.
                    return null;
                })}
            </Loadable>
        </main>
    );
}
