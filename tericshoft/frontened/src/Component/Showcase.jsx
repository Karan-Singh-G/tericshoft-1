import React, { useEffect } from "react";

import getTodo from "../Redux/AppReducer/action";
import { useDispatch,useSelector } from "react-redux";
import SingleShoe from "./Singleimage";
import styles from "./Showcase.module.css"
import {Link} from "react-router-dom"
// import ShoeCard from "../components/ShoeCard"

const Shoes = () => {
  const Shoes_Todo=useSelector(state=>state.shoes)
  const dispatch=useDispatch()
  console.log(Shoes_Todo[0]?.BMX)

  useEffect(()=>{
   dispatch(getTodo())
   
  },[])

  
  // console.log(Shoes_Todo)
  return (

    <div className={styles.mainshoesContainer}>
     <div className={styles.hightlight}>Highlight</div>
     
      <div className={styles.shoes_container}>
       
        {
           
            <SingleShoe  Shoes_Todo={Shoes_Todo[0]?.BMX}/>
          
           
         
      }
      </div>
    </div>
  );
};

export default Shoes;
