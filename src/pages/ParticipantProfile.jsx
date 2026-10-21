import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageComponents from "../components/PageComponents";
import ParticipantProfileContent from "../components/ParticipantProfileContent";

import "../styles/participantprofile.css";

export default function ParticipantProfile() {
    return (
        <div className="participant-profile-page">
            <Header />
            <Navbar />
            <ParticipantProfileContent />
            <PageComponents slug="participant-profile" exclude={["card"]} />

            <Footer />
        </div>
    );
}