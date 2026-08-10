import "../styles/collaboratorspartners.css";

import biobalkan from "../assets/biobalkan-collab.png";
import symbiose from "../assets/symbiose-europe.png";
import yeb from "../assets/yeb.png";

const partners = [
    {
        title: "Symposium for Biology Students in Europe (SymBioSE)",
        image: symbiose,
        imageSide: "left",
        text: (
            <>
                <p>
                    SymBioSE meetings have three core goals: to broaden
                    participants&apos; horizons through lectures and excursions, to
                    share information about current university matters, and to
                    connect people through discussions and cultural exchange.
                </p>

                <p>
                    Website:
                    <br />
                    <a
                        href="https://www.symbiose-europe.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.symbiose-europe.org/
                    </a>
                </p>
            </>
        )
    },
    {
        title: "Biobalkan Collab",
        image: biobalkan,
        imageSide: "right",
        text: (
            <>
                <p>
                    Organisation for the Collaboration of Biology and Ecology
                    Students from the Balkans.
                </p>

                <p>
                    Instagram profile:
                    <br />
                    <a
                        href="https://www.instagram.com/biobalkan.collab/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://www.instagram.com/biobalkan.collab/
                    </a>
                </p>
            </>
        )
    },
    {
        title: "Young European Biologists (YEB)",
        image: yeb,
        imageSide: "left",
        text: (
            <>
                <p>
                    Young European Biologists (YEB) is a non-profit organization
                    made by and for Biology students who are either studying or
                    looking to study in Europe.
                </p>

                <p>
                    We look forward to meeting and collaborating with Biology
                    Student Organizations across Europe and hope to become the
                    nexus between them.
                </p>

                <p>
                    Website:
                    <br />
                    <a
                        href="https://youngeuropeanbiologists.wordpress.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://youngeuropeanbiologists.wordpress.com/
                    </a>
                </p>
            </>
        )
    }
];

export default function CollaboratorsPartnersContent() {
    return (
        <main className="collaborators-main">

            <section className="collaborators-hero">
                <div className="collaborators-hero-card">
                    <h1>Collaborators & Partners</h1>

                    <p>
                        Across Europe, the Young BM Network collaborates with organisations
                        that share our vision. These partners are committed to connecting
                        young scientists, fostering cross-border discussions and collaborations,
                        and helping bioscience students build valuable skills from the very
                        start of their careers.
                    </p>
                </div>
            </section>

            <section className="partners-section">
                {partners.map((partner, index) => (
                    <article
                        className={`partner-row ${
                            partner.imageSide === "right" ? "image-right" : "image-left"
                        }`}
                        key={index}
                    >
                        <div className="partner-divider"></div>

                        <div className="partner-content">
                            <div className="partner-image-wrap">
                                <img src={partner.image} alt={partner.title} />
                            </div>

                            <div className="partner-text">
                                <h2>{partner.title}</h2>
                                {partner.text}
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            <div className="collaborators-brush"></div>

        </main>
    );
}