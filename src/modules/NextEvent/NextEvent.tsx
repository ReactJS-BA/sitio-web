import styled from "styled-components";
import Box from "@material-ui/core/Box";

import horizontalBar from "src/assets/images/shapes/horizontalBar.svg";

import CardEvent from "src/components/dataDisplay/CardEvent";

import { newEventData } from "src/mock/newEvent/newEventData";

const MainContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  background: #021037;
  border: 8px solid #64dedf;
  font-size: x-large;
  height: 500px;
  width: auto;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    border: 4px solid #64dedf;
    height: auto;
  }
`;

const LayoutLeftSide = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;

  background: url(${horizontalBar}) bottom 125px right 105px no-repeat,
    url(${horizontalBar}) top 125px right 105px no-repeat;

  @media (max-width: 960px) {
    background: url(${horizontalBar}) bottom 180px center no-repeat,
      url(${horizontalBar}) top 160px center no-repeat;
    padding-top: 50px;
    padding-bottom: 70px;
    align-items: center;
    margin: 0;
  }
`;

const LayoutRightSide = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 200px;

  @media (max-width: 960px) {
    align-items: center;
    margin: 0;
    padding: 25px;
  }
`;

const NextEventContent = styled(Box)`
  height: auto;
  width: auto;
  padding: 35px;
  border: 1px solid #000000;
  background-color: #fff;
  border-radius: 32px;
  max-width: 600px;

  @media (max-width: 960px) {
    padding: 25px;
  }
`;

const NextEventTitle = styled.p`
  color: #64dedf;
  font-size: 6.25rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 100px;
  margin: 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    margin: 0px;
    line-height: 50px;
  }
`;

// TODO: get data from API
const NextEvent: React.FC = () => {
  const currentEvent = newEventData[0];

  return (
    <MainContainer>
      <LayoutLeftSide>
        <NextEventTitle>Proximo</NextEventTitle>
        <NextEventTitle>Evento</NextEventTitle>
      </LayoutLeftSide>

      <LayoutRightSide>
        <NextEventContent>
          <CardEvent {...currentEvent} />
        </NextEventContent>
      </LayoutRightSide>
    </MainContainer>
  );
};

export default NextEvent;
