import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widgets";

const Home = () =>{
    return(
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
            </div>
        </div>
    )
}

export default Home