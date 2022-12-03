import axios from "axios";
import * as types from "./actionTypes";

const getTodo=(params)=>(dispatch)=>{
    dispatch({type:types.GET_SHOES_DATA_REQUEST});
    axios.get('/Armoury',params)
    .then((r)=>dispatch({type:types.GET_SHOES_DATA_SUCCESS,payload:r.data}))
    .catch((err)=>dispatch({type:types.GET_SHOES_DATA_FAILURE}))
}

export default getTodo
