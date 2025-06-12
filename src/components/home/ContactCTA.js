import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CTASection = styled.section`
  padding: 80px 0;
  background: linear-gradient(rgba(26, 77, 46, 0.9), rgba(26, 77, 46, 0.9)), 
              #333;
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-weight: 700;
  margin-bottom: 20px;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledButton = styled(Button)`
  background-color: #6eb52f;
  border-color: #6eb52f;
  padding: 12px 30px;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 25px;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #5a9427;
    border-color: #5a9427;
    color: #ffffff;
  }
`;

const ContactCTA = () => {
  return (
    <CTASection>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <CTATitle>Vamos Trabalhar Juntos</CTATitle>
            <CTAText>
              Quer saber mais sobre nossos produtos e serviços? Entre em contacto connosco hoje mesmo
              e descubra como a Sociedade Fontes & Hora pode atender às suas necessidades.
            </CTAText>
            <StyledButton as={Link} to="/contact">Contacte-nos</StyledButton>
          </Col>
        </Row>
      </Container>
    </CTASection>
  );
};

export default ContactCTA;
