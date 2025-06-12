import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faCow, faLeaf, faChartLine } from '@fortawesome/free-solid-svg-icons';

const ServicesSection = styled.section`
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

const ServiceCard = styled(Card)`
  border: none;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #6eb52f;
  margin-bottom: 20px;
`;

const CardTitle = styled(Card.Title)`
  font-weight: 600;
  margin-bottom: 15px;
  color: #1a4d2e;
`;

const StyledLink = styled(Link)`
  color: #6eb52f;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    color: #5a9427;
    text-decoration: underline;
  }
`;

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      icon: faSeedling,
      title: 'Produção Agrícola',
      description: 'Cultivamos uma variedade de produtos agrícolas de alta qualidade, utilizando técnicas modernas e sustentáveis.',
      link: '/services#agricultural'
    },
    {
      id: 2,
      icon: faCow,
      title: 'Produção Animal',
      description: 'Criação de animais com foco no bem-estar animal e na qualidade dos produtos derivados.',
      link: '/services#animal'
    },
    {
      id: 3,
      icon: faLeaf,
      title: 'Agricultura Sustentável',
      description: 'Implementamos práticas agrícolas que respeitam o meio ambiente e promovem a biodiversidade.',
      link: '/services#sustainable'
    },
    {
      id: 4,
      icon: faChartLine,
      title: 'Consultoria Agrícola',
      description: 'Oferecemos serviços de consultoria para otimização de processos agrícolas e pecuários.',
      link: '/services#consulting'
    }
  ];

  return (
    <ServicesSection>
      <Container>
        <SectionTitle>Nossos Serviços</SectionTitle>
        <SectionSubtitle>
          A Sociedade Fontes & Hora oferece uma gama completa de serviços no setor agrícola e pecuário,
          sempre com foco na qualidade e sustentabilidade.
        </SectionSubtitle>
        
        <Row>
          {services.map(service => (
            <Col lg={3} md={6} className="mb-4" key={service.id}>
              <ServiceCard>
                <Card.Body className="text-center p-4">
                  <IconWrapper>
                    <FontAwesomeIcon icon={service.icon} />
                  </IconWrapper>
                  <CardTitle>{service.title}</CardTitle>
                  <Card.Text>{service.description}</Card.Text>
                  <StyledLink to={service.link}>Saiba mais</StyledLink>
                </Card.Body>
              </ServiceCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ServicesSection>
  );
};

export default ServicesOverview;
