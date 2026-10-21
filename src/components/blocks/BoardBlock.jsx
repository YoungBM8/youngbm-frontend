import { API, useApi } from "../../api/client";
import { Loadable } from "../PageState";
import BlockHeading from "./BlockHeading";

import "../../styles/board2026.css";

const LINKEDIN_PATH =
    "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8A53.79 53.79 0 0 1 53.79 0a53.79 53.79 0 1 1 0 108.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z";

export default function BoardBlock({ section }) {
    const { data, loading, error } = useApi(API.board);

    const members = data?.members ?? [];

    return (
        <div className="board2026-block">
            <BlockHeading section={section} />

            <Loadable loading={loading} error={error} compact>
                <section className="board2026-grid">
                    {members.map((member) => (
                        <article className="board2026-card" key={member.id}>

                            {member.photo && (
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="board2026-member-image"
                                />
                            )}

                            <div className="board2026-card-content">
                                <h3>{member.role}</h3>
                                <h2>{member.name}</h2>

                                <p>{member.bio}</p>

                                <div className="board2026-contact">

                                    {member.linkedin_url && (
                                        <a
                                            href={member.linkedin_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="board2026-linkedin"
                                            aria-label={`${member.name} LinkedIn`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                                <path d={LINKEDIN_PATH} />
                                            </svg>
                                        </a>
                                    )}

                                    {member.email && (
                                        <span>
                                            email:{" "}
                                            <a href={`mailto:${member.email}`}>{member.email}</a>
                                        </span>
                                    )}

                                </div>
                            </div>

                        </article>
                    ))}
                </section>
            </Loadable>
        </div>
    );
}
