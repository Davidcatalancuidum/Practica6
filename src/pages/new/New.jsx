import"./new.scss";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({inputs,title}) =>{

    const[file, setFile] = useState("");

    console.log(file)
    return(
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={
                            file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        } alt=""/>
                    </div>
                    <div className="right">
                        <form>
                        <div className="formInput">
                                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon"/></label>
                                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="Write..."/>
                            </div>
                            
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New