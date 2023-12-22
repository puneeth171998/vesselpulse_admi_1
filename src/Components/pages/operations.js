import React, { useEffect, useState } from 'react'
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";
import "leaflet/dist/leaflet.css"
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";

import Navbar from "../global/navbar";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { Icon } from "leaflet";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

export default function Operations() {
  
  const customIcon = new Icon({
    iconUrl: require ("../../assets/images/navigation.png"),
    iconSize: [38,38]
  })
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1486f7",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));




  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Navbar />
          <h1 className=" text-3xl font-bold p-2">Operations</h1>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card style={{ width: "250px",height:"80px",backgroundColor:"rgb(241, 242, 244)" }} >
                  <CardContent>
                  <div className=" flex gap-8 ">
                      <div>
                       <h1 className=' text-5xl font-bold text-blue-500'>5</h1>
                      </div>
                      <div className="">
                        <p className=" text-center text-md" component="div">
                          Number of Fishing vessels
                        </p>
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
            
              </Stack>
            </Grid>
          </Grid>
          <br/>
          <Card sx={{ height: 60 + "vh" }}>
              <CardContent>
                <MapContainer
                  style={{ height: "100vh" }}
                  center={[12.884019, 74.821096]}
                  zoom={12}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[12.884019, 74.821096]} icon={customIcon}>
                    <Popup>
                      Vessel 1
                    </Popup>
                  </Marker>
                  <Marker position={[12.883283, 74.821721]} icon={customIcon}>
                    <Popup>
                      Vessel 2
                    </Popup>
                  </Marker>
                  
                  <Marker position={[12.884474, 74.821454]} icon={customIcon}>
                    <Popup>
                      Vessel 3
                    </Popup>
                  </Marker>
                  
                  <Marker position={[12.886723, 74.818504]} icon={customIcon}>
                    <Popup>
                      Vessel 4
                    </Popup>
                  </Marker>
                </MapContainer>
              </CardContent>
            </Card>
        </Box>
      </Box>
    </>
  );
}
