import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageComponents from "../components/PageComponents";
import SeminarApplyHereContent from "../components/SeminarApplyHereContent";

import "../styles/seminar-apply-here.css";

export default function SeminarApplyHere() {
    return (
        <div className="seminar-apply-page">
            <Header />
            <Navbar />
            <SeminarApplyHereContent />
            <PageComponents slug="seminar-apply" />

            <Footer />
        </div>
    );
}