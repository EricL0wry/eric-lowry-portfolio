import React from 'react';

export default function Contact(props) {

  return (
    <div className="col-lg-6 contact-card d-flex justify-content-center align-items-center">
      <div className="contact-icon">
        <i className="fas fa-map-pin"></i>
      </div>
      <div className="contact-info-container d-flex flex-column">
        <div className="contact-label-container">
          <h4>Location</h4>
        </div>
        <div className='contact-link-container'>
          <h6><a href="https://www.google.com/maps/search/?api=1&Orange+County%2C+CA" target="_blank" rel="noreferrer noopener">Orange County, CA</a></h6>
        </div>
      </div>
    </div>
  );
}
