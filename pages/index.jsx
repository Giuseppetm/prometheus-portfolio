import { useState, useEffect } from "react";
import { NextSeo } from 'next-seo';
import { calculateAge } from "@/Utils/utils";
import Contact from "../src/Sections/Contact";
import Hero from "../src/Sections/Hero";
import Projects from "../src/Sections/Projects";
import Footer from "../src/Sections/Footer";
import Header from "../src/Components/Header";
import LateralMenu from "../src/Components/LateralMenu";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

const App = () => {
    const [section, setSection] = useState(1);

    const handleScroll = () => {
        var projects = document.getElementById("projects");
        var contact = document.getElementById("contact");

        if (window.scrollY > contact.offsetTop - 400) {
            setSection(3);
        } else if (window.scrollY > projects.offsetTop - 400) {
            setSection(2);
        } else {
            setSection(1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // eslint-disable-next-line no-unused-vars
        const cursor = new MouseFollower({
            stateDetection: {
                '-pointer': 'a,button,.square'
            }
        });
    }, []);

    return (
        <>
            <NextSeo
                title={`GIUSEPPE DEL CAMPO | ${calculateAge('10-11-1999')} Years Old IT Consultant`}
                description={`Personal website of Giuseppe Del Campo (${calculateAge('10-11-1999')} Years Old IT Consultant), based on Prometheus Portfolio.`}
                canonical={"prometheusportfolio.netlify.app"}
                openGraph={{
                    url: "prometheusportfolio.netlify.app",
                    title: `GIUSEPPE DEL CAMPO | ${calculateAge('10-11-1999')} Years Old IT Consultant`,
                    description: `Personal website of Giuseppe Del Campo (${calculateAge('10-11-1999')} Years Old IT Consultant), based on Prometheus Portfolio.`,
                    site_name: `GIUSEPPE DEL CAMPO | ${calculateAge('10-11-1999')} Years Old IT Consultant`,
                    type: 'website',
                    locale: "en_US",
                    images: [
                        {
                            url: 'preview.png',
                            type: 'image/png',
                        }
                    ],
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <div className="App">
                <Header />
                <LateralMenu section={section} />
                <Hero />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default App;
