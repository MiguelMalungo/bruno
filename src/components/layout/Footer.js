import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
  background-color: #1a4d2e;
  color: #fff;
  padding: 60px 0 20px;
`;

const FooterTitle = styled.h5`
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 2px;
    background-color: #6eb52f;
  }
`;

const FooterLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6eb52f;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  width: 20px;
  color: #6eb52f;
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 15px;
  color: #fff;
  transition: color 0.3s ease;
  
  &:hover {
    color: #6eb52f;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  color: #ccc;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-md-0">
            <FooterTitle>Sobre Nós</FooterTitle>
            <p>
              Sociedade Fontes & Hora, Lda é uma empresa dedicada à produção agrícola e animal combinadas,
              localizada em Lavra, no distrito do Porto. Comprometemo-nos com a qualidade e sustentabilidade
              em todas as nossas operações.
            </p>
            <div className="mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <SocialIcon icon={faFacebook} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <SocialIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <SocialIcon icon={faLinkedin} />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-md-0">
            <FooterTitle>Links</FooterTitle>
            <FooterLink to="/">Início</FooterLink>
            <FooterLink to="/about">Sobre Nós</FooterLink>
            <FooterLink to="/services">Serviços</FooterLink>
            <FooterLink to="/contact">Contacto</FooterLink>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <FooterTitle>Serviços</FooterTitle>
            <FooterLink to="/services#agricultural">Produção Agrícola</FooterLink>
            <FooterLink to="/services#animal">Produção Animal</FooterLink>
            <FooterLink to="/services#sustainable">Agricultura Sustentável</FooterLink>
            <FooterLink to="/services#consulting">Consultoria Agrícola</FooterLink>
          </Col>
          
          <Col lg={3} md={6}>
            <FooterTitle>Contacto</FooterTitle>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </IconWrapper>
              <div>Lavra, 4455-157<br />Porto, Portugal</div>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faPhone} />
              </IconWrapper>
              <div>+351 229 430 780</div>
            </ContactItem>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faEnvelope} />
              </IconWrapper>
              <div>info@fontesehora.pt</div>
            </ContactItem>
          </Col>
        </Row>
        
        <Copyright>
          &copy; {currentYear} Sociedade Fontes & Hora, Lda. Todos os direitos reservados.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
