import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react"
import { CryptoState } from "../../CryptoContext";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const inputStyles = {
  "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "white" }, 
      "&:hover fieldset": { borderColor: "lightgray" }, 
      "&.Mui-focused fieldset": { borderColor: "white" }, 
  },
  "& .MuiInputLabel-root.Mui-focused": {
        color: "white", 
    },
  input: { color: "white" }, 
  label: { color: "white" }, 
};

const LoginPage = ({handleClose}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const { setAlert } = CryptoState();

    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!email || !password) {
          setAlert({
            open: true,
            message: "Please fill all the Fields",
            type: "error",
          });
          return;
        } 
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setAlert({
              open: true,
              message: `Login Successful. Welcome ${result.user.email}`,
              type: "success",
            });
      
            handleClose();
            // const handleClick = () => {
                navigate("/Homepage")
            // }
          } catch (error) {
            setAlert({
              open: true,
              message: error.message,
              type: "error",
            });
            return;
          }
        };

    return(
        <Box p={3}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField variant="outlined"
                type="email"
                label="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth 
                sx = {inputStyles}/>

            <TextField variant="outlined"
                type="password"
                label="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth 
                sx = {inputStyles}/>

            <Button variant="contained" size="large" style={{backgroundColor:"#EEBC1D"}} 
            onClick={handleSubmit}>
                LOGIN
            </Button>
            </Box>
    )
}

export default LoginPage