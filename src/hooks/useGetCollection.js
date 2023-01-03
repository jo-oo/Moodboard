import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
//db instance from firebase config file:
import { db } from '../../firebase/config'

const useGetCollection = () => {

    useEffect(() => {
		const getSnapshot = async () => {
			// get reference to collection 'images'
			const ref = collection(db, 'images')
			const snapshot = await getDocs(ref)

			console.log("here is the snapshot of the collection 'images' ", snapshot)
		}
		getSnapshot()
	}, [])

    return (
        <div>useGetCollection</div>
    )
}

export default useGetCollection