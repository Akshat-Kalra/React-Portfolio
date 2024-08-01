/* eslint-disable react/prop-types */
// import React from 'react'
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
import mysql from '../../assets/mysql.svg'
import figmaIcon from '../../assets/figma.svg'
import tailwindIcon from '../../assets/tailwind.svg'
import node from '../../assets/node.svg'
import expressJS from '../../assets/expressJS.svg'

const frontendSkills = [
    { name: 'ReactJS', svg: reactIcon},
    { name: 'HTML', svg: HTMLIcon},
    { name: 'CSS', svg: cssIcon},
    { name: 'Javascript', svg: jsIcon}, 
    {name : 'Figma', svg: figmaIcon},
    {name : 'TailwindCSS', svg: tailwindIcon}
  ];
  
  const backendSkills = [
    { name: 'Node.js', svg: node},
    { name: 'Express.js', svg: expressJS},
    { name: 'MySQL', svg: mysql}
  ];
  
  const languageSkills = [
    { name: 'C++', svg: cppIcon},
    { name: 'Java', svg: javaIcon},
    { name: 'Javascript', svg: jsIcon},
    { name: 'Python', svg: pythonIcon},
    { name: 'Git', svg: gitIcon},
    { name: 'GitHub', svg: gitHubIcon},
    
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
      <div className={styles.parentSkills}>
        <h3 className={styles.skillTitle}>{title}</h3>
        <div className={styles.skillContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIconContainer}>
                <img src={skill.svg} alt={`${skill.name} icon`} className={styles.skillIcon} />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Skills
