import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "./ContactForm";


function Contact() {
  return (
    <div className='container page'>
      <div className='row'>
        <div>
          <h1 className='title-orange'>Contact Us</h1>
        </div>
        <div>
          <h2 className='title col-12'>Hello! We are glad you found us.</h2>
        </div>
        <div>
          <h2 className='title2 col-12 mt-3'>Here are 3 easy ways to get in touch with our team:</h2>
        </div>
      </div>




      <div className="row text-center row-cols-1 row-cols-md-3 my-3">
        <div className='col col-md-4 column'>

          <div>
            <a href="https://meetings.hubspot.com/s-nunez" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-lg button button-circle"><FontAwesomeIcon icon={faCalendarDays} /></button>
            </a>
          </div>
          <a href="https://meetings.hubspot.com/s-nunez" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-lg button but">BOOK A MEETING</button>
          </a>
          <p className='text-description'>Choose the time that suits you best and let us have a call!</p>
        </div>

        <div className='col col-md-4 column'>
          <div>
            <a href="mailto:solutions@optimational.com" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-lg button button-circle"><FontAwesomeIcon icon={faEnvelope} /></button>
            </a>
          </div>
          <a href="mailto:solutions@optimational.com" rel="noopener noreferrer">
            <button type="button" className="btn btn-lg button but">EMAIL US</button>
          </a>
          <p className='text-description'>Drop us an email. We want to know about your project!</p>
        </div>

        <div className='col col-md-4 column'>
          <div>
            <a href="#form">
              <button type="button" className="btn btn-lg button button-circle"><FontAwesomeIcon icon={faList} /></button>
            </a>
          </div>
          <a href='#form'> 
          <button type="button" className="btn btn-lg button but">FILL THE FORM</button>
          </a>
          <p className='text-description'>Fill in the form. We will get back to you soon.</p>
        </div>
      </div>
      

      <div className='col' id="form">
        <div className="d-flex text-container">
          <img src="assets/images/contact-end2.png" className='img-fluid'/>
          <div className='text-moon'> 
            <p>Whichever contact option you choose,<br/>we will be happy to answer your questions.</p>
          </div>
        </div>
      </div>



      <div>
        <ContactForm />
      </div>


    </div>
  );
}

export default Contact;