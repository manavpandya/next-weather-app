import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-5 text-center mt-8 rounded-t-3xl text-base font-medium tracking-wide shadow-md">
      <span>
        Made with <span className="text-yellow-400">☀️</span> by Manav Pandya
        &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
}
