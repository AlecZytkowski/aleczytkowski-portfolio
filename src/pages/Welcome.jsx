import React, { useState, useEffect } from 'react';
import './Welcome.css';
import profile from '../assets/profile.jpg'

export const Welcome = () => {
    const [textIndex, setTextIndex] = useState(0);
    const textArray = [
      'Full-Stack Developer',
      'ReactJS Developer',
      'C# Developer',
      'Blazor Developer',
      'SQL Administrator',
      'UI/UX Designer',
      'Web Developer',
      'IT Administrator',
      'Tech Enthusiast'
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTextIndex((prevIndex) =>
          prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className='welcome' id='home'>
        <h1>Welcome!</h1>
        <p>I am Alec Zytkowski.</p>
        <img src={profile} alt='Alec Zytkowski' className='welcome-image' />
        <h3>
          {' '}
          <span className='text-transition'>
            {textArray[textIndex]}
          </span>
        </h3>
      </div>
    );
  };
