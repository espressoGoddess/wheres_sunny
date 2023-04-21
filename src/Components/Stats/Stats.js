import './Stats.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Card, Button, Col, Row, Container } from 'react-bootstrap';

export default function Stats() {
  const history = useHistory();
  const routeToHome = () => {
    history.push('/');
  }
  return (
    <Container className='Stats text-center'>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <Card border="light" className='mt-5'>
            <Card.Header>
              <h2 className='ms-3 mt-2 fs-4 text-start'>Points</h2>
            </Card.Header>
              <Card.Body className='mt-3 text-center'>
                <div className='d-flex align-items-center justify-content-center'>
                  <div className='me-5 text-center'>
                    <p className='display-2'>☀️</p>
                    <p className='display-4'>3</p>
                  </div>
                  <div className='ms-5 me-5 flex-row'>
                    <p className='display-2'>🌤️</p>
                    <p className='display-4'>7</p>
                  </div>
                  <div className='ms-5 me-5 flex-row'>
                    <p className='display-2'>🌧️</p>
                    <p className='display-4'>10</p>
                  </div>
                  <div className='ms-5 flex-row'>
                    <p className='display-2'>❄️</p>
                    <p className='display-4'>0</p>
                  </div>
                </div>
            </Card.Body>
            <Card.Footer className='text-end'>
              <small className="text-muted me-3">You've checked in 15 times!</small>
            </Card.Footer>
          </Card>
          <Button className='mt-5' variant='outline-info' onClick={routeToHome}>Go Home</Button>
        </Col>
      </Row>  
    </Container>
  );
}