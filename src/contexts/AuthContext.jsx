
import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

const AuthContext = createContext()

//for our children to be able to use the contextValues and everything in
const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)


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

	const contextValues = {
		//here is what the children should be able to use 
		signup,
        login,
        logout
	}

	return (
		<AuthContext.Provider value={contextValues}>{/* detta är de värden vi tillhandahåller våra children */}
			{children}
		</AuthContext.Provider>
	)
}

export {
	AuthContextProvider as default,
	useAuthContext,
}
