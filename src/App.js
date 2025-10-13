import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Work from './components/Work';
import Work2 from './components/Work2';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Work2 />
      <Contact />
    </div>
  );
}

export default App;

