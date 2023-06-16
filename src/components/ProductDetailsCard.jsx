import { useContext , useState } from 'react';
import CartContext from '../context/CartContext';

export default function ProductDetailsCard({ id , title , description , price }) {

    const [showMore , setShowMore] = useState(false);
    const [cart , setCart] = useContext(CartContext);

    var product = {
        id,
        title,
        price,
        number : 1
    }

    const addToCart = () => {
        setCart([...cart , product])
    }

  return (
    <div className='flex flex-col justify-center items-start w-8/12 font-Urbanist uppercase shadow-sm'>
        <h1 className='font-bold text-xl bg-gray-200 w-full p-2'>
            {title.slice(0 , 20)}
        </h1>
        <p className='font-medium text-base bg-gray-100 w-full p-2'>
            {showMore ? description : description.slice(0 , 50) }
            <span
            className='text-blue-600 text-sm cursor-pointer'
            onClick={() => setShowMore(!showMore)}>
                {showMore ? ' show less' : ' show more'}
            </span>
        </p>
        <p className='font-Pacifico text-xl bg-gray-100 w-full p-2'>
            {
            '$ '+ price
            }
        </p>
        <div className='w-full bg-slate-100 p-2'>
            <button onClick={addToCart} className='border shadow-sm font-Urbanist uppercase p-2 rounded-lg font-extrabold bg-slate-200'>
                add to cart
            </button>
        </div>
    </div>
  );
}