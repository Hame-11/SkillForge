import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext.jsx';
import { SiJavascript, SiReact, SiFigma, SiPython } from 'react-icons/si';
import { FaArrowRight, FaCertificate, FaUsers, FaVideo } from 'react-icons/fa';
import styles from './Home.module.css';

const Home = () => {
  const { user } = useAuth();
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    const justSignedUp = localStorage.getItem('justSignedUp');
    if (justSignedUp) {
      setIsNewUser(true);
      localStorage.removeItem('justSignedUp');
      setTimeout(() => setIsNewUser(false), 5000);
    }
  }, [user]);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>
          {user ? (
            isNewUser ? `🎉 Welcome, ${user.name}!` : `👋 Welcome back, ${user.name}!`
          ) : (
            'Master New Skills with SkillForge'
          )}
        </h1>
        <p>Expert-led courses to advance your career</p>
        {user ? (
          <Link to="/dashboard" className={styles.primaryBtn}>
            Continue Learning <FaArrowRight style={{ marginLeft: '8px' }} />
          </Link>
        ) : (
          <div className={styles.ctaButtons}>
            <Link to="/signup" className={styles.primaryBtn}>Start Learning Today</Link>
            <Link to="/login" className={styles.secondaryBtn}>Login</Link>
          </div>
        )}
      </section>

      {!user && (
        <section className={styles.features}>
          <h2>Why Choose SkillForge?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <SiJavascript size={40} color="#f7df1e" />
              </div>
              <h3>Expert-Led Courses</h3>
              <p>Learn from industry professionals</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <FaCertificate size={40} color="#4caf50" />
              </div>
              <h3>Earn Certificates</h3>
              <p>Get recognized for your achievements</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <FaVideo size={40} color="#667eea" />
              </div>
              <h3>Learn Anywhere</h3>
              <p>Access courses on any device</p>
            </div>
          </div>
        </section>
      )}

      {user && (
        <section className={styles.quickStats}>
          <h2>Your Learning Journey</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>📚 Active Courses</h3>
              <p>4 courses in progress</p>
            </div>
            <div className={styles.statCard}>
              <h3>🎯 Completion Rate</h3>
              <p>Keep going! You're doing great</p>
            </div>
            <div className={styles.statCard}>
              <h3>🏆 Certificates</h3>
              <p>Complete courses to earn</p>
            </div>
          </div>
          <Link to="/dashboard" className={styles.dashboardLink}>
            Go to Your Dashboard →
          </Link>
        </section>
      )}
    </div>
  );
};

export default Home;