import { API, useApi } from "../../api/client";
import { useSite } from "../../context/useSite";
import { ErrorState, LoadingState } from "../PageState";
import BlockHeading from "./BlockHeading";

import "../../styles/seminar-speakers.css";

export default function SpeakersBlock({ section }) {
    const site = useSite();

    // The section may name an edition; otherwise the current seminar is used.
    const chosen = useApi(section?.event?.slug ? API.event(section.event.slug) : null);

    const event = section?.event?.slug ? chosen.data : site.current.seminar;
    const loading = section?.event?.slug ? chosen.loading : site.loading;
    const error = section?.event?.slug ? chosen.error : null;

    const speakers = event?.speakers ?? [];

    if (error) {
        return <ErrorState error={error} compact />;
    }

    return (
        <div className="speakers-block">
            <BlockHeading section={section} />

            <section className="seminar-speakers-list">

                {loading && <LoadingState compact />}

                {!loading && speakers.length === 0 && (
                    <p className="seminar-speakers-empty">
                        Speakers will be announced soon.
                    </p>
                )}

                {speakers.map((speaker, index) => (

                    <article
                        key={speaker.id}
                        className={`speaker-section ${index % 2 === 0 ? "speaker-normal" : "speaker-reverse"}`}
                    >

                        <div className={`speaker-image-side speaker-background-${index % 3}`}>
                            {speaker.image && (
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className={
                                        speaker.image_type === "logo"
                                            ? "speaker-image speaker-logo"
                                            : "speaker-image speaker-person"
                                    }
                                />
                            )}
                        </div>

                        <div className="speaker-text-side">
                            <div className="speaker-text-content">
                                <h2>{speaker.name}</h2>

                                {speaker.role && <p className="speaker-role">{speaker.role}</p>}

                                <p>{speaker.bio}</p>
                            </div>
                        </div>

                    </article>

                ))}

            </section>
        </div>
    );
}
