import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles"; // ✅ Use styled from MUI
import CoinInfo from "../Components/CoinInfo";
import axios from "axios";
import { Box, Button, LinearProgress, Typography } from "@mui/material"; // ✅ Use MUI components
import { numberWithCommas } from "../Components/Banner/Carousel";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Alert } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Sidebar = styled(Box)(({ theme }) => ({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid grey",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const heading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",
});

const Description = styled(Typography)({
  width: "100%",
  fontFamily: "Montserrat",
  padding: "25px !important",
  paddingBottom: "15px",
  paddingTop: "0",
  textAlign: "justify",
});

const MarketData = styled("div")(({ theme }) => ({
  alignSelf: "start",
  padding: "25px",
  paddingTop: "10px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("xs")]: {
    alignItems: "start",
  },
}));

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol, user, watchlist, setAlert } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  const inWatchlist = watchlist.includes(coin?.id);

  const addToWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist ? [...watchlist, coin?.id] : [coin?.id] },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Added to the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };


  const removeFromWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((wish) => wish !== coin?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Removed from the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  useEffect(() => {
    fetchCoin();
  }, []);


  if (!coin) return <LinearProgress sx={{ backgroundColor: "gold" }} />;


  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        {/* Sidebar */}
        <Sidebar>
          <img src={coin?.image.large} alt={coin?.name} height={"200"} style={{ marginBottom: 20 }} />
          <Typography variant="h3">
            {coin?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            dangerouslySetInnerHTML={{ __html: coin?.description.en.split(". ")[0] }}
          />
          <MarketData>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={heading} >
                Rank:
              </Typography>
              &nbsp;&nbsp;
              <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>
                {coin?.market_cap_rank}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={heading} >
                Current Price:
              </Typography>
              &nbsp;&nbsp;
              <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={heading} >
                Market Cap:{" "}
              </Typography>
              &nbsp;&nbsp;
              <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6)
                )}
                M
              </Typography>
            </span>

            {user && (
              <Button
                variant="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: inWatchlist ? "#ff0000" : "#EEBC1D",
                }}
                onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
              >
                {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
              </Button>
            )}

          </MarketData>
        </Sidebar>

        {/* Charts */}
        {coin ? <CoinInfo coin={coin} /> : <Typography>Loading...</Typography>}
      </Container>
    </ThemeProvider>
  );
};

export default CoinPage;
