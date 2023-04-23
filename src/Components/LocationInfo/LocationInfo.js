import React from "react";
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function LocationInfo() {
  const history = useHistory();

  return (
    <Container>
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <Card className='text-center mt-5'>
            <Card.Header className='d-flex align-items-center'>
              Geolocation Guide
            </Card.Header>
            <Card.Body>
              <Card.Title className='mt-4 fs-1'></Card.Title>
              <Card.Text className='mt-2 text-start'>
                <a className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href='https://support.apple.com/en-au/guide/mac-help/mh35873/mac'>
                  Here
                </a> is a guide for turning on location services on Mac.
              </Card.Text>
              <Card.Text className='mt-2 text-start'>
                <a className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href='https://support.microsoft.com/en-us/windows/windows-location-service-and-privacy-3a8eee0a-5b0b-dc07-eede-2a5ca1c49088'>
                  Here
                </a> is a guide for turning on location services on Windows. 
              </Card.Text>
              <Card.Text className='mt-2 text-start'>
                <a className="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href='https://support.google.com/chrome/answer/142065?hl=en&co=GENIE.Platform%3DDesktop'>
                  Here 
                </a> you can learn how to turn location on in chrome. 
              </Card.Text>
              <Button variant='outline-info' onClick={() => history.push('/')}>Go back</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}