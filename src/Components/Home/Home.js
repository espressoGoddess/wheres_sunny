import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Button, Card, Col, Row, Container, Alert } from 'react-bootstrap';

export default function Home({ setLocation }) {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Container className='text-center mt-6'>
      {error ? 
        (<Alert className='mt-5' variant='warning'>
            Uh oh, geolocation services required.{' '}
            <Alert.Link as={Link} to='/location-services-info'>
               Learn more
            </Alert.Link>
          </Alert>) : null}
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Card>
            <Card.Body>
              <Card.Title className='text-start'>
                Shine, baby shine!
              </Card.Title>
              <Card.Text className='mb-3 mt-3 text-start'>
                Where's Sunny allows you to check in.
              </Card.Text>
              <Card.Text className='mb-3 mt-3 text-start'>
                You get the most points if it is sunny.
              </Card.Text>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>  
    </Container>
  );
}
