import "../styles/sponsors-youngbmol2026.css";

import appliedMicrobiologyLogo from "../assets/applied-microbiology-international.png";
import fculLogo from "../assets/fcul.png";
import carrisLogo from "../assets/carris.png";
import pasteisBelemLogo from "../assets/pasteis-de-belem.png";
import idlLogo from "../assets/idl.png";
import ordemBiologosLogo from "../assets/ordem-biologos.png";
import nebLogo from "../assets/neb.png";
import spghLogo from "../assets/spgh.png";
import celeiroLogo from "../assets/celeiro.png";
import lidelLogo from "../assets/lidel.png";
import navigator from "../assets/Navigator.png";
import tetley from "../assets/Tetley.png";
import giotto from "../assets/Giotto.png";

const sponsors = [
    {
        name: "Applied Microbiology International",
        logo: appliedMicrobiologyLogo,
        className: "sponsor-logo--applied",
    },
    {
        name: "Faculdade de Ciências da Universidade de Lisboa",
        logo: fculLogo,
        className: "sponsor-logo--fcul",
    },
    {
        name: "Carris",
        logo: carrisLogo,
        className: "sponsor-logo--carris",
    },
    {
        name: "Pastéis de Belém",
        logo: pasteisBelemLogo,
        className: "sponsor-logo--pasteis",
    },
    {
        name: "Instituto Dom Luiz",
        logo: idlLogo,
        className: "sponsor-logo--idl",
    },
    {
        name: "Ordem dos Biólogos",
        logo: ordemBiologosLogo,
        className: "sponsor-logo--ordem",
    },
    {
        name: "NEB FCUL",
        logo: nebLogo,
        className: "sponsor-logo--neb",
    },
    {
        name: "Sociedade Portuguesa de Genética Humana",
        logo: spghLogo,
        className: "sponsor-logo--spgh",
    },
    {
        name: "Celeiro",
        logo: celeiroLogo,
        className: "sponsor-logo--celeiro",
    },
    {
        name: "Lidel",
        logo: lidelLogo,
        className: "sponsor-logo--lidel",
    },
    {
        name: "The Navigator Company",
        logo: navigator,
        className: "sponsor-logo--navigator",
    },
    {
        name: "Tetley",
        logo: tetley,
        className: "sponsor-logo--tetley",
    },
    {
        name: "Giotto",
        logo: giotto,
        className: "sponsor-logo--giotto",
    },
];

export default function SponsorsContent() {
    return (
        <main className="sponsors-main">
            <section className="sponsors-intro">
                <span className="sponsors-eyebrow">
                    Young BMol 2026
                </span>

                <h1>Our Sponsors &amp; Partners</h1>

                <p>
                    We are grateful to all the organisations and companies
                    supporting Young BMol 2026.
                </p>
            </section>

            <section
                className="sponsors-grid"
                aria-label="Young BMol 2026 sponsors and partners"
            >
                {sponsors.map((sponsor) => (
                    <article
                        className="sponsor-card"
                        key={sponsor.name}
                    >
                        <div className="sponsor-logo-container">
                            <img
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}
                                className={`sponsor-logo ${sponsor.className}`}
                                loading="lazy"
                            />
                        </div>

                        <h2>{sponsor.name}</h2>
                    </article>
                ))}
            </section>
        </main>
    );
}