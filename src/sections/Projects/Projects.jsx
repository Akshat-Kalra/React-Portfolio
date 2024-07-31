// import React from 'react'
import styles from './ProjectsStyles.module.css'
import titanic from '../../assets/titanic.png'
import cat from '../../assets/cat.png'
import dumbell from '../../assets/dumbell.png'
import reactIcon from '../../assets/reactIcon.svg'
import HTMLIcon from '../../assets/HTMLIcon.svg'
import cssIcon from '../../assets/cssIcon.svg'
import jsIcon from '../../assets/jsIcon.svg'
import javaIcon from '../../assets/javaIcon.svg'
import pythonIcon from '../../assets/pythonIcon.svg'
import cppIcon from '../../assets/cppIcon.svg'
import gitIcon from '../../assets/git-icon.svg'
import gitHubIcon from '../../assets/github-light.svg'

function Projects() {
  return (
    <section className={styles.container}>
        <h1 className='sectionTitle'>PROJECTS</h1>
        <div className={styles.projectsContainer}>
        <Project img={dumbell} name="FitTrackr" description='Java-based fitness tracking app. Logs workouts, visualizes progress, and persists data.' link="https://github.com/Akshat-Kalra/FitTrackr" skills={<strong>Java | Swing (GUI) | JUnit5</strong>}/>
        <Project img={cat} name="Only Cat Facts" description="ReactJS-powered cat facts app. Fetches data from APIs, displays cute cat content." link="https://onlycatfacts.netlify.app/" skills={<strong>ReactJS | HTML | CSS | API Integration</strong>}/>
        <Project img={titanic} name="Inferential Analysis" description="Statistical Inference on whether Ticket Classes affected Survival Rates on the RMS Titanic?" link="https://github.com/Akshat-Kalra/STAT_201_PROJECT" skills={<strong>R | Jupyter Notebook | EDA | Inferential Statistics</strong>}/>
        </div>
    </section>
  )
}

function Project(props) {
    const img = props.img
    const name = props.name
    const description = props.description
    const link = props.link
    return (
        <div className={styles.projectCardParent}>
            <a href={link} target='_blank' className={styles.projectCard}>
            <img src={img} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{props.skills}</p>
        </a>
        </div>
        
    )
}

export default Projects
