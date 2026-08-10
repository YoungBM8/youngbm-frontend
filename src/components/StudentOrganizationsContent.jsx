import "../styles/studentorganizations.css";

import pfsb from "../assets/pfsb.png";
import josif from "../assets/brs-josif-pandic.png";
import aebe from "../assets/aebe.png";
import usbbih from "../assets/ussbbh.png";
import scubed from "../assets/scubed.png";
import helix from "../assets/helix.png";
import neuroholics from "../assets/neuroholics.png";
import bsrs from "../assets/bssr.png";
import botanika from "../assets/botanika.png";
import nidsbe from "../assets/nidsbe.png";

const organizations = [
    {
        image: pfsb,
        name: "Panhellenic Student Conference of Bioscientists (PFSB)"
    },
    {
        image: josif,
        name: "Biological Research Society “Josif Pančić”, Serbia"
    },
    {
        image: aebe,
        name: "Student Association of Biosciences Students of Spain (AEBE)"
    },
    {
        image: usbbih,
        name: "Association of biology students in Bosnia - Herzegovina (USBBIH)"
    },
    {
        image: scubed,
        name: "The Science Students' Society, Malta (S-Cubed)"
    },
    {
        image: helix,
        name: "Association for biotechnology students at UiT, Norway (Helix)"
    },
    {
        image: neuroholics,
        name: "NeuroHolics, Greece"
    },
    {
        image: bsrs,
        name: "Biology Students' Research Society, N. Macedonia (BSRS)"
    },
    {
        image: botanika,
        name: "Biotanika Linjeforening NMBU, Norway"
    },
    {
        image: nidsbe,
        name: "NIDSBE Josif Pančić Serbia"
    }
];

export default function StudentOrganizationsContent() {
    return (
        <main className="student-org-main">

            <section className="student-org-intro">
                <h1>Student Organisations: Connect &amp; Collaborate</h1>
                <div className="student-org-line"></div>

                <p>
                    Since 2024, our events have featured a dedicated session called
                    "Student Organisation Presentations". In this space, student
                    organisations connected to fields such as molecular biology,
                    ecology, biotechnology, pharmacy, or medicine - whether at
                    university, local, or national level - are invited to introduce
                    themselves to participants. It is an opportunity to network,
                    connect with like-minded peers, and explore potential collaborations.
                </p>

                <p>
                    On this page, you will find the organisations that have taken
                    part in this session since Young BMol 2024, along with their
                    contact information.
                </p>
            </section>

            <section className="student-org-list">
                <h2>Young BM participating student organizations</h2>
                <div className="student-org-line"></div>

                <div className="student-org-grid">
                    {organizations.map((org) => (
                        <article className="student-org-card" key={org.name}>
                            <img src={org.image} alt={org.name} />
                            <p>{org.name}</p>
                        </article>
                    ))}
                </div>
            </section>

            <div className="student-org-brush"></div>

        </main>
    );
}