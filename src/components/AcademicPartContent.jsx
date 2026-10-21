import { usePage } from "../api/client";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/academicpart.css";

export default function AcademicPartContent() {
    const { data: page, loading, error } = usePage("academic-part");

    const sections = (page?.sections ?? []).filter((section) => section.kind === "block");

    return (
        <main className="academic-main">

            <section
                className="academic-hero"
                style={page?.hero_image ? { backgroundImage: `url(${page.hero_image})` } : undefined}
            >
                <div className="academic-intro-card">
                    <h1>{page?.title ?? "Academic part"}</h1>

                    <Loadable loading={loading} error={error} compact>
                        <RichText html={page?.intro} />
                    </Loadable>
                </div>
            </section>

            {sections.map((section, index) => (
                <section
                    key={section.id}
                    className={`academic-section ${
                        section.theme === "dark" ? "academic-dark" : "academic-light"
                    } ${index === 0 ? "academic-first-section" : ""}`}
                >
                    <div
                        className={`academic-row ${
                            section.layout === "image_right" ? "text-left" : "image-left"
                        }`}
                    >
                        {section.image && <img src={section.image} alt={section.title} />}

                        <div className="academic-text">
                            <h2>{section.title}</h2>
                            <RichText html={section.body} />
                        </div>
                    </div>
                </section>
            ))}

        </main>
    );
}
