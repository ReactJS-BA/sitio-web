import styled from "styled-components";

import Box from "@material-ui/core/Box";

import { Timeline } from "react-twitter-widgets";

import gradientBackground from "src/assets/images/backgrounds/gradient-background.svg";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  font-size: x-large;
  background: url(${gradientBackground}) bottom 0 center no-repeat;
  background-size: cover;
  height: 600px;
  width: auto;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

const TweetSectionContainer = styled(Box)`
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    margin: 0 60px;
  }
`;

const TweetSectionHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: 960px) {
    margin-bottom: 20px;
  }
`;

const TweetTitle = styled.p`
  color: #002ff4;
  text-transform: uppercase;
  font-size: 4rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 80px;
  margin: 0;

  @media (max-width: 960px) {
    font-size: 2rem;
  }
`;

// TODO: style tweet card, get tweet data from twitter API ?
const LastTweets: React.FC = () => {
  return (
    <MainContainer>
      <TweetSectionHeader>
        <TweetTitle>Ultimos Tweets</TweetTitle>
      </TweetSectionHeader>
      <TweetSectionContainer>
        <Timeline
          dataSource={{ sourceType: "profile", screenName: "React_BA" }}
          options={{
            chrome: "noheader, nofooter",
            width: "400",
            height: "420",
          }}
        />
      </TweetSectionContainer>
    </MainContainer>
  );
};

export default LastTweets;
