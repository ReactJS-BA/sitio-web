import styled from "styled-components";

import SocialLinkIcon from "src/components/images/SocialLinkIcon";

const SocialContainer = styled.div`
  width: 100%;
  height: 148px;
  background: #000000;
  display: flex;
  justify-content: center;
  color: white;
  font-size: x-large;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  min-width: 800px;
  justify-content: space-between;
  padding: 0;

  @media (max-width: 960px) {
    display: flex;
    min-width: 400px;
  }
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  opacity: 0.5;
`;

const Social: React.FC = () => {
  return (
    <SocialContainer aria-label="redes sociales" role="group">
      <StyledUl>
        <StyledLi>
          <SocialLinkIcon
            href="https://twitter.com/React_BA"
            label="Twitter"
            type="twitter"
          />
        </StyledLi>
        <StyledLi>
          <SocialLinkIcon
            href="slack://channel?team=T0434657X&id=C045DPHNR"
            label="Slack"
            type="slack"
          />
        </StyledLi>
        <StyledLi>
          <SocialLinkIcon
            href="https://www.meetup.com/React-en-Buenos-Aire"
            label="Meetup"
            type="meetup"
          />
        </StyledLi>
        <StyledLi>
          <SocialLinkIcon
            href="https://www.youtube.com/channel/UC8lMWXElwhflZxWqsE6BuP"
            label="Youtube"
            type="youtube"
          />
        </StyledLi>
        <StyledLi>
          <SocialLinkIcon
            href="mailto:reactjs.ba@gmail.com"
            label="Email"
            type="email"
          />
        </StyledLi>
      </StyledUl>
    </SocialContainer>
  );
};

export default Social;
