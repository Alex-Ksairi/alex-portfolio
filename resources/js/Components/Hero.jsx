import { Link } from "@inertiajs/react";

import PrimaryButton from "@/Components/PrimaryButton";


export default function Hero() {

    return (

        <section className="hero">

            <div className="hero__content">

                {/* TEXT */}

                <div className="hero__text">

                    <span className="hero__eyebrow">
                        Fullstack Software Developer
                    </span>


                    <h1 className="hero__title">
                        Where code meets <span> intelligence </span> —
                        From concept to <span> reality </span>
                    </h1>


                    <p className="hero__description">
                        From “what if?” to “it's done.” 
                        Every project has its own story. 
                        My work tells mine accros the stack. Ready to start yours?
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
                            React/ JS
                        </span>

                        <span className="hero__keyword hero__keyword--left">
                            Laravel/ PHP
                        </span>

                        <span className="hero__keyword hero__keyword--center">
                            SQL/ GraphQL
                        </span>

                        <span className="hero__keyword hero__keyword--bottom">
                            CSS
                        </span>

                    </div>

                </div>


                {/* CTA */}

                <div className="hero__actions">

                    <PrimaryButton href="/projects">
                        View my work
                    </PrimaryButton>


                    <Link
                        href="#"
                        className="hero__button hero__button--secondary"
                    >
                        Let's connect
                    </Link>

                </div>

            </div>

        </section>

    );
}