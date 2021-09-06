import React from 'react'
import { useState, useEffect } from 'react'
import { commerce } from './lib/Commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//components
import { Navbar, Products, Cart, Checkout } from './components'

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
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const updateProductQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  const removeFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  // console.log(products);
  // console.log(cart);

  return (
    <Router>
      <Navbar 
        totalItems={cart.total_items} 
        totalCost={(cart.subtotal &&
                    cart.subtotal.formatted_with_symbol) ||
                    "00.00"} 
      />
      <Switch>
        <Route exact path="/">
          <Products products={products} addToCart={addProduct} />
        </Route>

        <Route exact path="/cart">
          <Cart 
            cart={cart} 
            updateProductQty={updateProductQty}
            removeFromCart={removeFromCart}
            emptyCart={emptyCart}
          />
        </Route>
        
        <Route exact path="/checkout">
          <Checkout cart={cart} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;