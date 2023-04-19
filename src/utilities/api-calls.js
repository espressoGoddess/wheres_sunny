const fetchCall = (path) => {
  return fetch(`http://api.weatherstack.com/current?access_key=20dec75054c286ec715498e8846f2071&query=${path}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

export { fetchCall };
