import React  , {useContext} from 'react';
import context from '../store/context.js';





const CandyList = (props) => {
 
    const ctx = useContext(context);
    
    const oneHandler = ()=>{
        ctx.totalItemCount(1);
    }

    const twoHandler = ()=>{
        ctx.totalItemCount(2);
    }


    const threeHandler = ()=>{
        ctx.totalItemCount(3);
    }


  return (
    <ul>
    {ctx.candies.map((candy)=>{
     return <li>
        {candy.name}--
        {candy.description}--$
        {candy.price}
        <button onClick={oneHandler}>Buy one</button>
        <button onClick={twoHandler}>Buy two</button>
        <button onClick={threeHandler}>Buy three</button>
      </li>
    
    })}
      
    </ul>
  )
}

export default CandyList
