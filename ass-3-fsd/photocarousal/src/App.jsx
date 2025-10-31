import React, { useState } from "react";
import Carousel from "./components/Carousel";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={`min-h-screen transition-colors ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <header className="text-center py-6">
        <h1
          className={`text-3xl md:text-4xl font-extrabold ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Colorful Interactive Photo Carousel
        </h1>
        <button
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
          className="mt-4 px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:scale-105 transition"
        >
          Toggle Theme
        </button>
      </header>

      <Carousel />
    </div>
  );
}

export default App;
