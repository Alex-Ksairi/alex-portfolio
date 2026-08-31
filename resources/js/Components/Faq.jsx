import { useState } from "react";

export default function FAQ({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(
            openIndex === index ? null : index
        );
    };

    return (
        <section className="faq" id="faq">
            <div className="faq__container">

                <header className="faq__header">
                    <div>
                        <span className="faq__eyebrow">
                            FAQ
                        </span>

                        <h2 className="faq__title">
                            Frequently asked questions.
                        </h2>
                    </div>

                    <p className="faq__description">
                        A few answers to common questions
                        about me, my work, and how I
                        approach projects.
                    </p>
                </header>


                <div className="faq__list">

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                className={`faq__item ${
                                    isOpen
                                        ? "faq__item--open"
                                        : ""
                                }`}
                                key={faq.faq_question}
                            >

                                <button
                                    className="faq__question"
                                    onClick={() =>
                                        toggleFAQ(index)
                                    }
                                    aria-expanded={isOpen}
                                >
                                    <span className="faq__number">
                                        {String(index + 1).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>

                                    <span className="faq__question-text">
                                        {faq.faq_question}
                                    </span>

                                    <span className="faq__icon">
                                        <span className="faq__icon-line"></span>
                                        <span className="faq__icon-line"></span>
                                    </span>
                                </button>


                                <div className="faq__answer">
                                    <div>
                                        {faq.faq_answer}
                                    </div>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}