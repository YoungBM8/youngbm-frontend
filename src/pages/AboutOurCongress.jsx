import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutOurCongressHero from "../components/AboutOurCongressHero";
import AboutOurCongressStructure from "../components/AboutOurCongressStructure";
import AboutOurCongressCollaborateBox from "../components/AboutOurCongressCollaborateBox";

import "../styles/aboutourcongress.css";

export default function AboutOurCongress() {
    return (
        <div className="about-congress-page">
            <Header />
            <Navbar />

            <AboutOurCongressHero />
            <AboutOurCongressStructure />
            <AboutOurCongressCollaborateBox />

            <Footer />
        </div>
    );
}