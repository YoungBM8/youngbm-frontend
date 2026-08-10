import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQContent from "../components/FAQContent";

export default function FAQ() {
    return (
        <div className="faq-page">
            <Header />
            <Navbar />

            <FAQContent />

            <Footer />
        </div>
    );
}