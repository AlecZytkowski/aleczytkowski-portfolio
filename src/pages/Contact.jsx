import React, { useState } from 'react';
import './Contact.css'
import { SocialIcon } from 'react-social-icons';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      window.location.href = 'mailto:aleczytkowski@gmail.com';
      setName('');
      setEmail('');
    };
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    return (
      <div className="contact" id="contact">
        <h1>Contact Me</h1>
        <div>
        <ul className="social-links">
          <li className="social-item">
            <SocialIcon url='https://github.com/AlecZytkowski' bgColor='white'/>
          </li>
          <li className="social-item">
            <SocialIcon url="https://www.linkedin.com/in/alec-zytkowski-194719226/" bgColor='white'/>
          </li>
        </ul>
        </div>
        <div className='contact-form'>
        <form onSubmit={handleSubmit}>
        <p>Or, you can just send me an Email!</p>
          <label className='form-label' htmlFor="name">Name</label>
          <br />
          <input
            className='form-input'
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
          <br />
          <label className='form-label' htmlFor="email">Email</label>
          <br />
          <input
            className='form-input'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter a valid email"
            required
          />
          <br />
          <label className='form-label' htmlFor="email">Message</label>
          <textarea  className='form-input' id="message" rows="4" placeholder="Enter your message here"></textarea>
          <br />
          <button type="submit" className='form-submit-button'>Contact Me!</button>
        </form>
        </div>
      </div>
    );
  };