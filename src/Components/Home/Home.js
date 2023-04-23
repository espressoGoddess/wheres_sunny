import React, { useState } from 'react';
import './Home.css';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Home({ setLocation }) {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Container className='Home'>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <Card border='light'>
              <Card.Header className='text-start'>
                Where's Sunny allows you to check in and gain points (depending on the weather)
              </Card.Header>
            <Card.Body>
              <Card.Subtitle className='mt-2 mb-2'>
                We require geolocation to be turned on in your browser. Here is how to turn on location on a <a href='https://support.apple.com/en-au/guide/mac-help/mh35873/mac'>Mac</a> or <a href='https://support.microsoft.com/en-us/windows/windows-location-service-and-privacy-3a8eee0a-5b0b-dc07-eede-2a5ca1c49088'>Windows</a> OS. You can learn how to turn location on in chrome <a href='https://support.google.com/chrome/answer/142065?hl=en&co=GENIE.Platform%3DDesktop'>Here</a>
              </Card.Subtitle>
              { isLoading ? <Card.Text className='loading-spinner display-2 mt-2'>☀️</Card.Text> : null }
              {error ? (<p style={{color: 'red'}}>There was an error, please check that location services are on and enabled in the browser, then try again</p>) : null}
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
