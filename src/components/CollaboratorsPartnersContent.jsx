import { usePage } from "../api/client";
import PageSections from "./PageSections";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/collaboratorspartners.css";

export default function CollaboratorsPartnersContent() {
    const { data: page, loading, error } = usePage("collaborators");

    return (
        <main className="collaborators-main">

            <section className="collaborators-hero">
                <div className="collaborators-hero-card">
                    <h1>{page?.title ?? "Collaborators & Partners"}</h1>

                    <RichText html={page?.intro} />
                </div>
            </section>

            <Loadable loading={loading} error={error} compact>
                <PageSections sections={page?.sections} />
            </Loadable>

        </main>
    );
}
