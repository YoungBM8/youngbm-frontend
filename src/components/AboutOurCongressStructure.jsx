import { Link } from "react-router-dom";
import "../styles/aboutourcongress.css";

export default function AboutOurCongressStructure() {
    return (
        <section className="about-structure">
            <h2>Congress structure</h2>

            <div className="structure-cards">

                <div className="structure-card">
                    <h3>Academic part</h3>
                    <p>
                        The core of the event: a space to share and learn from other
                        participants about their projects and theses, make valuable contacts,
                        and exchange ideas across the biosciences.
                    </p>
                    <Link to="/about/academic-part">Read more</Link>
                </div>

                <div className="structure-card">
                    <h3>Social Part</h3>
                    <p>
                        The congress is also complemented by excursions and activities that
                        give participants the opportunity to get to know each other and the
                        host city and country.
                    </p>
                    <Link to="/about/social-part">Read more</Link>
                </div>

                <div className="structure-card">
                    <h3>Participant profile</h3>
                    <p>
                        Our main aim is to foster scientific enrichment by building a diverse
                        community where students from all biology-related disciplines feel
                        they belong.
                    </p>
                    <Link to="/about/participant-profile">Read more</Link>
                </div>

            </div>

            <div className="about-divider"></div>
        </section>
    );
}