import React from 'react'
import '../assets/styles/LandingPage.css'
import { useState } from 'react'
import AdminLogin from './Admin/AdminLogin'
import UserLogin from './User/UserLogin'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    let [bool, setBool] = useState(true)
    let handleClick = () => {
        setBool(!bool)
        console.log(bool);
    }

    return (
        <>
            <div className="landingPage">
                <div className="container">
                    <div className="button-box">
                        <button className={bool ? "left-button" : "right-button"} onClick={handleClick}>
                            {bool ? "Admin" : "User"}
                        </button>
                    </div>

                     <input type="search" name="" id="" />

                    <h2>
                        {bool ? "ADMIN LOGIN-INFO" : "USER LOGIN-INFO"}
                    </h2>

                    <div className="formBox">
                        {bool ? <AdminLogin /> : <UserLogin />}
                    </div>

                    <div className="fPass">
                        <Link>
                            Forgotten Paswword..?
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingPage
