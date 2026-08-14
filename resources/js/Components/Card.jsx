export default function Card({ project, index }) {
    return (
        <article className="project-card">

            <a
                href={project.link}
                className="project-card__image"
            >
                <img
                    src={project.image}
                    alt={project.title}
                />

                <span className="project-card__number">
                    0{index + 1}
                </span>

                <span className="project-card__arrow">
                    ↗
                </span>
            </a>


            <div className="project-card__content">

                <div className="project-card__meta">

                    <span>
                        {project.category}
                    </span>

                    <span>
                        {project.year}
                    </span>

                </div>


                <h3 className="project-card__title">
                    {project.title}
                </h3>


                <p className="project-card__description">
                    {project.description}
                </p>


                <div className="project-card__technologies">

                    {project.technologies.map(
                        (technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        )
                    )}

                </div>

            </div>

        </article>
    );
}