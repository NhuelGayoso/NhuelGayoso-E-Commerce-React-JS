import { createContext, useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./app.css";

// Crear el contexto del carrito
export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar items al carrito
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Función para remover items del carrito
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter((item) => item.id !== itemId);
      }
    });
  };

  // Calcular el total de items en el carrito
  const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    cartTotal,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <div className="App">
        <NavBar />
        <div className="items">
          <ItemListContainer />
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
