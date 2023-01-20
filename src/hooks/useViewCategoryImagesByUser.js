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
    // create query for collectionRef if true else render nothing
    const queryRef = options.fetchOnlyCurrentUser
                        ? query
                               (collectionRef, 
                                where('user', '==', currentUser.uid),
                                where('category', '==', category))
                    
                        : query('')

   

    const queryKey = ['images', { user: currentUser.uid, category }]	

    // let queryRef;

    // if(!options.categoryId) {
    //         queryRef = query (collectionRef, 
    //         where('user', '==', currentUser.uid),
    //     ) 

    // } else {
    //     queryRef = query
    //     (collectionRef, 
    //         where('user', '==', currentUser.uid),
    //         where('category', '==', options.categoryId)//detta kommer in hit
    //         //where('category', '==', 'tqmuluFvtjESTW88mG3J'),
    //         //orderBy('created', 'desc')
    //     )
    // }
    
    
	// run query for 'images', row 16
	const imagesByCategoryQuery = useFirestoreQueryData(queryKey, queryRef, {
		idField: 'id',
		subscribe: true,
	})

	return imagesByCategoryQuery
}

export default useViewCategoryImagesByUser