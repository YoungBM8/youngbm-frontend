import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageComponents from "../components/PageComponents";
import AcademicPartContent from "../components/AcademicPartContent";

import "../styles/academicpart.css";

export default function AcademicPart() {
    return (
        <div className="academic-page">
            <Header />
            <Navbar />
            <AcademicPartContent />
            <PageComponents slug="academic-part" exclude={["block"]} />

            <Footer />
        </div>
    );
}