import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactContent from "../components/ContactContent";

import "../styles/contact.css";

export default function Contact() {
    return (
        <div className="contact-page">
            <Header />
            <Navbar />
            <ContactContent />
            <Footer />
        </div>
    );
}