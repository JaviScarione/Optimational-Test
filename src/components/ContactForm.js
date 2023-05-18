import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function ContactForm() {
  return (
    <div className='container page'>
        <div className='row align-items-center justify-content-center text-center py-5'>
            <div className='col-12 col-md-6'>
                <Form className='text-description'>
                <h1 className='title-orange'>Tell Us About the Details!</h1>
                    <FormGroup row>
                        <Label htmlFor="name" md={4}>Name*</Label>
                        <Col md={7}>
                            <Input type="text" id="name" name="name"placeholder="Name"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={4}>Email*</Label>
                        <Col md={7}>
                            <Input type="email" id="email" name="email"placeholder="Email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="comany" md={4}>Company</Label>
                        <Col md={7}>
                            <Input type="text" id="company" name="company"placeholder="Company"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="location" md={4}>Location</Label>
                        <Col md={7}>
                            <Input type="text" id="location" name="location"placeholder="Country, City"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message" md={4}>Your Message</Label>
                        <Col md={7}>
                            <Input type="textarea" id="message" name="message"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="grass" md={4}>The color of grass is</Label>
                        <Col md={7}>
                            <Input type="text" id="grass" name="grass"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 10, offset: 5}}>
                            <Button type="submit" className='button'>
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>


            <div className='col-12 col-md-6'>
                <div>
                    <img src="assets/images/imagen.png" className='img-fluid'/>
                </div>
            
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-1'> 
                            <FontAwesomeIcon className='lightblue me-1' icon={faLocationDot} size="3x"/>
                        </div>
                        <div className='col-4'> 
                            <h5 className='orange'>EU HEADQUARTER </h5> 
                        </div>
                        <div className='col-6'> 
                            <p className='adress'>Harju Maakond, Estonia 74626</p> 
                        </div>
                    </div>
                </div>
                <div className='box-work col align-items-center justify-content-center text-center'>
                    <div>
                        <h4 className='text-white my-3'>Want to Join Our Team?</h4>
                    </div>
                    <div>
                        <a href='/workwithus'>
                            <button type="button" className="btn btn-lg work-button my-3">WORK WITH US</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  );
}

export default ContactForm;