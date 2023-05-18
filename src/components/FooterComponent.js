import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  
  return (
    <div className="footer border-top">
      <div className="py-4 px-5">
        <footer className="row row-cols-1 row-cols-md-4 pt-4 pb-3">
          <div className="col col-md-6 section-logo">
            <a href="/home" className="d-flex mb-2">
              <img src="assets/images/logo.png" height="70" width="140" alt="Logo Optimational"/>
            </a>
            <p className="mt-4 text-muted bold">Harju Maakond</p>
            <p className="text-muted bold">Estonia 74626</p>
            <section className="d-flex flex-column justify-content-end pt-4 section-social">
              <div className="justify-content-start icons">
                <a href="https://wa.me/13478093334?text=Hi!%20I'm%20interested%20in%20your%20translation%20services." target="_blank" className= "me-4" rel="noopener noreferrer">
                  <FontAwesomeIcon className="hover-orange" icon="fa-brands fa-whatsapp" size="xl" />               
                </a>
                <a href="https://www.facebook.com/optimational/" target="_blank" className="m-4" rel="noopener noreferrer">
                  <FontAwesomeIcon className="hover-orange" icon="fa-brands fa-facebook" size="xl" />
                </a>
                <a href="https://www.instagram.com/optimational.solutions/" target="_blank" className="m-4" rel="noopener noreferrer">
                  <FontAwesomeIcon className="hover-orange" icon="fa-brands fa-instagram" size="xl" />
                </a>
                <a href="https://twitter.com/optimational" target="_blank" className="m-4" rel="noopener noreferrer">
                  <FontAwesomeIcon className="hover-orange" icon="fa-brands fa-twitter" size="xl" />
                </a>
                <a href="https://www.youtube.com/channel/UCJKTuRumic92eLWhTG_WtQw" target="_blank" className="m-4" rel="noopener noreferrer">
                  <FontAwesomeIcon className="hover-orange" icon="fa-brands fa-youtube" size="xl" />
                </a>
                <a href="https://www.linkedin.com/company/optimational/" target="_blank" className="m-4" rel="noopener noreferrer">
                  <FontAwesomeIcon className="hover-orange" icon="fa-brands fa-linkedin" size="xl" />
                </a>               
              </div>
            </section>
          </div>

          <div className="col-4 col-md-2 mb-3 section-link">
            <h5>Navigation</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">About Us</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Careers</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Case Study</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-4 col-md-2 mb-3 section-link">
            <h5>Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Translation and Localisation Services</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Multilingual SEO Services</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Subtitling Services</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Transcription Services</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Voice-Over Translation Services</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">White-Label Services</a></li>
            </ul>
          </div>

          <div className="col-4 col-md-2 mb-3 section-link">
            <h5>Resources</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Blog</a></li>
              <li className="nav-item mb-2"><a href="#" className="p-0 hover-orange">Multilingual Markeing Library</a></li>
            </ul>
          </div>
          <p className="text-muted bold signature">&copy; 2023. Business Translation Services | Optimational.<br/>Desarrollado por Javier Scarione.</p>
        </footer>
      </div>
    </div>
  )
}

export default Footer;