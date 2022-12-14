import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import GitHub from '@mui/icons-material/GitHub';
import ExternalLink from '../components/ExternalLink';
import Styles from './Header.module.css';
import config from '../config';

function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.content}>
        <div className={Styles.imageContainer}>
          <img src={config.photos[0]} alt="" />
          <h1>{config.name}</h1>
        </div>
        <div className={Styles.bio}>
          <h2>About me</h2>
          {config.about.split('\n').map((para, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={i}>{para}</p>
          ))}
          <div className={Styles['header-icons']}>
            {!!config.exLinks.github && (
              <ExternalLink
                href={config.exLinks.github}
                text="Github"
                icon={<GitHub />}
              />
            )}
            {!!config.exLinks.twitter && (
              <ExternalLink
                href={config.exLinks.twitter}
                text="Twitter"
                icon={<Twitter />}
              />
            )}
            {!!config.exLinks.instagram && (
              <ExternalLink
                href={config.exLinks.instagram}
                text="Instagram"
                icon={<Instagram />}
              />
            )}
          </div>
        </div>
      </div>
      <div className="clear" />
    </header>
  );
}
export default Header;
