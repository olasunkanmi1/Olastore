import React from 'react'
import { useState, useEffect } from 'react'
import { commerce } from './lib/Commerce'

//components
import { Navbar, Products, Cart } from './components'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); 

    setProducts(data);
  }
  
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const addProduct = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);

    setCart(response.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  console.log(products);
  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} addToCart={addProduct} />   */}
      <Cart cart={cart} />
    </div>
  )
}

export default App;