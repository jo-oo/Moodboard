import logo from '../../assets/logos/logo.svg'
import Button from './Button.jsx'
import Alert from '../../components/general/Alert'
import { Link, useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'

const LoginForm = () => {

	const emailRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const { login } = useAuthContext()
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError(null);

		// try to log in the user with the specified credentials
		try {
			setLoading(true)
			await login(emailRef.current.value, passwordRef.current.value)
			navigate('/')

		} catch (err) {
			setError(err.message)
			setLoading(false)
		}
	}
    
    return (
        <div>

            <div className="nameContainer flex flex-col items-center min-h-screen sm:justify-center p-8">
                <div className="nameFormBox w-full px-10 py-12 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            
                    <div className="Logo flex flex-col items-center justify-center mt-2">
                        <div className='w-11'>
                            <img src={logo} className="Logo" alt="Logo"/>
                        </div>
                    </div>

                    <div className="InfoText flex flex-col items-center justify-center mt-1 mb-7">
                        <h3 className="text-2xl font-semibold mt-2">Welcome back</h3>
                        <p className='text-base'>Please enter your details</p>
                    </div>

                    {error && (
                        //send error to Alert component
                        <Alert error={error} />
                    )}

                    <form onSubmit={handleSubmit}>

                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    ref={emailRef} required
                                    name="email"
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    ref={passwordRef} required
                                    name="password"
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                    
                        <div className="flex items-center justify-end mt-8 mb-2">
                            <p
                                className="text-sm text-gray-600 hover:text-gray-900"
                            >
                                Don´t have an account? 
                                <Link to="/signup">Sign Up</Link>
                            </p>
                            <Button value={`SIGN IN`}/>
                        </div>
                    </form>
                    
                </div>
            </div>

        </div>
    )
}

export default LoginForm