import { Link } from "react-router-dom";
import "../styles/aboutourcongress.css";

export default function AboutOurCongressCollaborateBox() {
    return (
        <section className="about-collaborate-section">
            <div className="about-collaborate-box">
                <h3>Want to collaborate?</h3>

                <p>
                    Whether you have an idea, would like to partner with us, are
                    interested in participating in an upcoming edition, or even wish
                    to organise a future congress, don’t hesitate to get in touch.
                </p>

                <Link to="/contact">Contact</Link>
            </div>
        </section>
    );
}