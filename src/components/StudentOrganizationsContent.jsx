import { usePage } from "../api/client";
import PageSections from "./PageSections";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/studentorganizations.css";

export default function StudentOrganizationsContent() {
    const { data: page, loading, error } = usePage("student-organizations");

    return (
        <main className="student-org-main">

            <section className="student-org-intro">
                <h1>{page?.title ?? "Student Organisations: Connect & Collaborate"}</h1>
                <div className="student-org-line"></div>

                <RichText html={page?.intro} />
            </section>

            <Loadable loading={loading} error={error} compact>
                <PageSections sections={page?.sections} />
            </Loadable>

        </main>
    );
}
