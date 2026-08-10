import "../styles/faq.css";

const topFaqs = [
    {
        question: "How much is the participation fee and what does it include?",
        answer: (
            <>
                <p>
                    The participation fee for international students and local students requiring accommodation is
                    <strong> approximately 130–160 EUR.</strong> If we secure additional sponsors, the fee may be reduced.
                    This includes:
                </p>

                <ul>
                    <li>Nights of accommodation during the congress</li>
                    <li>Participation in all congress activities</li>
                    <li>Excursion</li>
                    <li>Public transport card</li>
                    <li>Welcome pack</li>
                </ul>
            </>
        )
    },
    {
        question: "What is not included in the participation fee?",
        answer: (
            <>
                <p>
                    The fee does not cover travel from your home country to the host city and back, nor does it include
                    accommodation for any extra nights outside the official congress dates.
                </p>

                <p>
                    In some cases, breakfast may be included in the participation fee, but other meals are not.
                </p>
            </>
        )
    },
    {
        question: "Who can apply?",
        answer: (
            <>
                <p>
                    If you are a student in any European country within a field of biosciences - such as biology,
                    biotechnology, molecular sciences, health sciences, biochemistry, or related areas - you are
                    welcome to apply.
                </p>

                <p>
                    This includes students at bachelor&apos;s, master&apos;s, PhD, or postdoc levels.
                </p>

                <p>
                    You may participate as an <strong><u>active participant</u></strong> or as a{" "}
                    <strong><u>passive participant</u></strong>.
                </p>
            </>
        )
    }
];

const bottomFaqs = [
    {
        question: "I have an allergy, food intolerance, or follow a specific diet. Will this be taken into account at the congress?",
        answer: (
            <p>
                Absolutely. When filling out the registration form, you will find a section regarding food and
                medication. We will do our best to accommodate each case and will contact you before the congress
                to assess your needs.
            </p>
        )
    },
    {
        question: "What is the cancellation policy for the participation fee?",
        answer: (
            <>
                <p>
                    Once the application results are announced, payment details for the participation fee will be
                    provided. Please note that your participation is only fully confirmed once the payment has been made.
                </p>

                <p>
                    As we need to confirm numbers for accommodation, meals, and excursion tickets well in advance,
                    there is no guarantee that the fee will be refunded if a participant cancels their registration.
                    However, if another participant is able to take their place, a full refund may be issued.
                </p>
            </>
        )
    },
    {
        question: "Does Young BM Network profit financially from the fee?",
        answer: (
            <p>
                No, every euro of the fee is used for the participants&apos; stay during the congress and for the
                activities in which they will take part. If, by any chance, there is a surplus of money after the
                event, it will be passed on to the organisers of future editions.
            </p>
        )
    },
    {
        question: "I will be arriving a day late or leaving before the congress ends. Do I still have to pay the full fee?",
        answer: (
            <p>
                Yes, the participation fee remains the same regardless of your arrival or departure time, as costs
                for accommodation, activities, and organisation are fixed per participant.
            </p>
        )
    }
];

export default function FAQContent() {
    return (
        <main className="faq-main">

            <section className="faq-hero">
                <h1>Frequently Asked Questions</h1>

                <div className="faq-contact">
                    <p>Have questions?</p>
                    <p>
                        Reach out to us at <strong>youngbmnetwork@gmail.com</strong>.
                    </p>
                </div>

                <p className="faq-introduction">
                    You may also find answers in our list of frequently asked questions about this edition, covering
                    topics such as the application process, participation fee, programme, and more. For general
                    information about the congress and its structure, click{" "}
                    <a href="/about/about-our-congress">here</a>.
                </p>
            </section>

            <section className="faq-top-section">
                <div className="faq-container">
                    {topFaqs.map((faq, index) => (
                        <article className="faq-item" key={index}>
                            <h2>{faq.question}</h2>
                            <div className="faq-answer">{faq.answer}</div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="faq-bottom-section">
                <div className="faq-container">
                    {bottomFaqs.map((faq, index) => (
                        <article className="faq-item" key={index}>
                            <h2>{faq.question}</h2>
                            <div className="faq-answer">{faq.answer}</div>
                        </article>
                    ))}
                </div>

                <div className="faq-brush"></div>
            </section>

        </main>
    );
}