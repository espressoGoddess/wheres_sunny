import './Success.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Success({ log, forecast }) {
  const history = useHistory();
  const routeToStats = () => {
    history.push('/see-your-points');
  }

  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    setLogs(JSON.parse(localStorage.getItem('user1_checkin')));
  }, [])

  const formattedDate = (() => {
    if (log) {
      return DateTime.fromFormat(log.date, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED);
    }
  })();

  const points = (() => {
    if (!logs) {
      return;
    }
    return logs.reduce((acc, cur) => {
      acc += cur.pointsReceived
      return acc;
    }, 0);
  })();

  const nextSunnyDay = (() => {
    if (!forecast) {
      return;
    }
    const forecastedSunnyIndex = forecast.findIndex(data => data === 'sunny');
    if (forecastedSunnyIndex >= 0) {
      return `Good news, it should be sunny in ${forecastedSunnyIndex + 1} days`;
    } return `It doesn't look like it's going to be sunny for the next week 😔`;
  })();

  return (
    log ? 
    <Container>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Card className='text-center mt-5' border='light'>
            <Card.Header className='text-start'>{formattedDate}</Card.Header>
            <Card.Body>
              <Card.Title className='mt-4 fs-1'>{log.icon}</Card.Title>
              <Card.Subtitle className='mt-3'>
                Success, You checked in!
              </Card.Subtitle>
              <Card.Text className='mt-2'>
                The current weather in {log.location.city}, {log.location.state} is {log.weather_condition}.
                </Card.Text>
              <Card.Text className='mt-2'>
                You got {log.pointsReceived} point(s). You now have {points} total point(s).
              </Card.Text>
              {forecast ? (<Card.Text className='mt-2'>
                {nextSunnyDay}
              </Card.Text>) : null}
              <Button variant='outline-info' onClick={routeToStats}>See my points</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    : null
  );
}

