import BlockHeading from "./BlockHeading";

import "../../styles/historyofyoungbm.css";

/** Cards of the timeline chosen on the section; the section title overrides the timeline heading. */
export default function TimelineBlock({ section }) {
    const timeline = section?.timeline;
    const cards = timeline?.cards ?? [];

    if (!timeline || cards.length === 0) {
        return null;
    }

    const heading = { ...section, title: section.title || timeline.title };

    return (
        <div className="timeline-block">
            <BlockHeading section={heading} />

            <section className="history-timeline">
                <div className="timeline-wrapper">
                    {cards.map((card) => (
                        <article className="timeline-card" key={card.id}>
                            {card.image && <img src={card.image} alt={card.title} loading="lazy" />}
                            <div className="timeline-card-text">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
