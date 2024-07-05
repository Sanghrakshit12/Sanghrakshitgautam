import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Meet from "../../Assets/Projects/Nexmeet.png";
import Crypto from "../../Assets/Projects/cryptoxai.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Meet}
              isBlog={false}
              title="NexMeet"
              description="NexMeet, your all-in-one solution for immersive and seamless video conferencing. Built with cutting-edge NextJS technology, it redefines the virtual collaboration experience, making remote meetings as effective and engaging as in-person interactions"
              ghLink="https://github.com/Sanghrakshit12/Video_Conferencing_Application"
              demoLink="https://video-conferencing-application-phi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Crypto}
              isBlog={false}
              title="CryptoxAI"
              description="CRYPTOxAI is a cutting-edge platform combining cryptocurrency exchange with AI-driven insights. It delivers real-time information and  empowers investors to make informed decisions. Our unified workspace allows users to track currency progress, predict trends, and access reliable information about companies and currencies, all in one place."
              ghLink="https://github.com/Sanghrakshit12/NitJHackathon"
              demoLink="https://cryptoxai.vercel.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
