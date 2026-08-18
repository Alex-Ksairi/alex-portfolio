export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact__container">

                <header className="contact__header">
                    <span className="contact__eyebrow">
                        Get in touch
                    </span>
                </header>


                <div className="contact__card">

                    <div className="contact__content">

                        <span className="contact__label">
                            HAVE A PROJECT IN MIND?
                        </span>

                        <p className="contact__text">
                            Whether you have a project in mind,
                            want to discuss an opportunity, or
                            simply want to connect — feel free
                            to reach out.
                        </p>

                    </div>


                    <div className="contact__actions">

                        <a
                            href="mailto:alexander.ksairi@icloud.com"
                            className="contact__button"
                        >
                            <span>
                                Send me a message
                            </span>

                            <span className="contact__button-icon">
                                ↗
                            </span>
                        </a>

                        <div className="contact__socials">

                            <a
                                href="https://www.linkedin.com/in/alexander-ksairi-7563a1211/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://github.com/Alex-Ksairi"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}