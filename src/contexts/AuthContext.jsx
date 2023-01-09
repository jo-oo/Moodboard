
import { createContext, useContext, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

const AuthContext = createContext()

//for our children to be able to use the contextValues and everything in
const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)

	const signup = (email, password) => {
        console.log("I want to create an acocount ", email, password);
		return createUserWithEmailAndPassword(auth, email, password)
        
	}

	const contextValues = {
		//here is what the children should be able to use 
		signup,
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
