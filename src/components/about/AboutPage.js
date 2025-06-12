import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHandshake, faAward, faUsers } from '@fortawesome/free-solid-svg-icons';

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

const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 400px;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6eb52f;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ValueCard = styled(Card)`
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #6eb52f;
  margin-bottom: 20px;
`;

const CardTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 15px;
  color: #1a4d2e;
`;

const TeamSection = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;
`;

const TeamTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-weight: 700;
  color: #1a4d2e;
`;

const TeamSubtitle = styled.p`
  text-align: center;
  margin-bottom: 50px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: #666;
`;

const TeamCard = styled(Card)`
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const TeamMemberImage = styled.div`
  height: 300px;
  background-color: #1a4d2e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const TeamMemberInfo = styled(Card.Body)`
  text-align: center;
  padding: 20px;
`;

const TeamMemberName = styled.h4`
  font-weight: 600;
  margin-bottom: 5px;
  color: #1a4d2e;
`;

const TeamMemberRole = styled.p`
  color: #6eb52f;
  margin-bottom: 15px;
`;

const AboutPage = () => {
  const values = [
    {
      id: 1,
      icon: faLeaf,
      title: 'Sustentabilidade',
      description: 'Comprometemo-nos com práticas agrícolas e pecuárias que respeitam o meio ambiente e promovem a biodiversidade.'
    },
    {
      id: 2,
      icon: faHandshake,
      title: 'Integridade',
      description: 'Conduzimos nossos negócios com honestidade, transparência e respeito por todos os nossos parceiros e clientes.'
    },
    {
      id: 3,
      icon: faAward,
      title: 'Excelência',
      description: 'Buscamos constantemente a excelência em todos os nossos produtos e serviços, garantindo a mais alta qualidade.'
    },
    {
      id: 4,
      icon: faUsers,
      title: 'Comunidade',
      description: 'Valorizamos nossa comunidade local e contribuímos para o seu desenvolvimento econômico e social.'
    }
  ];

  const team = [
    {
      id: 1,
      name: 'António Fontes',
      role: 'Diretor Geral',
      image: '/images/team-1.jpg',
      bio: 'Com mais de 25 anos de experiência no setor agrícola, António lidera a empresa com visão e dedicação.'
    },
    {
      id: 2,
      name: 'Maria Hora',
      role: 'Diretora de Operações',
      image: '/images/team-2.jpg',
      bio: 'Especialista em produção animal, Maria é responsável por garantir a eficiência e qualidade de todas as operações.'
    },
    {
      id: 3,
      name: 'João Pereira',
      role: 'Gestor Agrícola',
      image: '/images/team-3.jpg',
      bio: 'João traz inovação e conhecimento técnico para otimizar nossa produção agrícola e implementar práticas sustentáveis.'
    }
  ];

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Sobre Nós</PageTitle>
          <PageSubtitle>
            Conheça a história, valores e equipe por trás da Sociedade Fontes & Hora, Lda.
          </PageSubtitle>
        </Container>
      </PageHeader>

      <Section>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <SectionTitle>Nossa História</SectionTitle>
              <SectionText>
                Fundada em 1985, a Sociedade Fontes & Hora, Lda nasceu da paixão de duas famílias pela agricultura 
                e pela criação de animais. Localizada em Lavra, no distrito do Porto, nossa empresa começou como 
                um pequeno negócio familiar e cresceu para se tornar uma referência no setor agropecuário da região.
              </SectionText>
              <SectionText>
                Ao longo dos anos, investimos em tecnologia e inovação, sempre mantendo o respeito pelas tradições 
                e pelo meio ambiente. Nossa jornada tem sido marcada por um compromisso constante com a qualidade 
                e a sustentabilidade, valores que continuam a guiar todas as nossas atividades.
              </SectionText>
              <SectionText>
                Hoje, a Sociedade Fontes & Hora é reconhecida pela excelência de seus produtos e serviços, 
                contribuindo significativamente para o desenvolvimento do setor agrícola português e para 
                a economia local.
              </SectionText>
            </Col>
            <Col lg={6}>
              <ImageWrapper>
                <StyledImage>História da Sociedade Fontes & Hora</StyledImage>
              </ImageWrapper>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section bgLight>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="mb-4" style={{ color: '#1a4d2e', fontWeight: 700 }}>Nossos Valores</h2>
              <p className="mx-auto" style={{ maxWidth: '700px' }}>
                Estes são os princípios fundamentais que orientam todas as nossas ações e decisões.
              </p>
            </Col>
          </Row>
          <Row>
            {values.map(value => (
              <Col lg={3} md={6} className="mb-4" key={value.id}>
                <ValueCard>
                  <IconWrapper>
                    <FontAwesomeIcon icon={value.icon} />
                  </IconWrapper>
                  <CardTitle>{value.title}</CardTitle>
                  <Card.Text>{value.description}</Card.Text>
                </ValueCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>

      <TeamSection>
        <Container>
          <TeamTitle>Nossa Equipe</TeamTitle>
          <TeamSubtitle>
            Conheça os profissionais dedicados que fazem da Sociedade Fontes & Hora uma empresa de excelência.
          </TeamSubtitle>
          
          <Row>
            {team.map(member => (
              <Col lg={4} md={6} className="mb-4" key={member.id}>
                <TeamCard>
                  <TeamMemberImage>{member.name.charAt(0)}</TeamMemberImage>
                  <TeamMemberInfo>
                    <TeamMemberName>{member.name}</TeamMemberName>
                    <TeamMemberRole>{member.role}</TeamMemberRole>
                    <Card.Text>{member.bio}</Card.Text>
                  </TeamMemberInfo>
                </TeamCard>
              </Col>
            ))}
          </Row>
        </Container>
      </TeamSection>
    </>
  );
};

export default AboutPage;
