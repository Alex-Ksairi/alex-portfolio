import Timeline from "@/Components/Timeline";

const education = [

    {
        year: "2024 — 2026",

        title:
            "Fachinformatiker für Anwendungsentwicklung",

        institution:
            "Umschulung / IHK",

        description:
            "Two-year professional retraining focused on software development, databases, system integration and modern development workflows.",

        tags: [
            "Python",
            "Java",
            "JavaScript",
            "SQL",
            "Scrum",
        ],
    },


    {
        year: "2026",

        title:
            "IHK Abschluss",

        institution:
            "Handelskammer Hamburg",

        description:
            "Successfully completed the IHK qualification as Fachinformatiker für Anwendungsentwicklung.",

        tags: [
            "Software Development",
            "IHK",
        ],
    },

    {
        year: "2021",

        title:
            "Web Development",

        institution:
            "DCI Hamburg",

        description:
            "Successfully completed the IHK qualification as Fachinformatiker für Anwendungsentwicklung.",

        tags: [
            "Software Development",
            "IHK",
        ],
    },

];


export default function Education() {

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
                    items={education}
                />

            </div>

        </section>

    );

}