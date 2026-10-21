import { usePage } from "../api/client";
import { useSite } from "../context/useSite";
import { Loadable } from "./PageState";
import RichText from "./RichText";

import "../styles/volunteerzone-youngbmol2026.css";

export default function VolunteerZoneContent() {
    const { current } = useSite();
    const { data: page, loading, error } = usePage("volunteer-zone");

    const congress = current.congress;
    const teams = (page?.sections ?? []).filter((section) => section.kind === "card");

    return (
        <main className="volunteer-main">

            <section className="volunteer-intro">
                <h1>{page?.title ?? "Volunteer zone"}</h1>

                <Loadable loading={loading} error={error} compact>
                    <RichText html={page?.intro} />
                </Loadable>

                {congress?.volunteer_form_url ? (
                    <a
                        href={congress.volunteer_form_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="volunteer-button"
                    >
                        Volunteer form
                    </a>
                ) : (
                    <span className="volunteer-button volunteer-button--disabled" aria-disabled="true">
                        Volunteer form soon...
                    </span>
                )}
            </section>

            {teams.length > 0 && (
                <section className="volunteer-teams">
                    <h2>{page?.subtitle || "Volunteer teams"}</h2>

                    <div className="teams-grid">
                        {teams.map((team) => (
                            <div className="team-card" key={team.id}>
                                <h3>{team.title}</h3>

                                <RichText html={team.body} />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <div className="volunteer-brush"></div>

        </main>
    );
}
