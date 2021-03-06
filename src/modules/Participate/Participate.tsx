import React from "react";
import styled from "styled-components";

import Box from "@material-ui/core/Box";
import { Divider as MuiDivider } from "@material-ui/core";

import { ButtonBase as Button } from "src/components/buttons/ButtonBase";
import { ReactComponent as ArrowRight } from "src/assets/images/icons/arrowRight.svg";

import rectangleGroup from "src/assets/images/shapes/rectangleGroup.svg";
import rectangleGroupBottomLeft from "src/assets/images/shapes/rectangleGroupBottomLeft.svg";
import rectangleGroupRight from "src/assets/images/shapes/rectangleGroupRight.svg";
import rectangleGroupTopRight from "src/assets/images/shapes/rectangleGroupTopRight.svg";

const MainContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background: #021037;
  font-size: x-large;
  height: 450px;
  padding: 120px 40px 0 40px;
  width: auto;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 50px;
  }
`;

const ParticipateContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 100px;

  @media (max-width: 960px) {
    padding: 0;
    margin-bottom: 70px;
  }
`;

const StatsContent = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 85px 80px 0 80px;
  width: auto;

  background: url(${rectangleGroup}) top 60px left 10px no-repeat,
    url(${rectangleGroupTopRight}) top 60px right 30px no-repeat,
    url(${rectangleGroupRight}) bottom 140px right 120px no-repeat,
    url(${rectangleGroupBottomLeft}) bottom 140px left 10px no-repeat;

  @media (max-width: 960px) {
    align-items: center;
    margin-bottom: 50px;
    padding: 45px 0 0;

    background: url(${rectangleGroup}) top 32px left 1px no-repeat,
      url(${rectangleGroupTopRight}) top 30px right -16px no-repeat,
      url(${rectangleGroupRight}) bottom 60px right 5px no-repeat,
      url(${rectangleGroupBottomLeft}) bottom 20px left 10px no-repeat;
  }
`;

const StyledButton = styled(Button)`
  &.MuiButton-root {
    font-size: 1.125rem;
    font-family: "MuseoModerno";
    font-weight: 500;
    line-height: 30px;
    text-transform: capitalize;
    color: #b0f7e5;
    background: transparent;
    padding: 0px;

    &:hover,
    &:focus,
    &.Mui-focusVisible {
      background: transparent;
    }
  }
`;

const ParticipateTitle = styled.p`
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

const ParticipateDescription = styled.p`
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

const ActionContainter = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > :first-child {
    margin-bottom: 50px;
  }
`;

const StatsTitle = styled.p`
  color: #ffffff;
  font-size: 2.5rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 65px;
  margin: 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

const StatsSubtitle = styled.p`
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

const Divider = styled(MuiDivider)`
  && {
    border: 1px solid #002ff4;
    width: 72px;
    margin-bottom: 40px;
  }
`;

// TODO: replace stats data with accurate Meetup data
const Participate: React.FC = () => {
  return (
    <MainContainer>
      <ParticipateContent>
        <Divider />

        <ParticipateTitle>Participar</ParticipateTitle>

        <ParticipateDescription>
          Queremos que m??s personas formen parte de esta comunidad, te gustar??a
          participar?
        </ParticipateDescription>

        <ActionContainter>
          <StyledButton
            endIcon={<ArrowRight />}
            href={`https://docs.google.com/forms/d/e/1FAIpQLSdKDkWgnUJmxA2yg4C5DH_CTDIUzbY8AjKDUbVUQXeH1BLT3A/viewform`}
            target="_blank"
          >
            Dar una charla
          </StyledButton>

          <StyledButton
            endIcon={<ArrowRight />}
            href={`https://docs.google.com/forms/d/e/1FAIpQLSflqFjUY_nUUYv7S-vr4xLd9QDVb5mhg64S5aWsy2qIJJS9zQ/viewform`}
            target="_blank"
          >
            Ser sponsor
          </StyledButton>
        </ActionContainter>
      </ParticipateContent>

      <StatsContent>
        <StatsTitle>~5642 miembros</StatsTitle>
        <StatsSubtitle>En la comunidad</StatsSubtitle>

        <StatsTitle>60 charlas</StatsTitle>
        <StatsSubtitle>Realizadas</StatsSubtitle>
      </StatsContent>
    </MainContainer>
  );
};

export default Participate;
