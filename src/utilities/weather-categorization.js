export default function categorizeWeather(data) {
  const weather = data.current.condition.text.toLowerCase();
  if (weather === 'sunny') {
    return ['sunny', 3, '☀️'];
  } else if (weather.includes('snow') || weather.includes('sleet') || weather.includes('ice') || weather.includes('blizzard')) {
    if (data.current.is_day) {
      return ['snow', 1, '🌨️'];
    } return ['snow', 0, '🌖'];
  } else if (weather.includes('rain') || weather.includes('drizzle') || weather.includes('mist') || weather.includes('thunder')) {
    if (data.current.is_day) {
      return ['rain', 1, '🌧️'];
    } return ['rain', 0, '🌖'];
  } else if (weather.includes('fog') || weather.includes('overcast') || weather === 'cloudy') {
    if (data.current.is_day) {
    return ['overcast', 1, '☁️'];
    } return ['overcast', 0, '🌖'];
  } else if (weather === 'partly cloudy') {
    if (data.current.is_day) {
    return ['cloudy', 2, '🌤️'];
    } return ['cloudy', 0, '🌖'];
  } else if (weather.includes('clear')) {
    return ['sunny', 0, '🌖'];
  }
}