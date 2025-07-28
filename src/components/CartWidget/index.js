import "./cartwidget.css"

const CartWidget = () => {
  return (
    <div>
      <button className="cart">
        <span className="cart-logo">🛒</span>
        <span>0</span>
      </button>
    </div>
  );
};

export default CartWidget;
