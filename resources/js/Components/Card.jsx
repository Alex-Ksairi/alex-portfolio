export default function Card({ project, index }) {
    return (
        <article className="project-card">

            <a
                href={project.url}
                className="project-card__image"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={project.image ? project.image : "https://static.thenounproject.com/png/5191452-200.png"}
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
                        {project.complete ? "Completed" : "In Progress"}
                    </span>

                    <span>
                        {new Date(project.created_at).getFullYear()}
                    </span>

                </div>

                <h3 className="project-card__title">
                    {project.title}
                </h3>

                <p className="project-card__description">
                    {project.description}
                </p>

                <div className="project-card__technologies">

                    {project.skills.map((skill) => (
                        <span key={skill.id}>
                            {skill.name}
                        </span>
                    ))}

                </div>

            </div>

        </article>
    );
}