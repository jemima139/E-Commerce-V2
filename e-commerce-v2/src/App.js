import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Store from './Components/Store';
import Contact from './Components/Contact';
import Nav from './Layout/Nav'; 
import Footer from './Layout/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
