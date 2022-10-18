import React, {useEffect} from "react"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const Single: React.JSXElementConstructor<any> = (id) => {
    const [userData, setUserData] = React.useState([]);

    useEffect(() => {
        fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`).then(
            response => response.json()
                .then(data => {
                    setUserData(data)
                    console.log(response)
                    console.log(userData)
                })
        )
    }, [id, userData])


    return (
        <div className="single">

            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>

                <div className='UserProfileWrapper'>
                    <div className="bottom_profile">
                        <div className="userDetailWrapper">
                            <div className="userDescription">
                                <div className="userDetails">
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem1">
                                                <img
                                                    src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/894.jpg"
                                                    alt=""
                                                    className="itemImg"
                                                />
                                                <div className="detailItem">
                                                    <span className="Profile_Name">Wilburn.Rice</span>
                                                    <br/><br/>
                                                    <span className="itemValue">Maverick.Hyatt83@gmail.com</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr"/>
                                <div className="userDetails">
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">labore-dolor-et</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr"/>
                                <div className="userDetails">
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="Profile_Name">49,906.00</span>
                                                <br/><br/>
                                                <span className="itemValue">9912345678/Providus Bank</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bottom_profile">

                        <div className="userDetailWrapper">
                            <div className="userDetailTitle">
                                <h1 className="title">Personal Information</h1></div>
                            <div className="userDescription">
                                <div className="userDetails">
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Full Name</span>
                                                <br/><br/>
                                                <span className="itemValue">Darian Rolfson</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">Marital Status</span>
                                                <br/><br/>
                                                <span className="itemValue">Single</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Phone Number</span>
                                                <br/><br/>
                                                <span className="itemValue">07060780922</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">children</span>
                                                <br/><br/>
                                                <span className="itemValue">None</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Email Address</span>
                                                <br/><br/>
                                                <span className="itemValue">Maverick.Hyatt83@gmail.com</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">Type of Residence</span>
                                                <br/><br/>
                                                <span className="itemValue">Parent's Apartment</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">bvn</span>
                                                <br/><br/>
                                                <span className="itemValue">0794484749474847</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Gender</span>
                                                <br/><br/>
                                                <span className="itemValue">Male</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr"/>
                        </div>

                        <div className="userDetailWrapper">
                            <div className="userDetailTitle"><h1 className="title">Education and Employment</h1>
                            </div>
                            <div className="userDescription">
                                <div className="userDetails">
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Level</span>
                                                <br/><br/>
                                                <span className="itemValue">Bsc</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">employmentStatus</span>
                                                <br/><br/>
                                                <span className="itemValue">Employed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">duration</span>
                                                <br/><br/>
                                                <span className="itemValue">2 Years</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">sector</span>
                                                <br/><br/>
                                                <span className="itemValue">FinTech</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Email Address</span>
                                                <br/><br/>
                                                <span className="itemValue">Edna4@yahoo.com</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">monthlyIncome</span>
                                                <br/><br/>
                                                <span className="itemValue">12,080.57</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">bvn</span>
                                                <br/><br/>
                                                <span className="itemValue">0794484749474847</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Gender</span>
                                                <br/><br/>
                                                <span className="itemValue">Female</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr"/>
                        </div>

                        <div className="userDetailWrapper">
                            <div className="userDetailTitle"><h1 className="title">Socials</h1></div>
                            <div className="userDescription">
                                <div className="userDetails">
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">facebook</span>
                                                <br/><br/>
                                                <span className="itemValue">@lendsqr</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">twitter</span>
                                                <br/><br/>
                                                <span className="itemValue">@lendsqr</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">instagram</span>
                                                <br/><br/>
                                                <span className="itemValue">@lendsqr</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr"/>
                        </div>
                        <div className="userDetailWrapper">
                            <div className="userDetailTitle"><h1 className="title">Guarantor</h1></div>
                            <div className="userDescription">
                                <div className="userDetails">
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Full Name</span>
                                                <br/><br/>
                                                <span className="itemValue">Celine Monahan</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">Marital Status</span>
                                                <br/><br/>
                                                <span className="itemValue">Married</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Phone Number</span>
                                                <br/><br/>
                                                <span className="itemValue">1-482-227-3654 x71086</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">children</span>
                                                <br/><br/>
                                                <span className="itemValue">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">accountNumber</span>
                                                <br/><br/>
                                                <span className="itemValue">GWQUSEH1</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">accountBalance</span>
                                                <br/><br/>
                                                <span className="itemValue">49,060.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">bvn</span>
                                                <br/><br/>
                                                <span className="itemValue">0794484749474847</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="userDetails">
                                    <h1 className="title"></h1>
                                    <div className="editButton">edit</div>
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="itemKey">Gender</span>
                                                <br/><br/>
                                                <span className="itemValue">Female</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr"/>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}


export default Single