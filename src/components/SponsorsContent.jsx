import { API, useApi, usePage } from "../api/client";
import PageSections from "./PageSections";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/sponsors-youngbmol2026.css";

export default function SponsorsContent() {
    const { data: page, loading, error } = usePage("sponsors");

    // The edition named on the page's first sponsors section, if any.
    const sponsorsSection = page?.sections?.find((section) => section.kind === "sponsors");
    const { data } = useApi(API.sponsorsOf(sponsorsSection?.event?.slug));

    // Small line above the heading: the page subtitle when set, otherwise the
    // name of the edition whose sponsors are shown.
    const eyebrow = page?.subtitle || data?.event?.name;

    return (
        <main className="sponsors-main">
            <section className="sponsors-intro">
                {eyebrow && (
                    <span className="sponsors-eyebrow">
                        {eyebrow}
                    </span>
                )}

                <h1>{page?.title ?? "Our Sponsors & Partners"}</h1>

                <RichText html={page?.intro} />
            </section>

            <Loadable loading={loading} error={error} compact>
                <PageSections sections={page?.sections} />
            </Loadable>
        </main>
    );
}
