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
              title="DIMS"
              description="This project is aimed at developing the Dealers Information Management System that is of importance to an organization. The Dealers Information Management System is used to track the Dealer Information and summarize all related activities of the Dealer and generate a report for different aspects. This is a web application by which organization can manage information of the dealers. This project has several modules such as Financial Dashboard, Complaint Management, Administration, User Management Change Password,Upload and Download files etc."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Monthly Checklist"
              description="This project is aimed at developing the Monthly Checklist Information of Plant Heads that is of importance to an organization. The Monthly Checklist is used to track the Organization Plants Information on Monthly basis. This is a web application by which organization can manage Monthly Closing Checklist. This project has several modules such as Closing Checklist, Questions, Categories, Users, Locations and Remainder etc."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sample Tracker"
              description="This project is designed to manage the details of material samples used in the manufacturing process for a building materials company. It includes sample tests and compiles the results into reports. The project consists of several modules, including user reports, report viewing, sample data entry, and sample assignment."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
