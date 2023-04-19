import './Home.css';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Home() {

  return (
    <Container className='Home'>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <Card border="light">
            <Card.Body>
              <Card.Title>
                Where's Sunny is an app that allows you to check in and gain points if it is sunny at your location.
              </Card.Title>
              <Card.Subtitle className='mt-3'>
                We do require geolocation to be turned on in your browser. <a href='https://www.wikihow.com/Enable-Location-Services-on-Google-Chrome'>Here</a> is a tutorial for how to do that.
              </Card.Subtitle>
              <Button className='mt-5' variant="outline-info">Check In!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>  
    </Container>
  );
}
