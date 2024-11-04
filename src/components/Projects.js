import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Multi-Container Application Deployment with Docker Compose",
      description: "Using Docker Compose to deploy a multi-container application which is a simple Flask web app integrated with Redis. Docker Compose is used to orchestrate their deployment within a virtual environment on a cloud platform.",
      imgUrl: projImg1,
    },
    {
      title: "Multi-Service Web Application Deployment with Kubernetes",
      description: "Deployed a multi-container web application using Kubernetes for orchestration and scalability.",
      imgUrl: projImg2,
    },
    {
      title: "Scalable API Development and Deployment Using Docker and Flask",
      description: "Built and deployed a scalable REST API using Docker to containerize a Flask application.",
      imgUrl: projImg3,
    },
    {
      title: "Building a Cloud-Native Application with Docker Swarm",
      description: "Developed and managed a cloud-native application using Docker Swarm for container orchestration.",
      imgUrl: projImg4,
    },
    {
      title: "Continuous Integration and Delivery with Jenkins and Docker",
      description: "Set up a CI/CD pipeline using Jenkins to automate the deployment of Docker containerized applications",
      imgUrl: projImg5,
    },
    {
      title: "Microservices Architecture with Flask, Redis, and PostgreSQL Using Docker Compose",
      description: "Created a microservices architecture using Docker Compose to manage Flask, Redis, and PostgreSQL services.",
      imgUrl: projImg6,
    },
  ];

  // Inline styles for the pills and tabs
  const styles = {
    navPills: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
    },
    navItem: {
      flex: 1,
      textAlign: 'center',
    },
    navLink: {
      borderRadius: '20px',
      margin: '0 10px',
      transition: 'all 0.3s ease',
    },
    navLinkActive: {
      background: 'linear-gradient(90deg, #7b2ff7, #f107a3)',
      color: '#fff',
    },
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>This collection of projects showcases various approaches to deploying cloud-based applications using containerization and orchestration tools. From deploying multi-container applications with Docker Compose to leveraging Kubernetes for scalability, each project emphasizes practical implementation of key technologies used in modern cloud infrastructure</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" style={styles.navPills} id="pills-tab">
                    <Nav.Item style={styles.navItem}>
                      <Nav.Link eventKey="first" style={styles.navLink} activeStyle={styles.navLinkActive}>Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={styles.navItem}>
                      <Nav.Link eventKey="second" style={styles.navLink} activeStyle={styles.navLinkActive}>Tab 2</Nav.Link>
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
                      <p>These projects involve deploying web applications, building scalable APIs, creating microservices architectures, and setting up CI/CD pipelines—all while utilizing tools like Docker, Kubernetes, Jenkins, and Docker Swarm. The projects reflect my hands-on experience in building and deploying robust, maintainable, and scalable solutions in cloud environments.</p>
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
