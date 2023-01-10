import logo from '../../assets/logos/logo.svg'
import Button from './Button.jsx'
import Alert from '../../components/general/Alert'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'

const ForgotPasswordForm = () => {
	const emailRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
	const { resetPassword } = useAuthContext()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError(null);
        setMessage(null);

		// try to send the password reset link to the recieved email
		try {
			setLoading(true)

            // send email
			await resetPassword(emailRef.current.value)

			// show success message
			setMessage("Password reset link successfully sent!")

		} catch (err) {
			setError(err.message)
			setLoading(false)

        } finally {
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
                        <h3 className="text-2xl font-semibold mt-2 text-center">Luckily, we don´t have to remember everything</h3>
                        <p className='text-base text-center mt-4'>Please enter your email address and we will send you a password reset link</p>
                    </div>

                    {error && (
                        //send error to Alert component
                        <Alert error={error} />
                    )}

                    {message && (
                        //send message to Alert component
                        <Alert message={message} />
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
                            <p className='text-sm italic mt-2 text-end'>Check your spam-folder if email is not recieved</p>
                        </div>
                    
                        <div className="flex items-center justify-end mt-8 mb-2">
                            <Button disabled={loading} type="submit" value={`Send password reset email`}/>

                        </div>
                        <div>
                            <p
                                className="text-sm text-gray-600 hover:text-gray-900 text-end mt-4"
                            >
                                Actually, I remember: {' '}
                                <Link to="/login">Log In</Link>
                            </p>
                        </div>
                    </form>
                    
                </div>
            </div>

        </div>
    )
}

export default ForgotPasswordForm