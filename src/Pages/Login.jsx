import { AppBar, Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "../Components/Authentication/LoginPage";
import Signup from "../Components/Authentication/Signup";
import { makeStyles } from "@mui/styles";
import { CryptoState } from "../CryptoContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "../Components/Alert";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";

const theme = createTheme(); // Create a default theme
const useStyles = makeStyles((theme) => ({
    google: {
        padding: 24,
        paddingTop: 0,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: 20,
        fontSize: 20,
    }
}))

const Login = () => {
    const navigate = useNavigate();

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const { setAlert } = CryptoState();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        navigate("/HomePage")
    }

    const [value, setValue] = React.useState(0);

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
            <Box sx={{ bgcolor: 'background.paper', color: "white", borderRadius: 10, width: 350 }}>
                <AppBar position="static" style={{ backgroundColor: "transparent", color: "white" }}>

                    <Tabs value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        style={{ borderRadius: 10 }}>
                        <Tab label="Login" />
                        <Tab label="Sign Up" />
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
        </ThemeProvider>
    )
}
export default Login

// import * as React from 'react';
// import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
// import Sheet from '@mui/joy/Sheet';
// import CssBaseline from '@mui/joy/CssBaseline';
// import Typography from '@mui/joy/Typography';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
// import Select from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
// import { useNavigate } from "react-router-dom";

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme();
//   const [mounted, setMounted] = React.useState(false);
//   const navigate = useNavigate();

//     const handleClick = () => {
//         navigate("/HomePage")
//     }

//   // necessary for server-side rendering
//   // because mode is undefined on the server
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);
//   if (!mounted) {
//     return <Button variant="soft">Change mode</Button>;
//   }

//   return (
//     <Select
//       variant="soft"
//       value={mode}
//       onChange={(event, newMode) => {
//         setMode(newMode);
//       }}
//       sx={{ width: 'max-content' }}
//     >
//       <Option value="system">System</Option>
//       <Option value="light">Light</Option>
//       <Option value="dark">Dark</Option>
//     </Select>
//   );
// }

// export default function Login() {
//   return (
//     <main>
//         <CssVarsProvider>
//       <ModeToggle />
//       <CssBaseline />
//       <Sheet
//         sx={{
//           width: 300,
//           mx: 'auto', // margin left & right
//           my: 4, // margin top & bottom
//           py: 3, // padding top & bottom
//           px: 2, // padding left & right
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 2,
//           borderRadius: 'sm',
//           boxShadow: 'md',
//         }}
//         variant="outlined"
//       >
//         <div>
//           <Typography level="h4" component="h1">
//             <b>Welcome!</b>
//           </Typography>
//           <Typography level="body-sm">Sign in to continue.</Typography>
//         </div>
//         <FormControl>
//           <FormLabel>Email</FormLabel>
//           <Input
//             // html input attribute
//             name="email"
//             type="email"
//             placeholder="johndoe@email.com"
//           />
//         </FormControl>
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input
//             // html input attribute
//             name="password"
//             type="password"
//             placeholder="password"
//           />
//         </FormControl>
//         <Button sx={{ mt: 1 /* margin top */,}} style={{
//             width:85,height:40,backgroundColor:"#EEBC1D",
//         }} variant='contained'>Log in</Button>
//         <Typography
//           endDecorator={<Link href="/sign-up">Sign up</Link>}
//           sx={{ fontSize: 'sm', alignSelf: 'center' }}
//         >
//           Don&apos;t have an account?
//         </Typography>
//       </Sheet>
//       </CssVarsProvider>
//     </main>
//   );
// }
