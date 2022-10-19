import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
// import "../../scss/style.scss"


const headers = [
    {id: 1233, label: "ORGANIZATION"},
    {id: 1234, label: "USERNAME"},
    {id: 1230, label: "EMAIL"},
    {id: 1236, label: "PHONE NUMBER"},
    {id: 1237, label: "DATE JOINED"},
    {id: 1239, label: "STATUS"},
    {id: 1232, label: "EDIT"},
]

const TableData = ({tableData,}: any) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(tableData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(tableData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, tableData]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % tableData.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="table-container">

            <table className="table">
                <thead>
                <tr>
                    {headers.map((rows: { id: number, label: string }) => {
                        return (
                            <th key={rows.id}>{rows.label}</th>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                {currentItems.map((row: { id: number, orgName: string, userName: string, email: string, phoneNumber: string, lastActiveDate: string, education: string, employmentStatus: string, }) => {
                    return (
                        <tr data-heading={tableData}>
                            <td data-label="orgName" key={row.id}>{row.orgName}</td>
                            <td data-label="userName">{row.userName}</td>
                            <td data-label="email">{row.email}</td>
                            <td data-label="phoneNumber">{row.phoneNumber}</td>
                            <td data-label="lastActiveDate">{row.lastActiveDate}</td>
                            <td>
                                <Link to='/1' className="link">
                                    <p className="edit">edit</p>
                                </Link>
                            </td>
                            <td>
                                <Link to='/2' className="link">
                                    <p className="view">view User</p>
                                </Link>
                            </td>

                        </tr>
                    )
                })}

                </tbody>
            </table>

            <>
                <ReactPaginate
                    previousLabel={'< previous'}
                    nextLabel={'next >'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    pageRangeDisplayed={4}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    pageLinkClassName={"page-item"}
                    breakLinkClassName={"page-item"}
                    previousLinkClassName={"page-item"}
                    nextLinkClassName={"page-item"}
                    activeLinkClassName={"active"}
                />
            </>


        </div>


    );
}

TableData.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
    breakOn: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default TableData;