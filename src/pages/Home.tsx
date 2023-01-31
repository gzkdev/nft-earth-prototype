import AppLayoutContainer from "../components/AppLayoutContainer";
import CollectionsCarousel from "../components/CollectionsCarousel";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <AppLayoutContainer>
      <Navbar />
      <HeroSection />
      <CollectionsCarousel />
      {/* <TopCollections /> */}
    </AppLayoutContainer>
  );
};

export default Home;
