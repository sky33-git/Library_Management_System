import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

  let formData = useRef()
  let navigate = useNavigate()


  const controlAdminLogin = (e) => {
    e.preventDefault()


    //! Storing credentials in object
    let credentials = {
      email:"admin@gmail.com",
      password:"admin123"
    }

    let {email, password} = credentials

    let emailVal = formData.current[0].value
    let passVal = formData.current[1].value

    if(email === emailVal && password === passVal){
     navigate("/adminportal")
    } else {
      alert("Invalid Credentials!")
      formData.current[0].style.border = "3px solid red"
      formData.current[1].style.border = "3px solid red"
      // formData.current[2].style.border = "1px solid red"
      
    }
    
  }
  return (
    <>
      <div className="adminLogin">

        <form onSubmit={controlAdminLogin} ref={formData}>

          <input type="email" placeholder='Enter Admin email' required />
          <input type="password" placeholder='Enter password' required />

          <input type="submit" value={"Admin Login"} />
        </form>


      </div>

    </>
  )
}

export default AdminLogin
