import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 5px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none;  
  scrollbar-width: none;  
  &::-webkit-scrollbar {
        display: none;
  }
    
      
`;




// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: 8;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//     // // overflow-y: hidden;
//     // overflow-x: hidden;

    
//   }

//   .cart-items::-webkit-scrollbar {
//     display: none;
//   }
  
//   /* Hide scrollbar for IE, Edge and Firefox */
//   .cart-items {
//     -ms-overflow-style: none;  /* IE and Edge */
//     scrollbar-width: none;  /* Firefox */
//   }

//   button {
//     margin-top: auto;
//   }
// }
