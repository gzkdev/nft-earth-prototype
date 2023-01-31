import { Link } from "react-router-dom";
import "./CollectionsCarousel.css";

const dummyData = [
  {
    name: "FashionDuck",
    price: 0.02,
  },
  {
    name: "NecroParadise",
    price: 0.05,
  },
  {
    name: "RTFKT PodX",
    price: 0.37,
  },
  {
    name: "Regulars",
    price: 0.12,
  },
  {
    name: "FreakyGirls",
    price: 0.04,
  },
  {
    name: "SAM PIERSON'S DRAIN BRAIN",
    price: 0.05,
  },
  {
    name: "archive edition",
    price: 0.04,
  },
  {
    name: "Quantum by Beeple My Father",
    price: 0.05,
  },
  {
    name: "Proceed w/ Caution",
    price: 0.05,
  },
];

const CollectionsCarousel = () => {
  return (
    <div className="grid">
      {dummyData.map((d, i) => (
        <Link key={i} to="/">
          <div className="card">
            <div className="thumbnail"></div>
            <div className="details">
              <div>{d.name}</div>
              <div>Floor: {d.price} ETH</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionsCarousel;
