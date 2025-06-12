import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-weight: 700;
  color: #1a4d2e;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: #666;
`;

const TestimonialCard = styled(Card)`
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  padding: 30px;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: #6eb52f;
  margin-bottom: 20px;
  opacity: 0.5;
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 20px;
  color: #555;
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ClientName = styled.h5`
  margin-bottom: 5px;
  font-weight: 600;
  color: #1a4d2e;
`;

const ClientRole = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  color: #6eb52f;
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "A Sociedade Fontes & Hora tem sido uma parceira incrível para o nosso negócio. A qualidade dos produtos agrícolas que eles fornecem é excepcional, e o serviço é sempre profissional e pontual.",
      name: "João Silva",
      role: "Proprietário, Restaurante Sabores do Campo",
      image: "/images/testimonial-1.jpg"
    },
    {
      id: 2,
      text: "Trabalhamos com a Fontes & Hora há mais de 5 anos e sempre ficamos impressionados com seu compromisso com a sustentabilidade e a qualidade. Seus produtos são consistentemente os melhores do mercado.",
      name: "Maria Santos",
      role: "Gerente de Compras, Supermercados Região Norte",
      image: "/images/testimonial-2.jpg"
    },
    {
      id: 3,
      text: "A consultoria agrícola fornecida pela equipe da Fontes & Hora transformou completamente nossa produção. Aumentamos a produtividade em 30% e reduzimos custos seguindo suas recomendações.",
      name: "António Ferreira",
      role: "Agricultor, Quinta dos Olivais",
      image: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <TestimonialsSection>
      <Container>
        <SectionTitle>O Que Dizem Nossos Clientes</SectionTitle>
        <SectionSubtitle>
          Conheça a opinião de alguns dos nossos clientes e parceiros sobre os produtos e serviços da Sociedade Fontes & Hora.
        </SectionSubtitle>
        
        <Row>
          {testimonials.map(testimonial => (
            <Col lg={4} md={6} className="mb-4" key={testimonial.id}>
              <TestimonialCard>
                <QuoteIcon>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </QuoteIcon>
                <TestimonialText>
                  {testimonial.text}
                </TestimonialText>
                <ClientInfo>
                  <ClientName>{testimonial.name}</ClientName>
                  <ClientRole>{testimonial.role}</ClientRole>
                </ClientInfo>
              </TestimonialCard>
            </Col>
          ))}
        </Row>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
