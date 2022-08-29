import { Fragment, useContext } from 'react';
import { Outlet,
  //  Link 
  } from 'react-router-dom';

  import {useSelector} from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

// import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector'

import { ReactComponent as Logo } from '../../assets/logo-01.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen, cartCount } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <NavLinks>
        <NavLink to='/'>BRANDS</NavLink>
          <NavLink to='/shop'>SHOP</NavLink>
{cartCount > 0 ? 
(   <NavLink to='/checkout'>CHECKOUT</NavLink>) : ""
}
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;