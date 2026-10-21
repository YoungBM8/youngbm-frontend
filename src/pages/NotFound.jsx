import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import "../styles/custompage.css";

export default function NotFound() {
    return (
        <div className="custom-page">
            <Header />
            <Navbar />

            <main className="custom-page-main">
                <section className="custom-page-hero">
                    <div className="custom-page-hero-card">
                        <h1>Page not found</h1>
                        <p className="custom-page-subtitle">
                            The page you are looking for does not exist or has been moved.
                        </p>
                        <Link to="/" className="custom-page-button">
                            Back to the home page
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
