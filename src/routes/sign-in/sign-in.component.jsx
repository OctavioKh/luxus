// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import Button from "../../components/button/button.component";

import {
//   auth,
  signInWithGooglePopup,
//   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

// import { async } from "@firebase/util";

const SignIn = () => {
//   useEffect(() => {
//     async function importarRedireccion() {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//       }
//     }
//     importarRedireccion();
//   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // createUserDocumentFromAuth(user);
    // console.log(user);
    // alert("succes!");
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Button onClick={logGoogleUser}>Sign in with GOOGLE pop-up</Button>
      <SignUpForm/>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with GOOGLE Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
