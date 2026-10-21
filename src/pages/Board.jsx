import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BoardContent from "../components/BoardContent";

export default function Board() {
    return (
        <div className="board2026-page">
            <Header />
            <Navbar />

            <BoardContent />

            <Footer />
        </div>
    );
}
