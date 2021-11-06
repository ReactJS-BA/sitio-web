import styled from "styled-components";
import { Typography } from "@material-ui/core";

import Img from "src/components/common/Img";

import heroBackground from "src/assets/images/backgrounds/hero-background.jpeg";
import rectangleGroup from "src/assets/images/logos/reactBaLogo.svg";

// TODO: abstract media values

const HeroContainer = styled.div`
  width: 100%;
  height: auto;
  color: white;
  font-size: x-large;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${heroBackground});
  background-blend-mode: darken, normal;
`;

const HeroMainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 100px;

  & > :first-child {
    margin-right: 40px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    margin: 100px 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const ReactTitle = styled(Typography)`
  && {
    color: #64dedf;
    border-bottom: 2px solid #64dedf;
    width: max-content;
    height: 120px;
    font-size: 94px;
    font-family: "MuseoModerno";
    font-weight: 800;
    line-height: 149px;
    letter-spacing: 3px;

    @media (max-width: 960px) {
      font-size: 50px;
    }
  }
`;

const BuenosAiresTitle = styled(Typography)`
  && {
    color: #ffffff;
    font-size: 80px;
    font-family: "MuseoModerno";
    font-weight: 700;
    line-height: 112px;

    @media (max-width: 960px) {
      font-size: 50px;
    }
  }
`;

const ReactBaLogo = styled(Img)`
  @media (max-width: 960px) {
    margin: 0 !important;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroMainContent>
        <ReactBaLogo src={rectangleGroup} alt="React BA logo" />
        <TitleContainer>
          <ReactTitle>React</ReactTitle>
          <BuenosAiresTitle>Buenos Aires</BuenosAiresTitle>
        </TitleContainer>
      </HeroMainContent>
    </HeroContainer>
  );
};

export default Hero;
