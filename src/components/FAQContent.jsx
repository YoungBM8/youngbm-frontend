import { usePage } from "../api/client";
import { useSite } from "../context/useSite";
import PageSections from "./PageSections";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/faq.css";

export default function FAQContent() {
    const { settings } = useSite();
    const { data: page, loading, error } = usePage("faq");

    return (
        <main className="faq-main">

            <section className="faq-hero">
                <h1>{page?.title ?? "Frequently Asked Questions"}</h1>

                <div className="faq-contact">
                    <p>{page?.subtitle || "Have questions?"}</p>
                    {settings?.contact_email && (
                        <p>
                            Reach out to us at <strong>{settings.contact_email}</strong>.
                        </p>
                    )}
                </div>

                <RichText html={page?.intro} className="faq-introduction" />
            </section>

            <Loadable loading={loading} error={error} compact>
                <PageSections sections={page?.sections} />
            </Loadable>

        </main>
    );
}
