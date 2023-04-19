import Home from '../Home/Home';
import Success from '../Success/Success';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <Home />
    </main>
  );
}

export default App;
