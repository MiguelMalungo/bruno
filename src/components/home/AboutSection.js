import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutSectionWrapper = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
  font-weight: 700;
  color: #1a4d2e;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 3px;
    background-color: #6eb52f;
  }
`;

const AboutContent = styled.div`
  margin-top: 30px;
`;

const AboutText = styled.p`
  margin-bottom: 20px;
  line-height: 1.7;
`;

const StyledButton = styled(Button)`
  background-color: #6eb52f;
  border-color: #6eb52f;
  padding: 10px 25px;
  font-weight: 700;
  border-radius: 25px;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  float: left;
  display: block;
  
  &:hover {
    background-color: #5a9427;
    border-color: #5a9427;
    color: #ffffff;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
`;

const MainImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  object-fit: cover;
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  background-color: #f0f7e6;
  border-radius: 10px;
  bottom: -20px;
  right: -20px;
  z-index: 1;
`;

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="order-lg-2 mb-5 mb-lg-0">
            <ImageWrapper>
              <MainImage src={process.env.PUBLIC_URL + '/farmer.png'} alt="Agricultor" />
              <BackgroundShape />
            </ImageWrapper>
          </Col>
          
          <Col lg={6} md={12} className="order-lg-1">
            <SectionTitle>Sobre a Sociedade Fontes & Hora</SectionTitle>
            <AboutContent>
              <AboutText>
                Fundada com o compromisso de excelência na produção agrícola e animal, a Sociedade Fontes & Hora, Lda 
                tem se destacado no setor agropecuário na região do Porto.
              </AboutText>
              <AboutText>
                Localizada em Lavra, nossa empresa combina técnicas tradicionais com inovação tecnológica para 
                oferecer produtos e serviços de alta qualidade, sempre respeitando o meio ambiente e promovendo 
                práticas sustentáveis.
              </AboutText>
              <AboutText>
                Nossa missão é contribuir para o desenvolvimento do setor agrícola português, fornecendo 
                produtos de qualidade e serviços especializados que atendam às necessidades dos nossos clientes 
                e parceiros.
              </AboutText>
              <StyledButton as={Link} to="/about">Quem Somos</StyledButton>
            </AboutContent>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
