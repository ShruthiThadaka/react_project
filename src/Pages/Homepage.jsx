import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Header from "../Components/Header"
import CoinPage from "./CoinPage"
import { makeStyles } from '@mui/styles';
import CryptoContext from "../CryptoContext"
import 'react-alice-carousel/lib/alice-carousel.css';
import Alert from "../Components/Alert";

const HomePage = () => {
    const useStyles = makeStyles(() => ({
        homePage: {
            backgroundColor: "#14161a",
            minHeight: "100vh",
            color: "white",
        },
    }));

    const classes = useStyles()
    return (
        
        // <CryptoContext.Provider>
            <div className={classes.homePage}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coins/:id" element={<CoinPage />} />
                </Routes>
            </div>
        // </CryptoContext.Provider>


    )
}

export default HomePage