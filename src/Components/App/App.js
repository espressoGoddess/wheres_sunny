import { Container } from 'react-bootstrap';
import fetchCall from '../../utilities/api-calls';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import Success from '../Success/Success';
import './App.css';

export default function App() {

  const [location, setLocation] = useState([]);
  useEffect(() => {
    if (location.length) {
      fetchCall(location).then(data => {
        const currentLog = {
          user: 1,
          location: {
          city: data.location.name,
          state: data.location.region
          },
          is_day: data.current.is_day ? true : false,
          weather_condition: data.current.condition.text,
          time: Date.now()
        } 
        console.log(data)
        const oldLogs = JSON.parse(localStorage.getItem('checkin'));
        oldLogs ? 
          localStorage.setItem('checkin', JSON.stringify([currentLog, oldLogs].flat())) : localStorage.setItem('checkin', JSON.stringify([currentLog].flat()))
        console.log(JSON.parse(localStorage.getItem('checkin')))
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
            <Success />
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
