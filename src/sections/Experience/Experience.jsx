import React from "react";
import styles from "./ExperienceStyles.module.css";

function Experience() {
  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.cardsContainer}>
        <ExperienceCard 
          title="Software and Firmware Co-Lead"
          company="UBC Subbots [Engineering Design Team]"
          location="Vancouver, BC"
          timeframe="Sep 2024 – Present"
          details={[
            "Co-leading the Software team developing an Autonomous Underwater Vehicle for the RoboSub competition in California.",
            "Spearheading the development of a real-time perception system integrating a custom computer vision model.",
            "Deployed a containerized robotics development environment (Ubuntu 20.04, ROS2, Gazebo) reducing onboarding time."
          ]}
        />
        <ExperienceCard 
          title="Undergraduate Teaching Assistant [Computer Science and Philosophy]"
          company="University of British Columbia, Vancouver"
          location="Vancouver, BC"
          timeframe="Sep 2023 – Present"
          details={[
            "TA for CPSC 121 – Models of Computation: Leading weekly discussion and lab sections.",
            "TA for PHIL 220 – Symbolic Logic: Conducting office hours and grading 200+ exams/assignments."
          ]}
        />
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, location, timeframe, details }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
        <p className={styles.company}>
          {company} {location && `| ${location}`}
        </p>
        <p className={styles.timeframe}>{timeframe}</p>
      </div>
      <ul className={styles.detailList}>
        {details.map((detail, index) => (
          <li key={index} className={styles.detailItem}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
