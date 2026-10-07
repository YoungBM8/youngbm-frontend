import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SponsorsContent from "../components/SponsorsContent";

import "../styles/sponsors-youngbmol2026.css";

// Sponsors for Young BMEco 2027 (Tirana).
// Add sponsor objects here ({ name, logo, className }) once they are confirmed.
const sponsorsYoungBMEco2027 = [];

export default function SponsorsYoungBMEco2027() {
    return (
        <div className="sponsors-page">
            <Header />
            <Navbar />
            <SponsorsContent
                eventName="Young BMEco 2027"
                sponsorList={sponsorsYoungBMEco2027}
                emptyMessage="Sponsors and partners of Young BMEco 2027 will be announced soon. Interested in supporting the congress? Get in touch with us through the Contact page."
            />
            <Footer />
        </div>
    );
}
