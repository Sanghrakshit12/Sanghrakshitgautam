import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillCode,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Sanghrakshit gautam</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} San@NITJ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Sanghrakshit12"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
               href="https://x.com/Sanghrakshit12"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sanghrakshit/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
              href="https://www.instagram.com/sanghrakshit_/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://leetcode.com/sanghrakshit/"
                  style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <AiFillCode />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
