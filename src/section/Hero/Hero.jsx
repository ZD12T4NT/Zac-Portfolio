import styles from '../Hero/HeroStyles.module.css';
import heroImg from '../../assets/eye.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext.jsx';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile Picture' />
        <img
          onClick={toggleTheme}
          className={styles.colorMode}
          src={themeIcon}
          alt='Color Mode Icon'
        />
      </div>
      <div className={styles.info}>
        <h1>
          Zachary <br /> Distant
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href='/' target='_blank'>
            <img src={twitterIcon} alt='Twitter Icon' />
          </a>
          <a href='/' target='_blank'>
            <img src={githubIcon} alt='Twitter Icon' />
          </a>
          <a href='/' target='_blank'>
            <img src={linkedinIcon} alt='Twitter Icon' />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing React web apps for commercial business
        </p>
        <a href={CV} download>
          <button className='hover'>Résume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
