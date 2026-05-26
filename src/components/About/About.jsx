import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaGlobe, FaRocket } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <h1>About SkillForge</h1>
        <p>Empowering learners to achieve their dreams since 2026</p>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <h2>Our Mission</h2>
          <p>At SkillForge, we believe that education should be accessible, engaging, and effective for everyone. Our mission is to provide high-quality, expert-led courses that help people develop new skills and advance their careers.</p>
        </div>
      </section>

      <section className={styles.stats}>
        <h2>Our Impact</h2>
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <FaUsers size={48} color="#667eea" />
            <h3>10,000+</h3>
            <p>Active Students</p>
          </div>
          <div className={styles.stat}>
            <FaChalkboardTeacher size={48} color="#667eea" />
            <h3>50+</h3>
            <p>Expert Instructors</p>
          </div>
          <div className={styles.stat}>
            <FaGlobe size={48} color="#667eea" />
            <h3>100+</h3>
            <p>Countries</p>
          </div>
          <div className={styles.stat}>
            <FaRocket size={48} color="#667eea" />
            <h3>200+</h3>
            <p>Courses</p>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>🎓 Excellence</h3>
            <p>We strive for the highest quality in every course we offer.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>🌍 Accessibility</h3>
            <p>Education should be available to everyone, everywhere.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>💡 Innovation</h3>
            <p>We continuously evolve our platform to serve you better.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;