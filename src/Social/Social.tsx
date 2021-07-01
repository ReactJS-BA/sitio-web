import React from 'react';
import './Social.css';
import {TiSocialTwitter} from "react-icons/ti"
import {SiSlack ,SiMeetup,SiYoutube} from "react-icons/si"
import {MdEmail} from "react-icons/md"

 function Social() {
  return (
 
      <div className="social" aria-label="redes sociales" role="img">
        <ul>
          <li> <div className="socialIcons" aria-label="Twitter" role="img"> <TiSocialTwitter size={40} /> </div>Twitter</li>
          <li> <div className="socialIcons" aria-label="Slack" role="img"> <SiSlack size={40}/> </div> Slack</li>
          <li> <div className="socialIcons" aria-label="Meetup" role="img"> <SiMeetup size={40}/> </div>Meetup</li>
          <li> <div className="socialIcons" aria-label="Youtube" role="img"> <SiYoutube  size={40}/> </div>Youtube</li>
          <li> <div className="socialIcons" aria-label="Email" role="img"> <MdEmail  size={40}/> </div>Email</li>
        </ul>
      </div>
   
   
  );
 }

export default Social;
