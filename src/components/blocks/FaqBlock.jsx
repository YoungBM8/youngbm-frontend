import { API, useApi } from "../../api/client";
import { Loadable } from "../PageState";
import RichText from "../RichText";
import BlockHeading from "./BlockHeading";

import "../../styles/faq.css";

function FaqList({ items }) {
    return (
        <div className="faq-container">
            {items.map((faq) => (
                <article className="faq-item" key={faq.id}>
                    <h2>{faq.question}</h2>
                    <RichText html={faq.answer} className="faq-answer" />
                </article>
            ))}
        </div>
    );
}

export default function FaqBlock({ section }) {
    const { data, loading, error } = useApi(API.faq);

    const items = data ?? [];
    const top = items.filter((faq) => faq.group === "top");
    const bottom = items.filter((faq) => faq.group !== "top");

    return (
        <div className="faq-block">
            <BlockHeading section={section} />

            <Loadable loading={loading} error={error} compact>
                {top.length > 0 && (
                    <section className="faq-top-section">
                        <FaqList items={top} />
                    </section>
                )}

                <section className="faq-bottom-section">
                    {bottom.length > 0 && <FaqList items={bottom} />}
                    <div className="faq-brush"></div>
                </section>
            </Loadable>
        </div>
    );
}
