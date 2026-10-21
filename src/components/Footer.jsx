import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import { useSite } from "../context/useSite";
import NewsletterModal from "./NewsletterModal";

import "../styles/footer.css";

const SOCIAL_LINKS = [
    { key: "instagram_url", label: "Instagram", Icon: FaInstagram },
    { key: "linkedin_url", label: "LinkedIn", Icon: FaLinkedinIn },
    { key: "facebook_url", label: "Facebook", Icon: FaFacebookF },
    { key: "youtube_url", label: "YouTube", Icon: FaYoutube }
];

function Footer() {
    const { settings } = useSite();

    const [newsletterOpen, setNewsletterOpen] = useState(false);

    const socialLinks = SOCIAL_LINKS.filter(({ key }) => settings?.[key]);

    const copyright =
        settings?.copyright_text ?? `©${new Date().getFullYear()} Young BM Network`;

    return (
        <>
            <footer className="home-footer">

                {socialLinks.length > 0 && (
                    <div className="footer-social-bar">
                        {socialLinks.map(({ key, label, Icon }) => (
                            <a
                                key={key}
                                href={settings[key]}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                )}

                <div className="footer-bottom-content">

                    <button
                        className="newsletter-btn"
                        onClick={() => setNewsletterOpen(true)}
                    >
                        Subscribe to our newsletter ›
                    </button>

                    <p className="footer-copy">
                        {copyright}
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
