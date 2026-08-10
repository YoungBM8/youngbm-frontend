import "../styles/historyofyoungbm.css";

import youngbmLogo from "../assets/ourstory-youngbm-logo.png";
import biolutionaryLogo from "../assets/ourstory-biolutionary-logo.png";
import youngbm2017Logo from "../assets/ourstory-youngbm2017-logo.png";

import malta2017 from "../assets/timeline-malta2017.png";
import reykjavik2018 from "../assets/timeline-reykjavik2018.png";
import madrid2019 from "../assets/timeline-madrid2019.png";
import belgrade2022 from "../assets/timeline-belgrade2022.png";
import tartu2024 from "../assets/timeline-tartu2024.png";
import malta2024 from "../assets/timeline-malta2024.png";
import thessaloniki2025 from "../assets/timeline-thessaloniki2025.png";
import gdansk2026 from "../assets/timeline-gdansk2026.png";
import lisbon2026 from "../assets/timeline-lisbon2026.png";

const timeline = [
    {
        image: malta2017,
        title: "Malta 2017",
        text: "The first edition of the Young BM Congress took place over nine days in July, hosting 52 participants from 18 countries. Attendees explored a broad range of biological topics while enjoying campus life nestled between beach and nature. The success of the event established it as an annual tradition."
    },
    {
        image: reykjavik2018,
        title: "Reykjavik 2018",
        text: "In July 2018, following a proposal from the Icelandic team, students from Iceland, Sweden, and Norway joined forces to host the event. They brought together 62 participants from 21 countries for eight days of exploration across the island's landscapes and a welcoming, friendly atmosphere."
    },
    {
        image: madrid2019,
        title: "Madrid 2019",
        text: "Despite a challenging start to the organizational process, the third edition successfully took place in Madrid. Over eight days at the end of July, 63 participants from 12 countries presented their projects, engaged in discussions on current issues in society and science, and enjoyed the city's vibrant gastronomy and lively atmosphere."
    },
    {
        image: belgrade2022,
        title: "Belgrade 2022",
        text: "The fourth edition was set to take place in Belgrade in the summer of 2020, but had to be canceled due to the Covid-19 pandemic. Postponed to 2022, it finally came to life that summer, welcoming 36 participants from four countries for eight days of scientific and cultural activities across Serbia."
    },
    {
        image: tartu2024,
        title: "Tartu 2024",
        text: "Young BM returned in 2024 with a brand-new image and a new generation of young researchers. Taking place over seven days - from late July to early August - the event gathered 50 participants from 11 countries to enjoy the Estonian summer and decide on the future direction of the congress."
    },
    {
        image: malta2024,
        title: "Malta 2024 (Mol)",
        text: "The inaugural Young BMol congress - focused on students in molecular biosciences - was held in Malta in November 2024, organized by former organizers of past editions. It brought together 42 participants from 15 countries for six days of scientific and social activities amidst the beauty of the Maltese islands."
    },
    {
        image: thessaloniki2025,
        title: "Thessaloniki 2025 (Mol)",
        text: "In the autumn of 2025, Thessaloniki welcomed the next edition of the congress. From September 29th to October 4th, 58 participants from 16 countries came together for six days of scientific exchange and cultural discovery in Greece's historic coastal city."
    },
    {
        image: gdansk2026,
        title: "Gdańsk 2026 (Eco)",
        text: "The edition in Gdańsk took place from March 4th to 8th, gathering 21 participants from 9 countries for a congress focused on ecology. Over five days, attendees enjoyed a dynamic blend of scientific sessions and cultural activities in the historic Baltic port city."
    },
    {
        image: lisbon2026,
        title: "Lisbon 2026 (Mol)",
        text: "Stay tuned..."
    }
];

export default function HistoryOfYoungBMContent() {
    return (
        <main className="history-main">
            <section className="history-hero">
                <div className="history-left">
                    <h1>Our<br />Story</h1>
                    <img src={youngbmLogo} alt="Young BM logo" />
                </div>

                <div className="history-right">
                    <div className="history-right-text">
                        <h2>What is Young BM Network?</h2>

                        <p>
                            Young BM Network was born as an informal association of students at the
                            University of Malta in autumn 2016, with the goal of reviving the annual
                            conference for bioscience students, "Biovolutinary". The conference was
                            held throughout the 1990s until the early 2000s, when it was discontinued
                            due to a lack of sponsors and organizational challenges.
                        </p>

                        <p>
                            Inspired by other young scientist student congresses such as Symbiose and
                            Europharmess, the association set out to give Biovolutinary a facelift and
                            organise a new annual congress called Young BM, which stands for "Young
                            Biologists Matter".
                        </p>

                        <p>
                            Since the first edition of this congress in 2017 in Malta, Young BM has
                            been slowly making its way among young European biologists, with many
                            successful editions so far.
                        </p>
                    </div>
                </div>
            </section>

            <section className="history-bio">
                <img src={biolutionaryLogo} alt="Biolutionary mascot" />

                <p className="history-bio-caption">
                    Illustrated recreation of Biovolutinary&apos;s mascot, Bivo the Bird.
                </p>

                <h2>Biovolutinary, the origin of Young BM Congress</h2>

                <p>
                    The Biovolutinary conference was born from the vision of young biology students at
                    the University of Liverpool. Inspired by the diverse approaches to science education
                    across Europe, they set out to create a shared space where bioscience students could
                    connect, exchange ideas, and learn from one another&apos;s experiences. Their goal was
                    simple: to build a community where students could discuss current and future projects,
                    share knowledge, and forge lasting connections across the continent.
                </p>

                <p>
                    The first edition of Biovolutinary took place in Liverpool in 1990, bringing together
                    40 participants from seven countries. The concept resonated deeply - particularly with
                    Swedish attendees, who took the initiative to host the following year in Stockholm.
                    Over the next decade, the gathering evolved into an annual tradition: a congress where
                    biology took center stage, friendships were formed, and each year brought the discovery
                    of a new European city. After Stockholm in 1991, the congress traveled to Limerick
                    (1992), Hamburg (1993), Sheffield (1994), Tampere (1995), Nijmegen (1996), Vienna
                    (1997), Leuven (1998), returned to Liverpool for its 10th anniversary (1999), and then
                    to Tübingen (2000).
                </p>

                <p>
                    The 2001 edition was planned for Malta, but unfortunately, it could not take place.
                    Organizers made efforts to reschedule for the following year, but ultimately, the
                    congress was canceled. With no other countries able to revive the event in 2002,
                    Biovolutinary came to an indefinite close.
                </p>
            </section>

            <section className="history-new">
                <h2>Young BM, a new beginning...</h2>

                <div className="history-new-content">
                    <div className="history-new-logo-block">
                        <img src={youngbm2017Logo} alt="Young BM 2017 logo" />
                        <p>Logo of Young BM Network used until 2023.</p>
                    </div>

                    <div className="history-new-text">
                        <p>
                            Nearly 15 years later, a group of young biology students from the University
                            of Malta rediscovered Biovolutinary through a former organizer. Inspired by
                            its legacy, they initially set out to revive the congress under its original
                            name and format. However, after several twists and turns, they decided to
                            reimagine it for 2017, giving birth to the Young Biologists Matter Congress
                            and establishing the Young BM Network association to serve as its organizing
                            body.
                        </p>

                        <p>
                            Since 2017, nine editions of the revitalized congress have been held,
                            preserving the original spirit while introducing new features and exchanging
                            ideas with similar European congresses. In 2024, the format evolved further,
                            splitting into two parallel events - each dedicated to a distinct branch of
                            biosciences.
                            <br />
                            The first <strong>Young BMol edition</strong>, focused on molecular
                            biosciences, was held in Malta in November 2024.
                        </p>
                    </div>
                </div>
            </section>

            <section className="history-timeline">
                <div className="timeline-wrapper">
                    {timeline.map((item, index) => (
                        <article className="timeline-card" key={index}>
                            <img src={item.image} alt={item.title} />
                            <div className="timeline-card-text">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}