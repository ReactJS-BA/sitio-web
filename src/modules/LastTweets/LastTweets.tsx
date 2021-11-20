import styled from "styled-components";
import Box from "@material-ui/core/Box";

import gradientBackground from "src/assets/images/backgrounds/gradient-background.svg";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  font-size: x-large;
  position: relative;
  background: url(${gradientBackground}) bottom 0 center no-repeat;
  background-size: cover;
  height: 485px;
  width: auto;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

const LastTweets: React.FC = () => {
  return <MainContainer></MainContainer>;
};

export default LastTweets;
