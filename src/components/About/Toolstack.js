import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiTableau,
  SiLooker,
  SiFigma,
  SiGithub,
  SiTrello,
  SiNotion,

  SiPostman,
  SiSlack,
  SiDebian,
  SiWindows11,
  SiDocker,
  SiJenkins,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";

function Toolstack() {
  return (
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLooker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>


    </Row>
  );
}

export default Toolstack;
