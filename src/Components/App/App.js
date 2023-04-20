import { Card, Container } from 'react-bootstrap';
import fetchCall from '../../utilities/api-calls';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import Success from '../Success/Success';
import './App.css';

export default function App() {
  const [currentLog, setCurrentLog] = useState(null);
  const [location, setLocation] = useState([]);
  // const [totalPoints, setTotalPoints] = useState();
  const [logs, setLogs] = useState([]);

  const checkWeather = (data) => {
    if (data.current.is_day) {
      const condition = data.current.condition.text
      if (condition === "Sunny") {
        return 3
      } else if (condition.includes("Cloudy" || "cloudy") && data.current.cloud < 75) {
        return 2
      } return 1
    } return 0;
  }

  useEffect(() => {
    if (location.length) {
      fetchCall(location).then(data => {
        const newLog = {
          user: 1,
          location: {
          city: data.location.name,
          state: data.location.region
          },
          is_day: data.current.is_day ? true : false,
          weather_condition: data.current.condition.text,
          date: new Date().toISOString().split('T')[0],
          pointsReceived: checkWeather(data)
        }
        setCurrentLog(newLog);
        
        const oldLogs = JSON.parse(localStorage.getItem('user1_checkin'));
        oldLogs
          ? localStorage.setItem('user1_checkin', JSON.stringify([newLog, ...oldLogs]))
          : localStorage.setItem('user1_checkin', JSON.stringify([newLog]));
      });
    }
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
            <Success log={currentLog} setLogs={setLogs}/>
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
