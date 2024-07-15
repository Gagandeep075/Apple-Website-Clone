import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppleIpad from './components/AppleIpad';
import AppleVision from './components/AppleVision';
import ApplePhone from './components/ApplePhone';
import HomePage from './components/HomePage';


const App = () => {
  return (
  
      <BrowserRouter>
        <div className="bg-black no-scrollbar">
          <Navbar />
          
          
        
          <Routes>
            <Route path="/phone" element={<ApplePhone />} />
            <Route path="/ipad" element={<AppleIpad />} />
            <Route path="/vision" element={<AppleVision />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
   
  );
};

export default App;
