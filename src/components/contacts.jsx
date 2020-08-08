import React from 'react';
import Contact from './contact';

export default function Contacts(props) {
  const contactCards = props.contacts.map((contact) => {
    const { id } = contact;
    return <Contact key={id} contact={contact} />;
  });

  return (
    <section className="contacts" id="contact">
      <div className="contacts-content container sp-top sp-bottom">
        <div className="contacts-title row flex-column justify-content-center align-items-center">
          <h4>Contact</h4>
          <h1>Get in touch</h1>
        </div>
        <div className="contacts-cards row">{contactCards}</div>
      </div>
    </section>
  );
}
