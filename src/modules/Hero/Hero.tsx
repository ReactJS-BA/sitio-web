import styled from "styled-components";

import heroBackground from "src/assets/images/backgrounds/hero-background.jpeg";

const HeroContainer = styled.div`
  width: 100%;
  height: 90vh;
  color: white;
  font-size: x-large;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${heroBackground});
  background-blend-mode: darken, normal;
`;

const Hero: React.FC = () => {
  return <HeroContainer>Hero v2</HeroContainer>;
};

export default Hero;
