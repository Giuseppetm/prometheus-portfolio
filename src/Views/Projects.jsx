import { Row, Col } from 'react-flexbox-grid';
import ProjectsData from '../Data/Projects';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="section-header">
                <h3>01</h3>
                <h2 data-cursor-text="See my projects">PROJECTS</h2>
            </div>

            <Row gutterWidth={16}>
                {
                    ProjectsData.map((x,i) => {
                        return (
                            <Col xs={12} sm={6} md={6} lg={3} key={i}>
                                <a href={x.url ?? x.repo}>
                                    <div className="project" key={i} data-cursor-img={require(`../Images/${x.img}`)}>
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