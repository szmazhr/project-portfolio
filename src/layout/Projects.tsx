import ProjectCard from '../components/ProjectCard';
import config from '../config';
import Styles from './Projects.module.css';

function Projects() {
  return (
    <section className={Styles.projects}>
      <h2>My Work</h2>
      <div className={Styles.cards}>
        {config.projects.map((project) => (
          <ProjectCard
            key={project.repo}
            nickname={config.nickname}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
export default Projects;
