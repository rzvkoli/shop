import { useContext , useEffect , useState } from 'react';
import Link from 'next/link';
import APIContext from '../context/ApiContext';
import ResultSearchContext from '../context/ResultSearchContext';
import { BsSearch } from "react-icons/bs";

export default function SearchBox() {

    const products = useContext(APIContext)[0];
    const [resultSearch , setResultSearch] = useContext(ResultSearchContext);

    const [query , setQuery] = useState('');

    useEffect(() => {
        const closeSearch = () => {
          setQuery("");
          setResultSearch([]);
        };
        document.addEventListener("click", closeSearch);
        return () => {
          document.removeEventListener("click", closeSearch);
        };
    },[]);

  return (
    <div className='w-11/12 h-full flex flex-row justify-center items-center'>
        <div className='w-11/12 h-4/5 relative'>
            <input
            className='w-full h-full border-hidden  rounded-tl-lg font-Urbanist px-2 uppercase outline-none bg-white placeholder:text-gray-300 shadow-sm'
            placeholder='Search'
            value={query}
            onChange={(e) => {
                const result = e.target.value.replace(/[^a-z]/gi, '').toUpperCase();
                setQuery(result)
                setResultSearch(products.filter((product) => {
                return product.title.toUpperCase().indexOf(query) !== -1
            }))
            }}
            />
            {
            resultSearch.length > 0 ? (
                <div className='absolute top-full left-0 w-full max-h-80 overflow-y-auto border rounded-b-lg bg-white z-10 p-2'>
                    <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                        {resultSearch.map((product) => (
                            <div
                            key={product.id}
                            className='w-full h-12 rounded-lg border shadow-sm bg-gray-100 hover:bg-gray-200'>
                                <Link href={`/products/${product.id}`} className='flex flex-row justify-between items-center p-2'>
                                  <p className='font-Urbanist uppercase text-base font-bold'>{product.title.slice(0 , 20)}</p>
                                  <p className='font-Pacifico text-xl'>{'$ '+product.price}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                ) : query !== '' && (
                <div className='absolute top-full left-0 w-full max-h-80 overflow-y-auto border rounded-b-lg bg-white z-10 p-1'>
                    <div className='w-full h-full flex flex-col justify-center items-center gap-1'>
                      <p className='font-Urbanist uppercase text-sm'>No results found</p>
                    </div>
                </div>
            )}
        </div>
        <div className='w-1/12 h-4/5'>   
            <button className='w-full h-full flex flex-row justify-center items-center rounded-r-lg bg-white text-xl text-black shadow-sm border-l'>
              <BsSearch className='w-10/12' />
            </button>
        </div>
  </div>
  );
}
