describe('sad path', () => {
  beforeEach(() => {
  });
  
  it('should handle geolocation being disabled', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
       cy.stub(win.navigator.geolocation, 'getCurrentPosition')
         .callsArgWith(1, new Error('test error'))
      }
    });
    cy.get('button')
      .contains('Check In!')
      .click();
    cy.get('.alert')
      .contains('Uh oh, geolocation services required.')
    cy.get('.alert a')
      .contains('Learn more')
      .click()
    cy.get('.card')
      .contains('How to enable Location Services')
  });
  
  it('should handle weather API being unavailable', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        const latitude = 48.77;
        const longitude = -122.44;
       cy.stub(win.navigator.geolocation, 'getCurrentPosition')
         .callsArgWith(0, { coords: { latitude, longitude } })
      }
    });
    cy.intercept('GET', 'http://api.weatherapi.com/v1/forecast.json?key=8be56b510d444b61835203526231904&q=48.77,-122.44&days=7&aqi=no&alerts=no', {
      statusCode: 500
    });
    cy.get('button')
      .contains('Check In!')
      .click();
    cy.get('.alert')
      .contains("There's been an API error, please try again later")
  });

  it('should handle weather API exceeding rate limit', () => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        const latitude = 48.77;
        const longitude = -122.44;
       cy.stub(win.navigator.geolocation, 'getCurrentPosition')
         .callsArgWith(0, { coords: { latitude, longitude } })
      }
    });
    cy.intercept('GET', 'http://api.weatherapi.com/v1/forecast.json?key=8be56b510d444b61835203526231904&q=48.77,-122.44&days=7&aqi=no&alerts=no', {
      statusCode: 429
    });
    cy.get('button')
      .contains('Check In!')
      .click();
    cy.get('.alert')
      .contains("There's been an API error, please try again later")
  });
});