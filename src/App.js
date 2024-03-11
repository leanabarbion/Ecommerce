import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import inventory from "./components/data/inventory.json"; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);
  const onRemoveFromCart = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems)); // Update localStorage
  };
  useEffect(() => {
    // Load cart items from localStorage when the app loads
    const savedCartItems = localStorage.getItem('cart');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);
      let newItems;
  
      if (existingItem) {
        // Check against inventory for available quantity
        const productInventory = inventory.find(item => item.id === productToAdd.id);
        if (existingItem.quantity < productInventory.quantity) {
          newItems = prevItems.map(item =>
            item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          alert("Cannot add more of this item, stock limit reached.");
          return prevItems;
        }
      } else {
        newItems = [...prevItems, { ...productToAdd, quantity: 1 }];
      }
  
      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    });
  };
  

  return (
    <div className="App container">
      <h1 className="text-center mt-4">E-Commerce App</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList onAddToCart={handleAddToCart} />
        </div>
        <div className="col-md-4">
          <Cart cartItems={cartItems} setCartItems={setCartItems} onRemoveFromCart={onRemoveFromCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;
