export default function TimelineItem({
    education,
    index,
    total,
    progress = 0,
}) {
    const itemProgress =
        total > 1
            ? (index / (total - 1)) * 100
            : 0;

    const active = progress >= itemProgress;

    const formatDate = (date) => {
        if (!date) return "Present";

        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
    };

    const start = formatDate(education.start);
    const end = education.complete
        ? formatDate(education.end)
        : "Present";

    return (
        <article
            className={
                active
                    ? "timeline-item timeline-item--active"
                    : "timeline-item"
            }
        >
            {/* Marker */}

            <div className="timeline-item__marker">
                <span className="timeline-item__dot" />
            </div>

            {/* Content */}

            <div className="timeline-item__content">

                <div className="timeline-item__year">
                    {start} — {end}
                </div>

                <h3 className="timeline-item__title">
                    {education.title}
                </h3>

                <span className="timeline-item__institution">
                    {education.institution}
                </span>

                {education.location && (
                    <span className="timeline-item__location">
                        {education.location}
                    </span>
                )}

                {education.degree && (
                    <p className="timeline-item__description">
                        {education.degree}
                    </p>
                )}

            </div>
        </article>
    );
}