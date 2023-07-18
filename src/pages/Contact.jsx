import React, { useState } from 'react';
import './Contact.css'
import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
  const [emailData, setEmailData] = useState({ name: '', message: '' });

  const { name, message } = emailData;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:aleczytkowski@gmail.com/?subject=Hello Alec!&body=${message}`;
  };

  const handleInputChange = (e) => setEmailData({ ...emailData, [e.target.name]: e.target.value });

  return (
    <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <div>
        <ul className="social-links">
          <li className="social-item">
            <SocialIcon url='https://github.com/AlecZytkowski' bgColor='white' />
          </li>
          <li className="social-item">
            <SocialIcon url="https://www.linkedin.com/in/alec-zytkowski-194719226/" bgColor='white' />
          </li>
        </ul>
        <p>Or, you can just send me an Email!</p>
      </div>
      <div className='contact-form'>
        <form onSubmit={handleSubmit}>
          <label className='form-label' htmlFor="name">Name</label>
          <input
            className='form-input'
            type="text"
            id="name"
            name='name'
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
          <label className='form-label' htmlFor="message">Message</label>
          <textarea 
            name='message' 
            onChange={handleInputChange}
            value={message}
            className='form-text-area' 
            id="message" 
            placeholder="Enter your message here"
          />
          <button type="submit" className='form-submit-button'>Contact Me!</button>
        </form>
      </div>
    </div>
  );
};