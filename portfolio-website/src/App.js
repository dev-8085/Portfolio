import React, { useEffect, useState } from 'react';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero data={data} />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;