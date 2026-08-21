const skillRows = [
    {
        direction: "left",
        speed: "74s",
        skills: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "SCSS",
            "jQuery",
            "Tailwind",
            "Bootstrap",
        ],
    },
    {
        direction: "right",
        speed: "98s",
        skills: [
            "PHP",
            "Laravel",
            "Python",
            "Java",
            "MySQL",
            "MariaDB",
            "GraphQL",
            "Node.js",
            "Express.js",
            "REST API",
        ],
    },
    {
        direction: "left",
        speed: "58s",
        skills: [
            "Git/ GitHub",
            "Figma",
            "Webflow",
            "Bubbl.io",
            "WordPress",
            "UX / UI",
            "Slack",
            "Jira",
            "ClickUp",
        ],
    },
];

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills__container">

                <header className="skills__header">

                    <div>
                        <span className="skills__eyebrow">
                            SKILLS
                        </span>

                        <h2 className="skills__title">
                            Technologies
                            <br />
                            I work with.
                        </h2>
                    </div>

                    <p className="skills__description">
                        Technologies and tools I've worked
                        with throughout my development journey.
                    </p>

                </header>


                <div className="skills__marquee">

                    {skillRows.map((row, rowIndex) => (
                        <div
                            className={`skills__row skills__row--${row.direction}`}
                            key={rowIndex}
                            style={{
                                "--marquee-speed": row.speed,
                            }}
                        >

                            <div className="skills__track">

                                {[...row.skills, ...row.skills].map(
                                    (skill, index) => (
                                        <span
                                            className="skills__skill"
                                            key={`${skill}-${index}`}
                                        >
                                            {skill}

                                            <span className="skills__separator">
                                                /
                                            </span>
                                        </span>
                                    )
                                )}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
