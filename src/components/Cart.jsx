import React from "react";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
      <h2>Cart</h2>
      <ul className="list-group mb-3">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.name} - Quantity: {item.quantity}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};
export default Cart;
