import styles from "../TopCollections/TopCollections.module.css";
import { dummyData } from "../TopCollections";

const TrendingCollections = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.table}>
        <div className={styles.head}>
          <div>COLLECTION</div>
          <div className={styles.price}>FLOOR PRICE</div>
          <div className={styles.volume}>VOLUME</div>
          <div className={styles.supply}>SUPPLY</div>
        </div>
        {dummyData.map((d, i) => (
          <div key={i} className={styles.row}>
            <div className={styles.details}>
              <div className={styles.index}>{i + 1}</div>
              <div className={styles.thumbnail}></div>
              <div className={styles.name}>{d.name}</div>
            </div>
            <div className={styles.price}>{d.floorPrice} ETH</div>
            <div className={styles.volume}>{d.volume} ETH</div>
            <div className={styles.supply}>{d.volume}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCollections;
