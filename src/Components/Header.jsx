import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import React from "react"
import { useNavigate } from "react-router-dom"
import { CryptoState } from "../CryptoContext"
import Login from "../Pages/Login"
import UserSidebar from "./Authentication/UserSidebar"

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))
const Header = () => {
    const classes = useStyles();

    const navigate = useNavigate();

    const { currency, setCurrency, user } = CryptoState()

    console.log(currency)

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate("/homepage")} className={classes.title}>Crypto Hub</Typography>

                        <Select variant="outlined" style={
                            {
                                width: 100,
                                height: 40,
                                marginRight: 15,
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}>
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                        {user ? <UserSidebar /> :""}
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}
export default Header