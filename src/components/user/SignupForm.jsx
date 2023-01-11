import logo from '../../assets/logos/logo.svg'
import Button from './Button.jsx'
import Alert from '../../components/general/Alert'
import { Link, useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'

const SignupForm = () => {
	const emailRef = useRef()
    const displayNameRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
    const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const { signup, setDisplayName, reloadUser } = useAuthContext()
	const navigate = useNavigate()


	const handleSubmit = async (e) => {
		e.preventDefault()

		//check so that user has entered the same password in both input fields
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("The passwords does not match")
		}

		setError(null);

		// try to sign up the user with the specified credentials
		try {
			setLoading(true)
			await signup(emailRef.current.value, passwordRef.current.value, displayNameRef.current.value )

            // set display name and upload photo for the newly created user
			await setDisplayName(displayNameRef.current.value)

            // reload user
			await reloadUser()

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
                        <h3 className="text-2xl font-semibold mt-2">Create account</h3>
                        <p className='text-base'>Please enter your details</p>
                    </div>

                    {error && (
                        //send error to Alert component
                        <Alert error={error} />
                    )}

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                User Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    ref={displayNameRef} 
                                    required
                                    name="name"
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30 rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
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
                                    ref={emailRef} 
                                    required
                                    name="email"
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        {/* Firebase requires 6 characters password minimum */}
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
                                    ref={passwordRef} 
                                    required
                                    name="password"
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    ref={passwordConfirmRef} 
                                    required
                                    name="password_confirmation"
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
                                Already registered?
                                <Link to="/login">Log In</Link>
                            </p>
                            <Button disabled={loading} type="submit" value={`REGISTER`}/>
                        </div>
                    </form>
                    
                </div>
            </div>

        </div>
    )
}

export default SignupForm