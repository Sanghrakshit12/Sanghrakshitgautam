import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Meet from "../../Assets/Projects/Nexmeet.png";
import Crypto from "../../Assets/Projects/cryptoxai.png";
import Mon from '../../Assets/Projects/mon.png'

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mon}
              isBlog={false}
              title="MoneyTransferX"
              description="This full-stack application enables users to securely transfer money between accounts. Built with modern technologies, it leverages Express.js as the HTTP server for the backend, seamlessly connecting to MongoDB using Mongoose as the ODM for data management On the frontend, React is employed as the framework of choice, providing a dynamic and intuitive user interface for seamless interaction with the Application."
              ghLink="https://github.com/Sanghrakshit12/Money-transfering-Application-Fullstack"
              demoLink="https://money-transfering-application-fullstack.vercel.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
