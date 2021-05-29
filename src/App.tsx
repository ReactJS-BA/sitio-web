import Hero from 'src/Hero/Hero'
import Social from 'src/Social/Social'

import './App.css'
import Section from 'src/Section/Section'

const JoinUs = () => <div>JoinUs</div>
const NextEvent = () => <div>NextEvent</div>
const Tweets = () => <div>Tweets</div>
const Sponsors = () => <div>Sponsors</div>
const Organizers = () => <div>Organizers</div>
const Communities = () => <div>Communities</div>
const Footer = () => <div>Footer</div>

function App() {
  return (
    <>
      <Hero />
      <Social />
      <Section>
        <div>Contenido de la seccion</div>
      </Section>
      <JoinUs />
      <NextEvent />
      <Tweets />
      <Sponsors />
      <Organizers />
      <Communities />
      <Footer />
    </>
  )
}

export default App
