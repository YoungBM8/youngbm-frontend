import maria from "../assets/Maria.jpg";
import neuroholics from "../assets/neuroholics.png";

import "../styles/seminar-speakers.css";

const speakers = [
    {
        name: "Maria Arsenia Adeline Maniori",
        image: maria,
        type: "person",
        description:
            "I graduated in Human Biology (Genetics) from the University of Nicosia in Cyprus. Then I obtained my Masters degree in Cancer Biology from the European University Cyprus. Currently, I hold the position of the LSO at the Cyprus Institute of Neurobiology and Genetics at the Bioinformatics Department. Currently I am part of a HORIZON program that aims to understand the connection between Epstein Barr Virus and autoimmune neurodegenerative diseases like Multiple Sclerosis. Alongside my research, I dive into STEAM education especially in Biology through seminars and lectures to young people and especially girls in an effort to reinforce girls in STEM occupations."
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
                        second online seminar — bringing an unique point of view
                        on the topic of AI in research.
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