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
      return DateTime.fromFormat(log.date, 'yyyy-MM-dd').toLocaleString({ month: 'long', day: 'numeric' });
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
      return `It should be sunny in ${forecastedSunnyIndex + 1} days!`;
    } return `It doesn't look like it's going to be sunny for the next week 😔`;
  })();

  return (
    log ? 
    <Container  className='mt-6'>
      <Row>
        <Col md={{span: 4, offset:1}}>
          <Card className='text-center'>
            <Card.Title className='mt-5'>{formattedDate}</Card.Title>
              <Card.Body>
                <Card.Text className='mt-2 fs-0'>
                  {log.icon}
                </Card.Text>
                <Card.Text className='mt-2 mb-3 fs-5'>
                  {log.weather_condition}
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col md={{span: 4, offset: 2}}>
          <Card className='text-center'>
            <Card.Header>
             {log.pointsReceived > 1 ? 'You got' : 'You only got'}
            </Card.Header>
            <Card.Body>
              <Card.Text className=' fs-1 mb-0'>
                {log.pointsReceived}
              </Card.Text>
              <Card.Text className='mt-0'>
                point{log.pointsReceived > 1 ? 's' : null}
              </Card.Text>
              <Card.Text>
              </Card.Text>
              <Button variant='outline-info' onClick={routeToStats}>See my points</Button>
              <Card.Text className='mt-2'>
                {nextSunnyDay.includes('should') ? <p>Good News:</p> : null}   
                <p>{nextSunnyDay}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <footer className='mt-3 text-end'>
          <p>powered by <a className=" link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="https://www.weatherapi.com/" title="Weather API">WeatherAPI</a></p>
        </footer>
        </Col>
      </Row>
    </Container>
    : null
  );
}

