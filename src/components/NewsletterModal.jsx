import { useState } from "react";

import "../styles/newsletterModal.css";

export default function NewsletterModal({ isOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [consentGiven, setConsentGiven] = useState(false);
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) {
        return null;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setIsSubmitting(true);
        setStatus("");

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/newsletter/subscribe/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        consent_given: consentGiven
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                console.error("Newsletter API error:", data);
                throw new Error("Could not complete the subscription.");
            }

            setStatus("You have subscribed successfully.");
            setEmail("");
            setConsentGiven(false);

            setTimeout(() => {
                setStatus("");
                onClose();
            }, 1500);
        } catch (error) {
            console.error(error);

            setStatus(
                "Something went wrong. Please make sure the backend is running."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleClose() {
        setStatus("");
        onClose();
    }

    return (
        <div className="newsletter-overlay">
            <div className="newsletter-modal">
                <button
                    type="button"
                    className="newsletter-close"
                    onClick={handleClose}
                    aria-label="Close newsletter form"
                >
                    ×
                </button>

                <h2>
                    Get the Latest
                    <br />
                    News to Your
                    <br />
                    Inbox
                </h2>

                <p>
                    Subscribe to our newsletter to receive news and updates.
                </p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="newsletter-email">
                        Enter your email here *
                    </label>

                    <input
                        id="newsletter-email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <label className="newsletter-consent">
                        <input
                            type="checkbox"
                            checked={consentGiven}
                            onChange={(event) =>
                                setConsentGiven(event.target.checked)
                            }
                            required
                        />

                        <span>
                            I agree to receive news and updates from Young BM
                            Network.
                        </span>
                    </label>

                    {status && (
                        <p className="newsletter-status">
                            {status}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Signing up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
}