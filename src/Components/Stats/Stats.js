import './Stats.css';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Stats() {
  return (
    <Container className='Stats'>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <Card border="light" className='mt-5'>
            <Card.Header>
              Points
            </Card.Header>
              <Card.Body className='mt-3 text-center'>
                <div className='d-flex align-items-center justify-content-center'>
                  <div className='me-5 text-center'>
                    <p className='display-2'>☀️</p>
                    <p className='display-4'>3</p>
                  </div>
                  <div className='ms-5 me-5 flex-row'>
                    <p className='display-2'>🌤️</p>
                    <p className='display-4'>7</p>
                  </div>
                  <div className='ms-5 me-5 flex-row'>
                    <p className='display-2'>🌧️</p>
                    <p className='display-4'>10</p>
                  </div>
                  <div className='ms-5 me-5 flex-row'>
                    <p className='display-2'>❄️</p>
                    <p className='display-4'>0</p>
                  </div>
                </div>
                <hr/>
              <Button className='mt-5' variant="outline-info">Check In!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>  
    </Container>
  );
}