import { Link } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import CoinsTable from "../Components/CoinsTable";

const Home = () => {
    return (
        <>
            <Banner />
            <CoinsTable/>
        </>
    );
};

export default Home;