import React from "react";
import { useHistory } from 'react-router-dom';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function LocationInfo() {
  const history = useHistory();

  return (
    <Container>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <Card className='text-start mt-5' data-test='location-info'>
            <Card.Header className='d-flex align-items-center justify-content-between'>
              <div>
                How to enable Location Services
              </div>
              <div>
                <Button variant='outline-success' onClick={() => history.push('/')}>Go back</Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Subtitle className='mt-2'>
                Where's Sunny requires your current location in order to more accurately determine how much sweet, sweet sunshine you are soaking up.
              </Card.Subtitle>
              <Card.Text className='mt-4'>
                To enable Location Services:
              </Card.Text>
              <Card.Text>
                1. First, make sure Location Services have been enabled in your Operating System settings.
              </Card.Text>
              <ul>
                <li>
                  <a className="link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href='https://support.apple.com/en-us/HT207092'>
                    iOS instructions
                  </a>
                </li>
                <li>
                  <a className="link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href='https://support.google.com/accounts/answer/3467281?hl=en'>
                    Android instructions
                  </a>
                </li>
                <li>
                  <a className="link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href='https://support.apple.com/guide/mac-help/allow-apps-to-detect-the-location-of-your-mac-mh35873/mac'>
                  MacOS instructions
                  </a>
                </li>
                <li>
                  <a className="link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href='https://support.microsoft.com/en-us/windows/windows-location-service-and-privacy-3a8eee0a-5b0b-dc07-eede-2a5ca1c49088'>
                    Windows instructions
                  </a>
                </li>
              </ul>
              <Card.Text>
                2. Next, {' '}
                <a className="link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href='https://www.gps-coordinates.net/geolocation'>
                  enable Location Services in your browser settings
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}