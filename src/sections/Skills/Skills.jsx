import styles from "./SkillsStyles.module.css";

const frontendSkills = [
  { name: "ReactJS", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "HTML", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { name: "JavaScript", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "Next.js", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "Figma", svg: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
  { name: "TailwindCSS", svg: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
];

const backendSkills = [
  { name: "Node.js", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", svg: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
  { name: "Flask", svg: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
  { name: "MySQL", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "SQLite", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg" },
];

const programmingLanguages = [
  { name: "C", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
  { name: "C++", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "JavaScript", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Python", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "R", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg" },
  // Additional languages like Racket or Assembly can be added when icons are available.
];

const machineLearningSkills = [
  { name: "Scikit-learn", svg: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "NumPy", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
  { name: "Pandas", svg: "https://cdn.worldvectorlogo.com/logos/pandas.svg" },
  { name: "OpenCV", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg" },
];

const cloudAndTools = [
  { name: "AWS", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Linux", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
  { name: "Docker", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "Git", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "GitHub", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
  { name: "LaTeX", svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/latex/latex-original.svg" },
  { name: "Postman", svg: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "ROS2", svg: "https://upload.wikimedia.org/wikipedia/commons/2/20/ROS_logo.svg" },
];

function Skills() {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.technologyContainer}>
        <SkillList title="Frontend" skills={frontendSkills} />
        <SkillList title="Backend" skills={backendSkills} />
        <SkillList title="Programming Languages" skills={programmingLanguages} />
        <SkillList title="Machine Learning" skills={machineLearningSkills} />
        <SkillList title="Cloud & Tools" skills={cloudAndTools} />
      </div>
    </div>
  );
}

function SkillList({ title, skills }) {
  return (
    <div className={styles.parentSkills}>
      <h3 className={styles.skillTitle}>{title}</h3>
      <div className={styles.skillContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillIconContainer}>
              <img
                src={skill.svg}
                alt={`${skill.name} icon`}
                className={styles.skillIcon}
              />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
