import context from './context.js';
import React, { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';


const Provider = (props) => {
 


 
    const [candies, setCandies] = useState([]);
    const [items, setItems] = useState(0);
    const [isCartShown, setIsCartShown] = useState( false)
    useEffect(()=>{
        axios.get('http://localhost:3000/getCandy',{
          headers:{
            Authorization:localStorage.getItem('token'),
          }
        })
        .then(response=>{
          setCandies(response.data);
        })
    },[])
    const addCandy = (candy) =>{
          setCandies((prev)=>{
            axios.post('http://localhost:3000/createCandy',{
      
            items:[...prev , candy],
        
        }
        ,
        {
          headers:{
            Authorization:localStorage.getItem('token'),
          }
        }
        )
        .then(response=>{
          console.log(response);
        })
        .catch(err=>{
          console.log(err);
        })
            return [...prev , candy]
          })
    }

    const totalItemCount = (number) =>{
          setItems((prev)=>{
              return prev + parseInt(number);
          })

    }

    const settingIsCartShown = (value)=>{

        setIsCartShown(value);
    }

    

    const contextValue = {
        candies:candies,
        addCandy:addCandy,
        itemCount:items,
        totalItemCount:totalItemCount,
        isCartShown:isCartShown,
        setIsCartShown:settingIsCartShown 

      };
    
  return (
    <context.Provider value={contextValue} >
      {props.children}
    </context.Provider>
  )
}

export default Provider
