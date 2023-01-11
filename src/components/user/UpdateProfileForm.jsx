import logo from '../../assets/logos/logo.svg'
import Button from './Button.jsx'
import Alert from '../../components/general/Alert'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'

const UpdateProfileForm = () => {
    const displayNameRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState(null)
	const {
		currentUser,
		reloadUser,
		setDisplayName,
		setEmail,
		setPassword
	} = useAuthContext()


	const handleSubmit = async (e) => {
		e.preventDefault()

		// make sure user has entered the same password in both input fields
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("The passwords does not match")
		}

		setError(null);
		setMessage(null);

		// update user profile
		try {
			// disable update-button while updating is in progress
			setLoading(true)

			// update displayName *ONLY* if it has changed
			if (
				displayNameRef.current.value !== currentUser.displayName
			) {
				await setDisplayName(displayNameRef.current.value)
			}

			// update email *ONLY* if it has changed
			if (emailRef.current.value !== currentUser.email) {
				await setEmail(emailRef.current.value)
			}

			// update password *ONLY* if the user has provided a new password to set
			if (passwordRef.current.value) {
				await setPassword(passwordRef.current.value)
			}

			// reload user
			await reloadUser()

			setMessage("Profile successfully updated")
			setLoading(false)

		} catch (e) {
			console.log("Error updating profile", e)
			setError(e.message)
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
                        <h3 className="text-2xl font-semibold mt-2">Update Profile</h3>
                        <p className='text-base'>Please enter your details</p>
                    </div>

                    {error && (
                        //send error to Alert component
                        <Alert error={error} />
                    )}
                    {error && (
                        //send message to Alert component
                        <Alert message={message} />
                    )}

                    <form onSubmit={handleSubmit}>
                        {/*
		                    Fill the displayName and email form fields with their current value!
						*/}
                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    ref={displayNameRef} 
                                    defaultValue={currentUser.displayName}
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
                                    ref={emailRef} required
                                    defaultValue={currentUser.email}
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
                                New Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    ref={passwordRef} required
                                    autoComplete="new-password" 
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
                                Confirm New Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    ref={passwordConfirmRef} required
                                    autoComplete="new-password"
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
                                Changed my mind
                                <Link to="/">Go to Moodbpard</Link>
                            </p>
                            <Button disabled={loading} type="submit" value={`UPDATE PROFILE`}/>
                        </div>
                    </form>
                    
                </div>
            </div>

        </div>
    )
}

export default UpdateProfileForm