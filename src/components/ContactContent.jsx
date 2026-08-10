import { useState } from "react";

import "../styles/contact.css";

export default function ContactContent() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({
        type: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setIsSubmitting(true);

        setStatus({
            type: "",
            message: ""
        });

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/contact/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                let errorMessage = "The message could not be sent.";

                if (data.email?.length) {
                    errorMessage = data.email[0];
                } else if (data.message?.length) {
                    errorMessage = data.message[0];
                } else if (data.first_name?.length) {
                    errorMessage = data.first_name[0];
                } else if (data.last_name?.length) {
                    errorMessage = data.last_name[0];
                } else if (data.detail) {
                    errorMessage = data.detail;
                }

                setStatus({
                    type: "error",
                    message: errorMessage
                });

                return;
            }

            setStatus({
                type: "success",
                message: "Your message was sent successfully."
            });

            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            console.error("Contact request failed:", error);

            setStatus({
                type: "error",
                message:
                    "Could not connect to the server. Please make sure the backend is running."
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="contact-main">
            <section className="contact-intro">
                <h1>Contact us</h1>

                <p>
                    If you have any questions about the congress, would like to
                    sign up for the next edition as a participant or volunteer,
                    or are interested in collaborating with us, we would love
                    to hear from you. We are always looking for people and
                    sponsors who are open to other cultures, eager to meet new
                    people across Europe, and keen to become part of the Young
                    BM Network.
                </p>
            </section>

            <section className="contact-box">
                <div className="contact-top">
                    <div className="contact-email">
                        <p>Email:</p>

                        <a href="mailto:youngbmnetwork@gmail.com">
                            youngbmnetwork@gmail.com
                        </a>
                    </div>

                    <div className="contact-icon">
                        <svg viewBox="0 0 80 60">
                            <g
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 10h34v22H24l-8 8v-8h-4z" />
                                <path d="M34 24h34v22H46l-8 8v-8h-4z" />

                                <line
                                    x1="20"
                                    y1="18"
                                    x2="38"
                                    y2="18"
                                />

                                <line
                                    x1="20"
                                    y1="24"
                                    x2="36"
                                    y2="24"
                                />

                                <line
                                    x1="42"
                                    y1="32"
                                    x2="60"
                                    y2="32"
                                />

                                <line
                                    x1="42"
                                    y1="38"
                                    x2="58"
                                    y2="38"
                                />
                            </g>
                        </svg>
                    </div>

                    <div className="contact-social">
                        <p>Our social media:</p>

                        <div className="contact-social-icons">
                            <a
                                href="https://www.linkedin.com/company/youngbmnet"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <svg viewBox="0 0 448 512">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8A53.79 53.79 0 0 1 53.79 0a53.79 53.79 0 1 1 0 108.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                            </a>

                            <a
                                href="https://www.instagram.com/youngbmnet"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <svg viewBox="0 0 24 24">
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                        ry="5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />

                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />

                                    <circle
                                        cx="17.5"
                                        cy="6.5"
                                        r="1.2"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >
                    <div className="contact-row">
                        <label>
                            First name

                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            Last name

                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                        </label>

                        <label>
                            E-mail *

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <label className="message-label">
                        Message

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    {status.message && (
                        <p
                            className={`contact-status ${
                                status.type === "success"
                                    ? "contact-status-success"
                                    : "contact-status-error"
                            }`}
                        >
                            {status.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send"}
                    </button>
                </form>
            </section>
        </main>
    );
}