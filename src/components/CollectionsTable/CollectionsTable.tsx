import { useState } from "react";
import { Link } from "react-router-dom";
import TopCollections from "../TopCollections";
import TrendingCollections from "../TrendingCollections";
import styles from "./CollectionsTable.module.css";

const CollectionsTable = () => {
  const [collectionsType, setCollectionsType] = useState<"TR" | "TP">("TR");
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.header}>
          <button
            data-active={collectionsType == "TR"}
            onClick={() => setCollectionsType("TR")}
          >
            Trending
          </button>
          <button
            data-active={collectionsType == "TP"}
            onClick={() => setCollectionsType("TP")}
          >
            Top
          </button>
          <Link to="/">View all</Link>
        </div>
        {collectionsType === "TP" && <TopCollections />}
        {collectionsType === "TR" && <TrendingCollections />}
      </div>
    </section>
  );
};

export default CollectionsTable;
