import React from 'react'
import styles from './ContactStyles.module.css'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'



function Contact() {
  return (
  <>
  <section id="contact" className={styles.container}>
        <h1 className='sectionTitle'>CONTACT</h1>
        <div className={styles.parentContact}>
        <div className={styles.contactLinks}>
        <a href='https://github.com' target='_blank' className={styles.projectCard}>
            <img src={githubLight} />
            <span>Github</span>
        </a>

        <a href='https://linkedin.com' target='_blank' className={styles.projectCard}>
            <img src={linkedInLight} />
            <span>LinkedIn</span>
        </a>

        <a href='https://linkedin.com' target='_blank' className={styles.projectCard}>
            <img src={linkedInLight} />
            <span>LinkedIn</span>
        </a>
        </div>
        </div>
        
    </section>
</>

  )
}



export default Contact
