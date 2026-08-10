import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HistoryOfYoungBMContent from "../components/HistoryOfYoungBMContent";

import "../styles/historyofyoungbm.css";

export default function HistoryOfYoungBM() {
    return (
        <div className="history-page">
            <Header />
            <Navbar />
            <HistoryOfYoungBMContent />
            <Footer />
        </div>
    );
}