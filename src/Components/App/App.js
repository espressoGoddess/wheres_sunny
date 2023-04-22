import { Container, Alert } from 'react-bootstrap';
import fetchCall from '../../utilities/api-calls';
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Link } from 'react-router-dom'
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import Success from '../Success/Success';
import logo from '../../logo.png';
import categorizeWeather from '../../utilities/weather-categorization';
import './App.css';

export default function App() {
  const [currentLog, setCurrentLog] = useState(null);
  const [location, setLocation] = useState([]);
  const history = useHistory();
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      if (location.length) {
        try {        
          const data = await fetchCall(location);
          const [category, points] = categorizeWeather(data);
          const newLog = {
            user: 1,
            id: Date.now(),
            location: {
            city: data.location.name,
            state: data.location.region
            },
            is_day: data.current.is_day ? true : false,
            weather_condition: data.current.condition.text.toLowerCase(),
            date: new Date().toISOString().split('T')[0],
            pointsReceived: points,
            category: category
          }
          setCurrentLog(newLog);
          setError(false);
          const oldLogs = JSON.parse(localStorage.getItem('user1_checkin'));
          oldLogs
            ? localStorage.setItem('user1_checkin', JSON.stringify([newLog, ...oldLogs]))
            : localStorage.setItem('user1_checkin', JSON.stringify([newLog]));
          history.push('/you-just-checked-in-successfully');
        } catch(err) {
          setError(true);
        }
      }
    })();
  }, [location])

  return (
    <main className="App">
      <header>
        <Container className='d-flex justify-content-start align-items-center mt-4'>
          <Link to='/'><Logo className='text-warning'/></Link>
          <h1 className='ms-3 mb-0'>Where's Sunny</h1>
        </Container>
      </header>
      <Switch>
        <Route exact path='/'>
          <Home setLocation={setLocation} error={error} setError={setError}/>
        </Route>
        <Route exact path='/you-just-checked-in-successfully'>
          <Success log={currentLog}/>
        </Route>
        <Route exact path='/see-your-points'>
          <Stats />
        </Route>
      </Switch>
      <footer>
      <p>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></p>
      </footer>
    </main>
  );
}
