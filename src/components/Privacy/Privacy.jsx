import React from 'react';
import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.privacy}>
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p>Last updated: March 2026</p>
        
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us for support.</p>
        
        <h2>How We Use Your Information</h2>
        <p>We use your information to provide, maintain, and improve our services, to communicate with you, and to personalize your learning experience.</p>
        
        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information.</p>
        
        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at privacy@skillmaster.com</p>
      </div>
    </div>
  );
};

export default Privacy;