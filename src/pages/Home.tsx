import AppLayoutContainer from "../components/AppLayoutContainer";
import CollectionsCarousel from "../components/CollectionsCarousel";
import CollectionsTable from "../components/CollectionsTable";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <AppLayoutContainer>
      <Navbar />
      <HeroSection />
      <CollectionsCarousel />
      <CollectionsTable />
    </AppLayoutContainer>
  );
};

export default Home;
