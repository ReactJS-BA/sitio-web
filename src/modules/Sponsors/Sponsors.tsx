import styled from "styled-components";
import Box from "@material-ui/core/Box";

import { ButtonBase as Button } from "src/components/buttons/ButtonBase";

const MainContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  font-size: x-large;
  height: 500px;
  width: auto;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

const LayoutLeftSide = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 150px;
  margin-right: 150px;

  @media (max-width: 960px) {
    padding-top: 50px;
    padding-bottom: 70px;
    align-items: center;
    margin: 0 150px;
  }
`;

const LayoutRightSide = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #021037;
  width: 100%;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const Title = styled.p`
  color: #002ff4;
  font-size: 3rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 76px;
  text-transform: uppercase;
  margin: 0 0 8px 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    margin-bottom: 20px;
    line-height: 50px;
  }
`;

const Subtitle = styled.p`
  color: #021037;
  font-size: 1.25rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 30px;
  margin: 0 0 45px 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    margin-bottom: 40px;
    line-height: 30px;
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  &.MuiButton-root {
    font-size: 1.125rem;
    font-family: "MuseoModerno";
    font-weight: 500;
    line-height: 30px;
    text-transform: capitalize;
    color: #002ff4;
    background-color: #b0f7e5;
    border-radius: 32px;
    width: 165px;
  }
`;

const Sponsors: React.FC = () => {
  return (
    <MainContainer>
      <LayoutLeftSide>
        <Title>Sponsorship</Title>
        <Subtitle>
          Si sos o representas a una empresa, tu propuesta de sponsorship aquí
        </Subtitle>
        <StyledButton
          endIcon={
            <span role="img" aria-label="Finger pointing right">
              👉
            </span>
          }
          href={`https://docs.google.com/forms/d/e/1FAIpQLSflqFjUY_nUUYv7S-vr4xLd9QDVb5mhg64S5aWsy2qIJJS9zQ/viewform`}
          target="_blank"
        >
          Escribinos
        </StyledButton>
      </LayoutLeftSide>
      <LayoutRightSide>LOGO?</LayoutRightSide>
    </MainContainer>
  );
};

export default Sponsors;
