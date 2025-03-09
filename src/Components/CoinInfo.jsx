import React, { useEffect, useState } from "react"
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { CircularProgress, createTheme } from "@mui/material";
import { makeStyles, ThemeProvider } from "@mui/styles";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    elements,
} from "chart.js";
import { chartDays } from "../config/data";
import SelectButton from "./SelectButton";

ChartJS.register(
    LineElement,
    CategoryScale, // ✅ Fixes "category is not a registered scale" error
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const CoinInfo = ({ coin }) => {
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);

    const { currency } = CryptoState();

    const fetchHistoricalData = async () => {
        const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

        setHistoricData(data.prices);
    }

    useEffect(() => {
        fetchHistoricalData();
    }, [currency, days]);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            mode: "dark",
        },
    });

    const useStyles = makeStyles((theme) => ({
        container: {
            width: "75%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
            padding: 40,
            [theme.breakpoints.down("md")]: {
                width: "100%",
                marginTop: 0,
                padding: 20,
                paddingTop: 0,
            },
        },
    }));

    const classes = useStyles();
    return (
        <ThemeProvider theme={darkTheme}>
            {/* chart */}
            <div className={classes.container}>
                {
                    !historicData ? (
                        <CircularProgress
                            style={{ color: "gold" }}
                            size={250}
                            thickness={1} />
                    ) : (
                        <>
                            <Line
                                data={{
                                    labels: historicData.map((coin) => {
                                        let date = new Date(coin[0]);
                                        let time = date.getHours() > 12
                                            ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                            : `${date.getHours()}:${date.getMinutes()} AM`;
                                        return days === 1 ? time : date.toLocaleDateString();
                                    }),
                                    datasets: [{
                                        data: historicData.map((coin) => coin[1]),
                                        label: `Price ( Past ${days} Days ) in ${currency}`,
                                        borderColor: "#EEBC1D",
                                        animation: {
                                            duration: 1000, // Animates dataset changes
                                            easing: "linear",
                                          },
                                    }]
                                }}
                                options={{
                                    elements: {
                                        point: {
                                            radius: 1,
                                        },
                                    },
                                }}
                            />
                            <div style={{display:"flex",marginTop:20,justifyContent:"space-around",width:"100%"}}>
                                {chartDays.map(day=>(
                                    <SelectButton key={day.value}
                                    onClick = {()=> setDays(day.value)}
                                    selected = {day.value === days}
                                    >{day.label}</SelectButton>
                                ))}
                            </div>
                        </>
                    )
                }
            </div>
        </ThemeProvider>
    )
}

export default CoinInfo;