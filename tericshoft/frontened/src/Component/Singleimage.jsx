import React from "react";
import styles from "./Singlesimage.module.css"

const SingleShoe = ({Shoes_Todo}) => {
  // console.log(Shoes_Todo)
  return (
    <div className={styles.container}>
      <div>  <img  className={styles.images} src={Shoes_Todo?.img1} alt="Cover Pic" /></div>
    
      <div>
        <img  className={styles.images} src={Shoes_Todo?.img2} alt="Cover Pic" />
      </div>
      <div>
      <img  className={styles.images} src={Shoes_Todo?.img3} alt="Cover Pic" />
      </div>
      <div>
      <img  className={styles.images} src={Shoes_Todo?.img4} alt="Cover Pic" />
      </div>
   
     
    </div>
  );
};

export default SingleShoe;
