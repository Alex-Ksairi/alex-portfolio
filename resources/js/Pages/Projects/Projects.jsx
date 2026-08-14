import PrimaryButton from "@/Components/PrimaryButton";

import Card from "@/Components/Card";

const projects = [
    {
        title: "VJF Website",
        category: "Web Development",
        year: "2026",
        description:
            "Modernization and redesign of a website with a focus on usability, structure and a contemporary digital experience.",
        technologies: [
            "WordPress",
            "UI/UX",
            "JavaScript",
        ],
        image: "/images/projects/vjf.webp",
        link: "#",
    },

    {
        title: "ELAM Solutions",
        category: "Web Development",
        year: "2025",
        description:
            "A modern web presence focused on a clean interface, responsive design and a strong user experience.",
        technologies: [
            "Webflow",
            "JavaScript",
            "UI/UX",
        ],
        image: "/images/projects/elam-solutions.webp",
        link: "#",
    },

    {
        title: "International Money Transfer",
        category: "Web Development",
        year: "2025",
        description:
            "A modern digital experience for an international money transfer service.",
        technologies: [
            "Webflow",
            "JavaScript",
            "UI/UX",
        ],
        image: "/images/projects/imt.webp",
        link: "#",
    },
];


export default function Projects() {

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