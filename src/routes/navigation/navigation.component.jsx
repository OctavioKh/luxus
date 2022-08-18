import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import {ReactComponent as Logo} from '../../assets/logo-01.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
const { currentUser} = useContext(UserContext);
const {isCartOpen} = useContext(CartContext)


// console.log(currentUser);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/checkout">
            CHECKOUT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span> 
            ) : (  <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>)}
         <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </>
  );
}; 

export default Navigation;
