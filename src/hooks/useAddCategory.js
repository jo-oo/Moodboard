import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useAuthContext } from '../contexts/AuthContext'
import { db } from '../firebase/config'
import useViewCategories from "./useViewCategories";

const useAddCategory = () => {
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(null)
	const [isSuccess, setIsSuccess] = useState(null)
	const [message, setMessage] = useState(null)
	
	//fetching user from AuthContext
	const { currentUser } = useAuthContext()

	//fetching the categories of that user
	const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })

	const addEmptyCategory = async (categoryRef) => {	
		// reset internal state
		setError(null)
		setIsError(null)
		setIsSuccess(null)
		setMessage(null)
		
		// map returns a list of the names and includes checks if the category exists there
		const categoryExists = categoriesQuery.data.map(function(c) {
			return c.name;
		})
		.includes(categoryRef.toLowerCase());

		if (!categoryExists) {
			//add document to collection categories
			await addDoc(collection(db, 'categories'), {
				name: categoryRef.toLowerCase(),
				text: "",
				user: currentUser.uid,
				created: serverTimestamp(),
			})
			setIsSuccess(true)
			setMessage("Kategorin tillagd!")
		} else if (categoryExists){
			setError("Kategorin finns redan")
			setIsError(true)
		}

	}

	return {
		isError,
		error,
		isSuccess,
		message,
		addEmptyCategory,
	}
}

 export default useAddCategory
