import React from "react"

const SingleUsers: ({userData}: any) => JSX.Element = (userData) => {

    console.log(userData, "checking user data from console")

    return (
        <>
            {Array.isArray(userData) && userData.map((user: any) => (
                <div key={user.id} className='UserProfileWrapper'>
                    <div className="bottom_profile">
                        <div className="userDetailWrapper">
                            <div className="userDescription">
                                <div className="userDetails">
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem1">
                                                <img
                                                    src={user.profile.avatar}
                                                    alt=""
                                                    className="itemImg"
                                                />
                                                <div className="detailItem">
                                                    <span className="Profile_Name">{user.userName}</span>
                                                    <br/><br/>
                                                    <span className="itemValue">{user.email}</span>
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
                                                <span className="itemKey">{user.orgName}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr"/>
                                <div className="userDetails">
                                    <div className="item">
                                        <div className="details">
                                            <div className="detailItem">
                                                <span className="Profile_Name">{user.accountBalance}</span>
                                                <br/><br/>
                                                <span className="itemValue">{user.accountNumber}</span>
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
                                                <span
                                                    className="itemValue">{user.profile.firstName} {user.profile.lastName}</span>
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
                                                <span className="itemValue">{user.Employed.level}</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">employmentStatus</span>
                                                <br/><br/>
                                                <span className="itemValue">{user.Employed.employmentStatus}</span>
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
                                                <span className="itemValue">{user.Employed.duration}</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">sector</span>
                                                <br/><br/>
                                                <span className="itemValue">{user.Employed.sector}</span>
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
                                                <span className="itemValue">{user.Employed.officeEmail}</span>
                                            </div>
                                            <div className="detailItem">
                                                <span className="itemKey">monthlyIncome</span>
                                                <br/><br/>
                                                <span className="itemValue">{user.Employed.monthlyIncome}</span>
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
                                                <span className="itemKey">Loan Repayment</span>
                                                <br/><br/>
                                                <span className="itemValue">{user.Employed.loanRepayment}</span>
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
                                                <span className="itemValue">{user.profile.gender}</span>
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
                                                <span className="itemValue">{user.socials.facebook}</span>
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
                                                <span className="itemValue">{user.socials.twitter}</span>
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
                                                <span className="itemValue">{user.socials.instagram}</span>
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
                                                <span className="itemValue">{user.guranto.firstName}</span>
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
                                                <span className="itemKey">Last Name</span>
                                                <br/><br/>
                                                <span className="itemValue">{user.guranto.firstName}</span>
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
                                                <span className="itemValue">{user.lastActiveDate}</span>
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
                                                <span className="itemKey">Phone Number</span>
                                                <br/><br/>
                                                <span className="itemValue">{user.guranto.phoneNumber}</span>
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
                                                <span className="itemValue">{user.guranto.gender}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="hr"/>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default SingleUsers