import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './ContactUs.css'; // Import your CSS file

// Import photos
import julkerPhoto from '../assets/julker.jpg';
import nahidPhoto from '../assets/nahid.jpg';
import jamilPhoto from '../assets/jamil.jpg';

// Contributors data
const contributors = [
  {
    name: 'Julker Nayeen Karim',
    email: 'julker.cse.20220104130@aust.edu',
    facebook: 'https://www.facebook.com/profile.php?id=100085951203589',
    photo: julkerPhoto,
  },
  {
    name: 'Md Nahid Hossain',
    email: 'nahid.cse.20220104146@aust.edu',
    facebook: 'https://www.facebook.com/nahid.h143/',
    photo: nahidPhoto,
  },
  {
    name: 'Jamil Jim',
    email: 'jamil.cse.20220104139@aust.edu',
    facebook: 'https://www.facebook.com/jamil.jim.946',
    photo: jamilPhoto,
  },
];

const ContactUs = () => {
  return (
    <div className="contact-container">
      <header className="header">
        <h1>CPTracker's Platform</h1>
        <p>Your Gateway to Coding Success!</p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At CPTracker, we believe coding isn't just a skill; it's a superpower. We're here to empower coders of all levels to take control of their coding journey, increase their skills, and collaborate with the platform.
        </p>
      </section>

      <section className="what-we-do">
        <h2>What we do</h2>
        <div className="boxes">
          <div className="box">
            <h3>Contents</h3>
            <p>
              Explore curated coding content from renowned platforms like LeetCode, Codeforces, CodeChef, and more.
            </p>
          </div>
          <div className="box">
            <h3>Portfolio</h3>
            <p>Forge a standout portfolio and showcase your skills to the world.</p>
          </div>
          <div className="box">
            <h3>Open Source</h3>
            <p>We believe in collaboration. Share your knowledge, code, and expertise.</p>
          </div>
        </div>
      </section>

      <section className="contributors-section">
        <h2>Our Contributors</h2>
        <div className="contributors">
          {contributors.map((contributor, index) => (
            <div key={index} className="contributor-card">
              <img src={contributor.photo} alt={contributor.name} className="contributor-photo" />
              <h3>{contributor.name}</h3>
              <div className="contact-details">
                <p>
                  <a href={`mailto:${contributor.email}`}>
                    <i className="fas fa-envelope"></i> {contributor.email}
                  </a>
                </p>
                <p>
                  <a href={contributor.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
