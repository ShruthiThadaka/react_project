import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react"
import { CryptoState } from "../../CryptoContext";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


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

const Signup = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { setAlert } = CryptoState();

    const handleSubmit = async() => {
        if (password !== confirmPassword) {
            setAlert({
                open: true,
                message: "Passwords do not match",
                type: "error",
            });
            return;
        }
        try {
            const result = await createUserWithEmailAndPassword(auth,email,password);
            setAlert({
                open: true,
                message: `Sign Up Successful. Welcome ${result.user.email}`,
                type: "success",
            });

            handleClose();
        } catch (error) {
            setAlert({
                open: true,
                message: error.message,
                type: "error",
            });
            return;
        }
    };


    return (
        // <div style={{color:"black"}}>
        //     Signup
        // </div>
        <Box p={3}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <TextField variant="outlined"
                type="email"
                label="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth sx={inputStyles}/>

            <TextField variant="outlined"
                type="password"
                label="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth sx={inputStyles}/>

            <TextField variant="outlined"
                type="password"
                label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} fullWidth sx={inputStyles}/>

            <Button variant="contained" size="large" style={{ backgroundColor: "#EEBC1D" }}
                onClick={handleSubmit}>
                Sign Up
            </Button>
        </Box>
    )
}

export default Signup