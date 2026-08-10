import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Board2026Content from "../components/Board2026Content";

import "../styles/board2026.css";

export default function Board2026() {
    return (
        <div className="board2026-page">
            <Header />
            <Navbar />
            <Board2026Content />
            <Footer />
        </div>
    );
}