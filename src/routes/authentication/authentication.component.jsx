// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss'
// import Button from "../../components/button/button.component";

// import {

//   //   auth,
//   //   signInWithGoogleRedirect,
  
//   signInWithGooglePopup,
//     createUserDocumentFromAuth,
//   } from "../../utils/firebase/firebase.utils";
// import {signInWithGooglePopup,
//  createUserDocumentFromAuth,} from "../../utils/firebase/firebase.utils";

// import { async } from "@firebase/util";

const Authentication = () => {
//   useEffect(() => {
//     async function importarRedireccion() {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//       }
//     }
//     importarRedireccion();
//   }, []);



  return (
    <div className="authentication-container">
      {/* <Button onClick={logGoogleUser}>Sign in with GOOGLE pop-up</Button> */}
      <SignInForm/>
      <SignUpForm/>

      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with GOOGLE Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
