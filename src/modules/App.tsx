import styled from "styled-components";

// ALL SECTIONS
import Hero from "src/modules/Hero/Hero";
import Social from "src/modules/Social/Social";
import Organizers from "src/modules/Organizers/Organizers";
import PastEvents from "src/modules/PastEvents/PastEvents";
import NextEvent from "src/modules/NextEvent/NextEvent";
import Sponsors from "src/modules/Sponsors/Sponsors";
import Footer from "src/modules/Footer/Footer";
import LastTweets from "src/modules/LastTweets/LastTweets";
import Communities from "src/modules/Communities/Communities";
import Participate from "src/modules/Participate/Participate";
import AboutUs from "src/modules/AboutUs/AboutUs";

import "./App.css";

const StyledLayout = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const App: React.FC = () => {
  return (
    <StyledLayout>
      <Hero />
      <Social />
      <AboutUs />
      <Participate />
      <NextEvent />
      <LastTweets />
      <Sponsors />
      <PastEvents />
      <Organizers />
      <Communities />
      <Footer />
    </StyledLayout>
  );
};

export default App;
