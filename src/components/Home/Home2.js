import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm passionate about Data and User Interface🚀
              <br />
              <br />Through my studies and work, I have gained in-depth knowledge in 
              <i>
                <b className="purple"> Data Analysis, Visualization and UI/UX Design</b>
              </i>
              , also learn how to customer research and analysis and collaborate with cross-functional teams.
              <br />
              <br />
              My field of interest includes &nbsp;
              <i>
                <b className="purple">Business Analysis and Product Management </b>
              </i>
              <br />
              <br />
              I've dealt with <b className="purple">User Research, Prototyping, Data Cleansing and Data Visualization </b>  
              that allows me to identify trends, insights that inform my design decisions, research in competitive analysis and monitoring
              <br />
              <br />
              I have a strong ability to learn, can work in a team, and possess problem-solving skills
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:zea@mizea.my.id"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://github.com/nabilahintaka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li> */
              /* <li className="social-icons">
              <a
                href=""
                target="_blank" 
                rel="noreferrer"
                className="icon-colour  home-social-icon"
              >
                <FaHackerrank/>
              </a>
            </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>*/
              /* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nabilahintaka/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>*/}
              /* <li className="social-icons"> 
                <a
                  href="https://www.instagram.com/mizeaaaa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram /> 
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;