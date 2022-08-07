import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signup } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import GoogleSignIn from "./GoogleSignIn";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function SignUp({ setIsSignup }) {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(form, navigate));
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => {
                  setForm({ ...form, firstName: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(e) => {
                  setForm({ ...form, lastName: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Sign Up
          </Button>

          <Box textAlign="center">
            <Link href="#" variant="body2" onClick={() => setIsSignup(true)}>
              Already have an account? Sign in
            </Link>
          </Box>

          <Typography component="h2" marginTop={2}>
            <Divider>or</Divider>
          </Typography>
          <GoogleSignIn />
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
