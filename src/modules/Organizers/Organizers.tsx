import styled from "styled-components";

import { Box } from "@material-ui/core";

import rectangleGroup from "src/assets/images/shapes/rectangleGroup.svg";

const MainWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const OrganizerHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  min-height: 100px;
  justify-content: center;
  background-image: url(${rectangleGroup});
  background-repeat: no-repeat;
  background-position: bottom 100px left 100px;
`;

const OrganizerContent = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const OrganizerTitle = styled.p`
  color: #002ff4;
  text-transform: uppercase;
  font-size: 4rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 100px;
`;

const Organizers: React.FC = () => {
  return (
    <MainWrapper>
      <OrganizerHeader>
        <OrganizerTitle>Organizadores</OrganizerTitle>
      </OrganizerHeader>
      <OrganizerContent>CONTENT</OrganizerContent>
    </MainWrapper>
  );
};

export default Organizers;
