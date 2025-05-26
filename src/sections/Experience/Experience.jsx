import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../common/ThemeContext";
import styles from "./ExperienceStyles.module.css";
import companyLogo from "../../assets/subbots.png"; // Adjust the path as needed
import ubclogo from "../../assets/ubc-logo.png";

function Experience() {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.container} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.cardsContainer}>
        <ExperienceCard
          title="Software Developer Co-op"
          company="UBC Faculty of Forestry"
          logo={ubclogo} // Passing the logo prop
          logoClass={styles.logoUBC}
          location="Vancouver, BC"
          timeframe="May 2025 – Present"
          details={[
          ]}
        />
        <ExperienceCard
          title="Software and Firmware Developer"
          company="UBC Subbots [Engineering Design Team]"
          logo={companyLogo} // Passing the logo prop
          location="Vancouver, BC"
          timeframe="Sep 2024 – Present"
          details={[
            "Co-leading the Software team developing an Autonomous Underwater Vehicle for the RoboSub competition in California.",
            "Spearheading the development of a real-time perception system integrating a custom computer vision model.",
          ]}
        />
        <ExperienceCard
          title="Undergraduate Teaching Assistant"
          company="University of British Columbia, Vancouver"
          location="Vancouver, BC"
          timeframe="Sep 2023 – Present"
          details={[
            "Current Teaching Assistant for CPSC 121 - Models of Computation [Discrete Mathematics], focusing on proofs, combinations logic circuits, functions, sequential circuits and finite state machines",
            "2x TA for PHIL 220 - Symbolic Logic, covering first-order logic and proofs.",
            "CPSC 121: Leading a weekly discussion section and co-leading 2 lab sections, facilitating students’ understanding of discrete mathematics and computational theory.",
            "PHIL 220: Led 2 hours of office hours weekly to support students. Graded 200+ exams and assignments with detailed feedback on logical proofs and reasoning."
          ]}
        />
      </div>
    </section>
  );
}
function ExperienceCard({ title, company, logo, logoClass, location, timeframe, details }) {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.card} ${
        theme === "light" ? styles.lightCard : styles.darkCard
      }`}
    >
      <div className={styles.cardHeader}>
        {logo && (
          <img
            src={logo}
            alt={`${company} logo`}
            className={logoClass ? logoClass : styles.logo}
          />
        )}
        <h3>{title}</h3>
        <p className={styles.company}>
          {company} {location && `| ${location}`}
        </p>
        <p className={styles.timeframe}>{timeframe}</p>
      </div>
      <ul className={styles.detailList}>
        {details.map((detail, index) => (
          <li key={index} className={styles.detailItem}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

ExperienceCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  logo: PropTypes.string,
  logoClass: PropTypes.string,
  location: PropTypes.string,
  timeframe: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Experience;
