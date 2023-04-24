export default async function fetchCall(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8be56b510d444b61835203526231904&q=${location[0]},${location[1]}&days=7&aqi=no&alerts=no`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}
