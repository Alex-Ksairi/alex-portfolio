import { useEffect, useRef, useState } from "react";

import TimelineItem from "./TimelineItem";


export default function Timeline({ educations = [] }) {

    const timelineRef = useRef(null);

    const [progress, setProgress] = useState(0);


    useEffect(() => {

        const handleScroll = () => {

            if (!timelineRef.current) {
                return;
            }

            const rect =
                timelineRef.current.getBoundingClientRect();

            const viewportHeight =
                window.innerHeight;


            /*
             * Start the animation when the timeline
             * enters the viewport.
             */

            const start =
                viewportHeight * 1;


            /*
             * Finish the animation when the
             * timeline is almost leaving the viewport.
             */

            const end =
                viewportHeight * 0.1;


            const distance =
                rect.height + start - end;

            const current =
                start - rect.top;

            const percentage =
                (current / distance) * 100;


            setProgress(
                Math.min(
                    100,
                    Math.max(0, percentage)
                )
            );
        };


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        handleScroll();


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };

    }, []);


    return (

        <div
            className="timeline"
            ref={timelineRef}
        >

            {/* Background line */}

            <div className="timeline__line" />


            {/* Animated progress line */}

            <div
                className="timeline__line-progress"
                style={{
                    height: `${progress}%`,
                }}
            />


            {/* Timeline items */}

            <div className="timeline__items">

                {educations.map((education, index) => (

                    <TimelineItem
                        key={education.id}
                        education={education}
                        index={index}
                        total={educations.length}
                        progress={progress}
                    />

                ))}

            </div>

        </div>

    );
}