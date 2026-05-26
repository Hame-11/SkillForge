import React from 'react';
import styles from './Terms.module.css';

const Terms = () => {
  return (
    <div className={styles.terms}>
      <div className={styles.container}>
        <h1>Terms of Service</h1>
        <p>Last updated: March 2026</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using SkillForge, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        
        <h2>2. User Accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>
        
        <h2>3. Course Enrollment</h2>
        <p>When you enroll in a course, you get a license to view the course materials and participate in the learning experience. This license is personal, non-transferable, and for your own learning purposes only.</p>
        
        <h2>4. Payments and Refunds</h2>
        <p>Course purchases are final. Refunds are available within 14 days of purchase if you have not completed more than 25% of the course content.</p>
        
        <h2>5. Intellectual Property</h2>
        <p>All course content, including videos, text, images, and assessments, is owned by SkillForge or our instructors and is protected by copyright laws.</p>
        
        <h2>6. Prohibited Conduct</h2>
        <p>You may not share course materials, attempt to bypass security features, harass other users, or use the platform for any illegal activities.</p>
        
        <h2>7. Termination</h2>
        <p>We reserve the right to suspend or terminate your account for violations of these terms or for any other reason at our sole discretion.</p>
        
        <h2>8. Changes to Terms</h2>
        <p>We may modify these terms at any time. Continued use of SkillForge after changes constitutes acceptance of the modified terms.</p>
        
        <h3>If you have questions about these Terms, please contact us at legal@skillforge.com</h3>
      </div>
    </div>
  );
};

export default Terms;