import React, {useEffect} from "react"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/userTable/table";
import {HashLoader} from "react-spinners";


const List: React.JSXElementConstructor<any> = () => {
    const [tableData, setTableData] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch(" https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users").then(
            response => response.json()
                .then(data => {
                    setTableData(data)
                    console.log(response)
                    setLoading(false)
                })
        )
    }, [])

    if (loading && !tableData) {
        return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <HashLoader color="#36d7b7"/>
            </div>
        )
    }
    if (error) return <div>Error</div>

    return (

        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <>
                    <Table
                        tableData={tableData}
                        headingColumns={['id', 'orgName', 'userName', 'email', 'Date', 'phoneNumber', 'lastActiveDate', 'education', 'employmentStatus']}
                        breakOn="medium"
                    />

                </>
            </div>
        </div>
    )
}


export default List