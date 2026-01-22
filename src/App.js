// import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './components/Header';
// import Home from "./pages/home.js"  // Old Home - Commented out
import About from "./pages/about.js"
import Services from "./pages/services.js"
import Appointment from "./pages/appointment.js";
import './css/style.css';
import ExternalScripts from './ExternalScripts.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteChangeHandler from './RouteChangeHandler';
import Blog from "./pages/blog.js"; 
import BlogSinglePage from "./pages/blog-single.js";
import Career from "./pages/career.js";
import Pricing from "./pages/pricing.js";
import Contact from "./pages/contact.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";     
import Project_single from "./pages/project-single.js";
import Projects from "./pages/projects.js";
import Service_single from "./pages/service-single.js";
import TermsAndConditions from "./pages/Terms&Conditions.js";

// New imports for your custom pages
import HomeNew from './components/Home';
import Careers from './components/Careers';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    
    <BrowserRouter>
        <RouteChangeHandler />
        <ExternalScripts />
        
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          
          <Route path="/" element={
            <>
              <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
              <HomeNew />
              <Footer />
            </>
          } />
          <Route path="/careers" element={
            <>
              <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
              <Careers />
              <Footer />
            </>
          } />
          
          {/* Existing routes */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single-page" element={<BlogSinglePage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/project-single" element={<Project_single />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/service-single" element={<Service_single />} />
          <Route path="/Terms&Conditions" element={<TermsAndConditions />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;