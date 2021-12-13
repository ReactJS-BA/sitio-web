import styled from "styled-components";
import Box from "@material-ui/core/Box";

import PolygonTile from "src/components/common/PolygonTile";

import { communitiesData } from "src/mock/communities/communitiesData";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  font-size: x-large;
  position: relative;
  margin: 130px;
  height: auto;
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
  margin-bottom: 120px;

  @media (max-width: 960px) {
    margin-bottom: 60px;
  }
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

const CommunitiesContent = styled(Box)`
  display: grid;
  justify-content: center;
  padding-bottom: 100px;
  margin: 0;
  grid-template-columns: repeat(4, minmax(auto, 400px));
  row-gap: 100px;

  & > div:not(:last-child) {
    flex: 1 0 15%;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, minmax(auto, 400px));
    row-gap: 50px;
    margin: 0 60px;
  }
`;

// TODO: get data from API
const Communities: React.FC = () => {
  return (
    <MainContainer>
      <CommunitiesHeader>
        <CommunitiesTitle>Comunidades</CommunitiesTitle>
        <CommunitiesTitle>Amigas</CommunitiesTitle>
      </CommunitiesHeader>

      <CommunitiesContent>
        {communitiesData.length &&
          communitiesData.map((community, index) => (
            <PolygonTile key={index} {...community} />
          ))}
      </CommunitiesContent>
    </MainContainer>
  );
};

export default Communities;
