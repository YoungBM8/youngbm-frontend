import miguel from "../assets/miguel.jpg";
import andreas from "../assets/andreas.jpg";
import rocio from "../assets/rocio.jpg";
import igem from "../assets/igem.png";
import neuroholics from "../assets/neuroholics.png";

import "../styles/seminar-speakers.css";

const speakers = [
    {
        name: "Miguel López Molina",
        image: miguel,
        type: "person",
        description:
            "I graduated in Biochemistry from the Autonomous University of Madrid, where I am currently pursuing a Diploma in Social Communication, Science Communication, and Scientific Advising. My professional goal is to act as a bridge between research institutes and society, helping to make scientific knowledge more accessible while promoting scientific literacy as a universal right."
    },
    {
        name: "Andreas Andreou",
        image: andreas,
        type: "person",
        description:
            "Synthetic biologist and biotech entrepreneur working at the intersection of SynBio, AI-driven drug discovery, and translational innovation. Co-founder of Prozymi Biolabs and contributor to CellCodex, focused on building technologies that move beyond academia into real-world impact."
    },
    {
        name: "Rocío Vázquez Martínez",
        image: rocio,
        type: "person",
        description:
            "I am a first-year PhD researcher at the University of Zaragoza and the Institute of Nanoscience and Materials of Aragón, working on a novel breast cancer therapy based on magnetic hyperthermia. My research focuses on targeting iron oxide nanoparticles to cancer cell mitochondria and inducing localized heating through alternating magnetic fields."
    },
    {
        name: "iGEM Thessaloniki",
        image: igem,
        type: "logo",
        description:
            "iGEM Thessaloniki is an interdisciplinary student team from Aristotle University of Thessaloniki. Since 2017, the team has developed projects addressing real-world challenges while promoting scientific communication, sustainability and innovation through synthetic biology."
    },
    {
        name: "Neuroholics",
        image: neuroholics,
        type: "logo",
        description:
            "Neuroholics is a non-profit organization dedicated to increasing public awareness of neuroscience through educational activities, workshops and science communication initiatives that make brain research accessible to everyone."
    }
];

export default function SeminarSpeakersContent() {
    return (
        <main className="seminar-speakers-main">

            {/* HERO */}

            <section className="seminar-speakers-hero">
                <div className="seminar-speakers-hero-content">

                    <span className="seminar-speakers-label">
                        Young BM Seminar
                    </span>

                    <h1>Speakers</h1>

                    <p>
                        We are excited to introduce all the speakers for our
                        first online seminar — a group of inspiring young
                        scientists and science communicators, each bringing
                        a unique perspective on building a career in science.
                    </p>

                </div>
            </section>

            {/* SPEAKERS */}

            <section className="seminar-speakers-list">

                {speakers.map((speaker, index) => (

                    <article
                        key={speaker.name}
                        className={`speaker-section ${
                            index % 2 === 0
                                ? "speaker-normal"
                                : "speaker-reverse"
                        }`}
                    >

                        {/* IMAGE */}

                        <div
                            className={`speaker-image-side speaker-background-${
                                index % 3
                            }`}
                        >
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className={
                                    speaker.type === "logo"
                                        ? "speaker-image speaker-logo"
                                        : "speaker-image speaker-person"
                                }
                            />
                        </div>

                        {/* TEXT */}

                        <div className="speaker-text-side">

                            <div className="speaker-text-content">

                                <h2>
                                    {speaker.name}
                                </h2>

                                <p>
                                    {speaker.description}
                                </p>

                            </div>

                        </div>

                    </article>

                ))}

            </section>

        </main>
    );
}