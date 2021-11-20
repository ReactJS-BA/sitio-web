import styled from "styled-components";
import Box from "@material-ui/core/Box";

const PastEventsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #000722;
  color: white;
  font-size: x-large;
  height: 100%;
  width: 100%;
`;

const PastEventsHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PastEventsContent = styled(Box)`
  height: 500px;
`;

const PastEventsTitle = styled.p`
  color: #64dedf;
  text-transform: uppercase;
  font-size: 1.75rem;
  font-family: "MuseoModerno";
  font-weight: normal;
  line-height: 45px;
  margin-top: 70px;
  margin-bottom: 70px;

  @media (max-width: 960px) {
    font-size: 2rem;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

const PastEvents: React.FC = () => {
  return (
    <PastEventsContainer>
      <PastEventsHeader>
        <PastEventsTitle>Host Pasados</PastEventsTitle>
      </PastEventsHeader>
      <PastEventsContent></PastEventsContent>
    </PastEventsContainer>
  );
};

export default PastEvents;
