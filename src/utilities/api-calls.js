export default async function fetchCall(location) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8be56b510d444b61835203526231904&q=${location[0]},${location[1]}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}
