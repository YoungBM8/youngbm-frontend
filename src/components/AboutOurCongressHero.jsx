import "../styles/aboutourcongress.css";

import logo2017 from "../assets/2017Malta-bmol1.png";
import logo2018 from "../assets/2018Rejkjavik-bmol10.png";
import logo2019 from "../assets/2019Madrid-bmol2.png";
import logoBelgrade from "../assets/2022Belgrade-bmol9.png";
import logo2024Malta from "../assets/2024Malta-bmol4.png";
import logo2024Tartu from "../assets/2024Tartu-bmol3.png";
import logo2025Online from "../assets/2025online-bmol7.png";
import logoGdansk from "../assets/2026Gdansk-bmol5.png";
import logoLisbon from "../assets/2026Lisbon-bmol6.png";
import logoThess from "../assets/Thess-bmol8.png";

export default function AboutOurCongressHero() {
    return (
        <section className="about-hero">
            <h1>Young BM Congress</h1>

            <div className="about-hero-layout">

                <div className="about-logos-column left">
                    <img src={logo2017} alt="Young BM 2017 Malta" className="about-logo logo-2017" />
                    <img src={logo2019} alt="Young BM 2019 Madrid" className="about-logo logo-2019" />

                    <div className="about-left-bottom">
                        <img src={logo2024Tartu} alt="Young BM Tartu 2024" className="about-logo logo-tartu" />
                        <img src={logo2024Malta} alt="Young BMol Malta 2024" className="about-logo logo-malta2024" />
                    </div>
                </div>

                <div className="about-text-center">
                    <p>
                        The core activity of the network revolves around this event. The main
                        objective of the congress is to bring together young bioscience students
                        from across Europe in one place, facilitating information exchange and
                        networking to support their future careers. As the name "Young Biologists
                        Matter" suggests, the congress is primarily aimed at students at different
                        academic levels - including undergraduates, Master's students, PhD
                        candidates, and postdocs - making the event richer and more dynamic thanks
                        to this diversity of profiles.
                    </p>

                    <p>
                        Holding the congress in a different country each year also helps strengthen
                        connections among participants and fosters a growing, pan-European
                        community. As a result, the experience is equally rewarding for organisers,
                        volunteers, and attendees alike.
                    </p>

                    <p>
                        This week-long event is structured around a full programme of scientific,
                        cultural, and social activities.
                    </p>

                    <div className="about-bottom-logos">
                        <img src={logoGdansk} alt="Young BMeco Gdansk 2026" className="about-logo logo-gdansk" />
                        <img src={logoLisbon} alt="Young BMol Lisbon 2026" className="about-logo logo-lisbon" />
                    </div>
                </div>

                <div className="about-logos-column right">
                    <img src={logo2018} alt="Young BM 2018 Reykjavik" className="about-logo logo-2018" />
                    <img src={logoBelgrade} alt="Young BM Belgrade" className="about-logo logo-belgrade" />

                    <div className="about-right-bottom">
                        <img src={logo2025Online} alt="Young BM Eco Online 2025" className="about-logo logo-online2025" />
                        <img src={logoThess} alt="Young BMol Thessaloniki 2025" className="about-logo logo-thess" />
                    </div>
                </div>

            </div>
        </section>
    );
}