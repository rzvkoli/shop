import Head from 'next/head';
import APIContext from '../../../context/ApiContext';
import { useContext , useEffect } from 'react';
import ProductDetailsCard from '../../../components/ProductDetailsCard';

function ElectronicsId({ product , data }) {

  const apiContext = useContext(APIContext);
  const setProducts = apiContext[1];

    useEffect(() => {
        setProducts(data);
    },[])

  return (
    <>
      <Head>
          <title>{product.title}</title>
          <link rel="icon" href="/" />
      </Head>
      <div className='w-full flex flex-row justify-center items-center py-5'>
        <ProductDetailsCard
        id={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const resJson = await res.json();
    const ids = resJson.map((index) => (index.id))
    const paths = ids.map(id => ({ params:{ electronicsId:id.toString() } }))
    
    return {
      paths ,
      fallback:false
    }
}


export const getStaticProps = async ({ params }) => {
  const [productRes, allProductsRes] = await Promise.all([
    fetch(`https://fakestoreapi.com/products/${params.electronicsId}`),
    fetch(`https://fakestoreapi.com/products`),
  ]);
  const product = await productRes.json();
  const data = await allProductsRes.json();
  return {
    props: {
      product,
      data,
    },
  };
};


export default ElectronicsId