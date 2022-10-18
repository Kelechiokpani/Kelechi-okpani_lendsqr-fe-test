import React from "react"
import signup from "../../assets/lendsqr.png"
import {BiShowAlt} from "react-icons/bi";
import {MdMarkEmailUnread} from "react-icons/md";
import logo from "../../assets/Union.png";
import {Link} from "react-router-dom";


const Login: React.JSXElementConstructor<any> = () => {
    return (
        <div className="limiter">

            <div className="container-login100">

                <div className="wrap-login100">

                    <div className="login100-pic">
                        <div className='top'>
                            <img src={logo} alt=""/>
                            <Link to="/login" className="logo"><span>LendSqr</span></Link>
                        </div>

                        <img src={signup} alt="IMG"/>
                    </div>
                    <form className="login100-form ">
                            <span className="login100-form-title">
                            Welcome!
                            </span>
                        <p>Enter details to login</p>
                        <div className="wrap-input100">
                            <input className="input100" type="text" name="email" placeholder="Email"/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                            <MdMarkEmailUnread className="symbol"/>
                            </span>
                        </div>
                        <div className="wrap-input100">
                            <input className="input100" type="password" name="pass" placeholder="Password"/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                               <BiShowAlt className=""/>
                            </span>
                        </div>
                        <div className="text-center p-t-12">
                                <span className="txt1">
                                    <a className="txt1" href="/home"> Forgot Password? </a>
                                </span>

                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                <Link className="login100-form-btn" to='/home'>Log In</Link>
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}


export default Login