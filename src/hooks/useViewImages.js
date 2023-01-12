import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuthContext } from '../contexts/AuthContext'

/*IMPORTANT 
This one is the same as useGetImages. Only it uses query and firestoreQueryData and sends the "query" instead
*/

const useViewImages = (options = {}) => { //Options are defaulted to an empty object
    //to later check if user is authenticated to get to view the images
    const { currentUser } = useAuthContext()

    console.log(currentUser.uid)

	// create ref to collection 'images'
	const collectionRef = collection(db, 'images')
   
                /*
                LATER IF YOU WANT TO RENDER NON USED IN PERSON THINGS...then use the fetchOnlyCurrentUserOption. Now it can be removed from Moodboard egentligen..
                // create queryKey based on whether all images or only the current user's images are requested
                //renders all images or empty list
                const queryKey1 = options.fetchOnlyCurrentUser 
                    ? ['images', { user: currentUser.uid }]
                    : ['']
                //READS AS:
                const querykey2 = NULL;
                    if(options.fetchOnlyCurrentUser=true){   
                        querykey2  = ['images', { user: currentUser.uid }]
                    }else{
                        querykey2 = ['']
                }
                */
                

    const queryKey = ['images', { user: currentUser.uid }]	
    
    
    // create query for collectionRef, order result in reverse cronological order
    //USE THIS ONE FOR QUERY RENDERING OF NOT LOGGED IN USERS
	/*const queryRef = options.fetchOnlyCurrentUser
		? query(collectionRef, where('user', '==', currentUser.uid), orderBy('created', 'desc'))
		: query(collectionRef, orderBy('created', 'desc'))
        */
        
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

export default useViewImages