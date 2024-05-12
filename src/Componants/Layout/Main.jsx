import { Outlet } from "react-router-dom";
import Navbar from "../Shard/Navbar/Navbar";
import Footer from "../Shard/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;