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
                            Hej, I'm Alex.
                        </p>

                        <p>
                            I'm a Fullstack Developer and IT Specialist in Application Development 
                            with 3+ years of experience in frontend development and a growing 
                            focus on backend systems, APIs and databases.
                        </p>

                        <p>
                            I enjoy turning ideas into real applications. My main stack is React, HTML and CSS, as well as No-/Low-Code 
                            supported by experience in Java, Python, PHP, Laravel, SQL databases and system integration. 
                            I'm naturally curious and always interested in learning new technologies when they help improve my work.
                        </p>

                        <p>
                            I learn best by doing. At 02100 Digital GmbH, I quickly became productive with Webflow and Bubble.io 
                            and used them in real client projects. I've also worked with WordPress and automation tools 
                            like Make to streamline processes and build efficient solutions.
                        </p>

                        <p>
                            As your next best buddy at work, I value open communication, collaboration and a supportive environment. I like sharing 
                            knowledge, but I also enjoy learning from others. When challenges come up, I stay persistent until I understand and solve them.
                        </p>

                        <p>
                            Outside of work, I enjoy spending time outdoors, especially hiking and exploring nature, 
                            which helps me recharge and gain perspective.
                        </p>

                        <p>
                            I'm continuously learning, I take pride in what I build, and I want to work with 
                            people who are curious, supportive and motivated to grow together.
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