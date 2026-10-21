import { usePage } from "../api/client";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/participantprofile.css";

export default function ParticipantProfileContent() {
    const { data: page, loading, error } = usePage("participant-profile");

    const cards = (page?.sections ?? []).filter((section) => section.kind === "card");

    return (
        <main className="participant-profile-main">
            <section className="participant-profile-hero">
                <div className="participant-profile-intro">
                    <h1>{page?.title ?? "Participant profile"}</h1>

                    <Loadable loading={loading} error={error} compact>
                        <RichText html={page?.intro} />
                    </Loadable>
                </div>
            </section>

            <section className="participant-profile-content">
                <div className="participant-profile-grid">
                    {cards.map((card) => (
                        <article className="participant-profile-card" key={card.id}>
                            {card.image && <img src={card.image} alt={card.title} />}
                            <h2>{card.title}</h2>
                            <RichText html={card.body} />
                        </article>
                    ))}
                </div>
            </section>

            <div className="participant-profile-brush"></div>
        </main>
    );
}
