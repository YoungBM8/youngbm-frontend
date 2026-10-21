import { usePage } from "../api/client";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/socialpart.css";

export default function SocialPartContent() {
    const { data: page, loading, error } = usePage("social-part");

    const sections = (page?.sections ?? []).filter((section) => section.kind === "block");

    return (
        <main className="social-main">

            <section className="social-intro">
                <h1>{page?.title ?? "Social part"}</h1>

                <Loadable loading={loading} error={error} compact>
                    <RichText html={page?.intro} />
                </Loadable>
            </section>

            {sections.map((section) => {
                const image = section.image ? (
                    <img src={section.image} alt={section.title} />
                ) : null;

                const text = (
                    <div className="social-text">
                        <h2>{section.title}</h2>
                        <RichText html={section.body} />
                    </div>
                );

                return (
                    <section
                        className={`social-block ${section.theme === "dark" ? "social-dark" : "social-light"}`}
                        key={section.id}
                    >
                        {section.layout === "image_right" ? (
                            <>
                                {text}
                                {image}
                            </>
                        ) : (
                            <>
                                {image}
                                {text}
                            </>
                        )}
                    </section>
                );
            })}

        </main>
    );
}
