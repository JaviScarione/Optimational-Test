import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(props) {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const [selectedButtons, setSelectedButtons] = useState([]);


  const toggleSelection = button => {
    if (selectedButtons.includes(button)) {
      setSelectedButtons(selectedButtons.filter(b => b !== button));
    } else {
        setSelectedButtons([...selectedButtons,button]);
    }
  }

  const isSelected = button => selectedButtons.includes(button);

  console.log(isSelected)

    return(
      <nav id="navbar" className="navbar navbar-fixed d-flex navbar-expand-lg sticky-top border-bottom">
        <div className='container'>
          <a className="navbar-brand" href="/home">
           <img src="assets/images/logo.png" height="100" width="200" alt="Logo Optimational"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>     
          <div className="collapse navbar-collapse col-9 justify-content-end" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item"><a href="/home" className = "nav-link">HOME</a></li>
              <li className="nav-item"><a href="/services" className = "nav-link">SERVICES</a></li>
              <li className="nav-item"><a href="/about" className = "nav-link">ABOUT US</a></li>
              <li className="nav-item"><a href="/workwithus" className = "nav-link">WORK WITH US</a></li>
              <li className="nav-item"><a href="/resources" className = "nav-link">RESOURCES</a></li>
              <li className="nav-item"><a href="blog" className = "nav-link">BLOG</a></li>
              <li className="nav-item"><a href="contact" className = "nav-link">CONTACT US</a></li>
            </ul>
          </div>
        </div>
      </nav>



    );
  }

export default Header;

