import { useState } from "react";
import { Link } from "react-router-dom";
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
      </div>
    </section>
  );
};

export default CollectionsTable;
