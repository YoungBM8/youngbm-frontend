import seminarLeft from "../assets/seminar-left.png";
import seminarRight from "../assets/seminar-right.png";

import "../styles/seminar-apply-here.css";

const SEMINAR_APPLICATION_URL = "#";

export default function SeminarApplyHereContent() {
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
                        Young BM Seminar
                    </span>

                    <h1>Industry vs Academia</h1>

                    <p className="seminar-hero-subtitle">
                        1st edition of Young Biologists Matter Seminar
                        <br />
                        on the 6th of June 2026
                    </p>

                    <a
                        href={SEMINAR_APPLICATION_URL}
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
                    We are excited to launch the first Young Biologists Matter
                    Online Seminar. This event kicks off a seminar series running
                    from June 2026 until the Young BMol 2026 Congress, taking
                    place in Lisbon, Portugal, from the 16th to the 21st of
                    November 2026.
                </p>

            </section>

            <section className="seminar-information-section">

                <div className="seminar-information-grid">

                    <article className="seminar-information-block">

                        <h2>What to expect</h2>

                        <ul>
                            <li>Panel discussions</li>
                            <li>Career insights</li>
                            <li>Live audience Q&amp;A</li>
                            <li>Networking</li>
                        </ul>

                    </article>

                    <article className="seminar-information-block">

                        <h2>Event details</h2>

                        <ul>
                            <li>Online event</li>
                            <li>6th June 2026</li>
                            <li>9:00 until 12:30 UTC+1</li>
                        </ul>

                    </article>

                </div>

                <p className="seminar-information-message">
                    We would love for you to join us for this insightful
                    conversation about career paths in science. Stay tuned
                    for speaker announcements!
                </p>

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
                        level, you can apply to the conference.
                    </p>

                    <a
                        href={SEMINAR_APPLICATION_URL}
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