import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeminarApplyHereContent from "../components/Seminar2ApplyHereContent";

import "../styles/seminar-apply-here.css";

export default function SeminarApplyHere() {
    return (
        <div className="seminar-apply-page">
            <Header />
            <Navbar />
            <SeminarApplyHereContent />
            <Footer />
        </div>
    );
}