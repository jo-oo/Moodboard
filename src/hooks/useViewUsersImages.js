import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuthContext } from '../contexts/AuthContext'

/*IMPORTANT 
This one is the same as useGetImages. Only it uses query and firestoreQueryData and sends the "query" instead
*/

const useViewUsersImages = (options = {}) => { //Options are defaulted to an empty object
    //to later check if user is authenticated to get to view the images
    const { currentUser } = useAuthContext()

    console.log(currentUser.uid)

	// create ref to collection 'images'
	const collectionRef = collection(db, 'images')         

    const queryKey = ['images', { user: currentUser.uid }]	
  
        
    const queryRef = query
        (collectionRef, 
        where('user', '==', currentUser.uid),
        orderBy('created', 'desc')
    )
       
	// run query for 'images', row 16
	const imagesQuery = useFirestoreQueryData(queryKey, queryRef, {
		idField: 'id',
		subscribe: true,
	})

	return imagesQuery
}

export default useViewUsersImages