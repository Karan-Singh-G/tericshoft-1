import React from 'react'
import styles from "./Navbar.module.css"
import {FaStar} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div><FaStar  className={styles.icons}/>
        <div>feature</div></div>
        <div></div>
        <div>Aquatic</div>
        <div>cycling</div>
        <div>equestring</div>
        <div>extreme</div>
        <div>golf</div>
        <div>gymanstic </div>
        <div>lake and sea</div>
    </div>
  )
}

export default Navbar