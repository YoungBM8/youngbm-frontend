import "../styles/board2026.css";

import andreFreitas from "../assets/andre-freitas.jpg";
import anaRaquel from "../assets/ana-raquel-augusto.jpg";
import aleksandra from "../assets/aleksandra-stjepanovic.jpg";
import errika from "../assets/errika-sylai.jpg";
import klea from "../assets/klea-halili.jpg";
import marija from "../assets/marija-andelkovic.jpg";
import mara from "../assets/mara-vukicevic.jpg";
import nuria from "../assets/nuria-munoz.jpg";

const members = [
    {
        image: mara,
        role: "President",
        name: "Mara Vukićević",
        text: "A 3rd-year bachelor's student at the University of Novi Sad. I joined Young BM after finding a community passionate about science and networking. As this year's president, I am committed to creating and working on new projects.",
        email: "maravuk6@gmail.com",
        linkedin: "https://www.linkedin.com/in/mara-vuki%C4%87evi%C4%87-439778288/"
    },
    {
        image: anaRaquel,
        role: "Vice President and Treasurer",
        name: "Ana Raquel Augusto",
        text: "I am currently in my second year of a Bachelor's in Biology at the University of Lisbon. I joined Young BM because I wanted to meet people who share my passion for biology and get involved in projects that make a real difference for young researchers.",
        email: "raquel.parente2006@gmail.com",
        linkedin: "https://www.linkedin.com/in/ana-raquel-augusto-04b4a8330/"
    },
    {
        image: aleksandra,
        role: "Social Media Coordinator",
        name: "Aleksandra Stjepanović",
        text: "I am a final-year Bachelor's student of Biology and an undergraduate researcher at the University of Novi Sad. I joined Young BM in hopes of finding international research partners and making lifelong connections.",
        email: "stjepanovic.aleksandra.edu@gmail.com",
        linkedin: "https://www.linkedin.com/in/aleksandra-stjepanovi%C4%87-8a01a03b9/"
    },
    {
        image: klea,
        role: "Social Media Assistant",
        name: "Klea Halili",
        text: "Biotechnology student specialising in neuroscience and biomedical innovation. Passionate about advancing research on brain function and neurological disorders and engaging with communities that foster scientific curiosity and collaboration.",
        email: "klea.armyy2@gmail.com",
        linkedin: "https://www.linkedin.com/in/klea-halili-8611641a7/"
    },
    {
        image: nuria,
        role: "Alumni and Event Coordinator",
        name: "Núria Ardid Muñoz",
        text: "Originally from Spain, I studied Biochemistry at the Autonomous University of Madrid and am now pursuing my Master's in Molecular Biomedicine at the University of Copenhagen. I joined Young BM to collaborate with fellow young scientists who share my passion for research and drive to move science forward.",
        email: "nuria.munoz@sund.ku.dk",
        linkedin: "https://www.linkedin.com/in/nuria-ardid-mu%C3%B1oz/"
    },
    {
        image: errika,
        role: "Alumni and Event Assistant",
        name: "Errika Sylai",
        text: "I am a fourth-year undergraduate student in the Department of Biology at the Aristotle University of Thessaloniki. I joined the board after participating in the Young BMol 2024 edition, inspired by the opportunity to connect with international students and exchange knowledge.",
        email: "errikasylai16@gmail.com",
        linkedin: "https://www.linkedin.com/in/errika-sylai-2ab281336/"
    },
    {
        image: marija,
        role: "IT and Partnership Coordinator",
        name: "Marija Anđelković",
        text: "A second-year PhD student at the University of Belgrade, Faculty of Biology, specialising in molecular microbiology and biotechnology. I joined Young BM in 2025 with a passion for helping young students and contributing to a supportive scientific community.",
        email: "mandjelkovic910@gmail.com",
        linkedin: "http://www.linkedin.com/in/marija-anđelković2000"
    },
    {
        image: andreFreitas,
        role: "IT and Partnership Assistant",
        name: "André Freitas",
        text: "I'm currently in the 3rd year of my Bachelor's in Data Science at ISCTE, in Lisbon. I joined Young BM because I wanted to experience what it is like to be part of an international organization.",
        email: "andre.manuel.ramos.freitas@gmail.com",
        linkedin: "https://www.linkedin.com/in/andr%C3%A9-freitas-13955737a/"
    }
];

export default function Board2026Content() {
    return (
        <main className="board2026-main">

            <section className="board2026-title-section">
                <h1>Meet The Team</h1>
                <div className="board2026-title-line"></div>
            </section>

            <section className="board2026-grid">
                {members.map((member) => (
                    <article className="board2026-card" key={member.name}>

                        <img
                            src={member.image}
                            alt={member.name}
                            className="board2026-member-image"
                        />

                        <div className="board2026-card-content">
                            <h3>{member.role}</h3>
                            <h2>{member.name}</h2>

                            <p>{member.text}</p>

                            <div className="board2026-contact">

                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="board2026-linkedin"
                                    aria-label={`${member.name} LinkedIn`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        fill="currentColor"
                                    >
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8A53.79 53.79 0 0 1 53.79 0a53.79 53.79 0 1 1 0 108.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                                    </svg>
                                </a>

                                <span>
                                    email:{" "}
                                    <a href={`mailto:${member.email}`}>
                                        {member.email}
                                    </a>
                                </span>

                            </div>
                        </div>

                    </article>
                ))}
            </section>

        </main>
    );
}