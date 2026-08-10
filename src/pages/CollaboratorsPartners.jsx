import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CollaboratorsPartnersContent from "../components/CollaboratorsPartnersContent";

import "../styles/collaboratorspartners.css";

export default function CollaboratorsPartners() {
    return (
        <div className="collaborators-page">
            <Header />
            <Navbar />
            <CollaboratorsPartnersContent />
            <Footer />
        </div>
    );
}