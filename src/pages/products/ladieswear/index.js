import { useContext , useEffect , useState } from 'react';
import Head from 'next/head';
import ProductCard from '../../../components/ProductCard';
import APIContext from '../../../context/ApiContext';

function LadiesWear({ data }) {

    const [ladiesWear , setLadiesWear] = useState([]);
    const apiContext = useContext(APIContext);
    const setProducts = apiContext[1];

    useEffect(() => {

        setProducts(data)
      
        setLadiesWear(data.filter((product) => {
          return product.category === "women's clothing"
        }))

    },[])

  return (
    <>
      <Head>
          <title>Ladies Wear</title>
          <link rel="icon" href="/" />
      </Head>
      <div className="flex flex-row justify-center items-center w-full h-full">
        <div className="w-10/12 flex flex-row flex-wrap justify-center items-start py-5 gap-2">
          {
            ladiesWear.map((product) => {
              return(
                  <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  path={'ladieswear/' + product.id}
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

export default LadiesWear