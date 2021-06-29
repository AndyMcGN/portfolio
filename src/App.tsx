import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeSection from './components/HomeSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      {/* 
        navbar
        home
        about
        projects
        contact
        footer
      */}
      <Navbar />
      <HomeSection />
      <AboutSection />
    </div>
  );
}

export default App;
