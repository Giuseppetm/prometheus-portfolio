import { Link } from 'react-scroll';
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdArrowUpward, MdOutlineMail, MdOutlineMovie } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
            <div className="custom-container">

                <div className="first-content">
                    <div>
                        <a href="https://github.com/Giuseppetm/prometheus-portfolio"><h3 data-cursor-text="Find out">BASED ON PROMETHEUS PORTFOLIO</h3></a>
                        <a href="https://typesetinthefuture.com/2014/01/31/2001-a-space-odyssey/" className="link">
                            <p>Did you know that this font called &quot;Futura&quot; was used in &quot;2001 A Space Odyssey&quot;?</p>
                        </a>
                    </div>
                    <Link to={"hero"} smooth={true} duration={500}>
                        <div className="button" data-cursor-text="Go top">
                            <MdArrowUpward />
                        </div>
                    </Link>
                </div>

                <div className="second-content">
                    <div className="box">
                        <p style={{ marginBottom: 10}}>Website made with React and NextJS by <br className="show-br" /><a className="creator" href="https://github.com/Giuseppetm">GIUSEPPE DEL CAMPO</a></p>
                        <p style={{ marginTop: 0}}>You can find me here:</p>

                        <div className="icons">
                            <a className="icon" href="https://github.com/Giuseppetm" data-cursor-stick="#stick-icon-footer-5" id="stick-icon-footer-5" title='GitHub'>
                                <VscGithub />
                            </a>
                            <a className="icon" href="mailto:giuseppe.delcampo@outlook.com" data-cursor-stick="#stick-icon-footer-4" id="stick-icon-footer-4" title='Mail'>
                                <MdOutlineMail />
                            </a>
                            <a className="icon" href="https://www.linkedin.com/in/giuseppe-del-campo/" data-cursor-stick="#stick-icon-footer-3" id="stick-icon-footer-3" title='Linkedin'>
                                <AiFillLinkedin />
                            </a>
                            <a className="icon" href="https://www.youtube.com/channel/UC48YylNs29E-9-EgA_0noFw" data-cursor-stick="#stick-icon-footer-2" id="stick-icon-footer-2" title='Youtube'>
                                <AiFillYoutube />
                            </a>
                            <a className="icon" href="https://letterboxd.com/Giuseppetm/" data-cursor-stick="#stick-icon-footer-1" id="stick-icon-footer-1" title='Letterboxd'>
                                <MdOutlineMovie />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    )
};

export default Footer;