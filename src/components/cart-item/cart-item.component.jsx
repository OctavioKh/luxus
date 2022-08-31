import { useSelector, useDispatch } from "react-redux";
import {
    removeItemFromCart,
  } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price, title } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <>
      <div className="cart-item-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="item-details">
          <span className="name">{title}</span>

          <span className="name">{name}</span>
          <span>
            {quantity}x ${price}
          </span>
        </div>
        <span className="close" onClick={removeItemHandler}>
          <b>—</b>
          {/* <i className="icon-minus-sign"></i> */}
        </span>
      </div>
    </>
  );
};

export default CartItem;
