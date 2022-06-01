import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { MdOutlineMail, MdOutlineMovie, MdSegment, MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
    let [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header>
            <div className="desktop">
                <div className="content">
                    <a href="#1" data-cursor-stick="#stick-icon-1" id="stick-icon-1">
                        <MdOutlineMovie />
                    </a>
                    <a href="#1" data-cursor-stick="#stick-icon-2" id="stick-icon-2">
                        <AiFillYoutube />
                    </a>
                    <a href="#2" data-cursor-stick="#stick-icon-3" id="stick-icon-3">
                        <AiFillLinkedin />
                    </a>
                    <a href="#3" data-cursor-stick="#stick-icon-4" id="stick-icon-4">
                        <MdOutlineMail />
                    </a>
                    <a href="#4" data-cursor-stick="#stick-icon-5" id="stick-icon-5">
                        <VscGithub />
                    </a>
                    <div>
                        <p className="site-name">GIUSEPPE DEL CAMPO</p>
                    </div>
                </div>
            </div>

            <div className="mobile">
                <div className="content">
                    {!isSidebarOpen ? <MdSegment onClick={() => setIsSidebarOpen(true)} /> : <MdClose onClick={() => setIsSidebarOpen(false)} /> }
                </div>
            </div>
        </header>
    )
};

export default Header;