import React, {useState} from "react"
import {MdDashboard, MdNotificationImportant} from "react-icons/md";
import {TbTruckDelivery} from "react-icons/tb";
import {ImStatsDots} from "react-icons/im";
import {SiLogstash} from "react-icons/si";
import {GiHealthPotion} from "react-icons/gi";
import {FaBars, FaJediOrder, FaProductHunt, FaThList, FaUsers} from "react-icons/fa";
import {GrSettingsOption} from "react-icons/gr";
import {CgProfile} from "react-icons/cg";
import {BiLogOutCircle} from "react-icons/bi";
import {NavLink} from "react-router-dom";

const Sidebar: React.JSXElementConstructor<any> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/home",
            name: "Dashboard",
            icon: <MdDashboard className="icon"/>
        },
        {
            path: "/users",
            name: "All Users",
            icon: <FaUsers className="icon"/>
        },
        {
            path: "/users/new",
            name: "New User",
            icon: <FaUsers className="icon"/>
        },
        {
            path: "/users/:id",
            name: "Profile",
            icon: <CgProfile className="icon"/>
        },
        {
            path: "/",
            name: "Login",
            icon: <GiHealthPotion className="icon"/>
        },
        {
            path: "/Loans",
            name: "Loans",
            icon: <FaThList className="icon"/>
        },
        {
            path: "/savings",
            name: "Savings",
            icon: <FaProductHunt className="icon"/>
        },
        {
            path: "products/:id",
            name: "Product List",
            icon: <FaProductHunt className="icon"/>
        },
        {
            path: "/loanRequest",
            name: "Loan Request",
            icon: <FaProductHunt className="icon"/>
        },
        {
            path: "/Orders",
            name: "Orders",
            icon: <FaJediOrder className="icon"/>
        },
        {
            path: "/Delivery",
            name: "Delivery",
            icon: <TbTruckDelivery className="icon"/>
        },
        {
            path: "/Settings",
            name: "Settings",
            icon: <GrSettingsOption className="icon"/>
        },

        {
            path: "/Logout",
            name: "Logout",
            icon: <BiLogOutCircle className="icon"/>
        },
        {
            path: "/Stats",
            name: "Stats",
            icon: <ImStatsDots className="icon"/>
        },
        {
            path: "/Notification",
            name: "Notification",
            icon: <MdNotificationImportant className="icon"/>
        },
        {
            path: "/System Health",
            name: "System Health",
            icon: <GiHealthPotion className="icon"/>
        },
        {
            path: "/Logs",
            name: "Logs",
            icon: <SiLogstash className="icon"/>
        },
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <a href='/' className="logo">
                        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">LendSqr
                        </h1>
                    </a>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle} className="toggle"/>
                    </div>

                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <span className="icon">{item.icon}</span>
                            <span style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</span>
                        </NavLink>
                    ))
                }
            </div>
        </div>

    )
}

export default Sidebar