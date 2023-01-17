import { orderBy, where } from 'firebase/firestore'
import useStreamCollection from "./useStreamCollection"
import { useAuthContext } from '../contexts/AuthContext'
//import { useSearchParams, useParams } from 'react-router-dom'

/*
*
NOT this hook THAT NOW IS USED TO FETCH IMAGES BY CATEGORY
*
*/


const useGetImagesByCategory = ( category ) => {


    const { currentUser } = useAuthContext()

    console.log("Selected Cat ", category.toString());
    console.log("UID ", currentUser);

                    const queryRef = options.fetchOnlyCurrentUser && options.categoryId
                        ? query
                    (collectionRef, 
                        where('user', '==', currentUser.uid),
                        where('category', '==', options.categoryId))
                    
                    : query('')
                        console.log('id-->',options.categoryId)
                        console.log('queryRef-->',queryRef)   

	return useStreamCollection('images',       
        where('user', '==', currentUser.uid),
        where ('category', '==', category),
        //orderBy('created', 'desc')
    )
}




export default useGetImagesByCategory