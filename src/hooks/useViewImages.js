import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'

/*IMPORTANT 
This one is the same as useGetImages. Only it uses query and firestoreQueryData and sends the "query" instead of 
*/

const useViewImages = () => {
	// create ref to collection 'memes'
	const collectionRef = collection(db, 'images')

	// create query for collectionRef, order result in reverse cronological order
	const queryRef = query(collectionRef, orderBy('name', 'desc'))

	// run query
	const imagesQuery = useFirestoreQueryData(['images'], queryRef, {
		idField: 'id',
		subscribe: true,
	})

	return imagesQuery
}

export default useViewImages