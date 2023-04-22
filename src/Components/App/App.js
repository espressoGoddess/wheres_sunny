import { Container } from 'react-bootstrap';
import fetchCall from '../../utilities/api-calls';
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import Success from '../Success/Success';
import categorizeWeather from '../../utilities/weather-categorization';
import './App.css';

export default function App() {
  const [currentLog, setCurrentLog] = useState(null);
  const [location, setLocation] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      if (location.length) {
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
        
        const oldLogs = JSON.parse(localStorage.getItem('user1_checkin'));
        oldLogs
          ? localStorage.setItem('user1_checkin', JSON.stringify([newLog, ...oldLogs]))
          : localStorage.setItem('user1_checkin', JSON.stringify([newLog]));
        history.push('/you-just-checked-in-successfully');
      }
    })();
  }, [location])

  return (
    <main className="App">
      <header className="App-header">
        <Container className='d-flex justify-content-between mt-4'>
          <h1>Where's Sunny</h1>
        </Container>
      </header>
      <Switch>
        <Route exact path='/'>
          <Home setLocation={setLocation}/>
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
