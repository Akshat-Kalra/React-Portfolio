import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <span className={styles.skillTitle}>Frontend</span>
          <span className={styles.skillList}>ReactJS, HTML, CSS, JavaScript, Next.js, Figma, TailwindCSS</span>
        </div>
        <div className={styles.skillCategory}>
          <span className={styles.skillTitle}>Backend</span>
          <span className={styles.skillList}>Node.js, Express.js, Flask, MySQL, MongoDB, SQLite</span>
        </div>
        <div className={styles.skillCategory}>
          <span className={styles.skillTitle}>Programming Languages</span>
          <span className={styles.skillList}>C, C++, Java, JavaScript, TypeScript, Python, R</span>
        </div>
        <div className={styles.skillCategory}>
          <span className={styles.skillTitle}>Machine Learning</span>
          <span className={styles.skillList}>Scikit-learn, NumPy, Pandas, OpenCV</span>
        </div>
        <div className={styles.skillCategory}>
          <span className={styles.skillTitle}>Cloud & Tools</span>
          <span className={styles.skillList}>AWS, Linux, Docker, Git, GitHub, LaTeX, Postman, ROS2</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
