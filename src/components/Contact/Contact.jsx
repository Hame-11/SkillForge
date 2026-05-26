import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, you'd send this to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </section>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <div>
              <h3>Email</h3>
              <p>hello@skillmaster.com</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaPhone className={styles.icon} />
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <h3>Address</h3>
              <p>123 Learning Lane, Education City, EC 12345</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <FaClock className={styles.icon} />
            <div>
              <h3>Hours</h3>
              <p>Monday - Friday: 9am - 6pm EST</p>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2>Send us a Message</h2>
          {submitted && <div className={styles.success}>Message sent successfully!</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;