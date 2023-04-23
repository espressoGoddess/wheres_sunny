import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row, Container} from 'react-bootstrap';

export default function Error() {
  return (
    <Container  className='mt-6'>
      <Row>
        <Col md={{span: 8, offset:2}}>
          <Card className='text-center'>
            <Card.Title className='mt-3'>
              OH, NO!
            </Card.Title>
            <Card.Body>
              <Card.Subtitle className='mt-4 mb-4 fs-0'>
                404
              </Card.Subtitle>
              <Card.Text className='fs-3'>
                This page does not exist 😔
              </Card.Text>
              <Button size='lg'variant='outline-info' className='mt-3' as={Link} to='/'>
                Try again
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}