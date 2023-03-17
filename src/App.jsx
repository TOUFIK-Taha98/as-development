import React from "react";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import Admin from "./routes/Admin";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <>
      <Router>
        {/* header */}
        <div
          className={`h-full w-full mx-auto py-2
        ${darkMode ? "dark" : ""}`}
        >
          <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        {/* body */}
        <div
          className={`h-full w-full mx-auto py-2
        ${darkMode ? "" : "dark"} mt-14`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
