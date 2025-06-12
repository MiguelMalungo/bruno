import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faCow, faLeaf, faChartLine, faCarrot, faAppleAlt, faTractor, faWater } from '@fortawesome/free-solid-svg-icons';

const PageHeader = styled.div`
  background: linear-gradient(rgba(26, 77, 46, 0.8), rgba(26, 77, 46, 0.8)), 
              #333;
  padding: 150px 0 80px;
  color: white;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 20px;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  padding: 80px 0;
  ${props => props.bgLight && `
    background-color: #f8f9fa;
  `}
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

const SectionText = styled.p`
  margin-bottom: 20px;
  line-height: 1.7;
`;

const ServiceCard = styled(Card)`
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: transform 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-color: #6eb52f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ServiceBody = styled(Card.Body)`
  padding: 25px;
`;

const ServiceTitle = styled(Card.Title)`
  font-weight: 600;
  margin-bottom: 15px;
  color: #1a4d2e;
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #6eb52f;
  margin-bottom: 20px;
  text-align: center;
`;

const ServicesPage = () => {
  const agriculturalServices = [
    {
      id: 'agricultural-1',
      icon: faCarrot,
      title: 'Produção de Hortícolas',
      description: 'Cultivamos uma variedade de vegetais frescos e nutritivos, utilizando técnicas que garantem qualidade e sabor excepcionais.',
      image: '/images/service-vegetables.jpg'
    },
    {
      id: 'agricultural-2',
      icon: faAppleAlt,
      title: 'Produção de Frutas',
      description: 'Nossas frutas são cultivadas com cuidado para garantir o melhor sabor e qualidade nutricional.',
      image: '/images/service-fruits.jpg'
    },
    {
      id: 'agricultural-3',
      icon: faTractor,
      title: 'Cultivo de Cereais',
      description: 'Produzimos cereais de alta qualidade utilizando técnicas modernas e sustentáveis de cultivo.',
      image: '/images/service-cereals.jpg'
    },
    {
      id: 'agricultural-4',
      icon: faWater,
      title: 'Sistemas de Irrigação',
      description: 'Implementamos sistemas eficientes de irrigação para otimizar o uso da água e garantir a saúde das culturas.',
      image: '/images/service-irrigation.jpg'
    }
  ];

  const animalServices = [
    {
      id: 'animal-1',
      title: 'Criação de Bovinos',
      description: 'Nossa criação de bovinos segue rigorosos padrões de bem-estar animal e qualidade.',
      image: '/images/service-cattle.jpg'
    },
    {
      id: 'animal-2',
      title: 'Produção de Laticínios',
      description: 'Produzimos laticínios frescos e saborosos a partir do leite de nossos animais criados com cuidado.',
      image: '/images/service-dairy.jpg'
    },
    {
      id: 'animal-3',
      title: 'Criação de Aves',
      description: 'Nossas aves são criadas em ambiente adequado, garantindo produtos de alta qualidade.',
      image: '/images/service-poultry.jpg'
    },
    {
      id: 'animal-4',
      title: 'Manejo Sustentável',
      description: 'Implementamos práticas de manejo que respeitam o bem-estar animal e o meio ambiente.',
      image: '/images/service-sustainable-management.jpg'
    }
  ];

  const sustainableServices = [
    {
      id: 'sustainable-1',
      title: 'Agricultura Orgânica',
      description: 'Cultivamos produtos orgânicos, livres de pesticidas e fertilizantes químicos.',
      image: '/images/service-organic.jpg'
    },
    {
      id: 'sustainable-2',
      title: 'Compostagem',
      description: 'Transformamos resíduos orgânicos em composto rico em nutrientes para fertilizar nossas culturas.',
      image: '/images/service-compost.jpg'
    },
    {
      id: 'sustainable-3',
      title: 'Conservação do Solo',
      description: 'Implementamos técnicas de conservação do solo para prevenir erosão e manter sua fertilidade.',
      image: '/images/service-soil.jpg'
    },
    {
      id: 'sustainable-4',
      title: 'Energia Renovável',
      description: 'Utilizamos fontes de energia renovável para reduzir nossa pegada de carbono.',
      image: '/images/service-renewable.jpg'
    }
  ];

  const consultingServices = [
    {
      id: 'consulting-1',
      title: 'Consultoria Agrícola',
      description: 'Oferecemos consultoria especializada para otimização de processos agrícolas e aumento de produtividade.',
      image: '/images/service-consulting.jpg'
    },
    {
      id: 'consulting-2',
      title: 'Análise de Solo',
      description: 'Realizamos análises detalhadas do solo para determinar suas necessidades específicas de nutrientes.',
      image: '/images/service-soil-analysis.jpg'
    },
    {
      id: 'consulting-3',
      title: 'Planejamento de Culturas',
      description: 'Ajudamos a planejar a rotação de culturas para maximizar a produtividade e saúde do solo.',
      image: '/images/service-crop-planning.jpg'
    },
    {
      id: 'consulting-4',
      title: 'Treinamento',
      description: 'Oferecemos treinamento em técnicas agrícolas modernas e sustentáveis para agricultores e equipes.',
      image: '/images/service-training.jpg'
    }
  ];

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Nossos Serviços</PageTitle>
          <PageSubtitle>
            Conheça a gama completa de serviços oferecidos pela Sociedade Fontes & Hora, Lda.
          </PageSubtitle>
        </Container>
      </PageHeader>

      <Section id="agricultural">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <SectionTitle>Produção Agrícola</SectionTitle>
              <SectionText>
                Nossa produção agrícola combina técnicas tradicionais com inovação tecnológica para oferecer 
                produtos de alta qualidade. Cultivamos uma variedade de vegetais, frutas e cereais, sempre 
                com foco na sustentabilidade e no respeito ao meio ambiente.
              </SectionText>
              <SectionText>
                Utilizamos sistemas de irrigação eficientes e práticas de manejo do solo que garantem a 
                saúde das culturas e a preservação dos recursos naturais. Nosso compromisso é fornecer 
                alimentos frescos, saborosos e nutritivos para nossos clientes.
              </SectionText>
            </Col>
            <Col lg={6}>
              <IconWrapper>
                <FontAwesomeIcon icon={faSeedling} style={{ fontSize: '5rem' }} />
              </IconWrapper>
            </Col>
          </Row>
          
          <Row>
            {agriculturalServices.map(service => (
              <Col lg={3} md={6} className="mb-4" key={service.id}>
                <ServiceCard>
                  <ServiceImage>{service.title}</ServiceImage>
                  <ServiceBody>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <Card.Text>{service.description}</Card.Text>
                  </ServiceBody>
                </ServiceCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <Section id="animal" bgLight>
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
              <SectionTitle>Produção Animal</SectionTitle>
              <SectionText>
                Nossa produção animal é baseada em princípios de bem-estar e manejo sustentável. Criamos 
                bovinos, aves e outros animais em condições que respeitam suas necessidades naturais, 
                resultando em produtos de qualidade superior.
              </SectionText>
              <SectionText>
                Investimos em instalações adequadas e em uma alimentação balanceada para nossos animais, 
                garantindo sua saúde e o alto padrão dos produtos derivados, como carnes e laticínios.
              </SectionText>
            </Col>
            <Col lg={6} className="order-lg-1">
              <IconWrapper>
                <FontAwesomeIcon icon={faCow} style={{ fontSize: '5rem' }} />
              </IconWrapper>
            </Col>
          </Row>
          
          <Row>
            {animalServices.map(service => (
              <Col lg={3} md={6} className="mb-4" key={service.id}>
                <ServiceCard>
                  <ServiceImage>{service.title}</ServiceImage>
                  <ServiceBody>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <Card.Text>{service.description}</Card.Text>
                  </ServiceBody>
                </ServiceCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <Section id="sustainable">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <SectionTitle>Agricultura Sustentável</SectionTitle>
              <SectionText>
                A sustentabilidade está no centro de todas as nossas operações. Implementamos práticas 
                agrícolas que minimizam o impacto ambiental e promovem a biodiversidade, como agricultura 
                orgânica, compostagem e conservação do solo.
              </SectionText>
              <SectionText>
                Também investimos em fontes de energia renovável e em sistemas eficientes de gestão de 
                recursos hídricos, contribuindo para a preservação do meio ambiente e para a construção 
                de um futuro mais sustentável.
              </SectionText>
            </Col>
            <Col lg={6}>
              <IconWrapper>
                <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '5rem' }} />
              </IconWrapper>
            </Col>
          </Row>
          
          <Row>
            {sustainableServices.map(service => (
              <Col lg={3} md={6} className="mb-4" key={service.id}>
                <ServiceCard>
                  <ServiceImage>{service.title}</ServiceImage>
                  <ServiceBody>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <Card.Text>{service.description}</Card.Text>
                  </ServiceBody>
                </ServiceCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <Section id="consulting" bgLight>
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
              <SectionTitle>Consultoria Agrícola</SectionTitle>
              <SectionText>
                Nossa equipe de especialistas oferece serviços de consultoria para agricultores e empresas 
                do setor agropecuário. Compartilhamos nosso conhecimento e experiência para ajudar a 
                otimizar processos, aumentar a produtividade e implementar práticas sustentáveis.
              </SectionText>
              <SectionText>
                Oferecemos análises de solo, planejamento de culturas, treinamento e outras soluções 
                personalizadas para atender às necessidades específicas de cada cliente.
              </SectionText>
            </Col>
            <Col lg={6} className="order-lg-1">
              <IconWrapper>
                <FontAwesomeIcon icon={faChartLine} style={{ fontSize: '5rem' }} />
              </IconWrapper>
            </Col>
          </Row>
          
          <Row>
            {consultingServices.map(service => (
              <Col lg={3} md={6} className="mb-4" key={service.id}>
                <ServiceCard>
                  <ServiceImage>{service.title}</ServiceImage>
                  <ServiceBody>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <Card.Text>{service.description}</Card.Text>
                  </ServiceBody>
                </ServiceCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default ServicesPage;
