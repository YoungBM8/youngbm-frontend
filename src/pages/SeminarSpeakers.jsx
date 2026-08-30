import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeminarSpeakersContent from "../components/Seminar2SpeakersContent";

import "../styles/seminar-speakers.css";

export default function SeminarSpeakers() {
    return (
        <div className="seminar-speakers-page">
            <Header />
            <Navbar />
            <SeminarSpeakersContent />
            <Footer />
        </div>
    );
}