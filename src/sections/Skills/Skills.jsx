import React from 'react'
import styles from './SkillsStyles.module.css'
import reactIcon from '../../assets/reactIcon.svg'
import HTMLIcon from '../../assets/HTMLIcon.svg'
import cssIcon from '../../assets/cssIcon.svg'
import jsIcon from '../../assets/jsIcon.svg'
import javaIcon from '../../assets/javaIcon.svg'
import pythonIcon from '../../assets/pythonIcon.svg'
import cppIcon from '../../assets/cppIcon.svg'
import gitIcon from '../../assets/git-icon.svg'
import gitHubIcon from '../../assets/github-light.svg'

const frontendSkills = [
    { name: 'ReactJS', svg: reactIcon},
    { name: 'HTML', svg: HTMLIcon},
    { name: 'CSS', svg: cssIcon},
    { name: 'C++', svg: cppIcon},
    { name: 'Java', svg: javaIcon},
    { name: 'Javascript', svg: jsIcon},
    { name: 'Python', svg: pythonIcon},
    { name: 'Git', svg: gitIcon},
    { name: 'GitHub', svg: gitHubIcon}
  ];
  
  const backendSkills = [
    { name: 'Node.js', svg: reactIcon},
    { name: 'Express.js', svg: HTMLIcon},
    { name: 'C++', svg: cppIcon},
    { name: 'Java', svg: javaIcon},
    { name: 'Javascript', svg: jsIcon},
    { name: 'Python', svg: pythonIcon},
    { name: 'Git', svg: gitIcon},
    { name: 'GitHub', svg: gitHubIcon}
  ];
  
  const languageSkills = [
    { name: 'C++', svg: cppIcon},
    { name: 'Java', svg: javaIcon},
    { name: 'Javascript', svg: jsIcon},
    { name: 'Python', svg: pythonIcon},
    { name: 'Git', svg: gitIcon},
    { name: 'GitHub', svg: gitHubIcon}
  ];

function Skills() {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.technologyContainer}>
        <SkillList title="Frontend" skills={frontendSkills} />
        <SkillList title="Backend" skills={backendSkills} />
        <SkillList title="Languages & Additional" skills={languageSkills} />
      </div>
      
    </div>
  )
} 

function SkillList({ title, skills }) {
    return (
    <>
    <div className={styles.parentSkills}>
    <h3>Hello</h3>
    <div className={styles.skillContainer}>
    {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <img src={skill.svg} alt={`${skill.name} icon`} className={styles.skillIcon} />
            <span>{skill.name}</span>
          </div>
        ))}
    </div>        
    </div>

    </>

    )
}

export default Skills
