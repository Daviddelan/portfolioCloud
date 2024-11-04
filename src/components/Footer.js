import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start">
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icons" style={{ marginBottom: '10px' }}>
              <a href="#" style={{ margin: '0 10px', color: '#fff' }}><FaFacebookF /></a>
              <a href="#" style={{ margin: '0 10px', color: '#fff' }}><FaTwitter /></a>
              <a href="#" style={{ margin: '0 10px', color: '#fff' }}><FaInstagram /></a>
            </div>
            <p style={{ margin: 0 }}>© {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
