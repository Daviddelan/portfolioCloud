import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleButtonClick = (page) => {
    setActiveLink(page);
    navigate(`/${page.toLowerCase()}`);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <button
                className={`btn ${activeLink === 'david' ? 'btn-dark' : 'btn-primary'} my-custom-btn me-2`}
                onClick={() => handleButtonClick('david')}>
                David
              </button>

              <button
                className={`btn ${activeLink === 'ohemaa' ? 'btn-dark' : 'btn-primary'} my-custom-btn me-2`}
                onClick={() => handleButtonClick('ohemaa')}>
                Ohemaa
              </button>

              <button
                className={`btn ${activeLink === 'brian' ? 'btn-dark' : 'btn-primary'} my-custom-btn me-2`}
                onClick={() => handleButtonClick('brian')}>
                Brian
              </button>

              <button
                className={`btn ${activeLink === 'arnold' ? 'btn-dark' : 'btn-primary'} my-custom-btn`}
                onClick={() => handleButtonClick('arnold')}>
                Arnold
              </button>
              
            </Nav.Item>
          </Nav>
          <span className="navbar-text">
            <HashLink to='#connect'>
              <button className="vvd"><span>Go to end</span></button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
