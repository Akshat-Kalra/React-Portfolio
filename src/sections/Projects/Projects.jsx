import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'

function Projects() {
  return (
    <section className={styles.container}>
        <h1 className='sectionTitle'>PROJECTS</h1>
        <div className={styles.projectsContainer}>
        <Project img={viberr} name="FitTrackr" description="blah blah blah blah blah " link="https://github.com/Akshat-Kalra/FitTrackr"/>
        <Project img={viberr} name="App 1" description="blah blah blah blah blah "/>
        <Project img={viberr} name="App 1" description="blah blah blah blah blah "/>
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
        <a href={link} target='_blank' className={styles.projectCard}>
            <img src={img} />
            <h3>{name}</h3>
            <p>{description}</p>
        </a>
    )
}

export default Projects
