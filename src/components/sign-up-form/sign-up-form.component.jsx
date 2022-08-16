import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayname, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords dont match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayname });
      resetFormFields();
      console.log(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2> Don't have an account?</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
       
        <FormInput
        label="Name"
          type="text"
        //   placeholder="ayo"
          required
          onChange={handleChange}
          name="displayname"
          value={displayname}
        />
        <FormInput
        label="E-mail"
          type="email"
        //   placeholder="ayo"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
         <FormInput
        label="Password"
          type="password"
        //   placeholder="ayo"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
         <FormInput
        label="Confirm Password"
          type="password"
        //   placeholder="ayo"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
