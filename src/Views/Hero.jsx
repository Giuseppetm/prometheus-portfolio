import { MdArrowDownward } from "react-icons/md"; 

const Hero = () => {
    return (
        <section className="hero">
            <div className="content">
                <h1 className="outlined" data-cursor-text="Hello there!">GIUSEPPE <br className="show-br"/>DEL CAMPO</h1>

                <div className="box">
                    <p>I'm a 22 years old .NET Developer, currently working at <a href="https://www.egeatech.com/">@Egeatech SRL</a>.</p>

                    <p>I studied computer science at the University of Milan, where I later worked as <a href="https://cordis.europa.eu/project/id/857172/it">Smart Bear</a> Front-end Developer.<br/>
                    In the last year I have developed a website for one of the largest university networks in Italy, that is <a href="https://studentiunimi.it/">studentiunimi.it</a></p>

                    <p>As hobbies I really enjoy working out, watching <a href="https://letterboxd.com/Giuseppetm/">movies</a>, editing some <a href="https://www.youtube.com/playlist?list=PL2s4PBjZpyrcUC9LUa9RBzcNA0mcD2VN_">videos</a> and playing piano and guitar.</p>
                </div>

                <div className="button" data-cursor-text="Click me">
                    Tell me more <MdArrowDownward />
                </div>
            </div>
        </section>
    )
};

export default Hero;