import "./cartwidget.css";
import { useState } from "react";

const CartWidget = () => {
  const [counter, setCounter] = useState(0);
  

  return (
    <div>
      <button className="cart">
        <span className="cart-logo">🛒</span>
        <span value={counter}></span>
      </button>
    </div>
  );
};

export const resta = () => {
  
};

export const suma = () => {
  
};

export default CartWidget;
