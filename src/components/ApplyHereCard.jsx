import { useSite } from "../context/useSite";
import RichText from "./RichText";

import "../styles/applyhere-youngbmol2026.css";

export default function ApplyHereCard() {
    const { current } = useSite();

    const congress = current.congress;

    if (!congress?.city_intro_title && !congress?.city_intro) {
        return null;
    }

    return (
        <section className="applyhere-lisbon-section">
            <div className="applyhere-lisbon-card">
                {congress.city_intro_title && <h2>{congress.city_intro_title}</h2>}

                <RichText html={congress.city_intro} />
            </div>
        </section>
    );
}
