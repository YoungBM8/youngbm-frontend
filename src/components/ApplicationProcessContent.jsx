import { Link } from "react-router-dom";

import { usePage } from "../api/client";
import { useSite } from "../context/useSite";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/applicationprocess-youngbmol2026.css";

export default function ApplicationProcessContent() {
    const { current } = useSite();
    const { data: page, loading, error } = usePage("application-process");

    const congress = current.congress;

    const canApply = congress?.applications_open && congress?.application_form_url;

    return (
        <main className="application-process-main">
            <section className="application-content">

                <div className="application-buttons">

                    <div className="application-left">
                        <h1>{page?.title ?? "Application"}</h1>

                        {canApply && (
                            <a
                                href={congress.application_form_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="application-main-button"
                            >
                                Application form
                            </a>
                        )}
                    </div>

                    <div className="application-side-buttons">
                        {congress?.abstract_template && (
                            <a
                                href={congress.abstract_template}
                                download
                                className="application-small-button"
                            >
                                Abstract template
                            </a>
                        )}

                        <Link
                            to="/contact"
                            className="application-small-button"
                        >
                            Contact us
                        </Link>
                    </div>

                </div>

                <Loadable loading={loading} error={error} compact>
                    <RichText html={page?.intro} />
                    <RichText html={page?.body} />
                </Loadable>

            </section>

            <div className="blue-brush"></div>
        </main>
    );
}
