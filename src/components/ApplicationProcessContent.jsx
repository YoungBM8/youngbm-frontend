import { Link } from "react-router-dom";

import "../styles/applicationprocess-youngbmol2026.css";

export default function ApplicationProcessContent() {
    return (
        <main className="application-process-main">
            <section className="application-content">

                <div className="application-buttons">

                    <div className="application-left">
                        <h1>Application</h1>

                        <a
                            href="https://forms.gle/Pin6F5uzY8u4CGXW9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="application-main-button"
                        >
                            Application form
                        </a>
                    </div>

                    <div className="application-side-buttons">
                        <a
                            href="/LAST NAME_FIRST NAME_COUNTRY_STUDY LEVEL_oral+or+poster+or+workshop.docx"
                            download
                            className="application-small-button"
                        >
                            Abstract template
                        </a>

                        <Link
                            to="/contact"
                            className="application-small-button"
                        >
                            Contact us
                        </Link>
                    </div>

                </div>

                <p>
                    Application for locals and those who don’t need accommodation are open
                    from the <strong>25th of May</strong>. It includes participation and welcomes
                    kit for the whole congress.
                </p>

                <h3>How to apply?</h3>

                <p>
                    By filling in the form, which includes a series of questions relating
                    to personal information about you, as well as questions about your
                    project, research, or the topic you will be presenting at the Young BM
                    Congress. All data collected in the form will be processed in accordance
                    with the European General Data Protection Regulation (GDPR).
                </p>

                <p>
                    Once you submit your application, we will send you an email confirming
                    its receipt. If you are selected as a participant, we will provide you
                    with the information about the participation fee payment shortly after
                    the results are announced.
                </p>

                <p>
                    Please note that your participation is not fully confirmed until the
                    participation fee has been paid. If the payment deadline passes and we
                    have not received your fee, we will cancel your application in favour of
                    an applicant on the waiting list.
                </p>

                <p>
                    If you have any question you can write to our official e-mail:
                    <br />
                    <strong>youngbmnetwork@gmail.com</strong>
                </p>

            </section>

            <div className="blue-brush"></div>
        </main>
    );
}