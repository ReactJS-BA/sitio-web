import styled from "styled-components";
import SectionsWrapper from "src/components/layouts/SectionsWrapper";

import Hero from "src/modules/Hero/Hero";
import Social from "src/modules/Social/Social";
import Organizers from "src/modules/Organizers/Organizers";
import PastEvents from "src/modules/PastEvents/PastEvents";
import NextEvent from "src/modules/NextEvent/NextEvent";
import Sponsors from "src/modules/Sponsors/Sponsors";

import "./App.css";

const JoinUs = () => <div>JoinUs</div>;
const Tweets = () => <div>Tweets</div>;
const Communities = () => <div>Communities</div>;
const Footer = () => <div>Footer</div>;

const StyledLayout = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const App: React.FC = () => {
  return (
    <StyledLayout>
      {/* TODO: acomodar secciones cuando esten todas listas  */}
      <Hero />
      <Social />
      <SectionsWrapper>
        <div>Contenido de la seccion</div>
      </SectionsWrapper>
      <NextEvent />
      <Sponsors />
      <PastEvents />
      <Organizers />
      <JoinUs />
      <Tweets />
      <Communities />
      <Footer />
    </StyledLayout>
  );
};

export default App;
