import { Link } from 'react-scroll';
import { MdArrowDownward } from "react-icons/md"; 

const Hero = () => {
    const calculateAge = (dob) => {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    };

    return (
        <section className="hero">
            <div className="content">
                <h1 className="outlined" data-cursor-text="Hello there!">GIUSEPPE <br className="show-br"/>DEL CAMPO</h1>

                <div className="box">
                    <p>I'm a {calculateAge(new Date(1999, 11, 10))} years old Front-end Developer, currently working at <a href="https://www.peoplelab.it/">People Lab SRL</a>.</p>

                    <p>
                        I studied computer science at the University of Milan,where I later worked on a H2020 European project called <a href="https://cordis.europa.eu/project/id/857172/it">Smart Bear</a>. <br/>
                        My passion for development led me to create <a href="https://studentiunimi.it/">studentiunimi.it</a>, one of the most advanced university websites in Italy, with an average of 5.000 monthly visitors.
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