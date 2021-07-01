import React from 'react';
import './Social.css';
import {TiSocialTwitter} from "react-icons/ti"
import {SiSlack ,SiMeetup,SiYoutube} from "react-icons/si"
import {MdEmail} from "react-icons/md"

 function Social() {
  return (
 
      <div className="social">
        <ul>
          <li> <div className="socialIcons" > <TiSocialTwitter size={40} /></div>Twitter</li>
          <li> <div className="socialIcons" ><SiSlack size={40}/></div> Slack</li>
          <li> <div className="socialIcons" > <SiMeetup size={40}/> </div>Meetup</li>
          <li> <div className="socialIcons" ><SiYoutube  size={40}/></div>Youtube</li>
          <li> <div className="socialIcons" ><MdEmail  size={40}/> </div>Email</li>
        </ul>
      </div>
   
   
  );
}

export default Social;
