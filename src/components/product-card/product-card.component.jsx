// import { useContext,
//   //  useState 
//   } from "react";
// // import Modal from 'react-bootstrap/Modal';

import {useDispatch, useSelector} from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';


// import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const ProductCard = ({ product }) => {
  // const [modal, isModalOpen] = useState(false);
    // const { addItemToCart } = useContext(CartContext);

  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

// const openImageHandler = () => {
//   isModalOpen(true);
// }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} 
      // onClick={openImageHandler} 
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to Cart
      </Button>
      {/* <Modal modal={modal}></Modal> */}
    </div>

  );
};

export default ProductCard;
