import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeminarSeriesContent from "../components/SeminarSeriesContent";

export default function SeminarSeries() {
    return (
        <div className="seminar-series-page">
            <Header />
            <Navbar />
            <SeminarSeriesContent />
            <Footer />
        </div>
    );
}
