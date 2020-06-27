import React from 'react';

export default function Contact(props) {
  const { icon, type, text, label, url } = props.contact;
  let contactLink;

  if (type === 'single') {
    contactLink = <h6><a href="https://www.google.com/maps/search/?api=1&Orange+County%2C+CA" target="_blank" rel="noreferrer noopener">Orange County, CA</a></h6>;
  } else {
    contactLink = <h1>Multiple</h1>;
  }

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
          {contactLink}
        </div>
      </div>
    </div>
  );
}
