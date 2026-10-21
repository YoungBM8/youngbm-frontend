import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageComponents from "../components/PageComponents";

import AboutOurCongressContent from "../components/AboutOurCongressContent";

import "../styles/aboutourcongress.css";

export default function AboutOurCongress() {
    return (
        <div className="about-congress-page">
            <Header />
            <Navbar />

            <AboutOurCongressContent />

            <PageComponents slug="about-congress" exclude={["card", "cta"]} />


            <Footer />
        </div>
    );
}
