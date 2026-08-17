import { Head } from "@inertiajs/react";

import Hero from "@/Components/Hero";
import About from "./Home/About";
import Progress from "./Home/Progress";
import Projects from "./Projects/Projects";
import Education from "@/Pages/Sections/Education";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <Hero />

            <About />

            <Progress />

            <Projects />

            <Education />

            <Testimonials />
        </>
    );
}