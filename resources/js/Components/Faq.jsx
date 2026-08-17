import { useState } from "react";

const faqs = [
    {
        question: "What kind of projects do you work on?",
        answer:
            "I mainly work on modern web applications, websites, and digital products. My focus is on frontend development with React and JavaScript, while also working with backend technologies such as PHP, Laravel, SQL, and APIs.",
    },
    {
        question: "What technologies do you work with?",
        answer:
            "My core frontend technologies are HTML, CSS, JavaScript, and React. On the backend, I work with PHP, Laravel, SQL, and databases. I also have experience with tools such as Git, Webflow, Bubble.io, and Figma.",
    },
    {
        question: "Are you available for freelance projects?",
        answer:
            "Yes. I'm open to freelance projects as well as long-term employment opportunities. Feel free to get in touch and tell me a little about your project.",
    },
    {
        question: "How do you approach a new project?",
        answer:
            "I first focus on understanding the goals, requirements, and users. From there I break the project into manageable steps, establish the technical approach, and iterate toward a clean and maintainable solution.",
    },
    {
        question: "Are you open to remote work?",
        answer:
            "Yes. I'm open to remote and hybrid opportunities. I'm based in Hamburg and am also open to opportunities with companies outside Hamburg.",
    },
];

export default function FAQ() {
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
                                key={faq.question}
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
                                        {faq.question}
                                    </span>

                                    <span className="faq__icon">
                                        <span className="faq__icon-line"></span>
                                        <span className="faq__icon-line"></span>
                                    </span>
                                </button>


                                <div className="faq__answer">
                                    <div>
                                        {faq.answer}
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