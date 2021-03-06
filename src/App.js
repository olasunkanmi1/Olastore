import React from 'react'
import { useState, useEffect } from 'react'
import { commerce } from './lib/Commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from "./GlobalStyles";

//components
import { Navbar, Footer, Products, Cart, Checkout } from './components'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); 

    setProducts(data);
  }
  
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

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

  const refreshCart = async () => {
    const response = await commerce.cart.refresh();

    setCart(response);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(products);
  // console.log(cart);

  return (
    <Router>
      <GlobalStyles />
      <Navbar 
        totalUniqueItems={cart.total_unique_items}
        totalItems={cart.total_items} 
        totalCost={(cart.subtotal &&
                    cart.subtotal.formatted_with_symbol) ||
                    "00.00"} 
      />
      <Switch>
        <Route exact path="/">
          <Products products={products} addToCart={addProduct} removeFromCart={removeFromCart} />
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
          <Checkout 
            cart={cart} 
            order={order}
            onCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}
            refreshCart={refreshCart}
          />
        </Route>
      </Switch>
      <Footer /> 
    </Router>
  )
}

export default App;