import { usePage } from "../api/client";
import { useSite } from "../context/useSite";
import PageSections from "./PageSections";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/seminar-speakers.css";

export default function SeminarSpeakersContent() {
    const { current } = useSite();
    const { data: page, loading, error } = usePage("seminar-speakers");

    const seminar = current.seminar;

    return (
        <main className="seminar-speakers-main">

            {/* HERO */}

            <section className="seminar-speakers-hero">
                <div className="seminar-speakers-hero-content">

                    <span className="seminar-speakers-label">
                        {page?.subtitle || "Young BM Seminar"}
                    </span>

                    <h1>{page?.title || "Speakers"}</h1>

                    <RichText html={page?.intro || seminar?.speakers_intro} />

                </div>
            </section>

            <Loadable loading={loading} error={error} compact>
                <PageSections sections={page?.sections} />
            </Loadable>

        </main>
    );
}
