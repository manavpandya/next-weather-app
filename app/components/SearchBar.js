"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center bg-white rounded-full shadow-lg px-5 py-2 border border-blue-100 mx-auto"
    >
      <div className="relative flex-1 min-w-0 flex items-center">
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-500 text-xl pointer-events-none z-10">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="#4f8cff" strokeWidth="2" />
            <path
              stroke="#4f8cff"
              strokeWidth="2"
              strokeLinecap="round"
              d="M20 20l-3.5-3.5"
            />
          </svg>
        </span>
        <input
          id="city-search"
          type="text"
          className="pl-10 pr-2 py-2 rounded-full border-none text-base bg-transparent text-gray-900 h-11 font-medium outline-none w-full min-w-0 focus:ring-2 focus:ring-blue-200"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoComplete="off"
          placeholder="City or place name"
        />
      </div>
      <button
        type="submit"
        className="ml-2 bg-gradient-to-tr from-blue-500 to-cyan-400 text-white border-none rounded-full w-11 h-11 flex items-center justify-center shadow-md hover:from-cyan-400 hover:to-blue-500 transition-colors duration-200"
        aria-label="Search"
      >
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="2" />
          <path
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            d="M20 20l-3.5-3.5"
          />
        </svg>
      </button>
    </form>
  );
}
