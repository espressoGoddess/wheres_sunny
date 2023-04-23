import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

const NextSunnyDay = ({ forecast }) => {
  if (!forecast) {
    return;
  }
  const forecastedSunnyIndex = forecast.findIndex(data => data === 'sunny');
  if (forecastedSunnyIndex >= 0) {
    return (<>
      <p>Good News:</p>
      <p>It should be sunny in {forecastedSunnyIndex + 1} days!</p>
    </>);
  }
  return <p>It doesn't look like it's going to be sunny for the next week 😔</p>;
}

export default function Success({ log, forecast }) {
  const history = useHistory();
  const routeToStats = () => {
    history.push('/see-your-points');
  }

  const formattedDate = log
    ? DateTime.fromFormat(log.date, 'yyyy-MM-dd').toLocaleString({ month: 'long', day: 'numeric' })
    : null;

  return (
    log ? 
    <Container  className='mt-6'>
      <Row>
        <Col md={{span: 4, offset:1}}>
          <Card className='text-center' data-test='weather-results'>
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
          <Card className='text-center' data-test='points'>
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
                <NextSunnyDay forecast={forecast}/>
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

