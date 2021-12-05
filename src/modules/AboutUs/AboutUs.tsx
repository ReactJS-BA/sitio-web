import React from "react";
import styled from "styled-components";

import Box from "@material-ui/core/Box";

import YouTubeEmbed from "src/components/youtubeEmbed/YouTubeEmbed";

const MainContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background: #021037;
  font-size: x-large;
  height: 450px;
  padding: 100px 40px 40px;
  width: auto;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 50px;
  }
`;

const AboutUsContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 100px 0;

  @media (max-width: 960px) {
    padding: 0;
    margin: 0;
  }
`;

const MeetupsOnlineContent = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  width: auto;

  @media (max-width: 960px) {
    align-items: center;
    margin-bottom: 50px;
    padding: 20px 0 0;
  }
`;

const AboutUsTitle = styled.p`
  color: #b0f7e5;
  font-size: 1.25rem;
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  line-height: 18px;
  opacity: 0.3;
  margin: 0 0 50px 0;
  text-transform: uppercase;

  @media (max-width: 960px) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

const AboutUsDescription = styled.p`
  color: #ffffff;
  font-size: 1.25rem;
  font-family: "MuseoModerno";
  font-weight: 400;
  line-height: 28px;
  margin: 0 0 50px 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

const AboutUsKeywords = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > :first-child {
    margin-bottom: 50px;
  }
`;

const MeetupsOnlineTitle = styled.p`
  color: #64dedf;
  background: -webkit-linear-gradient(90deg, #002ff4 0%, #64dedf 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  font-size: 3.5rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 64px;
  margin: 0 0 32px 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

const MeetupsOnlineDescription = styled.p`
  color: #b0f7e5;
  font-size: 1.25rem;
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  line-height: 18px;
  opacity: 0.3;
  margin: 0 0 50px 0;
  text-transform: lowercase;

  @media (max-width: 960px) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

const MeetupsOnlineYouTube = styled(Box)`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const YOUTUBE_EMBED_ID = "I9spuzrX0ZM";

const AboutUs: React.FC = () => {
  return (
    <MainContainer>
      <AboutUsContent>
        <AboutUsTitle>Sobre Nosotros</AboutUsTitle>

        <AboutUsDescription>
          Un meetup para discutir, investigar, implementar y charlar sobre los
          últimos avances de React y cualquier derivado.
        </AboutUsDescription>

        <AboutUsKeywords>{/* TODO: Add buttons/keywords */}</AboutUsKeywords>
      </AboutUsContent>

      <MeetupsOnlineContent>
        <MeetupsOnlineTitle>Meetups Online</MeetupsOnlineTitle>

        <MeetupsOnlineYouTube>
          <YouTubeEmbed embedId={YOUTUBE_EMBED_ID} />
        </MeetupsOnlineYouTube>

        <MeetupsOnlineDescription>
          Debido a la situación de COVID, todos los meses nos encontramos en el
          canal de Youtube.
        </MeetupsOnlineDescription>
      </MeetupsOnlineContent>
    </MainContainer>
  );
};

export default AboutUs;
