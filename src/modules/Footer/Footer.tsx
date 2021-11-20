import styled from "styled-components";
import Box from "@material-ui/core/Box";

import reactFooterLogo from "src/assets/images/logos/reactFooterLogo.svg";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  font-size: x-large;
  position: relative;
  height: 485px;
  width: auto;

  background: url(${reactFooterLogo}) bottom 2px center no-repeat;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

const FooterLabel = styled(Box)`
  font-size: 1rem;
  font-family: "MuseoModerno";
  font-weight: 400;
  line-height: 16px;
  color: #ffffff;

  @media (max-width: 960px) {
    margin: 0px;
    line-height: 50px;
  }
`;

const FooterBar = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 75px;
  background-color: #000722;
`;

const FooterTitleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.p`
  color: #64dedf;
  font-size: 2.5rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 46px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    margin: 0px;
    line-height: 50px;
  }
`;

const Footer: React.FC = () => {
  return (
    <MainContainer>
      <FooterTitleContainer>
        <FooterTitle>React</FooterTitle>
        <FooterTitle>Buenos Aires</FooterTitle>
      </FooterTitleContainer>

      <FooterBar>
        <FooterLabel>Diseñado y codeado con 💜 y ☕️.</FooterLabel>
      </FooterBar>
    </MainContainer>
  );
};

export default Footer;
