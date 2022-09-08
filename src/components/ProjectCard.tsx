import GitHub from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExternalLink from './ExternalLink';
import { Project } from '../types';
import Styles from './ProjectCard.module.css';

export type ProjectProps = {
  project: Project;
  nickname: string;
};

function ProjectCard({ project, nickname }: ProjectProps) {
  return (
    <article className={Styles['project-card']}>
      <img src={project.img} alt="" />
      <div className={Styles.content}>
        <div className={Styles.body}>
          <div className={Styles.header}>
            <h3>{project.name}</h3>
            <div className={Styles.links}>
              <ExternalLink
                href={`https://github.com/${nickname}/${project.repo}`}
                text={`${project.name} repo`}
                icon={<GitHub />}
              />
              <ExternalLink
                href={project.live || `/${project.repo}`}
                text={`${project.name} live`}
                icon={<OpenInNewIcon />}
              />
            </div>
          </div>
          <p>{project.desc}</p>
        </div>
        <div className={Styles.footer}>
          {project.built.map((item) => (
            <span key={item} className={Styles['language-framework']}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;
