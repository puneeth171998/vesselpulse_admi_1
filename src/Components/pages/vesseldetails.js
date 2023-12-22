import React from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import TabContext from '@mui/lab/TabContext';
import Card from "@mui/material/Card";
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from "@mui/material/Typography";
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
export default function Vesseldetails() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 className=" text-3xl font-bold p-2">Vessel Details</h1>
          <div style={{ display: "flex", gap: "50px" }}>
            <Card sx={{ height: 70 + "vh", width: 70 + "vh" }}>
              <CardContent>
                <img style={{ width: "60px", margin: "auto" }}></img>
                <p className=" text-center text-sm mt-1" component="div">
                  Ocean explorer
                </p>
              </CardContent>
            </Card>
            <Card sx={{ height: 50 + "vh", width: 70 + "vh" }}>
              <CardContent>
                <img style={{ width: "60px", margin: "auto" }}></img>
                <Box sx={{ width: "100%" }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Characteristics" value="1" />
            <Tab label="Images" value="2" />
            <Tab label="Captain" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Length: 
        <br/>
        Draft:
        <br/>
        Safety:
        <br/>
        Hull design:
        </TabPanel>
        <TabPanel value="2">Vessel image 1</TabPanel>
        <TabPanel value="3">Captain name:
        <br/>
        Licence
        <br/>
        Phone:
        <br/>
        Email:<br/>
        Address:</TabPanel>
      </TabContext>
    </Box>
                </Box>
              </CardContent>
            </Card>
          </div>
        </Box>
      </Box>
    </>
  );
}
