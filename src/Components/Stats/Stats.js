import './Stats.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DetailedStatsLog from '../DetailedStatsLog/DetailedStatsLog';
import {Card, Button, Col, Row, Container, Tab, Tabs } from 'react-bootstrap';

export default function Stats() {
  const history = useHistory();

  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    setLogs(JSON.parse(localStorage.getItem('user1_checkin')));
  }, [])

  const weatherSpecificRows = (weather) => {
    return logs.filter(log => log.weather_condition.includes(weather))   
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
              <Tab eventKey='sunny' disabled={!weatherSpecificRows('sunny').length} title={<span className='display-2'>☀️</span>}>
                <DetailedStatsLog logs={weatherSpecificRows('sunny')}/>
              </Tab>
              <Tab eventKey='cloudy' disabled={!weatherSpecificRows('cloudy').length} title={<span className='display-2'>🌤️</span>}>
                <DetailedStatsLog logs={weatherSpecificRows('cloudy')}/>
              </Tab>
              <Tab eventKey='overcast' disabled={!weatherSpecificRows('overcast').length} title={<span className='display-2'>☁️</span>}>
                <DetailedStatsLog logs={weatherSpecificRows('overcast')}/>
              </Tab>
              <Tab eventKey='rain' disabled={!weatherSpecificRows('rain').length} title={<span className='display-2'>🌧️</span>}>
                <DetailedStatsLog logs={weatherSpecificRows('rain')}/>
              </Tab>
              <Tab eventKey='snow' disabled={!weatherSpecificRows('snow').length} title={<span className='display-2'>❄️</span>}>
                <DetailedStatsLog logs={weatherSpecificRows('snow')}/>
              </Tab>
            </Tabs>
          </Card>
          <Button className='mt-5' variant='outline-info' onClick={() => history.push('/')}>Go Home</Button>
        </Col>
      </Row>  
    </Container>
  );
}