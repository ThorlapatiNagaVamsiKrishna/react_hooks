import axios from 'axios'
import Cookie from 'js-cookie'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const url = 'https://deploying-backend-10.onrender.com/user/login'

const Login = () => {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({})
  const onChangeHandler = e => {
    const { name, value } = e.target
    setUserDetails((prevState) => (
      { ...prevState, [name]: value }
    ))
  }

  const onSubmitHandler = async e => {
    e.preventDefault()
    const fethedData = await axios.post(url, userDetails)
    console.log(fethedData)
    Cookie.set('jwtToken', fethedData.data.jwtToken)
    navigate('/about')

  }

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Login</h1>
      <label>Email:</label>
      <input type="email" placeholder='enter nee email' name="email" onChange={onChangeHandler} />
      <label>Password:</label>
      <input type="password" placeholder='nee password enter chey' name="password" onChange={onChangeHandler} />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login