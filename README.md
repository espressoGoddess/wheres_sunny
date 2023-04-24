# Where's Sunny


## Abstract:


Where's Sunny is a silly app that allows users to 'check in.' Based on the user's location, the weather and forecasted weather is obtained. The user receives points for checking in, assuming it is daylight outside. The most points are awarded if it is currently sunny out. If it is not currently sunny, the user still gets points (just not as many) and the user is then able to see when the next sunny day is forecasted at the user's current location. The user is able to see a log of all their previous check-ins along with the weather, points received, and date for those check ins.

## Learning Goals:
Demonstrate "mastery ' in :
- React
- Router
- Asynchronous JavaScript
- End to end testing with Cypress


## Installation Instructions:

#### Deployed Link:
[Where's Sunny](https://wheres-sunny.vercel.app/)

##### OR

#### Local Installation:
1. Fork this repository.
2. Create a local repository.
3. Follow the Github on-screen commands to connect your local repository to your newly forked repository.
4. `npm i` and `npm start` to start the application locally.
5. Navigate to `http://localhost:3000` in your browser to use the application. 
  

## Preview of App:

![wheres sunny](https://user-images.githubusercontent.com/108356274/233880406-6016259f-73f2-4d28-9c2b-10160d57c762.gif)


## Context:

This application was completed in 15 hours.


## Technologies used:
- React (JavaScript, CSS, HTML)
- React Router
- Cypress
- React Bootstrap
- Bootstrap
- Webpack
- Luxon Date Wrapper


## Contributors:

[**A**mber Shipley](https://github.com/espressoGoddess)


## Wins + Challenges:

### Wins: 

- Utilized the Geolocation API and successfully stubbed/intercepted this request with Cypress
- Auspiciously created React functional components and implemented various hooks for state management.
- Successfully implemented React Bootstrap for the first time.

### Challenges: 

- It was challenging to implement error handling for if a location was not obtained. I was not sure how to check this at first.
- There was an issue where the date was updating to the next day _before_ midnight. That was challenging to navigate.
