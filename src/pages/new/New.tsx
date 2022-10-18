import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, {useState} from "react";
import {FiUploadCloud} from "react-icons/fi";


const New = ({inputs, title}: any) => {
    const [file, setFile] = useState();

    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>

                <div className="createNewUser">
                    <div className="UserTopNav">
                        <h1>{title}</h1>
                    </div>
                    <div className="UserbottomNav">
                        <div className="left">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                        </div>
                        <div className="right">
                            <form>
                                <div className="formInput">
                                    <label htmlFor="file">
                                        Image: <FiUploadCloud className="icon"/>
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        onChange={(e: any) => setFile(e.target.files[0])}
                                        style={{display: "none"}}
                                    />
                                </div>

                                {inputs.map((input: any) => (
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder}/>
                                    </div>
                                ))}
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default New;