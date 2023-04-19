import { Button, Card, Col, Row, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <header className="App-header">
        <Container className='d-flex justify-content-between mt-4'>
          <h1>Where's Sunny</h1>
          <p>You last checked in on April 2, 2023</p>
          <Button variant="outline-info">See how you measure up!</Button>
        </Container>
      </header>
  );
}