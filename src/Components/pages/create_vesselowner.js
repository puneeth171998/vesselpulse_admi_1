import React, { useEffect, useState,useRef  } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";

export default function Createvesselowner() {
    const [formData, setFormData] = useState({
    first_name: "",
    last_name:"",
    email:"",
    phone:"",
    password:"",
    cpassword:"",
    license_type:"",
    license_no:"",
    });
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const formRef = useRef(null); 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.cpassword) {
      window.alert("Passwords do not match");
        return; // Exit the function without submitting
      }

    const obj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const res = await fetch("http://localhost:3000/api/Createowner", obj);
      const data = await res.json();
      
      console.log(data.msg);
      formRef.current.reset(); 
      setSnackbarMessage(data.msg);
      setSnackbarOpen(true); // Show Snackbar
      
    } catch (err) {
      console.error(err);
    }
  };


  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <>
      <Box sx={{ display: "flex" }}>
        
        <Box component="main">
<div style={{display:"flex",justifyContent:"center"}}>
          <Card sx={{ height: 80 + "vh", width: 70 + "vh"}}>
            <CardContent>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <FormControl>
                    <InputLabel htmlFor="first_name">First Name</InputLabel>
                    <Input
                      name="first_name"
                      id="first_name"
                      aria-describedby="my-helper-text"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="last_name">Last Name</InputLabel>
                    <Input
                      name="last_name"
                      id="last_name"
                      aria-describedby="my-helper-text"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="Email">Email</InputLabel>
                    <Input
                      name="email"
                      id="email"
                      aria-describedby="my-helper-text"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="Phone">Phone</InputLabel>
                    <Input
                    type="number"
                      name="phone"
                      id="phone"
                      aria-describedby="my-helper-text"
                      maxlength="10"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="Password">Create Password</InputLabel>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      aria-describedby="my-helper-text"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="ConfirmPassword">
                      Confirm Password
                    </InputLabel>
                    <Input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      aria-describedby="my-helper-text"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="Licensetype">License Type</InputLabel>
                    <Input
                      name="license_type"
                      id="license_type"
                      aria-describedby="my-helper-text"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="Licensenumber">License No</InputLabel>
                    <Input
                      name="license_no"
                      id="license_no"
                      aria-describedby="my-helper-text"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </Box>
        <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
          severity="success"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      </Box>
    </>
  );
}
