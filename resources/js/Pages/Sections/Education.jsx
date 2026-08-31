import Timeline from "@/Components/Timeline";

export default function Education({ educations }) {

    return (

        <section
            className="education"
            id="education"
        >

            <div className="education__container">


                {/* Header */}

                <div className="education__header">

                    <span className="education__eyebrow">
                        Background
                    </span>


                    <h2 className="education__title">
                        Education & learning.
                    </h2>


                    <p className="education__description">
                        The experiences and education that
                        shaped my journey into software
                        development.
                    </p>

                </div>


                {/* Timeline */}

                <Timeline
                    educations={educations}
                />

            </div>

        </section>

    );

}