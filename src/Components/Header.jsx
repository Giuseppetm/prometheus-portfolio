import Fade from 'react-reveal/Fade';
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlineMail, MdOutlineMovie, MdSegment, MdClose } from "react-icons/md";
import { Link } from 'react-scroll';
import { useState } from "react";

const Header = () => {
    let [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header>
            <div className="desktop">
                <div className="content">
                    <a href="https://letterboxd.com/Giuseppetm/" data-cursor-stick="#stick-icon-1" id="stick-icon-1">
                        <MdOutlineMovie />
                    </a>
                    <a href="https://www.youtube.com/channel/UC48YylNs29E-9-EgA_0noFw" data-cursor-stick="#stick-icon-2" id="stick-icon-2">
                        <AiFillYoutube />
                    </a>
                    <a href="https://www.linkedin.com/in/giuseppe-del-campo/" data-cursor-stick="#stick-icon-3" id="stick-icon-3">
                        <AiFillLinkedin />
                    </a>
                    <a href="mailto:giuseppe.delcampo@outlook.com" data-cursor-stick="#stick-icon-4" id="stick-icon-4">
                        <MdOutlineMail />
                    </a>
                    <a href="https://github.com/Giuseppetm" data-cursor-stick="#stick-icon-5" id="stick-icon-5">
                        <VscGithub />
                    </a>
                    <div>
                        <a href="https://giuseppedelcampo.netlify.app" className="site-name">
                            <p>GIUSEPPE DEL CAMPO</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mobile">
                <div className="content">
                    {!isSidebarOpen ? <MdSegment onClick={() => setIsSidebarOpen(true)} /> : <MdClose onClick={() => setIsSidebarOpen(false)} /> }
                </div>

                <div style={{ display: isSidebarOpen ? 'block' : 'none' }} className="sidebar">
                    <Fade right duration={400} distance="30px">
                        <div className="sidebar-backdrop" />
                        <div className="sidebar-content">
                            <div className="header">
                                {!isSidebarOpen ? <MdSegment onClick={() => setIsSidebarOpen(true)} /> : <MdClose onClick={() => setIsSidebarOpen(false)} />}
                            </div>
                            <div className="menu-container">
                                <div className="menu-title">Menu</div>
                                <div className="menu-item"><Link to="hero" smooth duration={500} onClick={() => setIsSidebarOpen(false)}>Homepage</Link></div>
                                <div className="menu-item"><Link to="projects" smooth duration={500} onClick={() => setIsSidebarOpen(false)}>Projects</Link></div>
                                <div className="menu-item"><Link to="contact" smooth duration={500} onClick={() => setIsSidebarOpen(false)}>Get in touch</Link></div>
                            </div>
                            <div className="menu-container" style={{ marginTop: 30 }}>
                                <div className="menu-title">Contact</div>
                                <div><a href="mailto:giuseppe.delcampo@outlook.com">giuseppe.delcampo@outlook.com</a></div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </header>
    )
};

export default Header;