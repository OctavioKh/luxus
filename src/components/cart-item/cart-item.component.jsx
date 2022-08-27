import './cart-item.styles.scss';

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';


const CartItem = ({cartItem}) => {
    const {removeItemFromCart} = useContext(CartContext);

    const removeItemHandler = () => removeItemFromCart(cartItem)


    const {name, quantity, imageUrl, price, title} = cartItem;

    return(
        <>

        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>
            <span className='name'>{title}</span>

            <span className='name'>{name}</span>
            <span>{quantity}x ${price}</span>

            </div>
            <span className='close' onClick={removeItemHandler}>
            <b>—</b>
                {/* <i className="icon-minus-sign"></i> */}
            
            </span>


        </div>
        
        </>
    )
}

export default CartItem;