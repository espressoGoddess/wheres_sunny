import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Button, Card, Col, Row, Container, Alert } from 'react-bootstrap';

export default function Home({ setLocation }) {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Container className='text-center'>
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
        <Col md={{span: 8, offset: 2}}>
          <Card border='light mt-5'>
              <Card.Header className='text-start'>
                Where's Sunny allows you to check in and gain points, weather depending
              </Card.Header>
            <Card.Body>
              { isLoading ? <Card.Text className='loading-spinner display-2 mt-2'>☀️</Card.Text> : null }
              <Button className='mt-2' variant='outline-info' onClick={() => {
                setIsLoading(true);
                setError(false);
                if ("geolocation" in navigator) {
                  const geo =  navigator.geolocation;
                  geo.getCurrentPosition(
                    (position) => {
                      setLocation([position.coords.latitude, position.coords.longitude]);
                      setIsLoading(false);
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
            </Card.Body>
          </Card>
        </Col>
      </Row>  
    </Container>
  );
}
