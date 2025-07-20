"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import { getWeather, getForecast } from "./lib/weather";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

  const search = async (city) => {
    try {
      setError("");
      const current = await getWeather(city);
      const forecastData = await getForecast(city);
      setWeather(current);
      setForecast(forecastData);
    } catch (err) {
      setError("City not found");
      setWeather(null);
      setForecast(null);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-4">
      <div
        style={{
          background: "linear-gradient(135deg, #e0e7ff 0%, #f0fff0 100%)",
          borderRadius: "2rem",
          boxShadow: "0 4px 32px rgba(80, 120, 255, 0.10)",
          padding: "2.5rem 2rem 2rem 2rem",
          marginTop: "2rem",
          marginBottom: "2rem",
          border: "1.5px solid #e0e7ff",
          minHeight: "400px",
        }}
      >
        <SearchBar onSearch={search} />
        {!weather && !forecast && !error && (
          <div className="flex flex-col items-center justify-center mt-12 text-center opacity-80">
            <svg
              width="80"
              height="80"
              fill="none"
              viewBox="0 0 80 80"
              className="mb-4"
            >
              <ellipse
                cx="40"
                cy="68"
                rx="24"
                ry="6"
                fill="#b3c6ff"
                fillOpacity="0.25"
              />
              <circle cx="40" cy="36" r="20" fill="#e0e7ff" />
              <path
                d="M30 38a10 10 0 0 1 20 0"
                stroke="#4f8cff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="34" cy="34" r="2" fill="#4f8cff" />
              <circle cx="46" cy="34" r="2" fill="#4f8cff" />
            </svg>
            <div className="text-lg font-medium text-blue-500 mb-1">
              No city searched yet
            </div>
            <div className="text-gray-500 text-base">
              Start by searching for a city above to see the weather forecast.
            </div>
          </div>
        )}
        {error && (
          <p
            style={{
              color: "#ff4d4f",
              background: "#fff0f0",
              borderRadius: "0.5rem",
              padding: "0.75rem 1rem",
              margin: "1rem 0",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}
        {weather && <WeatherCard data={weather} />}
        {forecast && <ForecastCard forecast={forecast} />}
      </div>
    </main>
  );
}
