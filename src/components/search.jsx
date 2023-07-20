import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom";
import Nav from './Nav';
import Rating from './Rating';
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { selectProduct } from '../redux/product/productSlice';

const Search = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    console.log(search)
   
    const handleProductClick = (product) => {
        dispatch(selectProduct(product));
        handleAdd(products);
    };
    const handleAdd = (products) => {
        dispatch(add(products))


    };

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        setProducts(await response.json());
        console.log(products);

    }


    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
      <Nav/>
      
            <div className='h-full w-full  bg-[#d5d7da] justify-center  text-center  ' >
                <div className='text-start font-extrabold  text-4xl p-2     text-[#135880] ml-[7rem]' >        Search Products -
                    <  input type="search" className='rounded-r mt-[5rem] p-5 w-[700px] text-xl h-[3rem] ml-4 rounded-lg ' placeholder='Enter  a product category' onChange={(e) => setSearch(e.target.value)} /></div>


                


                <div className='grid grid-cols-3   p-4 pl-[140px] ' >
                    {
                        products.filter(item => {
                            const searchTerm = search.toLowerCase();
                            const product = item.category.toLowerCase();
                            return searchTerm && product.startsWith(searchTerm)
                        })
                            .map((item, id) => {
                                return (
                                    <div className='grid-cols-1 border border-[#a0a0a0]    h-[auto]  w-[20.5rem]  h-auto mb-[3rem] bg-white rounded-xl '>
                                <div className=' h-[auto]  w-[18rem] mx-[1rem] mt-[1rem]  mb-[0.7rem]   rounded-xl  '>
                                    <Link to={`/products/${item.id}`}>
                                        <img src={item.image} alt='load' className='h-[20rem] w-full    hover:scale-[1.12] transform transition-all rounded-xl ' />
                                    </Link>
                                </div>
                                <hr className=' h-[0.1rem] mb-[0.02rem] bg-[#212121]' />
                                <div className="   mb-[0.7rem]  p-1  w-[20.3rem]  grid-rows-4">

                                    <h1 className='text-[green] text-2xl mb-2 font-black'> ${item.price} </h1>

                                    <button onClick={() => handleProductClick(products)} className="text-white bg-blue-700 mb-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[7rem] h-[2rem]
                                 font-medium rounded-lg text-sm   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add to cart
                                     </button>

                                    <div className='flex ml-[3.5rem] mb-2'>
                                        <Rating/>
                                        <span className="bg-blue-100  text-blue-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                            {item.rating.rate}
                                        </span>

                                    </div>

                                    <h1 className='text-[#135880]  font-bold text-2xl mb-2  '> {item.title} </h1>
                                </div>
                           </div>
                                )
                            })
                    }

                </div>




            </div>




        </>



    )
}


export default Search