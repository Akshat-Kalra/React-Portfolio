/* eslint-disable react/prop-types */
// import React from 'react'
import styles from "./ProjectsStyles.module.css";
import titanic from "../../assets/titanic.png";
import cat from "../../assets/cat.png";
import website from "../../assets/website.png";
import fitLift from "../../assets/fitlift.png";
import sorted from "../../assets/algo-viz.png";
import unsorted from "../../assets/algo-viz-unsorted.png";

// New image imports for technical projects from your resume
import tranquilo from "../../assets/tranquilo.png";
import airbnb from "../../assets/airbnb.png";
import ecoCircle from "../../assets/ecocircle.png";

function Projects() {
  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">PROJECTS</h1>
      <div className={styles.projectsContainer}>
      <Project
        img={tranquilo}
        name="Tranquilo"
        description="AI-powered mental health journal that provides therapist-like responses by leveraging Retreival Augmented Generation (RAG), BERTopic modeling."
        link="https://github.com/SaiUbc/Tranquilo"
        skills={<strong>Next.js | SQLite | Flask | Ngrok | RESTful APIs | BERTopic | RAG</strong>}
      />
      <Project
        img={airbnb}
        name="Predicting Revenue Impacts of Vancouver's Airbnb Policy"
        description="Won 1st Place at the UBC WiDS Case Competition. Developed an end-to-end ML pipeline using scikit-learn, reducing MSE by 27.4% over the baseline."
        link="https://medium.com/@akshatkalra2005/adapting-to-change-predicting-revenue-impacts-of-vancouvers-airbnb-policies-a35b034716f0"
        skills={<strong>Scikit-learn | Pandas | NumPy</strong>}
      />
      <Project
        img={ecoCircle}
        name="Eco-Circle"
        description="Secured 3rd place at the UBC CIC x AWS Gen AI and Sustainability Hackathon. Built an AI-powered marketplace for sustainable buying and upcycling, leveraging the Llama 3.1 70B Instruct model and an AWS-based architecture integrating Lambda, DynamoDB, API Gateway, Amazon Bedrock, and S3."
        link="https://cic.ubc.ca/2024/10/24/a-look-back-at-cics-generative-ai-and-sustainability-hackathon/"
        skills={<strong>AWS | Next.js | Python</strong>}
      />
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
          description="ReactJS-powered portfolio website showcasing projects and skills. Utilizing react features such as hooks, state management, reusable components."
          link="https://akshatkalra.com"
          skills={<strong>ReactJS | HTML | CSS</strong>}
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
          skills={<strong>R | Jupyter Notebook | EDA | Inferential Statistics</strong>}
        />
        {/* Additional Technical Projects from Resume */}
      </div>
    </section>
  );
}

function Project(props) {
  const { img, name, description, link, skills } = props;
  return (
    <div className={styles.projectCardParent}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{skills}</p>
      </a>
    </div>
  );
}

export default Projects;
