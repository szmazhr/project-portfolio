import GitHub from '@mui/icons-material/GitHub';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import BusinessIcon from '@mui/icons-material/Business';
import ExternalLink from '../components/ExternalLink';
import config from '../config';
import Styles from './Contacts.module.css';

function Contacts() {
  return (
    <section className={Styles['contacts-container']}>
      <div className={Styles['contacts-content']}>
        <div className={Styles['contact-info']}>
          <h2>Contact me</h2>
          <p>
            Please get in touch if you think our work could be mutually
            beneficial!
          </p>
          <ul>
            <li className={Styles['list-item']}>
              <BusinessIcon />
              <span>{config.address}</span>
            </li>
            <li>
              <a
                className={Styles['list-item']}
                href={`tel:+${config.phone[0]}${config.phone[1]}`}
              >
                <PhoneIcon /> {`+${config.phone[0]}-${config.phone[1]}`}
              </a>
            </li>
            <li>
              <a
                className={Styles['list-item']}
                href={`mailto:${config.mailAddr}`}
              >
                <MailIcon />
                {config.mailAddr}
              </a>
            </li>
          </ul>
          <div className={Styles.links}>
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
        <div className={Styles['footer-img']}>
          <img src={config.photos[1]} alt={config.name} />
        </div>
      </div>
    </section>
  );
}
export default Contacts;
