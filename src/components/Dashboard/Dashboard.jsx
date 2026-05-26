import React, { useState, useEffect } from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import { coursesData } from '../../Data/coursesData';
import CourseCard from './CourseCard';
import LessonList from './LessonList';
import CertificateMock from './CertificateMock';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const savedCourses = localStorage.getItem('userCourses');
    if (savedCourses) {
      const parsed = JSON.parse(savedCourses);
      setCourses(parsed);
      setSelectedCourse(parsed[0]);
    } else {
      setCourses(coursesData);
      setSelectedCourse(coursesData[0]);
    }
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      localStorage.setItem('userCourses', JSON.stringify(courses));
    }
  }, [courses]);

  const updateLessonProgress = (courseId, updatedLessons) => {
    setCourses(prevCourses => {
      const updatedCourses = prevCourses.map(course => {
        if (course.id === courseId) {
          const completedCount = updatedLessons.filter(l => l.completed).length;
          const newProgress = Math.round((completedCount / course.totalLessons) * 100);
          
          return {
            ...course,
            lessons: updatedLessons,
            completedLessons: completedCount,
            progress: newProgress
          };
        }
        return course;
      });
      
      if (selectedCourse?.id === courseId) {
        const updatedCourse = updatedCourses.find(c => c.id === courseId);
        setSelectedCourse(updatedCourse);
      }
      
      return updatedCourses;
    });
  };

  if (!courses.length || !selectedCourse) {
    return <div className={styles.loading}>Loading your courses...</div>;
  }

  const enrolledCourses = courses.filter(c => c.enrolled);

  return (
    <div className={styles.dashboard}>
      <div className={styles.welcomeSection}>
        <h1>Welcome back, {user?.name}! 👋</h1>
        <p>Continue your learning journey</p>
      </div>

      <div className={styles.dashboardContent}>
        <div className={styles.coursesSection}>
          <h2>My Enrolled Courses ({enrolledCourses.length})</h2>
          <div className={styles.coursesGrid}>
            {enrolledCourses.map(course => (
              <CourseCard 
                key={course.id}
                course={course}
                onSelect={setSelectedCourse}
                isSelected={selectedCourse.id === course.id}
              />
            ))}
          </div>
        </div>

        <div className={styles.detailsSection}>
          <LessonList 
            course={selectedCourse} 
            onUpdateProgress={updateLessonProgress}
          />
          <CertificateMock course={selectedCourse} userName={user?.name} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;