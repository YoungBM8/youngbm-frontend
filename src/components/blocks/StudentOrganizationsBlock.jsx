import { API, useApi } from "../../api/client";
import { Loadable } from "../PageState";
import RichText from "../RichText";

import "../../styles/studentorganizations.css";

export default function StudentOrganizationsBlock({ section }) {
    const { data, loading, error } = useApi(API.studentOrganizations);

    const organizations = data ?? [];

    return (
        <div className="student-org-block">
            <section className="student-org-list">
                {section?.title && (
                    <>
                        <h2>{section.title}</h2>
                        <div className="student-org-line"></div>
                    </>
                )}

                <RichText html={section?.body} />

                <Loadable loading={loading} error={error} compact>
                    <div className="student-org-grid">
                        {organizations.map((org) => {
                            const card = (
                                <>
                                    {org.logo && <img src={org.logo} alt={org.name} />}
                                    <p>{org.name}</p>
                                </>
                            );

                            return (
                                <article className="student-org-card" key={org.id}>
                                    {org.website_url ? (
                                        <a href={org.website_url} target="_blank" rel="noopener noreferrer">
                                            {card}
                                        </a>
                                    ) : (
                                        card
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </Loadable>
            </section>

            <div className="student-org-brush"></div>
        </div>
    );
}
