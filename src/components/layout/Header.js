import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../custom.css';
import './header.css';

const StyledNavbar = styled(Navbar)`
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  padding-top: 20px;
  padding-bottom: 20px;
  position: fixed;
  width: 100%;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: ${props => props.scrolled ? 'blur(5px)' : 'none'};
`;

const NavLink = styled(Nav.Link)`
  color: ${props => props.scrolled ? '#6eb52f' : '#fff'} !important;
  font-weight: 500;
  margin: 0 10px;
  transition: color 0.3s ease;
  position: relative;
  padding: 5px 0;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #BDB837;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #BDB837 !important;
    
    &:after {
      width: 100%;
    }
  }
`;

const LogoImg = styled.img`
  height: 60px;
  transition: filter 0.3s ease;
  filter: ${props => props.scrolled ? 'none' : 'brightness(0) invert(1)'};
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
`;

const BrandText = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: ${props => props.scrolled ? '#6eb52f' : '#fff'};
  transition: color 0.3s ease;
  display: inline-block;
  vertical-align: middle;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <StyledNavbar expand="lg" fixed="top" scrolled={scrolled} variant={scrolled ? "light" : "dark"} className={`border-0 py-3 bg-transparent ${scrolled ? 'scrolled' : ''}`}>
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand as={Link} to="/">
            <LogoImg src="/images/logotest2.png" alt="Fontes & Hora" scrolled={scrolled} />
            <BrandText scrolled={scrolled}>FONTES & HORA</BrandText>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={`ms-auto ${scrolled ? 'scrolled' : ''}`} />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-menu">
            <Nav className="ms-auto">
              <NavLink as={Link} to="/" scrolled={scrolled}>Início</NavLink>
              <NavLink as={Link} to="/about" scrolled={scrolled}>Sobre Nós</NavLink>
              <NavLink as={Link} to="/services" scrolled={scrolled}>Serviços</NavLink>
              <NavLink as={Link} to="/contact" scrolled={scrolled}>Contacto</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default Header;
