import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

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
`;

const ContactInfoCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  height: 100%;
`;

const ContactTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 25px;
  color: #1a4d2e;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background-color: #6eb52f;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f7e6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #6eb52f;
`;

const ContactText = styled.div`
  h5 {
    font-weight: 600;
    margin-bottom: 5px;
    color: #1a4d2e;
  }
  
  p {
    margin-bottom: 0;
    color: #666;
  }
`;

const ContactForm = styled(Form)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
`;

const FormTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 25px;
  color: #1a4d2e;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background-color: #6eb52f;
  }
`;

const StyledFormControl = styled(Form.Control)`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 12px 15px;
  margin-bottom: 20px;
  
  &:focus {
    border-color: #6eb52f;
    box-shadow: 0 0 0 0.25rem rgba(110, 181, 47, 0.25);
  }
`;

const StyledTextArea = styled(StyledFormControl)`
  width: 100%;
  display: block;
`;

const StyledButton = styled(Button)`
  background-color: #6eb52f;
  border-color: #6eb52f;
  padding: 12px 30px;
  font-weight: 600;
  
  &:hover {
    background-color: #5a9427;
    border-color: #5a9427;
  }
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-top: 50px;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    setAlertVariant('success');
    setAlertMessage('Mensagem enviada com sucesso! Entraremos em contacto brevemente.');
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Contacte-nos</PageTitle>
          <PageSubtitle>
            Estamos à disposição para responder às suas perguntas e atender às suas necessidades.
          </PageSubtitle>
        </Container>
      </PageHeader>

      <Section>
        <Container>
          <Row>
            <Col lg={4} className="mb-4 mb-lg-0">
              <ContactInfoCard>
                <ContactTitle>Informações de Contacto</ContactTitle>
                
                <ContactItem>
                  <IconWrapper>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </IconWrapper>
                  <ContactText>
                    <h5>Localização</h5>
                    <p>Lavra, 4455-157<br />Porto, Portugal</p>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <IconWrapper>
                    <FontAwesomeIcon icon={faPhone} />
                  </IconWrapper>
                  <ContactText>
                    <h5>Telefone</h5>
                    <p>+351 229 430 780</p>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <IconWrapper>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </IconWrapper>
                  <ContactText>
                    <h5>Email</h5>
                    <p>info@fontesehora.pt</p>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <IconWrapper>
                    <FontAwesomeIcon icon={faClock} />
                  </IconWrapper>
                  <ContactText>
                    <h5>Horário de Funcionamento</h5>
                    <p>Segunda a Sexta: 8h - 18h<br />Sábado: 9h - 13h</p>
                  </ContactText>
                </ContactItem>
              </ContactInfoCard>
            </Col>
            
            <Col lg={8}>
              <ContactForm onSubmit={handleSubmit}>
                <FormTitle>Envie-nos uma Mensagem</FormTitle>
                
                {showAlert && (
                  <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                  </Alert>
                )}
                
                <Row>
                  <Col md={6}>
                    <StyledFormControl
                      type="text"
                      placeholder="Nome"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <StyledFormControl
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}>
                    <StyledFormControl
                      type="tel"
                      placeholder="Telefone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6}>
                    <StyledFormControl
                      type="text"
                      placeholder="Assunto"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                
                <Row>
                  <Col md={12}>
                    <StyledTextArea
                      as="textarea"
                      rows={5}
                      placeholder="Mensagem"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                
                <div className="text-end">
                  <StyledButton type="submit">Enviar Mensagem</StyledButton>
                </div>
              </ContactForm>
            </Col>
          </Row>
          
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24084.82037262111!2d-8.7284884!3d41.2672863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2468e315e2b219%3A0x500ebbde4910590!2sLavra%2C%20Portugal!5e0!3m2!1sen!2sus!4v1654321234567!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Sociedade Fontes & Hora"
            ></iframe>
          </MapContainer>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
