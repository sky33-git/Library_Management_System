import React from 'react'
import '../../assets/styles/addusers.css'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUsers = () => {

    let formUserDetails = useRef()
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()

        let inputField = formUserDetails.current

        let newUser = {
            firstName: inputField[0].value,
            lastName: inputField[1].value,
            contact: inputField[2].value,
            email: inputField[3].value,
            password: inputField[4].value,
            dob: inputField[5].value,
            place: inputField[6].value,
        }

        fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        }
        )

        navigate(`/adminportal/users`)
    }
    return (
        <>
            <div className="addUsers">
                <div className="formUserData">
                    <form action="" ref={formUserDetails} onSubmit={handleSubmit}>
                        <div className="forminputs">
                            <input type="text" placeholder='Enter first name' required />
                            <input type="text" placeholder='Enter last name' required />
                            <input type="tel" placeholder='Enter your contact number' required />
                            <input type="email" placeholder='Enter your email address' required />
                            <input type="password" placeholder='Enter your password' disabled />
                            <input type="date" required />
                            <input type="text" placeholder='Address' required />
                        </div>

                     <button type="submit">Add User</button>

                    </form>



                </div>
            </div>
        </>
    )
}

export default AddUsers
