import { Link } from "react-router-dom";
import TopCollectionsDisplay from "../TopCollectionsDisplay";
import "./TopCollections.css";

const TopCollections = () => {
  return (
    <section>
      <div className="container">
        <div className="header">
          <div>Top Collections</div>
          <Link to="/">Discover</Link>
        </div>
        <TopCollectionsDisplay />
      </div>
    </section>
  );
};

export default TopCollections;
