import './Success.css';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Success({ log, setLogs }) {

  useEffect(() => {
    setLogs(JSON.parse(localStorage.getItem('user1_checkin')));
  }, [])

  const formattedDate = () => {
    if (log) {
      return DateTime.fromFormat(log.date, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED);
    }
  }

  const history = useHistory();
  const routeToStats = () => {
    history.push('/see-your-points');
  }
  return (
    log ? 
    <Container>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Card className='text-center mt-5' border='light'>
            <Card.Header className='text-start'>{formattedDate()}</Card.Header>
            <Card.Body>
              <Card.Title className='mt-4 fs-1'>🌞</Card.Title>
              <Card.Subtitle className='mt-3'>
                Success, You checked in!
              </Card.Subtitle>
              <Card.Text className='mt-2'>
                The current weather in {log.location.city}, {log.location.state} is {log.weather_condition}.
                </Card.Text>
              <Card.Text className='mt-2'>
                You got {log.pointsReceived} points. You now have  total points.
              </Card.Text>
              <Button variant='outline-info' onClick={routeToStats}>See how you measure up!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    : null
  );
}

