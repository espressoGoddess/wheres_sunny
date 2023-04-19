import './Success.css';
import { useHistory } from 'react-router-dom'
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Success() {
  const history = useHistory();
  const routeToStats = () => {
    history.push('/see-your-points');
  }
  return (
    <Container>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Card className='text-center mt-5' border='light'>
            <Card.Header className='text-start'>April 20, 2023</Card.Header>
            <Card.Body>
              <Card.Title className='mt-4 fs-1'>🌞</Card.Title>
              <Card.Subtitle className='mt-3'>
                Yay! The current weather in Bellingham is sunny!
              </Card.Subtitle>
              <Card.Text className='mt-2'>
                You got 2 points! You now have 14 total points.
              </Card.Text>
              <Button variant='outline-info' onClick={routeToStats}>See how you measure up!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

