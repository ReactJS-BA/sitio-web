import { IconBaseProps, IconType } from "react-icons";

// Social Icons
import { TiSocialTwitter as twitter } from "react-icons/ti";
import { MdEmail as email } from "react-icons/md";
import {
  SiSlack as slack,
  SiMeetup as meetup,
  SiYoutube as youtube,
} from "react-icons/si";

export type SocialIconTypes =
  | "twitter"
  | "slack"
  | "meetup"
  | "youtube"
  | "email";

export type IllustrationTypes = SocialIconTypes;

export interface IllustrationProps extends IconBaseProps {
  type: IllustrationTypes;
}

interface IllustrationImg {
  src: IconType;
}

const illustrations: { [key in IllustrationTypes]: IllustrationImg } = {
  // Social Icons
  twitter: { src: twitter },
  slack: { src: slack },
  meetup: { src: meetup },
  youtube: { src: youtube },
  email: { src: email },
};

/**
 * Show a pre-defined icon.
 */
export const IconIllustration: React.FC<IllustrationProps> = ({
  type,
  ...props
}) => {
  const { src: IconElement } = illustrations[type];

  return <IconElement {...props} />;
};

export default IconIllustration;
