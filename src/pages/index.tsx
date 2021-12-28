import { TitleSite } from '../components/TitleSite';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Highlights } from '../components/Highlights';
import { Sections } from '../components/Sections';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <>
      <TitleSite title="Gympass - Seu Guru" />
      <Header />
      <Banner />
      <Highlights />
      <Sections />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
