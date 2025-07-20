import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-8 text-center shadow-md rounded-b-3xl relative mb-6">
      <h1 className="text-4xl font-extrabold m-0 drop-shadow-md tracking-wide">
        Weatherly 🌤️
      </h1>
      <p className="text-lg mt-2 font-medium opacity-95">
        Your Modern Weather Companion
      </p>
    </header>
  );
}
