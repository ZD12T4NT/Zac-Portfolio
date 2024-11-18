import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsterGlasses from '../../assets/hipsster.png';
import fitLift from '../../assets/fitLift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link='https://github.com/ZD12T4NT'
          h3='Viberr'
          p='Streaming App'
        />
        <ProjectCard
          src={freshBurger}
          link='https://github.com/ZD12T4NT'
          h3='Fresh Burger'
          p='Resturant'
        />
        <ProjectCard
          src={hipsterGlasses}
          link='https://github.com/ZD12T4NT'
          h3='Hipster Glasses'
          p='Glasses Store'
        />
        <ProjectCard
          src={fitLift}
          link='https://github.com/ZD12T4NT'
          h3='Fit Lift'
          p='Fitness App'
        />
      </div>
    </section>
  );
}

export default Projects;
