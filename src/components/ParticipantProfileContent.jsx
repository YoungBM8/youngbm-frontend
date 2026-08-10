import "../styles/participantprofile.css";

import youngbmol from "../assets/participant-youngbmol.png";
import youngbmeco from "../assets/participant-youngbmeco.png";
import groupA from "../assets/participant-group-a-rookies.png";
import groupB from "../assets/participant-group-b-seniors.png";

const cards = [
    {
        image: youngbmol,
        title: "Young BMol",
        text: "In Autumn, the event focuses mainly on molecular biology and related biosciences. Participants from different backgrounds are welcome to share projects, learn and connect."
    },
    {
        image: youngbmeco,
        title: "Young BMEco",
        text: "In Summer, the event focuses mainly on ecology, environment, sustainability and related areas, bringing together students interested in biological sciences."
    },
    {
        image: groupA,
        title: "Group A - The Rookies",
        text: "This group includes Bachelor’s and Master’s students who have just started their scientific journey and are currently looking for a direction."
    },
    {
        image: groupB,
        title: "Group B - The Seniors",
        text: "This group includes PhD students and postdocs. They are encouraged to share their research experience and guide younger participants."
    }
];

export default function ParticipantProfileContent() {
    return (
        <main className="participant-profile-main">
            <section className="participant-profile-hero">
                <div className="participant-profile-intro">
                    <h1>Participant profile</h1>

                    <p>
                        To facilitate the integration of different disciplines and academic
                        levels within the congress, two separate events now take place during
                        the academic year. Additionally, during the application period,
                        applicants are divided into Group A and B to streamline the process.
                    </p>
                </div>
            </section>

            <section className="participant-profile-content">
                <div className="participant-profile-grid">
                    {cards.map((card, index) => (
                        <article className="participant-profile-card" key={index}>
                            <img src={card.image} alt={card.title} />
                            <h2>{card.title}</h2>
                            <p>{card.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <div className="participant-profile-brush"></div>
        </main>
    );
}