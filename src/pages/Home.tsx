import AppLayoutContainer from "../components/AppLayoutContainer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <AppLayoutContainer>
      <Navbar />
      <HeroSection />
    </AppLayoutContainer>
  );
};

export default Home;
