import { TiSocialTwitter } from "react-icons/ti";
import { SiSlack, SiMeetup, SiYoutube } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import "./Social.css";

function Social() {
  return (
    <div className="social" aria-label="redes sociales" role="group">
      <ul>
        <li>
          <a
            href="https://twitter.com/React_BA"
            className="socialIcons"
            aria-label="Twitter"
            role="img"
            target="_blank"
          >
            <TiSocialTwitter size={40} />
          </a>
          Twitter
        </li>
        <li>
          <a
            href="slack://channel?team=T0434657X&id=C045DPHNR"
            className="socialIcons"
            aria-label="Slack"
            role="img"
            target="_blank"
          >
            <SiSlack size={40} />
          </a>
          Slack
        </li>
        <li>
          <a
            href="https://www.meetup.com/React-en-Buenos-Aires"
            className="socialIcons"
            aria-label="Meetup"
            role="img"
            target="_blank"
          >
            <SiMeetup size={40} />
          </a>
          Meetup
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UC8lMWXElwhflZxWqsE6BuPQ"
            className="socialIcons"
            aria-label="Youtube"
            role="img"
            target="_blank"
          >
            <SiYoutube size={40} />
          </a>
          Youtube
        </li>
        <li>
          <a
            href="mailto:reactjs.ba@gmail.com"
            className="socialIcons"
            aria-label="Email"
            role="img"
          >
            <MdEmail size={40} />
          </a>
          Email
        </li>
      </ul>
    </div>
  );
}

export default Social;
