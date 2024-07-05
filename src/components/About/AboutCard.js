import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanghrakshit gautam </span>
            from <span className="purple"> Dehradun, Uttarakhand</span>
            <br />
            I am currently working as a Devops Intern at School Hack (a Dubai based Startup)
            <br />
            I'm a Final Year Computer Science & Engineering Undergrad at National Institute of Technology Jalandhar 👩🏻‍🎓
            <br />
            <br />
            Apart from coding,I'm a!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football Athlete
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveller
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sanghrakshit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
