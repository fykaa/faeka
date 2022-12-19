import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/faeka/"><img src={navIcon1} alt="" /></a>
              <a href="https://twitter.com/1fyka"><img src={navIcon4} alt="Twitter" /></a>
              <a href="https://github.com/fykaa"><img src={navIcon5} alt="GitHub" /></a>
              <a href="https://leetcode.com/fyka/"><img src={navIcon6} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved | Faeka Ansari</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
