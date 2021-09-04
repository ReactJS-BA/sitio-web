import SectionsWrapper from "src/components/layouts/SectionsWrapper";

import Hero from "src/modules/Hero/Hero";
import Social from "src/modules/Social/Social";

import "./App.css";

const JoinUs = () => <div>JoinUs</div>;
const NextEvent = () => <div>NextEvent</div>;
const Tweets = () => <div>Tweets</div>;
const Sponsors = () => <div>Sponsors</div>;
const Organizers = () => <div>Organizers</div>;
const Communities = () => <div>Communities</div>;
const Footer = () => <div>Footer</div>;

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <Social />
      <SectionsWrapper>
        <div>Contenido de la seccion</div>
      </SectionsWrapper>
      <JoinUs />
      <NextEvent />
      <Tweets />
      <Sponsors />
      <Organizers />
      <Communities />
      <Footer />
    </>
  );
};

export default App;
