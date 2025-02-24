import React, { useState } from 'react'
import './../assets/styles/Users.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Users = () => {

    let [user, setUsers] = useState([])

    let fetchUsersData = async () => {
        let userApi = await axios.get('http://localhost:4000/users')
        setUsers(userApi.data)
    }
    fetchUsersData()

    let deleteAll = () => {
        let bool = window.confirm(`Do you want to remove all the Users?`)
        if (bool) {

            user.map((ele)=>{
                let {id} = ele
                fetch(`http://localhost:4000/users/${id}`, { method: "DELETE" })
            })

            alert(` All the users are removed!`)
        } else {
            alert(`Users are not removed!`)
        }

    }

    let deleteUser = (id) => {

        let bool = window.confirm(`Do you want to delete the ${id} user?`)
        if (bool) {
            fetch(`http://localhost:4000/users/${id}`, { method: "DELETE" }
            )
            alert(` the ${id}st user is deleted!`)
        } else {
            alert(`${id}st user is not deleted!`)
        }
    }

    let loc = useLocation()
    let pathBool = loc.pathname.startsWith("/adminportal")

    return (
        <div>
            <div className="users">

                

                {(user.length > 0) ? <>

                    <div className="container">
                        <h1>Users Details</h1>

                        <div className="tableData">

                            <table border={console}>
                                <thead>
                                    <tr>
                                        <th>Sl No</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Contact</th>
                                        {pathBool && <th>Email</th>}
                                        {pathBool && <th>Password</th>}
                                        {pathBool && <th>Date-Of-Birth</th>}
                                        <th>Age</th>
                                        <th>Place</th>
                                        {pathBool && <th>Delete</th>}
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        user.map((ele, index) => {

                                            let { id, firstName, lastName, contact, email, password, dob, place } = ele
                                            let a = dob.slice(0, 4)
                                            // console.log(a);

                                            let date = new Date()
                                            let Age = date.getFullYear() - a
                                            // console.log(Age);
                                            return (
                                                <>

                                                    <tr>
                                                        <td>{index + 1}.</td>
                                                        <td>{firstName}</td>
                                                        <td>{lastName}</td>
                                                        <td>{contact}</td>
                                                        {pathBool && <td>{email}</td>}
                                                        {pathBool && <td>user123</td>}
                                                        {pathBool && <td>{dob}</td>}
                                                        <td>{Age}</td>
                                                        <td>{place}</td>
                                                        {pathBool && <td> <button onClick={() => deleteUser(id)}>Delete</button> </td>}
                                                    </tr>

                                                </>
                                            )
                                        }
                                        )
                                    }
                                </tbody>
                            </table>
                            <button className='deleteAll' onClick={deleteAll} >Delete All</button>
                        </div>
                    </div>
                </>
                    :

                    <>
                        <h1 className='noUserData' >No data Found!</h1>
                    </>}

            </div>
        </div>
    )
}

export default Users
