import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () =>{
    return(
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                home container
            </div>
        </div>
    )
}

export default Home