import './Stats.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DetailedStatsLog from '../DetailedStatsLog/DetailedStatsLog';
import {Card, Button, Col, Row, Container, Tab, Tabs } from 'react-bootstrap';

export default function Stats() {
  const history = useHistory();
  const routeToHome = () => {
    history.push('/');
  }
  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    setLogs(JSON.parse(localStorage.getItem('user1_checkin')));
  }, [])

  const getPoints = (weather) => {
    if (logs.length) {
      return logs.filter(log => log.weather_condition.includes(weather) && log.is_day)
      .reduce((acc, cur) => {
          console.log('get points', weather, cur.weather_condition)
          acc += cur.pointsReceived
          return acc;
        }, 0);
    }
  }

  return (
    <Container className='Stats text-center'>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <Card border='light' className='mt-5'>
          <Tabs
            defaultActiveKey='sunny'
            id='fill-tab-example'
            className='mb-3'
            fill
          >
            <Tab eventKey='sunny' title={<span className='display-2'>☀️</span>}>
              <DetailedStatsLog weather={'sunny'}/>
            </Tab>
            <Tab eventKey='cloudy' title={<span className='display-2'>🌤️</span>}>
              <DetailedStatsLog weather={'cloudy'}/>
            </Tab>
            <Tab eventKey='overcast' title={<span className='display-2'>☁️</span>}>
              <DetailedStatsLog weather={'overcast'}/>
            </Tab>
            <Tab eventKey='rain' title={<span className='display-2'>🌧️</span>}>
              <DetailedStatsLog weather={'rain'}/>
            </Tab>
            <Tab eventKey='snow' title={<span className='display-2'>❄️</span>}>
              <DetailedStatsLog weather={'snow'}/>
            </Tab>
          </Tabs>
            {/* <Card.Header>
              <h2 className='ms-3 mt-2 fs-4 text-start'>Points</h2>
            </Card.Header>
              <Card.Body className='mt-3 text-center'>
                <div className='d-flex align-items-center justify-content-center'>
                  <div className='me-4 text-center'>
                    <p className='display-4'>{getPoints('sunny')}</p>
                  </div>
                  <div className='ms-4 me-4 flex-row'>
                    <p className='display-4'>{getPoints('cloudy')}</p>
                  </div>
                  <div className='ms-4 me-4 flex-row'>
                    <p className='display-4'>{getPoints('overcast')}</p>
                  </div>
                  <div className='ms-4 me-4 flex-row'>
                    <p className='display-4'>{getPoints('rain')}</p>
                  </div>
                  <div className='ms-4 flex-row'>
                    <p className='display-4'>{getPoints('snow')}</p>
                  </div>
                </div>
            </Card.Body> 
            <Card.Footer className='text-end'>
              <small className='text-muted me-3'>You've checked in {logs.length} times!</small>
            </Card.Footer> */}
            {/* <DetailedStatsLog /> */}
          </Card>
          <Button className='mt-5' variant='outline-info' onClick={routeToHome}>Go Home</Button>
        </Col>
      </Row>  
    </Container>
  );
}