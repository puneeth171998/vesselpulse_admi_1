import React, { useEffect, useState } from "react";
import Sidenav from "../Sidenav";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../global/navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip, faUser } from "@fortawesome/free-solid-svg-icons";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate, useParams  } from "react-router-dom";

export default function VesselOwnersdetails() {
  const [data, setData] = useState([]);
  const id = useParams().id;

  const [open, setOpen] = React.useState(false);
  const [editData, setEditData] = useState(null); //for edit daata
  const navigate = useNavigate();
    useEffect(() => {
      getData();
    }, []);
    const getData = () => {
      fetch("http://localhost:3000/api/vesselReg")
        .then((res) => res.json())
        .then((data) => {
          const ownerDetails = data.newReg.filter((item) => {
            return item.vessel_owner==id;
          });
          console.log(id)
          console.log(data.newReg)
          console.log("Filtered Data:", ownerDetails);
    
          setData(ownerDetails);
        });
  
        
    };
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1486f7",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const deleteHan = async (id) => {
    console.log("first");
    try {
      await fetch(`http://localhost:3000/api/Createowner/${id}`, {
        method: "DELETE",
      });
      //   getData();
      setSnackbarMessage(data.msg);
      setSnackbarOpen(true); // Show Snackbar
      handleClose();
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  let counter = 1;

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const [opens, setOpens] = React.useState(false);
  const [createopens, setcreateOpens] = React.useState(false);
  const handleClickOpens = () => {
    setcreateOpens(true);
  };
  const handleCloses = () => {
    setcreateOpens(false);
  };
  const edithandleClickOpens = () => {
    setOpens(true);
  };
  const edithandleClickCloses = () => {
    setOpens(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Navbar />
          <h1 className=" text-3xl font-bold p-2">Vessel Owners</h1>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={8}>
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
                          className=" w-9 h-auto ml-3 mt-2 "
                          icon={faUser}
                        />
                      </div>
                      <div className="">
                        <p className=" text-center text-xs" component="div">
                          Total vessel Owners
                        </p>
                        <h1 className=" text-center text-2xl font-semibold ">
                          200
                        </h1>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{
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
                          icon={faShip}
                        />
                      </div>
                      <div className="">
                        <p className=" text-center text-xs" component="div">
                          Total Vessels
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
                  <StyledTableCell>Vessel Name</StyledTableCell>
                  <StyledTableCell>Captain Name</StyledTableCell>
                  <StyledTableCell>MMSI</StyledTableCell>
                  <StyledTableCell>Vessel Type</StyledTableCell>
                 

                </TableRow>
              </TableHead>

              <TableBody>
                
                {data.map((data) => (
                 
                  <StyledTableRow key={id}>
                    <StyledTableCell component="th" scope="row">
                      {counter++}
                    </StyledTableCell>
                    <StyledTableCell>{data.vessel_name}</StyledTableCell>
                    <StyledTableCell>{data.captain_name}</StyledTableCell>
                    <StyledTableCell>{data.MMSI}</StyledTableCell>
                   
                    <StyledTableCell>{data.vessel_type}</StyledTableCell>
                    {/* <StyledTableCell style={{ display: "flex", gap: "5px" }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClickOpen}
                      >
                        <DeleteIcon></DeleteIcon>
                      </Button>

                      
                      
                     
                    </StyledTableCell> */}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
