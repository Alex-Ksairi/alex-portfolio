import { Head } from "@inertiajs/react";

import Hero from "@/Components/Hero";
import About from "./Home/About";
import Progress from "./Home/Progress";
import Projects from "./Projects/Projects";
import Education from "@/Pages/Sections/Education";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home({ projects, educations, testimonials, faqs }) {
    return (
        <>
            <Head title="Home" />

            <Hero />

            <About />

            <Skills />

            <Progress />

            <Projects projects={projects} />

            <Education educations={educations} />

            <Testimonials testimonials={testimonials} />

            <Faq faqs={faqs}/>

            <Contact />
        </>
    );
}