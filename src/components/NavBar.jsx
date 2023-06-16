import Link from 'next/link';
import { BsCart2 } from "react-icons/bs";
import SearchBox from './SearchBox';
import CartContext from '../context/CartContext';
import { useContext, useEffect, useState } from 'react';

export default function NavBar() {

  const cart = useContext(CartContext)[0];
  const [productsNumber , setProductsNumber] = useState(0);

  useEffect(() => {
    setProductsNumber(cart.length)
  },[cart])

  return (
    <div className='w-full h-full flex flex-col justify-start font-Urbanist uppercase shadow-sm border border-inherit'>
      <div className='flex flex-row justify-between items-center w-full h-4/6 px-10 bg-gray-200 border border-inherit'>
        <div className='w-1/2 h-full flex flex-row justify-start items-center'>
          <h1 className='text-2xl font-extrabold text-blue-600'>
            Shop
          </h1>
        </div>
        <div className='flex flex-row justify-end items-center gap-1 w-1/2 h-full'>
          <SearchBox />
          <div className='w-1/12 h-full flex flex-row justify-center items-center'>
              <button className='flex flex-row justify-center items-center text-xl bg-white w-full h-4/5 rounded-lg shadow-sm text-black'>
                <Link href={{ pathname: '/cart'}} className='flex flex-row justify-center items-center w-full h-full'>
                  <BsCart2 />
                </Link>
                <span className='font-Pacifico absolute right-10 -top-2'>
                {productsNumber}
                </span>
              </button>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-start items-center gap-2 w-full h-2/6 px-10 bg-gray-100'>
        <button className='uppercase text-sm'>
          <Link href={'/'}>
            Home
          </Link>
        </button>
        <p className='text-gray-300'>/</p>
        <button className='uppercase text-sm'>
          <Link href={'/products'}>
          products
          </Link>
        </button>
        <p className='text-gray-300'>/</p>
        <button className='uppercase text-sm'>
          <Link href={'/products/menswear'}>
          Mens Wear
          </Link>
        </button>
        <p className='text-gray-300'>/</p>
        <button className='uppercase text-sm'>
          <Link href={'/products/ladieswear'}>
          Ladies Wear
          </Link>
        </button>
        <p className='text-gray-300'>/</p>
        <button className='uppercase text-sm'>
          <Link href={'/products/jewellery'}>
          Jewellery
          </Link>
        </button>
        <p className='text-gray-300'>/</p>
        <button className='uppercase text-sm'>
          <Link href={'/products/electronics'}>
          electronics
          </Link>
        </button>
      </div>
    </div>
  );
}