// /app/api/weather/route.js

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");
  if (!city) {
    return new Response(JSON.stringify({ error: "City is required" }), { status: 400 });
  }
  const apiKey = process.env.OPENWEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    return new Response(JSON.stringify({ error: data.message || "City not found" }), { status: res.status });
  }
  return new Response(JSON.stringify(data), { status: 200 });
}
