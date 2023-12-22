import React from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box"
import Card from "@mui/material/Card";
import Vesselimage from '../../assets/images/cruise.png' 
import Owner from '../../assets/images/owner.png'
import Operations from '../../assets/images/operations.png'
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Navbar from "../global/navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from 'react-router-dom';
import "../../dash.css";
import VesselOwners from "./vesselowners";

export default function Dashboard() {
  const navigate= useNavigate();

  return (
    

      <Box sx={{ display: "flex", backgroundColor: "#f2f2f2"}}>
        <Sidenav />

        <Box height={70} />

        <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
          <Navbar />
          <h1 className=" text-3xl font-bold p-2 mt-5 mb-5"> Admin Dashboard</h1>
            <div className=" flex justify-evenly">
  <div>
              <Stack spacing={4} direction="row">
                <Card 
                  sx={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "rgb(241, 242, 244)",
                    border:"3px",
                    borderStyle: "solid",
  borderColor: "red",
                  }}
                >
                  <CardContent>
                    <img src={Vesselimage} style={{width: "60px", margin:"auto"}} ></img>
                    <p className=" text-center text-sm mt-1" component="div">
                          Total Vessels
                        </p>
                    <h1 className=" text-center text-2xl font-bold ">100</h1>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    width: "160px",
                    height: "160px",
                    backgroundColor: "rgb(241, 242, 244)",
                    border:"3px",
                    borderStyle: "solid",
  borderColor: "#0066ff",
                  }}
                >
                  <CardContent >
                  <img src={Owner} style={{width: "60px", margin:"auto"}} ></img>
                  <p className=" text-center text-sm mt-1" component="div">
                          Total Fleet Managers
                        </p>
                    <h1 className=" text-center text-2xl font-bold ">200</h1>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    width: "150px",
                    height: "150px",
                    backgroundColor: "rgb(241, 242, 244)",
                    border:"3px",
                    borderStyle: "solid",
  borderColor: "#cc00ff",
                  }}
                >
                  <CardContent>
                  <img src={Operations} style={{width: "60px", margin:"auto"}} ></img>
                  <p className=" text-center text-sm mt-1 " component="div">
                          Operations
                        </p>

                    <h1 className=" text-center text-2xl font-bold ">200</h1>
                  </CardContent>
                </Card>
              </Stack>
              </div>
              <div>
              <Card sx={{ height: 50 + "vh",width: 70 + "vh" }}>
                <CardContent>
                  <h1 className=" text-white bg-blue-600 p-2 border rounded-md">Signups</h1>
                 <br/>
                  <TableContainer sx={{ height: 30 + "vh" }} component={Paper}>
                    <Table sx={{ width: 400 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Sl. No</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* {rows.map((row) => ( */}
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th">{1}</TableCell>
                          <TableCell>Abraham</TableCell>
                          <TableCell>Pending</TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th">{2}</TableCell>
                          <TableCell>Jeorge</TableCell>
                          <TableCell>Pending</TableCell>
                        </TableRow>
                        {/* ))} */}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br/>
                  <button onClick={()=>{navigate("/Signups")}}  className=" border-2 rounded-full text-xs p-1 border-blue-600 ">See all</button>
                </CardContent>
              </Card>
              </div>
            </div>
        </Box>
      </Box>
   
  );
}
