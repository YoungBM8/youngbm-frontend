import "../styles/academicpart.css";

import academicHero from "../assets/academic-hero.png";
import oral from "../assets/oral-presentations.png";
import poster from "../assets/poster-presentations.png";
import workshops from "../assets/workshops.png";
import debate from "../assets/debate-sessions.png";
import keynote from "../assets/keynote-lecturers.png";
import journal from "../assets/journal-club.png";
import organizations from "../assets/student-organizations.png";

const sections = [
    {
        title: "Oral Presentations",
        text: "A very effective way to present your project, work or thesis. At this congress, presentations occupy a large part of the scientific programme. Depending on the topics the participants will talk about, they will be divided into thematic blocks. Presentations last 10 minutes plus 5 minutes for questions.",
        image: oral,
        layout: "image-left",
        dark: true
    },
    {
        title: "Poster presentations",
        text: "If, on the other hand, you want to present your work to the other participants in a more dynamic way, the poster is a good option. Depending on the number of posters registered, there will be one or two poster sessions where participants can come, see the posters and ask their authors about the project, doubts and questions.",
        image: poster,
        layout: "text-left",
        dark: false
    },
    {
        title: "Workshops",
        text: "If you want to delve deeper into your research, discuss a trending topic in science, or create a space for dialogue where you can help fellow participants with your skills, organising a workshop is the perfect choice. Each workshop session lasts approximately 45 minutes to one hour.",
        image: workshops,
        layout: "image-left",
        dark: true
    },
    {
        title: "Debate sessions",
        text: "These sessions were created as a space where, as the name itself indicates, the participants can discuss previously proposed topics. This helps to improve debating skills and to get to know different opinions on current science topics and their relationship with society.",
        image: debate,
        layout: "text-left",
        dark: false
    },
    {
        title: "Keynote lecturers",
        text: "Apart from the active participation of students, professors and researchers from the host city’s universities are invited to give a lecture or workshop at each edition. It is also a way to get to know examples of research being carried out. A space is reserved in the programme for them.",
        image: keynote,
        layout: "image-left",
        dark: true
    },
    {
        title: "Journal Club",
        text: "Some participants may not have their own research to present yet. For this reason, we offer the opportunity to actively take part in the congress by presenting and leading a discussion on a hot topic paper in science.",
        image: journal,
        layout: "text-left",
        dark: false
    },
    {
        title: "Student Organizations Presentations",
        text: "Representatives from various student organizations related to fields such as molecular biology, ecology, biotechnology, pharmacy, or medicine, and operating at university, local, or national level, are invited to present themselves to participants. This creates a space for networking, mutual learning, and the possibility of establishing future collaborations.",
        image: organizations,
        layout: "image-left",
        dark: true
    }
];

export default function AcademicPartContent() {
    return (
        <main className="academic-main">

            <section
                className="academic-hero"
                style={{ backgroundImage: `url(${academicHero})` }}
            >
                <div className="academic-intro-card">
                    <h1>Academic part</h1>

                    <p>
                        At the heart of the congress lies its scientific programme, and the true
                        protagonists of this programme are the participants themselves. All attendees
                        are encouraged to actively contribute by presenting their projects and theses.
                        For bachelor&apos;s and master&apos;s students who may not yet have extensive
                        research experience, this is an excellent opportunity to develop and practise
                        presentation skills.
                    </p>

                    <p>
                        For PhD candidates and postdocs, it is a chance to give back by offering
                        workshops that can help guide and inspire younger participants. This continuous
                        exchange between academic levels fosters a mutual learning environment in a
                        friendly and supportive atmosphere.
                    </p>
                </div>
            </section>

            {sections.map((item, index) => (
                <section
                    key={index}
                    className={`academic-section ${item.dark ? "academic-dark" : "academic-light"} ${index === 0 ? "academic-first-section" : ""}`}
                >
                    <div className={`academic-row ${item.layout}`}>
                        <img src={item.image} alt={item.title} />

                        <div className="academic-text">
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    </div>
                </section>
            ))}

        </main>
    );
}