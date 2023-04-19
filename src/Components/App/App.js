import Home from '../Home/Home';
import Success from '../Success/Success';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <Container className='d-flex justify-content-between mt-4'>
          <h1>Where's Sunny</h1>
          <p>You last checked in on April 2, 2023</p>

        </Container>
      </header>
      <Home />
    </main>
  );
}

export default App;
