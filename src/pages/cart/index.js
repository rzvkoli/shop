import Head from "next/head";
import CartContext from "../../context/CartContext";
import { useContext , useEffect , useState } from "react";

function CartPage() {

    const [cart , setCart] = useContext(CartContext);
    const [dataCart , setDataCart] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProductsNumber, setTotalProductsNumber] = useState(0);

    useEffect(() => {
      setDataCart(cart);
    },[]);

    useEffect(() => {
      const newTotalPrice = dataCart.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.number,
        0
      );
      setTotalPrice(newTotalPrice);
  
      const newTotalProductsNumber = dataCart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.number,
        0
      );
      setTotalProductsNumber(newTotalProductsNumber);
    },[dataCart])

    const emptyCart = () => {
      setCart([]);
      setDataCart([]);
    }

  return (
    <>
    <Head>
        <title>Cart</title>
    </Head>
    <div className="font-Urbanist uppercase flex flex-col justify-center items-center pt-10">
    {dataCart.length === 0 ? (
        <p className="font-semibold text-2xl">
          Your cart is empty
        </p>
      ) : (
        <div className="w-8/12 flex flex-col justify-center items-center gap-2">
          <div className="flex flex-row justify-center items-center border rounded-lg w-full bg-slate-200 p-2 font-bold">
            <div className="w-8/12 flex flex-row justify-start items-center">
              <p>
                products
              </p>
            </div>
            <div className="w-2/12 flex flex-row justify-center items-center">
              <p>
                price
              </p>
            </div>
            <div className="w-2/12 flex flex-row justify-center items-center">
              <p>
                number
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2">
            {dataCart.map((product) => (
              <div
              key={product.id}
              className="flex flex-row justify-center items-center border rounded-lg w-full bg-slate-100 p-2"
              >
                <div className="w-8/12 flex flex-row justify-start items-center">
                  <p className="text-sm">
                    {product.title}
                  </p>
                </div>
                <div className="w-2/12 flex flex-row justify-center items-center">
                  <p className="font-Pacifico">
                    {'$ '+product.price}
                  </p>
                </div>
                <div className="w-2/12 flex flex-row justify-center items-center">
                  <p className="font-Pacifico">
                    {product.number}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-center items-center border rounded-lg w-full bg-slate-200 p-2 font-bold">
            <div className="w-8/12 flex flex-row justify-start items-center">
              <p>
              Total
              </p>
            </div>
            <div className="w-2/12 flex flex-row justify-center items-center">
              <p className="font-Pacifico">
              {'$ '+totalPrice}
              </p>
            </div>
            <div className="w-2/12 flex flex-row justify-center items-center">
              <p className="font-Pacifico">
              {totalProductsNumber}
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
            onClick={emptyCart}
            className='border shadow-sm font-Urbanist uppercase p-2 rounded-lg font-extrabold bg-slate-200'>
              emptyCart
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default CartPage