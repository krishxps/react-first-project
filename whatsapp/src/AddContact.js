import React from 'react';
import './addContact.css';
import ContactList from './ContactList';

export default function AddContact() {
  const contacts = [
    {
      name: "Kemal Betu",
      email: "Kemal@email.Betu",
    },
    {
      name: "Tu Yin",
      email: "Tu@email.yin",
    }
  ];
  
  return (
    <div className='addContact'>
      <h1>Add Contact</h1>
      <form className='details'>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='Enter Your email address' />
        </div>
        <button id='btn' type='submit'>Submit</button>
      </form>
      <hr />
      {contacts.map((cont) => (
        <ContactList data={cont} />
      ))}
    </div>
  );
}
