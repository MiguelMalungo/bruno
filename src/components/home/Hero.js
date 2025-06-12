import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../custom.css';

const HeroSection = styled.section`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  
  @media (max-height: 500px) and (orientation: landscape) {
    align-items: center;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  display: block;
  margin: 0;
  padding: 0;
`;

const HeroContent = styled.div`
  max-width: 700px;
  text-align: left;
  position: relative;
  z-index: 2;
  
  @media (max-height: 500px) and (orientation: landscape) {
    padding-top: 30px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: calc(3.5rem - 12px);
  }
  
  @media (max-width: 576px) {
    font-size: 2.2rem;
  }
  
  @media (max-height: 500px) and (orientation: landscape) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  
  @media (max-height: 500px) and (orientation: landscape) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

const StyledButton = styled(Button)`
  background-color: #6eb52f;
  border-color: #6eb52f;
  padding: 12px 30px;
  font-weight: 700;
  border-radius: 25px;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
  margin-top: 20px;
  display: block;
  width: fit-content;
  float: left;
  
  &:hover {
    background-color: #5a9427;
    border-color: #5a9427;
    color: #ffffff;
  }
  
  @media (max-height: 500px) and (orientation: landscape) {
    padding: 8px 20px;
    font-size: 0.9rem;
    margin-top: 10px;
  }
  
  @media (max-width: 576px) {
    padding: 10px 25px;
    margin-top: 15px;
  }
`;

const Hero = () => {
  return (
    <HeroSection className="hero-section">
      <BackgroundVideo autoPlay muted loop playsInline className="video-background">
        <source src="/videos/farm.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <VideoOverlay />
      <Container className="hero-container">
        <Row>
          <Col lg={8}>
            <HeroContent>
              <HeroTitle>Produção Agrícola e Animal de Excelência</HeroTitle>
              <HeroSubtitle>
                A Sociedade Fontes & Hora dedica-se à produção agrícola e animal combinadas, 
                com foco na qualidade e sustentabilidade. Conheça os nossos serviços e produtos.
              </HeroSubtitle>
              <StyledButton as={Link} to="/contact">Vamos Trabalhar Juntos</StyledButton>
            </HeroContent>
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
};

export default Hero;
