import React from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AUTH } from "../../constants/actionTypes";
import { Box } from "@mui/material";
function GoogleSignIn() {
  const dispatch = useDispatch();

  const googleSuccess = async (res) => {
    const result = jwt_decode(res.credential);
    const token = res.credential;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      window.location.reload();
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try again later");
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENTID}
      >
        <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
      </GoogleOAuthProvider>
    </Box>
  );
}

export default GoogleSignIn;
