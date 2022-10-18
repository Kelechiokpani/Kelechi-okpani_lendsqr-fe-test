import React from "react";
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import {IoIosPersonAdd} from "react-icons/io"
import {Link} from "react-router-dom";

const Widget: React.JSXElementConstructor<any> = ({type}) => {

    //dummy data
    let data;
    const diff = 50

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                link: "See All Users",
                isMoney: false,
                users: "2,453",
                icon: <IoIosPersonAdd className="icon" style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}/>,
            };
            break;

        case "activeUser":
            data = {
                title: "ACTIVE USERS",
                users: "2,453",
                link: "See All Users",
                isMoney: false,
                icon: <IoIosPersonAdd className="icon"
                                      style={{backgroundColor: "rgba(218, 165, 32, 0.2)", color: "goldenrod",}}
                />,
            };
            break;
        default:
            break;

        case "loans":
            data = {
                title: "USERS WITH LOANS",
                link: "See All Users",
                isMoney: false,
                users: "12,453",
                icon: <IoIosPersonAdd className="icon"
                                      style={{backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green"}}

                />,
            };
            break;

        case "savings":
            data = {
                title: "USERS WITH SAVINGS",
                link: "See All Users",
                isMoney: false,
                users: "102,453",
                icon: <IoIosPersonAdd className="icon" style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)", color: "purple",
                }}/>,
            };
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data?.title}</span>
                <span className="counter">
                    {data?.users}
                </span>
                <div className="links">
                    <Link className="links" to='/users'>
                        {data?.link}
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="percentage">
                    <BsFillArrowUpCircleFill/> {diff}%
                </div>
                {data?.icon}
            </div>
        </div>
    )
}

export default Widget