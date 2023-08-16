import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectsData from '../Data/Projects';
import Image from 'next/image';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="section-header">
                <h3>01</h3>
                <h2 data-cursor-text="See my projects" className="outlined">PROJECTS</h2>
            </div>

            <Row>
                {
                    ProjectsData.map((x,i) => {
                        return (
                            <Col xs={12} sm={6} md={6} lg={4} key={i}>
                                <a href={x.url ?? x.repo}>
                                    <div className="project">
                                        <Image className="project-image" src={`/Images/${x.img}`} alt={x.title} width={1280} height={720} />
                                        <p>{x.title}</p>
                                    </div>
                                </a>
                            </Col>
                        );
                    })
                }
            </Row>
        </section>
    )
};

export default Projects;
