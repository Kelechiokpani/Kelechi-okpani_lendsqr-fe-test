import React from "react"
import {BsSearch} from "react-icons/bs"
import {IoMdNotifications} from "react-icons/io"
import {GiToggles} from "react-icons/gi"
import {MdMessage} from "react-icons/md"
import admin from "../../assets/cv.jpg"
import logo from "../../assets/Union.png";
import {Link} from "react-router-dom";

const Navbar: React.JSXElementConstructor<any> = () => {
    return (
        <div className="navbar">
            <div className='top'>
                <img src={logo} alt=""/>
                <Link to="/" className="logo"><span>LendSqr</span></Link>
            </div>
            <div className="wrapper">

                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <BsSearch className="navSearch"/>
                </div>
                <div className="items">
                    <div className="item">
                        <IoMdNotifications className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <GiToggles className="icon"/>
                    </div>

                    <div className="item">
                        <MdMessage className="icon"/>
                        <div className="counter">3</div>
                    </div>
                    <div className="item">
                        <img src={admin} alt="profile" className="avatar"/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar