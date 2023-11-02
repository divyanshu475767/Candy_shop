import React , {useContext} from 'react'
import './Cart.css';
import context from '../store/context.js';


const demo_cart = [
    {name:'eclairs' , price:10}
]

const Cart = () => {
     
    const ctx = useContext(context);


  return (

    <div className='cart'>

    <ul >
      {demo_cart.map((item)=>{
        return <li>
            {item.name}---------{item.price}
        </li>
      })}
    </ul>
    <button onClick={()=>{
        ctx.setIsCartShown(false);
    }}>close</button>
    </div>
  )
}

export default Cart
