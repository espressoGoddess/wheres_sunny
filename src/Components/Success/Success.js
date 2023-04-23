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
          <Card className='text-center mt-5'>
            <Card.Header className='d-flex align-items-center justify-content-between'><div>{formattedDate}</div><div>successful check in</div></Card.Header>
            <Card.Body>
              <Card.Title className='mt-4 fs-1'>{log.icon}</Card.Title>
              <Card.Text className='mt-2'>
                The current weather in {log.location.city}, {log.location.state} is {log.weather_condition}.
                </Card.Text>
              <Card.Text className='mt-2'>
                You got {log.pointsReceived} point{log.pointsReceived > 1 ? 's' : null}. You now have {points} total points.
              </Card.Text>
              <Button variant='outline-info' onClick={routeToStats}>See my points</Button>
            </Card.Body>
              {forecast ? (<Card.Footer className='mt-2 text-start'>
                {nextSunnyDay}
              </Card.Footer>) : null}
          </Card>
        </Col>
      </Row>
    </Container>
    : null
  );
}

