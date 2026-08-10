import "../styles/socialpart.css";

import discover from "../assets/youngbm-discover.png";
import championship from "../assets/youngbm-championship.png";
import nationalEvenings from "../assets/national-evenings.png";
import excursions from "../assets/excursions.png";

export default function SocialPartContent() {
    return (
        <main className="social-main">

            <section className="social-intro">
                <h1>Social part</h1>

                <p>
                    Although the congress week is full of activities in the scientific programme,
                    another fundamental part of this congress is the social and cultural part.
                    The participants, together with the organisers and volunteers, will be able to
                    discover the host city and get closer to the host country culture.
                </p>
            </section>

            <section className="social-block social-dark">
                <div className="social-text">
                    <h2>Young BM Discover</h2>
                    <p>
                        In order to get to know the host city, the Young BM Discover is organised
                        during the first day. In the form of a treasure hunt, the participants will
                        discover the most emblematic places in the city centre.
                    </p>
                </div>

                <img src={discover} alt="Young BM Discover" />
            </section>

            <section className="social-block social-dark">
                <img src={championship} alt="Young BM Championship" />

                <div className="social-text">
                    <h2>Young BM Championship</h2>
                    <p>
                        A longstanding tradition of the congress is the annual competition between
                        bachelor’s and master’s participants. Nice and fun games are included,
                        fostering team spirit and connection between participants.
                    </p>
                </div>
            </section>

            <section className="social-block social-dark">
                <div className="social-text">
                    <h2>National Evenings</h2>
                    <p>
                        In order to also get to know where the participants come from, national
                        evenings are organised. Participants present their country and share food,
                        drinks, dances or music.
                    </p>
                </div>

                <img src={nationalEvenings} alt="National Evenings" />
            </section>

            <section className="social-block social-dark">
                <img src={excursions} alt="Excursions" />

                <div className="social-text">
                    <h2>Excursions</h2>
                    <p>
                        Apart from getting to know the host city, it is interesting to discover other
                        places of interest nearby. During a scientific event, participants can discover
                        natural areas, historical gardens, monuments and cultural sites.
                    </p>
                </div>
            </section>

        </main>
    );
}