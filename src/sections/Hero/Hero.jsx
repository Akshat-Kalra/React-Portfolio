import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import CV from  '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

  return (
    <section id='hero' className={styles.container}> 
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture"/>
        <img src={themeIcon} className={styles.colorMode} onClick={toggleTheme}/>
      </div>

      <div className={styles.info}>
        <h1>Akshat <br /> Kalra</h1>
        <h2>Developer</h2>
        <span>
            <a href="https://twitter.com" target="_blank">
                <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href="https://github.com/Akshat-Kalra" target="_blank">
                <img src={githubIcon} alt="Twitter Icon" />
            </a>
            <a href="https://www.linkedin.com/in/akshat-kalra-783819156/" target="_blank">
                <img src={linkedInIcon} alt="Twitter Icon" />
            </a>
        </span>
        <p>
            Blah Blah Blah
        </p>
        <a href={CV} download>
            <button className='hover'>Resume</button>
        </a>

      </div>
    </section>
  )
}

export default Hero
