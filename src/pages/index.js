import Head from "next/head";
import { useContext , useEffect } from "react";
import APIContext from "../context/ApiContext";

function Home({ data }) {

  const apiContext = useContext(APIContext);
  const setProducts = apiContext[1];

  useEffect(() => {
    setProducts(data);
  },[])

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/" />
      </Head>
      <div className="font-Urbanist uppercase px-10 py-2">
        home
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

export default Home