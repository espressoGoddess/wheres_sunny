import React, { useState } from 'react';
import './Home.css';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Home({ setLocation }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Container className='Home'>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <Card border='light'>
            <Card.Body>
              <Card.Title>
                Where's Sunny is an app that allows you to check in and gain points if it is sunny at your location.
              </Card.Title>
              <Card.Subtitle className='mt-3 mb-2'>
                We do require geolocation to be turned on in your browser. <a href='https://www.wikihow.com/Enable-Location-Services-on-Google-Chrome'>Here</a> is a tutorial for how to do that.
              </Card.Subtitle>
              { isLoading ? <Card.Text className='loading-spinner display-2 mt-2'>☀️</Card.Text> : null }
              <Button className='mt-2' variant='outline-info' onClick={() => {
                setIsLoading(true);
                const geo =  navigator.geolocation;
                geo.getCurrentPosition(
                  (position) => {
                    setLocation([position.coords.latitude, position.coords.longitude]);
                    setIsLoading(false);
                  },
                  () => {
                    setIsLoading(false);
                  }
                )
              }}>Check In!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>  
    </Container>
  );
}
