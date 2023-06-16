import Head from 'next/head';
import { useContext , useEffect , useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import APIContext from '../../../context/ApiContext';

function Electronics({ data }) {

    const [electronics , setElectronics] = useState([]);
    const apiContext = useContext(APIContext);
    const setProducts = apiContext[1];

    useEffect(() => {

        setProducts(data);
        
        setElectronics(data.filter((product) => {
          return product.category === "electronics"
        }));
      
    },[])

  return (
    <>
      <Head>
          <title>Electronics</title>
          <link rel="icon" href="/" />
      </Head>
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="w-10/12 flex flex-row flex-wrap justify-center items-start py-5 gap-2">
          {
            electronics.map((product) => {
              return(
              <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              path={'electronics/'+ product.id}
              />
              );
            })  
          }
        </div>
      </div>
    </>
  );
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

export default Electronics