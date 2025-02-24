import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import postgreSQL from "../../Assets/Projects/postgreSQL.png";
import Python from "../../Assets/Projects/Python.png";
import BigQuery from "../../Assets/Projects/BigQuery.png";
import WebScrap from "../../Assets/Projects/WebScrap.png";
import bookshelf from "../../Assets/Projects/bookshelf.png";
import dnike from "../../Assets/Projects/dnike.png";
import games from "../../Assets/Projects/games.png";
import electricity from "../../Assets/Projects/electricity.png";
import cart from "../../Assets/Projects/cart.png";

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
              imgPath={electricity}
              isBlog={false}
              title="Electricity Energy Analysis Dashboard"
              description="Developing an automated data pipeline system (ETL) by combining Apache, Pandas, NeonDB, PostgreSQL and Tableau"
              ghLink="https://github.com/nabilahintaka/Electricity-Energy-Analyst"
              demoLink=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={games}
              isBlog={false}
              title="Video Game Sales Analysis Dashboard"
              description="Data analysis and visualization of video games sales based on genre, platform and publisher in various region, and creating a dashboard"
              ghLink="https://github.com/nabilahintaka/Video-Game-Sales-Analysis-Portofolio"
              demoLink=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="Data Warehouse"
              description="This project is for create a data Warehouse design and sales business process for the company's analysis"
              ghLink="https://github.com/nabilahintaka/Data-Warehouse"
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
              imgPath={WebScrap}
              isBlog={false}
              title="Web Scraping"
              description="Data collection using Web Scraping to analyze skincare sales from female daily "
              ghLink="https://github.com/nabilahintaka/Web-Scraping-Portofolio2"
              demoLink=""
            />
          </Col> 

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
              imgPath={bookshelf}
              isBlog={false}
              title="Bookshelf Apps"
              description="Bookshelf Apps is a book data storage website that can store, move and delete data using a web storage. This is a Submission for Dicoding Course"
              ghLink="https://github.com/nabilahintaka/BookshelfApps"
              demoLink="https://bookshelf.mizea.my.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dnike}
              isBlog={false}
              title="DNike"
              description="DNike is a website store that sell a shoes, users can view products, buy and give testimonials. This is a project that i created for University assignment"
              ghLink="https://github.com/nabilahintaka/DNike"
              demoLink="https://dnike.mizea.my.id/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
