import { Container, Alert } from 'react-bootstrap';
import fetchCall from '../../utilities/api-calls';
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Link } from 'react-router-dom'
import Home from '../Home/Home';
import Logo from './Logo';
import Stats from '../Stats/Stats';
import Success from '../Success/Success';
import LocationInfo from '../LocationInfo/LocationInfo';
import categorizeWeather from '../../utilities/weather-categorization';
import './App.css';

export default function App() {
  const [currentLog, setCurrentLog] = useState(null);
  const [location, setLocation] = useState([]);
  const [forecast, setForecast] = useState(null);
  const history = useHistory();
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      if (location.length) {
        try {        
          const data = await fetchCall(location);
          const [category, points, icon] = categorizeWeather(data);
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
            category: category,
            icon: icon
          }
          setCurrentLog(newLog);
          if (newLog.weather_condition !== 'sunny') {
            setForecast(data.forecast.forecastday.map(forecast => forecast.day.condition.text.toLowerCase()));
          }
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
  }, [location, history])

  return (
    <main className="App">
      <header>
        <Container className='d-flex justify-content-start align-items-center pt-4'>
          <Link to='/'><Logo className='text-warning'/></Link>
          <h1 className='ms-3 mb-0'>Where's Sunny</h1>
        </Container>
      </header>
      <div>
        {error ? (<Container className='mt-5'><Alert variant='warning'>There's been an API error, please try again later</Alert></Container>) : null}
        <Switch>
          <Route exact path='/'>
            <Home setLocation={setLocation} />
          </Route>
          <Route exact path='/you-just-checked-in-successfully'>
            <Success log={currentLog} forecast={forecast}/>
          </Route>
          <Route exact path='/see-your-points'>
            <Stats />
          </Route>
          <Route exact path='/location-services-info'>
            <LocationInfo />
          </Route>
        </Switch>
      </div>
    </main>
  );
}
