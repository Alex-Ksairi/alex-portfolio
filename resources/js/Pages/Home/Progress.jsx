const stats = [
    {
        number: "03+",
        label: "Years of experience",
    },
    {
        number: "18+",
        label: "Projects completed",
    },
    {
        number: "22K+",
        label: "Hours of development",
    },
    {
        number: "15+",
        label: "Clients & collaborations",
    },
];

export default function Progress() {
    return (
        <section className="progress" id="progress">

            <div className="progress__container">

                <div className="progress__header">

                    <div>
                        <span className="progress__eyebrow">
                            Progress
                        </span>

                        <h2 className="progress__title">
                            Experience in numbers.
                        </h2>
                    </div>

                    <p className="progress__description">
                        A few numbers that represent my journey
                        as a developer so far.
                    </p>

                </div>


                <div className="progress__cards">

                    {stats.map((stat, index) => (

                        <div
                            className="progress__card"
                            key={stat.label}
                        >

                            <span className="progress__card-index">
                                0{index + 1}
                            </span>

                            <div className="progress__card-content">

                                <span className="progress__number">
                                    {stat.number}
                                </span>

                                <span className="progress__label">
                                    {stat.label}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}