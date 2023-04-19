import { Container, Col, Row, Button } from 'react-bootstrap';
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import Success from '../Success/Success';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      {/* <Home /> */}
      {/* <Success /> */}
      <Stats />
    </main>
  );
}

export default App;
