import { Link } from 'react-scroll';
import { MdArrowDownward } from "react-icons/md"; 
import { calculateAge } from '../Utils/utils';

const Hero = () => {
    return (
        <section className="hero">
            <div className="content">
                <h1 className="outlined" data-cursor-video={`/Images/clip.mp4`}>GIUSEPPE <br className="show-br"/>DEL CAMPO</h1>

                <div className="box">
                    <p>I&apos;m a {calculateAge('10-11-1999')} years old <b>Front-end Developer</b>, currently working at <a href="https://www.peoplelab.it/">People Lab SRL</a> as <b>IT Consultant</b>.</p>

                    <p>
                        I studied computer science at the University of Milan,where I later worked on a H2020 European project called <a href="https://cordis.europa.eu/project/id/857172/it">Smart Bear</a>. <br/>
                    </p>

                    <p>
                        My passion for development led me to create <a href="https://studentiunimi.it/">studentiunimi.it</a>, one of the most advanced university websites in Italy, with an average of 10.000 monthly visitors.
                        I contribute daily to make communication between students at the University of Milan easier and to make groups, services, and many other resources available. All the personal projects I have created so far are open-source.
                    </p>

                    <p>As hobbies I really enjoy working out, watching <a href="https://letterboxd.com/Giuseppetm/">movies</a>, editing some <a href="https://www.youtube.com/playlist?list=PL2s4PBjZpyrcUC9LUa9RBzcNA0mcD2VN_">videos</a> and playing piano and guitar.</p>
                </div>

                <Link to={"projects"} smooth={true} duration={500} className="link-button">
                    <div className="button" data-cursor-text="Click me">
                        Tell me more <MdArrowDownward />
                    </div>
                </Link>
            </div>
        </section>
    )
};

export default Hero;
