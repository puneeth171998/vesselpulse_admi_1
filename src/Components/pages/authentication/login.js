import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import { json, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

export default function Createlogin() {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    console.log(formData);

    try {
      const res = await fetch("http://localhost:3000/api/admin-login", obj);
      const data = await res.json();
      if (data.accessToken) {
        nav("/dashboard");
      }
      const token = JSON.stringify(data.accessToken);
      localStorage.setItem("accessToken", token);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://img.freepik.com/free-vector/ship-crew-captain-cartoon-poster_1284-20670.jpg?w=1060&t=st=1692545164~exp=1692545764~hmac=2ad74c37fde2fd4a0258e69b1316676a8fe3913bc969ac6cc670ab061eff3c5d)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
             <Typography className=" text-center">
                Admin
              </Typography>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <div style={{display:"flex"}} >
                <FormControl>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    name="email"
                    id="email"
                    aria-describedby="my-helper-text"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <FormControl>
                
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                  type="password"
                    name="password"
                    id="password"
                    aria-describedby="my-helper-text"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </FormControl>
                <br/>
                </div>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
