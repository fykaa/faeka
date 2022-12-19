import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Content Corral",
      description: "Content Aggregator using Python, Django framework & 16+ libraries such as Matplotlib, Numpy, Pandas, PyAutoGUI, PyYAML, Requests, Seaborn, SQLParse, StatsModels, BeautifulSoup4, Flask and Wikipedia for optimizing the performance with an average response time of 200ms.",
      imgUrl: projImg1,
    },
    {
      title: "PyPAL - Python Powered Personal Assistant",
      description: "• Developed an automated virtual assistant using 10+ Python libraries such as subprocess, wolframalpha, pyttsx3, operator, speech_recognition, smtplib, ctypes, twilio and ecapture.Utilized NLP, AI and ML using speech recognition to respond accurately to user requests with a response rate of 84%.",
      imgUrl: projImg2,
    },
    {
      title: "Sample Portfolio",
      description: "Static Sample Portfolio Page Specially for beginners to contribute into Hacktoberfest and start their open source journey with their first pull requests! This project successfully lead more than 50 positive PRs with 20+ Community meets",
      imgUrl: projImg3,
    },
    {
      title: "Spotified GitHub",
      description: "An Open source sorta Spotify application where users can Fork other's Playlist, Create Issues on their albums, Send PRs for collaboration. | Ideation",
      imgUrl: projImg1,
    },
    {
      title: "Food Delivery Website ",
      description: "HTML CSS Static Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Sellular Website",
      description: "React JS",
      imgUrl: projImg3,
    },
  ];
  const techstack = [
    {
      title: "HTML",
      description: "",
      imgUrl: projImg1,
    },
  ];
  const achievements = [
    {
      title: "GitHub Campus Expert",
      description: "",
      imgUrl: projImg1,
    },
    {
      title: "Microsoft Learn Student Ambassador",
      description: "",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>This section showcases a selection of my recent projects. It includes projects I have completed in web development, software engineering, and data science. I have included brief descriptions of each project and links to the source code and any relevant documentation inside each.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tech Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Achievements</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            techstack.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            achievements.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
