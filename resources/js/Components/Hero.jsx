import { Link } from "@inertiajs/react";

import PrimaryButton from "@/Components/PrimaryButton";


export default function Hero() {

    return (

        <section className="hero">

            <div className="hero__content">

                {/* TEXT */}

                <div className="hero__text">

                    <span className="hero__eyebrow">
                        Software Developer
                    </span>


                    <h1 className="hero__title">
                        I build digital
                        <span> experiences </span>
                        that matter.
                    </h1>


                    <p className="hero__description">
                        I build modern web applications and
                        digital experiences with a focus on
                        clean code, usability and thoughtful design.
                    </p>

                </div>


                {/* IMAGE */}

                <div className="hero__visual">

                    <div className="hero__image-wrapper">

                        <img
                            src="/images/alexi.png"
                            alt="Alex"
                            className="hero__image"
                        />


                        <span className="hero__keyword hero__keyword--top">
                            Fullstack
                        </span>


                        <span className="hero__keyword hero__keyword--right">
                            React
                        </span>


                        <span className="hero__keyword hero__keyword--bottom">
                            PHP
                        </span>

                    </div>

                </div>


                {/* CTA */}

                <div className="hero__actions">

                    <PrimaryButton href="/projects">
                        View my work
                    </PrimaryButton>


                    <Link
                        href="/contact"
                        className="hero__button hero__button--secondary"
                    >
                        Get in touch
                    </Link>

                </div>

            </div>

        </section>

    );
}