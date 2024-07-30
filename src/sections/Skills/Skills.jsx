import React from 'react'
import styles from './SkillsStyles.module.css'
import reactIcon from '../../assets/reactIcon.svg'
import HTMLIcon from '../../assets/HTMLIcon.svg'
import cssIcon from '../../assets/cssIcon.svg'
import jsIcon from '../../assets/jsIcon.svg'

const frontendSkills = [
    { name: 'ReactJS', svg: reactIcon},
    { name: 'HTML', svg: HTMLIcon},
    { name: 'CSS', svg: cssIcon},
    { name: 'CSS', svg: cssIcon}
  ];
  
  const backendSkills = [
    { name: 'Node.js', svg: reactIcon},
    { name: 'Express.js', svg: HTMLIcon}
  ];
  
  const languageSkills = [
    { name: 'C++', svg: reactIcon},
    { name: 'Java', svg: HTMLIcon},
    { name: 'Javascript', svg: jsIcon},
    { name: 'Python', svg: HTMLIcon},
    { name: 'Git', svg: HTMLIcon},
    { name: 'GitHub', svg: HTMLIcon}
  ];

function Skills() {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <SkillList title="Frontend" skills={frontendSkills} />
      <SkillList title="Backend" skills={frontendSkills} />
      <SkillList title="Languages & Additional" skills={languageSkills} />
    </div>
  )
} 

function SkillList({ title, skills }) {
    return (
    <>
    <h3>{title}</h3>
    <div className={styles.skillContainer}>
    {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <img src={skill.svg} alt={`${skill.name} icon`} className={styles.skillIcon} />
            <span>{skill.name}</span>
          </div>
        ))}
    </div>
    </>

    )
}

export default Skills
