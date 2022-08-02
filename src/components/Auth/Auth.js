import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <>
      {isSignup ? (
        <SignIn setIsSignup={setIsSignup} />
      ) : (
        <SignUp setIsSignup={setIsSignup} />
      )}
    </>
  );
}

export default Auth;
