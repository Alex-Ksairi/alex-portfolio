export default function TimelineItem({
    year,
    title,
    institution,
    description,
    tags = [],
    index,
    total,
    progress = 0,
}) {

    /*
     * Calculate when this item's dot
     * should become active.
     */

    const itemProgress =
        total > 1
            ? (index / (total - 1)) * 100
            : 0;


    const active =
        progress >= itemProgress;


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
                    {year}
                </div>


                <h3 className="timeline-item__title">
                    {title}
                </h3>


                <span className="timeline-item__institution">
                    {institution}
                </span>


                {description && (

                    <p className="timeline-item__description">
                        {description}
                    </p>

                )}


                {tags.length > 0 && (

                    <div className="timeline-item__tags">

                        {tags.map((tag) => (

                            <span key={tag}>
                                {tag}
                            </span>

                        ))}

                    </div>

                )}

            </div>

        </article>

    );
}