import { useState } from "react";

export default function Testimonials({ testimonials = [] }) {

    const [activeIndex, setActiveIndex] = useState(0);


    /*
     * No testimonials available.
     */

    if (testimonials.length === 0) {
        return null;
    }


    const current = testimonials[activeIndex];


    /*
     * Navigation
     */

    const next = () => {

        setActiveIndex(
            (prev) =>
                (prev + 1) % testimonials.length
        );

    };


    const previous = () => {

        setActiveIndex(
            (prev) =>
                (prev - 1 + testimonials.length) %
                testimonials.length
        );

    };


    /*
     * Progress
     */

    const progress =
        ((activeIndex + 1) / testimonials.length) * 100;


    /*
     * Get readable company name from URL.
     *
     * https://vjf.de
     * → vjf
     *
     * https://www.example.com
     * → example
     */

    const getCompanyName = (url) => {

        if (!url) {
            return "";
        }

        try {

            const hostname =
                new URL(url).hostname
                    .replace(/^www\./, "");

            return hostname.split(".")[0];

        } catch {

            return url;

        }

    };


    const companyName =
        getCompanyName(current.company_url);


    return (

        <section
            className="testimonials"
            id="testimonials"
        >

            <div className="testimonials__container">


                {/* =========================================
                    HEADER
                ========================================= */}

                <header className="testimonials__header">

                    <div>

                        <span className="testimonials__eyebrow">
                            TESTIMONIALS
                        </span>

                        <p className="testimonials__description">
                            A few words from people I've had the
                            opportunity to work with.
                        </p>

                    </div>

                </header>


                {/* =========================================
                    CARD
                ========================================= */}

                <div className="testimonials__card">


                    {/* Quote mark */}

                    <div className="testimonials__quote-mark">
                        “
                    </div>


                    {/* =====================================
                        CONTENT
                    ===================================== */}

                    <div
                        key={activeIndex}
                        className="testimonials__content"
                    >


                        {/* Quote */}

                        <blockquote className="testimonials__quote">
                            {current.testimonial_text}
                        </blockquote>


                        {/* =================================
                            AUTHOR
                        ================================= */}

                        <div className="testimonials__author">


                            {/* Author details */}

                            <div className="testimonials__author-details">


                                {/* Image */}

                                <div className="testimonials__author-image">

                                    {current.image && (

                                        <img
                                            src={current.image}
                                            alt={current.author}
                                        />

                                    )}

                                </div>


                                {/* Author information */}

                                <div className="testimonials__author-info">

                                    <strong className="testimonials__author-name">
                                        {current.author}
                                    </strong>


                                    {/* Role + Company */}

                                    <span className="testimonials__author-role">

                                        {current.author_role}

                                        {current.company_url && (

                                            <>
                                                {" · "}

                                                <a
                                                    href={current.company_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {companyName}
                                                </a>
                                            </>

                                        )}

                                    </span>


                                    {/* LinkedIn */}

                                    {current.linkedin && (

                                        <a
                                            className="testimonials__author-linkedin"
                                            href={current.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${current.author} on LinkedIn`}
                                        >
                                            LinkedIn
                                        </a>

                                    )}

                                </div>

                            </div>


                            {/* =================================
                                NAVIGATION
                            ================================= */}

                            <div className="testimonials__navigation">

                                <button
                                    type="button"
                                    onClick={previous}
                                    aria-label="Previous testimonial"
                                    disabled={testimonials.length <= 1}
                                >
                                    ←
                                </button>


                                <button
                                    type="button"
                                    onClick={next}
                                    aria-label="Next testimonial"
                                    disabled={testimonials.length <= 1}
                                >
                                    →
                                </button>

                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        FOOTER / PROGRESS
                    ===================================== */}

                    <div className="testimonials__footer">

                        <div className="testimonials__progress">


                            {/* Current */}

                            <span className="testimonials__progress-count">

                                {String(
                                    activeIndex + 1
                                ).padStart(2, "0")}

                            </span>


                            {/* Progress line */}

                            <div className="testimonials__progress-line">

                                <span
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />

                            </div>


                            {/* Total */}

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