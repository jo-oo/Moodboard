import { createContext, useContext, useEffect, useState } from 'react'
import { 
	createUserWithEmailAndPassword, 
	signInWithEmailAndPassword, 
	signOut, 
	onAuthStateChanged, 
	sendPasswordResetEmail,
	updateEmail,
	updatePassword,
	updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase/config'
import BeatLoader from "react-spinners/BeatLoader"

const AuthContext = createContext()

//for our children to be able to use the contextValues and everything in
const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [userName, setUserName] = useState(null)
	const [userEmail, setUserEmail] = useState(null)
	const [loading, setLoading] = useState(true)

    //create user with email, password and name
    const signup = async (email, password) => {
	    return createUserWithEmailAndPassword(auth, email, password)
	}

    const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

    const logout = () => {
		return signOut(auth)
	}

	const reloadUser = async () => {
		await auth.currentUser.reload()
		setCurrentUser(auth.currentUser)
		setUserName(auth.currentUser.displayName)
		setUserEmail(auth.currentUser.email)
		return true
	}

	const resetPassword = (email) => {
		return sendPasswordResetEmail(auth, email)
	}

	const setEmail = (email) => {
		return updateEmail(currentUser, email)
	}

	const setPassword = (newPassword) => {
		return updatePassword(currentUser, newPassword)
	}

	const setDisplayName = async (displayName) => {

		return updateProfile(auth.currentUser, {
			displayName,
		})
	}

	useEffect(() => {
		// listen for authentication-state changes of users
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setUserName(user?.displayName)
			setUserEmail(user?.email)
			setLoading(false)
		})

		return unsubscribe
	}, [])


	const contextValues = {
		//here is what the children should be able to use 
		currentUser,
		login,
		logout,
		signup,
		reloadUser,
		resetPassword,
		setDisplayName,
		setEmail,
		setPassword,
		userName,
		userEmail
	}

	return (
		<AuthContext.Provider value={contextValues}>{/* detta är de värden vi tillhandahåller våra children */}
			{/* {children} */}
			{/* If Loading, show spinner, else, render children */}
			{loading ? (
				<div id="initial-loader">
					<BeatLoader color={"#888"} size={50} />
				</div>
			) : (
				children
			)}
		</AuthContext.Provider>
	)
}

export {
	AuthContextProvider as default,
	useAuthContext,
}
