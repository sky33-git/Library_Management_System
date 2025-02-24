import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

  let navigate = useNavigate()

  let [user, setUser] = useState([])

  let fecthData = async () => {
    let userApi = await axios.get("http://localhost:4000/users")
    setUser(userApi.data);
  }
  fecthData()

  let userEmail = user.map((ele) => {
    let { email } = ele
    return (email);
  })
  // console.log(userEmail);

  // let userPass = user.map((ele) => {
  //   let { password } = ele
  //   return (password);
  // })
  // console.log(userPass);


  let formDetails = useRef()

  const handleSubmit = (e) => {

    e.preventDefault()

    let emailInput = formDetails.current[0].value;
    let passInput = formDetails.current[1].value;

    let userCheck = userEmail.includes(emailInput);
    let passCheck = passInput === 'user123'
    // console.log(passCheck, userCheck);

    if (userCheck && passCheck) {
      alert("You are logined succesfully!")
      navigate('/userportal')
    } else {
      let err = `border:solid 1px red`
      formDetails.current[0].style.cssText = err;
      formDetails.current[1].style.cssText = err;

    }
  }

  return (
    <>
      <div className="userLogin">
        <form ref={formDetails} onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter User email' />
          <input type="password" placeholder='Enter password' />
          <input type="submit" value={"User Login"} />

        </form>
      </div>
    </>
  )
}

export default UserLogin
