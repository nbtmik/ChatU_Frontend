// import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react';
// import {CameraAlt as CameraAltIcon} from "@mui/icons-material";
// // import { VisuallyHiddenInput } from '../componenets/styles/StyledComponents';
// import {useFileHandler, useInputValidation, useStrongPassword} from "6pp";
// // import { usernameValidator } from '../utils/validators';
// import {Navigate} from "react-router-dom";

// const isAdmin = false;

// const AdminLogin = () => {
//     const secretKey = useInputValidation("");
//     const submitHandler=(e)=>{
//         e.preventDefault();
//         console.log("submit");
//     };
//     if(isAdmin) return <Navigate to="/admin/dashboard" />
//   return (
//     <div style={{
//         backgroundImage:"linear-gradient(rgba(203,18,18,0.5),rgba(120,110,220,0.5))",
//     }}>
//     <Container component={"main"} maxWidth="xs" sx={{
//         height:"100vh",
//         display:"flex",
//         justifyContent:"center",
//         alignItems:"center",
//     }}>
//         <Paper elevation={3} sx={{padding:4,display:'flex',flexDirection:"column",alignItems:"center"}}>
//                  <>
//                     <Typography variant='h5'>Admin Login</Typography>
//                     <form style={{
//                         width:"100%",
//                         margin:"1rem",
//                     }}
//                     onSubmit ={submitHandler}
//                     >
//                         <TextField required fullWidth label="Secret Key" value={secretKey.value} type='password' margin='normal' varient="outlined" onChange={secretKey.changeHandler} />
//                         <Button sx={{marginTop:"1rem"}} variant='contained' color='primary' type='submit' fullWidth>Login</Button>
//                     </form>
//                 </> 
//         </Paper>
//     </Container>
//     </div>
//   )
// }

// export default AdminLogin

import { useInputValidation } from "6pp";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { bgGradient } from "../../constants/color";
import { adminLogin, getAdmin } from "../../redux/thunks/admin";

const AdminLogin = () => {
  const { isAdmin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const secretKey = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(adminLogin(secretKey.value));
  };

  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

  if (isAdmin) return <Navigate to="/admin/dashboard" />;

  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />

            <Button
              sx={{
                marginTop: "1rem",
              }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;