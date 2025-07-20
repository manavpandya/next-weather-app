
export async function getWeather(city) {
  const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "City not found");
  }
  return res.json();
}

export async function getForecast(city) {
  const res = await fetch(`/api/forecast?city=${encodeURIComponent(city)}`);
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "Forecast not found");
  }
  return res.json();
}
