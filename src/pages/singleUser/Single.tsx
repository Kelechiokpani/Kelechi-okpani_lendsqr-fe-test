import React, {useEffect} from "react"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SingleUsers from "../../components/singleUsers/SingleUsers";
import {HashLoader} from "react-spinners";


const Single: React.JSXElementConstructor<any> = () => {
    const [userData, setUserData] = React.useState();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1`).then(
            response => response.json()
                .then(data => {
                    setUserData(data)
                    console.log(response)
                    console.log(userData)
                    setLoading(false)
                })
        )
    }, [userData])

    if (loading && !userData) {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "5rem"
            }}>
                <HashLoader color="#36d7b7"/>
            </div>
        )
    }


    return (
        <div className="single">

            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <SingleUsers userData={userData}/>
            </div>

        </div>
    )
}


export default Single