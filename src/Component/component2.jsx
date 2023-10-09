import React from "react";
import styles from "./component2.module.css"; // Import the CSS module

const Card = ({ image, heading, price }) => (
  <div className={styles.card}>
    <img src={image} alt="Card" className={styles["card-image"]} />
    <h3 className={styles["card-heading"]}>{heading}</h3>
    <p className={styles["card-price"]}>${price}</p>
  </div>
);

const component2 = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.maindiv}>
      <div className={styles['card-row']}>
        {data.slice(0, 4).map((item) => (
          <Card key={item.id} image={item.image} heading={item.title} price={item.price} />
        ))}
      </div>
      <div className={styles['card-row']}>
        {data.slice(4, 8).map((item) => (
          <Card key={item.id} image={item.image} heading={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default component2;
