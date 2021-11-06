import styled from "styled-components";

import { Box } from "@material-ui/core";

import OrganizerTile from "src/modules/Organizers/OrganizerTile";
import rectangleGroup from "src/assets/images/shapes/rectangleGroup.svg";

// TODO: replace mock data ?
const imageHere = "https://bennettfeely.com/clippy/pics/pittsburgh.jpg";

const organizerData = [
  {
    name: "@name_test1",
    src: imageHere,
    alt: "Organizer name 1",
  },
  {
    name: "@newUserTest2",
    src: imageHere,
    alt: "Organizer name 2",
  },
  {
    name: "@otherUser3",
    src: imageHere,
    alt: "Organizer name 3",
  },
  {
    name: "@name4",
    src: imageHere,
    alt: "Organizer name 4",
  },
  // {
  //   name: "@userUser5",
  //   src: imageHere,
  //   alt: "Organizer name 5",
  // },
  // {
  //   name: "@userUser6",
  //   src: imageHere,
  //   alt: "Organizer name 6",
  // },
];

const MainWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const OrganizerHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(${rectangleGroup});
  background-repeat: no-repeat;
  background-position: bottom 100px left 100px;

  @media (max-width: 960px) {
    background-position: bottom 75px left 15px;
  }
`;

const OrganizerContent = styled(Box)`
  display: grid;
  justify-content: center;
  padding-bottom: 100px;
  margin: 0 150px;
  grid-template-columns: repeat(4, minmax(auto, 400px));
  row-gap: 100px;

  background-image: url(${rectangleGroup});
  background-repeat: no-repeat;
  background-position: bottom 0 right 0;

  & > div:not(:last-child) {
    flex: 1 0 15%;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, minmax(auto, 400px));
    row-gap: 50px;
    margin: 0 60px;
  }
`;

const OrganizerTitle = styled.p`
  color: #002ff4;
  text-transform: uppercase;
  font-size: 4rem;
  font-family: "MuseoModerno";
  font-weight: 700;
  line-height: 100px;
  margin-bottom: 70px;

  @media (max-width: 960px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const Organizers: React.FC = () => {
  return (
    <MainWrapper>
      <OrganizerHeader>
        <OrganizerTitle>Organizadores</OrganizerTitle>
      </OrganizerHeader>
      <OrganizerContent>
        {organizerData.length &&
          organizerData.map((organizer) => <OrganizerTile {...organizer} />)}
      </OrganizerContent>
    </MainWrapper>
  );
};

export default Organizers;
