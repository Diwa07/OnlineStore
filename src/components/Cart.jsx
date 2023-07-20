import React from 'react'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/cartSlice'
import Nav from './Nav'

const Cart = () => {
    const dispatch =useDispatch();
    const Product = useSelector((state) => state.cart);
    const handleRemove = (ProductId)=> {
        dispatch(remove(ProductId));
    }

  return (<>
  <Nav/>
  
    <div className='pt-[5rem] text-3xl font-semibold'>Cart - </div>
    {Product.length > 0 ? Product.map((item, id) => {
              return <li className='name_list' ><span className='profile'>
                 { console.log(item)}
                <img src={Product.image} alt="go" />
              </span>
                {item.title}
              </li>
            }) : <h1>No data</h1>   
            }
          
<button onClick={()=>handleRemove(Product.id)} >Remove</button>

   
      
  
        

        
      
   

    
    </>
  )
}

export default Cart