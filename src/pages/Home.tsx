import AppLayoutContainer from "../components/AppLayoutContainer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TopCollections from "../components/TopCollections";

const Home = () => {
  return (
    <AppLayoutContainer>
      <Navbar />
      <HeroSection />
      <TopCollections />
    </AppLayoutContainer>
  );
};

export default Home;
