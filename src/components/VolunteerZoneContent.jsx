import "../styles/volunteerzone-youngbmol2026.css";

export default function VolunteerZoneContent() {
    return (
        <main className="volunteer-main">

            <section className="volunteer-intro">
                <h1>Volunteer zone</h1>

                <p>
                    As a volunteer, you will have the opportunity to participate in the event
                    behind the scenes. Various organisational tasks — such as social media,
                    support to the organisers, assistance at the university, accommodation,
                    excursions, and social programme activities — require extra help from local students.
                </p>

                <p className="volunteer-highlight">
                    Please note that only students from the host country are eligible to volunteer.
                </p>

                <p>
                    The responsibility of the volunteer lies in a firm commitment to participate
                    when required, before and during the event. Schedules and preferred tasks
                    will be agreed upon in advance with each volunteer.
                </p>

                <a
                    href="https://forms.gle/4548qu6xzYf4RjDn6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="volunteer-button"
                >
                    Volunteer form
                </a>
            </section>

            <section className="volunteer-teams">
                <h2>Volunteer teams</h2>

                <div className="teams-grid">

                    <div className="team-card">
                        <h3>
                            Transport, Welcome and Trips
                            <br />
                            Volunteer Team
                        </h3>

                        <ul>
                            <li>Assisting participants with airport and station transfers</li>
                            <li>Welcoming participants and helping with check-in</li>
                            <li>Guiding and accompanying groups during social trips</li>
                        </ul>
                    </div>

                    <div className="team-card">
                        <h3>
                            University and Academic
                            <br />
                            Program Volunteer Team
                        </h3>

                        <ul>
                            <li>Assisting with the congress registration desk</li>
                            <li>Helping with lecture halls and presentation rooms</li>
                            <li>Supporting oral and poster presentations and academic sessions</li>
                            <li>Supporting the organisation of workshops and academic discussions</li>
                        </ul>
                    </div>

                    <div className="team-card">
                        <h3>
                            Social Program Volunteer
                            <br />
                            Team
                        </h3>

                        <ul>
                            <li>Assisting with the preparation and setup of social events</li>
                            <li>Helping to coordinate group activities and ice-breaking sessions</li>
                            <li>Supporting networking moments during the congress</li>
                        </ul>
                    </div>

                </div>
            </section>

            <div className="volunteer-brush"></div>

        </main>
    );
}