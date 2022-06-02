import { MdArrowDownward } from "react-icons/md"; 

const Hero = () => {
    return (
        <section className="hero">
            <div className="content">
                <h1 className="outlined" data-cursor-text="Hello there!">GIUSEPPE <br className="show-br"/>DEL CAMPO</h1>

                <div className="box">
                    <p>I'm a 22 years old .NET Developer, currently working at <a href="#1">@Egeatech SRL</a>.</p>

                    <p>I studied computer science at the University of Milan, where I later worked as <a href="#1">Smart Bear</a> Front-end Developer.<br/>
                    In the last year I have developed a website for one of the largest university networks in Italy, that is <a href="#1">studentiunimi.it</a></p>

                    <p>As hobbies I really enjoy working out, watching <a href="#1">movies</a>, editing some <a href="#1">videos</a> and playing piano and guitar.</p>
                </div>

                <div className="button" data-cursor-text="Click me">
                    Tell me more <MdArrowDownward />
                </div>
            </div>
        </section>
    )
};

export default Hero;