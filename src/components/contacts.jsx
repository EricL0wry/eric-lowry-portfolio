import React from 'react';
import Contact from './contact';

export default function Contacts(props) {
  const contactCards = props.contacts.map(contact => {
    const { id } = contact;
    return <Contact key={id} contact={contact} />;
  });

  return (
    <section className="contact">
      <div className="contact-content container sp-top sp-bottom">
        <div className="contact-title row flex-column justify-content-center align-items-center">
          <h4>Contact</h4>
          <h1>Get in touch</h1>
        </div>
        <div className="contact-cards row">
          {contactCards}
        </div>
      </div>
    </section>
  );
}
