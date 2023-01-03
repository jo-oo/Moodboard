import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
//db instance from firebase config file:
import { db } from '../../firebase/config'

const useGetCollection = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
		const getSnapshot = async () => {
			// get reference to collection 'images'
			const ref = collection(db, 'images')
			const snapshot = await getDocs(ref)

            const data = snapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data(),
				}
			})

			setData(data)
            setLoading(false)

			console.log("here is the snapshot of the collection 'images' ", snapshot)
		}
		getSnapshot()
	}, [])

    return (
        data,
        loading
    )
}

export default useGetCollection