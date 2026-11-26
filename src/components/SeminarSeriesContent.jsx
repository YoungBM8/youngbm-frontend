import { CalendarDays, Monitor } from "lucide-react";

import { API, useApi, usePage } from "../api/client";
import { editionStatus, formatEditionDates } from "../utils/editions";
import EventStatusChip from "./EventStatusChip";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/seminar-series.css";

/** "1st edition · Young Biologists Matter Seminar" -> "1st edition" */
function editionLabel(kicker) {
    return (kicker || "").split("·")[0].trim();
}

function SeminarEntry({ summary, number }) {
    const { data: detail } = useApi(API.event(summary.slug));

    // The list already has everything but the text and the speakers.
    const seminar = { ...summary, ...(detail ?? {}) };
    const status = editionStatus(seminar);
    const speakers = seminar.speakers ?? [];

    return (
        <article id={seminar.slug} className="seminar-series-item">
            <div className="seminar-series-item-inner">

                {/* EDITION + DATE */}

                <div className="seminar-series-aside">

                    <span className="seminar-series-number" aria-hidden="true">
                        {String(number).padStart(2, "0")}
                    </span>

                    <span className="seminar-series-edition">
                        {editionLabel(seminar.kicker)}
                    </span>

                    <ul className="seminar-series-meta">
                        <li>
                            <CalendarDays size={16} strokeWidth={2} aria-hidden="true" />
                            {formatEditionDates(seminar)}
                        </li>
                        <li>
                            <Monitor size={16} strokeWidth={2} aria-hidden="true" />
                            Online
                        </li>
                    </ul>

                    <EventStatusChip variant={status.variant}>
                        {status.label}
                    </EventStatusChip>

                </div>

                {/* DESCRIPTION + SPEAKERS */}

                <div className="seminar-series-body">

                    <h2>
                        {seminar.name}
                        {seminar.name_subtitle && (
                            <span className="seminar-series-subtitle">
                                {seminar.name_subtitle}
                            </span>
                        )}
                    </h2>

                    <RichText html={seminar.description} className="seminar-series-description" />

                    {speakers.length > 0 && (
                        <>
                            <h3>{speakers.length > 1 ? "Speakers" : "Speaker"}</h3>

                            <ul className="seminar-series-speakers">
                                {speakers.map((speaker) => (
                                    <li key={speaker.id}>
                                        {speaker.image && (
                                            <img
                                                src={speaker.image}
                                                alt={speaker.name}
                                                className={
                                                    speaker.image_type === "logo"
                                                        ? "seminar-series-avatar seminar-series-avatar--logo"
                                                        : "seminar-series-avatar"
                                                }
                                            />
                                        )}
                                        <span>
                                            <strong>{speaker.name}</strong>
                                            {(speaker.role || speaker.tagline) && (
                                                <span>{speaker.role || speaker.tagline}</span>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                </div>

            </div>
        </article>
    );
}

export default function SeminarSeriesContent({ slug = "seminar-series" }) {
    const { data: page, loading: pageLoading, error: pageError } = usePage(slug);
    const { data: events, loading, error } = useApi(API.events);

    // Editions arrive oldest first, which is the order the series is shown in.
    const seminars = (events ?? []).filter((event) => event.kind === "seminar");

    return (
        <main className="seminar-series-main">

            {/* HERO */}

            <section className="seminar-series-hero">
                <div className="seminar-series-hero-content">

                    <span className="seminar-series-label">
                        {page?.subtitle || "Young BM Seminars · Online"}
                    </span>

                    <h1>{page?.title || "First series of seminars"}</h1>

                    <RichText html={page?.intro} />

                </div>
            </section>

            {/* SEMINARS */}

            <Loadable loading={loading || pageLoading} error={error || pageError} compact>
                <section className="seminar-series-list">
                    {seminars.map((seminar, index) => (
                        <SeminarEntry key={seminar.id} summary={seminar} number={index + 1} />
                    ))}
                </section>
            </Loadable>

        </main>
    );
}
