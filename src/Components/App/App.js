import { Container } from 'react-bootstrap';
import fetchCall from '../../utilities/api-calls';
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import Success from '../Success/Success';
import './App.css';

export default function App() {
  const [currentLog, setCurrentLog] = useState(null);
  const [location, setLocation] = useState([]);
  const history = useHistory();

  const checkWeather = (data) => {
    if (data.current.is_day) {
      const condition = data.current.condition.text.toLowerCase();
      if (condition.includes('sunny')) {
        return [ '☀️', 3];
      } else if (condition.includes("cloudy")) {
        return [ '🌤️', 2];
      } else if (condition.includes('snow')) {
        return [ '🌨️', 1];
      } else if (condition.includes('overcast')) {
        return [ '☁️', 1];
      } else if (condition.includes('rain')) {
        return ['🌧️', 1];
      }
    }
    return ['🌖', 0];
  }

  useEffect(() => {
    (async () => {
      if (location.length) {
        const data = await fetchCall(location);
        const [icon, points] = checkWeather(data);
        const newLog = {
          user: 1,
          userName: 'Amber',
          id: Date.now(),
          location: {
          city: data.location.name,
          state: data.location.region
          },
          is_day: data.current.is_day ? true : false,
          weather_condition: data.current.condition.text.toLowerCase(),
          date: new Date().toISOString().split('T')[0],
          pointsReceived: points,
          icon: icon
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
          <p>You last checked in on April 2, 2023</p>
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
