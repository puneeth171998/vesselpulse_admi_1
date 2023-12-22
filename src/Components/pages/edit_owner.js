import React, { useEffect, useState,useRef  } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MuiAlert from "@mui/material/Alert";

export default function EditVessel() {
    const { id } = useParams(); 

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    license_type: '',
    license_no: '',

  });

  useEffect(() => {
   
    fetchData();
  }, [id]); 
  
  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/Createowner/${id}`);
      const data = await res.json();
      console.log(data.getowner)
      // Update the formData state with the fetched values
      setFormData({
        first_name: data.getowner.first_name,
        last_name: data.getowner.last_name,
        email: data.getowner.email,
        phone: data.getowner.phone, // Populate the "phone" field
        license_type: data.getowner.license_type, // Populate the "license_type" field
        license_no: data.getowner.license_no, // Populate the "license_no" field

      });
      
    } catch (error) {
      console.error(error);
    }
  };
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const formRef = useRef(null); 
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

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
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };

    try {
      const res = await fetch('http://localhost:3000/api/Createowner', obj);
      const data = await res.json();
     
      console.log(data.msg);
    } catch (err) {
      console.error(err);
    }
  };

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
                      value={formData.first_name}
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
                      value={formData.last_name}
                      aria-describedby="my-helper-text"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      name="email"
                      id="email"
                      value={formData.email}
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
                      value={formData.phone}
                      aria-describedby="my-helper-text"
                      maxlength="10"
                      onChange={handleInputChange}
                      required
                    />
                  </FormControl>
                  
                  <FormControl>
                    <InputLabel htmlFor="Licensetype">License Type</InputLabel>
                    <Input
                      name="license_type"
                      id="license_type"
                      value={formData.license_type}
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
                      value={formData.license_no}
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
                  Save Changes
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


//   const { id } = useParams(); 

//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//   });

//   useEffect(() => {
   
//     fetchData();
//   }, [id]); 
  
//   const fetchData = async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/api/Createowner/${id}`);
//       const data = await res.json();
//       console.log(data.getowner)
//       // Update the formData state with the fetched values
//       setFormData({
//         first_name: data.getowner.first_name,
//         last_name: data.getowner.last_name,
//       });
      
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const obj = {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     };

//     try {
//       const res = await fetch('http://localhost:3000/api/Createowner', obj); // Use the appropriate endpoint for updating vessel data
//       const data = await res.json();
     
//       console.log(data.msg);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{margin:"auto"}}>
       
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <InputLabel htmlFor="first_name">First name</InputLabel>
//           <Input
//             name="first_name"
//             id="first_name"
//             aria-describedby="my-helper-text"
//             value={formData.first_name}
//             onChange={handleInputChange}
//           />
//         </FormControl>
//         <FormControl>
//           <InputLabel htmlFor="last_name">Last name</InputLabel>
//           <Input
//             name="last_name"
//             id="last_name"
//             aria-describedby="my-helper-text"
//             value={formData.last_name}
//             onChange={handleInputChange}
//           />
//         </FormControl>
//         <button type="submit" className="left-[71%]">
//           Save Changes
//         </button>
//       </form>
        
//     </div>
//   );
// }