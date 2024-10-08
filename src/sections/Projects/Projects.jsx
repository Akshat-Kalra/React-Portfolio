/* eslint-disable react/prop-types */
// import React from 'react'
import styles from "./ProjectsStyles.module.css";
import titanic from "../../assets/titanic.png";
import cat from "../../assets/cat.png";
import website from "../../assets/website.png";
import fitLift from "../../assets/fitlift.png";
import sorted from "../../assets/algo-viz.png";
import unsorted from "../../assets/algo-viz-unsorted.png";

function Projects() {
  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">PROJECTS</h1>
      <div className={styles.projectsContainer}>
        <Project
          img={fitLift}
          name="FitTrackr"
          description="Java-based fitness tracking app. Logs workouts, visualizes progress, and persists data."
          link="https://github.com/Akshat-Kalra/FitTrackr"
          skills={<strong>Java | Swing (GUI) | JUnit5</strong>}
        />
        <Project
          img={website}
          name="This Website :)"
          description="ReactJS-powered portfolio website showcasing projects and skills. Utilizing react features such as hooks, state management, reusable components. "
          link="https://akshatkalra.com"
          skills={<strong>ReactJS | HTML | CSS </strong>}
        />
        <Project
          img={sorted}
          name="Sorting Algorithm Visualizer"
          description="Sorting Algorithm Visualizer | Customizable array length and speed | Supports Insertion, Selection, and Bubble Sort"
          link="https://react-sorting-visualizer-eight.vercel.app/"
          skills={<strong>ReactJS | HTML | CSS</strong>}
        />
        <Project
          img={cat}
          name="Only Cat Facts"
          description="ReactJS-powered cat facts app. Fetches data from APIs, displays cute cat content."
          link="https://onlycatfacts.netlify.app/"
          skills={<strong>ReactJS | HTML | CSS | API Integration</strong>}
        />
        <Project
          img={titanic}
          name="Inferential Analysis"
          description="Statistical Inference on whether Ticket Classes affected Survival Rates on the RMS Titanic?"
          link="https://github.com/Akshat-Kalra/STAT_201_PROJECT"
          skills={
            <strong>R | Jupyter Notebook | EDA | Inferential Statistics</strong>
          }
        />
      </div>
    </section>
  );
}

function Project(props) {
  const img = props.img;
  const name = props.name;
  const description = props.description;
  const link = props.link;
  const skills = props.skills;
  return (
    <div className={styles.projectCardParent}>
      <a href={link} target="_blank" className={styles.projectCard}>
        <img src={img} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{skills}</p>
      </a>
    </div>
  );
}

export default Projects;
