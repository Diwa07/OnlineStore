import React from 'react'
import cart from '../uploads/cart.png'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from "react-router-dom";
const Nav = () => {
  const items = useSelector((state)=>state.cart);

  return (
    
    <div className='h-[4rem] w-full flex fixed  bg-[#2bb4e0] fixed p-2 justify-between z-[10]'>
      <div className='flex gap-[2rem]'> <Link to="/" >Logo</Link>
      
      <Link to="/"  className='  py-2 text-[black] text-3xl font-bold '>Online_Store</Link>
    
      </div>
      <ul className='flex text-xl gap-3 '>
        <i>
             
            <Link to="/"  className='  p-1 text-[#000000a8] font-bold '>Home</Link>
            </i>l
        <li>
        <Link to="/search"  className='p-1 text-[#000000a8] font-bold  ' >Search  </Link>
       
           

            </li>
            
            
        </ul>

        <Link to ="/cart" > 
 <button  className='  flex text-4xl mr-[50px] text-[#af3838] '>  <img src={cart} alt='cart' className='h-12 mb-3 relative  ' /> 
         <h1 className='absolute ml-[3.9rem] mt-[-12px]'> {items.length}</h1> 
          </button> </Link>
      
     
         
    
     


    </div>
  )
}

export default Nav