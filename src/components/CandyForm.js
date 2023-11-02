import React, { useState  , useContext} from 'react'
import context from '../store/context.js';
import Cart from './Cart.js';


const CandyForm = () => {

    const ctx = useContext(context);


 const [name ,setName] = useState('');
 const [description ,setDescription] = useState('');
 const [price ,setPrice] = useState('');

 const [cart , setCart] = useState(false);



   const nameHandler = (event)=>{
    setName(event.target.value);
   }

   const descriptionHandler = (event)=>{
    setDescription(event.target.value);
   }
   const priceHandler = (event)=>{
    setPrice(event.target.value);
   }


   const submitHandler = (event)=>{
    event.preventDefault();
    ctx.addCandy({
        name:name,
        description:description,
        price:price,
    })

    setName('');
    setDescription('');
    setPrice('');
   }


   const cartHandler = (event)=>{
         ctx.setIsCartShown(true);
   }



  return (
    <div>
    <form>
    <label>candy name</label>
    <input type='text' onChange={nameHandler} value={name}></input>
    <br/>
    <br/>

    <label>candy description</label>
    <input type='text' onChange={descriptionHandler} value={description}></input>
    <br/>
    <br/>


    <label>candy price</label>
    <input type='number' onChange={priceHandler} value={price}></input>
    <br/>
    <br/>

    <button type='submit' onClick={submitHandler}>Add candy</button>
    <br/>
    <br/>

    </form>

    <button onClick={cartHandler}>
     <span>{ctx.itemCount}</span>--  
     cart
    </button>

  {ctx.isCartShown && <Cart/>}
    </div>
  )
}

export default CandyForm
