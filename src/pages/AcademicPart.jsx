import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AcademicPartContent from "../components/AcademicPartContent";

import "../styles/academicpart.css";

export default function AcademicPart() {
    return (
        <div className="academic-page">
            <Header />
            <Navbar />
            <AcademicPartContent />
            <Footer />
        </div>
    );
}