import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplicationProcessContent from "../components/ApplicationProcessContent";

import "../styles/applicationprocess-youngbmol2026.css";

export default function ApplicationProcessYoungBMol2026() {
    return (
        <div className="application-process-page">
            <Header />
            <Navbar />
            <ApplicationProcessContent />
            <Footer />
        </div>
    );
}