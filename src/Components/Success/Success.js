import './Success.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Success({ log }) {
  const history = useHistory();
  const routeToStats = () => {
    history.push('/see-your-points');
  }

  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    setLogs(JSON.parse(localStorage.getItem('user1_checkin')));
  }, [])

  const formattedDate = () => {
    if (log) {
      return DateTime.fromFormat(log.date, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED);
    }
  }

  const getIcon = () => {
    if (!log) {
      return;
    }
    if (log.weather_condition === "Sunny") {
      return '☀️';
    } else if (log.weather_condition === "Overcast") {
      return '☁️';
    } else if (log.weather_condition.includes("rain" || 'Rain')) {
      return '🌧️';
    } else if (log.weather_condition.includes('Snow' || 'snow')) {
      return '❄️';
    } else {
      return '🌤️';
    }
  } 

  const getPoints = () => {
    if (!logs) {
      return;
    }
    return logs.reduce((acc, cur) => {
      acc += cur.pointsReceived
      return acc;
    }, 0);
  }

  return (
    log ? 
    <Container>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Card className='text-center mt-5' border='light'>
            <Card.Header className='text-start'>{formattedDate()}</Card.Header>
            <Card.Body>
              <Card.Title className='mt-4 fs-1'>{getIcon()}</Card.Title>
              <Card.Subtitle className='mt-3'>
                Success, You checked in!
              </Card.Subtitle>
              <Card.Text className='mt-2'>
                The current weather in {log.location.city}, {log.location.state} is {log.weather_condition}.
                </Card.Text>
              <Card.Text className='mt-2'>
                You got {log.pointsReceived} point(s). You now have {getPoints()} total point(s).
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

