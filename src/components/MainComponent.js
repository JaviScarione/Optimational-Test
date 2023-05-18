import React from "react";
import About from './AboutComponent';
import Blog from './BlogComponent';
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Resources from "./ResourcesComponent";
import Services from "./ServicesComponent";
import WorkWithUs from "./WorkWithUsComponent";
import ContactForm from "./ContactForm";
import { Routes, Route } from 'react-router-dom';





function Main() {


  return (
    <div>
      <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/services" element={<Services />} />
            <Route path="/workwithus" element={<WorkWithUs />} />
            <Route path="/contactform" element={<ContactForm />} />
          </Routes>
      <Footer />
    </div>
  );
}

  
  export default Main;