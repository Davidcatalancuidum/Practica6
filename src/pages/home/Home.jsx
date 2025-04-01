import "./home.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

const Home = () =>{
    return(
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
            </div>
        </div>
    )
}

export default Home