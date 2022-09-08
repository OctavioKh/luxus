import { FC } from 'react';

import { useSelector, useDispatch } from "react-redux";
import {
    removeItemFromCart
  } from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";
import {CartItemContainer, ItemDetails, Close } from "./cart-item.styles";
import { CartItem as TCartItem } from '../../store/cart/cart.types';


type CartItemProps = {
  cartItem: TCartItem;
};



const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price, title } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const removeItemHandler = () =>
  dispatch(removeItemFromCart(cartItems, cartItem));


  return (
    <>
      <CartItemContainer>
        <img src={imageUrl} alt={`${name}`} />
        <ItemDetails>
          <span className="name">{title}</span>

          <span className="name">{name}</span>
          <span>
            {quantity}x ${price}
          </span>
        </ItemDetails>
        <Close onClick={removeItemHandler}>
          <b>—</b>
        </Close>
      </CartItemContainer>
    </>
  );
};

export default CartItem;
