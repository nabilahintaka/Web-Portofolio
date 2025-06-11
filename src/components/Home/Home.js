import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const webhookUrl = process.env.REACT_APP_VISITOR_WEBHOOK_URL || '';
  fetch('https://hutils.loxal.net/whois')
    .then(response => response.json())
    .then(data => {
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [{
            title: 'New Visitor - Portofolio',
            color: 0x9333ea,
            fields: Object.entries(data).map(([key, value]) => ({
              name: key,
              value: String(value),
              inline: true
            })),
            footer: {
              text: 'Web Portofolio'
            }
          }]
        })
      });
    });
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ZEA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>Im System.out.println("
                <Type />");
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
