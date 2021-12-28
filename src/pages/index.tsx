import { TitleSite } from '../components/TitleSite';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Highlights } from '../components/Highlights';

const Home = () => {
  return (
    <>
      <TitleSite title="Gympass - Seu Guru" />
      <Header />
      <Banner />
      <Highlights />
    </>
  );
};

export default Home;
