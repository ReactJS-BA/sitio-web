import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";

import { ButtonBase as Button } from "src/components/buttons/ButtonBase";
import IconIllustration, {
  IllustrationTypes,
} from "src/components/images/IconIllustration";

interface SocialLinkIconProps {
  href: string;
  type: IllustrationTypes;
  label: string;
  role?: string;
  size?: number;
}

const StyledSocialLink = styled(Button)`
  && {
    background-color: #002ff4;
    border-radius: 100%;
    color: gainsboro;
    min-width: 70px;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    opacity: 0.5;
  }

  &&.MuiButton-containedPrimary:hover {
    background-color: #002ff4;
    opacity: 1;
  }
`;

const SocialLinkLabel = styled(Typography)`
  && {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Ubuntu Mono", monospace;
    line-height: 100%;
  }
`;

const SocialLinkContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SocialLinkIcon: React.FC<SocialLinkIconProps> = ({
  href,
  label,
  type,
  role = "img",
  size = 40,
}) => {
  return (
    <SocialLinkContainer>
      <StyledSocialLink
        href={href}
        aria-label={label}
        target="_blank"
        role={role}
      >
        <IconIllustration type={type} size={size} />
      </StyledSocialLink>
      <SocialLinkLabel>{label}</SocialLinkLabel>
    </SocialLinkContainer>
  );
};

export default SocialLinkIcon;
