import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock, MapPin, Mic, Monitor, Users } from "lucide-react";

import { API, useApi, usePage } from "../../api/client";
import { useSite } from "../../context/useSite";
import { editionFullName, editionLocation, editionStatus, formatEditionDates, localDate } from "../../utils/editions";
import Countdown from "../Countdown";
import EventStatusChip from "../EventStatusChip";
import { Loadable } from "../PageState";
import RichText from "../RichText";

import "../../styles/home-events.css";

// Fallbacks for the page that lists the seminar series (edited in the back office).
const SERIES_PATH = "/seminar/first-series";
const SERIES_TITLE = "First series of seminars";

/* ---------------- SMALL BUILDING BLOCKS ---------------- */

function TypeTag({ type }) {
    if (type === "seminar") {
        return (
            <span className="home-type-tag home-type-tag--online">
                <Monitor size={14} strokeWidth={2.2} aria-hidden="true" />
                Online seminar
            </span>
        );
    }

    return (
        <span className="home-type-tag home-type-tag--conference">
            <Users size={14} strokeWidth={2.2} aria-hidden="true" />
            Congress · In person
        </span>
    );
}

function MetaRow({ icon: Icon, children }) {
    return (
        <li className="home-meta-row">
            <span className="home-meta-icon">
                <Icon size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <span>{children}</span>
        </li>
    );
}

function EventPhoto({ edition, status }) {
    const photo = edition.hero_image || edition.logo;

    if (!photo) {
        return null;
    }

    return (
        <div className="home-event-media">
            <img src={photo} alt={editionLocation(edition) || edition.name} className="home-event-photo" />

            <div className="home-event-media-tags">
                <EventStatusChip variant={status.variant}>{status.label}</EventStatusChip>
            </div>

            {edition.hero_image && edition.logo && (
                <span className="home-event-badge home-event-badge--round">
                    <img src={edition.logo} alt={`${edition.name} logo`} />
                </span>
            )}
        </div>
    );
}

function Actions({ edition, status }) {
    const canApply = status.variant === "current" && edition.applications_open && edition.application_form_url;

    if (!canApply && !edition.info_page_path) {
        return null;
    }

    return (
        <div className="home-actions">
            {canApply && (
                <a
                    href={edition.application_form_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-button home-button--primary"
                >
                    Apply here
                </a>
            )}

            {edition.info_page_path && (
                <Link to={edition.info_page_path} className="home-button home-button--ghost">
                    Read more
                    <ArrowRight size={16} aria-hidden="true" />
                </Link>
            )}
        </div>
    );
}

function Meta({ edition, inline = false }) {
    const location = edition.kind === "seminar" ? "Online" : editionLocation(edition);

    return (
        <ul className={`home-meta ${inline ? "home-meta--inline" : ""}`}>
            {location && <MetaRow icon={edition.kind === "seminar" ? Monitor : MapPin}>{location}</MetaRow>}
            <MetaRow icon={CalendarDays}>{formatEditionDates(edition)}</MetaRow>
        </ul>
    );
}

function FeaturedEdition({ edition }) {
    const status = editionStatus(edition);
    const title = editionFullName(edition);
    const start = localDate(edition.start_date);
    const speaker = edition.lead_speaker;

    return (
        <article className="home-event home-event--featured">
            <EventPhoto edition={edition} status={status} />

            <div className="home-event-body">
                {edition.kicker && <span className="home-event-kicker">{edition.kicker}</span>}

                <h3 className={`home-event-title ${title.length > 40 ? "home-event-title--long" : ""}`}>
                    {title}
                </h3>

                <Meta edition={edition} />

                {speaker && (
                    <div className="home-speaker">
                        {speaker.image && <img src={speaker.image} alt={speaker.name} />}
                        <span>
                            <span className="home-speaker-label">
                                <Mic size={13} strokeWidth={2.2} aria-hidden="true" />
                                Speaker
                            </span>
                            <strong>{speaker.name}</strong>
                            {(speaker.role || speaker.tagline) && <span>{speaker.role || speaker.tagline}</span>}
                        </span>
                    </div>
                )}

                {start && status.variant !== "past" && (
                    <div className="home-countdown-block">
                        <span className="home-countdown-label">
                            <Clock size={16} strokeWidth={2.2} aria-hidden="true" />
                            Starts in
                        </span>
                        <Countdown
                            target={start}
                            finishedText={
                                edition.kind === "seminar"
                                    ? "The seminar is happening today!"
                                    : "The congress has started!"
                            }
                        />
                    </div>
                )}

                <Actions edition={edition} status={status} />
            </div>
        </article>
    );
}

function PreviousCongress({ edition }) {
    const status = editionStatus(edition);

    return (
        <article className="home-event home-event--compact">
            <EventPhoto edition={edition} status={status} />

            <div className="home-event-body">
                {edition.kicker && <span className="home-event-kicker">{edition.kicker}</span>}
                <h3 className="home-event-title">{editionFullName(edition)}</h3>
                <Meta edition={edition} />
                <Actions edition={edition} status={status} />
            </div>
        </article>
    );
}

function PreviousSeminar({ edition }) {
    const status = editionStatus(edition);

    return (
        <article className="home-event home-event--mini">
            <div className="home-event-body">
                <div className="home-event-mini-top">
                    <EventStatusChip variant={status.variant}>{status.label}</EventStatusChip>
                    {edition.kicker && <span className="home-event-kicker">{edition.kicker}</span>}
                </div>

                <h3 className="home-event-title home-event-title--small">{editionFullName(edition)}</h3>

                <Meta edition={edition} inline />
            </div>
        </article>
    );
}

/* ---------------- BOARD ---------------- */

function pick(editions) {
    // Editions arrive oldest first.
    const featured = editions.find((edition) => edition.is_current) || null;
    const others = editions.filter((edition) => edition !== featured);
    const previous = others.length ? others[others.length - 1] : null;

    return { featured, previous };
}

/**
 * Online seminars: an upcoming one is featured, every finished one is listed
 * below it (oldest first), as a series.
 */
function pickSeminars(editions) {
    const featured = editions.find((edition) => edition.is_current && editionStatus(edition).variant !== "past") || null;
    const past = editions.filter((edition) => edition !== featured);

    return { featured, past };
}

export default function EventsBoardBlock({ section }) {
    const { settings } = useSite();
    const { data, loading, error } = useApi(API.events);
    const { data: seriesPage } = usePage("seminar-series");
    const seriesTitle = seriesPage?.title || SERIES_TITLE;
    const seriesPath = seriesPage?.path || SERIES_PATH;

    const editions = data ?? [];
    const congress = pick(editions.filter((edition) => edition.kind === "congress"));
    const seminar = pickSeminars(editions.filter((edition) => edition.kind === "seminar"));

    return (
        <div className="home">
            {/* ================= INTRO ================= */}

            <section className="home-intro">
                <div className="home-container home-intro-inner">
                    <span className="home-eyebrow">{settings?.site_name ?? "Young BM Network"}</span>

                    <h1 className="home-intro-title">{section?.title || "Young Biologists Matter"}</h1>

                    <RichText html={section?.body} className="home-intro-text" />
                </div>
            </section>

            <Loadable loading={loading} error={error} compact>
                {/* ================= CONGRESSES ================= */}

                {(congress.featured || congress.previous) && (
                    <section className="home-section" id="congresses">
                        <div className="home-container">
                            <header className="home-section-header">
                                <TypeTag type="congress" />
                                <h2>Congresses</h2>
                                <p>
                                    Multi-day congresses where young scientists meet in person: lectures,
                                    presentations, workshops and a rich social programme.
                                </p>
                            </header>

                            {congress.featured && <FeaturedEdition edition={congress.featured} />}

                            {congress.previous && (
                                <>
                                    <h4 className="home-subheading">Previous congress</h4>
                                    <PreviousCongress edition={congress.previous} />
                                </>
                            )}
                        </div>
                    </section>
                )}

                {/* ================= ONLINE SEMINARS ================= */}

                {(seminar.featured || seminar.past.length > 0) && (
                    <section className="home-section home-section--tinted" id="seminars">
                        <div className="home-container">
                            <header className="home-section-header">
                                <TypeTag type="seminar" />
                                <h2>Online Seminars</h2>
                                <p>
                                    Free online sessions with scientists and science communicators that you can
                                    join from home.
                                </p>
                            </header>

                            {seminar.featured && <FeaturedEdition edition={seminar.featured} />}

                            {seminar.past.length > 0 && (
                                <>
                                    <h4 className={`home-subheading ${seminar.featured ? "" : "home-subheading--first"}`.trim()}>
                                        Past events · {seriesTitle}
                                    </h4>

                                    <div className="home-mini-list">
                                        {seminar.past.map((edition) => (
                                            <PreviousSeminar edition={edition} key={edition.id} />
                                        ))}
                                    </div>

                                    <div className="home-actions home-actions--after-list">
                                        <Link to={seriesPath} className="home-button home-button--ghost">
                                            Seminars and speakers
                                            <ArrowRight size={16} aria-hidden="true" />
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                )}
            </Loadable>
        </div>
    );
}
