import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import postgreSQL from "../../Assets/Projects/postgreSQL.png";
import Python from "../../Assets/Projects/Python.png";
import BigQuery from "../../Assets/Projects/BigQuery.png";
import WebScrap from "../../Assets/Projects/WebScrap.png";
import discord from "../../Assets/Projects/discord.png";
// import autoattendance from "../../Assets/Projects/autoattendance.png";
// import mail4spam from "../../Assets/Projects/mail4spam.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postgreSQL}
              isBlog={false}
              title="PostgreSQL - Movies Data"
              description="Movie data that has been normalized to 3NF and perform some data testing."
              ghLink="https://github.com/nabilahintaka/PostgreSQL-Portofolio"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BigQuery}
              isBlog={false}
              title="BigQuery - GoBike"
              description="San Francisco Ford GoBike Share data set from Google BigQuery"
              ghLink="https://github.com/nabilahintaka/BigQuery-Portofolio"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Python}
              isBlog={false}
              title="Python - Shopping Cart"
              description="a simple shopping cart program that allows users to add, remove, and view items in their shopping cart."
              ghLink="https://github.com/nabilahintaka/Python-Portofolio"
              demoLink=""              
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebScrap}
              isBlog={false}
              title="Web Scraping"
              description="Data collection using Web Scraping to analyze product sales on e-commerce Tokopedia"
              ghLink="https://github.com/nabilahintaka/Web-Scraping-Portofolio"
              demoLink=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Discord Bot"
              description="A discord bot for cek steam and game. I build this bot for monitoring steam status and game which is FiveM monitoring log connection"
              ghLink="https://github.com/slizea/DiscordBot"
              demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Discord Bot"
              description="A simple CRUD discord bot for reminder, user can make a todo list"
              ghLink="https://github.com/nabilahintaka/ReminderBot"
              demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elib}
              isBlog={false}
              title="Simple CRUD app For E-Library"
              description="Simple CRUD app For E-Library built with nativ PHP and MySQL. It only store the string data not the actual file, for the actual file is stored on google drive. I also build this app with another language, such as Java (JSP, JSF, Android). This is my university project/task."
              ghLink="https://github.com/Schutz3/ezlibrary"
              // demoLink="" <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
