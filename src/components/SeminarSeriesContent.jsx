import { CalendarDays, Monitor } from "lucide-react";

import EventStatusChip from "./EventStatusChip";

import { FIRST_SEMINAR_SERIES } from "../data/seminars";

import "../styles/seminar-series.css";

export default function SeminarSeriesContent() {
    const { title, intro, seminars } = FIRST_SEMINAR_SERIES;

    return (
        <main className="seminar-series-main">

            {/* HERO */}

            <section className="seminar-series-hero">
                <div className="seminar-series-hero-content">

                    <span className="seminar-series-label">
                        Young BM Seminars · Online
                    </span>

                    <h1>{title}</h1>

                    <p>{intro}</p>

                </div>
            </section>

            {/* SEMINARS */}

            <section className="seminar-series-list">

                {seminars.map((seminar) => (

                    <article
                        key={seminar.id}
                        id={seminar.id}
                        className="seminar-series-item"
                    >
                        <div className="seminar-series-item-inner">

                            {/* EDITION + DATE */}

                            <div className="seminar-series-aside">

                                <span
                                    className="seminar-series-number"
                                    aria-hidden="true"
                                >
                                    {seminar.number}
                                </span>

                                <span className="seminar-series-edition">
                                    {seminar.edition}
                                </span>

                                <ul className="seminar-series-meta">
                                    <li>
                                        <CalendarDays
                                            size={16}
                                            strokeWidth={2}
                                            aria-hidden="true"
                                        />
                                        {seminar.date}
                                    </li>
                                    <li>
                                        <Monitor
                                            size={16}
                                            strokeWidth={2}
                                            aria-hidden="true"
                                        />
                                        Online
                                    </li>
                                </ul>

                                <EventStatusChip variant="past">
                                    Past event
                                </EventStatusChip>

                            </div>

                            {/* DESCRIPTION + SPEAKERS */}

                            <div className="seminar-series-body">

                                <h2>
                                    {seminar.title}
                                    {seminar.subtitle && (
                                        <span className="seminar-series-subtitle">
                                            {seminar.subtitle}
                                        </span>
                                    )}
                                </h2>

                                <p className="seminar-series-description">
                                    {seminar.description}
                                </p>

                                <h3>
                                    {seminar.speakers.length > 1
                                        ? "Speakers"
                                        : "Speaker"}
                                </h3>

                                <ul className="seminar-series-speakers">
                                    {seminar.speakers.map((speaker) => (
                                        <li key={speaker.name}>
                                            <img
                                                src={speaker.image}
                                                alt={speaker.name}
                                                className={
                                                    speaker.type === "logo"
                                                        ? "seminar-series-avatar seminar-series-avatar--logo"
                                                        : "seminar-series-avatar"
                                                }
                                            />
                                            <span>
                                                <strong>{speaker.name}</strong>
                                                <span>{speaker.role}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                    </article>

                ))}

            </section>

        </main>
    );
}
