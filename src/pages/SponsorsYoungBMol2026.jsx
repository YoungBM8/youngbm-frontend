import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SponsorsContent from "../components/SponsorsContent";

import "../styles/sponsors-youngbmol2026.css";

export default function SponsorsYoungBMol2026({ slug }) {
    return (
        <div className="sponsors-page">
            <Header />
            <Navbar />
            <SponsorsContent slug={slug} />
            <Footer />
        </div>
    );
}