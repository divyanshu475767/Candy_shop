import context from './context.js';
import React, { useState } from 'react';




const Provider = (props) => {

    const [candies, setCandies] = useState([]);
    const [items, setItems] = useState(0);
    const [isCartShown, setIsCartShown] = useState( false)

    const addCandy = (candy) =>{
          setCandies((prev)=>{
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
