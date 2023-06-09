import React, { useEffect, useState } from 'react';
import DetailedStatsLog from '../DetailedStatsLog/DetailedStatsLog';
import {Card, Col, Row, Container, Tab, Tabs } from 'react-bootstrap';

export default function Stats() {
  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    setLogs(JSON.parse(localStorage.getItem('user1_checkin')));
  }, [])

  const weatherSpecificRows = (weather) => {
    return logs.filter(log => log.category === weather);
  }

  const totalPoints = (() => {
    if (!logs) {
      return;
    }
    return logs.reduce((acc, cur) => {
      acc += cur.pointsReceived
      return acc;
    }, 0);
  })();

  const getFirstActiveTab = () => {
    if (weatherSpecificRows('sunny').length) {
      return 'sunny';
    } else if (weatherSpecificRows('cloudy').length) {
      return 'cloudy';
    } else if (weatherSpecificRows('overcast').length) {
      return 'overcast';
    } else if (weatherSpecificRows('rain').length) {
      return 'rain';
    } else {
      return 'snow';
    }
  }

  return (
    <Container className='text-center'>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <Card className='mt-5 mb-5' data-test='stats'>
            <div>
            </div>
            {logs.length ? (<Tabs
              defaultActiveKey={getFirstActiveTab()}
              id='fill-tab-example'
              className='mb-3'
              fill
            >
              <Tab eventKey='sunny' title={<span className='display-4'>☀️</span>}>
                  {!weatherSpecificRows('sunny').length ? (<p>Whoops, Try going to the desert 🏜️</p>) : (<DetailedStatsLog logs={weatherSpecificRows('sunny')}/>)}
              </Tab>
              <Tab eventKey='cloudy' title={<span className='display-4'>🌤️</span>}>
                {!weatherSpecificRows('cloudy').length ? (<p>Whoops, Try going to Washington 🌲</p>) : (<DetailedStatsLog logs={weatherSpecificRows('cloudy')}/>)}
              </Tab>
              <Tab eventKey='overcast' title={<span className='display-4'>☁️</span>}>
                {!weatherSpecificRows('overcast').length ? (<p>Whoops, Try going to Washington 🌲</p>) : (<DetailedStatsLog logs={weatherSpecificRows('overcast')}/>)}
              </Tab>
              <Tab eventKey='rain' title={<span className='display-4'>🌧️</span>}>
                {!weatherSpecificRows('rain').length ? (<p>Whoops, Try going to the rainforest 💧</p>) : (<DetailedStatsLog logs={weatherSpecificRows('rain')}/>)}
              </Tab>
              <Tab eventKey='snow' title={<span className='display-4'>🌨️</span>}>
                {!weatherSpecificRows('snow').length ? (<p>Whoops, Try going to Antarctica ❄️</p>) : (<DetailedStatsLog logs={weatherSpecificRows('snow')}/>)}
              </Tab>
            </Tabs>) : null}
            <Card.Footer className='text-start'>You have {totalPoints} point{totalPoints > 1 ? 's' : null}.</Card.Footer>
          </Card>
        </Col>
      </Row>  
    </Container>
  );
}