import React from 'react';
import styles from './Common.module.css';

const ProgressBar = ({ progress, height = '8px', showLabel = true }) => {
  const getColor = () => {
    if (progress < 30) return '#f44336';
    if (progress < 70) return '#ff9800'; 
    return '#4caf50'; 
  };

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBarWrapper}>
        <div 
          className={styles.progressBarFill}
          style={{ 
            width: `${progress}%`, 
            height,
            backgroundColor: getColor()
          }}
        />
      </div>
      {showLabel && (
        <span className={styles.progressLabel}>{progress}% Complete</span>
      )}
    </div>
  );
};

export default ProgressBar;