import React, { useEffect, useState } from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../global/navbar";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers,faCircleExclamation,faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

export default function Vesselowners() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   getData();
  // }, []);
  // const getData = () => {
  //   fetch("http://localhost:3000/api/captain")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.captain));
  // };

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
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 className=" text-3xl font-bold p-2">Signups</h1>
          
          <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Dashboard
  </Link>
 
  <Typography color="text.primary">Signups</Typography>
</Breadcrumbs>
<br />
          <Grid container spacing={2}>
            <Grid item xs={8} style={{
                    width: "200px",
                    height: "90px",
                  }}>
              <Stack spacing={2} direction="row">
                <Card
                  style={{
                    width: "200px",
                    height: "90px",
                    backgroundColor: "rgb(241, 242, 244)",
                  }}
                >
                  <CardContent>
                    <div className=" grid grid-cols-2">
                      <div>
                        <FontAwesomeIcon
                          className=" w-10 h-auto ml-3 mt-3 "
                          icon={faUsers} style={{color: "#0000ff",}}
                        />
                      </div>
                      <div className="">
                        <p className=" text-center text-xs" component="div">
                          Total Signups
                        </p>
                        <h1 className=" text-center text-2xl font-semibold ">
                          500
                        </h1>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
              </Stack>
            </Grid>
          </Grid>
          <br />
          <TableContainer component={Paper}>
            <Table sx={{ Width: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Sl. No</StyledTableCell>
                  <StyledTableCell>Fleet Manager Name</StyledTableCell>
                  <StyledTableCell>Vessels</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>License ID Type</StyledTableCell>
                  <StyledTableCell>License No.</StyledTableCell>
                  <StyledTableCell>Date / Time</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {/* {data.map((data) => ( */}
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      1
                    </StyledTableCell>
                    <StyledTableCell>Fleet Manager</StyledTableCell>
                    <StyledTableCell>Na</StyledTableCell>
                    <StyledTableCell>fm@gmail.com</StyledTableCell>
                    <StyledTableCell>+91 8795744885</StyledTableCell>
                    <StyledTableCell>DL</StyledTableCell>
                    <StyledTableCell>00000000000</StyledTableCell>
                    <StyledTableCell>12/7/23 , 11:24</StyledTableCell>
                    <StyledTableCell>Approved</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      2
                    </StyledTableCell>
                    <StyledTableCell>Fleet Manager</StyledTableCell>
                    <StyledTableCell>Na</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell>+91 2879957777</StyledTableCell>
                    <StyledTableCell>DL</StyledTableCell>
                    <StyledTableCell>00000000000</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell>Pending</StyledTableCell>
                  </StyledTableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}
