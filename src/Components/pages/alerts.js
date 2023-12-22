import React, { useEffect } from "react";
import { useState } from "react";
import Sidenav from "../Sidenav";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Input, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Navbar from "../global/navbar";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useParams } from 'react-router-dom'; 

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Alerts() {

  const { id } = useParams(); 

  const [alert_message, setAlert_message] = useState({
    alert_message:'',

  });

  useEffect(() => {
   
    fetchData();
  }, [id]); 
  console.log(alert_message)

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/Createowner/${id}`);
      const data = await res.json();
      console.log(data.getowner)
      // Update the formData state with the fetched values
      setAlert_message({
        alert_message: data.getowner.alert_message,
      });
      
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  const [value, setValue] = React.useState(0);
  const token = JSON.parse(localStorage.getItem("accessToken"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChanges = (event) => {
    const {
      target: { value },
    } = event;
    const selectedOwner = ownerName.find((item) => item.first_name === value);

    if (selectedOwner) {
      console.log(selectedOwner._id);
      setSelectedOwnerId(selectedOwner._id);
      console.log(selectedOwnerId) // Store the selected owner's id.
      setSelectedOwnerName(selectedOwner.first_name); // Store the selected owner's name.
    }
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [selectedOwnerId, setSelectedOwnerId] = useState(""); // Initialize with an empty string.
  const [selectedOwnerName, setSelectedOwnerName] = useState(""); // Initialize with an empty string.

  const [ownerName, setOwnerName] = useState([]);
  useEffect(() => {
    getVessels();
  }, []);
  const getVessels = async () => {
    fetch("http://localhost:3000/api/Createowner")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.getowner);
        const ownernames = data.getowner.filter((item) => {
          return item.first_name;
        });

        console.log("Filtered Data:", ownernames);
        setOwnerName(ownernames);
      });
  };

    
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {alert_message}

    const obj = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(`http://localhost:3000/api/Createowner/${selectedOwnerId}`, obj);
      const data = await res.json();  
     
      console.log(alert_message);
    } catch (err) {
      console.error(err);
    }
  };


 
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Navbar />
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Vessels" {...a11yProps(1)} />
              <Tab label="Send Alerts" {...a11yProps(0)} />
            </Tabs>
          </Box>

          <CustomTabPanel value={value} index={1}>
            <div className=" ml-80">
              <Card sx={{ height: 50 + "vh", width: 100 + "vh" }}>
                <div>
                  <h1 className=" text-2xl text-center font-bold">
                    VESSEL ALERTS
                  </h1>
                </div>

                <div className=" flex gap-5 mt-5">
                  <div className=" ml-12">
                    <FormControl sx={{ m: 1, width: 280 }}>
                      <InputLabel id="demo-multiple-name-label" size="small">
                        Vessel Owners
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={personName}
                        onChange={handleChanges}
                        input={<OutlinedInput label="Name" />}
                        MenuProps={MenuProps}
                        size="small"
                      >
                        {ownerName?.map((item, i) => {
                          return (
                            <MenuItem key={i} value={item.first_name}>
                              {item.first_name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className=" ml-14 mt-5">
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: "100%",
                    }}
                  >
                    <FormControl>
                    <Input
                      fullWidth
                      label="Message"
                      id="fullWidth"
                      size="small"
                      
                      onChange={(e)=>setAlert_message(e.target.value)}

                    />
                    </FormControl>
                  </Box>
                </div>
                
                <div className=" mt-5 ml-64">
                  <Button variant="contained" onClick={handleSubmit}>Send</Button>
                </div>
              </Card>
            </div>
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
}