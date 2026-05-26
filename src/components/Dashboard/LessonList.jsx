import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';

const LessonList = ({ course, onUpdateProgress }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (course?.lessons) {
      setLessons([...course.lessons]);
    }
  }, [course]);

  const toggleLesson = (lessonId) => {
    const updatedLessons = lessons.map(lesson =>
      lesson.id === lessonId 
        ? { ...lesson, completed: !lesson.completed } 
        : lesson
    );
    
    setLessons(updatedLessons);
    
    if (onUpdateProgress) {
      onUpdateProgress(course.id, updatedLessons);
    }
  };

  if (!course || !lessons.length) {
    return <div className={styles.lessonsPanel}>Select a course to view lessons</div>;
  }

  const completedCount = lessons.filter(l => l.completed).length;
  const progressPercent = (completedCount / course.totalLessons) * 100;

  return (
    <div className={styles.lessonsPanel}>
      <h2>Course Content: {course.title}</h2>
      <div className={styles.lessonsList}>
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className={styles.lessonItem}>
            <input
              type="checkbox"
              checked={lesson.completed}
              onChange={() => toggleLesson(lesson.id)}
              className={styles.checkbox}
            />
            <span className={lesson.completed ? styles.completed : ''}>
              {index + 1}. {lesson.title}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.lessonStats}>
        <strong>Progress:</strong> {completedCount} / {course.totalLessons} lessons completed
        <div className={styles.miniProgress}>
          <div 
            className={styles.miniProgressFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonList;