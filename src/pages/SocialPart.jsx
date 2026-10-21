import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageComponents from "../components/PageComponents";
import SocialPartContent from "../components/SocialPartContent";

import "../styles/socialpart.css";

export default function SocialPart() {
    return (
        <div className="social-page">
            <Header />
            <Navbar />
            <SocialPartContent />
            <PageComponents slug="social-part" exclude={["block"]} />

            <Footer />
        </div>
    );
}