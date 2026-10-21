import { API, useApi } from "../../api/client";
import { Loadable } from "../PageState";
import RichText from "../RichText";
import BlockHeading from "./BlockHeading";

import "../../styles/collaboratorspartners.css";

export default function PartnersBlock({ section }) {
    const { data, loading, error } = useApi(API.partners);

    const partners = data ?? [];

    return (
        <div className="collaborators-block">
            <BlockHeading section={section} />

            <Loadable loading={loading} error={error} compact>
                <section className="partners-section">
                    {partners.map((partner) => (
                        <article
                            className={`partner-row ${
                                partner.image_side === "right" ? "image-right" : "image-left"
                            }`}
                            key={partner.id}
                        >
                            <div className="partner-divider"></div>

                            <div className="partner-content">
                                <div className="partner-image-wrap">
                                    {partner.logo && <img src={partner.logo} alt={partner.name} />}
                                </div>

                                <div className="partner-text">
                                    <h2>{partner.name}</h2>
                                    <RichText html={partner.description} />
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </Loadable>

            <div className="collaborators-brush"></div>
        </div>
    );
}
