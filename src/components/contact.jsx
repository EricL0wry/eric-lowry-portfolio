import React from 'react';
import MultiLink from './multi-link';

export default function Contact(props) {
  const { icon, type, text, label, url } = props.contact;
  let contactLink;

  if (type === 'single') {
    contactLink = <h6><a href={url} target="_blank" rel="noreferrer noopener">{text}</a></h6>;
  } else {
    contactLink = <MultiLink links={text} />;
  }

  return (
    <div className="col-lg-6 contact-card d-flex justify-content-center align-items-center">
      <div className="contact-icon">
        <i className={icon}></i>
      </div>
      <div className="contact-info-container d-flex flex-column">
        <div className="contact-label-container">
          <h4>{label}</h4>
        </div>
        <div className='contact-link-container'>
          {contactLink}
        </div>
      </div>
    </div>
  );
}
