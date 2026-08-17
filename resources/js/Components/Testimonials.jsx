import { useState } from "react";

const testimonials = [
    {
        quote:
            "Alex exemplifies volunteer commitment and professionalism. As the manager of our website vjf.de, he combines technical expertise, creativity, and heartfelt passion for our organization and its goals. His dedication goes far beyond the usual, making him an invaluable asset. Working with Alex means gaining not just an expert but a reliable and solutions-driven team player. Highly recommended!",
        name: "Jonas Richter",
        role: "Business Manager",
        company: "VJF",
    },
    {
        quote:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        name: "Max Mustermann",
        role: "CEO",
        company: "Future Company",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const current = testimonials[activeIndex];

    const next = () => {
        setActiveIndex(
            (prev) => (prev + 1) % testimonials.length
        );
    };

    const previous = () => {
        setActiveIndex(
            (prev) =>
                (prev - 1 + testimonials.length) %
                testimonials.length
        );
    };

    const progress =
        ((activeIndex + 1) / testimonials.length) * 100;

    return (
        <section
            className="testimonials"
            id="testimonials"
        >
            <div className="testimonials__container">

                {/* HEADER */}

                <header className="testimonials__header">
                    <div>
                        <span className="testimonials__eyebrow">
                            TESTIMONIALS
                        </span>

                        <p className="testimonials__description">
                            A few words from people I've had the opportunity to work with.
                        </p>    
                    </div>
                </header>


                {/* CARD */}

                <div className="testimonials__card">

                    <div className="testimonials__quote-mark">
                        “
                    </div>


                    <div
                        key={activeIndex}
                        className="testimonials__content"
                    >

                        {/* QUOTE */}

                        <blockquote className="testimonials__quote">
                            {current.quote}
                        </blockquote>


                        {/* AUTHOR */}

                        <div className="testimonials__author">

                            <div className="testimonials__author-info">
                                <strong className="testimonials__author-name">
                                    {current.name}
                                </strong>

                                <span className="testimonials__author-role">
                                    {current.role}
                                    {" · "}
                                    {current.company}
                                </span>
                            </div>


                            {/* NAVIGATION */}

                            <div className="testimonials__navigation">

                                <button
                                    type="button"
                                    onClick={previous}
                                    aria-label="Previous testimonial"
                                >
                                    ←
                                </button>

                                <button
                                    type="button"
                                    onClick={next}
                                    aria-label="Next testimonial"
                                >
                                    →
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* PROGRESS */}

                    <div className="testimonials__footer">

                        <div className="testimonials__progress">

                            <span className="testimonials__progress-count">
                                {String(activeIndex + 1).padStart(
                                    2,
                                    "0"
                                )}
                            </span>

                            <div className="testimonials__progress-line">
                                <span
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />
                            </div>

                            <span className="testimonials__progress-count">
                                {String(
                                    testimonials.length
                                ).padStart(2, "0")}
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}