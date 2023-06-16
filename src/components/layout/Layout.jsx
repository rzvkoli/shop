import { useState } from "react";
import NavBar from "../NavBar";
import APIContext from "../../context/ApiContext";
import ResultSearchContext from "../../context/ResultSearchContext";
import CartContext from "../../context/CartContext";

function Layout({ children }) {

  const [products , setProducts] = useState('');
  const [resultSearch , setResultSearch] = useState('');
  const [cart , setCart] = useState([]);

  return (
    <APIContext.Provider value={[products , setProducts]}>
      <ResultSearchContext.Provider value={[resultSearch , setResultSearch]}>
      <CartContext.Provider value={[cart , setCart]}>
        <header className="h-20 fixed w-full max-lg:hidden max-md:hidden max-sm:hidden">
          <NavBar />
        </header>
        <main className="pt-20 max-lg:hidden max-md:hidden max-sm:hidden">
          {children}
        </main>
      </CartContext.Provider>
      </ResultSearchContext.Provider>
    </APIContext.Provider>
  );
}

export default Layout