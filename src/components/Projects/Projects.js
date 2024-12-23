import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PostgreSQL from "../../Assets/Projects/PostgreSQL.png";
import schatz from "../../Assets/Projects/schatz.png";
import BigQuery from "../../Assets/Projects/BigQuery.png";
import elib from "../../Assets/Projects/elib.png";
import medivent from "../../Assets/Projects/medivent.png";
import autoattendance from "../../Assets/Projects/autoattendance.png";
import mail4spam from "../../Assets/Projects/mail4spam.png";


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
              imgPath={PostgreSQL}
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mail4spam}
              isBlog={false}
              title="Mail4Spam - Your place for save spam emails"
              description="Mail4Spam is a web application that allows users to save and archive spam emails from their inbox. It uses the cloudflare workers protocol to fetch emails and store to mongodb and provides an easy-to-use interface. Build with Vite, React, Express, MongoDB, DaisyUI, Socket.io"
              ghLink="https://github.com/Schutz3"
              demoLink="https://mail.scz.my.id/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schatz}
              isBlog={false}
              title="sChatz - Simple Realtime Chat App"
              description="Simple Realtime chat app built with React, Vite, Express, DaisyUI and MongoDB. It used socket.io to implement realtime comunication. Hosted on my potato home server. "
              ghLink="https://github.com/Schutz3"
              demoLink="https://chatz.scz.my.id/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autoattendance}
              isBlog={false}
              title="A telegram bot for auto attendance"
              description="Telegram bot for do automatic task (like login, click buttons etc) on specified time or day. Written in Python using Selenium Webdriver. I build this bot because me & my friends always forgot to submit attendance (bcz im on the way to campus)"
              ghLink="https://github.com/Schutz3"
              // demoLink="" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medivent}
              isBlog={false}
              title="Simple CRUD app For Medicine Inventory"
              description="Build using native java in android studio. it store the data on Firebase Firestore. This a my university project/task."
              ghLink="https://github.com/Schutz3/MedIventApps"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col> */}
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
