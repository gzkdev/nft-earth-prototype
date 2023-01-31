import { Link } from "react-router-dom";
import "./TopCollections.css";

const TopCollections = () => {
  return (
    <section>
      <div className="header">
        <div>Top Collections</div>
        <Link to="/">Discover</Link>
      </div>
    </section>
  );
};

export default TopCollections;
