import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuthContext } from '../contexts/AuthContext'

/*IMPORTANT 
This one is the same as useGetImages. Only it uses query and firestoreQueryData and sends the "query" instead
*/

/*
*
HOOK THAT NOW IS USED TO FETCH IMAGES BY CATEGORY
*
*/


const useViewCategoryImagesByUser = (options = {}) => { //Options are defaulted to an empty object. We get this from the outside
//to later check if user is authenticated to get to view the images

    const { currentUser, category } = useAuthContext()

	// create ref to collection 'images'
	const collectionRef = collection(db, 'images')
 
    // create query for collectionRef if true else render nothing
    const queryRef = options.fetchOnlyCurrentUser
                        ? query
                               (collectionRef, 
                                where('user', '==', currentUser.uid),
                                where('category', '==', category))
                    
                        : query('')

    const queryKey = ['images', { user: currentUser.uid, category }]	
    
    
	// run query for 'images', row 16
	const imagesByCategoryQuery = useFirestoreQueryData(queryKey, queryRef, {
		idField: 'id',
		subscribe: true,
	})

	return imagesByCategoryQuery
}

export default useViewCategoryImagesByUser