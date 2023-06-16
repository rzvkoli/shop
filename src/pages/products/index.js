import Head from "next/head";
import { useContext , useEffect , useState } from "react";
import ProductCard from '../../components/ProductCard';
import APIContext from "../../context/ApiContext";
import { FaArrowCircleUp } from 'react-icons/fa';

function Products({ data }) {

  const apiContext = useContext(APIContext);
  const setProducts = apiContext[1];
  const [showScroll , setShowScroll] = useState(false)

  useEffect(() => {
    setProducts(data)
  },[])

  useEffect(() => {

    const checkScrollTop = () => {    
      if (!showScroll && window.pageYOffset > 400){
         setShowScroll(true)    
      } else if (showScroll && window.pageYOffset <= 400){
         setShowScroll(false)    
      }  
    };

    window.addEventListener('scroll', checkScrollTop)

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };

  },[showScroll])


  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <>
      <Head>
          <title>Products</title>
          <link rel="icon" href="/" />
      </Head>
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="w-10/12 flex flex-row flex-wrap justify-center items-start py-5 gap-2">
          {
            data.map((product) => {
              return(
                  <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  path={product.id}
                  />
              );
            })  
          }
        </div>
        <FaArrowCircleUp 
          className="scrollTop" 
          onClick={scrollTop} 
          style={{height: 40, display: showScroll ? 'flex' : 'none'}}
        />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  return {
    props:{
      data
    }
  }
}

export default Products