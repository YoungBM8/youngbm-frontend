import { useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import NewsletterModal from "./NewsletterModal";

import "../styles/footer.css";

function Footer() {
    const [newsletterOpen, setNewsletterOpen] = useState(false);

    return (
        <>
            <footer className="home-footer">

                <div className="footer-social-bar">
                    <a
                        href="https://www.instagram.com/youngbmnet"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/company/youngbmnet"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>

                <div className="footer-bottom-content">

                    <button
                        className="newsletter-btn"
                        onClick={() => setNewsletterOpen(true)}
                    >
                        Subscribe to our newsletter ›
                    </button>

                    <p className="footer-copy">
                        ©2026 Young BM Network
                    </p>

                </div>

            </footer>

            <NewsletterModal
                isOpen={newsletterOpen}
                onClose={() => setNewsletterOpen(false)}
            />
        </>
    );
}

export default Footer;