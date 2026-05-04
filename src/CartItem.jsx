import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = items.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: (item.quantity || 1) + 1 }))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(updateQuantity({ id: item.id, quantity: (item.quantity || 1) - 1 }))
            }
          >
            -
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>

          <p>Total: ${item.price * (item.quantity || 1)}</p>
        </div>
      ))}

      <h3>Total Amount: ${totalAmount}</h3>

      <button>Checkout</button>
    </div>
  );
}

export default CartItem;
