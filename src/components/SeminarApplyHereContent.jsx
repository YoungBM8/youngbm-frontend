import { Link } from "react-router-dom";

import seminarLeft from "../assets/seminar-left.png";
import seminarRight from "../assets/seminar-right.png";

import { usePage } from "../api/client";
import { useSite } from "../context/useSite";
import { LoadingState } from "./PageState";
import RichText from "./RichText";

import "../styles/seminar-apply-here.css";

function ApplyButton({ seminar, className = "" }) {
    if (!seminar?.applications_open || !seminar.application_form_url) {
        return null;
    }

    return (
        <a
            href={seminar.application_form_url}
            target="_blank"
            rel="noreferrer"
            className={`seminar-apply-button ${className}`.trim()}
        >
            Apply here!
        </a>
    );
}

export default function SeminarApplyHereContent() {
    const { current, loading } = useSite();
    const { data: page } = usePage("seminar-apply");

    const seminar = current.seminar;
    const label = page?.subtitle || "Young BM Seminar";

    return (
        <main className="seminar-apply-main">

            <section className="seminar-apply-hero">

                <div className="seminar-side-image">
                    <img
                        src={seminarLeft}
                        alt=""
                    />
                </div>

                <div className="seminar-hero-content">

                    <span className="seminar-hero-label">
                        {label}
                    </span>

                    <h1 className={seminar?.name_subtitle ? "seminar-hero-title--long" : undefined}>
                        {seminar?.name ?? page?.title ?? "Young BM Seminar"}
                        {seminar?.name_subtitle && (
                            <span className="seminar-hero-title-sub">{seminar.name_subtitle}</span>
                        )}
                    </h1>

                    {seminar?.subtitle && (
                        <p className="seminar-hero-subtitle">
                            {seminar.subtitle}
                        </p>
                    )}

                    <ApplyButton seminar={seminar} />

                </div>

                <div className="seminar-side-image">
                    <img
                        src={seminarRight}
                        alt=""
                    />
                </div>

            </section>

            {loading && <LoadingState compact />}

            {!loading && !seminar && (
                <section className="seminar-about-section">
                    <p className="seminar-about-text">
                        The next seminar will be announced soon.
                    </p>
                </section>
            )}

            {seminar?.description && (
                <section className="seminar-about-section">

                    <div className="seminar-section-heading">
                        <span>{label}</span>

                        <h2>About</h2>
                    </div>

                    <RichText html={seminar.description} className="seminar-about-text" />

                </section>
            )}

            {seminar && (seminar.info_blocks?.length > 0 || seminar.closing_message) && (
                <section className="seminar-information-section">

                    {seminar.info_blocks?.length > 0 && (
                        <div className="seminar-information-grid">

                            {seminar.info_blocks.map((block) => (
                                <article className="seminar-information-block" key={block.id}>

                                    <h2>{block.title}</h2>

                                    <RichText html={block.body} />

                                </article>
                            ))}

                        </div>
                    )}

                    {seminar.closing_message && (
                        <p className="seminar-information-message">
                            {seminar.closing_message}
                        </p>
                    )}

                </section>
            )}

            {seminar?.speakers?.[0] && (
                <section className="seminar-speaker-preview">
                    {seminar.speakers[0].image && (
                        <img
                            src={seminar.speakers[0].image}
                            alt={seminar.speakers[0].name}
                            className="seminar-speaker-preview-image"
                        />
                    )}

                    <div className="seminar-speaker-preview-text">
                        <span>{seminar.speakers.length > 1 ? "Speakers" : "Speaker"}</span>

                        <h2>{seminar.speakers[0].name}</h2>

                        <p>{seminar.speakers[0].summary || seminar.speakers[0].tagline || seminar.speakers[0].role}</p>

                        <Link to="/seminar/speakers" className="seminar-speaker-preview-link">
                            {seminar.speakers.length > 1 ? "Meet the speakers →" : "Meet the speaker →"}
                        </Link>
                    </div>
                </section>
            )}

            {seminar && (seminar.eligibility_text || seminar.is_free) && (
                <section className="seminar-eligibility-section">

                    <div className="seminar-eligibility-title">

                        <span>Applications</span>

                        <h2>Who can apply</h2>

                        <div className="seminar-small-line" />

                        {seminar.is_free && <strong>Participation is free!</strong>}

                    </div>

                    <div className="seminar-eligibility-content">

                        <RichText html={seminar.eligibility_text} />

                        <ApplyButton seminar={seminar} className="seminar-bottom-button" />

                    </div>

                </section>
            )}

        </main>
    );
}
