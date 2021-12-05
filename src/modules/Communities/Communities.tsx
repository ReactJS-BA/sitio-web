import styled from "styled-components";
import Box from "@material-ui/core/Box";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  font-size: x-large;
  position: relative;
  margin: 100px;
  height: 485px;
  width: auto;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    margin: 50px;
  }
`;

const CommunitiesHeader = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const CommunitiesTitle = styled.p`
  color: #002ff4;
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

const Communities: React.FC = () => {
  return (
    <MainContainer>
      <CommunitiesHeader>
        <CommunitiesTitle>Comunidades</CommunitiesTitle>
        <CommunitiesTitle>Amigas</CommunitiesTitle>
      </CommunitiesHeader>
      {/* TODO: add communities */}
      Communities
    </MainContainer>
  );
};

export default Communities;
