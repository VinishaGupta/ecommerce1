import "./styles/Cart.css";

const Cart = () => {
  return (
    <div className="cart-empty">
      <div className="cart-content">
        <div className="cart-icon">👜</div>
        <h2>Your bag is empty</h2>
        <p>
          Looks like you haven't added anything to your bag yet.
          Browse our collection to find your new essentials.
        </p>
        <button className="cart-btn">Start Shopping</button>
      </div>
    </div>
  );
};

export default Cart;
