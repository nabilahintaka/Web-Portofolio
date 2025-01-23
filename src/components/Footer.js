import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineDiscord,
} from "react-icons/ai";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Hosted on my potato pc</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            {/* <li className="social-icons">
              <a
                href="discord.gg/BuKXD5MM"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineDiscord />
              </a>
            </li> */}
            
            {/* <li className="social-icons">
              <a
                href="https://github.com/nabilahintaka"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> */
            /*<li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaHackerrank/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>*/
            /*<li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nabilahintaka/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li> }
            <li className="social-icons">
              <a
                href="https://www.instagram.com/nabilahintaka"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>*/}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
