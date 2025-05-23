import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Mizea </span>
            from <span className="purple">Indonesia.</span>
            <br />
            I hold a Bachelor's degree in Information Systems from Binus University with internship experience as a UI/UX Designer 
            <br />
            <br />
            Apart from coding, some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new things
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on personal projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Enjoying my favorite songs 
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing some relaxing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Fomo about acel
            </li>
          </ul>

          <p style={{ color: "rgb(111, 197, 247)" }}>
            "Experience is the name everyone gives to their mistakes"{" "}
          </p>
          <footer className="blockquote-footer">Oscar Wilde</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
