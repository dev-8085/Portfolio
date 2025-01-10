import React, { useEffect } from 'react';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;