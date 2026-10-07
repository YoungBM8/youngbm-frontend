import { Link } from "react-router-dom";

import seminarLeft from "../assets/seminar-left.png";
import seminarRight from "../assets/seminar-right.png";
import speakerSimran from "../assets/simran-ramchandani.png";

import { APPLY_URL_SEMINAR_3 } from "../data/events";

import "../styles/seminar-apply-here.css";

export default function Seminar3ApplyHereContent() {
    return (
        <main className="seminar-apply-main">

            <section className="seminar-apply-hero">

                <div className="seminar-side-image">
                    <img
                        src={seminarLeft}
                        alt="Seminar illustration left"
                    />
                </div>

                <div className="seminar-hero-content">

                    <span className="seminar-hero-label">
                        Young BM Seminar · Online
                    </span>

                    <h1 className="seminar-hero-title--long">
                        Communicating Science in the Digital Era
                        <span className="seminar-hero-title-sub">
                            Turning Expertise into Impact
                        </span>
                    </h1>

                    <p className="seminar-hero-subtitle">
                        3rd edition of Young Biologists Matter Seminar
                        <br />
                        on the 24th of October 2026
                    </p>

                    <a
                        href={APPLY_URL_SEMINAR_3}
                        target="_blank"
                        rel="noreferrer"
                        className="seminar-apply-button"
                    >
                        Apply here!
                    </a>

                </div>

                <div className="seminar-side-image">
                    <img
                        src={seminarRight}
                        alt="Seminar illustration right"
                    />
                </div>

            </section>

            <section className="seminar-about-section">

                <div className="seminar-section-heading">
                    <span>Young BM Seminar</span>

                    <h2>About</h2>
                </div>

                <p className="seminar-about-text">
                    Key principles of effective science communication include
                    adapting the message to different audiences, selecting the
                    most appropriate communication channels, using storytelling
                    to make scientific concepts more engaging and relatable,
                    incorporating clear and effective visual communication, and
                    finding the right balance between simplifying complex ideas
                    and maintaining scientific accuracy and rigour.
                </p>

            </section>

            <section className="seminar-information-section">

                <div className="seminar-information-grid">

                    <article className="seminar-information-block">

                        <h2>Key topics</h2>

                        <ul>
                            <li>Adapting the message to different audiences</li>
                            <li>Choosing the right communication channels</li>
                            <li>Storytelling in science</li>
                            <li>Clear and effective visual communication</li>
                            <li>Simplicity vs. scientific accuracy</li>
                        </ul>

                    </article>

                    <article className="seminar-information-block">

                        <h2>Event details</h2>

                        <ul>
                            <li>Online event</li>
                            <li>24th October 2026</li>
                            <li>Participation is free</li>
                        </ul>

                    </article>

                </div>

            </section>

            <section className="seminar-speaker-preview">

                <img
                    src={speakerSimran}
                    alt="Simran Ramchandani"
                    className="seminar-speaker-preview-image"
                />

                <div className="seminar-speaker-preview-text">

                    <span>Speaker</span>

                    <h2>Simran Ramchandani</h2>

                    <p>
                        Biologist and science communicator with a background in
                        biotechnology. Through @Sim_biotica, she makes complex
                        science accessible and engaging for digital audiences.
                    </p>

                    <Link
                        to="/seminar/speakers"
                        className="seminar-speaker-preview-link"
                    >
                        Meet the speaker →
                    </Link>

                </div>

            </section>

            <section className="seminar-eligibility-section">

                <div className="seminar-eligibility-title">

                    <span>Applications</span>

                    <h2>Who can apply</h2>

                    <div className="seminar-small-line" />

                    <strong>Participation is free!</strong>

                </div>

                <div className="seminar-eligibility-content">

                    <p>
                        If you are a student in any European country in a field
                        of biosciences at bachelor, master, PhD or postdoctoral
                        level, you can apply to the seminar.
                    </p>

                    <a
                        href={APPLY_URL_SEMINAR_3}
                        target="_blank"
                        rel="noreferrer"
                        className="seminar-apply-button seminar-bottom-button"
                    >
                        Apply here!
                    </a>

                </div>

            </section>

        </main>
    );
}
