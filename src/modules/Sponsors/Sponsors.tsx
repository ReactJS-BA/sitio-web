import styled from "styled-components";
import Box from "@material-ui/core/Box";

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
    border: 4px solid #64dedf;
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
    margin: 0;
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
    margin: 0px;
    line-height: 50px;
  }
`;

const Subtitle = styled.p`
  color: #021037;
  font-size: 1.25rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 30px;
  margin: 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    margin: 0px;
    line-height: 50px;
  }
`;

const Sponsors = () => {
  return (
    <MainContainer>
      <LayoutLeftSide>
        <Title>Sponsorship</Title>
        <Subtitle>
          Si sos o representas a una empresa, tu propuesta de sponsorship aquí
        </Subtitle>
      </LayoutLeftSide>
      <LayoutRightSide></LayoutRightSide>
    </MainContainer>
  );
};

export default Sponsors;
