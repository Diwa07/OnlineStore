import { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav';
import slide from '../uploads/slide.jpg'
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { Link } from 'react-router-dom';
import { selectProduct } from '../redux/product/productSlice';
import Rating from './Rating';

const ProductList = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch();

    const handleProductClick = (product) => {
        dispatch(selectProduct(product));
        handleAdd(data);
    };
     const fetchData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products`, {

            });
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleAdd = (data) => {
        dispatch(add(data))


    };

    useEffect(() => {
        fetchData()
    }, [])
    return (<>
        <Nav />

        <div className='h-full pt-[4rem] bg-[#d5d7da] text-center  ' >

            <h1 className='font-extrabold text-4xl p-3  text-[#135880]'>   Mens's Collections </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  h-[auto] p-4 justify-items-center' >
                {
                    data.slice(0, 4).map((item, id) => {
                        return (
                            <div className='grid-cols-1 border border-[#a0a0a0]    h-[auto]  w-[20.5rem]  h-auto mb-[3rem] bg-white rounded-xl '>
                                <div className=' h-[auto]  w-[18rem] mx-[1rem] mt-[1rem]  mb-[0.7rem]   rounded-xl  '>
                                    <Link to={`/products/${item.id}`}>
                                        <img src={item.image} alt='load' className='h-[20rem] w-full    hover:scale-[1.12] transform transition-all rounded-xl ' />
                                    </Link>
                                </div>
                                <hr className=' h-[0.1rem] mb-[0.1rem] bg-[#212121]' />
                                <div className="   mb-[0.7rem]  p-1  w-[20.3rem]  grid-rows-4">

                                    <h1 className='text-[green] text-2xl mb-2 font-black'> ${item.price} </h1>

                                    <button onClick={() => handleProductClick(data)} className="text-white bg-blue-700 mb-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[7rem] h-[2rem]
                                 font-medium rounded-lg text-sm   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add to cart
                                     </button>

                                    <div className='flex ml-[3.5rem] mb-2'>
                                        <Rating />
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
                  

                    
            <h1 className='font-extrabold text-4xl p-3  text-[#135880]'>  women's clothing</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  h-[auto] p-4 justify-items-center' >
                {
                    data.slice(14, 20).map((item, id) => {
                        return (
                            <div className='grid-cols-1 border border-[#a0a0a0]     w-[20.5rem]  h-auto mb-[3rem] bg-white rounded-xl '>
                                <div className=' h-[auto]  w-[18rem] mx-[1rem] mt-[1rem]  mb-[0.7rem]   rounded-xl  '>
                                    <Link to={`/products/${item.id}`}>
                                        <img src={item.image} alt='load' className='h-[20rem] w-full    hover:scale-[1.12] transform transition-all rounded-xl ' />
                                    </Link>
                                </div>
                                <hr className=' h-[0.1rem] mb-[0.1rem] bg-[#212121]' />
                                <div className="   mb-[0.7rem]  p-1  w-[20.3rem]  grid-rows-4">

                                    <h1 className='text-[green] text-2xl mb-2 font-black'> ${item.price} </h1>

                                    <button onClick={() => handleProductClick(data)} className="text-white bg-blue-700 mb-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[7rem] h-[2rem]
                                 font-medium rounded-lg text-sm   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add to cart
                                     </button>

                                    <div className='flex ml-[3.5rem] mb-2'>
                                        <Rating />
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



            
            <h1 className='font-extrabold text-4xl p-3  text-[#135880]'>   jewelery</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  h-[auto] p-4 justify-items-center' >
                {
                    data.slice(4, 8).map((item, id) => {
                        return (
                            <div className='grid-cols-1 border border-[#a0a0a0]    w-[20.5rem]  h-auto mb-[3rem] bg-white rounded-xl '>
                                <div className=' h-[auto]  w-[18rem] mx-[1rem] mt-[1rem]  mb-[0.7rem]   rounded-xl  '>
                                    <Link to={`/products/${item.id}`}>
                                        <img src={item.image} alt='load' className='h-[20rem] w-full    hover:scale-[1.12] transform transition-all rounded-xl ' />
                                    </Link>
                                </div>
                                <hr className=' h-[0.1rem] mb-[0.1rem] bg-[#212121]' />
                                <div className="   mb-[0.7rem]  p-1  w-[20.3rem]  grid-rows-4">

                                    <h1 className='text-[green] text-2xl mb-2 font-black'> ${item.price} </h1>

                                    <button onClick={() => handleProductClick(data)} className="text-white bg-blue-700 mb-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[7rem] h-[2rem]
                                 font-medium rounded-lg text-sm   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add to cart
                                     </button>

                                    <div className='flex ml-[3.5rem] mb-2'>
                                        <Rating />
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


            <h1 className='font-extrabold text-4xl p-3  text-[#135880]'> Electronics </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  h-[auto] p-4 justify-items-center' >
                {
                    data.slice(8, 14).map((item, id) => {
                        return (
                            <div className='grid-cols-1 border border-[#a0a0a0]     w-[20.5rem]  h-auto mb-[3rem] bg-white rounded-xl '>
                                <div className=' h-[auto]  w-[18rem] mx-[1rem] mt-[1rem]  mb-[0.7rem]   rounded-xl  '>
                                    <Link to={`/products/${item.id}`}>
                                        <img src={item.image} alt='load' className='h-[20rem] w-full    hover:scale-[1.12] transform transition-all rounded-xl ' />
                                    </Link>
                                </div>
                                <hr className=' h-[0.1rem] mb-[0.1rem] bg-[#212121]' />
                                <div className="   mb-[0.7rem]  p-1  w-[20.3rem]  grid-rows-4">

                                    <h1 className='text-[green] text-2xl mb-2 font-black'> ${item.price} </h1>

                                    <button onClick={() => handleProductClick(data)} className="text-white bg-blue-700 mb-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[7rem] h-[2rem]
                                 font-medium rounded-lg text-sm   text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Add to cart
                                     </button>

                                    <div className='flex ml-[3.5rem] mb-2'>
                                        <Rating />
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


export default ProductList