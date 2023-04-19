import { Container, Col, Row, Button } from 'react-bootstrap';
import Home from '../Home/Home';
import Success from '../Success/Success';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      {/* <Home /> */}
      <Success />
    </main>
  );
}

export default App;
