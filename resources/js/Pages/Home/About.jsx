export default function About() {
    return (
        <section className="about" id="about">

            <div className="about__container">

                {/* Header */}
                <div className="about__header">

                    <span className="about__eyebrow">
                        About me
                    </span>

                    <h2 className="about__title">
                        Developer by profession.
                        <br />
                        Explorer by nature.
                    </h2>

                </div>


                {/* Content */}
                <div className="about__content">

                    {/* Text */}
                    <div className="about__text">

                        <p className="about__intro">
                            Hey, I'm Alex.
                        </p>

                        <p>
                            I'm a Fullstack Developer and IT Specialist
                            in Application Development with a background
                            in frontend development and a growing focus
                            on backend systems, APIs and databases.
                        </p>

                        <p>
                            I enjoy taking an idea and turning it into
                            something real. Whether it's building a web
                            application, designing an intuitive interface,
                            connecting different systems or finding a
                            smarter way to solve a problem — I'm always
                            curious about how things work and how they
                            can be improved.
                        </p>

                        <p>
                            Outside of technology, you'll usually find me
                            somewhere outdoors. I love hiking, discovering
                            new places and spending time in nature. For me,
                            getting away from the screen is just as
                            important as being creative in front of it.
                        </p>

                        <p>
                            I believe the best work comes from staying
                            curious, learning continuously and working
                            with people who are willing to share ideas,
                            challenge each other and grow together.
                        </p>

                    </div>


                    {/* Images */}
                    <div className="about__visual">

                        <div className="about__image about__image--main">

                            <img
                                src="/images/alex-pilatuss.png"
                                alt="Alex"
                            />

                        </div>


                        <div className="about__image about__image--secondary">

                            <img
                                src="/images/alex-venice.png"
                                alt="Alex enjoying nature"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}