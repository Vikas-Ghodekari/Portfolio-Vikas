import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="LIMS plus v5"
              description="It is a Forensic application which consists of integration of 4 majorapplications (1 web application and 3 API applications). V5 is a casemanagement tool providing versatile software to leverage the powerof technology with numerous customizable features like evidencetracking, analytical results and lab management information toprovide a clear view of your laboratory and every case in it"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CIMS"
              description=".NET 6.0 MVC Web Application designed for Forensic domain. Theapplication mainly focuses on organizing labs, chemicals, storagesand tracking chemicals in terms of Usage and their procedures tocheck quality, composition etc."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="LIMS plus DNA"
              description="DNA is a stand-alone DNA application designed to reduce DNAbacklogs by automating forensic sample processing for both caseworkand databanks as well as automating the delivery of DNA profiles tolocal, state, and national databanks."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
