import { AppBar, Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "../Components/Authentication/LoginPage";
import Signup from "../Components/Authentication/Signup";
import { makeStyles } from "@mui/styles";
import { CryptoState } from "../CryptoContext";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Alert from "../Components/Alert";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import cryptoLogo from '../assets/crypto.png';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    google: {
        padding: 24,
        paddingTop: 0,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 20,
        fontSize: 20,
    },
    home: {
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "50px",
        padding: "20px"
    },
    box: {
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: 20,
        display:"flex",
        flexDirection:"column"
    }

}))

const Login = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { setAlert } = CryptoState();

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        navigate("/HomePage")
    }

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then(res => {
            setAlert({
                open: true,
                message: `Sign Up Successful. Welcome ${res.user.email}`,
                type: "success",
            });

            handleClose();
            handleClick();
        }).catch((error) => {
            setAlert({
                open: true,
                message: error.message,
                type: "error",
            });
            return;
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.home}
             sx={{flexDirection: isMobile ? "column" : isTablet ? "row" : "row",
                gap: isMobile ? "20px" : isTablet ? "30px" : "50px",
                padding: isMobile ? "10px" : isTablet ? "15px" : "20px",
                alignItems:"center"
            }}>
                <Box className={classes.box}>
                    {/* <Typography variant="h3">CryptoHub</Typography> */}
                    <img src={cryptoLogo} alt="CryptoHub Logo" width={isMobile ? "250px" :isTablet ? "350px" : "500px"} height={isMobile ? "125px" : isTablet ? "200px" : "250px"} />
                    {isTablet && (
                    <img src="https://www.flatworldsolutions.com/IT-services/images/popular-cryptocurrencies-to-invest-in-2024.webp" alt="" height={200} width={400} />
                    )}
                    {isDesktop && (
                    <img src="https://www.flatworldsolutions.com/IT-services/images/popular-cryptocurrencies-to-invest-in-2024.webp" alt="" height={250} width={500} />
                    )}
                </Box>
                <Box sx={{ bgcolor: "black", color: "white", borderRadius: 10, width: 350, padding: 3, border: "2px solid white" }}>
                    <AppBar position="static" style={{ backgroundColor: "black", color: "white" }}>
                        <Tabs value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            style={{ borderRadius: 10 }}>
                            <Tab label="Login" style={{ color: "white" }} />
                            <Tab label="Sign Up" style={{ color: "white" }} />
                        </Tabs>

                    </AppBar>
                    {value === 0 && <LoginPage handleClose={handleClose} />}
                    {value === 1 && <Signup handleClose={handleClose} />}
                    <Box className={classes.google}>
                        <span>OR</span>
                        <GoogleButton style={{ width: "100%", outline: "none" }}
                            onClick={signInWithGoogle} />

                    </Box>
                </Box>

                <Alert />
            </Box>
        </ThemeProvider>
    )
}
export default Login
