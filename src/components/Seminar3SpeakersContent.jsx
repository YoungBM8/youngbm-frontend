import simran from "../assets/simran-ramchandani.png";

import "../styles/seminar-speakers.css";

const speakers = [
    {
        name: "Simran Ramchandani",
        image: simran,
        type: "person",
        description:
            "Simran Ramchandani is a biologist and science communicator with a background in biotechnology. She has worked in science, health and technology communication, including projects with the European Space Agency (ESA), and also teaches at Universidad Europea de Madrid. Through @Sim_biotica, she makes complex science accessible and engaging for digital audiences."
    }
];

export default function Seminar3SpeakersContent() {
    return (
        <main className="seminar-speakers-main">

            {/* HERO */}

            <section className="seminar-speakers-hero">
                <div className="seminar-speakers-hero-content">

                    <span className="seminar-speakers-label">
                        Young BM Seminar
                    </span>

                    <h1>Speaker</h1>

                    <p>
                        Meet the speaker of our third online seminar,
                        &ldquo;Communicating Science in the Digital Era:
                        Turning Expertise into Impact&rdquo; on the 24th of
                        October 2026.
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