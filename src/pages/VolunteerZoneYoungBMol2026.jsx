import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VolunteerZoneContent from "../components/VolunteerZoneContent";

import "../styles/volunteerzone-youngbmol2026.css";

export default function VolunteerZoneYoungBMol2026() {
    return (
        <div className="volunteer-page">
            <Header />
            <Navbar />
            <VolunteerZoneContent />
            <Footer />
        </div>
    );
}