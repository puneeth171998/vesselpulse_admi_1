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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip, faUser } from "@fortawesome/free-solid-svg-icons";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Createowner from "./create_vesselowner";
import Editowner from "./edit_owner";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function VesselOwners() {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [countdata, setcountData] = useState([]); 
  const [editData, setEditData] = useState(null); //for edit daata
  const navigate = useNavigate();
  console.log(countdata)
  useEffect(() => {
    getData();
    getvesselData();
  }, []);
  const getData = () => {
    fetch("http://localhost:3000/api/Createowner")
      .then((res) => res.json())
      .then((data) => setData(data.getowner));
     
  };
  
const getvesselData =() =>{
  fetch("http://localhost:3000/api/vesselReg")
  .then((res) => res.json())
  .then((data) => setcountData(data.newReg));
}

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
      getData();
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
                          {data.length}
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
          <Button onClick={handleClickOpens}>Create</Button>
          <TableContainer component={Paper}>
            <Table sx={{ Width: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Sl. No</StyledTableCell>
                  <StyledTableCell>First Name</StyledTableCell>
                  <StyledTableCell>Last Name</StyledTableCell>
                  <StyledTableCell>Email ID</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>No of Vessels</StyledTableCell>
                  
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((data) => {

                  const myVessel = countdata?.filter((item)=>{
                    // console.log(item)
                    return (item?.vessel_owner === data?._id)
                  })                  
                  return(
                  <StyledTableRow key={data._id}>
                    <StyledTableCell component="th" scope="row">
                      {counter++}
                    </StyledTableCell>
                    <StyledTableCell>{data.first_name}</StyledTableCell>
                    <StyledTableCell>{data.last_name}</StyledTableCell>
                    <StyledTableCell>{data.email}</StyledTableCell>
                    <StyledTableCell>{data.phone}</StyledTableCell>
                    <StyledTableCell>{myVessel?.length}</StyledTableCell>
                    
                    <StyledTableCell style={{ display: "flex", gap: "5px" }}>
                    <Link
      to={`/edit_owner/${data._id}`}
      state={{ ownerData: data }}
    >
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={edithandleClickOpens}
                      >
                        <EditIcon />
                      </Button>
                          </Link>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClickOpen}
                      >
                        <DeleteIcon></DeleteIcon>
                      </Button>
                      <Link
      to={`/vesselowner_details/${data._id}`}
      
    >
                      <Button>
                      <ArrowForwardIosIcon/>
                      </Button>
                      </Link>
                      <Box>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                          style={{ width: "35%", margin: "auto" }}
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"Are you sure to delete?"}
                          </DialogTitle>
                          <DialogContent>
                            {/* <DialogContentText id="alert-dialog-description">
                                Are you sure to delete the selected field? Once
                                you delete the field you will not be able to
                                retrieve it back.
                              </DialogContentText> */}
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button
                              onClick={() => deleteHan(data._id)}
                              autoFocus
                            >
                              Yes
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </Box>
                      <Box>
                        <div>
                          <Dialog open={createopens} onClose={handleCloses}>
                            <DialogTitle>Create Vessel Owner</DialogTitle>
                            <DialogContent>
                              <Createowner />
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleCloses}>Cancel</Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                        <div>
                        <Dialog open={opens} onClose={edithandleClickCloses}>
            <DialogTitle>Edit Vessel Owner</DialogTitle>
            <DialogContent>
              {/* Pass the editData to the Editowner component */}
              <Editowner data={editData} />
            </DialogContent>
            <DialogActions>
              <Button onClick={edithandleClickCloses}>Cancel</Button>
            </DialogActions>
          </Dialog>
                        </div>
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                )})}
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
