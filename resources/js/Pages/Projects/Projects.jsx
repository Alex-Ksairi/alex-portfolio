import PrimaryButton from "@/Components/PrimaryButton";

import Card from "@/Components/Card";

export default function Projects({ projects }) {

    return (

        <section
            className="projects"
            id="projects"
        >

            <div className="projects__container">


                {/* Header */}

                <div className="projects__header">

                    <div>

                        <span className="projects__eyebrow">
                            Selected work
                        </span>

                        <h2 className="projects__title">
                            Things I've built.
                        </h2>

                    </div>


                    <p className="projects__description">
                        A selection of projects I've worked on,
                        experimented with and learned from.
                    </p>

                </div>


                {/* Cards */}

                <div className="projects__grid">

                    {projects.map((project, index) => (

                        <Card
                            key={project.title}
                            project={project}
                            index={index}
                        />

                    ))}

                </div>


                {/* See more */}

                <div className="projects__footer">

                    <PrimaryButton href="/projects">
                        Check all Projects
                    </PrimaryButton>

                </div>

            </div>

        </section>

    );
}