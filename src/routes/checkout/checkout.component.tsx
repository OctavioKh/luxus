import {useSelector} from 'react-redux';

import { selectCartItems, selectCartTotal, selectCartCount } from '../../store/cart/cart.selector';

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from '../../components/payment-form/payment-form.component'

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';


const Checkout = () => {
  const cartItems =  useSelector(selectCartItems);
  const cartTotal =  useSelector(selectCartTotal);
  const cartCount =  useSelector(selectCartCount);
  return (
    <CheckoutContainer>
        <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        // const { id, name, quantity } = cartItem;

        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      {cartCount > 0 ? ("") : (<h3>Your cart is empty</h3>)}
      <Total className="total">Total: ${cartTotal}</Total>
      <PaymentForm/>     
    </CheckoutContainer>
  );
};

export default Checkout;
