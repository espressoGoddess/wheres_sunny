describe('happy path', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        const latitude = 48.77;
        const longitude = -122.44;
       cy.stub(win.navigator.geolocation, 'getCurrentPosition')
         .callsArgWith(0, { coords: { latitude, longitude } })
      }
    });
    cy.intercept('GET', 'http://api.weatherapi.com/v1/forecast.json?key=8be56b510d444b61835203526231904&q=48.77,-122.44&days=7&aqi=no&alerts=no', {
      fixture: 'weatherAPIForecastSuccessOvercast'
    });
  });

  it('should be able to check in', () => {
    cy.get('nav')
      .should('have.text', "Where's Sunny")
    cy.get('.card-body')
      .should('include.text', "Shine, baby shine!")
    cy.get('button')
      .contains('Check In!')
      .click();
    cy.get('[data-test=weather-results]')
      .contains('overcast')
    cy.get('[data-test=points]')
      .contains('1')
  });

  it('should be able to see my points', () => {
    cy.get('button')
      .contains('Check In!')
      .click();
    cy.get('[data-test=points]')
        .get('button')
        .contains('See my points')
        .click()

    cy.get('[data-test=stats]')
      .contains('You have 1 point')
    
    cy.get('#fill-tab-example-tab-sunny > .display-4')
      .click()

    cy.get('[data-test=stats]')
      .contains('Whoops, Try going to the desert 🏜️')
  });

  it('should show me when it will be sunny next if not currently', () => {
    cy.get('button')
      .contains('Check In!')
      .click();
    cy.get('[data-test=points]')
      .contains('It should be sunny in 4 days!')
  });

  it('should remember previous check ins', () => {
    cy.get('button')
      .contains('Check In!')
      .click();
    cy.get('nav')
      .contains("Where's Sunny")
      .click()

    cy.get('button')
      .contains('Check In!')
      .click();
    cy.get('[data-test=points]')
      .get('button')
      .click()
    cy.get('[data-test=stats]')
      .contains('You have 2 points')
  });

  it ('should be able to go back home', () => {
    cy.get('button')
      .contains('Check In!')
      .click();
    cy.get('[data-test=points]')
      .get('button')
      .contains('See my points')
      .click()

    cy.get('nav')
      .contains("Where's Sunny")
      .click()
    cy.get('.card-body')
      .should('include.text', "Shine, baby shine!")
  })
});