import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

const LogoutPage = () => {
	const navigate = useNavigate()
	const { logout } = useAuthContext()

	useEffect(() => {
		const logoutUser = async () => {
			await logout()
			navigate('/login')
		}
		logoutUser()
	}, [])

	return (
		<div className="nameContainer flex flex-col items-center min-h-screen sm:justify-center p-8">
			<div>
				<div>
					<h1>Log Out</h1>
                    <h2>Please wait while you're being logged out...</h2>
				</div>
			</div>
		</div>
	)
}

export default LogoutPage
