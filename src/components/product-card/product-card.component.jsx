import { useContext,
  //  useState 
  } from "react";
// import Modal from 'react-bootstrap/Modal';


import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const ProductCard = ({ product }) => {
  // const [modal, isModalOpen] = useState(false);
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
