import React from 'react';
import { SiJavascript, SiReact, SiFigma, SiPython } from 'react-icons/si';
import { FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';
import ProgressBar from '../Common/ProgressBar';
import styles from './Dashboard.module.css';

const CourseCard = ({ course, onSelect, isSelected }) => {
  // Map course icons based on title
  const getCourseIcon = () => {
    if (course.title.includes('JavaScript')) {
      return <SiJavascript size={40} color="#f7df1e" />;
    }
    if (course.title.includes('React')) {
      return <SiReact size={40} color="#61dafb" />;
    }
    if (course.title.includes('UI/UX')) {
      return <SiFigma size={40} color="#a259ff" />;
    }
    if (course.title.includes('Python')) {
      return <SiPython size={40} color="#3776ab" />;
    }
    return <FaCode size={40} color="#667eea" />;
  };

  const getGradient = () => {
    if (course.title.includes('JavaScript')) {
      return 'linear-gradient(135deg, #f7df1e20, #f7df1e05)';
    }
    if (course.title.includes('React')) {
      return 'linear-gradient(135deg, #61dafb20, #61dafb05)';
    }
    if (course.title.includes('UI/UX')) {
      return 'linear-gradient(135deg, #a259ff20, #a259ff05)';
    }
    if (course.title.includes('Python')) {
      return 'linear-gradient(135deg, #3776ab20, #3776ab05)';
    }
    return 'linear-gradient(135deg, #667eea20, #764ba205)';
  };

  return (
    <div 
      className={`${styles.courseCard} ${isSelected ? styles.selected : ''}`}
      onClick={() => onSelect(course)}
    >
      <div className={styles.courseIcon} style={{ background: getGradient() }}>
        {getCourseIcon()}
      </div>
      <div className={styles.courseInfo}>
        <h3>{course.title}</h3>
        <p className={styles.instructor}>{course.instructor}</p>
        <ProgressBar progress={course.progress} height="6px" />
        <div className={styles.courseStats}>
          <span>📚 {course.completedLessons}/{course.totalLessons} lessons</span>
          <span>🎯 {course.progress}% complete</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;