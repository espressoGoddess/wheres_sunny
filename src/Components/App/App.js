import { Container, Col, Row, Button } from 'react-bootstrap';
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import Success from '../Success/Success';
import './App.css';

export default function App() {
  return (
    <main className="App">
      <header className="App-header">
        <Container className='d-flex justify-content-between mt-4'>
          <h1>Where's Sunny</h1>
          <p>You last checked in on April 2, 2023</p>
        </Container>
      </header>
      <Home />
      {/* <Success /> */}
      {/* <Stats /> */}
    </main>
  );
}
