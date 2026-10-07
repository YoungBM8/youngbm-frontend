import { Link } from "react-router-dom";
import {
    MapPin,
    CalendarDays,
    Clock,
    Monitor,
    Users,
    ArrowRight,
    Mic,
} from "lucide-react";

import Countdown from "./Countdown";
import EventStatusChip from "./EventStatusChip";

import {
    YOUNG_BMECO_2027_START,
    YOUNG_BMOL_2026_END,
    YOUNG_BM_SEMINAR_3_START,
    YOUNG_BM_SEMINAR_2026_END,
    APPLY_URL_BMECO_2027,
    APPLY_URL_SEMINAR_3,
    getClosedEventStatus,
} from "../data/events";

import "../styles/home-events.css";

import photoTirana from "../assets/hero-tirana.png";
import photoLisbon from "../assets/hero-lisbon.png";
import logoTirana from "../assets/2027Tirana.png";
import logoLisbon from "../assets/bmol-logo.png";
import seminarIllustration from "../assets/seminar-illustration.png";
import speakerSimran from "../assets/simran-ramchandani.png";

/* ---------------- SMALL BUILDING BLOCKS ---------------- */

function TypeTag({ type }) {
    if (type === "online") {
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
            Conference · In person
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

function EventPhoto({ photo, alt, badge, badgeAlt, badgeRound, tags }) {
    return (
        <div className="home-event-media">
            <img src={photo} alt={alt} className="home-event-photo" />

            <div className="home-event-media-tags">{tags}</div>

            {badge && (
                <span
                    className={`home-event-badge ${
                        badgeRound ? "home-event-badge--round" : ""
                    }`}
                >
                    <img src={badge} alt={badgeAlt} />
                </span>
            )}
        </div>
    );
}

/* ---------------- PAGE SECTIONS ---------------- */

export default function HomeEvents() {
    const lisbonStatus = getClosedEventStatus(YOUNG_BMOL_2026_END);
    const seminar2Status = getClosedEventStatus(YOUNG_BM_SEMINAR_2026_END);

    return (
        <main className="home">

            {/* ================= INTRO ================= */}

            <section className="home-intro">
                <div className="home-container home-intro-inner">
                    <span className="home-eyebrow">Young BM Network</span>

                    <h1 className="home-intro-title">
                        Young Biologists Matter
                    </h1>

                    <p className="home-intro-text">
                        International conferences hosted in a different city
                        every edition, and online seminars you can join from
                        anywhere.
                    </p>

                    <div className="home-next-grid">
                        <a href="#conferences" className="home-next-card">
                            <span className="home-next-icon">
                                <Users size={22} strokeWidth={2} aria-hidden="true" />
                            </span>
                            <span className="home-next-text">
                                <span className="home-next-label">Next conference</span>
                                <strong>Young BMEco 2027</strong>
                                <span>Tirana, Albania · 3–7 March 2027</span>
                            </span>
                            <ArrowRight className="home-next-arrow" size={18} aria-hidden="true" />
                        </a>

                        <a href="#seminars" className="home-next-card">
                            <span className="home-next-icon">
                                <Monitor size={22} strokeWidth={2} aria-hidden="true" />
                            </span>
                            <span className="home-next-text">
                                <span className="home-next-label">Next online seminar</span>
                                <strong>Young BM Seminar #3</strong>
                                <span>Online · 24 October 2026</span>
                            </span>
                            <ArrowRight className="home-next-arrow" size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ================= CONFERENCES ================= */}

            <section className="home-section" id="conferences">
                <div className="home-container">

                    <header className="home-section-header">
                        <TypeTag type="conference" />
                        <h2>Conferences</h2>
                        <p>
                            Multi-day congresses where young scientists meet in
                            person: lectures, presentations, workshops and a
                            rich social programme.
                        </p>
                    </header>

                    {/* Featured: Young BMEco 2027 */}

                    <article className="home-event home-event--featured">
                        <EventPhoto
                            photo={photoTirana}
                            alt="Tirana, Albania"
                            badge={logoTirana}
                            badgeAlt="Young BMEco 2027 logo"
                            badgeRound
                            tags={
                                <EventStatusChip variant="current">
                                    Upcoming
                                </EventStatusChip>
                            }
                        />

                        <div className="home-event-body">
                            <span className="home-event-kicker">
                                Young Biologists Matter Eco
                            </span>

                            <h3 className="home-event-title">
                                Young BMEco 2027
                            </h3>

                            <ul className="home-meta">
                                <MetaRow icon={MapPin}>Tirana, Albania</MetaRow>
                                <MetaRow icon={CalendarDays}>3rd – 7th March 2027</MetaRow>
                            </ul>

                            <div className="home-countdown-block">
                                <span className="home-countdown-label">
                                    <Clock size={16} strokeWidth={2.2} aria-hidden="true" />
                                    Starts in
                                </span>
                                <Countdown target={YOUNG_BMECO_2027_START} />
                            </div>

                            <div className="home-actions">
                                <a
                                    href={APPLY_URL_BMECO_2027}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="home-button home-button--primary"
                                >
                                    Apply here
                                </a>

                                <Link
                                    to="/young-bmol/apply-here"
                                    className="home-button home-button--ghost"
                                >
                                    Read more
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Previous: Young BMol 2026 */}

                    <h4 className="home-subheading">Previous conference</h4>

                    <article className="home-event home-event--compact">
                        <EventPhoto
                            photo={photoLisbon}
                            alt="Lisbon, Portugal"
                            badge={logoLisbon}
                            badgeAlt="Young BMol 2026 logo"
                            badgeRound
                            tags={
                                <EventStatusChip variant={lisbonStatus.variant}>
                                    {lisbonStatus.label}
                                </EventStatusChip>
                            }
                        />

                        <div className="home-event-body">
                            <span className="home-event-kicker">
                                10th edition · Young Biologists Matter Bio
                            </span>

                            <h3 className="home-event-title">
                                Young BMol 2026
                            </h3>

                            <ul className="home-meta">
                                <MetaRow icon={MapPin}>Lisbon, Portugal</MetaRow>
                                <MetaRow icon={CalendarDays}>16th – 21st November 2026</MetaRow>
                            </ul>

                            <div className="home-actions">
                                <Link
                                    to="/young-bmol-2026/info"
                                    className="home-button home-button--ghost"
                                >
                                    Read more
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* ================= ONLINE SEMINARS ================= */}

            <section className="home-section home-section--tinted" id="seminars">
                <div className="home-container">

                    <header className="home-section-header">
                        <TypeTag type="online" />
                        <h2>Online Seminars</h2>
                        <p>
                            Free online sessions with scientists and science
                            communicators that you can join from home.
                        </p>
                    </header>

                    {/* Featured: 3rd seminar */}

                    <article className="home-event home-event--featured">
                        <EventPhoto
                            photo={seminarIllustration}
                            alt="Young BM online seminar illustration"
                            tags={
                                <EventStatusChip variant="current">
                                    Upcoming
                                </EventStatusChip>
                            }
                        />

                        <div className="home-event-body">
                            <span className="home-event-kicker">
                                3rd edition · Young Biologists Matter Seminar
                            </span>

                            <h3 className="home-event-title home-event-title--long">
                                Communicating Science in the Digital Era:
                                Turning Expertise into Impact
                            </h3>

                            <ul className="home-meta">
                                <MetaRow icon={Monitor}>Online</MetaRow>
                                <MetaRow icon={CalendarDays}>24th October 2026</MetaRow>
                            </ul>

                            <div className="home-speaker">
                                <img src={speakerSimran} alt="Simran Ramchandani" />
                                <span>
                                    <span className="home-speaker-label">
                                        <Mic size={13} strokeWidth={2.2} aria-hidden="true" />
                                        Speaker
                                    </span>
                                    <strong>Simran Ramchandani</strong>
                                    <span>Biologist &amp; science communicator</span>
                                </span>
                            </div>

                            <div className="home-countdown-block">
                                <span className="home-countdown-label">
                                    <Clock size={16} strokeWidth={2.2} aria-hidden="true" />
                                    Starts in
                                </span>
                                <Countdown
                                    target={YOUNG_BM_SEMINAR_3_START}
                                    finishedText="The seminar is happening today!"
                                />
                            </div>

                            <div className="home-actions">
                                <a
                                    href={APPLY_URL_SEMINAR_3}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="home-button home-button--primary"
                                >
                                    Apply here
                                </a>

                                <Link
                                    to="/seminar/apply-here"
                                    className="home-button home-button--ghost"
                                >
                                    Read more
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Previous: 2nd seminar */}

                    <h4 className="home-subheading">Previous seminar</h4>

                    <article className="home-event home-event--mini">
                        <div className="home-event-body">
                            <div className="home-event-mini-top">
                                <EventStatusChip variant={seminar2Status.variant}>
                                    {seminar2Status.label}
                                </EventStatusChip>
                                <span className="home-event-kicker">
                                    2nd edition · Young Biologists Matter Seminar
                                </span>
                            </div>

                            <h3 className="home-event-title home-event-title--small">
                                AI in Science: Tools, Methods and Ethics
                            </h3>

                            <ul className="home-meta home-meta--inline">
                                <MetaRow icon={Monitor}>Online</MetaRow>
                                <MetaRow icon={CalendarDays}>5th September 2026</MetaRow>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}
