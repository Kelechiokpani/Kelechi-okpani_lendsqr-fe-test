import React, {useEffect} from "react"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/widget";
import Table from "../../components/userTable/table";
import {HashLoader} from "react-spinners";

const Home: React.JSXElementConstructor<any> = () => {

    const [tableData, setTableData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    useEffect(() => {
        fetch(" https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then(
            response => response.json()
                .then(data => {
                    setTableData(data)
                    console.log(response)

                    if (loading && !tableData) {
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
                    setLoading(false)
                    setError(error)
                })
        )
    }, [])


    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets ">
                    <Widget type="user"/>
                    <Widget type="activeUser"/>
                    <Widget type="loans"/>
                    <Widget type="savings"/>
                </div>

                <Table tableData={tableData}
                       headingColumns={['id', 'orgName', 'userName', 'email', 'Date', 'phoneNumber', 'lastActiveDate',]}
                       breakOn="medium                                                                           "
                />

            </div>

        </div>
    )
}


export default Home