import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticipantProfileContent from "../components/ParticipantProfileContent";

import "../styles/participantprofile.css";

export default function ParticipantProfile() {
    return (
        <div className="participant-profile-page">
            <Header />
            <Navbar />
            <ParticipantProfileContent />
            <Footer />
        </div>
    );
}