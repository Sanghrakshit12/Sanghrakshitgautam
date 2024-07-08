import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";
import os from "../../Assets/certificates/os.png";
import  devs from "../../Assets/certificates/100x.png";

function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={devs}
              isBlog={false}
              title="100xDevs"
              description="This intensive program has equipped me with a deep understanding of full-stack development, covering essential technologies and practices such as the MERN stack, DevOps, system design, and open-source contributions. Throughout the cohort, I engaged in numerous hands-on assignments and projects, honing my skills in both frontend and backend development. I learned to build robust and scalable applications, mastered advanced DevOps techniques, and contributed to open-source projects, preparing myself for real-world challenges."
              demoLink="https://app.100xdevs.com/certificate/verify/WC3JLPMA"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={os}
              isBlog={false}
              title="Fundamentals of Operating Systems"
              description="This course has provided me with an in-depth understanding of how operating systems function. Through this course, I gained valuable insights into the inner workings of operating systems, which has enhanced my ability to write efficient and optimized software. A big thank you to Hussein Nasser for his clear and comprehensive teaching. I look forward to applying this knowledge in my future projects and endeavors!"
              demoLink="https://www.udemy.com/certificate/UC-16755fea-d024-4473-ac9c-1e23123ff02e/"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              isBlog={false}
              title="Azure Kubernetes Service, Azure Devops and Terraform"
              description="Currently Studying"
              demoLink=""
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
