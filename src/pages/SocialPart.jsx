import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialPartContent from "../components/SocialPartContent";

import "../styles/socialpart.css";

export default function SocialPart() {
    return (
        <div className="social-page">
            <Header />
            <Navbar />
            <SocialPartContent />
            <Footer />
        </div>
    );
}