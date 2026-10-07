import "../styles/sponsors-youngbmol2026.css";

import appliedMicrobiologyLogo from "../assets/applied-microbiology-international.png";
import fculLogo from "../assets/fcul.png";
import fculBiologiaLogo from "../assets/fcul-biologia.jpg";
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
import amorimLogo from "../assets/amorim-cork.png";
import aralabLogo from "../assets/aralab.png";
import stabiloLogo from "../assets/stabilo.png";
import portoEditoraLogo from "../assets/porto-editora.png";
import synlabLogo from "../assets/synlab.png";

/*
    Young BMol 2026 sponsors, grouped by tier and listed in display order.

    To add a logo for a sponsor that has none yet:
      1. put the image in src/assets (e.g. aralab.png)
      2. import it above:  import aralabLogo from "../assets/aralab.png";
      3. set  logo: aralabLogo  on that sponsor below
    Sponsors without a logo are shown with their name instead.
*/
const sponsorTiers = [
    {
        id: "gold",
        title: "Golden Sponsors",
        sponsors: [
            { name: "Instituto Dom Luiz", logo: idlLogo, className: "sponsor-logo--idl" },
            { name: "Sociedade Portuguesa de Genética Humana", logo: spghLogo, className: "sponsor-logo--spgh" },
            { name: "Ordem dos Biólogos", logo: ordemBiologosLogo, className: "sponsor-logo--ordem" },
            { name: "Aralab", logo: aralabLogo, className: "sponsor-logo--aralab" },
            { name: "Carris", logo: carrisLogo, className: "sponsor-logo--carris" },
        ],
    },
    {
        id: "silver",
        title: "Silver Sponsors",
        sponsors: [
            { name: "NEB FCUL", logo: nebLogo, className: "sponsor-logo--neb" },
            { name: "Biology Department – Ciências ULisboa", logo: fculBiologiaLogo, className: "sponsor-logo--fcul-biologia" },
            { name: "Applied Microbiology International", logo: appliedMicrobiologyLogo, className: "sponsor-logo--applied" },
            { name: "Lidel", logo: lidelLogo, className: "sponsor-logo--lidel" },
            { name: "The Navigator Company", logo: navigator, className: "sponsor-logo--navigator" },
            { name: "Stabilo", logo: stabiloLogo, className: "sponsor-logo--stabilo" },
            { name: "Faculdade de Ciências da Universidade de Lisboa", logo: fculLogo, className: "sponsor-logo--fcul" },
        ],
    },
    {
        id: "bronze",
        title: "Bronze Sponsors",
        sponsors: [
            { name: "Porto Editora", logo: portoEditoraLogo, className: "sponsor-logo--porto" },
            { name: "Synlab", logo: synlabLogo, className: "sponsor-logo--synlab" },
            { name: "Amorim Cork", logo: amorimLogo, className: "sponsor-logo--amorim" },
            { name: "Pastéis de Belém", logo: pasteisBelemLogo, className: "sponsor-logo--pasteis" },
            { name: "Tetley", logo: tetley, className: "sponsor-logo--tetley" },
            { name: "Giotto", logo: giotto, className: "sponsor-logo--giotto" },
            { name: "Celeiro", logo: celeiroLogo, className: "sponsor-logo--celeiro" },
        ],
    },
];

function SponsorCard({ sponsor }) {
    return (
        <article className="sponsor-card">
            <div className="sponsor-logo-container">
                {sponsor.logo ? (
                    <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className={`sponsor-logo ${sponsor.className || ""}`}
                        loading="lazy"
                    />
                ) : (
                    <span className="sponsor-logo-placeholder">
                        {sponsor.name}
                    </span>
                )}
            </div>

            <h2>{sponsor.name}</h2>
        </article>
    );
}

export default function SponsorsContent({
    eventName = "Young BMol 2026",
    tiers = sponsorTiers,
    emptyMessage = "Sponsors will be announced soon.",
}) {
    const visibleTiers = tiers.filter((tier) => tier.sponsors.length > 0);
    const hasSponsors = visibleTiers.length > 0;

    return (
        <main className="sponsors-main">
            <section className="sponsors-intro">
                <span className="sponsors-eyebrow">
                    {eventName}
                </span>

                <h1>Our Sponsors &amp; Partners</h1>

                <p>
                    {hasSponsors
                        ? `We are grateful to all the organisations and companies supporting ${eventName}.`
                        : emptyMessage}
                </p>
            </section>

            {visibleTiers.map((tier) => (
                <section
                    key={tier.id}
                    className={`sponsors-tier sponsors-tier--${tier.id}`}
                    aria-labelledby={`sponsors-tier-${tier.id}`}
                >
                    <header className="sponsors-tier-header">
                        <span className="sponsors-tier-medal" aria-hidden="true" />
                        <h2 id={`sponsors-tier-${tier.id}`}>{tier.title}</h2>
                    </header>

                    <div className="sponsors-grid">
                        {tier.sponsors.map((sponsor) => (
                            <SponsorCard
                                key={sponsor.name}
                                sponsor={sponsor}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </main>
    );
}
