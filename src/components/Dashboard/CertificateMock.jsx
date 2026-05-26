import React from 'react';
import { FaDownload, FaLock, FaTrophy } from 'react-icons/fa';
import styles from './Dashboard.module.css';

const CertificateMock = ({ course, userName }) => {
  const isComplete = course.progress === 100;

  const handleDownload = () => {
    alert(`🎓 Certificate for ${userName || 'Student'} - ${course.title}\n\nThis is a demo certificate. In production, this would download a PDF.`);
  };

  return (
    <div className={styles.certificatePanel}>
      <h2>Certificate of Completion</h2>
      <div className={`${styles.certificateMock} ${isComplete ? styles.unlocked : ''}`}>
        {isComplete ? (
          <>
            <div className={styles.certificateBadge}>
              <FaTrophy size={48} color="#ffd700" />
            </div>
            <h3>Certificate of Excellence</h3>
            <p>This certifies that</p>
            <h4>{userName || 'Valued Student'}</h4>
            <p>has successfully completed</p>
            <h4>{course.title}</h4>
            <p>with a score of {course.progress}%</p>
            <button onClick={handleDownload} className={styles.downloadBtn}>
              <FaDownload style={{ marginRight: '8px' }} /> Download Certificate
            </button>
          </>
        ) : (
          <>
            <div className={styles.lockedBadge}>
              <FaLock size={48} color="#999" />
            </div>
            <p>Complete all lessons to unlock your certificate</p>
            <p className={styles.progressHint}>Current progress: {course.progress}%</p>
            <div className={styles.lockedCertificate}>
              <h3>Certificate of Completion</h3>
              <p>_________________________</p>
              <p>Complete the course to reveal</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CertificateMock;