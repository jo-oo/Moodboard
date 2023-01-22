import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuthContext } from '../contexts/AuthContext'

/*IMPORTANT 
This one is the same as useGetImages. Only it uses query and firestoreQueryData and sends the "query" instead
*/

const useViewCategories = (options = {}) => { //Options are defaulted to an empty object
    //to later check if user is authenticated to get to view the images
    const { currentUser } = useAuthContext()

	// create ref to collection 'categories'
    const collectionCategoriesRef = collection(db, 'categories')
                
    const queryCategoriesKey = ['categories', { user: currentUser.uid }]	

    //for quering collections by id
        const queryCategoryRef = query
        (collectionCategoriesRef, 
       // where('name', '==', 'Design'),
        where('user', '==', currentUser.uid)  //skickar med variabler
    )
        

	// run query for 'categories', row 16
	const categoriesQuery = useFirestoreQueryData(queryCategoriesKey, queryCategoryRef, {
		idField: 'id',
		subscribe: true,
	})

	return categoriesQuery
}

export default useViewCategories