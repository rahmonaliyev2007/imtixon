import { Input, Spin } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const api = import.meta.env.VITE_API_DEVCONNECTOR

function Login() {
  const [teacher, setTeacher] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: false, password: false })
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const setTeacherValue = (name, value) => { setTeacher({ ...teacher, [name]: value }); }
  const loginFc = async () => {
    try {
      setIsLoading(true)
      const response = await axios.post(`${api}/api/auth`, teacher)
      console.log(response.data)
      localStorage.setItem('token', response.data.token)
      const res2 = await axios.get(`${api}/api/auth`, { headers: { "X-Auth-Token": localStorage.getItem('token') } })
      localStorage.setItem('userId', res2?.data?._id)
      localStorage.setItem('user', res2?.data?.name)
      console.log(res2?.data)
      navigate('/')

    } catch (error) {
      console.log(error)
      setErrorMessage(error.response?.data?.message || 'An error occurred, please try again later')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newErrors = {
      email: teacher.email.trim() === '',
      password: teacher.password.trim() === '',
    }
    setErrors(newErrors)

    if (Object.values(newErrors).includes(true)) return

    loginFc()
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full gap-16'>
      <h2 className='text-center text-4xl font-semibold text-[#4F4F4F] '>Welcome, Log into your account</h2>
      <form onSubmit={handleSubmit} className='border max-w-md w-full p-16  rounded shadow-md'>
        <p className='m-auto text-center font-medium max-w-[230px] text-[#667085] text-base'>It is our great pleasure to have you on board!</p>

        <label className='w-[100%] block relative my-3'>
          <Input type="text" className={`w-full h-10 my-5 ${errors.email ? 'border-red-500' : ''}`} name='email' onChange={(e) => setTeacherValue(e.target.name, e.target.value)} placeholder='Email' disabled={isLoading} />
          <span className={`text-red-500 text-sm absolute left-0 transition-all duration-300 ${errors.email ? 'opacity-100 translate-y-[60px]' : 'opacity-0 translate-y-7 pointer-events-none'}`}>Please enter your email</span>
        </label>

        <label className='w-[100%] block relative my-3'>
          <Input type="password" className={`w-full h-10 mb-5 ${errors.password ? 'border-red-500' : ''}`} name='password' onChange={(e) => setTeacherValue(e.target.name, e.target.value)} placeholder='Password' disabled={isLoading} />
          <span className={`text-red-500 text-sm absolute left-0 transition-all duration-300 ${errors.password ? 'opacity-100 translate-y-10' : 'opacity-0 translate-y-7 pointer-events-none'}`}>Please enter your password</span>
        </label>

        {errorMessage && (
          <div className='text-red-500 text-center mb-4'>{errorMessage}</div>
        )}

        <button type="submit" className={`block w-full p-2 bg-[#509CDB] font-medium text-white rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isLoading} >
          {isLoading ? (<Spin size="small" className="mr-2" />) : ('Login')}
        </button>

        <Link to={'/register'} className={`font-semibold text-[#509CDB] mt-4 text-center w-full m-auto block ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} >
          Sign up
        </Link>
      </form>
    </div>
  )
}

export default Login