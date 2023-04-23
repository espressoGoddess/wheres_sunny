import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Button, Card, Col, Row, Container, Alert } from 'react-bootstrap';

export default function Home({ setLocation }) {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Container className='text-center mt-5'>
      {error ? 
        (<Container className='mt-5'>
          <Alert variant='warning'>
            Uh oh, geolocation services required.{' '}
            <Alert.Link as={Link} to='/location-services-info'>
               Learn more
            </Alert.Link>
          </Alert>
        </Container>) : null}
      <Row>
        <Col sm={6}>
          <Card>
            <Card.Body>
              <Card.Title className='text-start'>
                Shine, baby shine!
              </Card.Title>
              <Card.Text className='mb-3 mt-3 text-start'>
                Where's Sunny allows you to check in and gain points, weather depending
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} className='text-center mt-4' style={{minHeight: 120}}>
            <Button size='lg' disabled={isLoading} variant='outline-info' onClick={() => {
              setIsLoading(true);
              setError(false);
              if ("geolocation" in navigator) {
                const geo =  navigator.geolocation;
                geo.getCurrentPosition(
                  (position) => {
                    setLocation([position.coords.latitude, position.coords.longitude]);
                  },
                  () => {
                    setIsLoading(false);
                    setError(true);
                  }
                  )
                } else {
                  setError(true);
                }
              }}>Check In!</Button>
              {isLoading ? <Card.Text className='loading-spinner display-2 mt-2'>☀️</Card.Text> : null }
        </Col>
      </Row>  
    </Container>
  );
}
