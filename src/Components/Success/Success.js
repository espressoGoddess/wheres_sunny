import './Success.css';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Success() {
  return (
    <Container>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Card className="text-center mt-5" border="light">
            <Card.Header className="text-cleft">April, 20, 2023</Card.Header>
            <Card.Body>
              <Card.Title className="mt-4">🌞</Card.Title>
              <Card.Subtitle className='mt-3'>
                Yay! The current weather in Bellingham is sunny!
              </Card.Subtitle>
              <Card.Text className="mt-2">
                You got 2 points! You now have 14 total points.
              </Card.Text>
              <Button variant="outline-info">See how you measure up!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

